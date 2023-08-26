import Screen from "./screen.js";
import { Ship } from "./ship.js";

export const Player = (id,gameboard) => {

    
    const makeMove = (tile, opponentBoard) => {
        if (!tile) return;
        try {
            const move = opponentBoard.hitSquare(tile[0],tile[1]);
            if (typeof move === 'object' && move.isSunk()) Screen.sunkShip(move); 
            Screen.renderPlayerMove(tile,opponentBoard);
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

    const makeShips = () => {
        return {
            carrier: Ship('carrier'),
            battleship: Ship('battleship'),
            cruiser: Ship('cruiser'),
            submarine: Ship('submarine'),
            destroyer: Ship('destroyer'),
        }
    }

    const SQUARES_AROUND = (x,y) => {
        return {
            up:[x,y-1],
            right:[x+1,y],
            down:[x,y+1],
            left:[x-1,y]
        }
    }

    const place = () => {
        const ships = makeShips();
        Object.keys(ships).forEach((ship) => {
            let placed = false;
            while (!placed) {
                let x = Math.floor(Math.random() * gameboard.getLength());
                let y = Math.floor(Math.random() * gameboard.getLength());
                let orientation = Math.floor(Math.random() *2) ? true : false ;
                try {
                    gameboard.placeShip(ships[ship],x,y,orientation);
                    placed = true;
                } catch(err) {
                    console.log(err);
                    console.log("Cannot place at: ", x, y, " with ", orientation," orientation.");
                }
            }
        })
    }

        
    const playTile = (tile) => {
        if (!tile) return;
        try {
            const hit = gameboard.opponent.gameboard.hitSquare(tile[0],tile[1]);
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
        if (!gameboard.opponent.gameboard.checkForEmpty()) {
            throw new Error("No More Space");
        }
        while (!moveTaken) {
            coords = generateRandomCoords();
            moveTaken = tryMove(coords);
        }
        Screen.renderComputerMove(coords,gameboard.opponent.gameboard);
    }

    const educatedMove = () => {

    }

    return {
        id,
        gameboard,
        isComp:true,
        generateRandomCoords,
        tryMove,
        makeMove,
        place
    }
}