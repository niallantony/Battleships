export const Ship = (length) => {
    let hitCounter = 0;

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
        orientation:null,
    }
}