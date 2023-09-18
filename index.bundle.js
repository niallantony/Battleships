/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/modules/placementBoard.js":
/*!***************************************!*\
  !*** ./src/modules/placementBoard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlacementBoard: () => (/* binding */ PlacementBoard)
/* harmony export */ });
/* harmony import */ var _screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen.js */ "./src/modules/screen.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/modules/ship.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var PlacementBoard = function PlacementBoard(gameboard, onFinish) {
  var placing = false;
  var shipBar = document.getElementById('ship-bar');
  var ships = {
    carrier: {
      coords: [],
      horizontal: true,
      length: 5,
      placed: false
    },
    battleship: {
      coords: [],
      horizontal: true,
      length: 4,
      placed: false
    },
    cruiser: {
      coords: [],
      horizontal: true,
      length: 3,
      placed: false
    },
    submarine: {
      coords: [],
      horizontal: true,
      length: 3,
      placed: false
    },
    destroyer: {
      coords: [],
      horizontal: true,
      length: 2,
      placed: false
    }
  };
  var setShips = function setShips() {
    Object.keys(ships).forEach(function (ship) {
      var newShip = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(ship);
      gameboard.placeShip(newShip, ships[ship].coords[0], ships[ship].coords[1], ships[ship].horizontal);
    });
  };
  var checkForUnplaced = function checkForUnplaced() {
    return Object.keys(ships).some(function (ship) {
      return !ships[ship].placed;
    });
  };
  var drawPlacementBoard = function drawPlacementBoard() {
    var zoneDom = document.getElementById("left");
    var board = document.createElement('div');
    board.id = gameboard.id;
    zoneDom.appendChild(board);
    var size = gameboard.getLength();
    for (var i = 0; i < size; i++) {
      var rowContainer = document.createElement('div');
      rowContainer.classList.add('row');
      board.appendChild(rowContainer);
      for (var j = 0; j < size; j++) {
        var tile = document.createElement('button');
        tile.classList.add('tile');
        tile.id = "".concat(j, "-").concat(i);
        tile.setAttribute('style', 'position:relative;');
        tile.classList.add(gameboard.squareStatus(j, i));
        rowContainer.appendChild(tile);
      }
    }
  };
  var renderPlacementScreen = function renderPlacementScreen() {
    drawPlacementBoard();
    drawNextShipButton();
  };
  var drawNextShipButton = function drawNextShipButton() {
    var nextShip = makeNextShipButton();
    var button = nextShip ? nextShip : renderSubmitButton();
    if (nextShip) {
      button.addEventListener('click', function () {
        shipBar.removeChild(button);
        var ship = makeShip(button);
        shipPlacement(ship, ships[ship]);
      });
    } else {
      button.addEventListener('click', submit);
    }
    shipBar.appendChild(button);
  };
  var clearShipBar = function clearShipBar() {
    var existing = document.querySelector('.place-ship');
    if (existing) existing.parentNode.removeChild(existing);
  };
  var makeNextShipButton = function makeNextShipButton() {
    clearShipBar();
    for (var key in ships) {
      if (ships[key].placed) continue;
      var buttonText = String('Place ' + key).toUpperCase();
      var button = document.createElement('button');
      button.classList.add('place-ship');
      button.id = key;
      button.textContent = buttonText;
      return button;
    }
    return false;
  };
  var makeShip = function makeShip(button) {
    var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(button.id);
    ship.rotate();
    return ship;
  };
  var createTemplate = function createTemplate(ship) {
    var template = document.createElement('button');
    template.classList.add('placeholder');
    template.id = ship.name;
    template.style.position = 'absolute';
    template.style.top = '0px';
    template.style.left = '0px';
    template.style.backgroundImage = "url(".concat(_screen_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_IMAGES[ship.name]);
    return template;
  };
  var clearRotateButton = function clearRotateButton() {
    shipBar.querySelectorAll('.rotate').forEach(function (button) {
      return shipBar.removeChild(button);
    });
  };
  var createRotateButton = function createRotateButton() {
    clearRotateButton();
    var button = document.createElement('button');
    button.classList.add('rotate');
    button.textContent = 'Rotate';
    shipBar.appendChild(button);
    return button;
  };
  var shipPlacement = function shipPlacement(ship) {
    placing = true;
    var tiles = document.querySelectorAll('.tile');
    var template = createTemplate(ship);
    var board = document.getElementById('left');
    board.appendChild(template);
    renderShip(template, tiles[0].offsetWidth, ship);
    var illegalSquares = findIllegalSquares(ship);
    TEMPconsoleIllegalTiles(illegalSquares);
    var rotate = createRotateButton();
    rotate.addEventListener('click', function () {
      removeMarker(template);
      rotateShip(ship);
    });
    tiles.forEach(function (tile) {
      hoverImage(tile, template);
      if (illegalSquares.includes(tile.id)) {
        tile.classList.add('illegal');
        return;
      } else {
        tile.classList.remove('illegal');
      }
      tile.addEventListener('click', function (e) {
        placeTemplate(e.target.closest('.tile'), template, ship);
      });
    });
  };
  var findIllegalSquares = function findIllegalSquares(ship) {
    var illegalSquares = [];
    // Find out of bound squares
    for (var i = 0; i < gameboard.getLength(); i++) {
      for (var j = gameboard.getLength() - (ship.length - 1); j < gameboard.getLength(); j++) {
        var oobMove = ship.orientation ? [j, i] : [i, j];
        illegalSquares.push(oobMove.join('-'));
      }
    }
    //Get spaces that are obstructed by another ship
    var _loop = function _loop() {
      var spaceSet = new Set();
      if (!ships[key].placed) return "continue";
      var illMoves = getOccupiedSpaces(ships[key]);
      var arrayPointer = ship.orientation ? 0 : 1;
      illMoves.forEach(function (space) {
        spaceSet.add(space.join('-'));
        for (var _i = 0; _i < ship.length; _i++) {
          var nextSpace = _toConsumableArray(space);
          nextSpace[arrayPointer] = nextSpace[arrayPointer] - _i;
          if (nextSpace[arrayPointer] < 0) continue;
          spaceSet.add(nextSpace.join('-'));
        }
      });
      spaceSet.forEach(function (coord) {
        return illegalSquares.push(coord);
      });
    };
    for (var key in ships) {
      var _ret = _loop();
      if (_ret === "continue") continue;
    }
    return illegalSquares;
  };
  var getOccupiedSpaces = function getOccupiedSpaces(marker) {
    var spaces = new Set();
    var arrayPointer = marker.horizontal ? 0 : 1;
    for (var i = 0; i < marker.length; i++) {
      var currentCoord = _toConsumableArray(marker.coords);
      currentCoord[arrayPointer] = currentCoord[arrayPointer] + i;
      spaces.add(currentCoord);
    }
    return spaces;
  };
  var renderShip = function renderShip(image, unit, ship) {
    var width = ship.orientation ? unit * ship.length + 'px' : unit + 'px';
    var height = ship.orientation ? unit + 'px' : unit * ship.length + 'px';
    image.style.width = width;
    image.style.height = height;
  };
  var removeMarker = function removeMarker(template) {
    template.parentNode.removeChild(template);
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach(function (tile) {
      tile.replaceWith(tile.cloneNode(true));
    });
  };
  var rotateShip = function rotateShip(ship) {
    ship.rotate();
    shipPlacement(ship);
  };
  var moveShip = function moveShip(template, ship) {
    if (placing) return;
    clearShipBar();
    template.parentNode.removeChild(template);
    ships[ship.name].placed = false;
    shipPlacement(ship);
  };
  var placeTemplate = function placeTemplate(tile, template, ship) {
    clearRotateButton();
    var coords = _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTarget(tile);
    var position = calculateTemplatePosition(tile.offsetWidth, coords);
    template.style.top = position.top;
    template.style.left = position.left;
    template.style.zIndex = 10;
    ships[template.id].coords = coords;
    ships[template.id].horizontal = ship.orientation;
    ships[template.id].placed = true;
    template.addEventListener('click', function (e) {
      return moveShip(e.target.closest('.placeholder'), ship);
    });
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach(function (tile) {
      tile.replaceWith(tile.cloneNode(true));
    });
    placing = false;
    drawNextShipButton();
  };
  var calculateTemplatePosition = function calculateTemplatePosition(unit, coords) {
    var left = coords[0] * unit + 'px';
    var top = coords[1] * unit + 'px';
    return {
      left: left,
      top: top
    };
  };
  var renderSubmitButton = function renderSubmitButton() {
    var submitButton = document.createElement('button');
    submitButton.classList.add('submit-placement');
    submitButton.textContent = 'Submit';
    return submitButton;
  };
  var submit = function submit() {
    setShips();
    onFinish();
    shipBar.innerHTML = '';
  };
  var TEMPconsoleIllegalTiles = function TEMPconsoleIllegalTiles(illegal) {
    var consoleString = [''];
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if (illegal.includes("".concat(j, "-").concat(i))) {
          consoleString.push('X');
        } else {
          consoleString.push('O');
        }
      }
      consoleString.push('\n');
    }
    console.log(consoleString.join(' '));
  };
  var hoverImage = function hoverImage(element, img) {
    var event = element.addEventListener('mouseover', function (e) {
      var tile = e.target.closest('.tile');
      var coords = _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTarget(tile);
      var pos = calculateTemplatePosition(tile.offsetWidth, coords);
      if (tile.classList.contains('illegal')) {
        img.classList.add('out-of-bounds');
      } else {
        img.classList.remove('out-of-bounds');
      }
      img.style.top = pos.top;
      img.style.left = pos.left;
    });
    return event;
  };
  return {
    renderPlacementScreen: renderPlacementScreen
  };
};

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen.js */ "./src/modules/screen.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/modules/ship.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


var Player = function Player(id, gameboard) {
  var makeMove = function makeMove(tile, opponentBoard) {
    if (!tile) throw new Error("Not a tile.");
    try {
      var move = opponentBoard.hitSquare(tile[0], tile[1]);
      if (_typeof(move) === 'object' && move.isSunk()) _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].sunkShip(move);
      _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderPlayerMove(tile, opponentBoard);
      return false;
    } catch (error) {
      console.log(error);
      return true;
    }
  };
  return {
    playing: false,
    id: id,
    gameboard: gameboard,
    makeMove: makeMove
  };
};
var Computer = function Computer(id, gameboard) {
  var currentSuccess = [];
  var makeShips = function makeShips() {
    return {
      carrier: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('carrier'),
      battleship: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('battleship'),
      cruiser: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('cruiser'),
      submarine: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('submarine'),
      destroyer: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('destroyer')
    };
  };
  var SQUARES_AROUND = function SQUARES_AROUND(x, y) {
    return {
      up: [x, y - 1],
      right: [x + 1, y],
      down: [x, y + 1],
      left: [x - 1, y]
    };
  };
  var place = function place() {
    var ships = makeShips();
    Object.keys(ships).forEach(function (ship) {
      var placed = false;
      while (!placed) {
        var x = Math.floor(Math.random() * gameboard.getLength());
        var y = Math.floor(Math.random() * gameboard.getLength());
        var orientation = Math.floor(Math.random() * 2) ? true : false;
        try {
          gameboard.placeShip(ships[ship], x, y, orientation);
          placed = true;
        } catch (err) {
          console.log(err);
          console.log("Cannot place at: ", x, y, " with ", orientation, " orientation.");
        }
      }
    });
  };
  var playTile = function playTile(tile) {
    if (!tile) return;
    try {
      var hit = gameboard.opponent.gameboard.hitSquare(tile[0], tile[1]);
      if (hit === true) {
        return 'miss';
      } else {
        return hit;
      }
    } catch (error) {
      console.log(error);
    }
  };
  var generateRandomCoords = function generateRandomCoords() {
    var boundary = gameboard.getLength();
    var ranX = Math.floor(Math.random() * boundary);
    var ranY = Math.floor(Math.random() * boundary);
    return [ranX, ranY];
  };
  var makeMove = function makeMove() {
    console.log("Current Success: ", currentSuccess);
    if (currentSuccess.length) {
      educatedMove();
    } else {
      dumbMove();
    }
  };
  var dumbMove = function dumbMove() {
    var moveTaken = false;
    var coords;
    if (!gameboard.opponent.gameboard.checkForEmpty()) {
      throw new Error("No More Space");
    }
    while (!moveTaken) {
      coords = generateRandomCoords();
      moveTaken = playTile(coords);
    }
    if (_typeof(moveTaken) === 'object') {
      populateCurrentSuccess(coords, moveTaken);
    }
    _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderComputerMove(coords, gameboard.opponent.gameboard);
  };
  var targetShip = function targetShip(coords, ship) {
    var potentialMoves = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    var nextMove = function nextMove() {
      var randomChoice = Math.floor(Math.random() * potentialMoves.length);
      var heading = potentialMoves.splice(randomChoice, 1).flat();
      console.table(potentialMoves);
      console.log("heading: ", heading);
      var move = [coords[0] + heading[0], coords[1] + heading[1]];
      return {
        attack: move,
        heading: heading
      };
    };
    var recalculatePotentialMoves = function recalculatePotentialMoves(heading, attack) {
      console.log("Recalculating... ", heading, attack);
      var newHeading = [coords[0] - attack[0], coords[1] - attack[1]];
      var axis = heading[0] != 0 ? 0 : 1;
      newHeading[axis] = heading[axis] > 0 ? heading[axis] + 1 : heading[axis] - 1;
      var stillValid = potentialMoves.filter(function (heading) {
        return heading[axis] != 0;
      });
      stillValid.push(newHeading);
      potentialMoves.length = 0;
      stillValid.forEach(function (coord) {
        return potentialMoves.push(coord);
      });
      console.table(potentialMoves);
    };
    return {
      coords: coords,
      target: ship,
      potentialMoves: potentialMoves,
      nextMove: nextMove,
      recalculatePotentialMoves: recalculatePotentialMoves
    };
  };
  var populateCurrentSuccess = function populateCurrentSuccess(coords, ship) {
    currentSuccess.push(targetShip(coords, ship));
  };
  var educatedMove = function educatedMove() {
    console.log("Making educated move...");
    var moveTaken = false;
    var coords;
    var currentTarget = currentSuccess[0];
    if (!gameboard.opponent.gameboard.checkForEmpty()) {
      throw new Error("No More Space");
    }
    while (!moveTaken) {
      coords = currentTarget.nextMove();
      console.log("Playing : ", coords);
      moveTaken = playTile(coords.attack);
    }
    console.log(moveTaken);
    if (_typeof(moveTaken) === 'object' && moveTaken.isSunk()) {
      console.log("Deleting: ", currentSuccess[0]);
      currentSuccess.shift();
    } else if (_typeof(moveTaken) === 'object' && moveTaken === currentTarget.target) {
      currentTarget.recalculatePotentialMoves(coords.heading, coords.attack);
    } else if (_typeof(moveTaken) === 'object') {
      populateCurrentSuccess(coords.attack, moveTaken);
    }
    _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderComputerMove(coords.attack, gameboard.opponent.gameboard);
  };
  return {
    id: id,
    gameboard: gameboard,
    isComp: true,
    generateRandomCoords: generateRandomCoords,
    makeMove: makeMove,
    place: place
  };
};

/***/ }),

/***/ "./src/modules/screen.js":
/*!*******************************!*\
  !*** ./src/modules/screen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHIP_IMAGES: () => (/* binding */ SHIP_IMAGES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/modules/ship.js");
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/battleship.png */ "./src/images/battleship.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var SHIP_IMAGES = {
  battleship: _images_battleship_png__WEBPACK_IMPORTED_MODULE_1__
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var onNext;
  var moveReady = true;
  var drawMainMenu = function drawMainMenu() {
    var body = document.querySelector('body');
    var menuPan = document.createElement('div');
    var gameTitle = document.createElement('div');
    gameTitle.classList.add('game-title');
    gameTitle.textContent = 'Battleships!';
    menuPan.appendChild(gameTitle);
    body.appendChild(menuPan);
    var buttonBar = document.createElement('div');
    var startSingle = document.createElement('button');
    var startDouble = document.createElement('button');
    buttonBar.appendChild(startSingle, startDouble);
    menuPan.appendChild(buttonBar);
    startSingle.textContent = 'Single Player';
    startDouble.textContent = 'Two Player';
  };
  var drawDefault = function drawDefault() {
    var body = document.querySelector('body');
    var gamearea = document.createElement('div');
    var left = document.createElement('div');
    var right = document.createElement('div');
    var shipbar = document.createElement('div');
    body.appendChild(gamearea, shipbar);
    gamearea.appendChild(left, right);
    gamearea.id = 'gamearea';
    left.id = 'left';
    right.id = 'right';
    shipbar.id = 'shipbar';
  };
  var drawActiveBoard = function drawActiveBoard(gameboard) {
    var zoneDom = document.getElementById("left");
    var board = document.createElement('div');
    board.id = gameboard.id;
    zoneDom.appendChild(board);
    var size = gameboard.getLength();
    for (var i = 0; i < size; i++) {
      var rowContainer = document.createElement('div');
      rowContainer.classList.add('row');
      board.appendChild(rowContainer);
      for (var j = 0; j < size; j++) {
        var tile = document.createElement('button');
        tile.classList.add('tile');
        tile.classList.add(gameboard.squareStatus(j, i));
        rowContainer.appendChild(tile);
      }
    }
    board.addEventListener("click", function (e) {
      try {
        var _tile = getTarget(e.target.closest('button'));
        if (!moveReady) return;
        moveReady = gameboard.opponent.makeMove(_tile, gameboard);
      } catch (err) {
        console.log(err);
      }
    });
  };
  var drawDummyActiveBoard = function drawDummyActiveBoard(gameboard) {
    var zoneDom = document.getElementById("left");
    var board = document.createElement('div');
    board.id = gameboard.id;
    zoneDom.appendChild(board);
    var size = gameboard.getLength();
    for (var i = 0; i < size; i++) {
      var rowContainer = document.createElement('div');
      rowContainer.classList.add('row');
      board.appendChild(rowContainer);
      for (var j = 0; j < size; j++) {
        var tile = document.createElement('button');
        tile.classList.add('tile');
        tile.classList.add(gameboard.squareStatus(j, i));
        rowContainer.appendChild(tile);
      }
    }
  };
  var drawReconBoard = function drawReconBoard(gameboard) {
    var zoneDom = document.getElementById("right");
    var board = document.createElement('div');
    board.id = gameboard.id;
    zoneDom.appendChild(board);
    var size = gameboard.getLength();
    for (var i = 0; i < size; i++) {
      var rowContainer = document.createElement('div');
      rowContainer.classList.add('row');
      board.appendChild(rowContainer);
      for (var j = 0; j < size; j++) {
        var tile = document.createElement('button');
        tile.classList.add('tile');
        tile.classList.add(gameboard.squareStatus(j, i));
        rowContainer.appendChild(tile);
      }
    }
    drawShips(gameboard, gameboard.id);
  };
  var drawHiddenReconBoard = function drawHiddenReconBoard(gameboard) {
    var zoneDom = document.getElementById("right");
    var board = document.createElement('div');
    board.id = gameboard.id;
    zoneDom.appendChild(board);
    var size = gameboard.getLength();
    //draw the tiles to maintain size consistency
    for (var i = 0; i < size; i++) {
      var rowContainer = document.createElement('div');
      rowContainer.classList.add('row');
      board.appendChild(rowContainer);
      for (var j = 0; j < size; j++) {
        var tile = document.createElement('div');
        tile.classList.add('tile');
        rowContainer.appendChild(tile);
      }
    }
    var hidden = document.createElement('div');
    hidden.textContent = "Data Encrypted...";
    hidden.classList.add('hidden-board');
    board.appendChild(hidden);
  };
  var refresh = function refresh(current, previous) {
    var activeArea = document.getElementById('left');
    var reconArea = document.getElementById('right');
    activeArea.innerHTML = '';
    reconArea.innerHTML = '';
    if (!current.isComp) {
      drawActiveBoard(previous.gameboard);
      drawReconBoard(current.gameboard);
    } else {
      drawDummyActiveBoard(previous.gameboard);
      drawHiddenReconBoard(current.gameboard);
      drawShips(previous.gameboard, previous.gameboard.id);
    }
  };
  var renderComputerMove = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(coords, gameboard) {
      var activeZone, row, cell, removeAttackMarker, stallNextTurn;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            moveReady = false;
            activeZone = document.getElementById("left").querySelector('div');
            row = activeZone.children[coords[1]];
            cell = row.children[coords[0]];
            cell.classList.add('attack');
            _context.next = 7;
            return promisify(function () {
              return cell.classList.remove('attack');
            }, 1000);
          case 7:
            removeAttackMarker = _context.sent;
            removeAttackMarker();
            //get result of attack
            cell.classList.add(gameboard.squareStatus(coords[0], coords[1]));
            _context.next = 12;
            return stallComputerMove();
          case 12:
            stallNextTurn = _context.sent;
            stallNextTurn();
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function renderComputerMove(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var renderPlayerMove = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(coords, gameboard) {
      var activeZone, row, cell, removeAttackMarker, showPlayersTurn;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            activeZone = document.getElementById("left").querySelector('div');
            row = activeZone.children[coords[1]];
            cell = row.children[coords[0]];
            cell.classList.add('attack');
            _context2.next = 6;
            return promisify(function () {
              return cell.classList.remove('attack');
            }, 1000);
          case 6:
            removeAttackMarker = _context2.sent;
            removeAttackMarker();
            //get result of attack
            cell.classList.add(gameboard.squareStatus(coords[0], coords[1]));
            _context2.next = 11;
            return showPlayerResult();
          case 11:
            showPlayersTurn = _context2.sent;
            showPlayersTurn();
            moveReady = true;
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function renderPlayerMove(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var sunkShip = function sunkShip(ship) {
    console.log(ship.name, ' is a goner');
  };
  var showPlayerResult = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var playerResultTimer;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return promisify(onNext, 2000);
          case 2:
            playerResultTimer = _context3.sent;
            return _context3.abrupt("return", playerResultTimer);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function showPlayerResult() {
      return _ref3.apply(this, arguments);
    };
  }();
  var stallComputerMove = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var computerFinished;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return promisify(onNext, 2000);
          case 2:
            computerFinished = _context4.sent;
            moveReady = true;
            return _context4.abrupt("return", computerFinished);
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function stallComputerMove() {
      return _ref4.apply(this, arguments);
    };
  }();
  var promisify = function promisify(callback, timer) {
    return new Promise(function (resolve) {
      return setTimeout(function () {
        return resolve(callback);
      }, timer);
    });
  };
  var drawShips = function drawShips(gameboard, onboard) {
    var ships = gameboard.getShips();
    var playzone = document.getElementById(onboard);
    ships.forEach(function (ship) {
      var dimensions = calculateScreenPosition(playzone, gameboard.getLength(), ship);
      playzone.appendChild(drawShip(dimensions));
    });
  };
  var drawShip = function drawShip(dimensions) {
    var ship = document.createElement('div');
    ship.classList.add('ship-marker');
    ship.setAttribute('style', "top:".concat(dimensions.top, ";left:").concat(dimensions.left, ";width:").concat(dimensions.length, ";height:").concat(dimensions.height));
    return ship;
  };
  var calculateScreenPosition = function calculateScreenPosition(zone, scale, ship) {
    var unit = zone.offsetWidth / scale;
    var left = Math.floor(ship.position[0][0] * unit) + 'px';
    var top = Math.floor(ship.position[0][1] * unit) + 'px';
    var length = ship.orientation ? ship.length * unit : unit;
    var height = ship.orientation ? unit : ship.length * unit;
    return {
      top: top,
      left: left,
      length: length + 'px',
      height: height + 'px'
    };
  };
  var getTarget = function getTarget(button) {
    if (!button) return;
    var target = button;
    var parent = target.parentNode;
    var board = document.getElementById(parent.parentNode.id);
    // Find the coordinates through the elements position amongst its siblings
    var y = Array.prototype.indexOf.call(board.children, parent);
    var x = Array.prototype.indexOf.call(parent.children, target);
    return [x, y];
  };
  var endGame = function endGame() {
    console.log('Game Over');
  };
  return {
    drawShips: drawShips,
    renderComputerMove: renderComputerMove,
    endGame: endGame,
    getTarget: getTarget,
    refresh: refresh,
    sunkShip: sunkShip,
    renderPlayerMove: renderPlayerMove,
    drawMainMenu: drawMainMenu,
    drawDefault: drawDefault,
    set onNext(nextTurn) {
      onNext = nextTurn;
    }
  };
})());

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
var Ship = function Ship() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var hitCounter = 0;
  var orientation = false;
  var rotate = function rotate() {
    orientation = !orientation;
  };
  var SHIP_SIZES = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
  };
  var hit = function hit() {
    hitCounter++;
  };
  var isSunk = function isSunk() {
    return hitCounter >= SHIP_SIZES[name];
  };
  return {
    hit: hit,
    isSunk: isSunk,
    position: [],
    get orientation() {
      return orientation;
    },
    set orientation(or) {
      orientation = or;
    },
    rotate: rotate,
    get name() {
      var arrayedName = name.split('');
      arrayedName[0].toUpperCase();
      return arrayedName.join('');
    },
    get length() {
      return SHIP_SIZES[name];
    }
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --tile:  rgba(200,200,200,0.1);
    --tile-attack: rgba(255,150,150,0.9);
    --tile-hit: rgba(255,200,200,0.8);
    --tile-miss: rgba(200,200,255,0.8);
    --tile-hover: rgba(230,200,200,0.4);
}

#gamearea {
    display: flex;
}

#right {
    position: relative;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#left .ship {
    background-color: blue;
}

#right .ship {
    background-color: red;
}

#left,
#right {
    margin: 2rem;
    position:relative;
}

.tile.miss {
    background-color: var(--tile-miss);
}

.tile.hit {
    background-color: var(--tile-hit);
}

.row {
    display:flex;
}

.tile {
    height: 100%;
    width: 100%;
    padding: 1rem;
    flex:1;
    z-index: 2;
    margin: 0;
    background: var(--tile);
    border: 0;
}

.tile {
    background-color: var(--tile);
}

button.tile:hover {
    background-color: var(--tile-hover);
}

.hidden-board {
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
    width:50%;
    height: fit-content;
    padding: 1rem;
    background-color: var(--tile-hit);
    text-align: center;
    border-radius: 5px;
}

#player-one,
#player-two {
    position:relative;
}

.ship-marker {
    position:absolute;
    background-color: aqua;
}

/* button {
    padding: 0;
    margin: 0;
    background-color: var(--tile);
    border: 0;
} */

button.tile.attack {
    animation: attack-pulse 0.5s infinite;
    animation-direction: alternate;
}

@keyframes attack-pulse {
    0% {
        background-color: var(--tile-attack) ;
    }
    100% {
        background-color: var(--tile);
    }
}

.place-ship {
    background-color: blue;
    border-radius: 5px;
    padding: 1rem;
    color: white;
}

.place-ship:hover {
    background-color: #3333FF;
}

.place-ship:active {
    transform: scale(103%);
}

.placeholder {
    border:0;
    margin:0;
    padding:0;
}

.placeholder:hover {
    background-color: rgb(255, 255, 255);
}

.out-of-bounds {
    background-color: red;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,iCAAiC;IACjC,kCAAkC;IAClC,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,MAAM;IACN,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,KAAK;IACL,QAAQ;IACR,MAAM;IACN,OAAO;IACP,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;;;;;GAKG;;AAEH;IACI,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI;QACI,qCAAqC;IACzC;IACA;QACI,6BAA6B;IACjC;AACJ;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":[":root {\n    --tile:  rgba(200,200,200,0.1);\n    --tile-attack: rgba(255,150,150,0.9);\n    --tile-hit: rgba(255,200,200,0.8);\n    --tile-miss: rgba(200,200,255,0.8);\n    --tile-hover: rgba(230,200,200,0.4);\n}\n\n#gamearea {\n    display: flex;\n}\n\n#right {\n    position: relative;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n#left .ship {\n    background-color: blue;\n}\n\n#right .ship {\n    background-color: red;\n}\n\n#left,\n#right {\n    margin: 2rem;\n    position:relative;\n}\n\n.tile.miss {\n    background-color: var(--tile-miss);\n}\n\n.tile.hit {\n    background-color: var(--tile-hit);\n}\n\n.row {\n    display:flex;\n}\n\n.tile {\n    height: 100%;\n    width: 100%;\n    padding: 1rem;\n    flex:1;\n    z-index: 2;\n    margin: 0;\n    background: var(--tile);\n    border: 0;\n}\n\n.tile {\n    background-color: var(--tile);\n}\n\nbutton.tile:hover {\n    background-color: var(--tile-hover);\n}\n\n.hidden-board {\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    width:50%;\n    height: fit-content;\n    padding: 1rem;\n    background-color: var(--tile-hit);\n    text-align: center;\n    border-radius: 5px;\n}\n\n#player-one,\n#player-two {\n    position:relative;\n}\n\n.ship-marker {\n    position:absolute;\n    background-color: aqua;\n}\n\n/* button {\n    padding: 0;\n    margin: 0;\n    background-color: var(--tile);\n    border: 0;\n} */\n\nbutton.tile.attack {\n    animation: attack-pulse 0.5s infinite;\n    animation-direction: alternate;\n}\n\n@keyframes attack-pulse {\n    0% {\n        background-color: var(--tile-attack) ;\n    }\n    100% {\n        background-color: var(--tile);\n    }\n}\n\n.place-ship {\n    background-color: blue;\n    border-radius: 5px;\n    padding: 1rem;\n    color: white;\n}\n\n.place-ship:hover {\n    background-color: #3333FF;\n}\n\n.place-ship:active {\n    transform: scale(103%);\n}\n\n.placeholder {\n    border:0;\n    margin:0;\n    padding:0;\n}\n\n.placeholder:hover {\n    background-color: rgb(255, 255, 255);\n}\n\n.out-of-bounds {\n    background-color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e8f9c1b15ff5a8c30ea.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/screen.js */ "./src/modules/screen.js");
/* harmony import */ var _modules_placementBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/placementBoard.js */ "./src/modules/placementBoard.js");
/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player.js */ "./src/modules/player.js");
/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/gameboard.js */ "./src/modules/gameboard.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





var Game = function () {
  var currentPlayer;
  var players = [];
  var playerOneBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, "player-one");
  var playerTwoBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, "player-two");
  var playerOne = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)("player-one", playerOneBoard);
  var playerTwo = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Computer)("player-two", playerTwoBoard);
  playerOneBoard.opponent = playerTwo;
  playerTwoBoard.opponent = playerOne;
  var singleInitialise = function singleInitialise(name) {
    var playerOneBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, name);
    var playerTwoBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, "Computer");
    var playerOne = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)(name, playerOneBoard);
    var playerTwo = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Computer)(name, "Computer");
    players.push(playerOne);
    players.push(playerTwo);
    playerOneBoard.opponent = playerTwo;
    playerTwoBoard.opponent = playerOne;
    startGame(playerOne, playerTwo);
  };
  var doubleInitialise = function doubleInitialise(name, secondname) {
    var playerOneBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, name);
    var playerTwoBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, secondname);
    var playerOne = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)(name, playerOneBoard);
    var playerTwo = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)(secondname, playerTwoBoard);
    playerOneBoard.opponent = playerTwo;
    playerTwoBoard.opponent = playerOne;
    startGame(playerOne, playerTwo);
  };
  var initialiseGame = function initialiseGame() {
    currentPlayer = playerTwo;
    _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].onNext = turnOver;
    nextPlayer();
  };
  var turnOver = function turnOver() {
    if (currentPlayer.gameboard.checkForAllSunk()) {
      _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].endGame();
      return;
    }
    nextPlayer();
  };
  var nextPlayer = function nextPlayer() {
    var previous = currentPlayer;
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].refresh(currentPlayer, previous);
    if (currentPlayer.isComp) {
      currentPlayer.makeMove();
    }
  };
  var shipPlacement = function shipPlacement(player, cb) {
    // const opponentBoard = player === playerOne ? playerTwo.gameboard : playerOne.gameboard;
    var placement = (0,_modules_placementBoard_js__WEBPACK_IMPORTED_MODULE_1__.PlacementBoard)(player.gameboard, cb);
    placement.renderPlacementScreen();
  };
  var computerPlace = function computerPlace(player, cb) {
    console.log(player);
    player.place();
    cb();
  };
  var startGame = function startGame(playerOne, playerTwo) {
    var afterPlace = playerTwo.isComp ? computerPlace : shipPlacement;
    shipPlacement(playerOne, function () {
      return afterPlace(playerTwo, initialiseGame);
    });
  };
  startGame(playerOne, playerTwo);
  return {};
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCwwRUFBYyxDQUFDMlgsTUFBTSxDQUFDMVgsU0FBUyxFQUFFMlgsRUFBRSxDQUFDO0lBQ3REQyxTQUFTLENBQUMvVixxQkFBcUIsQ0FBQyxDQUFDO0VBQ3JDLENBQUM7RUFFRCxJQUFNZ1csYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJSCxNQUFNLEVBQUVDLEVBQUUsRUFBSztJQUNsQ3BSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDa1IsTUFBTSxDQUFDO0lBQ25CQSxNQUFNLENBQUM1UCxLQUFLLENBQUMsQ0FBQztJQUNkNlAsRUFBRSxDQUFDLENBQUM7RUFDUixDQUFDO0VBRUQsSUFBTVAsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlILFNBQVMsRUFBRUMsU0FBUyxFQUFLO0lBQ3hDLElBQU1ZLFVBQVUsR0FBR1osU0FBUyxDQUFDdk4sTUFBTSxHQUFHa08sYUFBYSxHQUFHdlYsYUFBYTtJQUNuRUEsYUFBYSxDQUFDMlUsU0FBUyxFQUFFO01BQUEsT0FBTWEsVUFBVSxDQUFDWixTQUFTLEVBQUVLLGNBQWMsQ0FBQztJQUFBLEVBQUM7RUFDekUsQ0FBQztFQUVESCxTQUFTLENBQUNILFNBQVMsRUFBQ0MsU0FBUyxDQUFDO0VBRTlCLE9BQU8sQ0FDUCxDQUFDO0FBQ0wsQ0FBQyxDQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BsYWNlbWVudEJvYXJkLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoc2l6ZSxpZCA9IG51bGwpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGNvbnN0IHR1cm5zID0gW107XG4gICAgY29uc3QgU3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICBjb29yZHM6IFt4LHldLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRSb3cgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goU3F1YXJlKGksaW5kZXgpKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgcm93cy5wdXNoKGJ1aWxkUm93KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVTcXVhcmVbeV1beF07XG4gICAgfVxuXG4gICAgY29uc3Qgc3F1YXJlU3RhdHVzID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQgJiYgZ2FtZVNxdWFyZVt5XVt4XS5zaGlwKSByZXR1cm4gJ2hpdCc7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCkgcmV0dXJuICdtaXNzJztcbiAgICAgICAgcmV0dXJuICdlbXB0eSdcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVTcXVhcmUgPSBidWlsZFNxdWFyZShzaXplKTtcblxuICAgIGNvbnN0IGhpdFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lU3F1YXJlW3ldIHx8ICFnYW1lU3F1YXJlW3ldW3hdKSB0aHJvdyBuZXcgRXJyb3IoXCJPdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQpIHRocm93IG5ldyBFcnJvcihcIlNxdWFyZSBhbHJlYWR5IGhpdFwiKTtcbiAgICAgICAgZ2FtZVNxdWFyZVt5XVt4XS5oaXQgPSB0cnVlO1xuICAgICAgICB0dXJucy5wdXNoKFt4LHldKTtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uc2hpcCkge1xuICAgICAgICAgICAgZ2FtZVNxdWFyZVt5XVt4XS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVTcXVhcmVbeV1beF0uc2hpcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGNoZWNrRm9yRW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0dXJucy5sZW5ndGggPCAoc2l6ZSpzaXplKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCx4LHksaG9yaXpvbnRhbCkgPT4ge1xuICAgICAgICBjb25zdCBheGlzID0gaG9yaXpvbnRhbCA/IHggOiB5IDtcbiAgICAgICAgaWYgKCFjaGVja0JvdW5kYXJpZXMoYXhpcyxzaGlwLmxlbmd0aCkpIHRocm93IG5ldyBFcnJvcihcIlNoaXAgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgaWYgKCFjaGVja0ZvclNoaXBzKHNoaXAubGVuZ3RoLHgseSxob3Jpem9udGFsKSkgdGhyb3cgbmV3IEVycm9yKFwiU3BhY2Ugb2NjdXBpZWRcIik7XG4gICAgICAgIHNoaXAub3JpZW50YXRpb24gPSBob3Jpem9udGFsO1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVt5XVt4K2ldLnNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ucHVzaChnYW1lU3F1YXJlW3ldW3graV0uY29vcmRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVt5K2ldW3hdLnNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ucHVzaChnYW1lU3F1YXJlW3kraV1beF0uY29vcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNoaXAucG9zaXRpb24ucG9wKCk7XG4gICAgICAgICAgICBnYW1lU3F1YXJlW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXS5zaGlwID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5zcGxpY2Uoc2hpcHMuaW5kZXhPZihzaGlwKSwxKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvclNoaXBzID0gKGxlbmd0aCx4LHksaG9yaXpvbnRhbCkgPT4ge1xuICAgICAgICAvL0J1aWxkcyBhbiBhcnJheSBvZiBzcGFjZXMgdGhlIHNoaXAgd2lsbCBvY2N1cHlcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHJhbmdlLnB1c2goZ2FtZVNxdWFyZVt5XVt4K2ldLnNoaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZS5wdXNoKGdhbWVTcXVhcmVbeStpXVt4XS5zaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL1JldHVybnMgdHJ1ZSBpZiBhbGwgYXJlIGVtcHR5XG4gICAgICAgIHJldHVybiByYW5nZS5ldmVyeShzaGlwID0+IHNoaXAgPT09IG51bGwpO1xuICAgIH1cblxuXG4gICAgY29uc3QgY2hlY2tCb3VuZGFyaWVzID0gKGF4aXMsbGVuZ3RoKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlzICsgbGVuZ3RoID4gc2l6ZSA/IGZhbHNlIDogdHJ1ZTsgXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JBbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxDb25kaXRpb24gPSBbXVxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBhbGxDb25kaXRpb24ucHVzaChzaGlwLmlzU3VuaygpKSk7XG4gICAgICAgIHJldHVybiBhbGxDb25kaXRpb24uZXZlcnkoY29uZGl0aW9uID0+IGNvbmRpdGlvbiA9PT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNoaXBzLmxlbmd0aCA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1ciA9IHNoaXBzLnBvcCgpO1xuICAgICAgICAgICAgY3VyLnBvc2l0aW9uLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVtjb29yZFsxXV1bY29vcmRbMF1dLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TGVuZ3RoLFxuICAgICAgICBoaXRTcXVhcmUsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgY2xlYXJTaGlwLFxuICAgICAgICBjaGVja0ZvckFsbFN1bmssXG4gICAgICAgIGdldFNxdWFyZSxcbiAgICAgICAgY2hlY2tGb3JFbXB0eSxcbiAgICAgICAgZ2V0U2hpcHMsXG4gICAgICAgIGNsZWFyQWxsLFxuICAgICAgICBzcXVhcmVTdGF0dXMsXG4gICAgICAgIG9wcG9uZW50Om51bGwsXG4gICAgICAgIGlkLFxuICAgIH1cblxufTsiLCJpbXBvcnQgU2NyZWVuIGZyb20gXCIuL3NjcmVlbi5qc1wiXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiXG5pbXBvcnQgeyBTSElQX0lNQUdFUyB9IGZyb20gXCIuL3NjcmVlbi5qc1wiXG5cbmV4cG9ydCBjb25zdCBQbGFjZW1lbnRCb2FyZCA9IChnYW1lYm9hcmQsIG9uRmluaXNoKSA9PiB7XG4gICAgbGV0IHBsYWNpbmcgPSBmYWxzZTtcbiAgICBjb25zdCBzaGlwQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtYmFyJyk7XG5cbiAgICBjb25zdCBzaGlwcyA9IHtcbiAgICAgICAgY2Fycmllcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6NSxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYmF0dGxlc2hpcDp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6NCxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgY3J1aXNlcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MyxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWFyaW5lOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDozLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95ZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjIsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKHNoaXApO1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLHNoaXBzW3NoaXBdLmNvb3Jkc1swXSxzaGlwc1tzaGlwXS5jb29yZHNbMV0sc2hpcHNbc2hpcF0uaG9yaXpvbnRhbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JVbnBsYWNlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHNoaXBzKS5zb21lKChzaGlwKSA9PiB7cmV0dXJuICFzaGlwc1tzaGlwXS5wbGFjZWR9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdQbGFjZW1lbnRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmlkID0gYCR7an0tJHtpfWA7XG4gICAgICAgICAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywncG9zaXRpb246cmVsYXRpdmU7JylcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQbGFjZW1lbnRTY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGRyYXdQbGFjZW1lbnRCb2FyZCgpO1xuICAgICAgICBkcmF3TmV4dFNoaXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3TmV4dFNoaXBCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRTaGlwID0gbWFrZU5leHRTaGlwQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5leHRTaGlwID8gbmV4dFNoaXAgOiByZW5kZXJTdWJtaXRCdXR0b24oKTtcbiAgICAgICAgaWYgKG5leHRTaGlwKSB7YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICBzaGlwQmFyLnJlbW92ZUNoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbWFrZVNoaXAoYnV0dG9uKTtcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCxzaGlwc1tzaGlwXSk7XG4gICAgICAgIH0pO30gZWxzZSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXQpO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclNoaXBCYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLXNoaXAnKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSBleGlzdGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGV4aXN0aW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlTmV4dFNoaXBCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyU2hpcEJhcigpO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChzaGlwc1trZXldLnBsYWNlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gU3RyaW5nKCdQbGFjZSAnKyBrZXkpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGFjZS1zaGlwJyk7XG4gICAgICAgICAgICBidXR0b24uaWQgPSBrZXk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgfSAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVNoaXAgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGJ1dHRvbi5pZCk7XG4gICAgICAgIHNoaXAucm90YXRlKCk7XG4gICAgICAgIHJldHVybiBzaGlwXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICB0ZW1wbGF0ZS5pZCA9IHNoaXAubmFtZTtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7U0hJUF9JTUFHRVNbc2hpcC5uYW1lXX1gO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJSb3RhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHNoaXBCYXIucXVlcnlTZWxlY3RvckFsbCgnLnJvdGF0ZScpLmZvckVhY2goKGJ1dHRvbikgPT4gc2hpcEJhci5yZW1vdmVDaGlsZChidXR0b24pKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVSb3RhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdSb3RhdGUnO1xuICAgICAgICBzaGlwQmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKHNoaXApID0+IHtcbiAgICAgICAgcGxhY2luZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZShzaGlwKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHJlbmRlclNoaXAodGVtcGxhdGUsdGlsZXNbMF0ub2Zmc2V0V2lkdGgsc2hpcCk7XG4gICAgICAgIGNvbnN0IGlsbGVnYWxTcXVhcmVzID0gZmluZElsbGVnYWxTcXVhcmVzKHNoaXApO1xuICAgICAgICBURU1QY29uc29sZUlsbGVnYWxUaWxlcyhpbGxlZ2FsU3F1YXJlcyk7XG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IGNyZWF0ZVJvdGF0ZUJ1dHRvbigpO1xuICAgICAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU1hcmtlcih0ZW1wbGF0ZSk7XG4gICAgICAgICAgICByb3RhdGVTaGlwKHNoaXApO1xuICAgICAgICB9KVxuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICBob3ZlckltYWdlKHRpbGUsdGVtcGxhdGUpO1xuICAgICAgICAgICAgaWYgKGlsbGVnYWxTcXVhcmVzLmluY2x1ZGVzKHRpbGUuaWQpKSB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdpbGxlZ2FsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2lsbGVnYWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhY2VUZW1wbGF0ZShlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpLHRlbXBsYXRlLHNoaXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRJbGxlZ2FsU3F1YXJlcyA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGlsbGVnYWxTcXVhcmVzID0gW107XG4gICAgICAgIC8vIEZpbmQgb3V0IG9mIGJvdW5kIHNxdWFyZXNcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGdhbWVib2FyZC5nZXRMZW5ndGgoKSA7IGkrKyApIHtcbiAgICAgICAgICAgIGZvciAoIGxldCBqID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpIC0gKHNoaXAubGVuZ3RoIC0gMSk7IGogPCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb29iTW92ZSA9IHNoaXAub3JpZW50YXRpb24gPyBbaixpXSA6IFtpLGpdIDtcbiAgICAgICAgICAgICAgICBpbGxlZ2FsU3F1YXJlcy5wdXNoKG9vYk1vdmUuam9pbignLScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL0dldCBzcGFjZXMgdGhhdCBhcmUgb2JzdHJ1Y3RlZCBieSBhbm90aGVyIHNoaXBcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNoaXBzKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZVNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGlmICghc2hpcHNba2V5XS5wbGFjZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgaWxsTW92ZXMgPSBnZXRPY2N1cGllZFNwYWNlcyhzaGlwc1trZXldKTtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5UG9pbnRlciA9IHNoaXAub3JpZW50YXRpb24gPyAwIDogMTsgXG4gICAgICAgICAgICBpbGxNb3Zlcy5mb3JFYWNoKChzcGFjZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNwYWNlU2V0LmFkZChzcGFjZS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIGZvciggbGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3BhY2UgPSBbLi4uc3BhY2VdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0U3BhY2VbYXJyYXlQb2ludGVyXSA9IG5leHRTcGFjZVthcnJheVBvaW50ZXJdIC0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTcGFjZVthcnJheVBvaW50ZXJdIDwgMCkgY29udGludWUgOyBcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VTZXQuYWRkKG5leHRTcGFjZS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3BhY2VTZXQuZm9yRWFjaCgoY29vcmQpID0+IGlsbGVnYWxTcXVhcmVzLnB1c2goY29vcmQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWxsZWdhbFNxdWFyZXM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0T2NjdXBpZWRTcGFjZXMgPSAobWFya2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYWNlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgYXJyYXlQb2ludGVyID0gbWFya2VyLmhvcml6b250YWwgPyAwIDogMSA7XG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBtYXJrZXIubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvb3JkID0gWy4uLm1hcmtlci5jb29yZHNdO1xuICAgICAgICAgICAgY3VycmVudENvb3JkW2FycmF5UG9pbnRlcl0gPSBjdXJyZW50Q29vcmRbYXJyYXlQb2ludGVyXSArIGk7XG4gICAgICAgICAgICBzcGFjZXMuYWRkKGN1cnJlbnRDb29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlcztcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTaGlwID0gKGltYWdlLHVuaXQsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHNoaXAub3JpZW50YXRpb24gPyAodW5pdCpzaGlwLmxlbmd0aCkrJ3B4JyA6IHVuaXQrJ3B4JztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgKydweCc6ICh1bml0KnNoaXAubGVuZ3RoKSsncHgnO1xuICAgICAgICBpbWFnZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlTWFya2VyID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVwbGFjZVdpdGgodGlsZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJvdGF0ZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLnJvdGF0ZSgpO1xuICAgICAgICBzaGlwUGxhY2VtZW50KHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmVTaGlwID0gKHRlbXBsYXRlLHNoaXApID0+IHtcbiAgICAgICAgaWYgKHBsYWNpbmcpIHJldHVybjtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICBzaGlwc1tzaGlwLm5hbWVdLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgICBzaGlwUGxhY2VtZW50KHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlVGVtcGxhdGUgPSAodGlsZSx0ZW1wbGF0ZSxzaGlwKSA9PiB7XG4gICAgICAgIGNsZWFyUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IFNjcmVlbi5nZXRUYXJnZXQodGlsZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbih0aWxlLm9mZnNldFdpZHRoLGNvb3Jkcyk7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0uY29vcmRzID0gY29vcmRzO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0uaG9yaXpvbnRhbCA9IHNoaXAub3JpZW50YXRpb247XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5wbGFjZWQgPSB0cnVlO1xuICAgICAgICB0ZW1wbGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IG1vdmVTaGlwKGUudGFyZ2V0LmNsb3Nlc3QoJy5wbGFjZWhvbGRlcicpLHNoaXApKTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICB0aWxlLnJlcGxhY2VXaXRoKHRpbGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfSlcbiAgICAgICAgcGxhY2luZyA9IGZhbHNlO1xuICAgICAgICBkcmF3TmV4dFNoaXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uID0gKHVuaXQsY29vcmRzKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSAoY29vcmRzWzBdKnVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IHRvcCA9IChjb29yZHNbMV0qdW5pdCkrJ3B4JztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICB0b3BcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtcGxhY2VtZW50Jyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgICAgICByZXR1cm4gc3VibWl0QnV0dG9uXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTaGlwcygpO1xuICAgICAgICBvbkZpbmlzaCgpO1xuICAgICAgICBzaGlwQmFyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IFRFTVBjb25zb2xlSWxsZWdhbFRpbGVzID0gKGlsbGVnYWwpID0+IHtcbiAgICAgICAgY29uc3QgY29uc29sZVN0cmluZyA9IFsnJ11cbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgMTAgOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IDEwIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGlmIChpbGxlZ2FsLmluY2x1ZGVzKGAke2p9LSR7aX1gKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlU3RyaW5nLnB1c2goJ1gnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlU3RyaW5nLnB1c2goJ08nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlU3RyaW5nLnB1c2goJ1xcbicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnNvbGVTdHJpbmcuam9pbignICcpKTtcbiAgICB9XG5cbiAgICBjb25zdCBob3ZlckltYWdlID0gKGVsZW1lbnQsaW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZS50YXJnZXQuY2xvc2VzdCgnLnRpbGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IFNjcmVlbi5nZXRUYXJnZXQodGlsZSk7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKHRpbGUub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbGxlZ2FsJykpIHtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnb3V0LW9mLWJvdW5kcycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnb3V0LW9mLWJvdW5kcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IHBvcy50b3A7XG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IHBvcy5sZWZ0O1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyUGxhY2VtZW50U2NyZWVuLFxuICAgIH1cbn0iLCJpbXBvcnQgU2NyZWVuIGZyb20gXCIuL3NjcmVlbi5qc1wiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIFxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKHRpbGUsIG9wcG9uZW50Qm9hcmQpID0+IHtcbiAgICAgICAgaWYgKCF0aWxlKSB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSB0aWxlLlwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBvcHBvbmVudEJvYXJkLmhpdFNxdWFyZSh0aWxlWzBdLHRpbGVbMV0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtb3ZlID09PSAnb2JqZWN0JyAmJiBtb3ZlLmlzU3VuaygpKSBTY3JlZW4uc3Vua1NoaXAobW92ZSk7IFxuICAgICAgICAgICAgU2NyZWVuLnJlbmRlclBsYXllck1vdmUodGlsZSxvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgICAgICBpZCxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBtYWtlTW92ZVxuICAgIH1cblxufVxuXG5leHBvcnQgY29uc3QgQ29tcHV0ZXIgPSAoaWQsZ2FtZWJvYXJkKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudFN1Y2Nlc3MgPSBbXTtcblxuICAgIGNvbnN0IG1ha2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnJpZXI6IFNoaXAoJ2NhcnJpZXInKSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcbiAgICAgICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcbiAgICAgICAgICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJyksXG4gICAgICAgICAgICBkZXN0cm95ZXI6IFNoaXAoJ2Rlc3Ryb3llcicpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgU1FVQVJFU19BUk9VTkQgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cDpbeCx5LTFdLFxuICAgICAgICAgICAgcmlnaHQ6W3grMSx5XSxcbiAgICAgICAgICAgIGRvd246W3gseSsxXSxcbiAgICAgICAgICAgIGxlZnQ6W3gtMSx5XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gbWFrZVNoaXBzKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmdldExlbmd0aCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5nZXRMZW5ndGgoKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoyKSA/IHRydWUgOiBmYWxzZSA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwc1tzaGlwXSx4LHksb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IHBsYWNlIGF0OiBcIiwgeCwgeSwgXCIgd2l0aCBcIiwgb3JpZW50YXRpb24sXCIgb3JpZW50YXRpb24uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAgICAgXG4gICAgY29uc3QgcGxheVRpbGUgPSAodGlsZSkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGhpdCA9IGdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAoaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kYXJ5ID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBjb25zdCByYW5YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgY29uc3QgcmFuWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIHJldHVybiBbcmFuWCxyYW5ZXTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IFN1Y2Nlc3M6IFwiLCBjdXJyZW50U3VjY2Vzcyk7XG4gICAgICAgIGlmIChjdXJyZW50U3VjY2Vzcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVkdWNhdGVkTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVtYk1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGR1bWJNb3ZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZVRha2VuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGlmICghZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5jaGVja0ZvckVtcHR5KCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIE1vcmUgU3BhY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCFtb3ZlVGFrZW4pIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IGdlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICBtb3ZlVGFrZW4gPSBwbGF5VGlsZShjb29yZHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcG9wdWxhdGVDdXJyZW50U3VjY2Vzcyhjb29yZHMsbW92ZVRha2VuKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JlZW4ucmVuZGVyQ29tcHV0ZXJNb3ZlKGNvb3JkcyxnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRTaGlwID0gKGNvb3Jkcywgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxNb3ZlcyA9IFtbMCwxXSxbMCwtMV0sWzEsMF0sWy0xLDBdXTtcblxuICAgICAgICBjb25zdCBuZXh0TW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvdGVudGlhbE1vdmVzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gcG90ZW50aWFsTW92ZXMuc3BsaWNlKHJhbmRvbUNob2ljZSwxKS5mbGF0KCk7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKHBvdGVudGlhbE1vdmVzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVhZGluZzogXCIsIGhlYWRpbmcpO1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IFtjb29yZHNbMF0gKyBoZWFkaW5nWzBdLGNvb3Jkc1sxXSArIGhlYWRpbmdbMV1dO1xuICAgICAgICAgICAgcmV0dXJuICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjazptb3ZlLFxuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOmhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMgPSAoaGVhZGluZyxhdHRhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjYWxjdWxhdGluZy4uLiBcIiwgaGVhZGluZywgYXR0YWNrKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBbY29vcmRzWzBdIC0gYXR0YWNrWzBdLGNvb3Jkc1sxXSAtIGF0dGFja1sxXV07XG4gICAgICAgICAgICBjb25zdCBheGlzID0gaGVhZGluZ1swXSAhPSAwID8gMCA6IDEgO1xuICAgICAgICAgICAgbmV3SGVhZGluZ1theGlzXSA9IGhlYWRpbmdbYXhpc10gPiAwID8gaGVhZGluZ1theGlzXSsxIDogaGVhZGluZ1theGlzXS0xO1xuICAgICAgICAgICAgY29uc3Qgc3RpbGxWYWxpZCA9IHBvdGVudGlhbE1vdmVzLmZpbHRlcihoZWFkaW5nID0+IGhlYWRpbmdbYXhpc10gIT0gMCk7XG4gICAgICAgICAgICBzdGlsbFZhbGlkLnB1c2gobmV3SGVhZGluZyk7XG4gICAgICAgICAgICBwb3RlbnRpYWxNb3Zlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgc3RpbGxWYWxpZC5mb3JFYWNoKGNvb3JkID0+IHBvdGVudGlhbE1vdmVzLnB1c2goY29vcmQpKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUocG90ZW50aWFsTW92ZXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb29yZHMsXG4gICAgICAgICAgICB0YXJnZXQ6c2hpcCxcbiAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzLFxuICAgICAgICAgICAgbmV4dE1vdmUsXG4gICAgICAgICAgICByZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzXG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzID0gKGNvb3Jkcywgc2hpcCkgPT4ge1xuICAgICAgICBjdXJyZW50U3VjY2Vzcy5wdXNoKHRhcmdldFNoaXAoY29vcmRzLHNoaXApKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZHVjYXRlZE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFraW5nIGVkdWNhdGVkIG1vdmUuLi5cIilcbiAgICAgICAgbGV0IG1vdmVUYWtlbiA9IGZhbHNlO1xuICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gY3VycmVudFN1Y2Nlc3NbMF07XG4gICAgICAgIGlmICghZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5jaGVja0ZvckVtcHR5KCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIE1vcmUgU3BhY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCFtb3ZlVGFrZW4pIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IGN1cnJlbnRUYXJnZXQubmV4dE1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWluZyA6IFwiLGNvb3Jkcyk7XG4gICAgICAgICAgICBtb3ZlVGFrZW4gPSBwbGF5VGlsZShjb29yZHMuYXR0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhtb3ZlVGFrZW4pO1xuICAgICAgICBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcgJiYgbW92ZVRha2VuLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0aW5nOiBcIiwgY3VycmVudFN1Y2Nlc3NbMF0pO1xuICAgICAgICAgICAgY3VycmVudFN1Y2Nlc3Muc2hpZnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0JyAmJiBtb3ZlVGFrZW4gPT09IGN1cnJlbnRUYXJnZXQudGFyZ2V0KSB7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0LnJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMoY29vcmRzLmhlYWRpbmcsY29vcmRzLmF0dGFjaylcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcG9wdWxhdGVDdXJyZW50U3VjY2Vzcyhjb29yZHMuYXR0YWNrLG1vdmVUYWtlbilcbiAgICAgICAgfVxuICAgICAgICBTY3JlZW4ucmVuZGVyQ29tcHV0ZXJNb3ZlKGNvb3Jkcy5hdHRhY2ssZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgaXNDb21wOnRydWUsXG4gICAgICAgIGdlbmVyYXRlUmFuZG9tQ29vcmRzLFxuICAgICAgICBtYWtlTW92ZSxcbiAgICAgICAgcGxhY2VcbiAgICB9XG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCBiYXR0bGVzaGlwSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgU0hJUF9JTUFHRVMgPSB7XG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAgIGxldCBvbk5leHQ7XG4gICAgbGV0IG1vdmVSZWFkeSA9IHRydWU7XG5cbiAgICBjb25zdCBkcmF3TWFpbk1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IG1lbnVQYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZ2FtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXRpdGxlJyk7XG4gICAgICAgIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwcyEnXG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoZ2FtZVRpdGxlKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtZW51UGFuKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0U2luZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0RG91YmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzdGFydFNpbmdsZSxzdGFydERvdWJsZSk7XG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoYnV0dG9uQmFyKTtcbiAgICAgICAgc3RhcnRTaW5nbGUudGV4dENvbnRlbnQgPSAnU2luZ2xlIFBsYXllcic7XG4gICAgICAgIHN0YXJ0RG91YmxlLnRleHRDb250ZW50ID0gJ1R3byBQbGF5ZXInO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdEZWZhdWx0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBnYW1lYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNoaXBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChnYW1lYXJlYSwgc2hpcGJhcik7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKGxlZnQscmlnaHQpO1xuICAgICAgICBnYW1lYXJlYS5pZCA9ICdnYW1lYXJlYSc7XG4gICAgICAgIGxlZnQuaWQgPSAnbGVmdCc7XG4gICAgICAgIHJpZ2h0LmlkID0gJ3JpZ2h0JztcbiAgICAgICAgc2hpcGJhci5pZCA9ICdzaGlwYmFyJztcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGdldFRhcmdldChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3ZlUmVhZHkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBtb3ZlUmVhZHkgPSBnYW1lYm9hcmQub3Bwb25lbnQubWFrZU1vdmUodGlsZSwgZ2FtZWJvYXJkKVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdEdW1teUFjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdSZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyYXdTaGlwcyhnYW1lYm9hcmQsZ2FtZWJvYXJkLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3SGlkZGVuUmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgLy9kcmF3IHRoZSB0aWxlcyB0byBtYWludGFpbiBzaXplIGNvbnNpc3RlbmN5XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZGRlbi50ZXh0Q29udGVudCA9IFwiRGF0YSBFbmNyeXB0ZWQuLi5cIlxuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJvYXJkJyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGhpZGRlbilcbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoID0gKGN1cnJlbnQscHJldmlvdXMpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHJlY29uQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpO1xuICAgICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZWNvbkFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghY3VycmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIGRyYXdBY3RpdmVCb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1JlY29uQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd0R1bW15QWN0aXZlQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhwcmV2aW91cy5nYW1lYm9hcmQscHJldmlvdXMuZ2FtZWJvYXJkLmlkKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIG1vdmVSZWFkeSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc3RhbGxOZXh0VHVybiA9IGF3YWl0IHN0YWxsQ29tcHV0ZXJNb3ZlKCk7XG4gICAgICAgIHN0YWxsTmV4dFR1cm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQbGF5ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHNob3dQbGF5ZXJzVHVybiA9IGF3YWl0IHNob3dQbGF5ZXJSZXN1bHQoKTtcbiAgICAgICAgc2hvd1BsYXllcnNUdXJuKCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vua1NoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwLm5hbWUsICcgaXMgYSBnb25lcicpXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1BsYXllclJlc3VsdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyUmVzdWx0VGltZXIgPSBhd2FpdCBwcm9taXNpZnkob25OZXh0LCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIHBsYXllclJlc3VsdFRpbWVyXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YWxsQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpbmlzaGVkID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgICAgIHJldHVybiBjb21wdXRlckZpbmlzaGVkXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb21pc2lmeSA9IChjYWxsYmFjayx0aW1lcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoY2FsbGJhY2spLCB0aW1lcikpO1xuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGRyYXdTaGlwcyA9IChnYW1lYm9hcmQsb25ib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdhbWVib2FyZC5nZXRTaGlwcygpO1xuICAgICAgICBjb25zdCBwbGF5em9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9uYm9hcmQpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24ocGxheXpvbmUsIGdhbWVib2FyZC5nZXRMZW5ndGgoKSwgc2hpcClcbiAgICAgICAgICAgIHBsYXl6b25lLmFwcGVuZENoaWxkKGRyYXdTaGlwKGRpbWVuc2lvbnMpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3U2hpcCA9IChkaW1lbnNpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwLW1hcmtlcicpO1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLGB0b3A6JHtkaW1lbnNpb25zLnRvcH07bGVmdDoke2RpbWVuc2lvbnMubGVmdH07d2lkdGg6JHtkaW1lbnNpb25zLmxlbmd0aH07aGVpZ2h0OiR7ZGltZW5zaW9ucy5oZWlnaHR9YCk7XG4gICAgICAgIHJldHVybiBzaGlwXG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24gPSAoem9uZSwgc2NhbGUgLHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgdW5pdCA9IHpvbmUub2Zmc2V0V2lkdGggLyBzY2FsZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVswXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVsxXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAub3JpZW50YXRpb24gPyBzaGlwLmxlbmd0aCAqIHVuaXQgOiB1bml0IDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgOiBzaGlwLmxlbmd0aCAqIHVuaXQgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIGxlbmd0aDpsZW5ndGgrJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDpoZWlnaHQrJ3B4J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFyZ2V0ID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoIWJ1dHRvbikgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBidXR0b247XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudC5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgLy8gRmluZCB0aGUgY29vcmRpbmF0ZXMgdGhyb3VnaCB0aGUgZWxlbWVudHMgcG9zaXRpb24gYW1vbmdzdCBpdHMgc2libGluZ3NcbiAgICAgICAgY29uc3QgeSA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYm9hcmQuY2hpbGRyZW4scGFyZW50KTtcbiAgICAgICAgY29uc3QgeCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLHRhcmdldCk7XG4gICAgICAgIHJldHVybiBbeCx5XVxuICAgIH1cblxuICAgIGNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKVxuICAgIH1cblxuXG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd1NoaXBzLFxuICAgICAgICByZW5kZXJDb21wdXRlck1vdmUsXG4gICAgICAgIGVuZEdhbWUsXG4gICAgICAgIGdldFRhcmdldCxcbiAgICAgICAgcmVmcmVzaCxcbiAgICAgICAgc3Vua1NoaXAsXG4gICAgICAgIHJlbmRlclBsYXllck1vdmUsXG4gICAgICAgIGRyYXdNYWluTWVudSxcbiAgICAgICAgZHJhd0RlZmF1bHQsXG4gICAgICAgIHNldCBvbk5leHQobmV4dFR1cm4pIHtcbiAgICAgICAgICAgIG9uTmV4dCA9IG5leHRUdXJuO1xuICAgICAgICB9LFxuICAgIH1cbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChuYW1lID0gbnVsbCkgPT4ge1xuICAgIGxldCBoaXRDb3VudGVyID0gMDtcblxuICAgIGxldCBvcmllbnRhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlID0gKCkgPT4ge1xuICAgICAgICBvcmllbnRhdGlvbiA9ICFvcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBTSElQX1NJWkVTID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChoaXRDb3VudGVyID49IFNISVBfU0laRVNbbmFtZV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uOltdLFxuICAgICAgICBnZXQgb3JpZW50YXRpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb3JpZW50YXRpb24ob3IpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gb3I7XG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheWVkTmFtZSA9IG5hbWUuc3BsaXQoJycpO1xuICAgICAgICAgICAgYXJyYXllZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWVkTmFtZS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBTSElQX1NJWkVTW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XG4gICAgLS10aWxlLWF0dGFjazogcmdiYSgyNTUsMTUwLDE1MCwwLjkpO1xuICAgIC0tdGlsZS1oaXQ6IHJnYmEoMjU1LDIwMCwyMDAsMC44KTtcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xuICAgIC0tdGlsZS1ob3ZlcjogcmdiYSgyMzAsMjAwLDIwMCwwLjQpO1xufVxuXG4jZ2FtZWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNyaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2xlZnQgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbiNyaWdodCAuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jbGVmdCxcbiNyaWdodCB7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4udGlsZS5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3MpO1xufVxuXG4udGlsZS5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuXG4udGlsZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZmxleDoxO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRpbGUpO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLnRpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xufVxuXG5idXR0b24udGlsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlcik7XG59XG5cbi5oaWRkZW4tYm9hcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBib3R0b206MDtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6MDtcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDo1MCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jcGxheWVyLW9uZSxcbiNwbGF5ZXItdHdvIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLnNoaXAtbWFya2VyIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4vKiBidXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xuICAgIGJvcmRlcjogMDtcbn0gKi9cblxuYnV0dG9uLnRpbGUuYXR0YWNrIHtcbiAgICBhbmltYXRpb246IGF0dGFjay1wdWxzZSAwLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBhdHRhY2stcHVsc2Uge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1hdHRhY2spIDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xuICAgIH1cbn1cblxuLnBsYWNlLXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGxhY2Utc2hpcDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzNGRjtcbn1cblxuLnBsYWNlLXNoaXA6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMyUpO1xufVxuXG4ucGxhY2Vob2xkZXIge1xuICAgIGJvcmRlcjowO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cblxuLnBsYWNlaG9sZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5vdXQtb2YtYm91bmRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixNQUFNO0lBQ04sVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxRQUFRO0lBQ1IsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztJQUN6QztJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XFxuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcXG4gICAgLS10aWxlLWhpdDogcmdiYSgyNTUsMjAwLDIwMCwwLjgpO1xcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcXG59XFxuXFxuI2dhbWVhcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JpZ2h0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNsZWZ0IC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI3JpZ2h0IC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jbGVmdCxcXG4jcmlnaHQge1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4udGlsZS5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcXG59XFxuXFxuLnRpbGUuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udGlsZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZsZXg6MTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aWxlKTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4udGlsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xcbn1cXG5cXG5idXR0b24udGlsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXIpO1xcbn1cXG5cXG4uaGlkZGVuLWJvYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgYm90dG9tOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIHdpZHRoOjUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3BsYXllci1vbmUsXFxuI3BsYXllci10d28ge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLnNoaXAtbWFya2VyIHtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi8qIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XFxuICAgIGJvcmRlcjogMDtcXG59ICovXFxuXFxuYnV0dG9uLnRpbGUuYXR0YWNrIHtcXG4gICAgYW5pbWF0aW9uOiBhdHRhY2stcHVsc2UgMC41cyBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGF0dGFjay1wdWxzZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtYXR0YWNrKSA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcXG4gICAgfVxcbn1cXG5cXG4ucGxhY2Utc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxhY2Utc2hpcDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzRkY7XFxufVxcblxcbi5wbGFjZS1zaGlwOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAzJSk7XFxufVxcblxcbi5wbGFjZWhvbGRlciB7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5vdXQtb2YtYm91bmRzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vbW9kdWxlcy9zY3JlZW4uanNcIjtcbmltcG9ydCB7IFBsYWNlbWVudEJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGFjZW1lbnRCb2FyZC5qc1wiO1xuaW1wb3J0IHsgUGxheWVyICwgQ29tcHV0ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXJzID0gW107XG4gICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoMTAsIFwicGxheWVyLW9uZVwiKTtcbiAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZCgxMCwgXCJwbGF5ZXItdHdvXCIpO1xuICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihcInBsYXllci1vbmVcIixwbGF5ZXJPbmVCb2FyZCk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gQ29tcHV0ZXIoXCJwbGF5ZXItdHdvXCIscGxheWVyVHdvQm9hcmQpO1xuICAgIHBsYXllck9uZUJvYXJkLm9wcG9uZW50ID0gcGxheWVyVHdvO1xuICAgIHBsYXllclR3b0JvYXJkLm9wcG9uZW50ID0gcGxheWVyT25lO1xuICAgXG4gICAgY29uc3Qgc2luZ2xlSW5pdGlhbGlzZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKDEwLCBuYW1lKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoMTAsIFwiQ29tcHV0ZXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihuYW1lLCBwbGF5ZXJPbmVCb2FyZCk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3byA9IENvbXB1dGVyKG5hbWUsIFwiQ29tcHV0ZXJcIik7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJPbmUpO1xuICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyVHdvKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJUd287XG4gICAgICAgIHBsYXllclR3b0JvYXJkLm9wcG9uZW50ID0gcGxheWVyT25lO1xuICAgICAgICBzdGFydEdhbWUocGxheWVyT25lLHBsYXllclR3byk7XG4gICAgfVxuXG4gICAgY29uc3QgZG91YmxlSW5pdGlhbGlzZSA9IChuYW1lLCBzZWNvbmRuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKDEwLCBuYW1lKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoMTAsIHNlY29uZG5hbWUpO1xuICAgICAgICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIobmFtZSwgcGxheWVyT25lQm9hcmQpO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd28gPSBQbGF5ZXIoc2Vjb25kbmFtZSwgcGxheWVyVHdvQm9hcmQpO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5vcHBvbmVudCA9IHBsYXllclR3bztcbiAgICAgICAgcGxheWVyVHdvQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJPbmU7XG4gICAgICAgIHN0YXJ0R2FtZShwbGF5ZXJPbmUscGxheWVyVHdvKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsaXNlR2FtZSA9ICgpID0+IHtcbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllclR3bztcbiAgICAgICAgU2NyZWVuLm9uTmV4dCA9IHR1cm5PdmVyO1xuICAgICAgICBuZXh0UGxheWVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdHVybk92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrRm9yQWxsU3VuaygpKSB7XG4gICAgICAgICAgICBTY3JlZW4uZW5kR2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5leHRQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91cyA9IGN1cnJlbnRQbGF5ZXI7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSBwbGF5ZXJPbmUgPyBwbGF5ZXJUd28gOiBwbGF5ZXJPbmUgO1xuICAgICAgICBTY3JlZW4ucmVmcmVzaChjdXJyZW50UGxheWVyLHByZXZpb3VzKTtcbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuaXNDb21wKSB7XG4gICAgICAgICAgICBjdXJyZW50UGxheWVyLm1ha2VNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKHBsYXllciwgY2IpID0+IHtcbiAgICAgICAgLy8gY29uc3Qgb3Bwb25lbnRCb2FyZCA9IHBsYXllciA9PT0gcGxheWVyT25lID8gcGxheWVyVHdvLmdhbWVib2FyZCA6IHBsYXllck9uZS5nYW1lYm9hcmQ7XG4gICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IFBsYWNlbWVudEJvYXJkKHBsYXllci5nYW1lYm9hcmQsIGNiKTtcbiAgICAgICAgcGxhY2VtZW50LnJlbmRlclBsYWNlbWVudFNjcmVlbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVyUGxhY2UgPSAocGxheWVyLCBjYikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuICAgICAgICBwbGF5ZXIucGxhY2UoKTtcbiAgICAgICAgY2IoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEdhbWUgPSAocGxheWVyT25lLCBwbGF5ZXJUd28pID0+IHtcbiAgICAgICAgY29uc3QgYWZ0ZXJQbGFjZSA9IHBsYXllclR3by5pc0NvbXAgPyBjb21wdXRlclBsYWNlIDogc2hpcFBsYWNlbWVudCA7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQocGxheWVyT25lLCAoKSA9PiBhZnRlclBsYWNlKHBsYXllclR3bywgaW5pdGlhbGlzZUdhbWUpKTtcbiAgICB9XG5cbiAgICBzdGFydEdhbWUocGxheWVyT25lLHBsYXllclR3byk7XG5cbiAgICByZXR1cm4ge1xuICAgIH1cbn0pKCk7Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIkdhbWVib2FyZCIsInNpemUiLCJhcmd1bWVudHMiLCJzaGlwcyIsInR1cm5zIiwiU3F1YXJlIiwieCIsInkiLCJzaGlwIiwiaGl0IiwiY29vcmRzIiwiYnVpbGRSb3ciLCJpbmRleCIsImNvbHVtbnMiLCJidWlsZFNxdWFyZSIsInJvd3MiLCJnZXRMZW5ndGgiLCJnZXRTcXVhcmUiLCJnYW1lU3F1YXJlIiwic3F1YXJlU3RhdHVzIiwiZ2V0U2hpcHMiLCJoaXRTcXVhcmUiLCJFcnJvciIsImNoZWNrRm9yRW1wdHkiLCJwbGFjZVNoaXAiLCJob3Jpem9udGFsIiwiYXhpcyIsImNoZWNrQm91bmRhcmllcyIsImNoZWNrRm9yU2hpcHMiLCJvcmllbnRhdGlvbiIsInBvc2l0aW9uIiwiY2xlYXJTaGlwIiwicG9wIiwic3BsaWNlIiwiaW5kZXhPZiIsInJhbmdlIiwiZXZlcnkiLCJjaGVja0ZvckFsbFN1bmsiLCJhbGxDb25kaXRpb24iLCJmb3JFYWNoIiwiaXNTdW5rIiwiY29uZGl0aW9uIiwiY2xlYXJBbGwiLCJjdXIiLCJjb29yZCIsIm9wcG9uZW50IiwiU2NyZWVuIiwiU2hpcCIsIlNISVBfSU1BR0VTIiwiUGxhY2VtZW50Qm9hcmQiLCJnYW1lYm9hcmQiLCJvbkZpbmlzaCIsInBsYWNpbmciLCJzaGlwQmFyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhcnJpZXIiLCJwbGFjZWQiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsInNldFNoaXBzIiwiT2JqZWN0Iiwia2V5cyIsIm5ld1NoaXAiLCJjaGVja0ZvclVucGxhY2VkIiwic29tZSIsImRyYXdQbGFjZW1lbnRCb2FyZCIsInpvbmVEb20iLCJib2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJvd0NvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsImoiLCJ0aWxlIiwic2V0QXR0cmlidXRlIiwicmVuZGVyUGxhY2VtZW50U2NyZWVuIiwiZHJhd05leHRTaGlwQnV0dG9uIiwibmV4dFNoaXAiLCJtYWtlTmV4dFNoaXBCdXR0b24iLCJidXR0b24iLCJyZW5kZXJTdWJtaXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJtYWtlU2hpcCIsInNoaXBQbGFjZW1lbnQiLCJzdWJtaXQiLCJjbGVhclNoaXBCYXIiLCJleGlzdGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwia2V5IiwiYnV0dG9uVGV4dCIsIlN0cmluZyIsInRvVXBwZXJDYXNlIiwidGV4dENvbnRlbnQiLCJyb3RhdGUiLCJjcmVhdGVUZW1wbGF0ZSIsInRlbXBsYXRlIiwibmFtZSIsInN0eWxlIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRJbWFnZSIsImNsZWFyUm90YXRlQnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZVJvdGF0ZUJ1dHRvbiIsInRpbGVzIiwicmVuZGVyU2hpcCIsIm9mZnNldFdpZHRoIiwiaWxsZWdhbFNxdWFyZXMiLCJmaW5kSWxsZWdhbFNxdWFyZXMiLCJURU1QY29uc29sZUlsbGVnYWxUaWxlcyIsInJlbW92ZU1hcmtlciIsInJvdGF0ZVNoaXAiLCJob3ZlckltYWdlIiwiaW5jbHVkZXMiLCJyZW1vdmUiLCJlIiwicGxhY2VUZW1wbGF0ZSIsInRhcmdldCIsImNsb3Nlc3QiLCJvb2JNb3ZlIiwiX2xvb3AiLCJzcGFjZVNldCIsIlNldCIsImlsbE1vdmVzIiwiZ2V0T2NjdXBpZWRTcGFjZXMiLCJhcnJheVBvaW50ZXIiLCJzcGFjZSIsIm5leHRTcGFjZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9yZXQiLCJtYXJrZXIiLCJzcGFjZXMiLCJjdXJyZW50Q29vcmQiLCJpbWFnZSIsInVuaXQiLCJ3aWR0aCIsImhlaWdodCIsInJlcGxhY2VXaXRoIiwiY2xvbmVOb2RlIiwibW92ZVNoaXAiLCJnZXRUYXJnZXQiLCJjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uIiwiekluZGV4Iiwic3VibWl0QnV0dG9uIiwiaW5uZXJIVE1MIiwiaWxsZWdhbCIsImNvbnNvbGVTdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsImltZyIsImV2ZW50IiwicG9zIiwiY29udGFpbnMiLCJQbGF5ZXIiLCJtYWtlTW92ZSIsIm9wcG9uZW50Qm9hcmQiLCJtb3ZlIiwiX3R5cGVvZiIsInN1bmtTaGlwIiwicmVuZGVyUGxheWVyTW92ZSIsImVycm9yIiwicGxheWluZyIsIkNvbXB1dGVyIiwiY3VycmVudFN1Y2Nlc3MiLCJtYWtlU2hpcHMiLCJTUVVBUkVTX0FST1VORCIsInVwIiwicmlnaHQiLCJkb3duIiwicGxhY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJlcnIiLCJwbGF5VGlsZSIsImdlbmVyYXRlUmFuZG9tQ29vcmRzIiwiYm91bmRhcnkiLCJyYW5YIiwicmFuWSIsImVkdWNhdGVkTW92ZSIsImR1bWJNb3ZlIiwibW92ZVRha2VuIiwicG9wdWxhdGVDdXJyZW50U3VjY2VzcyIsInJlbmRlckNvbXB1dGVyTW92ZSIsInRhcmdldFNoaXAiLCJwb3RlbnRpYWxNb3ZlcyIsIm5leHRNb3ZlIiwicmFuZG9tQ2hvaWNlIiwiaGVhZGluZyIsImZsYXQiLCJ0YWJsZSIsImF0dGFjayIsInJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMiLCJuZXdIZWFkaW5nIiwic3RpbGxWYWxpZCIsImZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJzaGlmdCIsImlzQ29tcCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJPcCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXBwbHkiLCJiYXR0bGVzaGlwSW1hZ2UiLCJvbk5leHQiLCJtb3ZlUmVhZHkiLCJkcmF3TWFpbk1lbnUiLCJib2R5IiwibWVudVBhbiIsImdhbWVUaXRsZSIsImJ1dHRvbkJhciIsInN0YXJ0U2luZ2xlIiwic3RhcnREb3VibGUiLCJkcmF3RGVmYXVsdCIsImdhbWVhcmVhIiwic2hpcGJhciIsImRyYXdBY3RpdmVCb2FyZCIsImRyYXdEdW1teUFjdGl2ZUJvYXJkIiwiZHJhd1JlY29uQm9hcmQiLCJkcmF3U2hpcHMiLCJkcmF3SGlkZGVuUmVjb25Cb2FyZCIsImhpZGRlbiIsInJlZnJlc2giLCJjdXJyZW50IiwicHJldmlvdXMiLCJhY3RpdmVBcmVhIiwicmVjb25BcmVhIiwiX3JlZiIsIl9jYWxsZWUiLCJhY3RpdmVab25lIiwicm93IiwiY2VsbCIsInJlbW92ZUF0dGFja01hcmtlciIsInN0YWxsTmV4dFR1cm4iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY2hpbGRyZW4iLCJwcm9taXNpZnkiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29tcHV0ZXJGaW5pc2hlZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImNhbGxiYWNrIiwidGltZXIiLCJzZXRUaW1lb3V0Iiwib25ib2FyZCIsInBsYXl6b25lIiwiZGltZW5zaW9ucyIsImNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uIiwiZHJhd1NoaXAiLCJ6b25lIiwic2NhbGUiLCJwYXJlbnQiLCJBcnJheSIsImVuZEdhbWUiLCJuZXh0VHVybiIsImhpdENvdW50ZXIiLCJTSElQX1NJWkVTIiwib3IiLCJhcnJheWVkTmFtZSIsInNwbGl0IiwiR2FtZSIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXJzIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJUd29Cb2FyZCIsInBsYXllck9uZSIsInBsYXllclR3byIsInNpbmdsZUluaXRpYWxpc2UiLCJzdGFydEdhbWUiLCJkb3VibGVJbml0aWFsaXNlIiwic2Vjb25kbmFtZSIsImluaXRpYWxpc2VHYW1lIiwidHVybk92ZXIiLCJuZXh0UGxheWVyIiwicGxheWVyIiwiY2IiLCJwbGFjZW1lbnQiLCJjb21wdXRlclBsYWNlIiwiYWZ0ZXJQbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=