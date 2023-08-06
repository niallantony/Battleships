

export const Player = () => {

}

export const Computer = (gameboard) => {

    const generateRandomCoords = () => {
        const boundary = gameboard.getLength();
        const ranX = Math.floor(Math.random()*boundary);
        const ranY = Math.floor(Math.random()*boundary);
        return [ranX,ranY];
    }

    const tryMove = (coords) => {
        try {
            gameboard.hitSquare(coords[0],coords[1]);
            return true;
        } catch(error) {
            // console.warn(error);
            return false;
        }
    }

    const makeMove = () => {
        let moveTaken = false;
        while (!moveTaken) {
            moveTaken = tryMove(generateRandomCoords());
        }
    }

    return {
        generateRandomCoords,
        tryMove,
        makeMove
    }
}