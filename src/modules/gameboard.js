export const Gameboard = (size) => {
    const ships = [];
    const turns = [];
    const Square = (y,x) => {
        return {
            ship: null,
            hit: false,
            coords: [x,y],
        }
    }

    const buildRow = (index,x) => {
        const columns = [];
        for (let i = 0 ; i < x ; i++) {
            columns.push(Square(i,index))
        };
        return columns;
    }

    const buildSquare = (y) => {
        const rows = [];
        for (let i = 0 ; i < y ; i++ ) {
            rows.push(buildRow(i,y));
        }
        return rows;
    }

    const getLength = () => {
        return size;
    }

    const getSquare = (x,y) => {
        return gameSquare[x][y];
    }

    const gameSquare = buildSquare(size);

    const hitSquare = (x,y) => {
        if (gameSquare[x][y].hit) throw new Error("Square already hit");
        gameSquare[x][y].hit = true;
        turns.push([x,y]);
        if (gameSquare[y][x].ship) {
            gameSquare[y][x].ship.hit();
            return gameSquare[y][x].ship;
        } else {
            return true;
        }
    }

    
    const playTile = (tile) => {
        if (!tile) return;
        try {
            const hit = hitSquare(tile[0],tile[1]);
            if (hit === true) {
                return 'miss';
            } else {
                return 'hit';
            }
        } catch(error) {
            console.log(error);
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
            gameSquare[coords[0]][coords[1]].ship = null;
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


    return {
        getLength,
        hitSquare,
        placeShip,
        clearShip,
        checkForAllSunk,
        getSquare,
        checkForEmpty,
        playTile,
        owner:null,
    }

};