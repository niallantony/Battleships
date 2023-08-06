import { Gameboard } from "./gameboard";

const testBoard = Gameboard(10)

describe("Testing initialisation of the game square", () => {

    test("Returns an array", () => {
        expect(testBoard.gameSquare).toBeInstanceOf(Array);
    })

    test("Returns an board with 10 rows", () => {
        expect(testBoard.gameSquare.length).toBe(10);
    })

    test("Returns a board with 10 rows, each of length 10", () => {
        expect(testBoard.gameSquare[0].length).toBe(10);
        expect(testBoard.gameSquare[5].length).toBe(10);
        expect(testBoard.gameSquare[9].length).toBe(10);
    })

    test("Array is populated with squares", () => {
        expect(testBoard.gameSquare[0][0].ship).toBeDefined();
        expect(testBoard.gameSquare[0][0].hit).toBeDefined();
        expect(testBoard.gameSquare[0][0].coords).toEqual([0,0]);
        expect(testBoard.gameSquare[3][6].ship).toBeDefined();
        expect(testBoard.gameSquare[3][6].hit).toBeDefined();
        expect(testBoard.gameSquare[3][6].coords).toEqual([3,6]);
    })

})

describe("Test hit methods of the gameboard", () => {

    beforeAll(() => {
        testBoard.hitSquare(4,4);
    })

    test("Hit square registers as hit", () => {
        expect(testBoard.gameSquare[4][4].hit).toBe(true);
    })

    test("Cannot hit same square twice", () => {
        expect(() => testBoard.hitSquare(4,4)).toThrow("Square already hit");
    })

    describe("Hit methods with a ship present", () => {

        const mockHit = jest.fn();

        const mockIsSunk = jest.fn();

        mockIsSunk.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValueOnce(true);

        const testShip = {
                            hit: mockHit,
                            isSunk: mockIsSunk,
                            length:4,
                            position:[]
                        }
    
        beforeAll(() => {
            return testBoard.placeShip(testShip,2,2,true);
        });
    
        afterAll(() => {
            testBoard.clearShip(testShip);
        })

        test("Ship's methods are accessible", () => {
            expect(() => testBoard.gameSquare[2][2].ship.hit()).toBeDefined();
            expect(() => testBoard.gameSquare[2][2].ship.length).toBeDefined();
            expect(() => testBoard.gameSquare[2][2].ship.isSunk()).toBeDefined();
        })

        test("Can hit a ship through hitting a square", () => {
            testBoard.hitSquare(2,2);
            expect(mockHit.mock.calls).toHaveLength(1);
        })

        test("Ship doesn't get hit twice", () => {
            expect(() => {
                testBoard.hitSquare(2,2)
            }).toThrow();
            expect(mockHit.mock.calls).toHaveLength(1);
        })

        test("Is sunk function has be called", () => {
            expect(mockIsSunk).toHaveReturned();
        })

        test("Ship is sunk after all squares hit", () => {
            testBoard.hitSquare(2,3);
            testBoard.hitSquare(2,4);
            testBoard.hitSquare(2,5);
            expect(mockIsSunk.mock.calls).toHaveLength(4);
            expect(mockHit.mock.calls).toHaveLength(4);
            expect(mockIsSunk.mock.results[3].value).toBe(true);
        })

    })

});

describe("Test placements of ship", () => {

    const testShip = {
                        length:4,
                        position:[]
                    }

    beforeEach(() => {
        return testBoard.placeShip(testShip,2,2,true);
    });

    afterEach(() => {
        testBoard.clearShip(testShip);
    })

    test("Place ship doesn't throw an error",() => {
        expect(testBoard.placeShip).toBeInstanceOf(Function);
    });

    test("Ship is sitting in origin square", () => {
        expect(testBoard.gameSquare[2][2].ship).toBeInstanceOf(Object);
        expect(testBoard.gameSquare[2][2].ship).toMatchObject(testShip);
    })


    test("Ship is sitting in all squares", () => {
        expect(testBoard.gameSquare[2][2].ship).toMatchObject(testShip);
        expect(testBoard.gameSquare[2][3].ship).toMatchObject(testShip);
        expect(testBoard.gameSquare[2][4].ship).toMatchObject(testShip);
        expect(testBoard.gameSquare[2][5].ship).toMatchObject(testShip);
    })

    test("Ship has position logged", () => {
        expect(testShip.position).toEqual([[2,2],[2,3],[2,4],[2,5]])
    })

    test("Clear ship clears the ship in question", () => {
        testBoard.clearShip(testShip);
        expect(testBoard.gameSquare[2][2].ship).toBe(null);
        expect(testBoard.gameSquare[2][3].ship).toBe(null);
        expect(testBoard.gameSquare[2][4].ship).toBe(null);
        expect(testBoard.gameSquare[2][5].ship).toBe(null);
        //Place it again so the afterEach can remove it
        testBoard.placeShip(testShip,2,2,true);
    })

    test("Ship array contains ships", () => {
        expect(testBoard.ships).toEqual([testShip]);
        const anotherShip = {
            length:2,
            position:[]
        };
        testBoard.placeShip(anotherShip,5,6,false);
        expect(testBoard.ships).toEqual([testShip,anotherShip]);
    })

    test("Ship array changes when ship removed", () => {
        const anotherShip = testBoard.ships[0];
        expect(testBoard.ships[1]).toBe(testShip);
        testBoard.clearShip(anotherShip);
        expect(testBoard.ships).toEqual([testShip]);
    })

    test("Unable to place a ship out of bounds horizontally", () => {
        expect(() => testBoard.placeShip(testShip,9,2,true)).toThrow("Ship out of bounds");
    })

    test("Unable to place a ship out of bounds vertically", () => {
        expect(() => testBoard.placeShip(testShip,2,9,false)).toThrow("Ship out of bounds");
    })

    test("Unable to place ship in an already occupied space", () => {
        expect(() => testBoard.placeShip(testShip,3,1,false)).toThrow("Space occupied");
    })

})
