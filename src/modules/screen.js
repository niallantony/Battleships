import {Game} from "../index.js";

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

    const refresh = (current,previous) => {
        const activeArea = document.getElementById('left');
        const reconArea = document.getElementById('right');
        activeArea.innerHTML = '';
        reconArea.innerHTML = '';
        drawActiveBoard(current.gameboard);
        drawReconBoard(previous.gameboard)
    }

    const drawShips = (gameboard,onboard) => {
        const ships = gameboard.getShips();
        const playzone = document.getElementById(onboard);
        ships.forEach((ship) => {
            const dimensions = calculateScreenPosition(playzone, gameboard.getLength(), ship)
            playzone.appendChild(drawShip(dimensions));
        })
    }

    const renderComputerMove = async (coords) => {
        const activeZone = document.getElementById("left").querySelector('div');
        const row = activeZone.children[coords[1]];
        const cell = row.children[coords[0]];
        cell.classList.add('attack');
        console.log(cell);
        const showComputersTurn = await stallComputerMove();
        showComputersTurn();
    }

    const stallComputerMove = async () => {
        const computerFinished = await promisify(Game.turnOver, 2000);
        return computerFinished
    }

    const promisify = (callback,timer) => {
        return new Promise(resolve => setTimeout(() => resolve(callback), timer));
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
        renderComputerMove,
        endGame,
        refresh,
        playerOne
    }
})();