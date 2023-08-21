import { Ship } from "./ship.js";
import battleshipImage from "../images/battleship.png";

const SHIP_IMAGES = {
    battleship: battleshipImage,
}

export default (() => {


    let playerOne = true;

    const drawActiveBoard = (gameboard) => {
        const zoneDom = document.getElementById("left")
        const board = document.createElement('div');
        board.id = gameboard.id;
        zoneDom.appendChild(board);
        const size = gameboard.getLength();
        for (let i = 0 ; i < size ; i++ ) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('row');
            board.appendChild(rowContainer);
            for (let j = 0 ; j < size ; j++ ) {
                const tile = document.createElement('button');
                tile.classList.add('tile');
                tile.classList.add(gameboard.squareStatus(j,i));
                rowContainer.appendChild(tile);
            }
        }
        board.addEventListener("click", e => {
            const tile = getTarget(e.target.closest('button'));
            gameboard.opponent.makeMove(tile)
        })
    }

    const drawReconBoard = (gameboard) => {
        const zoneDom = document.getElementById("right");
        const board = document.createElement('div');
        board.id = gameboard.id;
        zoneDom.appendChild(board);
        const size = gameboard.getLength();
        for (let i = 0 ; i < size ; i++ ) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('row');
            board.appendChild(rowContainer);
            for (let j = 0 ; j < size ; j++ ) {
                const tile = document.createElement('button');
                tile.classList.add('tile');
                tile.classList.add(gameboard.squareStatus(j,i));
                rowContainer.appendChild(tile);
            }
        }
        drawShips(gameboard,gameboard.id);
    }

    const drawHiddenReconBoard = (gameboard) => {
        const zoneDom = document.getElementById("right");
        const board = document.createElement('div');
        board.id = gameboard.id;
        zoneDom.appendChild(board);
        const size = gameboard.getLength();
        //draw the tiles to maintain size consistency
        for (let i = 0 ; i < size ; i++ ) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('row');
            board.appendChild(rowContainer);
            for (let j = 0 ; j < size ; j++ ) {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                rowContainer.appendChild(tile);
            }
        }
        const hidden = document.createElement('div');
        hidden.textContent = "Data Encrypted..."
        hidden.classList.add('hidden-board');
        board.appendChild(hidden)
    }

    const refresh = (current,previous) => {
        const activeArea = document.getElementById('left');
        const reconArea = document.getElementById('right');
        activeArea.innerHTML = '';
        reconArea.innerHTML = '';
        drawActiveBoard(current.gameboard);
        if (!current.isComp) {
            drawReconBoard(previous.gameboard);
        } else {
            drawHiddenReconBoard(previous.gameboard);
            drawShips(current.gameboard,current.gameboard.id)
        }
    }

    const instantShowResult = (gameboard,coordscell) => {
        const activeArea = document.getElementById('left');
        activeArea.innerHTML = '';
        drawActiveBoard(gameboard);
    }
    
    const renderComputerMove = async (coords,gameboard) => {
        const activeZone = document.getElementById("left").querySelector('div');
        const row = activeZone.children[coords[1]];
        const cell = row.children[coords[0]];
        cell.classList.add('attack');
        const removeAttackMarker = await promisify(() => cell.classList.remove('attack'),1000);
        removeAttackMarker();
        //get result of attack
        cell.classList.add(gameboard.squareStatus(coords[0],coords[1]));
        const stallNextTurn = await stallComputerMove();
        stallNextTurn();
    }

    const renderPlayerMove = async (coords,gameboard) => {
        const activeZone = document.getElementById("left").querySelector('div');
        const row = activeZone.children[coords[1]];
        const cell = row.children[coords[0]];
        cell.classList.add('attack');
        const removeAttackMarker = await promisify(() => cell.classList.remove('attack'),1000);
        removeAttackMarker();
        //get result of attack
        cell.classList.add(gameboard.squareStatus(coords[0],coords[1]));
        const showPlayersTurn = await showPlayerResult();
        showPlayersTurn();
    }

    const sunkShip = (ship) => {
        console.log(ship.name, ' is a goner')
    }

    const showPlayerResult = async () => {
        const playerResultTimer = await promisify(f(), 2000);
        return playerResultTimer
    }
    
    const stallComputerMove = async () => {
        const computerFinished = await promisify(f(), 2000);
        return computerFinished
    }
    
    const promisify = (callback,timer) => {
        return new Promise(resolve => setTimeout(() => resolve(callback), timer));
    }
    

    const drawShips = (gameboard,onboard) => {
        const ships = gameboard.getShips();
        const playzone = document.getElementById(onboard);
        ships.forEach((ship) => {
            const dimensions = calculateScreenPosition(playzone, gameboard.getLength(), ship)
            playzone.appendChild(drawShip(dimensions));
        })
    }

    const drawShip = (dimensions) => {
        const ship = document.createElement('div');
        ship.classList.add('ship-marker');
        ship.setAttribute('style',`top:${dimensions.top};left:${dimensions.left};width:${dimensions.length};height:${dimensions.height}`);
        return ship
    }

    const calculateScreenPosition = (zone, scale ,ship) => {
        const unit = zone.offsetWidth / scale;
        const left = Math.floor(ship.position[0][0] * unit)+'px';
        const top = Math.floor(ship.position[0][1] * unit)+'px';
        const length = ship.orientation ? ship.length * unit : unit ;
        const height = ship.orientation ? unit : ship.length * unit ;
        return {
            top,
            left,
            length:length+'px',
            height:height+'px'
        }
    }

    const getTarget = (button) => {
        if (!button) return;
        const target = button;
        const parent = target.parentNode;
        const board = document.getElementById(parent.parentNode.id);
        console.log(board,parent,target);
        // Find the coordinates through the elements position amongst its siblings
        const y = Array.prototype.indexOf.call(board.children,parent);
        const x = Array.prototype.indexOf.call(parent.children,target);
        return [x,y]
    }

    const endGame = () => {
        console.log('Game Over')
    }

    const drawPlacementBoard = (gameboard) => {
        const zoneDom = document.getElementById("left")
        const board = document.createElement('div');
        board.id = gameboard.id;
        zoneDom.appendChild(board);
        const size = gameboard.getLength();
        for (let i = 0 ; i < size ; i++ ) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('row');
            board.appendChild(rowContainer);
            for (let j = 0 ; j < size ; j++ ) {
                const tile = document.createElement('button');
                tile.classList.add('tile');
                tile.setAttribute('style','position:relative;')
                tile.classList.add(gameboard.squareStatus(j,i));
                rowContainer.appendChild(tile);
            }
        }
    }

    const renderShipButtons = () => {
        const shipBar = document.getElementById('ship-bar');
    }

    const shipPlacement = (button,horizontal = true) => {
        const shipTemplate = Ship(button.id)
        shipTemplate.orientation = horizontal;
        const tiles = document.querySelectorAll('.tile');
        const template = document.createElement('button');
        template.classList.add('placeholder');
        template.id = button.id
        template.style.position = 'absolute';
        template.style.top = '0px';
        template.style.left = '0px';
        template.style.backgroundImage = `url(${SHIP_IMAGES[button.id]}`;
        const board = document.getElementById('left');
        const hoverEvent = hoverImage(board,template);
        board.appendChild(template);
        rotateShip(template,true,tiles[0].offsetWidth,shipTemplate.length);
        tiles.forEach((tile) => {
            if (isOutOfBounds(horizontal,shipTemplate.length,tile)) return;
            tile.addEventListener('click',(e) => {
                board.removeEventListener('mouseover',hoverEvent);
                placeTemplate(e.target.closest('.tile'),template);
            });
        });
    }

    const isOutOfBounds = (orientation,length, tile) => {
        if (orientation) {
            const row = tile.parentNode.children;
            const index = Array.prototype.indexOf.call(row,tile);
            if ((length + index) > row.length) return true;
            return false;
        } else {
            const columns = tile.parentNode.parentnode.children;
            const index = Array.prototype.indexOf.call(columns,tile.parentNode);
            if ((length + index) > columns.length) return true;
            return false;
        }
    }

    const rotateShip = (image,orientation,unit,length) => {
        const width = orientation ? (unit*length)+'px' : unit+'px';
        const height = orientation ? unit +'px': (unit*length)+'px';
        image.style.width = width;
        image.style.height = height;
    }

    const moveShip = (template) => {
        template.parentNode.removeChild(template);
        shipPlacement(template);
    }

    const placeTemplate = (tile,template) => {
        const coords = getTarget(tile);
        const position = calculateTemplatePosition(tile.offsetWidth,coords);
        template.style.top = position.top;
        template.style.left = position.left;
        template.style.zIndex = 10;
        template.addEventListener('click',(e) => moveShip(e.target.closest('.placeholder')));
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach((tile) => {
            tile.replaceWith(tile.cloneNode(true));
        })
    }

    const calculateTemplatePosition = (unit,coords) => {
        const left = (coords[0]*unit)+'px';
        const top = (coords[1]*unit)+'px';
        return {
            left,
            top
        }
    }

    // const hoverImage = (element,img) => {
    //     element.addEventListener('mouseenter',(e) => e.target.appendChild(img));
    //     element.addEventListener('mouseleave',(e) => e.target.removeChild(img));
    // }

    const hoverImage = (element,img) => {
        const event = element.addEventListener('mouseover',(e) => {
            const coords = getTarget(e.target.closest('.tile'));
            const pos = calculateTemplatePosition(e.target.closest('.tile').offsetWidth,coords);
            img.style.top = pos.top;
            img.style.left = pos.left;
        })
        return event;
    }


    return {
        drawShips,
        renderComputerMove,
        renderComputerMove,
        endGame,
        refresh,
        sunkShip,
        renderPlayerMove,
        shipPlacement,
        drawPlacementBoard,
        playerOne
    }
})();