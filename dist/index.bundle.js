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
  var makeMove = function makeMove(tile) {
    if (!tile) return;
    try {
      var move = gameboard.hitSquare(tile[0], tile[1]);
      if (_typeof(move) === 'object' && move.isSunk()) _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].sunkShip(move);
      _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderPlayerMove(tile, gameboard);
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
      var hit = gameboard.hitSquare(tile[0], tile[1]);
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
    if (!gameboard.checkForEmpty()) {
      throw new Error("No More Space");
    }
    while (!moveTaken) {
      coords = generateRandomCoords();
      moveTaken = tryMove(coords);
    }
    _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderComputerMove(coords, gameboard);
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
  var playerOne = true;
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
      gameboard.opponent.makeMove(tile);
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
    drawActiveBoard(current.gameboard);
    if (!current.isComp) {
      drawReconBoard(previous.gameboard);
    } else {
      drawHiddenReconBoard(previous.gameboard);
      drawShips(current.gameboard, current.gameboard.id);
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
            return promisify(f(), 2000);
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
            return promisify(f(), 2000);
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
    playerOne: playerOne
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
    return hitCounter >= length;
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

.miss {
    background-color: var(--tile-miss);
}

.hit {
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

div.tile {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,iCAAiC;IACjC,kCAAkC;IAClC,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,MAAM;IACN,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,KAAK;IACL,QAAQ;IACR,MAAM;IACN,OAAO;IACP,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;;;;;GAKG;;AAEH;IACI,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI;QACI,qCAAqC;IACzC;IACA;QACI,6BAA6B;IACjC;AACJ;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":[":root {\n    --tile:  rgba(200,200,200,0.1);\n    --tile-attack: rgba(255,150,150,0.9);\n    --tile-hit: rgba(255,200,200,0.8);\n    --tile-miss: rgba(200,200,255,0.8);\n    --tile-hover: rgba(230,200,200,0.4);\n}\n\n#gamearea {\n    display: flex;\n}\n\n#right {\n    position: relative;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n#left .ship {\n    background-color: blue;\n}\n\n#right .ship {\n    background-color: red;\n}\n\n#left,\n#right {\n    margin: 2rem;\n    position:relative;\n}\n\n.miss {\n    background-color: var(--tile-miss);\n}\n\n.hit {\n    background-color: var(--tile-hit);\n}\n\n.row {\n    display:flex;\n}\n\n.tile {\n    height: 100%;\n    width: 100%;\n    padding: 1rem;\n    flex:1;\n    z-index: 2;\n    margin: 0;\n    background: var(--tile);\n    border: 0;\n}\n\ndiv.tile {\n    background-color: var(--tile);\n}\n\nbutton.tile:hover {\n    background-color: var(--tile-hover);\n}\n\n.hidden-board {\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    width:50%;\n    height: fit-content;\n    padding: 1rem;\n    background-color: var(--tile-hit);\n    text-align: center;\n    border-radius: 5px;\n}\n\n#player-one,\n#player-two {\n    position:relative;\n}\n\n.ship-marker {\n    position:absolute;\n    background-color: aqua;\n}\n\n/* button {\n    padding: 0;\n    margin: 0;\n    background-color: var(--tile);\n    border: 0;\n} */\n\nbutton.tile.attack {\n    animation: attack-pulse 0.5s infinite;\n    animation-direction: alternate;\n}\n\n@keyframes attack-pulse {\n    0% {\n        background-color: var(--tile-attack) ;\n    }\n    100% {\n        background-color: var(--tile);\n    }\n}\n\n.place-ship {\n    background-color: blue;\n    border-radius: 5px;\n    padding: 1rem;\n    color: white;\n}\n\n.place-ship:hover {\n    background-color: #3333FF;\n}\n\n.place-ship:active {\n    transform: scale(103%);\n}\n\n.placeholder {\n    border:0;\n    margin:0;\n    padding:0;\n}\n\n.placeholder:hover {\n    background-color: rgb(255, 255, 255);\n}\n\n.out-of-bounds {\n    background-color: red;\n}"],"sourceRoot":""}]);
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
  var playerOne = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)("player-one", playerTwoBoard);
  var playerTwo = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Computer)("player-two", playerOneBoard);
  playerOneBoard.opponent = playerTwo;
  playerTwoBoard.opponent = playerOne;
  var initialiseGame = function initialiseGame() {
    currentPlayer = playerOne;
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
    var placement = (0,_modules_placementBoard_js__WEBPACK_IMPORTED_MODULE_1__.PlacementBoard)(player.gameboard, cb);
    placement.renderPlacementScreen();
  };
  var computerPlace = function computerPlace(player, cb) {
    console.log(player);
    player.place();
    cb();
  };
  var startGame = function startGame(playerOne, playerTwo) {
    console.log(playerOne, playerTwo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztJQUNsQ3JQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbVAsTUFBTSxDQUFDO0lBQ25CQSxNQUFNLENBQUM3TixLQUFLLENBQUMsQ0FBQztJQUNkOE4sRUFBRSxDQUFDLENBQUM7RUFDUixDQUFDO0VBRUQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUkzRSxTQUFTLEVBQUVtRSxTQUFTLEVBQUs7SUFDeENoUCxPQUFPLENBQUNDLEdBQUcsQ0FBQzRLLFNBQVMsRUFBQ21FLFNBQVMsQ0FBQztJQUNoQyxJQUFNUyxVQUFVLEdBQUdULFNBQVMsQ0FBQ3pNLE1BQU0sR0FBR2dOLGFBQWEsR0FBR3ZULGFBQWE7SUFDbkVBLGFBQWEsQ0FBQzZPLFNBQVMsRUFBRTtNQUFBLE9BQU00RSxVQUFVLENBQUNULFNBQVMsRUFBRUMsY0FBYyxDQUFDO0lBQUEsRUFBQztFQUN6RSxDQUFDO0VBRURPLFNBQVMsQ0FBQzNFLFNBQVMsRUFBQ21FLFNBQVMsQ0FBQzs7RUFFOUI7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBOztFQUVBLE9BQU87SUFDSEcsUUFBUSxFQUFSQTtFQUNKLENBQUM7QUFDTCxDQUFDLENBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxhY2VtZW50Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9IChzaXplLGlkID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG4gICAgY29uc3QgdHVybnMgPSBbXTtcbiAgICBjb25zdCBTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgIGNvb3JkczogW3gseV0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFJvdyA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaChTcXVhcmUoaSxpbmRleCkpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICByb3dzLnB1c2goYnVpbGRSb3coaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZVNxdWFyZVt5XVt4XTtcbiAgICB9XG5cbiAgICBjb25zdCBzcXVhcmVTdGF0dXMgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCAmJiBnYW1lU3F1YXJlW3ldW3hdLnNoaXApIHJldHVybiAnaGl0JztcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0KSByZXR1cm4gJ21pc3MnO1xuICAgICAgICByZXR1cm4gJ2VtcHR5J1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZVNxdWFyZSA9IGJ1aWxkU3F1YXJlKHNpemUpO1xuXG4gICAgY29uc3QgaGl0U3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoIWdhbWVTcXVhcmVbeV0gfHwgIWdhbWVTcXVhcmVbeV1beF0pIHRocm93IG5ldyBFcnJvcihcIk91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCkgdGhyb3cgbmV3IEVycm9yKFwiU3F1YXJlIGFscmVhZHkgaGl0XCIpO1xuICAgICAgICBnYW1lU3F1YXJlW3ldW3hdLmhpdCA9IHRydWU7XG4gICAgICAgIHR1cm5zLnB1c2goW3gseV0pO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5zaGlwKSB7XG4gICAgICAgICAgICBnYW1lU3F1YXJlW3ldW3hdLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZVNxdWFyZVt5XVt4XS5zaGlwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgY29uc3QgY2hlY2tGb3JFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHR1cm5zLmxlbmd0aCA8IChzaXplKnNpemUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLHgseSxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBob3Jpem9udGFsID8geCA6IHkgO1xuICAgICAgICBpZiAoIWNoZWNrQm91bmRhcmllcyhheGlzLHNoaXAubGVuZ3RoKSkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICBpZiAoIWNoZWNrRm9yU2hpcHMoc2hpcC5sZW5ndGgseCx5LGhvcml6b250YWwpKSB0aHJvdyBuZXcgRXJyb3IoXCJTcGFjZSBvY2N1cGllZFwiKTtcbiAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9IGhvcml6b250YWw7XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW3ldW3graV0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbi5wdXNoKGdhbWVTcXVhcmVbeV1beCtpXS5jb29yZHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW3kraV1beF0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbi5wdXNoKGdhbWVTcXVhcmVbeStpXVt4XS5jb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gc2hpcC5wb3NpdGlvbi5wb3AoKTtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVbY29vcmRzWzFdXVtjb29yZHNbMF1dLnNoaXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBzLnNwbGljZShzaGlwcy5pbmRleE9mKHNoaXApLDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yU2hpcHMgPSAobGVuZ3RoLHgseSxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIC8vQnVpbGRzIGFuIGFycmF5IG9mIHNwYWNlcyB0aGUgc2hpcCB3aWxsIG9jY3VweVxuICAgICAgICBjb25zdCByYW5nZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2UucHVzaChnYW1lU3F1YXJlW3ldW3graV0uc2hpcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlLnB1c2goZ2FtZVNxdWFyZVt5K2ldW3hdLnNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vUmV0dXJucyB0cnVlIGlmIGFsbCBhcmUgZW1wdHlcbiAgICAgICAgcmV0dXJuIHJhbmdlLmV2ZXJ5KHNoaXAgPT4gc2hpcCA9PT0gbnVsbCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjaGVja0JvdW5kYXJpZXMgPSAoYXhpcyxsZW5ndGgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aXMgKyBsZW5ndGggPiBzaXplID8gZmFsc2UgOiB0cnVlOyBcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvckFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbENvbmRpdGlvbiA9IFtdXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IGFsbENvbmRpdGlvbi5wdXNoKHNoaXAuaXNTdW5rKCkpKTtcbiAgICAgICAgcmV0dXJuIGFsbENvbmRpdGlvbi5ldmVyeShjb25kaXRpb24gPT4gY29uZGl0aW9uID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2hpcHMubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgY3VyID0gc2hpcHMucG9wKCk7XG4gICAgICAgICAgICBjdXIucG9zaXRpb24uZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW2Nvb3JkWzFdXVtjb29yZFswXV0uc2hpcCA9IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGhpdFNxdWFyZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBjbGVhclNoaXAsXG4gICAgICAgIGNoZWNrRm9yQWxsU3VuayxcbiAgICAgICAgZ2V0U3F1YXJlLFxuICAgICAgICBjaGVja0ZvckVtcHR5LFxuICAgICAgICBnZXRTaGlwcyxcbiAgICAgICAgY2xlYXJBbGwsXG4gICAgICAgIHNxdWFyZVN0YXR1cyxcbiAgICAgICAgb3Bwb25lbnQ6bnVsbCxcbiAgICAgICAgaWQsXG4gICAgfVxuXG59OyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCJcbmltcG9ydCB7IFNISVBfSU1BR0VTIH0gZnJvbSBcIi4vc2NyZWVuLmpzXCJcblxuZXhwb3J0IGNvbnN0IFBsYWNlbWVudEJvYXJkID0gKGdhbWVib2FyZCwgb25GaW5pc2gpID0+IHtcbiAgICBsZXQgcGxhY2luZyA9IGZhbHNlO1xuICAgIGNvbnN0IHNoaXBCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1iYXInKTtcblxuICAgIGNvbnN0IHNoaXBzID0ge1xuICAgICAgICBjYXJyaWVyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDo1LFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBiYXR0bGVzaGlwOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDo0LFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjcnVpc2VyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDozLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBzdWJtYXJpbmU6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjMsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3llcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MixcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhzaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcCk7XG4gICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsc2hpcHNbc2hpcF0uY29vcmRzWzBdLHNoaXBzW3NoaXBdLmNvb3Jkc1sxXSxzaGlwc1tzaGlwXS5ob3Jpem9udGFsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvclVucGxhY2VkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc2hpcHMpLnNvbWUoKHNoaXApID0+IHtyZXR1cm4gIXNoaXBzW3NoaXBdLnBsYWNlZH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1BsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuaWQgPSBgJHtqfS0ke2l9YDtcbiAgICAgICAgICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdwb3NpdGlvbjpyZWxhdGl2ZTsnKVxuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgZHJhd1BsYWNlbWVudEJvYXJkKCk7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFNoaXAgPSBtYWtlTmV4dFNoaXBCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV4dFNoaXAgPyBuZXh0U2hpcCA6IHJlbmRlclN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICBpZiAobmV4dFNoaXApIHtidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHNoaXBCYXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBtYWtlU2hpcChidXR0b24pO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwLHNoaXBzW3NoaXBdKTtcbiAgICAgICAgfSk7fSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcEJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Utc2hpcCcpO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIGV4aXN0aW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXhpc3RpbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2tleV0ucGxhY2VkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBTdHJpbmcoJ1BsYWNlICcrIGtleSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IGtleTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoYnV0dG9uLmlkKTtcbiAgICAgICAgc2hpcC5yb3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUZW1wbGF0ZSA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRlbXBsYXRlLmlkID0gc2hpcC5uYW1lO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtTSElQX0lNQUdFU1tzaGlwLm5hbWVdfWA7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgc2hpcEJhci5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiBzaGlwQmFyLnJlbW92ZUNoaWxkKGJ1dHRvbikpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAoc2hpcCkgPT4ge1xuICAgICAgICBwbGFjaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlKHNoaXApO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgcmVuZGVyU2hpcCh0ZW1wbGF0ZSx0aWxlc1swXS5vZmZzZXRXaWR0aCxzaGlwKTtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBmaW5kSWxsZWdhbFNxdWFyZXMoc2hpcCk7XG4gICAgICAgIFRFTVBjb25zb2xlSWxsZWdhbFRpbGVzKGlsbGVnYWxTcXVhcmVzKTtcbiAgICAgICAgY29uc3Qgcm90YXRlID0gY3JlYXRlUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTWFya2VyKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJvdGF0ZVNoaXAoc2hpcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIGhvdmVySW1hZ2UodGlsZSx0ZW1wbGF0ZSk7XG4gICAgICAgICAgICBpZiAoaWxsZWdhbFNxdWFyZXMuaW5jbHVkZXModGlsZS5pZCkpIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2lsbGVnYWwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaWxsZWdhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwbGFjZVRlbXBsYXRlKGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJyksdGVtcGxhdGUsc2hpcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmluZElsbGVnYWxTcXVhcmVzID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBbXTtcbiAgICAgICAgLy8gRmluZCBvdXQgb2YgYm91bmQgc3F1YXJlc1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgZ2FtZWJvYXJkLmdldExlbmd0aCgpIDsgaSsrICkge1xuICAgICAgICAgICAgZm9yICggbGV0IGogPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgLSAoc2hpcC5sZW5ndGggLSAxKTsgaiA8IGdhbWVib2FyZC5nZXRMZW5ndGgoKSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvb2JNb3ZlID0gc2hpcC5vcmllbnRhdGlvbiA/IFtqLGldIDogW2ksal0gO1xuICAgICAgICAgICAgICAgIGlsbGVnYWxTcXVhcmVzLnB1c2gob29iTW92ZS5qb2luKCctJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vR2V0IHNwYWNlcyB0aGF0IGFyZSBvYnN0cnVjdGVkIGJ5IGFub3RoZXIgc2hpcFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgaWYgKCFzaGlwc1trZXldLnBsYWNlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBpbGxNb3ZlcyA9IGdldE9jY3VwaWVkU3BhY2VzKHNoaXBzW2tleV0pO1xuICAgICAgICAgICAgY29uc3QgYXJyYXlQb2ludGVyID0gc2hpcC5vcmllbnRhdGlvbiA/IDAgOiAxOyBcbiAgICAgICAgICAgIGlsbE1vdmVzLmZvckVhY2goKHNwYWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3BhY2VTZXQuYWRkKHNwYWNlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTcGFjZSA9IFsuLi5zcGFjZV07XG4gICAgICAgICAgICAgICAgICAgIG5leHRTcGFjZVthcnJheVBvaW50ZXJdID0gbmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gLSBpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gPCAwKSBjb250aW51ZSA7IFxuICAgICAgICAgICAgICAgICAgICBzcGFjZVNldC5hZGQobmV4dFNwYWNlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcGFjZVNldC5mb3JFYWNoKChjb29yZCkgPT4gaWxsZWdhbFNxdWFyZXMucHVzaChjb29yZCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbGxlZ2FsU3F1YXJlcztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRPY2N1cGllZFNwYWNlcyA9IChtYXJrZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhY2VzID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBhcnJheVBvaW50ZXIgPSBtYXJrZXIuaG9yaXpvbnRhbCA/IDAgOiAxIDtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG1hcmtlci5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29vcmQgPSBbLi4ubWFya2VyLmNvb3Jkc107XG4gICAgICAgICAgICBjdXJyZW50Q29vcmRbYXJyYXlQb2ludGVyXSA9IGN1cnJlbnRDb29yZFthcnJheVBvaW50ZXJdICsgaTtcbiAgICAgICAgICAgIHNwYWNlcy5hZGQoY3VycmVudENvb3JkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNoaXAgPSAoaW1hZ2UsdW5pdCxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2hpcC5vcmllbnRhdGlvbiA/ICh1bml0KnNoaXAubGVuZ3RoKSsncHgnIDogdW5pdCsncHgnO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCArJ3B4JzogKHVuaXQqc2hpcC5sZW5ndGgpKydweCc7XG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVNYXJrZXIgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5yZXBsYWNlV2l0aCh0aWxlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgcm90YXRlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAucm90YXRlKCk7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZVNoaXAgPSAodGVtcGxhdGUsc2hpcCkgPT4ge1xuICAgICAgICBpZiAocGxhY2luZykgcmV0dXJuO1xuICAgICAgICBjbGVhclNoaXBCYXIoKTtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHNoaXBzW3NoaXAubmFtZV0ucGxhY2VkID0gZmFsc2U7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VUZW1wbGF0ZSA9ICh0aWxlLHRlbXBsYXRlLHNoaXApID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gU2NyZWVuLmdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKHRpbGUub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5ob3Jpem9udGFsID0gc2hpcC5vcmllbnRhdGlvbjtcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLnBsYWNlZCA9IHRydWU7XG4gICAgICAgIHRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4gbW92ZVNoaXAoZS50YXJnZXQuY2xvc2VzdCgnLnBsYWNlaG9sZGVyJyksc2hpcCkpO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVwbGFjZVdpdGgodGlsZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgICAgICBwbGFjaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24gPSAodW5pdCxjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IChjb29yZHNbMF0qdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gKGNvb3Jkc1sxXSp1bml0KSsncHgnO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIHRvcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1wbGFjZW1lbnQnKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIHJldHVybiBzdWJtaXRCdXR0b25cbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNoaXBzKCk7XG4gICAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuXG4gICAgY29uc3QgVEVNUGNvbnNvbGVJbGxlZ2FsVGlsZXMgPSAoaWxsZWdhbCkgPT4ge1xuICAgICAgICBjb25zdCBjb25zb2xlU3RyaW5nID0gWycnXVxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAxMCA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgMTAgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlsbGVnYWwuaW5jbHVkZXMoYCR7an0tJHtpfWApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVTdHJpbmcucHVzaCgnWCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVTdHJpbmcucHVzaCgnTycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGVTdHJpbmcucHVzaCgnXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY29uc29sZVN0cmluZy5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIGNvbnN0IGhvdmVySW1hZ2UgPSAoZWxlbWVudCxpbWcpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpO1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gU2NyZWVuLmdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24odGlsZS5vZmZzZXRXaWR0aCxjb29yZHMpO1xuICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lsbGVnYWwnKSkge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gcG9zLnRvcDtcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQ7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJQbGFjZW1lbnRTY3JlZW4sXG4gICAgfVxufSIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgbWFrZU1vdmUgPSAodGlsZSkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBnYW1lYm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vdmUgPT09ICdvYmplY3QnICYmIG1vdmUuaXNTdW5rKCkpIFNjcmVlbi5zdW5rU2hpcChtb3ZlKTsgXG4gICAgICAgICAgICBTY3JlZW4ucmVuZGVyUGxheWVyTW92ZSh0aWxlLGdhbWVib2FyZCk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWluZzogZmFsc2UsXG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIG1ha2VNb3ZlXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBDb21wdXRlciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIGxldCByZWNlbnRIaXQgPSBmYWxzZTtcblxuICAgIGxldCBjdXJyZW50U3VjY2VzcyA9IHt9XG5cbiAgICBjb25zdCBtYWtlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJyksXG4gICAgICAgICAgICBiYXR0bGVzaGlwOiBTaGlwKCdiYXR0bGVzaGlwJyksXG4gICAgICAgICAgICBjcnVpc2VyOiBTaGlwKCdjcnVpc2VyJyksXG4gICAgICAgICAgICBzdWJtYXJpbmU6IFNoaXAoJ3N1Ym1hcmluZScpLFxuICAgICAgICAgICAgZGVzdHJveWVyOiBTaGlwKCdkZXN0cm95ZXInKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFNRVUFSRVNfQVJPVU5EID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXA6W3gseS0xXSxcbiAgICAgICAgICAgIHJpZ2h0Olt4KzEseV0sXG4gICAgICAgICAgICBkb3duOlt4LHkrMV0sXG4gICAgICAgICAgICBsZWZ0Olt4LTEseV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IG1ha2VTaGlwcygpO1xuICAgICAgICBPYmplY3Qua2V5cyhzaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5nZXRMZW5ndGgoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMikgPyB0cnVlIDogZmFsc2UgO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcHNbc2hpcF0seCx5LG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbm5vdCBwbGFjZSBhdDogXCIsIHgsIHksIFwiIHdpdGggXCIsIG9yaWVudGF0aW9uLFwiIG9yaWVudGF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgICAgIFxuICAgIGNvbnN0IHBsYXlUaWxlID0gKHRpbGUpID0+IHtcbiAgICAgICAgaWYgKCF0aWxlKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBoaXQgPSBnYW1lYm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAoaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kYXJ5ID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBjb25zdCByYW5YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgY29uc3QgcmFuWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIHJldHVybiBbcmFuWCxyYW5ZXTtcbiAgICB9XG5cbiAgICBjb25zdCB0cnlNb3ZlID0gKGNvb3JkcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheVRpbGUoY29vcmRzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdWNjZXNzID0gT2JqZWN0LmFzc2lnbih7Y29vcmRzOmNvb3Jkc30scmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgcmVjZW50SGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb3ZlVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgaWYgKCFnYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gdHJ5TW92ZShjb29yZHMpO1xuICAgICAgICB9XG4gICAgICAgIFNjcmVlbi5yZW5kZXJDb21wdXRlck1vdmUoY29vcmRzLGdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWR1Y2F0ZWRNb3ZlID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgaXNDb21wOnRydWUsXG4gICAgICAgIGdlbmVyYXRlUmFuZG9tQ29vcmRzLFxuICAgICAgICB0cnlNb3ZlLFxuICAgICAgICBtYWtlTW92ZSxcbiAgICAgICAgcGxhY2VcbiAgICB9XG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCBiYXR0bGVzaGlwSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgU0hJUF9JTUFHRVMgPSB7XG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG5cbiAgICBsZXQgcGxheWVyT25lID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRyYXdBY3RpdmVCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGdldFRhcmdldChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSk7XG4gICAgICAgICAgICBnYW1lYm9hcmQub3Bwb25lbnQubWFrZU1vdmUodGlsZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkcmF3U2hpcHMoZ2FtZWJvYXJkLGdhbWVib2FyZC5pZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0hpZGRlblJlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIC8vZHJhdyB0aGUgdGlsZXMgdG8gbWFpbnRhaW4gc2l6ZSBjb25zaXN0ZW5jeVxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaWRkZW4udGV4dENvbnRlbnQgPSBcIkRhdGEgRW5jcnlwdGVkLi4uXCJcbiAgICAgICAgaGlkZGVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1ib2FyZCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChoaWRkZW4pXG4gICAgfVxuXG4gICAgY29uc3QgcmVmcmVzaCA9IChjdXJyZW50LHByZXZpb3VzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBjb25zdCByZWNvbkFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKTtcbiAgICAgICAgYWN0aXZlQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVjb25BcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkcmF3QWN0aXZlQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICBpZiAoIWN1cnJlbnQuaXNDb21wKSB7XG4gICAgICAgICAgICBkcmF3UmVjb25Cb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd0hpZGRlblJlY29uQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhjdXJyZW50LmdhbWVib2FyZCxjdXJyZW50LmdhbWVib2FyZC5pZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlZHVuZGFudC4uLiBkZWxldGU/XG4gICAgLy9cbiAgICAvLyBjb25zdCBpbnN0YW50U2hvd1Jlc3VsdCA9IChnYW1lYm9hcmQsY29vcmRzY2VsbCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAvLyAgICAgYWN0aXZlQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAvLyAgICAgZHJhd0FjdGl2ZUJvYXJkKGdhbWVib2FyZCk7XG4gICAgLy8gfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzdGFsbE5leHRUdXJuID0gYXdhaXQgc3RhbGxDb21wdXRlck1vdmUoKTtcbiAgICAgICAgc3RhbGxOZXh0VHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYXllck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc2hvd1BsYXllcnNUdXJuID0gYXdhaXQgc2hvd1BsYXllclJlc3VsdCgpO1xuICAgICAgICBzaG93UGxheWVyc1R1cm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdW5rU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXAubmFtZSwgJyBpcyBhIGdvbmVyJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGxheWVyUmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJSZXN1bHRUaW1lciA9IGF3YWl0IHByb21pc2lmeShmKCksIDIwMDApO1xuICAgICAgICByZXR1cm4gcGxheWVyUmVzdWx0VGltZXJcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhbGxDb21wdXRlck1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmluaXNoZWQgPSBhd2FpdCBwcm9taXNpZnkoZigpLCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyRmluaXNoZWRcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvbWlzaWZ5ID0gKGNhbGxiYWNrLHRpbWVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShjYWxsYmFjayksIHRpbWVyKSk7XG4gICAgfVxuICAgIFxuXG4gICAgY29uc3QgZHJhd1NoaXBzID0gKGdhbWVib2FyZCxvbmJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ2FtZWJvYXJkLmdldFNoaXBzKCk7XG4gICAgICAgIGNvbnN0IHBsYXl6b25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob25ib2FyZCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbihwbGF5em9uZSwgZ2FtZWJvYXJkLmdldExlbmd0aCgpLCBzaGlwKVxuICAgICAgICAgICAgcGxheXpvbmUuYXBwZW5kQ2hpbGQoZHJhd1NoaXAoZGltZW5zaW9ucykpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdTaGlwID0gKGRpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbWFya2VyJyk7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdzdHlsZScsYHRvcDoke2RpbWVuc2lvbnMudG9wfTtsZWZ0OiR7ZGltZW5zaW9ucy5sZWZ0fTt3aWR0aDoke2RpbWVuc2lvbnMubGVuZ3RofTtoZWlnaHQ6JHtkaW1lbnNpb25zLmhlaWdodH1gKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiA9ICh6b25lLCBzY2FsZSAsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB1bml0ID0gem9uZS5vZmZzZXRXaWR0aCAvIHNjYWxlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzBdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzFdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5vcmllbnRhdGlvbiA/IHNoaXAubGVuZ3RoICogdW5pdCA6IHVuaXQgO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCA6IHNoaXAubGVuZ3RoICogdW5pdCA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgbGVuZ3RoOmxlbmd0aCsncHgnLFxuICAgICAgICAgICAgaGVpZ2h0OmhlaWdodCsncHgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXJnZXQgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmICghYnV0dG9uKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvbjtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICAvLyBGaW5kIHRoZSBjb29yZGluYXRlcyB0aHJvdWdoIHRoZSBlbGVtZW50cyBwb3NpdGlvbiBhbW9uZ3N0IGl0cyBzaWJsaW5nc1xuICAgICAgICBjb25zdCB5ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChib2FyZC5jaGlsZHJlbixwYXJlbnQpO1xuICAgICAgICBjb25zdCB4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGRyZW4sdGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIFt4LHldXG4gICAgfVxuXG4gICAgY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgfVxuXG5cblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkcmF3U2hpcHMsXG4gICAgICAgIHJlbmRlckNvbXB1dGVyTW92ZSxcbiAgICAgICAgZW5kR2FtZSxcbiAgICAgICAgZ2V0VGFyZ2V0LFxuICAgICAgICByZWZyZXNoLFxuICAgICAgICBzdW5rU2hpcCxcbiAgICAgICAgcmVuZGVyUGxheWVyTW92ZSxcbiAgICAgICAgcGxheWVyT25lXG4gICAgfVxufSkoKTtcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKG5hbWUgPSBudWxsKSA9PiB7XG4gICAgbGV0IGhpdENvdW50ZXIgPSAwO1xuXG4gICAgbGV0IG9yaWVudGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCByb3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIG9yaWVudGF0aW9uID0gIW9yaWVudGF0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IFNISVBfU0laRVMgPSB7XG4gICAgICAgIGNhcnJpZXI6IDUsXG4gICAgICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgICAgIGNydWlzZXI6IDMsXG4gICAgICAgIHN1Ym1hcmluZTogMyxcbiAgICAgICAgZGVzdHJveWVyOiAyLFxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0Q291bnRlcisrXG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGhpdENvdW50ZXIgPj0gbGVuZ3RoKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBwb3NpdGlvbjpbXSxcbiAgICAgICAgZ2V0IG9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9yaWVudGF0aW9uKG9yKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IG9yO1xuICAgICAgICB9LFxuICAgICAgICByb3RhdGUsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXllZE5hbWUgPSBuYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGFycmF5ZWROYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXllZE5hbWUuam9pbignJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gU0hJUF9TSVpFU1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10aWxlOiAgcmdiYSgyMDAsMjAwLDIwMCwwLjEpO1xuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcbiAgICAtLXRpbGUtaGl0OiByZ2JhKDI1NSwyMDAsMjAwLDAuOCk7XG4gICAgLS10aWxlLW1pc3M6IHJnYmEoMjAwLDIwMCwyNTUsMC44KTtcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcbn1cblxuI2dhbWVhcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNsZWZ0IC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4jcmlnaHQgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuI2xlZnQsXG4jcmlnaHQge1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzcyk7XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuXG4udGlsZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZmxleDoxO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRpbGUpO1xuICAgIGJvcmRlcjogMDtcbn1cblxuZGl2LnRpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xufVxuXG5idXR0b24udGlsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlcik7XG59XG5cbi5oaWRkZW4tYm9hcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBib3R0b206MDtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6MDtcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDo1MCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jcGxheWVyLW9uZSxcbiNwbGF5ZXItdHdvIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLnNoaXAtbWFya2VyIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4vKiBidXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xuICAgIGJvcmRlcjogMDtcbn0gKi9cblxuYnV0dG9uLnRpbGUuYXR0YWNrIHtcbiAgICBhbmltYXRpb246IGF0dGFjay1wdWxzZSAwLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBhdHRhY2stcHVsc2Uge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1hdHRhY2spIDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xuICAgIH1cbn1cblxuLnBsYWNlLXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGxhY2Utc2hpcDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzNGRjtcbn1cblxuLnBsYWNlLXNoaXA6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMyUpO1xufVxuXG4ucGxhY2Vob2xkZXIge1xuICAgIGJvcmRlcjowO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cblxuLnBsYWNlaG9sZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5vdXQtb2YtYm91bmRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixNQUFNO0lBQ04sVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxRQUFRO0lBQ1IsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztJQUN6QztJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XFxuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcXG4gICAgLS10aWxlLWhpdDogcmdiYSgyNTUsMjAwLDIwMCwwLjgpO1xcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcXG59XFxuXFxuI2dhbWVhcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3JpZ2h0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNsZWZ0IC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI3JpZ2h0IC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jbGVmdCxcXG4jcmlnaHQge1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzcyk7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZmxleDoxO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRpbGUpO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbmRpdi50aWxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XFxufVxcblxcbmJ1dHRvbi50aWxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlcik7XFxufVxcblxcbi5oaWRkZW4tYm9hcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgd2lkdGg6NTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcGxheWVyLW9uZSxcXG4jcGxheWVyLXR3byB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uc2hpcC1tYXJrZXIge1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLyogYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcXG4gICAgYm9yZGVyOiAwO1xcbn0gKi9cXG5cXG5idXR0b24udGlsZS5hdHRhY2sge1xcbiAgICBhbmltYXRpb246IGF0dGFjay1wdWxzZSAwLjVzIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYXR0YWNrLXB1bHNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1hdHRhY2spIDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xcbiAgICB9XFxufVxcblxcbi5wbGFjZS1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGFjZS1zaGlwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzNGRjtcXG59XFxuXFxuLnBsYWNlLXNoaXA6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDMlKTtcXG59XFxuXFxuLnBsYWNlaG9sZGVyIHtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbi5wbGFjZWhvbGRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLm91dC1vZi1ib3VuZHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9tb2R1bGVzL3NjcmVlbi5qc1wiO1xuaW1wb3J0IHsgUGxhY2VtZW50Qm9hcmQgfSBmcm9tIFwiLi9tb2R1bGVzL3BsYWNlbWVudEJvYXJkLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgLCBDb21wdXRlciB9IGZyb20gXCIuL21vZHVsZXMvcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9tb2R1bGVzL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBHYW1lID0gKCgpID0+IHtcbiAgICBsZXQgY3VycmVudFBsYXllclxuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKDEwLCBcInBsYXllci1vbmVcIik7XG4gICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoMTAsIFwicGxheWVyLXR3b1wiKTtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoXCJwbGF5ZXItb25lXCIscGxheWVyVHdvQm9hcmQpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IENvbXB1dGVyKFwicGxheWVyLXR3b1wiLHBsYXllck9uZUJvYXJkKTtcbiAgICBwbGF5ZXJPbmVCb2FyZC5vcHBvbmVudCA9IHBsYXllclR3bztcbiAgICBwbGF5ZXJUd29Cb2FyZC5vcHBvbmVudCA9IHBsYXllck9uZTtcbiAgIFxuICAgIGNvbnN0IGluaXRpYWxpc2VHYW1lID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyT25lO1xuICAgICAgICBuZXh0UGxheWVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdHVybk92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrRm9yQWxsU3VuaygpKSB7XG4gICAgICAgICAgICBTY3JlZW4uZW5kR2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5leHRQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91cyA9IGN1cnJlbnRQbGF5ZXI7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSBwbGF5ZXJPbmUgPyBwbGF5ZXJUd28gOiBwbGF5ZXJPbmUgO1xuICAgICAgICBTY3JlZW4ucmVmcmVzaChjdXJyZW50UGxheWVyLHByZXZpb3VzKTtcbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuaXNDb21wKSB7XG4gICAgICAgICAgICBjdXJyZW50UGxheWVyLm1ha2VNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKHBsYXllciwgY2IpID0+IHtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gUGxhY2VtZW50Qm9hcmQocGxheWVyLmdhbWVib2FyZCwgY2IpO1xuICAgICAgICBwbGFjZW1lbnQucmVuZGVyUGxhY2VtZW50U2NyZWVuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJQbGFjZSA9IChwbGF5ZXIsIGNiKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG4gICAgICAgIHBsYXllci5wbGFjZSgpO1xuICAgICAgICBjYigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXJPbmUsIHBsYXllclR3bykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJPbmUscGxheWVyVHdvKVxuICAgICAgICBjb25zdCBhZnRlclBsYWNlID0gcGxheWVyVHdvLmlzQ29tcCA/IGNvbXB1dGVyUGxhY2UgOiBzaGlwUGxhY2VtZW50IDtcbiAgICAgICAgc2hpcFBsYWNlbWVudChwbGF5ZXJPbmUsICgpID0+IGFmdGVyUGxhY2UocGxheWVyVHdvLCBpbml0aWFsaXNlR2FtZSkpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZShwbGF5ZXJPbmUscGxheWVyVHdvKTtcblxuICAgIC8vIGxldCBjdXJyZW50UGxheWVyID0gaW5pdGlhbGlzZUdhbWUocGxheWVyT25lKTtcblxuICAgIC8vIGNvbnN0IHBsYXllclRhbmtlciA9IFNoaXAoNSwgJ1RhbmtlcicpO1xuICAgIC8vIGNvbnN0IHBsYXllckRlc3Ryb3llciA9IFNoaXAoMywgJ0Rlc3Ryb3llcicpO1xuICAgIC8vIGNvbnN0IHBsYXllckNydWlzZXIgPSBTaGlwKDQsICdDcnVpc2VyJyk7XG5cbiAgICAvLyBjb25zdCBjb21wdXRlclRhbmtlciA9IFNoaXAoNSwgJ1RhbmtlcicpO1xuICAgIC8vIGNvbnN0IGNvbXB1dGVyRGVzdHJveWVyID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gICAgLy8gY29uc3QgY29tcHV0ZXJDcnVpc2VyID0gU2hpcCg0LCAnQ3J1aXNlcicpO1xuXG4gICAgLy8gcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllclRhbmtlciwxLDEsdHJ1ZSk7XG4gICAgLy8gcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllckRlc3Ryb3llciwzLDQsZmFsc2UpO1xuICAgIC8vIHBsYXllck9uZUJvYXJkLnBsYWNlU2hpcChwbGF5ZXJDcnVpc2VyLDAsOSx0cnVlKTtcbiAgICBcbiAgICAvLyBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJUYW5rZXIsOSwyLGZhbHNlKTtcbiAgICAvLyBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJEZXN0cm95ZXIsNSw2LGZhbHNlKTtcbiAgICAvLyBwbGF5ZXJUd29Cb2FyZC5wbGFjZVNoaXAoY29tcHV0ZXJDcnVpc2VyLDAsMCx0cnVlKTtcblxuICAgIC8vIFNjcmVlbi5yZWZyZXNoKHBsYXllck9uZSxwbGF5ZXJUd28pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0dXJuT3ZlcixcbiAgICB9XG59KSgpOyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJHYW1lYm9hcmQiLCJzaXplIiwiYXJndW1lbnRzIiwic2hpcHMiLCJ0dXJucyIsIlNxdWFyZSIsIngiLCJ5Iiwic2hpcCIsImhpdCIsImNvb3JkcyIsImJ1aWxkUm93IiwiaW5kZXgiLCJjb2x1bW5zIiwiYnVpbGRTcXVhcmUiLCJyb3dzIiwiZ2V0TGVuZ3RoIiwiZ2V0U3F1YXJlIiwiZ2FtZVNxdWFyZSIsInNxdWFyZVN0YXR1cyIsImdldFNoaXBzIiwiaGl0U3F1YXJlIiwiRXJyb3IiLCJjaGVja0ZvckVtcHR5IiwicGxhY2VTaGlwIiwiaG9yaXpvbnRhbCIsImF4aXMiLCJjaGVja0JvdW5kYXJpZXMiLCJjaGVja0ZvclNoaXBzIiwib3JpZW50YXRpb24iLCJwb3NpdGlvbiIsImNsZWFyU2hpcCIsInBvcCIsInNwbGljZSIsImluZGV4T2YiLCJyYW5nZSIsImV2ZXJ5IiwiY2hlY2tGb3JBbGxTdW5rIiwiYWxsQ29uZGl0aW9uIiwiZm9yRWFjaCIsImlzU3VuayIsImNvbmRpdGlvbiIsImNsZWFyQWxsIiwiY3VyIiwiY29vcmQiLCJvcHBvbmVudCIsIlNjcmVlbiIsIlNoaXAiLCJTSElQX0lNQUdFUyIsIlBsYWNlbWVudEJvYXJkIiwiZ2FtZWJvYXJkIiwib25GaW5pc2giLCJwbGFjaW5nIiwic2hpcEJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXJyaWVyIiwicGxhY2VkIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJzZXRTaGlwcyIsIk9iamVjdCIsImtleXMiLCJuZXdTaGlwIiwiY2hlY2tGb3JVbnBsYWNlZCIsInNvbWUiLCJkcmF3UGxhY2VtZW50Qm9hcmQiLCJ6b25lRG9tIiwiYm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyb3dDb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJqIiwidGlsZSIsInNldEF0dHJpYnV0ZSIsInJlbmRlclBsYWNlbWVudFNjcmVlbiIsImRyYXdOZXh0U2hpcEJ1dHRvbiIsIm5leHRTaGlwIiwibWFrZU5leHRTaGlwQnV0dG9uIiwiYnV0dG9uIiwicmVuZGVyU3VibWl0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwibWFrZVNoaXAiLCJzaGlwUGxhY2VtZW50Iiwic3VibWl0IiwiY2xlYXJTaGlwQmFyIiwiZXhpc3RpbmciLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsImtleSIsImJ1dHRvblRleHQiLCJTdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInRleHRDb250ZW50Iiwicm90YXRlIiwiY3JlYXRlVGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsIm5hbWUiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjbGVhclJvdGF0ZUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVSb3RhdGVCdXR0b24iLCJ0aWxlcyIsInJlbmRlclNoaXAiLCJvZmZzZXRXaWR0aCIsImlsbGVnYWxTcXVhcmVzIiwiZmluZElsbGVnYWxTcXVhcmVzIiwiVEVNUGNvbnNvbGVJbGxlZ2FsVGlsZXMiLCJyZW1vdmVNYXJrZXIiLCJyb3RhdGVTaGlwIiwiaG92ZXJJbWFnZSIsImluY2x1ZGVzIiwicmVtb3ZlIiwiZSIsInBsYWNlVGVtcGxhdGUiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib29iTW92ZSIsIl9sb29wIiwic3BhY2VTZXQiLCJTZXQiLCJpbGxNb3ZlcyIsImdldE9jY3VwaWVkU3BhY2VzIiwiYXJyYXlQb2ludGVyIiwic3BhY2UiLCJuZXh0U3BhY2UiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfcmV0IiwibWFya2VyIiwic3BhY2VzIiwiY3VycmVudENvb3JkIiwiaW1hZ2UiLCJ1bml0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsIm1vdmVTaGlwIiwiZ2V0VGFyZ2V0IiwiY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbiIsInpJbmRleCIsInN1Ym1pdEJ1dHRvbiIsImlsbGVnYWwiLCJjb25zb2xlU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImVsZW1lbnQiLCJpbWciLCJldmVudCIsInBvcyIsImNvbnRhaW5zIiwiUGxheWVyIiwibWFrZU1vdmUiLCJtb3ZlIiwiX3R5cGVvZiIsInN1bmtTaGlwIiwicmVuZGVyUGxheWVyTW92ZSIsImVycm9yIiwicGxheWluZyIsIkNvbXB1dGVyIiwicmVjZW50SGl0IiwiY3VycmVudFN1Y2Nlc3MiLCJtYWtlU2hpcHMiLCJTUVVBUkVTX0FST1VORCIsInVwIiwicmlnaHQiLCJkb3duIiwicGxhY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJlcnIiLCJwbGF5VGlsZSIsImdlbmVyYXRlUmFuZG9tQ29vcmRzIiwiYm91bmRhcnkiLCJyYW5YIiwicmFuWSIsInRyeU1vdmUiLCJyZXN1bHQiLCJhc3NpZ24iLCJtb3ZlVGFrZW4iLCJyZW5kZXJDb21wdXRlck1vdmUiLCJlZHVjYXRlZE1vdmUiLCJpc0NvbXAiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiT3AiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFwcGx5IiwiYmF0dGxlc2hpcEltYWdlIiwicGxheWVyT25lIiwiZHJhd0FjdGl2ZUJvYXJkIiwiZHJhd1JlY29uQm9hcmQiLCJkcmF3U2hpcHMiLCJkcmF3SGlkZGVuUmVjb25Cb2FyZCIsImhpZGRlbiIsInJlZnJlc2giLCJjdXJyZW50IiwicHJldmlvdXMiLCJhY3RpdmVBcmVhIiwicmVjb25BcmVhIiwiaW5uZXJIVE1MIiwiX3JlZiIsIl9jYWxsZWUiLCJhY3RpdmVab25lIiwicm93IiwiY2VsbCIsInJlbW92ZUF0dGFja01hcmtlciIsInN0YWxsTmV4dFR1cm4iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY2hpbGRyZW4iLCJwcm9taXNpZnkiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJmIiwiX3JlZjQiLCJfY2FsbGVlNCIsImNvbXB1dGVyRmluaXNoZWQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJjYWxsYmFjayIsInRpbWVyIiwic2V0VGltZW91dCIsIm9uYm9hcmQiLCJwbGF5em9uZSIsImRpbWVuc2lvbnMiLCJjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiIsImRyYXdTaGlwIiwiem9uZSIsInNjYWxlIiwicGFyZW50IiwiQXJyYXkiLCJlbmRHYW1lIiwiaGl0Q291bnRlciIsIlNISVBfU0laRVMiLCJvciIsImFycmF5ZWROYW1lIiwic3BsaXQiLCJHYW1lIiwiY3VycmVudFBsYXllciIsInBsYXllck9uZUJvYXJkIiwicGxheWVyVHdvQm9hcmQiLCJwbGF5ZXJUd28iLCJpbml0aWFsaXNlR2FtZSIsIm5leHRQbGF5ZXIiLCJ0dXJuT3ZlciIsInBsYXllciIsImNiIiwicGxhY2VtZW50IiwiY29tcHV0ZXJQbGFjZSIsInN0YXJ0R2FtZSIsImFmdGVyUGxhY2UiXSwic291cmNlUm9vdCI6IiJ9