import Screen from "./screen.js";

export const Player = (id,gameboard) => {

    const makeMove = (tile) => {
        const result = gameboard.playTile(tile);
        if (!result) return
        Screen.drawTurn(id,result,tile[0],tile[1])
        changePlayer();
    }

    const changePlayer = () => {
        if (gameboard.checkForAllSunk()) {
            Screen.endGame();
            return;
        }
        gameboard.owner.makeMove();
    }


    return {
        playing: false,
        id,
        gameboard,
        makeMove
    }

}

export const Computer = (id,gameboard) => {

    const generateRandomCoords = () => {
        const boundary = gameboard.getLength();
        const ranX = Math.floor(Math.random()*boundary);
        const ranY = Math.floor(Math.random()*boundary);
        return [ranX,ranY];
    }

    const tryMove = (coords) => {
            const result = gameboard.playTile(coords);
            if (result) Screen.drawTurn(id,result,coords[0],coords[1]);
            return result;
    }

    const makeMove = () => {
        let moveTaken = false;
        if (!gameboard.checkForEmpty()) {
            throw new Error("No More Space");
        }
        while (!moveTaken) {
            moveTaken = tryMove(generateRandomCoords());
        }
        if (gameboard.checkForAllSunk()) {
            Screen.endGame();
            return;
        }
        return moveTaken;
    }

    return {
        id,
        gameboard,
        generateRandomCoords,
        tryMove,
        makeMove
    }
}