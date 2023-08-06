import { Ship } from "./modules/ship.js";
import { Gameboard } from "./modules/gameboard.js";
import { Player , Computer } from "./modules/player.js";
import Screen from "./modules/screen.js";

const Game = (() => {
    const playerBoard = Gameboard(10);
    const compBoard = Gameboard(10);
    const playerOne = Player(compBoard);
    const compPlayer = Computer(playerBoard);

    const playerTanker = Ship(5);
    const playerDestroyer = Ship(3);
    const playerCruiser = Ship(4);

    const computerTanker = Ship(5);
    const computerDestroyer = Ship(3);
    const computerCruiser = Ship(4);

    playerBoard.placeShip(playerTanker,1,1,true);
    playerBoard.placeShip(playerDestroyer,3,4,false);
    playerBoard.placeShip(playerCruiser,0,9,true);
    
    compBoard.placeShip(computerTanker,9,2,false);
    compBoard.placeShip(computerDestroyer,5,6,false);
    compBoard.placeShip(computerCruiser,0,0,true);

    Screen.drawBoard("left",playerBoard);
    Screen.drawBoard("right",compBoard);
    Screen.drawShip("left",playerTanker);
    Screen.drawShip("left",playerDestroyer);
    Screen.drawShip("left",playerCruiser);
    Screen.drawShip("right",computerTanker);
    Screen.drawShip("right",computerDestroyer);
    Screen.drawShip("right",computerCruiser);
    Screen.consoleNodes();
    


    // while (!playerBoard.checkForAllSunk() && !compBoard.checkForAllSunk()) {
    //     let playersFinished = false;
    //     do {
    //         playersFinished = playerOne.getMove();
    //     } while (!playersFinished);
    //     compBoard.displayConsoleTEMP();

    //     if (compBoard.checkForAllSunk()) break;

    //     compPlayer.makeMove();
    //     playerBoard.displayConsoleTEMP();

    //     console.log("Turn over")
    // }

})();