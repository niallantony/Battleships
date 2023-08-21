export const Ship = (name = null) => {
    let hitCounter = 0;

    let orientation = false;

    const rotate = () => {
        orientation = !orientation;
    }

    const SHIP_SIZES = {
        carrier: 5,
        battleship: 4,
        cruiser: 3,
        submarine: 3,
        destroyer: 2,
    }

    const hit = () => {
        hitCounter++
    }

    const isSunk = () => {
        return (hitCounter >= length)
    }

    return {
        hit,
        isSunk,
        length,
        position:[],
        get orientation() {
            return orientation
        },
        rotate,
        get name() {
            const arrayedName = name.split('');
            arrayedName[0].toUpperCase();
            return arrayedName.join('');
        },
        get length() {
            return SHIP_SIZES[name];
        }
    }
}
