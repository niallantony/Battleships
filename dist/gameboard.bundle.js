/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\nvar Gameboard = function Gameboard(size) {\n  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var ships = [];\n  var turns = [];\n  var Square = function Square(x, y) {\n    return {\n      ship: null,\n      hit: false,\n      coords: [x, y]\n    };\n  };\n  var buildRow = function buildRow(index) {\n    var columns = [];\n    for (var i = 0; i < size; i++) {\n      columns.push(Square(i, index));\n    }\n    ;\n    return columns;\n  };\n  var buildSquare = function buildSquare() {\n    var rows = [];\n    for (var i = 0; i < size; i++) {\n      rows.push(buildRow(i));\n    }\n    return rows;\n  };\n  var getLength = function getLength() {\n    return size;\n  };\n  var getSquare = function getSquare(x, y) {\n    return gameSquare[y][x];\n  };\n  var squareStatus = function squareStatus(x, y) {\n    if (gameSquare[y][x].hit && gameSquare[y][x].ship) return 'hit';\n    if (gameSquare[y][x].hit) return 'miss';\n    return 'empty';\n  };\n  var getShips = function getShips() {\n    return ships;\n  };\n  var gameSquare = buildSquare(size);\n  var hitSquare = function hitSquare(x, y) {\n    if (!gameSquare[y] || !gameSquare[y][x]) throw new Error(\"Out of bounds\");\n    if (gameSquare[y][x].hit) throw new Error(\"Square already hit\");\n    gameSquare[y][x].hit = true;\n    turns.push([x, y]);\n    if (gameSquare[y][x].ship) {\n      gameSquare[y][x].ship.hit();\n      return gameSquare[y][x].ship;\n    } else {\n      return true;\n    }\n  };\n  var checkForEmpty = function checkForEmpty() {\n    if (turns.length < size * size) return true;\n    return false;\n  };\n  var placeShip = function placeShip(ship, x, y, horizontal) {\n    var axis = horizontal ? x : y;\n    if (!checkBoundaries(axis, ship.length)) throw new Error(\"Ship out of bounds\");\n    if (!checkForShips(ship.length, x, y, horizontal)) throw new Error(\"Space occupied\");\n    ship.orientation = horizontal;\n    ships.push(ship);\n    for (var i = 0; i < ship.length; i++) {\n      if (horizontal) {\n        gameSquare[y][x + i].ship = ship;\n        ship.position.push(gameSquare[y][x + i].coords);\n      } else {\n        gameSquare[y + i][x].ship = ship;\n        ship.position.push(gameSquare[y + i][x].coords);\n      }\n    }\n    ;\n  };\n  var clearShip = function clearShip(ship) {\n    for (var i = 0; i < ship.length; i++) {\n      var coords = ship.position.pop();\n      gameSquare[coords[1]][coords[0]].ship = null;\n    }\n    ships.splice(ships.indexOf(ship), 1);\n  };\n  var checkForShips = function checkForShips(length, x, y, horizontal) {\n    //Builds an array of spaces the ship will occupy\n    var range = [];\n    for (var i = 0; i < length; i++) {\n      if (horizontal) {\n        range.push(gameSquare[y][x + i].ship);\n      } else {\n        range.push(gameSquare[y + i][x].ship);\n      }\n    }\n    //Returns true if all are empty\n    return range.every(function (ship) {\n      return ship === null;\n    });\n  };\n  var checkBoundaries = function checkBoundaries(axis, length) {\n    return axis + length > size ? false : true;\n  };\n  var checkForAllSunk = function checkForAllSunk() {\n    var allCondition = [];\n    ships.forEach(function (ship) {\n      return allCondition.push(ship.isSunk());\n    });\n    return allCondition.every(function (condition) {\n      return condition === true;\n    });\n  };\n  var clearAll = function clearAll() {\n    for (var i = 0; i < ships.length; i++) {\n      var cur = ships.pop();\n      cur.position.forEach(function (coord) {\n        gameSquare[coord[1]][coord[0]].ship = null;\n      });\n    }\n  };\n  return {\n    getLength: getLength,\n    hitSquare: hitSquare,\n    placeShip: placeShip,\n    clearShip: clearShip,\n    checkForAllSunk: checkForAllSunk,\n    getSquare: getSquare,\n    checkForEmpty: checkForEmpty,\n    getShips: getShips,\n    clearAll: clearAll,\n    squareStatus: squareStatus,\n    opponent: null,\n    id: id\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/gameboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/modules/gameboard.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;