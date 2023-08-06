

export const Player = (gameboard) => {

    const getMove = () => {
        const playerX = prompt("X coordinate");
        const playerY = prompt("Y coordinate");
        return tryMove([playerX,playerY]);
    }

    const tryMove = (coords) => {
        try {
            return gameboard.hitSquare(coords[0],coords[1]);
        } catch (error) {
            return false;
        }
    }

    return {
        getMove,
        tryMove
    }

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
            return gameboard.hitSquare(coords[0],coords[1]);
        } catch(error) {
            return false
        }
    }

    const makeMove = () => {
        let moveTaken = false;
        if (!gameboard.checkForEmpty()) {
            throw new Error("No More Space");
        }
        while (!moveTaken) {
            moveTaken = tryMove(generateRandomCoords());
        }
        return moveTaken;
    }

    return {
        generateRandomCoords,
        tryMove,
        makeMove
    }
}