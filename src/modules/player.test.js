import { Computer } from "./player"

describe("Checks computers moves", () => {

    
    const mockLength = jest.fn();
    mockLength.mockReturnValue(10);

    const mockHit = jest.fn((x,y) => {
        if (x > 10 || y > 10) {
            throw new Error("Out of bounds")
        } else {
            return true;
        }
    });
    
    const testGameboard = {
        getLength: mockLength,
        hitSquare: mockHit
    }
    const testComp = Computer(testGameboard);

    test("Computer chooses a random coordinate in bounds of the board", () => {
        expect(testComp.generateRandomCoords()[0]).toBeLessThan(10);
        expect(testComp.generateRandomCoords()[1]).toBeLessThan(10);
    })

    test("Try move fails with a move out of bounds", () => {
        expect(testComp.tryMove([11,0])).toBe(false);
    });

    test("Make move calls the hit function once", () => {
        testComp.makeMove();
        expect(mockHit.mock.calls.length).toBe(2);
        expect(mockHit.mock.results[1].value).toBe(true);
    })

})