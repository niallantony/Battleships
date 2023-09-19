import Screen from "./modules/screen.js";
import { PlacementBoard } from "./modules/placementBoard.js";
import { Player , Computer } from "./modules/player.js";
import { Gameboard } from "./modules/gameboard.js";
import './style.css';

export const Game = (() => {
    let currentPlayer
    const players = [];
   
    const singleInitialise = (name) => {
        const playerOneBoard = Gameboard(10, name);
        const playerTwoBoard = Gameboard(10, "Computer");
        const playerOne = Player(name, playerOneBoard);
        const playerTwo = Computer(name, playerTwoBoard);
        players.push(playerOne);
        players.push(playerTwo);
        playerOneBoard.opponent = playerTwo;
        playerTwoBoard.opponent = playerOne;
        startGame(playerOne,playerTwo);
    }

    const doubleInitialise = (name, secondName) => {
        const playerOneBoard = Gameboard(10, name);
        const playerTwoBoard = Gameboard(10, secondName);
        const playerOne = Player(name, playerOneBoard);
        const playerTwo = Player(secondName, playerTwoBoard);
        players.push(playerOne);
        players.push(playerTwo);
        playerOneBoard.opponent = playerTwo;
        playerTwoBoard.opponent = playerOne;
        startGame();
    }

    const initialiseGame = () => {
        Screen.gameScreenSetup();
        currentPlayer = players[1];
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
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0] ;
        Screen.refresh(currentPlayer,previous);
        if (currentPlayer.isComp) {
            currentPlayer.makeMove();
        }
    }

    const shipPlacement = (player, cb) => {
        // const opponentBoard = player === playerOne ? playerTwo.gameboard : playerOne.gameboard;
        Screen.shipScreenSetup();
        const placement = PlacementBoard(player.gameboard, cb);
        placement.renderPlacementScreen();
    }

    const computerPlace = (player, cb) => {
        console.log(player);
        player.place();
        cb();
    }

    const startGame = () => {
        const afterPlace = players[1].isComp ? computerPlace : shipPlacement ;
        shipPlacement(players[0], () => afterPlace(players[1], initialiseGame));
    }

    Screen.drawMainMenu(singleInitialise,doubleInitialise);

})();