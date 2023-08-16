import Screen from "./screen.js";
import { Game } from "../index.js";

export const Player = (id,gameboard) => {

    const makeMove = (tile) => {
        const result = playTile(tile);
        if (!result) return
        Screen.drawTurn(id,result,tile[0],tile[1])
        Game.turnOver();
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
            return result;
    }

    const makeMove = () => {
        let moveTaken = false;
        let coords;
        if (!gameboard.checkForEmpty()) {
            throw new Error("No More Space");
        }
        while (!moveTaken) {
            coords = generateRandomCoords();
            moveTaken = tryMove(coords);
        }
        Screen.drawTurn("player-two",moveTaken,coords[0],coords[1]);
        Game.turnOver();
        return moveTaken;
    }

    const educatedMove = () => {

    }

    return {
        id,
        gameboard,
        isComp:true,
        generateRandomCoords,
        tryMove,
        makeMove
    }
}