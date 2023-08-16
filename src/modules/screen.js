export default (() => {

    const nodes = {};

    let playerOne = true;
    
    const drawBoard = (zone,id,player) => {
        const zoneDom = document.getElementById(`${zone}`)
        const board = document.createElement('div');
        board.id = id;
        zoneDom.appendChild(board);
        const size = player.gameboard.getLength();
        for (let i = 0 ; i < size ; i++ ) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('row');
            board.appendChild(rowContainer);
            for (let j = 0 ; j < size ; j++ ) {
                const tile = document.createElement('button');
                tile.classList.add('tile');
                rowContainer.appendChild(tile);
            }
        }
        populateNodes(id,board);
        board.addEventListener("click", e => {
            if (player.id !== id) return;
            const tile = getTarget(e.target.closest('button'));
            player.makeMove(tile)
        })
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
        const board = parent.parentNode.id;
        const y = Array.prototype.indexOf.call(nodes[board],parent);
        const x = Array.prototype.indexOf.call(nodes[board][y].children,target);
        return [x,y]
    }


    // const drawShip = (id,ship) => {
    //     ship.position.forEach((coords) => {
    //         const x = coords[0];
    //         const y = coords[1];
    //         nodes[id][y].children[x].classList.add('ship');
    //     })
    // }

    const drawTurn = (id,result,x,y) => {
        if (typeof result !== 'string') result = 'hit';
        nodes[id][y].children[x].classList.add(result);
    }

    const populateNodes = (id, board) => {
        nodes[id] = board.children
    }

    const endGame = () => {
        console.log('Game Over')
    }

    return {
        drawBoard,
        drawShips,
        drawTurn,
        endGame,
        playerOne
    }
})();