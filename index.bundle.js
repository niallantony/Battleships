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
    if (!tile) return;
    try {
      var move = opponentBoard.hitSquare(tile[0], tile[1]);
      if (_typeof(move) === 'object' && move.isSunk()) _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].sunkShip(move);
      _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderPlayerMove(tile, opponentBoard);
    } catch (error) {
      console.log(error);
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
  var recentHit = false;
  var currentSuccess = {};
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
  var tryMove = function tryMove(coords) {
    var result = playTile(coords);
    if (_typeof(result) === 'object') {
      currentSuccess = Object.assign({
        coords: coords
      }, result);
      console.log(currentSuccess);
      recentHit = true;
    }
    return result;
  };
  var makeMove = function makeMove() {
    var moveTaken = false;
    var coords;
    if (!gameboard.opponent.gameboard.checkForEmpty()) {
      throw new Error("No More Space");
    }
    while (!moveTaken) {
      coords = generateRandomCoords();
      moveTaken = tryMove(coords);
    }
    _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderComputerMove(coords, gameboard.opponent.gameboard);
  };
  var educatedMove = function educatedMove() {};
  return {
    id: id,
    gameboard: gameboard,
    isComp: true,
    generateRandomCoords: generateRandomCoords,
    tryMove: tryMove,
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
  //what is this doing?
  var playerOne = true;
  var onNext;
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
      var tile = getTarget(e.target.closest('button'));
      gameboard.opponent.makeMove(tile, gameboard);
    });
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
    drawActiveBoard(previous.gameboard);
    if (!current.isComp) {
      drawReconBoard(current.gameboard);
    } else {
      drawHiddenReconBoard(current.gameboard);
      drawShips(previous.gameboard, previous.gameboard.id);
    }
  };

  // Redundant... delete?
  //
  // const instantShowResult = (gameboard,coordscell) => {
  //     const activeArea = document.getElementById('left');
  //     activeArea.innerHTML = '';
  //     drawActiveBoard(gameboard);
  // }

  var renderComputerMove = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(coords, gameboard) {
      var activeZone, row, cell, removeAttackMarker, stallNextTurn;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            activeZone = document.getElementById("left").querySelector('div');
            row = activeZone.children[coords[1]];
            cell = row.children[coords[0]];
            cell.classList.add('attack');
            _context.next = 6;
            return promisify(function () {
              return cell.classList.remove('attack');
            }, 1000);
          case 6:
            removeAttackMarker = _context.sent;
            removeAttackMarker();
            //get result of attack
            cell.classList.add(gameboard.squareStatus(coords[0], coords[1]));
            _context.next = 11;
            return stallComputerMove();
          case 11:
            stallNextTurn = _context.sent;
            stallNextTurn();
          case 13:
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
          case 13:
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
            return _context4.abrupt("return", computerFinished);
          case 4:
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
    playerOne: playerOne,
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
  var playerOneBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, "player-one");
  var playerTwoBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, "player-two");
  var playerOne = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)("player-one", playerOneBoard);
  var playerTwo = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Computer)("player-two", playerTwoBoard);
  playerOneBoard.opponent = playerTwo;
  playerTwoBoard.opponent = playerOne;
  var initialiseGame = function initialiseGame() {
    currentPlayer = playerTwo;
    _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].onNext = nextPlayer;
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
    turnOver: turnOver
  };
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVCO0VBQ0osQ0FBQztFQUVELElBQU16RSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlzVCxNQUFNLEVBQUVDLEVBQUUsRUFBSztJQUNsQztJQUNBLElBQU1DLFNBQVMsR0FBRy9WLDBFQUFjLENBQUM2VixNQUFNLENBQUM1VixTQUFTLEVBQUU2VixFQUFFLENBQUM7SUFDdERDLFNBQVMsQ0FBQ2pVLHFCQUFxQixDQUFDLENBQUM7RUFDckMsQ0FBQztFQUVELElBQU1rVSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlILE1BQU0sRUFBRUMsRUFBRSxFQUFLO0lBQ2xDdFAsT0FBTyxDQUFDQyxHQUFHLENBQUNvUCxNQUFNLENBQUM7SUFDbkJBLE1BQU0sQ0FBQzdOLEtBQUssQ0FBQyxDQUFDO0lBQ2Q4TixFQUFFLENBQUMsQ0FBQztFQUNSLENBQUM7RUFFRCxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSTNFLFNBQVMsRUFBRW1FLFNBQVMsRUFBSztJQUN4QyxJQUFNUyxVQUFVLEdBQUdULFNBQVMsQ0FBQ3pNLE1BQU0sR0FBR2dOLGFBQWEsR0FBR3pULGFBQWE7SUFDbkVBLGFBQWEsQ0FBQytPLFNBQVMsRUFBRTtNQUFBLE9BQU00RSxVQUFVLENBQUNULFNBQVMsRUFBRUMsY0FBYyxDQUFDO0lBQUEsRUFBQztFQUN6RSxDQUFDO0VBRURPLFNBQVMsQ0FBQzNFLFNBQVMsRUFBQ21FLFNBQVMsQ0FBQzs7RUFFOUI7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBOztFQUVBLE9BQU87SUFDSEcsUUFBUSxFQUFSQTtFQUNKLENBQUM7QUFDTCxDQUFDLENBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxhY2VtZW50Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9IChzaXplLGlkID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG4gICAgY29uc3QgdHVybnMgPSBbXTtcbiAgICBjb25zdCBTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgIGNvb3JkczogW3gseV0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFJvdyA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaChTcXVhcmUoaSxpbmRleCkpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICByb3dzLnB1c2goYnVpbGRSb3coaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZVNxdWFyZVt5XVt4XTtcbiAgICB9XG5cbiAgICBjb25zdCBzcXVhcmVTdGF0dXMgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCAmJiBnYW1lU3F1YXJlW3ldW3hdLnNoaXApIHJldHVybiAnaGl0JztcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0KSByZXR1cm4gJ21pc3MnO1xuICAgICAgICByZXR1cm4gJ2VtcHR5J1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZVNxdWFyZSA9IGJ1aWxkU3F1YXJlKHNpemUpO1xuXG4gICAgY29uc3QgaGl0U3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoIWdhbWVTcXVhcmVbeV0gfHwgIWdhbWVTcXVhcmVbeV1beF0pIHRocm93IG5ldyBFcnJvcihcIk91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCkgdGhyb3cgbmV3IEVycm9yKFwiU3F1YXJlIGFscmVhZHkgaGl0XCIpO1xuICAgICAgICBnYW1lU3F1YXJlW3ldW3hdLmhpdCA9IHRydWU7XG4gICAgICAgIHR1cm5zLnB1c2goW3gseV0pO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5zaGlwKSB7XG4gICAgICAgICAgICBnYW1lU3F1YXJlW3ldW3hdLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZVNxdWFyZVt5XVt4XS5zaGlwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgY29uc3QgY2hlY2tGb3JFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHR1cm5zLmxlbmd0aCA8IChzaXplKnNpemUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLHgseSxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBob3Jpem9udGFsID8geCA6IHkgO1xuICAgICAgICBpZiAoIWNoZWNrQm91bmRhcmllcyhheGlzLHNoaXAubGVuZ3RoKSkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICBpZiAoIWNoZWNrRm9yU2hpcHMoc2hpcC5sZW5ndGgseCx5LGhvcml6b250YWwpKSB0aHJvdyBuZXcgRXJyb3IoXCJTcGFjZSBvY2N1cGllZFwiKTtcbiAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9IGhvcml6b250YWw7XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW3ldW3graV0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbi5wdXNoKGdhbWVTcXVhcmVbeV1beCtpXS5jb29yZHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW3kraV1beF0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbi5wdXNoKGdhbWVTcXVhcmVbeStpXVt4XS5jb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gc2hpcC5wb3NpdGlvbi5wb3AoKTtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVbY29vcmRzWzFdXVtjb29yZHNbMF1dLnNoaXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBzLnNwbGljZShzaGlwcy5pbmRleE9mKHNoaXApLDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yU2hpcHMgPSAobGVuZ3RoLHgseSxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIC8vQnVpbGRzIGFuIGFycmF5IG9mIHNwYWNlcyB0aGUgc2hpcCB3aWxsIG9jY3VweVxuICAgICAgICBjb25zdCByYW5nZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2UucHVzaChnYW1lU3F1YXJlW3ldW3graV0uc2hpcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlLnB1c2goZ2FtZVNxdWFyZVt5K2ldW3hdLnNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vUmV0dXJucyB0cnVlIGlmIGFsbCBhcmUgZW1wdHlcbiAgICAgICAgcmV0dXJuIHJhbmdlLmV2ZXJ5KHNoaXAgPT4gc2hpcCA9PT0gbnVsbCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjaGVja0JvdW5kYXJpZXMgPSAoYXhpcyxsZW5ndGgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aXMgKyBsZW5ndGggPiBzaXplID8gZmFsc2UgOiB0cnVlOyBcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvckFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbENvbmRpdGlvbiA9IFtdXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IGFsbENvbmRpdGlvbi5wdXNoKHNoaXAuaXNTdW5rKCkpKTtcbiAgICAgICAgcmV0dXJuIGFsbENvbmRpdGlvbi5ldmVyeShjb25kaXRpb24gPT4gY29uZGl0aW9uID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2hpcHMubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgY3VyID0gc2hpcHMucG9wKCk7XG4gICAgICAgICAgICBjdXIucG9zaXRpb24uZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW2Nvb3JkWzFdXVtjb29yZFswXV0uc2hpcCA9IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGhpdFNxdWFyZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBjbGVhclNoaXAsXG4gICAgICAgIGNoZWNrRm9yQWxsU3VuayxcbiAgICAgICAgZ2V0U3F1YXJlLFxuICAgICAgICBjaGVja0ZvckVtcHR5LFxuICAgICAgICBnZXRTaGlwcyxcbiAgICAgICAgY2xlYXJBbGwsXG4gICAgICAgIHNxdWFyZVN0YXR1cyxcbiAgICAgICAgb3Bwb25lbnQ6bnVsbCxcbiAgICAgICAgaWQsXG4gICAgfVxuXG59OyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCJcbmltcG9ydCB7IFNISVBfSU1BR0VTIH0gZnJvbSBcIi4vc2NyZWVuLmpzXCJcblxuZXhwb3J0IGNvbnN0IFBsYWNlbWVudEJvYXJkID0gKGdhbWVib2FyZCwgb25GaW5pc2gpID0+IHtcbiAgICBsZXQgcGxhY2luZyA9IGZhbHNlO1xuICAgIGNvbnN0IHNoaXBCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1iYXInKTtcblxuICAgIGNvbnN0IHNoaXBzID0ge1xuICAgICAgICBjYXJyaWVyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDo1LFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBiYXR0bGVzaGlwOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDo0LFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjcnVpc2VyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDozLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBzdWJtYXJpbmU6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjMsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3llcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MixcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhzaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcCk7XG4gICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsc2hpcHNbc2hpcF0uY29vcmRzWzBdLHNoaXBzW3NoaXBdLmNvb3Jkc1sxXSxzaGlwc1tzaGlwXS5ob3Jpem9udGFsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvclVucGxhY2VkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc2hpcHMpLnNvbWUoKHNoaXApID0+IHtyZXR1cm4gIXNoaXBzW3NoaXBdLnBsYWNlZH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1BsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuaWQgPSBgJHtqfS0ke2l9YDtcbiAgICAgICAgICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdwb3NpdGlvbjpyZWxhdGl2ZTsnKVxuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgZHJhd1BsYWNlbWVudEJvYXJkKCk7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFNoaXAgPSBtYWtlTmV4dFNoaXBCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV4dFNoaXAgPyBuZXh0U2hpcCA6IHJlbmRlclN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICBpZiAobmV4dFNoaXApIHtidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHNoaXBCYXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBtYWtlU2hpcChidXR0b24pO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwLHNoaXBzW3NoaXBdKTtcbiAgICAgICAgfSk7fSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcEJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Utc2hpcCcpO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIGV4aXN0aW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXhpc3RpbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2tleV0ucGxhY2VkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBTdHJpbmcoJ1BsYWNlICcrIGtleSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IGtleTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoYnV0dG9uLmlkKTtcbiAgICAgICAgc2hpcC5yb3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUZW1wbGF0ZSA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRlbXBsYXRlLmlkID0gc2hpcC5uYW1lO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtTSElQX0lNQUdFU1tzaGlwLm5hbWVdfWA7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgc2hpcEJhci5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiBzaGlwQmFyLnJlbW92ZUNoaWxkKGJ1dHRvbikpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAoc2hpcCkgPT4ge1xuICAgICAgICBwbGFjaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlKHNoaXApO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgcmVuZGVyU2hpcCh0ZW1wbGF0ZSx0aWxlc1swXS5vZmZzZXRXaWR0aCxzaGlwKTtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBmaW5kSWxsZWdhbFNxdWFyZXMoc2hpcCk7XG4gICAgICAgIFRFTVBjb25zb2xlSWxsZWdhbFRpbGVzKGlsbGVnYWxTcXVhcmVzKTtcbiAgICAgICAgY29uc3Qgcm90YXRlID0gY3JlYXRlUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTWFya2VyKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJvdGF0ZVNoaXAoc2hpcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIGhvdmVySW1hZ2UodGlsZSx0ZW1wbGF0ZSk7XG4gICAgICAgICAgICBpZiAoaWxsZWdhbFNxdWFyZXMuaW5jbHVkZXModGlsZS5pZCkpIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2lsbGVnYWwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaWxsZWdhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwbGFjZVRlbXBsYXRlKGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJyksdGVtcGxhdGUsc2hpcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmluZElsbGVnYWxTcXVhcmVzID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBbXTtcbiAgICAgICAgLy8gRmluZCBvdXQgb2YgYm91bmQgc3F1YXJlc1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgZ2FtZWJvYXJkLmdldExlbmd0aCgpIDsgaSsrICkge1xuICAgICAgICAgICAgZm9yICggbGV0IGogPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgLSAoc2hpcC5sZW5ndGggLSAxKTsgaiA8IGdhbWVib2FyZC5nZXRMZW5ndGgoKSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvb2JNb3ZlID0gc2hpcC5vcmllbnRhdGlvbiA/IFtqLGldIDogW2ksal0gO1xuICAgICAgICAgICAgICAgIGlsbGVnYWxTcXVhcmVzLnB1c2gob29iTW92ZS5qb2luKCctJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vR2V0IHNwYWNlcyB0aGF0IGFyZSBvYnN0cnVjdGVkIGJ5IGFub3RoZXIgc2hpcFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgaWYgKCFzaGlwc1trZXldLnBsYWNlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBpbGxNb3ZlcyA9IGdldE9jY3VwaWVkU3BhY2VzKHNoaXBzW2tleV0pO1xuICAgICAgICAgICAgY29uc3QgYXJyYXlQb2ludGVyID0gc2hpcC5vcmllbnRhdGlvbiA/IDAgOiAxOyBcbiAgICAgICAgICAgIGlsbE1vdmVzLmZvckVhY2goKHNwYWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3BhY2VTZXQuYWRkKHNwYWNlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTcGFjZSA9IFsuLi5zcGFjZV07XG4gICAgICAgICAgICAgICAgICAgIG5leHRTcGFjZVthcnJheVBvaW50ZXJdID0gbmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gLSBpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gPCAwKSBjb250aW51ZSA7IFxuICAgICAgICAgICAgICAgICAgICBzcGFjZVNldC5hZGQobmV4dFNwYWNlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcGFjZVNldC5mb3JFYWNoKChjb29yZCkgPT4gaWxsZWdhbFNxdWFyZXMucHVzaChjb29yZCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbGxlZ2FsU3F1YXJlcztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRPY2N1cGllZFNwYWNlcyA9IChtYXJrZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhY2VzID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBhcnJheVBvaW50ZXIgPSBtYXJrZXIuaG9yaXpvbnRhbCA/IDAgOiAxIDtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG1hcmtlci5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29vcmQgPSBbLi4ubWFya2VyLmNvb3Jkc107XG4gICAgICAgICAgICBjdXJyZW50Q29vcmRbYXJyYXlQb2ludGVyXSA9IGN1cnJlbnRDb29yZFthcnJheVBvaW50ZXJdICsgaTtcbiAgICAgICAgICAgIHNwYWNlcy5hZGQoY3VycmVudENvb3JkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNoaXAgPSAoaW1hZ2UsdW5pdCxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2hpcC5vcmllbnRhdGlvbiA/ICh1bml0KnNoaXAubGVuZ3RoKSsncHgnIDogdW5pdCsncHgnO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCArJ3B4JzogKHVuaXQqc2hpcC5sZW5ndGgpKydweCc7XG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVNYXJrZXIgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5yZXBsYWNlV2l0aCh0aWxlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgcm90YXRlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAucm90YXRlKCk7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZVNoaXAgPSAodGVtcGxhdGUsc2hpcCkgPT4ge1xuICAgICAgICBpZiAocGxhY2luZykgcmV0dXJuO1xuICAgICAgICBjbGVhclNoaXBCYXIoKTtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHNoaXBzW3NoaXAubmFtZV0ucGxhY2VkID0gZmFsc2U7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VUZW1wbGF0ZSA9ICh0aWxlLHRlbXBsYXRlLHNoaXApID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gU2NyZWVuLmdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKHRpbGUub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5ob3Jpem9udGFsID0gc2hpcC5vcmllbnRhdGlvbjtcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLnBsYWNlZCA9IHRydWU7XG4gICAgICAgIHRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4gbW92ZVNoaXAoZS50YXJnZXQuY2xvc2VzdCgnLnBsYWNlaG9sZGVyJyksc2hpcCkpO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVwbGFjZVdpdGgodGlsZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgICAgICBwbGFjaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24gPSAodW5pdCxjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IChjb29yZHNbMF0qdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gKGNvb3Jkc1sxXSp1bml0KSsncHgnO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIHRvcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1wbGFjZW1lbnQnKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIHJldHVybiBzdWJtaXRCdXR0b25cbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNoaXBzKCk7XG4gICAgICAgIG9uRmluaXNoKCk7XG4gICAgICAgIHNoaXBCYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgVEVNUGNvbnNvbGVJbGxlZ2FsVGlsZXMgPSAoaWxsZWdhbCkgPT4ge1xuICAgICAgICBjb25zdCBjb25zb2xlU3RyaW5nID0gWycnXVxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgMTAgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlsbGVnYWwuaW5jbHVkZXMoYCR7an0tJHtpfWApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVTdHJpbmcucHVzaCgnWCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVTdHJpbmcucHVzaCgnTycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGVTdHJpbmcucHVzaCgnXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY29uc29sZVN0cmluZy5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIGNvbnN0IGhvdmVySW1hZ2UgPSAoZWxlbWVudCxpbWcpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpO1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gU2NyZWVuLmdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24odGlsZS5vZmZzZXRXaWR0aCxjb29yZHMpO1xuICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lsbGVnYWwnKSkge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gcG9zLnRvcDtcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQ7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJQbGFjZW1lbnRTY3JlZW4sXG4gICAgfVxufSIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgbWFrZU1vdmUgPSAodGlsZSwgb3Bwb25lbnRCb2FyZCkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBvcHBvbmVudEJvYXJkLmhpdFNxdWFyZSh0aWxlWzBdLHRpbGVbMV0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtb3ZlID09PSAnb2JqZWN0JyAmJiBtb3ZlLmlzU3VuaygpKSBTY3JlZW4uc3Vua1NoaXAobW92ZSk7IFxuICAgICAgICAgICAgU2NyZWVuLnJlbmRlclBsYXllck1vdmUodGlsZSxvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5aW5nOiBmYWxzZSxcbiAgICAgICAgaWQsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgbWFrZU1vdmVcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IENvbXB1dGVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgbGV0IHJlY2VudEhpdCA9IGZhbHNlO1xuXG4gICAgbGV0IGN1cnJlbnRTdWNjZXNzID0ge31cblxuICAgIGNvbnN0IG1ha2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnJpZXI6IFNoaXAoJ2NhcnJpZXInKSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcbiAgICAgICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcbiAgICAgICAgICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJyksXG4gICAgICAgICAgICBkZXN0cm95ZXI6IFNoaXAoJ2Rlc3Ryb3llcicpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgU1FVQVJFU19BUk9VTkQgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cDpbeCx5LTFdLFxuICAgICAgICAgICAgcmlnaHQ6W3grMSx5XSxcbiAgICAgICAgICAgIGRvd246W3gseSsxXSxcbiAgICAgICAgICAgIGxlZnQ6W3gtMSx5XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gbWFrZVNoaXBzKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmdldExlbmd0aCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5nZXRMZW5ndGgoKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoyKSA/IHRydWUgOiBmYWxzZSA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwc1tzaGlwXSx4LHksb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IHBsYWNlIGF0OiBcIiwgeCwgeSwgXCIgd2l0aCBcIiwgb3JpZW50YXRpb24sXCIgb3JpZW50YXRpb24uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAgICAgXG4gICAgY29uc3QgcGxheVRpbGUgPSAodGlsZSkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGhpdCA9IGdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAoaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kYXJ5ID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBjb25zdCByYW5YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgY29uc3QgcmFuWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIHJldHVybiBbcmFuWCxyYW5ZXTtcbiAgICB9XG5cbiAgICBjb25zdCB0cnlNb3ZlID0gKGNvb3JkcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheVRpbGUoY29vcmRzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdWNjZXNzID0gT2JqZWN0LmFzc2lnbih7Y29vcmRzOmNvb3Jkc30scmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgcmVjZW50SGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb3ZlVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgaWYgKCFnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLmNoZWNrRm9yRW1wdHkoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTW9yZSBTcGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIW1vdmVUYWtlbikge1xuICAgICAgICAgICAgY29vcmRzID0gZ2VuZXJhdGVSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgIG1vdmVUYWtlbiA9IHRyeU1vdmUoY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JlZW4ucmVuZGVyQ29tcHV0ZXJNb3ZlKGNvb3JkcyxnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZHVjYXRlZE1vdmUgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBpc0NvbXA6dHJ1ZSxcbiAgICAgICAgZ2VuZXJhdGVSYW5kb21Db29yZHMsXG4gICAgICAgIHRyeU1vdmUsXG4gICAgICAgIG1ha2VNb3ZlLFxuICAgICAgICBwbGFjZVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBTSElQX0lNQUdFUyA9IHtcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwSW1hZ2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cbiAgICAvL3doYXQgaXMgdGhpcyBkb2luZz9cbiAgICBsZXQgcGxheWVyT25lID0gdHJ1ZTtcbiAgICBsZXQgb25OZXh0O1xuXG4gICAgY29uc3QgZHJhd0FjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZ2V0VGFyZ2V0KGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5vcHBvbmVudC5tYWtlTW92ZSh0aWxlLCBnYW1lYm9hcmQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1JlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZHJhd1NoaXBzKGdhbWVib2FyZCxnYW1lYm9hcmQuaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdIaWRkZW5SZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICAvL2RyYXcgdGhlIHRpbGVzIHRvIG1haW50YWluIHNpemUgY29uc2lzdGVuY3lcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGlkZGVuLnRleHRDb250ZW50ID0gXCJEYXRhIEVuY3J5cHRlZC4uLlwiXG4gICAgICAgIGhpZGRlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYm9hcmQnKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoaGlkZGVuKVxuICAgIH1cblxuICAgIGNvbnN0IHJlZnJlc2ggPSAoY3VycmVudCxwcmV2aW91cykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgY29uc3QgcmVjb25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jyk7XG4gICAgICAgIGFjdGl2ZUFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlY29uQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZHJhd0FjdGl2ZUJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgIGlmICghY3VycmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIGRyYXdSZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhwcmV2aW91cy5nYW1lYm9hcmQscHJldmlvdXMuZ2FtZWJvYXJkLmlkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVkdW5kYW50Li4uIGRlbGV0ZT9cbiAgICAvL1xuICAgIC8vIGNvbnN0IGluc3RhbnRTaG93UmVzdWx0ID0gKGdhbWVib2FyZCxjb29yZHNjZWxsKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGFjdGl2ZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgIC8vICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIC8vICAgICBkcmF3QWN0aXZlQm9hcmQoZ2FtZWJvYXJkKTtcbiAgICAvLyB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHN0YWxsTmV4dFR1cm4gPSBhd2FpdCBzdGFsbENvbXB1dGVyTW92ZSgpO1xuICAgICAgICBzdGFsbE5leHRUdXJuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxheWVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzaG93UGxheWVyc1R1cm4gPSBhd2FpdCBzaG93UGxheWVyUmVzdWx0KCk7XG4gICAgICAgIHNob3dQbGF5ZXJzVHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1bmtTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc2hpcC5uYW1lLCAnIGlzIGEgZ29uZXInKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dQbGF5ZXJSZXN1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllclJlc3VsdFRpbWVyID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJSZXN1bHRUaW1lclxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFsbENvbXB1dGVyTW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaW5pc2hlZCA9IGF3YWl0IHByb21pc2lmeShvbk5leHQsIDIwMDApO1xuICAgICAgICByZXR1cm4gY29tcHV0ZXJGaW5pc2hlZFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9taXNpZnkgPSAoY2FsbGJhY2ssdGltZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGNhbGxiYWNrKSwgdGltZXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkLG9uYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBnYW1lYm9hcmQuZ2V0U2hpcHMoKTtcbiAgICAgICAgY29uc3QgcGxheXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmJvYXJkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uKHBsYXl6b25lLCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCksIHNoaXApXG4gICAgICAgICAgICBwbGF5em9uZS5hcHBlbmRDaGlsZChkcmF3U2hpcChkaW1lbnNpb25zKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1NoaXAgPSAoZGltZW5zaW9ucykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcC1tYXJrZXInKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxgdG9wOiR7ZGltZW5zaW9ucy50b3B9O2xlZnQ6JHtkaW1lbnNpb25zLmxlZnR9O3dpZHRoOiR7ZGltZW5zaW9ucy5sZW5ndGh9O2hlaWdodDoke2RpbWVuc2lvbnMuaGVpZ2h0fWApO1xuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uID0gKHpvbmUsIHNjYWxlICxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB6b25lLm9mZnNldFdpZHRoIC8gc2NhbGU7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMF0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMV0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLm9yaWVudGF0aW9uID8gc2hpcC5sZW5ndGggKiB1bml0IDogdW5pdCA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0IDogc2hpcC5sZW5ndGggKiB1bml0IDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICBsZW5ndGg6bGVuZ3RoKydweCcsXG4gICAgICAgICAgICBoZWlnaHQ6aGVpZ2h0KydweCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhcmdldCA9IChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIC8vIEZpbmQgdGhlIGNvb3JkaW5hdGVzIHRocm91Z2ggdGhlIGVsZW1lbnRzIHBvc2l0aW9uIGFtb25nc3QgaXRzIHNpYmxpbmdzXG4gICAgICAgIGNvbnN0IHkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJvYXJkLmNoaWxkcmVuLHBhcmVudCk7XG4gICAgICAgIGNvbnN0IHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbix0YXJnZXQpO1xuICAgICAgICByZXR1cm4gW3gseV1cbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJylcbiAgICB9XG5cblxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXdTaGlwcyxcbiAgICAgICAgcmVuZGVyQ29tcHV0ZXJNb3ZlLFxuICAgICAgICBlbmRHYW1lLFxuICAgICAgICBnZXRUYXJnZXQsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICBwbGF5ZXJPbmUsXG4gICAgICAgIHNldCBvbk5leHQobmV4dFR1cm4pIHtcbiAgICAgICAgICAgIG9uTmV4dCA9IG5leHRUdXJuO1xuICAgICAgICB9LFxuICAgIH1cbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChuYW1lID0gbnVsbCkgPT4ge1xuICAgIGxldCBoaXRDb3VudGVyID0gMDtcblxuICAgIGxldCBvcmllbnRhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlID0gKCkgPT4ge1xuICAgICAgICBvcmllbnRhdGlvbiA9ICFvcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBTSElQX1NJWkVTID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChoaXRDb3VudGVyID49IFNISVBfU0laRVNbbmFtZV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uOltdLFxuICAgICAgICBnZXQgb3JpZW50YXRpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb3JpZW50YXRpb24ob3IpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gb3I7XG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheWVkTmFtZSA9IG5hbWUuc3BsaXQoJycpO1xuICAgICAgICAgICAgYXJyYXllZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWVkTmFtZS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBTSElQX1NJWkVTW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XG4gICAgLS10aWxlLWF0dGFjazogcmdiYSgyNTUsMTUwLDE1MCwwLjkpO1xuICAgIC0tdGlsZS1oaXQ6IHJnYmEoMjU1LDIwMCwyMDAsMC44KTtcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xuICAgIC0tdGlsZS1ob3ZlcjogcmdiYSgyMzAsMjAwLDIwMCwwLjQpO1xufVxuXG4jZ2FtZWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNyaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2xlZnQgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbiNyaWdodCAuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jbGVmdCxcbiNyaWdodCB7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4udGlsZS5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3MpO1xufVxuXG4udGlsZS5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuXG4udGlsZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZmxleDoxO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRpbGUpO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLnRpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xufVxuXG5idXR0b24udGlsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlcik7XG59XG5cbi5oaWRkZW4tYm9hcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBib3R0b206MDtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6MDtcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDo1MCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jcGxheWVyLW9uZSxcbiNwbGF5ZXItdHdvIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLnNoaXAtbWFya2VyIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4vKiBidXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xuICAgIGJvcmRlcjogMDtcbn0gKi9cblxuYnV0dG9uLnRpbGUuYXR0YWNrIHtcbiAgICBhbmltYXRpb246IGF0dGFjay1wdWxzZSAwLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBhdHRhY2stcHVsc2Uge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1hdHRhY2spIDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xuICAgIH1cbn1cblxuLnBsYWNlLXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGxhY2Utc2hpcDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzNGRjtcbn1cblxuLnBsYWNlLXNoaXA6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMyUpO1xufVxuXG4ucGxhY2Vob2xkZXIge1xuICAgIGJvcmRlcjowO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cblxuLnBsYWNlaG9sZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5vdXQtb2YtYm91bmRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixNQUFNO0lBQ04sVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxRQUFRO0lBQ1IsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztJQUN6QztJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XFxuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcXG4gICAgLS10aWxlLWhpdDogcmdiYSgyNTUsMjAwLDIwMCwwLjgpO1xcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcXG59XFxuXFxuI2dhbWVhcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JpZ2h0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNsZWZ0IC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI3JpZ2h0IC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jbGVmdCxcXG4jcmlnaHQge1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4udGlsZS5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcXG59XFxuXFxuLnRpbGUuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udGlsZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZsZXg6MTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aWxlKTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4udGlsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xcbn1cXG5cXG5idXR0b24udGlsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXIpO1xcbn1cXG5cXG4uaGlkZGVuLWJvYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgYm90dG9tOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIHdpZHRoOjUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3BsYXllci1vbmUsXFxuI3BsYXllci10d28ge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLnNoaXAtbWFya2VyIHtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi8qIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XFxuICAgIGJvcmRlcjogMDtcXG59ICovXFxuXFxuYnV0dG9uLnRpbGUuYXR0YWNrIHtcXG4gICAgYW5pbWF0aW9uOiBhdHRhY2stcHVsc2UgMC41cyBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGF0dGFjay1wdWxzZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtYXR0YWNrKSA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcXG4gICAgfVxcbn1cXG5cXG4ucGxhY2Utc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxhY2Utc2hpcDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzRkY7XFxufVxcblxcbi5wbGFjZS1zaGlwOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAzJSk7XFxufVxcblxcbi5wbGFjZWhvbGRlciB7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5vdXQtb2YtYm91bmRzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vbW9kdWxlcy9zY3JlZW4uanNcIjtcbmltcG9ydCB7IFBsYWNlbWVudEJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGFjZW1lbnRCb2FyZC5qc1wiO1xuaW1wb3J0IHsgUGxheWVyICwgQ29tcHV0ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZCgxMCwgXCJwbGF5ZXItb25lXCIpO1xuICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gR2FtZWJvYXJkKDEwLCBcInBsYXllci10d29cIik7XG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKFwicGxheWVyLW9uZVwiLHBsYXllck9uZUJvYXJkKTtcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBDb21wdXRlcihcInBsYXllci10d29cIixwbGF5ZXJUd29Cb2FyZCk7XG4gICAgcGxheWVyT25lQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJUd287XG4gICAgcGxheWVyVHdvQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJPbmVcbiAgIFxuICAgIGNvbnN0IGluaXRpYWxpc2VHYW1lID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHdvO1xuICAgICAgICBTY3JlZW4ub25OZXh0ID0gbmV4dFBsYXllcjtcbiAgICAgICAgbmV4dFBsYXllcigpO1xuICAgIH1cblxuICAgIGNvbnN0IHR1cm5PdmVyID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50UGxheWVyLmdhbWVib2FyZC5jaGVja0ZvckFsbFN1bmsoKSkge1xuICAgICAgICAgICAgU2NyZWVuLmVuZEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuZXh0UGxheWVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBjdXJyZW50UGxheWVyO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyT25lID8gcGxheWVyVHdvIDogcGxheWVyT25lIDtcbiAgICAgICAgU2NyZWVuLnJlZnJlc2goY3VycmVudFBsYXllcixwcmV2aW91cyk7XG4gICAgICAgIGlmIChjdXJyZW50UGxheWVyLmlzQ29tcCkge1xuICAgICAgICAgICAgY3VycmVudFBsYXllci5tYWtlTW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IChwbGF5ZXIsIGNiKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBwbGF5ZXIgPT09IHBsYXllck9uZSA/IHBsYXllclR3by5nYW1lYm9hcmQgOiBwbGF5ZXJPbmUuZ2FtZWJvYXJkO1xuICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSBQbGFjZW1lbnRCb2FyZChwbGF5ZXIuZ2FtZWJvYXJkLCBjYik7XG4gICAgICAgIHBsYWNlbWVudC5yZW5kZXJQbGFjZW1lbnRTY3JlZW4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlclBsYWNlID0gKHBsYXllciwgY2IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgICAgICAgcGxheWVyLnBsYWNlKCk7XG4gICAgICAgIGNiKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PiB7XG4gICAgICAgIGNvbnN0IGFmdGVyUGxhY2UgPSBwbGF5ZXJUd28uaXNDb21wID8gY29tcHV0ZXJQbGFjZSA6IHNoaXBQbGFjZW1lbnQgO1xuICAgICAgICBzaGlwUGxhY2VtZW50KHBsYXllck9uZSwgKCkgPT4gYWZ0ZXJQbGFjZShwbGF5ZXJUd28sIGluaXRpYWxpc2VHYW1lKSk7XG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKHBsYXllck9uZSxwbGF5ZXJUd28pO1xuXG4gICAgLy8gbGV0IGN1cnJlbnRQbGF5ZXIgPSBpbml0aWFsaXNlR2FtZShwbGF5ZXJPbmUpO1xuXG4gICAgLy8gY29uc3QgcGxheWVyVGFua2VyID0gU2hpcCg1LCAnVGFua2VyJyk7XG4gICAgLy8gY29uc3QgcGxheWVyRGVzdHJveWVyID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gICAgLy8gY29uc3QgcGxheWVyQ3J1aXNlciA9IFNoaXAoNCwgJ0NydWlzZXInKTtcblxuICAgIC8vIGNvbnN0IGNvbXB1dGVyVGFua2VyID0gU2hpcCg1LCAnVGFua2VyJyk7XG4gICAgLy8gY29uc3QgY29tcHV0ZXJEZXN0cm95ZXIgPSBTaGlwKDMsICdEZXN0cm95ZXInKTtcbiAgICAvLyBjb25zdCBjb21wdXRlckNydWlzZXIgPSBTaGlwKDQsICdDcnVpc2VyJyk7XG5cbiAgICAvLyBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyVGFua2VyLDEsMSx0cnVlKTtcbiAgICAvLyBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyRGVzdHJveWVyLDMsNCxmYWxzZSk7XG4gICAgLy8gcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllckNydWlzZXIsMCw5LHRydWUpO1xuICAgIFxuICAgIC8vIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChjb21wdXRlclRhbmtlciw5LDIsZmFsc2UpO1xuICAgIC8vIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChjb21wdXRlckRlc3Ryb3llciw1LDYsZmFsc2UpO1xuICAgIC8vIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChjb21wdXRlckNydWlzZXIsMCwwLHRydWUpO1xuXG4gICAgLy8gU2NyZWVuLnJlZnJlc2gocGxheWVyT25lLHBsYXllclR3bylcblxuICAgIHJldHVybiB7XG4gICAgICAgIHR1cm5PdmVyLFxuICAgIH1cbn0pKCk7Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIkdhbWVib2FyZCIsInNpemUiLCJhcmd1bWVudHMiLCJzaGlwcyIsInR1cm5zIiwiU3F1YXJlIiwieCIsInkiLCJzaGlwIiwiaGl0IiwiY29vcmRzIiwiYnVpbGRSb3ciLCJpbmRleCIsImNvbHVtbnMiLCJidWlsZFNxdWFyZSIsInJvd3MiLCJnZXRMZW5ndGgiLCJnZXRTcXVhcmUiLCJnYW1lU3F1YXJlIiwic3F1YXJlU3RhdHVzIiwiZ2V0U2hpcHMiLCJoaXRTcXVhcmUiLCJFcnJvciIsImNoZWNrRm9yRW1wdHkiLCJwbGFjZVNoaXAiLCJob3Jpem9udGFsIiwiYXhpcyIsImNoZWNrQm91bmRhcmllcyIsImNoZWNrRm9yU2hpcHMiLCJvcmllbnRhdGlvbiIsInBvc2l0aW9uIiwiY2xlYXJTaGlwIiwicG9wIiwic3BsaWNlIiwiaW5kZXhPZiIsInJhbmdlIiwiZXZlcnkiLCJjaGVja0ZvckFsbFN1bmsiLCJhbGxDb25kaXRpb24iLCJmb3JFYWNoIiwiaXNTdW5rIiwiY29uZGl0aW9uIiwiY2xlYXJBbGwiLCJjdXIiLCJjb29yZCIsIm9wcG9uZW50IiwiU2NyZWVuIiwiU2hpcCIsIlNISVBfSU1BR0VTIiwiUGxhY2VtZW50Qm9hcmQiLCJnYW1lYm9hcmQiLCJvbkZpbmlzaCIsInBsYWNpbmciLCJzaGlwQmFyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhcnJpZXIiLCJwbGFjZWQiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsInNldFNoaXBzIiwiT2JqZWN0Iiwia2V5cyIsIm5ld1NoaXAiLCJjaGVja0ZvclVucGxhY2VkIiwic29tZSIsImRyYXdQbGFjZW1lbnRCb2FyZCIsInpvbmVEb20iLCJib2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJvd0NvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsImoiLCJ0aWxlIiwic2V0QXR0cmlidXRlIiwicmVuZGVyUGxhY2VtZW50U2NyZWVuIiwiZHJhd05leHRTaGlwQnV0dG9uIiwibmV4dFNoaXAiLCJtYWtlTmV4dFNoaXBCdXR0b24iLCJidXR0b24iLCJyZW5kZXJTdWJtaXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJtYWtlU2hpcCIsInNoaXBQbGFjZW1lbnQiLCJzdWJtaXQiLCJjbGVhclNoaXBCYXIiLCJleGlzdGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwia2V5IiwiYnV0dG9uVGV4dCIsIlN0cmluZyIsInRvVXBwZXJDYXNlIiwidGV4dENvbnRlbnQiLCJyb3RhdGUiLCJjcmVhdGVUZW1wbGF0ZSIsInRlbXBsYXRlIiwibmFtZSIsInN0eWxlIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRJbWFnZSIsImNsZWFyUm90YXRlQnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZVJvdGF0ZUJ1dHRvbiIsInRpbGVzIiwicmVuZGVyU2hpcCIsIm9mZnNldFdpZHRoIiwiaWxsZWdhbFNxdWFyZXMiLCJmaW5kSWxsZWdhbFNxdWFyZXMiLCJURU1QY29uc29sZUlsbGVnYWxUaWxlcyIsInJlbW92ZU1hcmtlciIsInJvdGF0ZVNoaXAiLCJob3ZlckltYWdlIiwiaW5jbHVkZXMiLCJyZW1vdmUiLCJlIiwicGxhY2VUZW1wbGF0ZSIsInRhcmdldCIsImNsb3Nlc3QiLCJvb2JNb3ZlIiwiX2xvb3AiLCJzcGFjZVNldCIsIlNldCIsImlsbE1vdmVzIiwiZ2V0T2NjdXBpZWRTcGFjZXMiLCJhcnJheVBvaW50ZXIiLCJzcGFjZSIsIm5leHRTcGFjZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9yZXQiLCJtYXJrZXIiLCJzcGFjZXMiLCJjdXJyZW50Q29vcmQiLCJpbWFnZSIsInVuaXQiLCJ3aWR0aCIsImhlaWdodCIsInJlcGxhY2VXaXRoIiwiY2xvbmVOb2RlIiwibW92ZVNoaXAiLCJnZXRUYXJnZXQiLCJjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uIiwiekluZGV4Iiwic3VibWl0QnV0dG9uIiwiaW5uZXJIVE1MIiwiaWxsZWdhbCIsImNvbnNvbGVTdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsImltZyIsImV2ZW50IiwicG9zIiwiY29udGFpbnMiLCJQbGF5ZXIiLCJtYWtlTW92ZSIsIm9wcG9uZW50Qm9hcmQiLCJtb3ZlIiwiX3R5cGVvZiIsInN1bmtTaGlwIiwicmVuZGVyUGxheWVyTW92ZSIsImVycm9yIiwicGxheWluZyIsIkNvbXB1dGVyIiwicmVjZW50SGl0IiwiY3VycmVudFN1Y2Nlc3MiLCJtYWtlU2hpcHMiLCJTUVVBUkVTX0FST1VORCIsInVwIiwicmlnaHQiLCJkb3duIiwicGxhY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJlcnIiLCJwbGF5VGlsZSIsImdlbmVyYXRlUmFuZG9tQ29vcmRzIiwiYm91bmRhcnkiLCJyYW5YIiwicmFuWSIsInRyeU1vdmUiLCJyZXN1bHQiLCJhc3NpZ24iLCJtb3ZlVGFrZW4iLCJyZW5kZXJDb21wdXRlck1vdmUiLCJlZHVjYXRlZE1vdmUiLCJpc0NvbXAiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiT3AiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFwcGx5IiwiYmF0dGxlc2hpcEltYWdlIiwicGxheWVyT25lIiwib25OZXh0IiwiZHJhd0FjdGl2ZUJvYXJkIiwiZHJhd1JlY29uQm9hcmQiLCJkcmF3U2hpcHMiLCJkcmF3SGlkZGVuUmVjb25Cb2FyZCIsImhpZGRlbiIsInJlZnJlc2giLCJjdXJyZW50IiwicHJldmlvdXMiLCJhY3RpdmVBcmVhIiwicmVjb25BcmVhIiwiX3JlZiIsIl9jYWxsZWUiLCJhY3RpdmVab25lIiwicm93IiwiY2VsbCIsInJlbW92ZUF0dGFja01hcmtlciIsInN0YWxsTmV4dFR1cm4iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY2hpbGRyZW4iLCJwcm9taXNpZnkiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29tcHV0ZXJGaW5pc2hlZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImNhbGxiYWNrIiwidGltZXIiLCJzZXRUaW1lb3V0Iiwib25ib2FyZCIsInBsYXl6b25lIiwiZGltZW5zaW9ucyIsImNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uIiwiZHJhd1NoaXAiLCJ6b25lIiwic2NhbGUiLCJwYXJlbnQiLCJBcnJheSIsImVuZEdhbWUiLCJuZXh0VHVybiIsImhpdENvdW50ZXIiLCJTSElQX1NJWkVTIiwib3IiLCJhcnJheWVkTmFtZSIsInNwbGl0IiwiR2FtZSIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXJPbmVCb2FyZCIsInBsYXllclR3b0JvYXJkIiwicGxheWVyVHdvIiwiaW5pdGlhbGlzZUdhbWUiLCJuZXh0UGxheWVyIiwidHVybk92ZXIiLCJwbGF5ZXIiLCJjYiIsInBsYWNlbWVudCIsImNvbXB1dGVyUGxhY2UiLCJzdGFydEdhbWUiLCJhZnRlclBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==