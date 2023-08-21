import Screen from "./modules/screen.js";
import { Player , Computer } from "./modules/player.js";
import { Gameboard } from "./modules/gameboard.js";
import './style.css';

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

    Screen.drawPlacementBoard(playerOneBoard);
    const battleshipButton = document.getElementById('battleship');
    battleshipButton.addEventListener('click', () => Screen.shipPlacement(battleshipButton));

    // let currentPlayer = initialiseGame(playerOne);

    // const playerTanker = Ship(5, 'Tanker');
    // const playerDestroyer = Ship(3, 'Destroyer');
    // const playerCruiser = Ship(4, 'Cruiser');

    // const computerTanker = Ship(5, 'Tanker');
    // const computerDestroyer = Ship(3, 'Destroyer');
    // const computerCruiser = Ship(4, 'Cruiser');

    // playerOneBoard.placeShip(playerTanker,1,1,true);
    // playerOneBoard.placeShip(playerDestroyer,3,4,false);
    // playerOneBoard.placeShip(playerCruiser,0,9,true);
    
    // playerTwoBoard.placeShip(computerTanker,9,2,false);
    // playerTwoBoard.placeShip(computerDestroyer,5,6,false);
    // playerTwoBoard.placeShip(computerCruiser,0,0,true);

    // Screen.refresh(playerOne,playerTwo)

    return {
        turnOver,
    }
})();