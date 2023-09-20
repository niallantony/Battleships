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
    isComp: false,
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
      var move = [coords[0] + heading[0], coords[1] + heading[1]];
      return {
        attack: move,
        heading: heading
      };
    };
    var recalculatePotentialMoves = function recalculatePotentialMoves(heading, attack) {
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
  var drawMainMenu = function drawMainMenu(singleInitialise, doubleInitialise) {
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
    buttonBar.appendChild(startSingle);
    buttonBar.appendChild(startDouble);
    menuPan.appendChild(buttonBar);
    startSingle.textContent = 'Single Player';
    startDouble.textContent = 'Two Player';
    startSingle.addEventListener('click', function () {
      return getName(singleInitialise);
    });
    startDouble.addEventListener('click', function () {
      getName(function (name) {
        getName(function (secondName) {
          doubleInitialise(name, secondName);
        }, 'two');
      });
    });
  };
  var getName = function getName(cb) {
    var string = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'one';
    console.log("getting name");
    var nameDialog = document.createElement('dialog');
    nameDialog.classList.add('get-name');
    var body = document.querySelector('body');
    body.appendChild(nameDialog);
    nameDialog.show();
    var nameForm = document.createElement('form');
    var nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name-input');
    nameLabel.textContent = "Admiral ".concat(string, " name: ");
    var nameInput = document.createElement('input');
    nameInput.id = 'name-input';
    var nameSubmit = document.createElement('button');
    nameSubmit.textContent = "Submit";
    nameDialog.appendChild(nameForm);
    nameForm.appendChild(nameLabel);
    nameForm.appendChild(nameInput);
    nameForm.appendChild(nameSubmit);
    nameSubmit.classList.add('get-name-submit');
    nameSubmit.addEventListener('click', function (e) {
      e.preventDefault();
      cb(nameInput.value);
      nameDialog.parentNode.removeChild(nameDialog);
    });
  };
  var shipScreenSetup = function shipScreenSetup() {
    var body = document.querySelector('body');
    body.innerHTML = '';
    var left = document.createElement('div');
    left.id = 'left';
    var gamearea = document.createElement('div');
    gamearea.id = 'gamearea';
    body.appendChild(gamearea);
    gamearea.appendChild(left);
    var shipbar = document.createElement('div');
    shipbar.id = 'ship-bar';
    body.appendChild(shipbar);
  };
  var showReadyScreen = function showReadyScreen(player, next) {
    var body = document.querySelector('body');
    var readyDialog = document.createElement('dialog');
    var readyText = document.createElement('div');
    var readyButton = document.createElement('button');
    readyDialog.classList.add('ready-dialog');
    readyText.classList.add('ready-text');
    readyButton.classList.add('ready-button');
    readyText.textContent = "".concat(player.id, "'s turn!");
    readyButton.textContent = 'Ready';
    readyButton.addEventListener('click', function () {
      readyDialog.parentNode.removeChild(readyDialog);
      refresh(next, player);
    });
    readyDialog.appendChild(readyText);
    readyDialog.appendChild(readyButton);
    body.appendChild(readyDialog);
    readyDialog.showModal();
  };
  var gameScreenSetup = function gameScreenSetup() {
    var body = document.querySelector('body');
    body.innerHTML = '';
    var left = document.createElement('div');
    left.id = 'left';
    var right = document.createElement('div');
    right.id = 'right';
    var gamearea = document.createElement('div');
    gamearea.id = 'gamearea';
    body.appendChild(gamearea);
    gamearea.appendChild(left);
    gamearea.appendChild(right);
    var shipbar = document.createElement('div');
    shipbar.id = 'ship-bar';
    body.appendChild(shipbar);
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
    gameScreenSetup: gameScreenSetup,
    shipScreenSetup: shipScreenSetup,
    renderComputerMove: renderComputerMove,
    endGame: endGame,
    getTarget: getTarget,
    refresh: refresh,
    sunkShip: sunkShip,
    renderPlayerMove: renderPlayerMove,
    drawMainMenu: drawMainMenu,
    showReadyScreen: showReadyScreen,
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
}

.ready-dialog::backdrop {
    background-color: #000000;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,iCAAiC;IACjC,kCAAkC;IAClC,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,MAAM;IACN,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,KAAK;IACL,QAAQ;IACR,MAAM;IACN,OAAO;IACP,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;;;;;GAKG;;AAEH;IACI,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI;QACI,qCAAqC;IACzC;IACA;QACI,6BAA6B;IACjC;AACJ;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[":root {\n    --tile:  rgba(200,200,200,0.1);\n    --tile-attack: rgba(255,150,150,0.9);\n    --tile-hit: rgba(255,200,200,0.8);\n    --tile-miss: rgba(200,200,255,0.8);\n    --tile-hover: rgba(230,200,200,0.4);\n}\n\n#gamearea {\n    display: flex;\n}\n\n#right {\n    position: relative;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n#left .ship {\n    background-color: blue;\n}\n\n#right .ship {\n    background-color: red;\n}\n\n#left,\n#right {\n    margin: 2rem;\n    position:relative;\n}\n\n.tile.miss {\n    background-color: var(--tile-miss);\n}\n\n.tile.hit {\n    background-color: var(--tile-hit);\n}\n\n.row {\n    display:flex;\n}\n\n.tile {\n    height: 100%;\n    width: 100%;\n    padding: 1rem;\n    flex:1;\n    z-index: 2;\n    margin: 0;\n    background: var(--tile);\n    border: 0;\n}\n\n.tile {\n    background-color: var(--tile);\n}\n\nbutton.tile:hover {\n    background-color: var(--tile-hover);\n}\n\n.hidden-board {\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    width:50%;\n    height: fit-content;\n    padding: 1rem;\n    background-color: var(--tile-hit);\n    text-align: center;\n    border-radius: 5px;\n}\n\n#player-one,\n#player-two {\n    position:relative;\n}\n\n.ship-marker {\n    position:absolute;\n    background-color: aqua;\n}\n\n/* button {\n    padding: 0;\n    margin: 0;\n    background-color: var(--tile);\n    border: 0;\n} */\n\nbutton.tile.attack {\n    animation: attack-pulse 0.5s infinite;\n    animation-direction: alternate;\n}\n\n@keyframes attack-pulse {\n    0% {\n        background-color: var(--tile-attack) ;\n    }\n    100% {\n        background-color: var(--tile);\n    }\n}\n\n.place-ship {\n    background-color: blue;\n    border-radius: 5px;\n    padding: 1rem;\n    color: white;\n}\n\n.place-ship:hover {\n    background-color: #3333FF;\n}\n\n.place-ship:active {\n    transform: scale(103%);\n}\n\n.placeholder {\n    border:0;\n    margin:0;\n    padding:0;\n}\n\n.placeholder:hover {\n    background-color: rgb(255, 255, 255);\n}\n\n.out-of-bounds {\n    background-color: red;\n}\n\n.ready-dialog::backdrop {\n    background-color: #000000;\n}"],"sourceRoot":""}]);
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
  var singleInitialise = function singleInitialise(name) {
    var playerOneBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, name);
    var playerTwoBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, "Computer");
    var playerOne = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)(name, playerOneBoard);
    var playerTwo = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Computer)(name, playerTwoBoard);
    players.push(playerOne);
    players.push(playerTwo);
    playerOneBoard.opponent = playerTwo;
    playerTwoBoard.opponent = playerOne;
    startGame(playerOne, playerTwo);
  };
  var doubleInitialise = function doubleInitialise(name, secondName) {
    var playerOneBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, name);
    var playerTwoBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, secondName);
    var playerOne = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)(name, playerOneBoard);
    var playerTwo = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)(secondName, playerTwoBoard);
    players.push(playerOne);
    players.push(playerTwo);
    playerOneBoard.opponent = playerTwo;
    playerTwoBoard.opponent = playerOne;
    startGame();
  };
  var initialiseGame = function initialiseGame() {
    _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].gameScreenSetup();
    currentPlayer = players[1];
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
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    if (currentPlayer.isComp) {
      _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].refresh(currentPlayer, previous);
      currentPlayer.makeMove();
    } else {
      _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].showReadyScreen(currentPlayer, previous);
    }
  };
  var shipPlacement = function shipPlacement(player, cb) {
    // const opponentBoard = player === playerOne ? playerTwo.gameboard : playerOne.gameboard;
    _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipScreenSetup();
    var placement = (0,_modules_placementBoard_js__WEBPACK_IMPORTED_MODULE_1__.PlacementBoard)(player.gameboard, cb);
    placement.renderPlacementScreen();
  };
  var computerPlace = function computerPlace(player, cb) {
    console.log(player);
    player.place();
    cb();
  };
  var startGame = function startGame() {
    var afterPlace = players[1].isComp ? computerPlace : shipPlacement;
    shipPlacement(players[0], function () {
      return afterPlace(players[1], initialiseGame);
    });
  };
  _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].drawMainMenu(singleInitialise, doubleInitialise);
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0UsYUFBYSxFQUFDdkQsUUFBUSxDQUFDO0lBQ2xEO0VBQ0osQ0FBQztFQUVELElBQU1uUyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlxUixNQUFNLEVBQUViLEVBQUUsRUFBSztJQUNsQztJQUNBbFQsMERBQU0sQ0FBQzJULGVBQWUsQ0FBQyxDQUFDO0lBQ3hCLElBQU1tRixTQUFTLEdBQUczWSwwRUFBYyxDQUFDNFQsTUFBTSxDQUFDM1QsU0FBUyxFQUFFOFMsRUFBRSxDQUFDO0lBQ3RENEYsU0FBUyxDQUFDN1cscUJBQXFCLENBQUMsQ0FBQztFQUNyQyxDQUFDO0VBRUQsSUFBTThXLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSWhGLE1BQU0sRUFBRWIsRUFBRSxFQUFLO0lBQ2xDdk0sT0FBTyxDQUFDQyxHQUFHLENBQUNtTixNQUFNLENBQUM7SUFDbkJBLE1BQU0sQ0FBQzVMLEtBQUssQ0FBQyxDQUFDO0lBQ2QrSyxFQUFFLENBQUMsQ0FBQztFQUNSLENBQUM7RUFFRCxJQUFNd0YsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztJQUNwQixJQUFNTSxVQUFVLEdBQUdYLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFRLE1BQU0sR0FBR29SLGFBQWEsR0FBR3JXLGFBQWE7SUFDcEVBLGFBQWEsQ0FBQzJWLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUFBLE9BQU1XLFVBQVUsQ0FBQ1gsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFTSxjQUFjLENBQUM7SUFBQSxFQUFDO0VBQzNFLENBQUM7RUFFRDNZLDBEQUFNLENBQUN1UyxZQUFZLENBQUNDLGdCQUFnQixFQUFDQyxnQkFBZ0IsQ0FBQztBQUUxRCxDQUFDLENBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxhY2VtZW50Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9IChzaXplLGlkID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG4gICAgY29uc3QgdHVybnMgPSBbXTtcbiAgICBjb25zdCBTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgIGNvb3JkczogW3gseV0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFJvdyA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaChTcXVhcmUoaSxpbmRleCkpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICByb3dzLnB1c2goYnVpbGRSb3coaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZVNxdWFyZVt5XVt4XTtcbiAgICB9XG5cbiAgICBjb25zdCBzcXVhcmVTdGF0dXMgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCAmJiBnYW1lU3F1YXJlW3ldW3hdLnNoaXApIHJldHVybiAnaGl0JztcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0KSByZXR1cm4gJ21pc3MnO1xuICAgICAgICByZXR1cm4gJ2VtcHR5J1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZVNxdWFyZSA9IGJ1aWxkU3F1YXJlKHNpemUpO1xuXG4gICAgY29uc3QgaGl0U3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoIWdhbWVTcXVhcmVbeV0gfHwgIWdhbWVTcXVhcmVbeV1beF0pIHRocm93IG5ldyBFcnJvcihcIk91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCkgdGhyb3cgbmV3IEVycm9yKFwiU3F1YXJlIGFscmVhZHkgaGl0XCIpO1xuICAgICAgICBnYW1lU3F1YXJlW3ldW3hdLmhpdCA9IHRydWU7XG4gICAgICAgIHR1cm5zLnB1c2goW3gseV0pO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5zaGlwKSB7XG4gICAgICAgICAgICBnYW1lU3F1YXJlW3ldW3hdLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZVNxdWFyZVt5XVt4XS5zaGlwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgY29uc3QgY2hlY2tGb3JFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHR1cm5zLmxlbmd0aCA8IChzaXplKnNpemUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLHgseSxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBob3Jpem9udGFsID8geCA6IHkgO1xuICAgICAgICBpZiAoIWNoZWNrQm91bmRhcmllcyhheGlzLHNoaXAubGVuZ3RoKSkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICBpZiAoIWNoZWNrRm9yU2hpcHMoc2hpcC5sZW5ndGgseCx5LGhvcml6b250YWwpKSB0aHJvdyBuZXcgRXJyb3IoXCJTcGFjZSBvY2N1cGllZFwiKTtcbiAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9IGhvcml6b250YWw7XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW3ldW3graV0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbi5wdXNoKGdhbWVTcXVhcmVbeV1beCtpXS5jb29yZHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW3kraV1beF0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbi5wdXNoKGdhbWVTcXVhcmVbeStpXVt4XS5jb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gc2hpcC5wb3NpdGlvbi5wb3AoKTtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVbY29vcmRzWzFdXVtjb29yZHNbMF1dLnNoaXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBzLnNwbGljZShzaGlwcy5pbmRleE9mKHNoaXApLDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yU2hpcHMgPSAobGVuZ3RoLHgseSxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIC8vQnVpbGRzIGFuIGFycmF5IG9mIHNwYWNlcyB0aGUgc2hpcCB3aWxsIG9jY3VweVxuICAgICAgICBjb25zdCByYW5nZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2UucHVzaChnYW1lU3F1YXJlW3ldW3graV0uc2hpcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlLnB1c2goZ2FtZVNxdWFyZVt5K2ldW3hdLnNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vUmV0dXJucyB0cnVlIGlmIGFsbCBhcmUgZW1wdHlcbiAgICAgICAgcmV0dXJuIHJhbmdlLmV2ZXJ5KHNoaXAgPT4gc2hpcCA9PT0gbnVsbCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjaGVja0JvdW5kYXJpZXMgPSAoYXhpcyxsZW5ndGgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aXMgKyBsZW5ndGggPiBzaXplID8gZmFsc2UgOiB0cnVlOyBcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvckFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbENvbmRpdGlvbiA9IFtdXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IGFsbENvbmRpdGlvbi5wdXNoKHNoaXAuaXNTdW5rKCkpKTtcbiAgICAgICAgcmV0dXJuIGFsbENvbmRpdGlvbi5ldmVyeShjb25kaXRpb24gPT4gY29uZGl0aW9uID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2hpcHMubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgY3VyID0gc2hpcHMucG9wKCk7XG4gICAgICAgICAgICBjdXIucG9zaXRpb24uZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW2Nvb3JkWzFdXVtjb29yZFswXV0uc2hpcCA9IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGhpdFNxdWFyZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBjbGVhclNoaXAsXG4gICAgICAgIGNoZWNrRm9yQWxsU3VuayxcbiAgICAgICAgZ2V0U3F1YXJlLFxuICAgICAgICBjaGVja0ZvckVtcHR5LFxuICAgICAgICBnZXRTaGlwcyxcbiAgICAgICAgY2xlYXJBbGwsXG4gICAgICAgIHNxdWFyZVN0YXR1cyxcbiAgICAgICAgb3Bwb25lbnQ6bnVsbCxcbiAgICAgICAgaWQsXG4gICAgfVxuXG59OyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCJcbmltcG9ydCB7IFNISVBfSU1BR0VTIH0gZnJvbSBcIi4vc2NyZWVuLmpzXCJcblxuZXhwb3J0IGNvbnN0IFBsYWNlbWVudEJvYXJkID0gKGdhbWVib2FyZCwgb25GaW5pc2gpID0+IHtcbiAgICBsZXQgcGxhY2luZyA9IGZhbHNlO1xuICAgIGNvbnN0IHNoaXBCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1iYXInKTtcblxuICAgIGNvbnN0IHNoaXBzID0ge1xuICAgICAgICBjYXJyaWVyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDo1LFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBiYXR0bGVzaGlwOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDo0LFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjcnVpc2VyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDozLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBzdWJtYXJpbmU6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjMsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3llcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MixcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhzaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcCk7XG4gICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsc2hpcHNbc2hpcF0uY29vcmRzWzBdLHNoaXBzW3NoaXBdLmNvb3Jkc1sxXSxzaGlwc1tzaGlwXS5ob3Jpem9udGFsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvclVucGxhY2VkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc2hpcHMpLnNvbWUoKHNoaXApID0+IHtyZXR1cm4gIXNoaXBzW3NoaXBdLnBsYWNlZH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1BsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuaWQgPSBgJHtqfS0ke2l9YDtcbiAgICAgICAgICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdwb3NpdGlvbjpyZWxhdGl2ZTsnKVxuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgZHJhd1BsYWNlbWVudEJvYXJkKCk7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFNoaXAgPSBtYWtlTmV4dFNoaXBCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV4dFNoaXAgPyBuZXh0U2hpcCA6IHJlbmRlclN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICBpZiAobmV4dFNoaXApIHtidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHNoaXBCYXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBtYWtlU2hpcChidXR0b24pO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwLHNoaXBzW3NoaXBdKTtcbiAgICAgICAgfSk7fSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcEJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Utc2hpcCcpO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIGV4aXN0aW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXhpc3RpbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2tleV0ucGxhY2VkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBTdHJpbmcoJ1BsYWNlICcrIGtleSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IGtleTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoYnV0dG9uLmlkKTtcbiAgICAgICAgc2hpcC5yb3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUZW1wbGF0ZSA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRlbXBsYXRlLmlkID0gc2hpcC5uYW1lO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtTSElQX0lNQUdFU1tzaGlwLm5hbWVdfWA7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgc2hpcEJhci5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiBzaGlwQmFyLnJlbW92ZUNoaWxkKGJ1dHRvbikpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAoc2hpcCkgPT4ge1xuICAgICAgICBwbGFjaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlKHNoaXApO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgcmVuZGVyU2hpcCh0ZW1wbGF0ZSx0aWxlc1swXS5vZmZzZXRXaWR0aCxzaGlwKTtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBmaW5kSWxsZWdhbFNxdWFyZXMoc2hpcCk7XG4gICAgICAgIFRFTVBjb25zb2xlSWxsZWdhbFRpbGVzKGlsbGVnYWxTcXVhcmVzKTtcbiAgICAgICAgY29uc3Qgcm90YXRlID0gY3JlYXRlUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTWFya2VyKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJvdGF0ZVNoaXAoc2hpcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIGhvdmVySW1hZ2UodGlsZSx0ZW1wbGF0ZSk7XG4gICAgICAgICAgICBpZiAoaWxsZWdhbFNxdWFyZXMuaW5jbHVkZXModGlsZS5pZCkpIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2lsbGVnYWwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaWxsZWdhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwbGFjZVRlbXBsYXRlKGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJyksdGVtcGxhdGUsc2hpcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmluZElsbGVnYWxTcXVhcmVzID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBbXTtcbiAgICAgICAgLy8gRmluZCBvdXQgb2YgYm91bmQgc3F1YXJlc1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgZ2FtZWJvYXJkLmdldExlbmd0aCgpIDsgaSsrICkge1xuICAgICAgICAgICAgZm9yICggbGV0IGogPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgLSAoc2hpcC5sZW5ndGggLSAxKTsgaiA8IGdhbWVib2FyZC5nZXRMZW5ndGgoKSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvb2JNb3ZlID0gc2hpcC5vcmllbnRhdGlvbiA/IFtqLGldIDogW2ksal0gO1xuICAgICAgICAgICAgICAgIGlsbGVnYWxTcXVhcmVzLnB1c2gob29iTW92ZS5qb2luKCctJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vR2V0IHNwYWNlcyB0aGF0IGFyZSBvYnN0cnVjdGVkIGJ5IGFub3RoZXIgc2hpcFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgaWYgKCFzaGlwc1trZXldLnBsYWNlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBpbGxNb3ZlcyA9IGdldE9jY3VwaWVkU3BhY2VzKHNoaXBzW2tleV0pO1xuICAgICAgICAgICAgY29uc3QgYXJyYXlQb2ludGVyID0gc2hpcC5vcmllbnRhdGlvbiA/IDAgOiAxOyBcbiAgICAgICAgICAgIGlsbE1vdmVzLmZvckVhY2goKHNwYWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3BhY2VTZXQuYWRkKHNwYWNlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTcGFjZSA9IFsuLi5zcGFjZV07XG4gICAgICAgICAgICAgICAgICAgIG5leHRTcGFjZVthcnJheVBvaW50ZXJdID0gbmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gLSBpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gPCAwKSBjb250aW51ZSA7IFxuICAgICAgICAgICAgICAgICAgICBzcGFjZVNldC5hZGQobmV4dFNwYWNlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcGFjZVNldC5mb3JFYWNoKChjb29yZCkgPT4gaWxsZWdhbFNxdWFyZXMucHVzaChjb29yZCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbGxlZ2FsU3F1YXJlcztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRPY2N1cGllZFNwYWNlcyA9IChtYXJrZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhY2VzID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBhcnJheVBvaW50ZXIgPSBtYXJrZXIuaG9yaXpvbnRhbCA/IDAgOiAxIDtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG1hcmtlci5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29vcmQgPSBbLi4ubWFya2VyLmNvb3Jkc107XG4gICAgICAgICAgICBjdXJyZW50Q29vcmRbYXJyYXlQb2ludGVyXSA9IGN1cnJlbnRDb29yZFthcnJheVBvaW50ZXJdICsgaTtcbiAgICAgICAgICAgIHNwYWNlcy5hZGQoY3VycmVudENvb3JkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNoaXAgPSAoaW1hZ2UsdW5pdCxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2hpcC5vcmllbnRhdGlvbiA/ICh1bml0KnNoaXAubGVuZ3RoKSsncHgnIDogdW5pdCsncHgnO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCArJ3B4JzogKHVuaXQqc2hpcC5sZW5ndGgpKydweCc7XG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVNYXJrZXIgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5yZXBsYWNlV2l0aCh0aWxlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgcm90YXRlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAucm90YXRlKCk7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZVNoaXAgPSAodGVtcGxhdGUsc2hpcCkgPT4ge1xuICAgICAgICBpZiAocGxhY2luZykgcmV0dXJuO1xuICAgICAgICBjbGVhclNoaXBCYXIoKTtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHNoaXBzW3NoaXAubmFtZV0ucGxhY2VkID0gZmFsc2U7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VUZW1wbGF0ZSA9ICh0aWxlLHRlbXBsYXRlLHNoaXApID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gU2NyZWVuLmdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKHRpbGUub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5ob3Jpem9udGFsID0gc2hpcC5vcmllbnRhdGlvbjtcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLnBsYWNlZCA9IHRydWU7XG4gICAgICAgIHRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4gbW92ZVNoaXAoZS50YXJnZXQuY2xvc2VzdCgnLnBsYWNlaG9sZGVyJyksc2hpcCkpO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVwbGFjZVdpdGgodGlsZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgICAgICBwbGFjaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24gPSAodW5pdCxjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IChjb29yZHNbMF0qdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gKGNvb3Jkc1sxXSp1bml0KSsncHgnO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIHRvcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1wbGFjZW1lbnQnKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIHJldHVybiBzdWJtaXRCdXR0b25cbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNoaXBzKCk7XG4gICAgICAgIG9uRmluaXNoKCk7XG4gICAgICAgIHNoaXBCYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgVEVNUGNvbnNvbGVJbGxlZ2FsVGlsZXMgPSAoaWxsZWdhbCkgPT4ge1xuICAgICAgICBjb25zdCBjb25zb2xlU3RyaW5nID0gWycnXVxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgMTAgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlsbGVnYWwuaW5jbHVkZXMoYCR7an0tJHtpfWApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVTdHJpbmcucHVzaCgnWCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVTdHJpbmcucHVzaCgnTycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGVTdHJpbmcucHVzaCgnXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY29uc29sZVN0cmluZy5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIGNvbnN0IGhvdmVySW1hZ2UgPSAoZWxlbWVudCxpbWcpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpO1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gU2NyZWVuLmdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24odGlsZS5vZmZzZXRXaWR0aCxjb29yZHMpO1xuICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lsbGVnYWwnKSkge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gcG9zLnRvcDtcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQ7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJQbGFjZW1lbnRTY3JlZW4sXG4gICAgfVxufSIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgbWFrZU1vdmUgPSAodGlsZSwgb3Bwb25lbnRCb2FyZCkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHRpbGUuXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG9wcG9uZW50Qm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vdmUgPT09ICdvYmplY3QnICYmIG1vdmUuaXNTdW5rKCkpIFNjcmVlbi5zdW5rU2hpcChtb3ZlKTsgXG4gICAgICAgICAgICBTY3JlZW4ucmVuZGVyUGxheWVyTW92ZSh0aWxlLG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWluZzogZmFsc2UsXG4gICAgICAgIGlzQ29tcDogZmFsc2UsXG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIG1ha2VNb3ZlXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBDb21wdXRlciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIGxldCBjdXJyZW50U3VjY2VzcyA9IFtdO1xuXG4gICAgY29uc3QgbWFrZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxuICAgICAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxuICAgICAgICAgICAgY3J1aXNlcjogU2hpcCgnY3J1aXNlcicpLFxuICAgICAgICAgICAgc3VibWFyaW5lOiBTaGlwKCdzdWJtYXJpbmUnKSxcbiAgICAgICAgICAgIGRlc3Ryb3llcjogU2hpcCgnZGVzdHJveWVyJyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBTUVVBUkVTX0FST1VORCA9ICh4LHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVwOlt4LHktMV0sXG4gICAgICAgICAgICByaWdodDpbeCsxLHldLFxuICAgICAgICAgICAgZG93bjpbeCx5KzFdLFxuICAgICAgICAgICAgbGVmdDpbeC0xLHldXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBtYWtlU2hpcHMoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmdldExlbmd0aCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjIpID8gdHJ1ZSA6IGZhbHNlIDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW3NoaXBdLHgseSxvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5ub3QgcGxhY2UgYXQ6IFwiLCB4LCB5LCBcIiB3aXRoIFwiLCBvcmllbnRhdGlvbixcIiBvcmllbnRhdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgICAgICBcbiAgICBjb25zdCBwbGF5VGlsZSA9ICh0aWxlKSA9PiB7XG4gICAgICAgIGlmICghdGlsZSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5oaXRTcXVhcmUodGlsZVswXSx0aWxlWzFdKTtcbiAgICAgICAgICAgIGlmIChoaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm91bmRhcnkgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGNvbnN0IHJhblggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm91bmRhcnkpO1xuICAgICAgICBjb25zdCByYW5ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgcmV0dXJuIFtyYW5YLHJhblldO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFN1Y2Nlc3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBlZHVjYXRlZE1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGR1bWJNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkdW1iTW92ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1vdmVUYWtlbiA9IGZhbHNlO1xuICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICBpZiAoIWdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gcGxheVRpbGUoY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MoY29vcmRzLG1vdmVUYWtlbik7XG4gICAgICAgIH1cbiAgICAgICAgU2NyZWVuLnJlbmRlckNvbXB1dGVyTW92ZShjb29yZHMsZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0U2hpcCA9IChjb29yZHMsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsTW92ZXMgPSBbWzAsMV0sWzAsLTFdLFsxLDBdLFstMSwwXV07XG5cbiAgICAgICAgY29uc3QgbmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21DaG9pY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3RlbnRpYWxNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGluZyA9IHBvdGVudGlhbE1vdmVzLnNwbGljZShyYW5kb21DaG9pY2UsMSkuZmxhdCgpO1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IFtjb29yZHNbMF0gKyBoZWFkaW5nWzBdLGNvb3Jkc1sxXSArIGhlYWRpbmdbMV1dO1xuICAgICAgICAgICAgcmV0dXJuICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjazptb3ZlLFxuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOmhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMgPSAoaGVhZGluZyxhdHRhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBbY29vcmRzWzBdIC0gYXR0YWNrWzBdLGNvb3Jkc1sxXSAtIGF0dGFja1sxXV07XG4gICAgICAgICAgICBjb25zdCBheGlzID0gaGVhZGluZ1swXSAhPSAwID8gMCA6IDEgO1xuICAgICAgICAgICAgbmV3SGVhZGluZ1theGlzXSA9IGhlYWRpbmdbYXhpc10gPiAwID8gaGVhZGluZ1theGlzXSsxIDogaGVhZGluZ1theGlzXS0xO1xuICAgICAgICAgICAgY29uc3Qgc3RpbGxWYWxpZCA9IHBvdGVudGlhbE1vdmVzLmZpbHRlcihoZWFkaW5nID0+IGhlYWRpbmdbYXhpc10gIT0gMCk7XG4gICAgICAgICAgICBzdGlsbFZhbGlkLnB1c2gobmV3SGVhZGluZyk7XG4gICAgICAgICAgICBwb3RlbnRpYWxNb3Zlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgc3RpbGxWYWxpZC5mb3JFYWNoKGNvb3JkID0+IHBvdGVudGlhbE1vdmVzLnB1c2goY29vcmQpKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29vcmRzLFxuICAgICAgICAgICAgdGFyZ2V0OnNoaXAsXG4gICAgICAgICAgICBwb3RlbnRpYWxNb3ZlcyxcbiAgICAgICAgICAgIG5leHRNb3ZlLFxuICAgICAgICAgICAgcmVjYWxjdWxhdGVQb3RlbnRpYWxNb3Zlc1xuICAgICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgcG9wdWxhdGVDdXJyZW50U3VjY2VzcyA9IChjb29yZHMsIHNoaXApID0+IHtcbiAgICAgICAgY3VycmVudFN1Y2Nlc3MucHVzaCh0YXJnZXRTaGlwKGNvb3JkcyxzaGlwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWR1Y2F0ZWRNb3ZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZVRha2VuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBjdXJyZW50U3VjY2Vzc1swXTtcbiAgICAgICAgaWYgKCFnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLmNoZWNrRm9yRW1wdHkoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTW9yZSBTcGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIW1vdmVUYWtlbikge1xuICAgICAgICAgICAgY29vcmRzID0gY3VycmVudFRhcmdldC5uZXh0TW92ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5aW5nIDogXCIsY29vcmRzKTtcbiAgICAgICAgICAgIG1vdmVUYWtlbiA9IHBsYXlUaWxlKGNvb3Jkcy5hdHRhY2spO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0JyAmJiBtb3ZlVGFrZW4uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRpbmc6IFwiLCBjdXJyZW50U3VjY2Vzc1swXSk7XG4gICAgICAgICAgICBjdXJyZW50U3VjY2Vzcy5zaGlmdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnICYmIG1vdmVUYWtlbiA9PT0gY3VycmVudFRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQucmVjYWxjdWxhdGVQb3RlbnRpYWxNb3Zlcyhjb29yZHMuaGVhZGluZyxjb29yZHMuYXR0YWNrKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzKGNvb3Jkcy5hdHRhY2ssbW92ZVRha2VuKVxuICAgICAgICB9XG4gICAgICAgIFNjcmVlbi5yZW5kZXJDb21wdXRlck1vdmUoY29vcmRzLmF0dGFjayxnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBpc0NvbXA6dHJ1ZSxcbiAgICAgICAgZ2VuZXJhdGVSYW5kb21Db29yZHMsXG4gICAgICAgIG1ha2VNb3ZlLFxuICAgICAgICBwbGFjZVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBTSElQX0lNQUdFUyA9IHtcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwSW1hZ2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gICAgbGV0IG9uTmV4dDtcbiAgICBsZXQgbW92ZVJlYWR5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRyYXdNYWluTWVudSA9IChzaW5nbGVJbml0aWFsaXNlLCBkb3VibGVJbml0aWFsaXNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IG1lbnVQYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZ2FtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXRpdGxlJyk7XG4gICAgICAgIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwcyEnXG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoZ2FtZVRpdGxlKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtZW51UGFuKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0U2luZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0RG91YmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzdGFydFNpbmdsZSk7XG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzdGFydERvdWJsZSk7XG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoYnV0dG9uQmFyKTtcbiAgICAgICAgc3RhcnRTaW5nbGUudGV4dENvbnRlbnQgPSAnU2luZ2xlIFBsYXllcic7XG4gICAgICAgIHN0YXJ0RG91YmxlLnRleHRDb250ZW50ID0gJ1R3byBQbGF5ZXInO1xuICAgICAgICBzdGFydFNpbmdsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gZ2V0TmFtZShzaW5nbGVJbml0aWFsaXNlKSk7XG4gICAgICAgIHN0YXJ0RG91YmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICBnZXROYW1lKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2V0TmFtZSgoc2Vjb25kTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb3VibGVJbml0aWFsaXNlKG5hbWUsc2Vjb25kTmFtZSk7XG4gICAgICAgICAgICAgICAgfSwgJ3R3bycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9IChjYiwgc3RyaW5nID0gJ29uZScpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIG5hbWVcIik7XG4gICAgICAgIGNvbnN0IG5hbWVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgbmFtZURpYWxvZy5jbGFzc0xpc3QuYWRkKCdnZXQtbmFtZScpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG5hbWVEaWFsb2cpO1xuICAgICAgICBuYW1lRGlhbG9nLnNob3coKTtcbiAgICAgICAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUtaW5wdXQnKTtcbiAgICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gYEFkbWlyYWwgJHtzdHJpbmd9IG5hbWU6IGBcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xuICAgICAgICBjb25zdCBuYW1lU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5hbWVTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBuYW1lRGlhbG9nLmFwcGVuZENoaWxkKG5hbWVGb3JtKTtcbiAgICAgICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICAgICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZVN1Ym1pdCk7XG4gICAgICAgIG5hbWVTdWJtaXQuY2xhc3NMaXN0LmFkZCgnZ2V0LW5hbWUtc3VibWl0Jyk7XG4gICAgICAgIG5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjYihuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgbmFtZURpYWxvZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5hbWVEaWFsb2cpO1xuICAgICAgICB9KVxuICAgIH0gICBcblxuICAgIGNvbnN0IHNoaXBTY3JlZW5TZXR1cCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0LmlkID0gJ2xlZnQnO1xuICAgICAgICBjb25zdCBnYW1lYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lYXJlYS5pZCA9ICdnYW1lYXJlYSc7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWFyZWEpO1xuICAgICAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICAgICAgY29uc3Qgc2hpcGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwYmFyLmlkID0gJ3NoaXAtYmFyJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaGlwYmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UmVhZHlTY3JlZW4gPSAocGxheWVyLG5leHQpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgcmVhZHlEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgY29uc3QgcmVhZHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJlYWR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlYWR5RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3JlYWR5LWRpYWxvZycpO1xuICAgICAgICByZWFkeVRleHQuY2xhc3NMaXN0LmFkZCgncmVhZHktdGV4dCcpO1xuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWFkeS1idXR0b24nKTtcbiAgICAgICAgcmVhZHlUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLmlkfSdzIHR1cm4hYDtcbiAgICAgICAgcmVhZHlCdXR0b24udGV4dENvbnRlbnQgPSAnUmVhZHknO1xuICAgICAgICByZWFkeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlYWR5RGlhbG9nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVhZHlEaWFsb2cpO1xuICAgICAgICAgICAgcmVmcmVzaChuZXh0LHBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZWFkeURpYWxvZy5hcHBlbmRDaGlsZChyZWFkeVRleHQpXG4gICAgICAgIHJlYWR5RGlhbG9nLmFwcGVuZENoaWxkKHJlYWR5QnV0dG9uKVxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJlYWR5RGlhbG9nKVxuICAgICAgICByZWFkeURpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lU2NyZWVuU2V0dXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5pZCA9ICdsZWZ0JztcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHQuaWQgPSAncmlnaHQnO1xuICAgICAgICBjb25zdCBnYW1lYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lYXJlYS5pZCA9ICdnYW1lYXJlYSc7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWFyZWEpO1xuICAgICAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQocmlnaHQpO1xuICAgICAgICBjb25zdCBzaGlwYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBiYXIuaWQgPSAnc2hpcC1iYXInO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNoaXBiYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdBY3RpdmVCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZ2V0VGFyZ2V0KGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdmVSZWFkeSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIG1vdmVSZWFkeSA9IGdhbWVib2FyZC5vcHBvbmVudC5tYWtlTW92ZSh0aWxlLCBnYW1lYm9hcmQpXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0R1bW15QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1JlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZHJhd1NoaXBzKGdhbWVib2FyZCxnYW1lYm9hcmQuaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdIaWRkZW5SZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICAvL2RyYXcgdGhlIHRpbGVzIHRvIG1haW50YWluIHNpemUgY29uc2lzdGVuY3lcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGlkZGVuLnRleHRDb250ZW50ID0gXCJEYXRhIEVuY3J5cHRlZC4uLlwiXG4gICAgICAgIGhpZGRlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYm9hcmQnKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoaGlkZGVuKVxuICAgIH1cblxuICAgIGNvbnN0IHJlZnJlc2ggPSAoY3VycmVudCxwcmV2aW91cykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgY29uc3QgcmVjb25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jyk7XG4gICAgICAgIGFjdGl2ZUFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlY29uQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCFjdXJyZW50LmlzQ29tcCkge1xuICAgICAgICAgICAgZHJhd0FjdGl2ZUJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3UmVjb25Cb2FyZChjdXJyZW50LmdhbWVib2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcmF3RHVtbXlBY3RpdmVCb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd0hpZGRlblJlY29uQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1NoaXBzKHByZXZpb3VzLmdhbWVib2FyZCxwcmV2aW91cy5nYW1lYm9hcmQuaWQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgbW92ZVJlYWR5ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzdGFsbE5leHRUdXJuID0gYXdhaXQgc3RhbGxDb21wdXRlck1vdmUoKTtcbiAgICAgICAgc3RhbGxOZXh0VHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYXllck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc2hvd1BsYXllcnNUdXJuID0gYXdhaXQgc2hvd1BsYXllclJlc3VsdCgpO1xuICAgICAgICBzaG93UGxheWVyc1R1cm4oKTtcbiAgICAgICAgbW92ZVJlYWR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdW5rU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXAubmFtZSwgJyBpcyBhIGdvbmVyJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGxheWVyUmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJSZXN1bHRUaW1lciA9IGF3YWl0IHByb21pc2lmeShvbk5leHQsIDIwMDApO1xuICAgICAgICByZXR1cm4gcGxheWVyUmVzdWx0VGltZXJcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhbGxDb21wdXRlck1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmluaXNoZWQgPSBhd2FpdCBwcm9taXNpZnkob25OZXh0LCAyMDAwKTtcbiAgICAgICAgbW92ZVJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyRmluaXNoZWRcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvbWlzaWZ5ID0gKGNhbGxiYWNrLHRpbWVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShjYWxsYmFjayksIHRpbWVyKSk7XG4gICAgfVxuICAgIFxuXG4gICAgY29uc3QgZHJhd1NoaXBzID0gKGdhbWVib2FyZCxvbmJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ2FtZWJvYXJkLmdldFNoaXBzKCk7XG4gICAgICAgIGNvbnN0IHBsYXl6b25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob25ib2FyZCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbihwbGF5em9uZSwgZ2FtZWJvYXJkLmdldExlbmd0aCgpLCBzaGlwKVxuICAgICAgICAgICAgcGxheXpvbmUuYXBwZW5kQ2hpbGQoZHJhd1NoaXAoZGltZW5zaW9ucykpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdTaGlwID0gKGRpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbWFya2VyJyk7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdzdHlsZScsYHRvcDoke2RpbWVuc2lvbnMudG9wfTtsZWZ0OiR7ZGltZW5zaW9ucy5sZWZ0fTt3aWR0aDoke2RpbWVuc2lvbnMubGVuZ3RofTtoZWlnaHQ6JHtkaW1lbnNpb25zLmhlaWdodH1gKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiA9ICh6b25lLCBzY2FsZSAsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB1bml0ID0gem9uZS5vZmZzZXRXaWR0aCAvIHNjYWxlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzBdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzFdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5vcmllbnRhdGlvbiA/IHNoaXAubGVuZ3RoICogdW5pdCA6IHVuaXQgO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCA6IHNoaXAubGVuZ3RoICogdW5pdCA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgbGVuZ3RoOmxlbmd0aCsncHgnLFxuICAgICAgICAgICAgaGVpZ2h0OmhlaWdodCsncHgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXJnZXQgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmICghYnV0dG9uKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvbjtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICAvLyBGaW5kIHRoZSBjb29yZGluYXRlcyB0aHJvdWdoIHRoZSBlbGVtZW50cyBwb3NpdGlvbiBhbW9uZ3N0IGl0cyBzaWJsaW5nc1xuICAgICAgICBjb25zdCB5ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChib2FyZC5jaGlsZHJlbixwYXJlbnQpO1xuICAgICAgICBjb25zdCB4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGRyZW4sdGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIFt4LHldXG4gICAgfVxuXG4gICAgY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgfVxuXG5cblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkcmF3U2hpcHMsXG4gICAgICAgIGdhbWVTY3JlZW5TZXR1cCxcbiAgICAgICAgc2hpcFNjcmVlblNldHVwLFxuICAgICAgICByZW5kZXJDb21wdXRlck1vdmUsXG4gICAgICAgIGVuZEdhbWUsXG4gICAgICAgIGdldFRhcmdldCxcbiAgICAgICAgcmVmcmVzaCxcbiAgICAgICAgc3Vua1NoaXAsXG4gICAgICAgIHJlbmRlclBsYXllck1vdmUsXG4gICAgICAgIGRyYXdNYWluTWVudSxcbiAgICAgICAgc2hvd1JlYWR5U2NyZWVuLFxuICAgICAgICBzZXQgb25OZXh0KG5leHRUdXJuKSB7XG4gICAgICAgICAgICBvbk5leHQgPSBuZXh0VHVybjtcbiAgICAgICAgfSxcbiAgICB9XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBsZXQgaGl0Q291bnRlciA9IDA7XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAhb3JpZW50YXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgU0hJUF9TSVpFUyA9IHtcbiAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudGVyKytcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoaGl0Q291bnRlciA+PSBTSElQX1NJWkVTW25hbWVdKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBwb3NpdGlvbjpbXSxcbiAgICAgICAgZ2V0IG9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9yaWVudGF0aW9uKG9yKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IG9yO1xuICAgICAgICB9LFxuICAgICAgICByb3RhdGUsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXllZE5hbWUgPSBuYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGFycmF5ZWROYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXllZE5hbWUuam9pbignJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gU0hJUF9TSVpFU1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10aWxlOiAgcmdiYSgyMDAsMjAwLDIwMCwwLjEpO1xuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcbiAgICAtLXRpbGUtaGl0OiByZ2JhKDI1NSwyMDAsMjAwLDAuOCk7XG4gICAgLS10aWxlLW1pc3M6IHJnYmEoMjAwLDIwMCwyNTUsMC44KTtcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcbn1cblxuI2dhbWVhcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNsZWZ0IC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4jcmlnaHQgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuI2xlZnQsXG4jcmlnaHQge1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLnRpbGUubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcbn1cblxuLnRpbGUuaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cblxuLnRpbGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZsZXg6MTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aWxlKTtcbiAgICBib3JkZXI6IDA7XG59XG5cbi50aWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcbn1cblxuYnV0dG9uLnRpbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXIpO1xufVxuXG4uaGlkZGVuLWJvYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgYm90dG9tOjA7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgd2lkdGg6NTAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI3BsYXllci1vbmUsXG4jcGxheWVyLXR3byB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5zaGlwLW1hcmtlciB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLyogYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcbiAgICBib3JkZXI6IDA7XG59ICovXG5cbmJ1dHRvbi50aWxlLmF0dGFjayB7XG4gICAgYW5pbWF0aW9uOiBhdHRhY2stcHVsc2UgMC41cyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgYXR0YWNrLXB1bHNlIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtYXR0YWNrKSA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcbiAgICB9XG59XG5cbi5wbGFjZS1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBsYWNlLXNoaXA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzRkY7XG59XG5cbi5wbGFjZS1zaGlwOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDMlKTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBib3JkZXI6MDtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59XG5cbi5wbGFjZWhvbGRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ub3V0LW9mLWJvdW5kcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ucmVhZHktZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLE1BQU07SUFDTixVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO0lBQ3pDO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdGlsZTogIHJnYmEoMjAwLDIwMCwyMDAsMC4xKTtcXG4gICAgLS10aWxlLWF0dGFjazogcmdiYSgyNTUsMTUwLDE1MCwwLjkpO1xcbiAgICAtLXRpbGUtaGl0OiByZ2JhKDI1NSwyMDAsMjAwLDAuOCk7XFxuICAgIC0tdGlsZS1taXNzOiByZ2JhKDIwMCwyMDAsMjU1LDAuOCk7XFxuICAgIC0tdGlsZS1ob3ZlcjogcmdiYSgyMzAsMjAwLDIwMCwwLjQpO1xcbn1cXG5cXG4jZ2FtZWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2xlZnQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jcmlnaHQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNsZWZ0LFxcbiNyaWdodCB7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi50aWxlLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3MpO1xcbn1cXG5cXG4udGlsZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZmxleDoxO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRpbGUpO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi50aWxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XFxufVxcblxcbmJ1dHRvbi50aWxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlcik7XFxufVxcblxcbi5oaWRkZW4tYm9hcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgd2lkdGg6NTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcGxheWVyLW9uZSxcXG4jcGxheWVyLXR3byB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uc2hpcC1tYXJrZXIge1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLyogYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcXG4gICAgYm9yZGVyOiAwO1xcbn0gKi9cXG5cXG5idXR0b24udGlsZS5hdHRhY2sge1xcbiAgICBhbmltYXRpb246IGF0dGFjay1wdWxzZSAwLjVzIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYXR0YWNrLXB1bHNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1hdHRhY2spIDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xcbiAgICB9XFxufVxcblxcbi5wbGFjZS1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGFjZS1zaGlwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzNGRjtcXG59XFxuXFxuLnBsYWNlLXNoaXA6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDMlKTtcXG59XFxuXFxuLnBsYWNlaG9sZGVyIHtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbi5wbGFjZWhvbGRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLm91dC1vZi1ib3VuZHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5yZWFkeS1kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgU2NyZWVuIGZyb20gXCIuL21vZHVsZXMvc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBQbGFjZW1lbnRCb2FyZCB9IGZyb20gXCIuL21vZHVsZXMvcGxhY2VtZW50Qm9hcmQuanNcIjtcbmltcG9ydCB7IFBsYXllciAsIENvbXB1dGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL21vZHVsZXMvZ2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50UGxheWVyXG4gICAgY29uc3QgcGxheWVycyA9IFtdO1xuICAgXG4gICAgY29uc3Qgc2luZ2xlSW5pdGlhbGlzZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKDEwLCBuYW1lKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoMTAsIFwiQ29tcHV0ZXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihuYW1lLCBwbGF5ZXJPbmVCb2FyZCk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3byA9IENvbXB1dGVyKG5hbWUsIHBsYXllclR3b0JvYXJkKTtcbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllck9uZSk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJUd28pO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5vcHBvbmVudCA9IHBsYXllclR3bztcbiAgICAgICAgcGxheWVyVHdvQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJPbmU7XG4gICAgICAgIHN0YXJ0R2FtZShwbGF5ZXJPbmUscGxheWVyVHdvKTtcbiAgICB9XG5cbiAgICBjb25zdCBkb3VibGVJbml0aWFsaXNlID0gKG5hbWUsIHNlY29uZE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoMTAsIG5hbWUpO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZCgxMCwgc2Vjb25kTmFtZSk7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihuYW1lLCBwbGF5ZXJPbmVCb2FyZCk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3byA9IFBsYXllcihzZWNvbmROYW1lLCBwbGF5ZXJUd29Cb2FyZCk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJPbmUpO1xuICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyVHdvKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJUd287XG4gICAgICAgIHBsYXllclR3b0JvYXJkLm9wcG9uZW50ID0gcGxheWVyT25lO1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsaXNlR2FtZSA9ICgpID0+IHtcbiAgICAgICAgU2NyZWVuLmdhbWVTY3JlZW5TZXR1cCgpO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyc1sxXTtcbiAgICAgICAgU2NyZWVuLm9uTmV4dCA9IHR1cm5PdmVyO1xuICAgICAgICBuZXh0UGxheWVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdHVybk92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrRm9yQWxsU3VuaygpKSB7XG4gICAgICAgICAgICBTY3JlZW4uZW5kR2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5leHRQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91cyA9IGN1cnJlbnRQbGF5ZXI7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF0gO1xuICAgICAgICBpZiAoY3VycmVudFBsYXllci5pc0NvbXApIHtcbiAgICAgICAgICAgIFNjcmVlbi5yZWZyZXNoKGN1cnJlbnRQbGF5ZXIscHJldmlvdXMpO1xuICAgICAgICAgICAgY3VycmVudFBsYXllci5tYWtlTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2NyZWVuLnNob3dSZWFkeVNjcmVlbihjdXJyZW50UGxheWVyLHByZXZpb3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAocGxheWVyLCBjYikgPT4ge1xuICAgICAgICAvLyBjb25zdCBvcHBvbmVudEJvYXJkID0gcGxheWVyID09PSBwbGF5ZXJPbmUgPyBwbGF5ZXJUd28uZ2FtZWJvYXJkIDogcGxheWVyT25lLmdhbWVib2FyZDtcbiAgICAgICAgU2NyZWVuLnNoaXBTY3JlZW5TZXR1cCgpO1xuICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSBQbGFjZW1lbnRCb2FyZChwbGF5ZXIuZ2FtZWJvYXJkLCBjYik7XG4gICAgICAgIHBsYWNlbWVudC5yZW5kZXJQbGFjZW1lbnRTY3JlZW4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlclBsYWNlID0gKHBsYXllciwgY2IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgICAgICAgcGxheWVyLnBsYWNlKCk7XG4gICAgICAgIGNiKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZnRlclBsYWNlID0gcGxheWVyc1sxXS5pc0NvbXAgPyBjb21wdXRlclBsYWNlIDogc2hpcFBsYWNlbWVudCA7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQocGxheWVyc1swXSwgKCkgPT4gYWZ0ZXJQbGFjZShwbGF5ZXJzWzFdLCBpbml0aWFsaXNlR2FtZSkpO1xuICAgIH1cblxuICAgIFNjcmVlbi5kcmF3TWFpbk1lbnUoc2luZ2xlSW5pdGlhbGlzZSxkb3VibGVJbml0aWFsaXNlKTtcblxufSkoKTsiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiR2FtZWJvYXJkIiwic2l6ZSIsImFyZ3VtZW50cyIsInNoaXBzIiwidHVybnMiLCJTcXVhcmUiLCJ4IiwieSIsInNoaXAiLCJoaXQiLCJjb29yZHMiLCJidWlsZFJvdyIsImluZGV4IiwiY29sdW1ucyIsImJ1aWxkU3F1YXJlIiwicm93cyIsImdldExlbmd0aCIsImdldFNxdWFyZSIsImdhbWVTcXVhcmUiLCJzcXVhcmVTdGF0dXMiLCJnZXRTaGlwcyIsImhpdFNxdWFyZSIsIkVycm9yIiwiY2hlY2tGb3JFbXB0eSIsInBsYWNlU2hpcCIsImhvcml6b250YWwiLCJheGlzIiwiY2hlY2tCb3VuZGFyaWVzIiwiY2hlY2tGb3JTaGlwcyIsIm9yaWVudGF0aW9uIiwicG9zaXRpb24iLCJjbGVhclNoaXAiLCJwb3AiLCJzcGxpY2UiLCJpbmRleE9mIiwicmFuZ2UiLCJldmVyeSIsImNoZWNrRm9yQWxsU3VuayIsImFsbENvbmRpdGlvbiIsImZvckVhY2giLCJpc1N1bmsiLCJjb25kaXRpb24iLCJjbGVhckFsbCIsImN1ciIsImNvb3JkIiwib3Bwb25lbnQiLCJTY3JlZW4iLCJTaGlwIiwiU0hJUF9JTUFHRVMiLCJQbGFjZW1lbnRCb2FyZCIsImdhbWVib2FyZCIsIm9uRmluaXNoIiwicGxhY2luZyIsInNoaXBCYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FycmllciIsInBsYWNlZCIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwic2V0U2hpcHMiLCJPYmplY3QiLCJrZXlzIiwibmV3U2hpcCIsImNoZWNrRm9yVW5wbGFjZWQiLCJzb21lIiwiZHJhd1BsYWNlbWVudEJvYXJkIiwiem9uZURvbSIsImJvYXJkIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicm93Q29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaiIsInRpbGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW5kZXJQbGFjZW1lbnRTY3JlZW4iLCJkcmF3TmV4dFNoaXBCdXR0b24iLCJuZXh0U2hpcCIsIm1ha2VOZXh0U2hpcEJ1dHRvbiIsImJ1dHRvbiIsInJlbmRlclN1Ym1pdEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsIm1ha2VTaGlwIiwic2hpcFBsYWNlbWVudCIsInN1Ym1pdCIsImNsZWFyU2hpcEJhciIsImV4aXN0aW5nIiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJrZXkiLCJidXR0b25UZXh0IiwiU3RyaW5nIiwidG9VcHBlckNhc2UiLCJ0ZXh0Q29udGVudCIsInJvdGF0ZSIsImNyZWF0ZVRlbXBsYXRlIiwidGVtcGxhdGUiLCJuYW1lIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZEltYWdlIiwiY2xlYXJSb3RhdGVCdXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlUm90YXRlQnV0dG9uIiwidGlsZXMiLCJyZW5kZXJTaGlwIiwib2Zmc2V0V2lkdGgiLCJpbGxlZ2FsU3F1YXJlcyIsImZpbmRJbGxlZ2FsU3F1YXJlcyIsIlRFTVBjb25zb2xlSWxsZWdhbFRpbGVzIiwicmVtb3ZlTWFya2VyIiwicm90YXRlU2hpcCIsImhvdmVySW1hZ2UiLCJpbmNsdWRlcyIsInJlbW92ZSIsImUiLCJwbGFjZVRlbXBsYXRlIiwidGFyZ2V0IiwiY2xvc2VzdCIsIm9vYk1vdmUiLCJfbG9vcCIsInNwYWNlU2V0IiwiU2V0IiwiaWxsTW92ZXMiLCJnZXRPY2N1cGllZFNwYWNlcyIsImFycmF5UG9pbnRlciIsInNwYWNlIiwibmV4dFNwYWNlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX3JldCIsIm1hcmtlciIsInNwYWNlcyIsImN1cnJlbnRDb29yZCIsImltYWdlIiwidW5pdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVwbGFjZVdpdGgiLCJjbG9uZU5vZGUiLCJtb3ZlU2hpcCIsImdldFRhcmdldCIsImNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJzdWJtaXRCdXR0b24iLCJpbm5lckhUTUwiLCJpbGxlZ2FsIiwiY29uc29sZVN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJlbGVtZW50IiwiaW1nIiwiZXZlbnQiLCJwb3MiLCJjb250YWlucyIsIlBsYXllciIsIm1ha2VNb3ZlIiwib3Bwb25lbnRCb2FyZCIsIm1vdmUiLCJfdHlwZW9mIiwic3Vua1NoaXAiLCJyZW5kZXJQbGF5ZXJNb3ZlIiwiZXJyb3IiLCJwbGF5aW5nIiwiaXNDb21wIiwiQ29tcHV0ZXIiLCJjdXJyZW50U3VjY2VzcyIsIm1ha2VTaGlwcyIsIlNRVUFSRVNfQVJPVU5EIiwidXAiLCJyaWdodCIsImRvd24iLCJwbGFjZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImVyciIsInBsYXlUaWxlIiwiZ2VuZXJhdGVSYW5kb21Db29yZHMiLCJib3VuZGFyeSIsInJhblgiLCJyYW5ZIiwiZWR1Y2F0ZWRNb3ZlIiwiZHVtYk1vdmUiLCJtb3ZlVGFrZW4iLCJwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzIiwicmVuZGVyQ29tcHV0ZXJNb3ZlIiwidGFyZ2V0U2hpcCIsInBvdGVudGlhbE1vdmVzIiwibmV4dE1vdmUiLCJyYW5kb21DaG9pY2UiLCJoZWFkaW5nIiwiZmxhdCIsImF0dGFjayIsInJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMiLCJuZXdIZWFkaW5nIiwic3RpbGxWYWxpZCIsImZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJzaGlmdCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJPcCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXBwbHkiLCJiYXR0bGVzaGlwSW1hZ2UiLCJvbk5leHQiLCJtb3ZlUmVhZHkiLCJkcmF3TWFpbk1lbnUiLCJzaW5nbGVJbml0aWFsaXNlIiwiZG91YmxlSW5pdGlhbGlzZSIsImJvZHkiLCJtZW51UGFuIiwiZ2FtZVRpdGxlIiwiYnV0dG9uQmFyIiwic3RhcnRTaW5nbGUiLCJzdGFydERvdWJsZSIsImdldE5hbWUiLCJzZWNvbmROYW1lIiwiY2IiLCJzdHJpbmciLCJuYW1lRGlhbG9nIiwic2hvdyIsIm5hbWVGb3JtIiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwibmFtZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2hpcFNjcmVlblNldHVwIiwiZ2FtZWFyZWEiLCJzaGlwYmFyIiwic2hvd1JlYWR5U2NyZWVuIiwicGxheWVyIiwicmVhZHlEaWFsb2ciLCJyZWFkeVRleHQiLCJyZWFkeUJ1dHRvbiIsInJlZnJlc2giLCJzaG93TW9kYWwiLCJnYW1lU2NyZWVuU2V0dXAiLCJkcmF3QWN0aXZlQm9hcmQiLCJkcmF3RHVtbXlBY3RpdmVCb2FyZCIsImRyYXdSZWNvbkJvYXJkIiwiZHJhd1NoaXBzIiwiZHJhd0hpZGRlblJlY29uQm9hcmQiLCJoaWRkZW4iLCJjdXJyZW50IiwicHJldmlvdXMiLCJhY3RpdmVBcmVhIiwicmVjb25BcmVhIiwiX3JlZiIsIl9jYWxsZWUiLCJhY3RpdmVab25lIiwicm93IiwiY2VsbCIsInJlbW92ZUF0dGFja01hcmtlciIsInN0YWxsTmV4dFR1cm4iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY2hpbGRyZW4iLCJwcm9taXNpZnkiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29tcHV0ZXJGaW5pc2hlZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImNhbGxiYWNrIiwidGltZXIiLCJzZXRUaW1lb3V0Iiwib25ib2FyZCIsInBsYXl6b25lIiwiZGltZW5zaW9ucyIsImNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uIiwiZHJhd1NoaXAiLCJ6b25lIiwic2NhbGUiLCJwYXJlbnQiLCJBcnJheSIsImVuZEdhbWUiLCJuZXh0VHVybiIsImhpdENvdW50ZXIiLCJTSElQX1NJWkVTIiwib3IiLCJhcnJheWVkTmFtZSIsInNwbGl0IiwiR2FtZSIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXJzIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJUd29Cb2FyZCIsInBsYXllck9uZSIsInBsYXllclR3byIsInN0YXJ0R2FtZSIsImluaXRpYWxpc2VHYW1lIiwidHVybk92ZXIiLCJuZXh0UGxheWVyIiwicGxhY2VtZW50IiwiY29tcHV0ZXJQbGFjZSIsImFmdGVyUGxhY2UiXSwic291cmNlUm9vdCI6IiJ9