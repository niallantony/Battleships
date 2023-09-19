import { Ship } from "./ship.js";
import battleshipImage from "../images/battleship.png";

export const SHIP_IMAGES = {
    battleship: battleshipImage,
}

export default (() => {
    let onNext;
    let moveReady = true;

    const drawMainMenu = (singleInitialise, doubleInitialise) => {
        const body = document.querySelector('body');
        const menuPan = document.createElement('div');
        const gameTitle = document.createElement('div');
        gameTitle.classList.add('game-title');
        gameTitle.textContent = 'Battleships!'
        menuPan.appendChild(gameTitle);
        body.appendChild(menuPan);
        const buttonBar = document.createElement('div');
        const startSingle = document.createElement('button');
        const startDouble = document.createElement('button');
        buttonBar.appendChild(startSingle);
        buttonBar.appendChild(startDouble);
        menuPan.appendChild(buttonBar);
        startSingle.textContent = 'Single Player';
        startDouble.textContent = 'Two Player';
        startSingle.addEventListener('click',() => getName(singleInitialise));
        startDouble.addEventListener('click',() => getName((name) => {
            getName((secondName) => {
                doubleInitialise(name,secondName);
            })
        }));
    }

    const getName = (cb) => {
        console.log("getting name")
        const nameDialog = document.createElement('dialog');
        nameDialog.classList.add('get-name');
        const body = document.querySelector('body');
        body.appendChild(nameDialog);
        nameDialog.show();
        const nameForm = document.createElement('form');
        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for','name-input');
        nameLabel.textContent = 'Admiral name: '
        const nameInput = document.createElement('input');
        nameInput.id = 'name-input';
        const nameSubmit = document.createElement('button');
        nameSubmit.textContent = "Submit";
        nameDialog.appendChild(nameForm);
        nameForm.appendChild(nameInput);
        nameForm.appendChild(nameSubmit);
        nameSubmit.classList.add('get-name-submit');
        nameSubmit.addEventListener('click',(e) => {
            e.preventDefault();
            cb(nameInput.value);
            nameDialog.parentNode.removeChild(nameDialog);
        })
    }   

    const shipScreenSetup = () => {
        const body = document.querySelector('body');
        body.innerHTML = '';
        const left = document.createElement('div');
        left.id = 'left';
        const gamearea = document.createElement('div');
        gamearea.id = 'gamearea';
        body.appendChild(gamearea);
        gamearea.appendChild(left);
        const shipbar = document.createElement('div');
        shipbar.id = 'ship-bar';
        body.appendChild(shipbar);
    }

    const gameScreenSetup = () => {
        const body = document.querySelector('body');
        body.innerHTML = '';
        const left = document.createElement('div');
        left.id = 'left';
        const right = document.createElement('div');
        right.id = 'right';
        const gamearea = document.createElement('div');
        gamearea.id = 'gamearea';
        body.appendChild(gamearea);
        gamearea.appendChild(left);
        gamearea.appendChild(right);
        const shipbar = document.createElement('div');
        shipbar.id = 'ship-bar';
        body.appendChild(shipbar);
    }

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
            try {
                const tile = getTarget(e.target.closest('button'));
                if (!moveReady) return;
                moveReady = gameboard.opponent.makeMove(tile, gameboard)
            } catch(err) {
                console.log(err);
            }
        })
    }

    const drawDummyActiveBoard = (gameboard) => {
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
        if (!current.isComp) {
            drawActiveBoard(previous.gameboard);
            drawReconBoard(current.gameboard);
        } else {
            drawDummyActiveBoard(previous.gameboard);
            drawHiddenReconBoard(current.gameboard);
            drawShips(previous.gameboard,previous.gameboard.id)
        }
    }
    
    const renderComputerMove = async (coords,gameboard) => {
        moveReady = false;
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
        moveReady = true;
    }

    const sunkShip = (ship) => {
        console.log(ship.name, ' is a goner')
    }

    const showPlayerResult = async () => {
        const playerResultTimer = await promisify(onNext, 2000);
        return playerResultTimer
    }
    
    const stallComputerMove = async () => {
        const computerFinished = await promisify(onNext, 2000);
        moveReady = true;
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
        // Find the coordinates through the elements position amongst its siblings
        const y = Array.prototype.indexOf.call(board.children,parent);
        const x = Array.prototype.indexOf.call(parent.children,target);
        return [x,y]
    }

    const endGame = () => {
        console.log('Game Over')
    }





    return {
        drawShips,
        gameScreenSetup,
        shipScreenSetup,
        renderComputerMove,
        endGame,
        getTarget,
        refresh,
        sunkShip,
        renderPlayerMove,
        drawMainMenu,
        set onNext(nextTurn) {
            onNext = nextTurn;
        },
    }
})();
