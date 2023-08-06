export default (() => {

    const nodes = {};

    let playerOne = true;
    
    const drawBoard = (id,player) => {
        const board = document.getElementById(`${id}`);
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

    const getTarget = (button) => {
        if (!button) return;
        const target = button;
        const parent = target.parentNode;
        const board = parent.parentNode.id;
        const y = Array.prototype.indexOf.call(nodes[board],parent);
        const x = Array.prototype.indexOf.call(nodes[board][y].children,target);
        return [x,y]
    }


    const drawShip = (id,ship) => {
        ship.position.forEach((coords) => {
            const x = coords[0];
            const y = coords[1];
            nodes[id][y].children[x].classList.add('ship');
        })
    }

    const drawTurn = (id,result,x,y) => {
            nodes[id][y].children[x].classList.add(result);
    }

    const populateNodes = (id, board) => {
        nodes[id] = board.children
    }

    const consoleNodes = () => {
        console.log(nodes);
    }

    const endGame = () => {
        console.log('Game Over')
    }

    return {
        drawBoard,
        drawShip,
        consoleNodes,
        drawTurn,
        endGame,
        playerOne
    }
})();