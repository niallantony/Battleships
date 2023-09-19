import Screen from "./screen.js";
import { Ship } from "./ship.js";

export const Player = (id,gameboard) => {

    
    const makeMove = (tile, opponentBoard) => {
        if (!tile) throw new Error("Not a tile.");
        try {
            const move = opponentBoard.hitSquare(tile[0],tile[1]);
            if (typeof move === 'object' && move.isSunk()) Screen.sunkShip(move); 
            Screen.renderPlayerMove(tile,opponentBoard);
            return false;
        } catch(error) {
            console.log(error);
            return true;
        }
    }


    return {
        playing: false,
        isComp: false,
        id,
        gameboard,
        makeMove
    }

}

export const Computer = (id,gameboard) => {

    let currentSuccess = [];

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

    const makeMove = () => {
        if (currentSuccess.length) {
            educatedMove();
        } else {
            dumbMove();
        }
    }

    const dumbMove = () => {
        let moveTaken = false;
        let coords;
        if (!gameboard.opponent.gameboard.checkForEmpty()) {
            throw new Error("No More Space");
        }
        while (!moveTaken) {
            coords = generateRandomCoords();
            moveTaken = playTile(coords);
        }
        if (typeof moveTaken === 'object') {
            populateCurrentSuccess(coords,moveTaken);
        }
        Screen.renderComputerMove(coords,gameboard.opponent.gameboard);
    }

    const targetShip = (coords, ship) => {
        const potentialMoves = [[0,1],[0,-1],[1,0],[-1,0]];

        const nextMove = () => {
            const randomChoice = Math.floor(Math.random() * potentialMoves.length);
            const heading = potentialMoves.splice(randomChoice,1).flat();
            const move = [coords[0] + heading[0],coords[1] + heading[1]];
            return  {
                    attack:move,
                    heading:heading
                    }
        };

        const recalculatePotentialMoves = (heading,attack) => {
            const newHeading = [coords[0] - attack[0],coords[1] - attack[1]];
            const axis = heading[0] != 0 ? 0 : 1 ;
            newHeading[axis] = heading[axis] > 0 ? heading[axis]+1 : heading[axis]-1;
            const stillValid = potentialMoves.filter(heading => heading[axis] != 0);
            stillValid.push(newHeading);
            potentialMoves.length = 0;
            stillValid.forEach(coord => potentialMoves.push(coord));
        };

        return {
            coords,
            target:ship,
            potentialMoves,
            nextMove,
            recalculatePotentialMoves
            }
    }


    const populateCurrentSuccess = (coords, ship) => {
        currentSuccess.push(targetShip(coords,ship));
    }

    const educatedMove = () => {
        let moveTaken = false;
        let coords;
        const currentTarget = currentSuccess[0];
        if (!gameboard.opponent.gameboard.checkForEmpty()) {
            throw new Error("No More Space");
        }
        while (!moveTaken) {
            coords = currentTarget.nextMove();
            console.log("Playing : ",coords);
            moveTaken = playTile(coords.attack);
        }
        if (typeof moveTaken === 'object' && moveTaken.isSunk()) {
            console.log("Deleting: ", currentSuccess[0]);
            currentSuccess.shift();
        } else if (typeof moveTaken === 'object' && moveTaken === currentTarget.target) {
            currentTarget.recalculatePotentialMoves(coords.heading,coords.attack)
        } else if (typeof moveTaken === 'object') {
            populateCurrentSuccess(coords.attack,moveTaken)
        }
        Screen.renderComputerMove(coords.attack,gameboard.opponent.gameboard);
    }

    return {
        id,
        gameboard,
        isComp:true,
        generateRandomCoords,
        makeMove,
        place
    }
}