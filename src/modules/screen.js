export default (() => {

    const nodes = {};
    
    const drawBoard = (id,gameboard) => {
        const board = document.getElementById(`${id}-zone`);
        const size = gameboard.getLength();
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
    }

    const drawShip = (id,ship) => {
        ship.position.forEach((coords) => {
            const x = coords[0];
            const y = coords[1];
            nodes[id][y].children[x].classList.add('ship');
        })
    }

    const populateNodes = (id, board) => {
        nodes[id] = board.children
    }

    const consoleNodes = () => {
        console.log(nodes);
    }

    return {
        drawBoard,
        drawShip,
        consoleNodes
    }
})();