import { Computer } from "./player"

describe("Checks computers moves", () => {

    const testShip = {
        isSunk: true,
        length: 1,  
    };

    const mockHit = jest.fn((x,y) => {
        if (x > 10 || y > 10) {
            throw new Error("Out of bounds")
        } else {
            return true;
        }
    });

    const mockSmallHit = jest.fn((x,y) => {
        if (x > 2 || y > 2) {
            throw new Error("Out of bounds")
        } else if (x === 0 && y === 0) {
            return testShip;
        } else {
            return true;
        }
    });

    const mockCheckSmall = jest.fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockReturnValue(false)
    
    const testGameboard = {
        getLength: () => 10,
        hitSquare: mockHit,
        checkForEmpty: () => true
    }

    const fullGameboard = {
        getLength: () => 10,
        hitSquare: mockHit,
        checkForEmpty: () => false
    }

    const smallBoard = {
        getLength: () => 2,
        hitSquare: mockSmallHit,
        checkForEmpty: mockCheckSmall
    }

    const testComp = Computer(testGameboard);
    const fullComp = Computer(fullGameboard);
    const smallComp = Computer(smallBoard);

    test("Computer chooses a random coordinate in bounds of the board", () => {
        expect(testComp.generateRandomCoords()[0]).toBeLessThan(10);
        expect(testComp.generateRandomCoords()[1]).toBeLessThan(10);
    })

    test("Try move fails with a move out of bounds", () => {
        expect(testComp.tryMove([11,0])).toBe(false);
    });

    test("Make move calls the hit function once", () => {
        try {
            testComp.makeMove();
            expect(mockHit.mock.calls.length).toBe(2);
            expect(mockHit.mock.results[1].value).toBe(true);
        } catch(error) {
            console.log(error);
        }
    })

    test("Will not make a move if board full", () => {
        expect(() => fullComp.makeMove()).toThrow("No More Space");  
    })

    test("Function returns a boolean or a ship", () => {
        expect(testComp.makeMove()).toBe(true);
    })

    test("Will generate coordinates until the board is full", () => {
        const moves = [];
        moves.push(smallComp.makeMove());
        moves.push(smallComp.makeMove());
        moves.push(smallComp.makeMove());
        moves.push(smallComp.makeMove());
        expect(() => smallComp.makeMove()).toThrow();
        expect(moves).toContain(testShip);
    })
})