/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
var Gameboard = function Gameboard(size) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var ships = [];
  var turns = [];
  var Square = function Square(x, y) {
    return {
      ship: null,
      hit: false,
      coords: [x, y]
    };
  };
  var buildRow = function buildRow(index) {
    var columns = [];
    for (var i = 0; i < size; i++) {
      columns.push(Square(i, index));
    }
    ;
    return columns;
  };
  var buildSquare = function buildSquare() {
    var rows = [];
    for (var i = 0; i < size; i++) {
      rows.push(buildRow(i));
    }
    return rows;
  };
  var getLength = function getLength() {
    return size;
  };
  var getSquare = function getSquare(x, y) {
    return gameSquare[y][x];
  };
  var squareStatus = function squareStatus(x, y) {
    if (gameSquare[y][x].hit && gameSquare[y][x].ship) return 'hit';
    if (gameSquare[y][x].hit) return 'miss';
    return 'empty';
  };
  var getShips = function getShips() {
    return ships;
  };
  var gameSquare = buildSquare(size);
  var hitSquare = function hitSquare(x, y) {
    if (!gameSquare[y] || !gameSquare[y][x]) throw new Error("Out of bounds");
    if (gameSquare[y][x].hit) throw new Error("Square already hit");
    gameSquare[y][x].hit = true;
    turns.push([x, y]);
    if (gameSquare[y][x].ship) {
      gameSquare[y][x].ship.hit();
      return gameSquare[y][x].ship;
    } else {
      return true;
    }
  };
  var checkForEmpty = function checkForEmpty() {
    if (turns.length < size * size) return true;
    return false;
  };
  var placeShip = function placeShip(ship, x, y, horizontal) {
    var axis = horizontal ? x : y;
    if (!checkBoundaries(axis, ship.length)) throw new Error("Ship out of bounds");
    if (!checkForShips(ship.length, x, y, horizontal)) throw new Error("Space occupied");
    ship.orientation = horizontal;
    ships.push(ship);
    for (var i = 0; i < ship.length; i++) {
      if (horizontal) {
        gameSquare[y][x + i].ship = ship;
        ship.position.push(gameSquare[y][x + i].coords);
      } else {
        gameSquare[y + i][x].ship = ship;
        ship.position.push(gameSquare[y + i][x].coords);
      }
    }
    ;
  };
  var clearShip = function clearShip(ship) {
    for (var i = 0; i < ship.length; i++) {
      var coords = ship.position.pop();
      gameSquare[coords[1]][coords[0]].ship = null;
    }
    ships.splice(ships.indexOf(ship), 1);
  };
  var checkForShips = function checkForShips(length, x, y, horizontal) {
    //Builds an array of spaces the ship will occupy
    var range = [];
    for (var i = 0; i < length; i++) {
      if (horizontal) {
        range.push(gameSquare[y][x + i].ship);
      } else {
        range.push(gameSquare[y + i][x].ship);
      }
    }
    //Returns true if all are empty
    return range.every(function (ship) {
      return ship === null;
    });
  };
  var checkBoundaries = function checkBoundaries(axis, length) {
    return axis + length > size ? false : true;
  };
  var checkForAllSunk = function checkForAllSunk() {
    var allCondition = [];
    ships.forEach(function (ship) {
      return allCondition.push(ship.isSunk());
    });
    return allCondition.every(function (condition) {
      return condition === true;
    });
  };
  var clearAll = function clearAll() {
    for (var i = 0; i < ships.length; i++) {
      var cur = ships.pop();
      cur.position.forEach(function (coord) {
        gameSquare[coord[1]][coord[0]].ship = null;
      });
    }
  };
  return {
    getLength: getLength,
    hitSquare: hitSquare,
    placeShip: placeShip,
    clearShip: clearShip,
    checkForAllSunk: checkForAllSunk,
    getSquare: getSquare,
    checkForEmpty: checkForEmpty,
    getShips: getShips,
    clearAll: clearAll,
    squareStatus: squareStatus,
    opponent: null,
    id: id
  };
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05PLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJQyxJQUFJLEVBQWU7RUFBQSxJQUFkQyxFQUFFLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUk7RUFDcEMsSUFBTUcsS0FBSyxHQUFHLEVBQUU7RUFDaEIsSUFBTUMsS0FBSyxHQUFHLEVBQUU7RUFDaEIsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUlDLENBQUMsRUFBQ0MsQ0FBQyxFQUFLO0lBQ3BCLE9BQU87TUFDSEMsSUFBSSxFQUFFLElBQUk7TUFDVkMsR0FBRyxFQUFFLEtBQUs7TUFDVkMsTUFBTSxFQUFFLENBQUNKLENBQUMsRUFBQ0MsQ0FBQztJQUNoQixDQUFDO0VBQ0wsQ0FBQztFQUVELElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxLQUFLLEVBQUs7SUFDeEIsSUFBTUMsT0FBTyxHQUFHLEVBQUU7SUFDbEIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdoQixJQUFJLEVBQUdnQixDQUFDLEVBQUUsRUFBRTtNQUM3QkQsT0FBTyxDQUFDRSxJQUFJLENBQUNWLE1BQU0sQ0FBQ1MsQ0FBQyxFQUFDRixLQUFLLENBQUMsQ0FBQztJQUNqQztJQUFDO0lBQ0QsT0FBT0MsT0FBTztFQUNsQixDQUFDO0VBRUQsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QixJQUFNQyxJQUFJLEdBQUcsRUFBRTtJQUNmLEtBQUssSUFBSUgsQ0FBQyxHQUFHLENBQUMsRUFBR0EsQ0FBQyxHQUFHaEIsSUFBSSxFQUFHZ0IsQ0FBQyxFQUFFLEVBQUc7TUFDOUJHLElBQUksQ0FBQ0YsSUFBSSxDQUFDSixRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDO0lBQzFCO0lBQ0EsT0FBT0csSUFBSTtFQUNmLENBQUM7RUFFRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3BCLE9BQU9wQixJQUFJO0VBQ2YsQ0FBQztFQUVELElBQU1xQixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSWIsQ0FBQyxFQUFDQyxDQUFDLEVBQUs7SUFDdkIsT0FBT2EsVUFBVSxDQUFDYixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDO0VBQzNCLENBQUM7RUFFRCxJQUFNZSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSWYsQ0FBQyxFQUFDQyxDQUFDLEVBQUs7SUFDMUIsSUFBSWEsVUFBVSxDQUFDYixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNHLEdBQUcsSUFBSVcsVUFBVSxDQUFDYixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNFLElBQUksRUFBRSxPQUFPLEtBQUs7SUFDL0QsSUFBSVksVUFBVSxDQUFDYixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNHLEdBQUcsRUFBRSxPQUFPLE1BQU07SUFDdkMsT0FBTyxPQUFPO0VBQ2xCLENBQUM7RUFFRCxJQUFNYSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0lBQ25CLE9BQU9uQixLQUFLO0VBQ2hCLENBQUM7RUFFRCxJQUFNaUIsVUFBVSxHQUFHSixXQUFXLENBQUNsQixJQUFJLENBQUM7RUFFcEMsSUFBTXlCLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJakIsQ0FBQyxFQUFDQyxDQUFDLEVBQUs7SUFDdkIsSUFBSSxDQUFDYSxVQUFVLENBQUNiLENBQUMsQ0FBQyxJQUFJLENBQUNhLFVBQVUsQ0FBQ2IsQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxFQUFFLE1BQU0sSUFBSWtCLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDekUsSUFBSUosVUFBVSxDQUFDYixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNHLEdBQUcsRUFBRSxNQUFNLElBQUllLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztJQUMvREosVUFBVSxDQUFDYixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNHLEdBQUcsR0FBRyxJQUFJO0lBQzNCTCxLQUFLLENBQUNXLElBQUksQ0FBQyxDQUFDVCxDQUFDLEVBQUNDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLElBQUlhLFVBQVUsQ0FBQ2IsQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxDQUFDRSxJQUFJLEVBQUU7TUFDdkJZLFVBQVUsQ0FBQ2IsQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxDQUFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO01BQzNCLE9BQU9XLFVBQVUsQ0FBQ2IsQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxDQUFDRSxJQUFJO0lBQ2hDLENBQUMsTUFBTTtNQUNILE9BQU8sSUFBSTtJQUNmO0VBQ0osQ0FBQztFQUlELElBQU1pQixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBUztJQUN4QixJQUFJckIsS0FBSyxDQUFDSCxNQUFNLEdBQUlILElBQUksR0FBQ0EsSUFBSyxFQUFFLE9BQU8sSUFBSTtJQUMzQyxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUVELElBQU00QixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSWxCLElBQUksRUFBQ0YsQ0FBQyxFQUFDQyxDQUFDLEVBQUNvQixVQUFVLEVBQUs7SUFDdkMsSUFBTUMsSUFBSSxHQUFHRCxVQUFVLEdBQUdyQixDQUFDLEdBQUdDLENBQUM7SUFDL0IsSUFBSSxDQUFDc0IsZUFBZSxDQUFDRCxJQUFJLEVBQUNwQixJQUFJLENBQUNQLE1BQU0sQ0FBQyxFQUFFLE1BQU0sSUFBSXVCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztJQUM3RSxJQUFJLENBQUNNLGFBQWEsQ0FBQ3RCLElBQUksQ0FBQ1AsTUFBTSxFQUFDSyxDQUFDLEVBQUNDLENBQUMsRUFBQ29CLFVBQVUsQ0FBQyxFQUFFLE1BQU0sSUFBSUgsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQ2pGaEIsSUFBSSxDQUFDdUIsV0FBVyxHQUFHSixVQUFVO0lBQzdCeEIsS0FBSyxDQUFDWSxJQUFJLENBQUNQLElBQUksQ0FBQztJQUNoQixLQUFNLElBQUlNLENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBR04sSUFBSSxDQUFDUCxNQUFNLEVBQUdhLENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUlhLFVBQVUsRUFBRTtRQUNaUCxVQUFVLENBQUNiLENBQUMsQ0FBQyxDQUFDRCxDQUFDLEdBQUNRLENBQUMsQ0FBQyxDQUFDTixJQUFJLEdBQUdBLElBQUk7UUFDOUJBLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQ2pCLElBQUksQ0FBQ0ssVUFBVSxDQUFDYixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxHQUFDUSxDQUFDLENBQUMsQ0FBQ0osTUFBTSxDQUFDO01BQ2pELENBQUMsTUFBTTtRQUNIVSxVQUFVLENBQUNiLENBQUMsR0FBQ08sQ0FBQyxDQUFDLENBQUNSLENBQUMsQ0FBQyxDQUFDRSxJQUFJLEdBQUdBLElBQUk7UUFDOUJBLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQ2pCLElBQUksQ0FBQ0ssVUFBVSxDQUFDYixDQUFDLEdBQUNPLENBQUMsQ0FBQyxDQUFDUixDQUFDLENBQUMsQ0FBQ0ksTUFBTSxDQUFDO01BQ2pEO0lBQ0o7SUFBQztFQUNMLENBQUM7RUFFRCxJQUFNdUIsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUl6QixJQUFJLEVBQUs7SUFDeEIsS0FBSSxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdOLElBQUksQ0FBQ1AsTUFBTSxFQUFFYSxDQUFDLEVBQUUsRUFBRTtNQUNsQyxJQUFNSixNQUFNLEdBQUdGLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLENBQUM7TUFDbENkLFVBQVUsQ0FBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDRixJQUFJLEdBQUcsSUFBSTtJQUNoRDtJQUNBTCxLQUFLLENBQUNnQyxNQUFNLENBQUNoQyxLQUFLLENBQUNpQyxPQUFPLENBQUM1QixJQUFJLENBQUMsRUFBQyxDQUFDLENBQUM7RUFDdkMsQ0FBQztFQUVELElBQU1zQixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUk3QixNQUFNLEVBQUNLLENBQUMsRUFBQ0MsQ0FBQyxFQUFDb0IsVUFBVSxFQUFLO0lBQzdDO0lBQ0EsSUFBTVUsS0FBSyxHQUFHLEVBQUU7SUFDaEIsS0FBSyxJQUFJdkIsQ0FBQyxHQUFHLENBQUMsRUFBR0EsQ0FBQyxHQUFHYixNQUFNLEVBQUdhLENBQUMsRUFBRSxFQUFFO01BQy9CLElBQUlhLFVBQVUsRUFBRTtRQUNaVSxLQUFLLENBQUN0QixJQUFJLENBQUNLLFVBQVUsQ0FBQ2IsQ0FBQyxDQUFDLENBQUNELENBQUMsR0FBQ1EsQ0FBQyxDQUFDLENBQUNOLElBQUksQ0FBQztNQUN2QyxDQUFDLE1BQU07UUFDSDZCLEtBQUssQ0FBQ3RCLElBQUksQ0FBQ0ssVUFBVSxDQUFDYixDQUFDLEdBQUNPLENBQUMsQ0FBQyxDQUFDUixDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDO01BQ3ZDO0lBQ0o7SUFDQTtJQUNBLE9BQU82QixLQUFLLENBQUNDLEtBQUssQ0FBQyxVQUFBOUIsSUFBSTtNQUFBLE9BQUlBLElBQUksS0FBSyxJQUFJO0lBQUEsRUFBQztFQUM3QyxDQUFDO0VBR0QsSUFBTXFCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUQsSUFBSSxFQUFDM0IsTUFBTSxFQUFLO0lBQ3JDLE9BQU8yQixJQUFJLEdBQUczQixNQUFNLEdBQUdILElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSTtFQUM5QyxDQUFDO0VBRUQsSUFBTXlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0lBQzFCLElBQU1DLFlBQVksR0FBRyxFQUFFO0lBQ3ZCckMsS0FBSyxDQUFDc0MsT0FBTyxDQUFDLFVBQUNqQyxJQUFJO01BQUEsT0FBS2dDLFlBQVksQ0FBQ3pCLElBQUksQ0FBQ1AsSUFBSSxDQUFDa0MsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUFBLEVBQUM7SUFDekQsT0FBT0YsWUFBWSxDQUFDRixLQUFLLENBQUMsVUFBQUssU0FBUztNQUFBLE9BQUlBLFNBQVMsS0FBSyxJQUFJO0lBQUEsRUFBQztFQUM5RCxDQUFDO0VBRUQsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztJQUNuQixLQUFLLElBQUk5QixDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdYLEtBQUssQ0FBQ0YsTUFBTSxFQUFHYSxDQUFDLEVBQUUsRUFBRztNQUN0QyxJQUFNK0IsR0FBRyxHQUFHMUMsS0FBSyxDQUFDK0IsR0FBRyxDQUFDLENBQUM7TUFDdkJXLEdBQUcsQ0FBQ2IsUUFBUSxDQUFDUyxPQUFPLENBQUMsVUFBQ0ssS0FBSyxFQUFLO1FBQzVCMUIsVUFBVSxDQUFDMEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDdEMsSUFBSSxHQUFHLElBQUk7TUFDOUMsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBR0QsT0FBTztJQUNIVSxTQUFTLEVBQVRBLFNBQVM7SUFDVEssU0FBUyxFQUFUQSxTQUFTO0lBQ1RHLFNBQVMsRUFBVEEsU0FBUztJQUNUTyxTQUFTLEVBQVRBLFNBQVM7SUFDVE0sZUFBZSxFQUFmQSxlQUFlO0lBQ2ZwQixTQUFTLEVBQVRBLFNBQVM7SUFDVE0sYUFBYSxFQUFiQSxhQUFhO0lBQ2JILFFBQVEsRUFBUkEsUUFBUTtJQUNSc0IsUUFBUSxFQUFSQSxRQUFRO0lBQ1J2QixZQUFZLEVBQVpBLFlBQVk7SUFDWjBCLFFBQVEsRUFBQyxJQUFJO0lBQ2JoRCxFQUFFLEVBQUZBO0VBQ0osQ0FBQztBQUVMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoc2l6ZSxpZCA9IG51bGwpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGNvbnN0IHR1cm5zID0gW107XG4gICAgY29uc3QgU3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICBjb29yZHM6IFt4LHldLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRSb3cgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goU3F1YXJlKGksaW5kZXgpKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgcm93cy5wdXNoKGJ1aWxkUm93KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVTcXVhcmVbeV1beF07XG4gICAgfVxuXG4gICAgY29uc3Qgc3F1YXJlU3RhdHVzID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQgJiYgZ2FtZVNxdWFyZVt5XVt4XS5zaGlwKSByZXR1cm4gJ2hpdCc7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCkgcmV0dXJuICdtaXNzJztcbiAgICAgICAgcmV0dXJuICdlbXB0eSdcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVTcXVhcmUgPSBidWlsZFNxdWFyZShzaXplKTtcblxuICAgIGNvbnN0IGhpdFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lU3F1YXJlW3ldIHx8ICFnYW1lU3F1YXJlW3ldW3hdKSB0aHJvdyBuZXcgRXJyb3IoXCJPdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQpIHRocm93IG5ldyBFcnJvcihcIlNxdWFyZSBhbHJlYWR5IGhpdFwiKTtcbiAgICAgICAgZ2FtZVNxdWFyZVt5XVt4XS5oaXQgPSB0cnVlO1xuICAgICAgICB0dXJucy5wdXNoKFt4LHldKTtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uc2hpcCkge1xuICAgICAgICAgICAgZ2FtZVNxdWFyZVt5XVt4XS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVTcXVhcmVbeV1beF0uc2hpcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGNoZWNrRm9yRW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0dXJucy5sZW5ndGggPCAoc2l6ZSpzaXplKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCx4LHksaG9yaXpvbnRhbCkgPT4ge1xuICAgICAgICBjb25zdCBheGlzID0gaG9yaXpvbnRhbCA/IHggOiB5IDtcbiAgICAgICAgaWYgKCFjaGVja0JvdW5kYXJpZXMoYXhpcyxzaGlwLmxlbmd0aCkpIHRocm93IG5ldyBFcnJvcihcIlNoaXAgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgaWYgKCFjaGVja0ZvclNoaXBzKHNoaXAubGVuZ3RoLHgseSxob3Jpem9udGFsKSkgdGhyb3cgbmV3IEVycm9yKFwiU3BhY2Ugb2NjdXBpZWRcIik7XG4gICAgICAgIHNoaXAub3JpZW50YXRpb24gPSBob3Jpem9udGFsO1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVt5XVt4K2ldLnNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ucHVzaChnYW1lU3F1YXJlW3ldW3graV0uY29vcmRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVt5K2ldW3hdLnNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ucHVzaChnYW1lU3F1YXJlW3kraV1beF0uY29vcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNoaXAucG9zaXRpb24ucG9wKCk7XG4gICAgICAgICAgICBnYW1lU3F1YXJlW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXS5zaGlwID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5zcGxpY2Uoc2hpcHMuaW5kZXhPZihzaGlwKSwxKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvclNoaXBzID0gKGxlbmd0aCx4LHksaG9yaXpvbnRhbCkgPT4ge1xuICAgICAgICAvL0J1aWxkcyBhbiBhcnJheSBvZiBzcGFjZXMgdGhlIHNoaXAgd2lsbCBvY2N1cHlcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHJhbmdlLnB1c2goZ2FtZVNxdWFyZVt5XVt4K2ldLnNoaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZS5wdXNoKGdhbWVTcXVhcmVbeStpXVt4XS5zaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL1JldHVybnMgdHJ1ZSBpZiBhbGwgYXJlIGVtcHR5XG4gICAgICAgIHJldHVybiByYW5nZS5ldmVyeShzaGlwID0+IHNoaXAgPT09IG51bGwpO1xuICAgIH1cblxuXG4gICAgY29uc3QgY2hlY2tCb3VuZGFyaWVzID0gKGF4aXMsbGVuZ3RoKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlzICsgbGVuZ3RoID4gc2l6ZSA/IGZhbHNlIDogdHJ1ZTsgXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JBbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxDb25kaXRpb24gPSBbXVxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBhbGxDb25kaXRpb24ucHVzaChzaGlwLmlzU3VuaygpKSk7XG4gICAgICAgIHJldHVybiBhbGxDb25kaXRpb24uZXZlcnkoY29uZGl0aW9uID0+IGNvbmRpdGlvbiA9PT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNoaXBzLmxlbmd0aCA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1ciA9IHNoaXBzLnBvcCgpO1xuICAgICAgICAgICAgY3VyLnBvc2l0aW9uLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVtjb29yZFsxXV1bY29vcmRbMF1dLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TGVuZ3RoLFxuICAgICAgICBoaXRTcXVhcmUsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgY2xlYXJTaGlwLFxuICAgICAgICBjaGVja0ZvckFsbFN1bmssXG4gICAgICAgIGdldFNxdWFyZSxcbiAgICAgICAgY2hlY2tGb3JFbXB0eSxcbiAgICAgICAgZ2V0U2hpcHMsXG4gICAgICAgIGNsZWFyQWxsLFxuICAgICAgICBzcXVhcmVTdGF0dXMsXG4gICAgICAgIG9wcG9uZW50Om51bGwsXG4gICAgICAgIGlkLFxuICAgIH1cblxufTsiXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwic2l6ZSIsImlkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2hpcHMiLCJ0dXJucyIsIlNxdWFyZSIsIngiLCJ5Iiwic2hpcCIsImhpdCIsImNvb3JkcyIsImJ1aWxkUm93IiwiaW5kZXgiLCJjb2x1bW5zIiwiaSIsInB1c2giLCJidWlsZFNxdWFyZSIsInJvd3MiLCJnZXRMZW5ndGgiLCJnZXRTcXVhcmUiLCJnYW1lU3F1YXJlIiwic3F1YXJlU3RhdHVzIiwiZ2V0U2hpcHMiLCJoaXRTcXVhcmUiLCJFcnJvciIsImNoZWNrRm9yRW1wdHkiLCJwbGFjZVNoaXAiLCJob3Jpem9udGFsIiwiYXhpcyIsImNoZWNrQm91bmRhcmllcyIsImNoZWNrRm9yU2hpcHMiLCJvcmllbnRhdGlvbiIsInBvc2l0aW9uIiwiY2xlYXJTaGlwIiwicG9wIiwic3BsaWNlIiwiaW5kZXhPZiIsInJhbmdlIiwiZXZlcnkiLCJjaGVja0ZvckFsbFN1bmsiLCJhbGxDb25kaXRpb24iLCJmb3JFYWNoIiwiaXNTdW5rIiwiY29uZGl0aW9uIiwiY2xlYXJBbGwiLCJjdXIiLCJjb29yZCIsIm9wcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==