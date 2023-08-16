import { Gameboard } from "./gameboard";

const testBoard = Gameboard(10);

const biggerBoard = Gameboard(20);

describe("Testing initialisation of the game square", () => {

    test("Returns an board with 10 rows", () => {
        expect(testBoard.getSquare(0,9)).toBeDefined();
    })

    test("Returns a board with 10 rows, each of length 10", () => {
        expect(testBoard.getSquare(0,9)).toBeDefined();
        expect(testBoard.getSquare(5,9)).toBeDefined();
        expect(testBoard.getSquare(9,9)).toBeDefined();
    })

    test("Board dimensions can be set", () => {
        expect(biggerBoard.getSquare(0,19)).toBeDefined();
        expect(biggerBoard.getSquare(11,19)).toBeDefined();
        expect(biggerBoard.getSquare(19,19)).toBeDefined();
    })

    test("Array is populated with squares", () => {
        expect(testBoard.getSquare(0,0).ship).toBeDefined();
        expect(testBoard.getSquare(0,0).hit).toBeDefined();
        expect(testBoard.getSquare(0,0).coords).toEqual([0,0]);
        expect(testBoard.getSquare(3,3).ship).toBeDefined();
        expect(testBoard.getSquare(3,3).hit).toBeDefined();
        expect(testBoard.getSquare(3,6).coords).toEqual([3,6]);
    })

})

describe("Test hit methods of the gameboard", () => {

    beforeAll(() => {
        testBoard.hitSquare(4,4);
    })

    test("Hit square registers as hit", () => {
        expect(testBoard.getSquare(4,4).hit).toBe(true);
    })

    test("Cannot hit same square twice", () => {
        expect(() => testBoard.hitSquare(4,4)).toThrow("Square already hit");
    })

    test("Cannot hit out of bounds", () => {
        expect(() => testBoard.hitSquare(11,11)).toThrow("Out of bounds")
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
            testBoard.clearAll();
        })

        test("Ship's methods are accessible", () => {
            expect(() => testBoard.getSquare(2,2).ship.hit()).toBeDefined();
            expect(() => testBoard.getSquare(2,2).ship.length).toBeDefined();
            expect(() => testBoard.getSquare(2,2).ship.isSunk()).toBeDefined();
        })

        test("Can hit a ship through hitting a square", () => {
            testBoard.hitSquare(2,2);
            testBoard.checkForAllSunk();
            expect(mockIsSunk).toHaveBeenCalled();
            expect(mockHit.mock.calls).toHaveLength(1);
        })

        test("Ship doesn't get hit twice", () => {
            expect(() => {
                testBoard.hitSquare(2,2);
            }).toThrow();
            expect(mockHit.mock.calls).toHaveLength(1);
        })

        test("Ship is sunk after all squares hit", () => {
            testBoard.hitSquare(2,3);
            testBoard.checkForAllSunk();
            testBoard.hitSquare(2,4);
            testBoard.checkForAllSunk();
            testBoard.hitSquare(2,5);
            expect(testBoard.checkForAllSunk()).toBe(true);
        })

    })

});

describe("Test placements of ship", () => {

    const newtestBoard = Gameboard(10);

    const testShip = {
                        length:4,
                        position:[]
                    }

    beforeEach(() => {
        return newtestBoard.placeShip(testShip,2,2,true);
    });

    afterEach(() => {
        newtestBoard.clearAll();
        testShip.position = [];
    })

    test("Place ship doesn't throw an error",() => {
        expect(newtestBoard.placeShip).toBeInstanceOf(Function);
    });

    test("Ship is sitting in origin square", () => {
        expect(newtestBoard.getSquare(2,2).ship).toBeInstanceOf(Object);
        expect(newtestBoard.getSquare(2,2).ship).toMatchObject(testShip);
    })


    test("Ship is sitting in all squares", () => {
        expect(newtestBoard.getSquare(2,2).ship).toMatchObject(testShip);
        expect(newtestBoard.getSquare(3,2).ship).toMatchObject(testShip);
        expect(newtestBoard.getSquare(4,2).ship).toMatchObject(testShip);
        expect(newtestBoard.getSquare(5,2).ship).toMatchObject(testShip);
    })

    test("Ship has position logged", () => {
        expect(testShip.position).toEqual([[2,2],[3,2],[4,2],[5,2]])
    })

    test("Clear ship clears the ship in question", () => {
        newtestBoard.clearShip(testShip);
        expect(newtestBoard.getSquare(2,2).ship).toBe(null);
        expect(newtestBoard.getSquare(2,3).ship).toBe(null);
        expect(newtestBoard.getSquare(2,4).ship).toBe(null);
        expect(newtestBoard.getSquare(2,5).ship).toBe(null);
        //Place it again so the afterEach can remove it
        newtestBoard.placeShip(testShip,2,2,true);
    })

    test("Unable to place a ship out of bounds horizontally", () => {
        expect(() => newtestBoard.placeShip(testShip,9,2,true)).toThrow("Ship out of bounds");
    })

    test("Unable to place a ship out of bounds vertically", () => {
        expect(() => newtestBoard.placeShip(testShip,2,9,false)).toThrow("Ship out of bounds");
    })

    test("Unable to place ship in an already occupied space", () => {
        expect(() => newtestBoard.placeShip(testShip,3,1,false)).toThrow("Space occupied");
    })

});

describe("Methods affecting overall board and gameplay",() => {

    const gameBoard = Gameboard(10);

    const smallGameBoard = Gameboard(3);

    const mockIsSunk = jest.fn()
    mockIsSunk.mockReturnValue(true);

    const ship1 = {
                        isSunk: mockIsSunk,
                        length:4,
                        position:[]
    }
    const ship2 = {
                        isSunk: mockIsSunk,
                        length:2,
                        position:[]
    }
    const ship3 = {
                        isSunk: mockIsSunk,
                        length:3,
                        position:[]
    }
    const ship4 = {
                        isSunk: mockIsSunk,
                        length:3,
                        position:[]
    }
    const ship5 = {
                        isSunk: mockIsSunk,
                        length:5,
                        position:[]
    }

    beforeAll(() => {
        gameBoard.placeShip(ship1,1,1,true);
        gameBoard.placeShip(ship2,0,0,false);
        gameBoard.placeShip(ship3,8,1,false);
        gameBoard.placeShip(ship4,3,5,true);
        gameBoard.placeShip(ship5,3,8,true);
    })

    test("Checks to see if all ships are sunk",() => {
        expect(gameBoard.checkForAllSunk()).toBe(true);
    })

    test("Checks to see if there are any empty squares",() => {
        expect(smallGameBoard.checkForEmpty()).toBe(true);
        smallGameBoard.hitSquare(0,0);
        smallGameBoard.hitSquare(0,1);
        smallGameBoard.hitSquare(0,2);
        smallGameBoard.hitSquare(1,0);
        smallGameBoard.hitSquare(1,1);
        smallGameBoard.hitSquare(1,2);
        smallGameBoard.hitSquare(2,0);
        expect(smallGameBoard.checkForEmpty()).toBe(true);
        smallGameBoard.hitSquare(2,1);
        expect(smallGameBoard.checkForEmpty()).toBe(true);
        smallGameBoard.hitSquare(2,2);
        expect(smallGameBoard.checkForEmpty()).toBe(false);
    } )

})
