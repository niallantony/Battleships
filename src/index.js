import { Ship } from "./modules/ship.js";
import { Gameboard } from "./modules/gameboard.js";
import { Player , Computer } from "./modules/player.js";
import Screen from "./modules/screen.js";

export const Game = (() => {
    const playerOneBoard = Gameboard(10, "player-one");
    const playerTwoBoard = Gameboard(10, "player-two");
    const playerOne = Player("player-one",playerTwoBoard);
    const playerTwo = Computer("player-two",playerOneBoard);
    playerOneBoard.opponent = playerTwo;
    playerTwoBoard.opponent = playerOne;
   
    const initialiseGame = (playerOne) => {
        return playerOne
    }

    const turnOver = () => {
        if(currentPlayer.gameboard.checkForAllSunk()) {
            Screen.endGame();
            return;
        }
        nextPlayer();
    }

    const nextPlayer = () => {
        const previous = currentPlayer;
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne ;
        Screen.refresh(currentPlayer,previous);
        if (currentPlayer.isComp) {
            currentPlayer.makeMove();
        }
    }

    let currentPlayer = initialiseGame(playerOne);

    const playerTanker = Ship(5);
    const playerDestroyer = Ship(3);
    const playerCruiser = Ship(4);

    const computerTanker = Ship(5);
    const computerDestroyer = Ship(3);
    const computerCruiser = Ship(4);

    playerOneBoard.placeShip(playerTanker,1,1,true);
    playerOneBoard.placeShip(playerDestroyer,3,4,false);
    playerOneBoard.placeShip(playerCruiser,0,9,true);
    
    playerTwoBoard.placeShip(computerTanker,9,2,false);
    playerTwoBoard.placeShip(computerDestroyer,5,6,false);
    playerTwoBoard.placeShip(computerCruiser,0,0,true);

    Screen.refresh(playerOne,playerTwo)

    return {
        turnOver,
    }
})();