import { Ship } from "./ship";

describe("Basic functions and initialisation of ship", () => {


    test("Ship isn't sunk if not hit",() => {
        const newShip = Ship(3);
        expect(newShip.isSunk()).toBe(false);
    })

    test("Ship isn't sunk after one hit", () => {
        const newShip = Ship(3);
        newShip.hit();
        expect(newShip.isSunk()).toBe(false);
    })

    test("Ship is sunk after 3 hits", () => {
        const newShip = Ship(3);
        newShip.hit();
        newShip.hit();
        newShip.hit();
        expect(newShip.isSunk()).toBe(true);
    })


})