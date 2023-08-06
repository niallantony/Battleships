export default (() => {
    
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
    }

    return {
        drawBoard
    }
})();