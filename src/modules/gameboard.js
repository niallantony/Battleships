export const Gameboard = (size,id = null) => {
    const ships = [];
    const turns = [];
    const Square = (x,y) => {
        return {
            ship: null,
            hit: false,
            coords: [x,y],
        }
    }

    const buildRow = (index) => {
        const columns = [];
        for (let i = 0 ; i < size ; i++) {
            columns.push(Square(i,index))
        };
        return columns;
    }

    const buildSquare = () => {
        const rows = [];
        for (let i = 0 ; i < size ; i++ ) {
            rows.push(buildRow(i));
        }
        return rows;
    }

    const getLength = () => {
        return size;
    }

    const getSquare = (x,y) => {
        return gameSquare[y][x];
    }

    const squareStatus = (x,y) => {
        if (gameSquare[y][x].hit && gameSquare[y][x].ship) return 'hit';
        if (gameSquare[y][x].hit) return 'miss';
        return 'empty'
    }

    const getShips = () => {
        return ships;
    }

    const gameSquare = buildSquare(size);

    const hitSquare = (x,y) => {
        if (!gameSquare[y] || !gameSquare[y][x]) throw new Error("Out of bounds");
        if (gameSquare[y][x].hit) throw new Error("Square already hit");
        gameSquare[y][x].hit = true;
        turns.push([x,y]);
        if (gameSquare[y][x].ship) {
            gameSquare[y][x].ship.hit();
            return gameSquare[y][x].ship;
        } else {
            return true;
        }
    }



    const checkForEmpty = () => {
        if (turns.length < (size*size)) return true;
        return false;
    }

    const placeShip = (ship,x,y,horizontal) => {
        const axis = horizontal ? x : y ;
        if (!checkBoundaries(axis,ship.length)) throw new Error("Ship out of bounds");
        if (!checkForShips(ship.length,x,y,horizontal)) throw new Error("Space occupied");
        ship.orientation = horizontal;
        ships.push(ship);
        for ( let i = 0 ; i < ship.length ; i++) {
            if (horizontal) {
                gameSquare[y][x+i].ship = ship;
                ship.position.push(gameSquare[y][x+i].coords);
            } else {
                gameSquare[y+i][x].ship = ship;
                ship.position.push(gameSquare[y+i][x].coords);
            }
        };
    }

    const clearShip = (ship) => {
        for(let i = 0 ; i < ship.length; i++) {
            const coords = ship.position.pop();
            gameSquare[coords[1]][coords[0]].ship = null;
        }
        ships.splice(ships.indexOf(ship),1);
    }

    const checkForShips = (length,x,y,horizontal) => {
        //Builds an array of spaces the ship will occupy
        const range = [];
        for (let i = 0 ; i < length ; i++) {
            if (horizontal) {
                range.push(gameSquare[y][x+i].ship);
            } else {
                range.push(gameSquare[y+i][x].ship);
            }
        }
        //Returns true if all are empty
        return range.every(ship => ship === null);
    }


    const checkBoundaries = (axis,length) => {
        return axis + length > size ? false : true; 
    }

    const checkForAllSunk = () => {
        const allCondition = []
        ships.forEach((ship) => allCondition.push(ship.isSunk()));
        return allCondition.every(condition => condition === true);
    }

    const clearAll = () => {
        for (let i = 0 ; i < ships.length ; i++ ) {
            const cur = ships.pop();
            cur.position.forEach((coord) => {
                gameSquare[coord[1]][coord[0]].ship = null;
            })
        }
    }


    return {
        getLength,
        hitSquare,
        placeShip,
        clearShip,
        checkForAllSunk,
        getSquare,
        checkForEmpty,
        getShips,
        clearAll,
        squareStatus,
        opponent:null,
        id,
    }

};