import Screen from "./modules/screen.js";
import { PlacementBoard } from "./modules/placementBoard.js";
import { Player , Computer } from "./modules/player.js";
import { Gameboard } from "./modules/gameboard.js";
import './style.css';

export const Game = (() => {
    let currentPlayer
    const playerOneBoard = Gameboard(10, "player-one");
    const playerTwoBoard = Gameboard(10, "player-two");
    const playerOne = Player("player-one",playerOneBoard);
    const playerTwo = Computer("player-two",playerTwoBoard);
    playerOneBoard.opponent = playerTwo;
    playerTwoBoard.opponent = playerOne
   
    const initialiseGame = () => {
        currentPlayer = playerTwo;
        Screen.onNext = turnOver;
        nextPlayer();
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

    const shipPlacement = (player, cb) => {
        // const opponentBoard = player === playerOne ? playerTwo.gameboard : playerOne.gameboard;
        const placement = PlacementBoard(player.gameboard, cb);
        placement.renderPlacementScreen();
    }

    const computerPlace = (player, cb) => {
        console.log(player);
        player.place();
        cb();
    }

    const startGame = (playerOne, playerTwo) => {
        const afterPlace = playerTwo.isComp ? computerPlace : shipPlacement ;
        shipPlacement(playerOne, () => afterPlace(playerTwo, initialiseGame));
    }

    startGame(playerOne,playerTwo);

    return {
    }
})();