import Screen from "./screen.js";

export const Player = (id,gameboard) => {

    const makeMove = (tile) => {
        const result = playTile(tile);
        if (!result) return
        Screen.drawTurn(id,result,tile[0],tile[1])
        changePlayer();
    }

    
    const playTile = (tile) => {
        if (!tile) return;
        try {
            const hit = gameboard.hitSquare(tile[0],tile[1]);
            if (hit === true) {
                return 'miss';
            } else {
                return hit;
            }
        } catch(error) {
            console.log(error);
        }
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

    let recentHit = false;

    let currentSuccess = {}

    const SQUARES_AROUND = (x,y) => {
        return {
            up:[x,y-1],
            right:[x+1,y],
            down:[x,y+1],
            left:[x-1,y]
        }
    }

        
    const playTile = (tile) => {
        if (!tile) return;
        try {
            const hit = gameboard.hitSquare(tile[0],tile[1]);
            if (hit === true) {
                return 'miss';
            } else {
                return hit;
            }
        } catch(error) {
            console.log(error);
        }
    }

    const generateRandomCoords = () => {
        const boundary = gameboard.getLength();
        const ranX = Math.floor(Math.random()*boundary);
        const ranY = Math.floor(Math.random()*boundary);
        return [ranX,ranY];
    }

    const tryMove = (coords) => {
            const result = playTile(coords);
            if (typeof result === 'object') {
                currentSuccess = Object.assign({coords:coords},result);
                console.log(currentSuccess);
                recentHit = true;
            }
            // move this out of player module into screen module
            // if (result) Screen.drawTurn(id,result,coords[0],coords[1]);
            return result;
    }

    const makeMove = () => {
        let moveTaken = false;
        if (!gameboard.checkForEmpty()) {
            throw new Error("No More Space");
        }
        if (recentHit) {

        }
        while (!moveTaken) {
            moveTaken = tryMove(generateRandomCoords());
        }
        //this also goes in game
        // if (gameboard.checkForAllSunk()) {
        //     Screen.endGame();
        //     return;
        // }
        return moveTaken;
    }

    const educatedMove = () => {

    }

    return {
        id,
        gameboard,
        generateRandomCoords,
        tryMove,
        makeMove
    }
}