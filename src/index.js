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
        startGame();
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
        if(currentPlayer.gameboard.opponent.gameboard.checkForAllSunk()) {
            Screen.endGame(currentPlayer.id);
            players.length = 0;
            return;
        }
        nextPlayer();
    }

    const nextPlayer = () => {
        const previous = currentPlayer;
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0] ;
        if (currentPlayer.isComp) {
            Screen.refresh(currentPlayer,previous);
            currentPlayer.makeMove();
        } else if (!currentPlayer.gameboard.opponent.isComp) {
            Screen.showReadyScreen(currentPlayer,previous);
        } else {
            Screen.refresh(currentPlayer,previous);
        }
    }

    const shipPlacement = (player, cb) => {
        // const opponentBoard = player === playerOne ? playerTwo.gameboard : playerOne.gameboard;
        Screen.shipScreenSetup(player.id);
        const placement = PlacementBoard(player.gameboard, cb);
        placement.renderPlacementScreen();
    }

    const computerPlace = (player, cb) => {
        console.log(player);
        player.place();
        cb();
    }

    const startGame = () => {
        Screen.onWin = () => Screen.drawMainMenu(singleInitialise,doubleInitialise);
        const afterPlace = players[1].isComp ? computerPlace : shipPlacement ;
        shipPlacement(players[0], () => afterPlace(players[1], initialiseGame));
    }

    Screen.drawMainMenu(singleInitialise,doubleInitialise);

})();