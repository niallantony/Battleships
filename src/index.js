import { Ship } from "./modules/ship.js";
import { Gameboard } from "./modules/gameboard.js";
import { Player , Computer } from "./modules/player.js";
import Screen from "./modules/screen.js";

export const Game = (() => {
    const playerBoard = Gameboard(10, "player-one");
    const compBoard = Gameboard(10, "player-two");
    const playerOne = Player("player-one",compBoard);
    const compPlayer = Computer("player-two",playerBoard);
    playerBoard.owner = playerOne;
    compBoard.owner = compPlayer;
   
    const initialiseGame = (playerOne) => {
        return playerOne
    }
    
    let currentPlayer = initialiseGame(playerOne);

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

    Screen.drawBoard("right","player-one",playerOne);
    Screen.drawBoard("left","player-two",compPlayer);
    Screen.drawShips(playerBoard,"player-two");
    Screen.consoleNodes(); 


})();