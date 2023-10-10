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
    button.textContent = 'ROTATE';
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
    shipBar.innerHTML = '';
    var submitButton = document.createElement('button');
    submitButton.classList.add('submit-placement');
    submitButton.textContent = 'SUBMIT';
    return submitButton;
  };
  var submit = function submit() {
    setShips();
    onFinish();
    shipBar.innerHTML = '';
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
      if (_typeof(move) === 'object' && move.isSunk()) _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].sunkShip(move, opponentBoard.id);
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
  "";
  var makeShips = function makeShips() {
    return {
      carrier: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('carrier'),
      battleship: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('battleship'),
      cruiser: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('cruiser'),
      submarine: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('submarine'),
      destroyer: (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)('destroyer')
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
      if (_typeof(hit) === 'object' && hit.isSunk()) _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].sunkShip(hit, gameboard.opponent.id);
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
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/battleship.png */ "./src/images/battleship.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SHIP_IMAGES = {
  battleship: _images_battleship_png__WEBPACK_IMPORTED_MODULE_0__
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
  var onNext;
  var onWin;
  var moveReady = true;
  var drawMainMenu = function drawMainMenu(singleInitialise, doubleInitialise) {
    var body = document.querySelector('body');
    body.innerHTML = '';
    var menuPan = document.createElement('div');
    menuPan.classList.add('main-menu');
    var gameTitle = document.createElement('div');
    gameTitle.classList.add('game-title');
    gameTitle.textContent = 'Battleships!';
    menuPan.appendChild(gameTitle);
    body.appendChild(menuPan);
    var buttonBar = document.createElement('div');
    buttonBar.classList.add('button-bar');
    var startSingle = document.createElement('button');
    startSingle.classList.add('menu-button');
    var startDouble = document.createElement('button');
    startDouble.classList.add('menu-button');
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
    nameInput.required = true;
    nameForm.appendChild(nameLabel);
    nameForm.appendChild(nameInput);
    nameForm.appendChild(nameSubmit);
    nameSubmit.classList.add('get-name-submit');
    nameSubmit.addEventListener('click', function (e) {
      e.preventDefault();
      if (nameInput.value != '') {
        cb(nameInput.value);
        // nameDialog.parentNode.removeChild(nameDialog);
      }
    });
  };

  var printString = function printString(toPrint) {
    var shipBar = document.getElementById('ship-bar');
    shipBar.textContent = toPrint;
  };
  var getBattleshipCoords = function getBattleshipCoords(coords) {
    var xLetter = String.fromCharCode(coords[0] + 65);
    return "".concat(xLetter).concat(coords[1] + 1);
  };
  var shipScreenSetup = function shipScreenSetup(name) {
    var body = document.querySelector('body');
    body.innerHTML = '';
    var title = document.createElement('div');
    title.textContent = "".concat(name, " place your ships!");
    title.classList.add('place-ships-title');
    body.appendChild(title);
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
      refresh(player, next);
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
      var activeZone, row, cell, coordString, removeAttackMarker, stallNextTurn;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            moveReady = false;
            activeZone = document.getElementById("left").querySelector('div');
            row = activeZone.children[coords[1]];
            cell = row.children[coords[0]];
            cell.classList.add('attack');
            coordString = getBattleshipCoords(coords);
            printString("Computer attacks ".concat(coordString, "..."));
            _context.next = 9;
            return promisify(function () {
              return cell.classList.remove('attack');
            }, 1000);
          case 9:
            removeAttackMarker = _context.sent;
            removeAttackMarker();
            setTimeout(function () {
              return printString("".concat(coordString, " is a ").concat(gameboard.squareStatus(coords[0], coords[1]), "!"));
            }, 500);
            //get result of attacks
            cell.classList.add(gameboard.squareStatus(coords[0], coords[1]));
            _context.next = 15;
            return stallComputerMove();
          case 15:
            stallNextTurn = _context.sent;
            stallNextTurn();
          case 17:
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
      var activeZone, row, cell, coordString, removeAttackMarker, showPlayersTurn;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            activeZone = document.getElementById("left").querySelector('div');
            row = activeZone.children[coords[1]];
            cell = row.children[coords[0]];
            cell.classList.add('attack');
            coordString = getBattleshipCoords(coords);
            printString("".concat(gameboard.opponent.gameboard.opponent.id, " attacks ").concat(coordString, "..."));
            _context2.next = 8;
            return promisify(function () {
              return cell.classList.remove('attack');
            }, 1000);
          case 8:
            removeAttackMarker = _context2.sent;
            removeAttackMarker();
            setTimeout(function () {
              return printString("".concat(coordString, " is a ").concat(gameboard.squareStatus(coords[0], coords[1]), "!"));
            }, 500);
            //get result of attack
            cell.classList.add(gameboard.squareStatus(coords[0], coords[1]));
            _context2.next = 14;
            return showPlayerResult();
          case 14:
            showPlayersTurn = _context2.sent;
            showPlayersTurn();
            moveReady = true;
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function renderPlayerMove(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var sunkShip = function sunkShip(ship, name) {
    setTimeout(function () {
      return printString("".concat(name, "'s ").concat(ship.name, " has been sunk!"));
    }, 2500);
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
  var endGame = function endGame(winner) {
    console.log('Game Over ', winner, ' is victorious!');
    var body = document.querySelector('body');
    body.innerHTML = '';
    var victoryMenu = document.createElement('div');
    var victoryText = document.createElement('div');
    victoryText.textContent = "Game over! ".concat(winner, " is victorious!");
    var victoryButton = document.createElement('button');
    victoryButton.textContent = "Main Menu";
    victoryMenu.classList.add('victory-menu');
    victoryText.classList.add('victory-text');
    victoryButton.classList.add('menu-button');
    victoryMenu.appendChild(victoryText);
    victoryMenu.appendChild(victoryButton);
    body.appendChild(victoryMenu);
    victoryButton.addEventListener('click', onWin);
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
    },
    set onWin(win) {
      onWin = win;
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
    --background: #558877;
    --menu-back: #55AA99;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

body {
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
}

.get-name::backdrop {
    background-color: #000;
}

.get-name form {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    justify-items: center;
}

.get-name form label {
    grid-column: 1 / 2;
    text-align: right;
}

.get-name-submit {
    grid-column: 1 / 3;
}

.victory-menu {
    display: flex;
    justify-content: center;
}

.main-menu,
.victory-menu,
.get-name,
.ready-dialog {
    width: max(35%,400px);
    background-color: var(--menu-back);
    border-radius: 5px;
    border: 5px solid white;
    padding: 2rem;
    color: white;
}

.ready-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    border: 2px dashed white;
    background-color: var(--menu-back);
    border-radius: 5px;
    padding: .5rem 1rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
    margin: 1rem;
    grid-column: 2 / 3;
}


.game-title,
.place-ships-title,
.ready-text {
    color: white;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 3rem;
}

.button-bar {
    display: flex;
    justify-content: center;
}

#ship-bar {
    color: white;
}

.menu-button,
.get-name-submit,
.place-ship,
.rotate,
.submit-placement,
.ready-button {
    border: 2px solid white;
    background-color: var(--menu-back);
    margin: 1rem;
    border-radius: 5px;
    padding: 1rem;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#gamearea {
    display: flex;
    border: 2px dashed white;
    margin: 1rem;
}

#right {
    position: relative;
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
    border: 2px solid white;
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

@media (hover:hover) {
    button.tile:hover {
       background-color: var(--tile-hover);
}
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
    font-family: 'Courier New', Courier, monospace;
    color:white;
}

#player-one,
#player-two {
    position:relative;
}

.ship-marker {
    position:absolute;
    background-color: aqua;
}

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

button:active {
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
}

@media (max-width: 800px) {
    #gamearea {
        flex-direction: column;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,iCAAiC;IACjC,kCAAkC;IAClC,mCAAmC;IACnC,qBAAqB;IACrB,oBAAoB;IACpB,wEAAwE;AAC5E;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;;;;IAII,qBAAqB;IACrB,kCAAkC;IAClC,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,kCAAkC;IAClC,kBAAkB;IAClB,mBAAmB;IACnB,wEAAwE;IACxE,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;;;IAGI,YAAY;IACZ,kBAAkB;IAClB,wEAAwE;IACxE,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;;;;;;IAMI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,wEAAwE;AAC5E;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,MAAM;IACN,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI;OACG,mCAAmC;AAC1C;AACA;;AAEA;IACI,kBAAkB;IAClB,KAAK;IACL,QAAQ;IACR,MAAM;IACN,OAAO;IACP,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,8CAA8C;IAC9C,WAAW;AACf;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI;QACI,qCAAqC;IACzC;IACA;QACI,6BAA6B;IACjC;AACJ;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":[":root {\n    --tile:  rgba(200,200,200,0.1);\n    --tile-attack: rgba(255,150,150,0.9);\n    --tile-hit: rgba(255,200,200,0.8);\n    --tile-miss: rgba(200,200,255,0.8);\n    --tile-hover: rgba(230,200,200,0.4);\n    --background: #558877;\n    --menu-back: #55AA99;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\nbody {\n    height: 100dvh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--background);\n}\n\n.get-name::backdrop {\n    background-color: #000;\n}\n\n.get-name form {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\n.get-name form label {\n    grid-column: 1 / 2;\n    text-align: right;\n}\n\n.get-name-submit {\n    grid-column: 1 / 3;\n}\n\n.victory-menu {\n    display: flex;\n    justify-content: center;\n}\n\n.main-menu,\n.victory-menu,\n.get-name,\n.ready-dialog {\n    width: max(35%,400px);\n    background-color: var(--menu-back);\n    border-radius: 5px;\n    border: 5px solid white;\n    padding: 2rem;\n    color: white;\n}\n\n.ready-dialog {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\ninput {\n    border: 2px dashed white;\n    background-color: var(--menu-back);\n    border-radius: 5px;\n    padding: .5rem 1rem;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: white;\n    margin: 1rem;\n    grid-column: 2 / 3;\n}\n\n\n.game-title,\n.place-ships-title,\n.ready-text {\n    color: white;\n    text-align: center;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 3rem;\n}\n\n.button-bar {\n    display: flex;\n    justify-content: center;\n}\n\n#ship-bar {\n    color: white;\n}\n\n.menu-button,\n.get-name-submit,\n.place-ship,\n.rotate,\n.submit-placement,\n.ready-button {\n    border: 2px solid white;\n    background-color: var(--menu-back);\n    margin: 1rem;\n    border-radius: 5px;\n    padding: 1rem;\n    color: white;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n#gamearea {\n    display: flex;\n    border: 2px dashed white;\n    margin: 1rem;\n}\n\n#right {\n    position: relative;\n}\n\n#left .ship {\n    background-color: blue;\n}\n\n#right .ship {\n    background-color: red;\n}\n\n#left,\n#right {\n    margin: 2rem;\n    position:relative;\n    border: 2px solid white;\n}\n\n.tile.miss {\n    background-color: var(--tile-miss);\n}\n\n.tile.hit {\n    background-color: var(--tile-hit);\n}\n\n.row {\n    display:flex;\n}\n\n.tile {\n    height: 100%;\n    width: 100%;\n    padding: 1rem;\n    flex:1;\n    z-index: 2;\n    margin: 0;\n    background: var(--tile);\n    border: 0;\n}\n\n.tile {\n    background-color: var(--tile);\n}\n\n@media (hover:hover) {\n    button.tile:hover {\n       background-color: var(--tile-hover);\n}\n}\n\n.hidden-board {\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    width:50%;\n    height: fit-content;\n    padding: 1rem;\n    background-color: var(--tile-hit);\n    text-align: center;\n    font-family: 'Courier New', Courier, monospace;\n    color:white;\n}\n\n#player-one,\n#player-two {\n    position:relative;\n}\n\n.ship-marker {\n    position:absolute;\n    background-color: aqua;\n}\n\nbutton.tile.attack {\n    animation: attack-pulse 0.5s infinite;\n    animation-direction: alternate;\n}\n\n@keyframes attack-pulse {\n    0% {\n        background-color: var(--tile-attack) ;\n    }\n    100% {\n        background-color: var(--tile);\n    }\n}\n\nbutton:active {\n    transform: scale(103%);\n}\n\n.placeholder {\n    border:0;\n    margin:0;\n    padding:0;\n}\n\n.placeholder:hover {\n    background-color: rgb(255, 255, 255);\n}\n\n.out-of-bounds {\n    background-color: red;\n}\n\n.ready-dialog::backdrop {\n    background-color: #000000;\n}\n\n@media (max-width: 800px) {\n    #gamearea {\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
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
    startGame();
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
    if (currentPlayer.gameboard.opponent.gameboard.checkForAllSunk() || currentPlayer.gameboard.checkForAllSunk()) {
      _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].endGame(currentPlayer.gameboard.opponent.id);
      players.length = 0;
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
    } else if (!currentPlayer.gameboard.opponent.isComp) {
      _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].showReadyScreen(currentPlayer, previous);
    } else {
      _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].refresh(currentPlayer, previous);
    }
  };
  var shipPlacement = function shipPlacement(player, cb) {
    // const opponentBoard = player === playerOne ? playerTwo.gameboard : playerOne.gameboard;
    _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].shipScreenSetup(player.id);
    var placement = (0,_modules_placementBoard_js__WEBPACK_IMPORTED_MODULE_1__.PlacementBoard)(player.gameboard, cb);
    placement.renderPlacementScreen();
  };
  var computerPlace = function computerPlace(player, cb) {
    console.log(player);
    player.place();
    cb();
  };
  var startGame = function startGame() {
    _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].onWin = function () {
      return _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].drawMainMenu(singleInitialise, doubleInitialise);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sUUFBUSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLE9BQU8sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxh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QUNYLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRU0sY0FBYyxDQUFDO0lBQUEsRUFBQztFQUMzRSxDQUFDO0VBRURqWiwwREFBTSxDQUFDK1IsWUFBWSxDQUFDQyxnQkFBZ0IsRUFBQ0MsZ0JBQWdCLENBQUM7QUFFMUQsQ0FBQyxDQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BsYWNlbWVudEJvYXJkLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoc2l6ZSxpZCA9IG51bGwpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGNvbnN0IHR1cm5zID0gW107XG4gICAgY29uc3QgU3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICBjb29yZHM6IFt4LHldLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRSb3cgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goU3F1YXJlKGksaW5kZXgpKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgcm93cy5wdXNoKGJ1aWxkUm93KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVTcXVhcmVbeV1beF07XG4gICAgfVxuXG4gICAgY29uc3Qgc3F1YXJlU3RhdHVzID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQgJiYgZ2FtZVNxdWFyZVt5XVt4XS5zaGlwKSByZXR1cm4gJ2hpdCc7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCkgcmV0dXJuICdtaXNzJztcbiAgICAgICAgcmV0dXJuICdlbXB0eSdcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVTcXVhcmUgPSBidWlsZFNxdWFyZShzaXplKTtcblxuICAgIGNvbnN0IGhpdFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lU3F1YXJlW3ldIHx8ICFnYW1lU3F1YXJlW3ldW3hdKSB0aHJvdyBuZXcgRXJyb3IoXCJPdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQpIHRocm93IG5ldyBFcnJvcihcIlNxdWFyZSBhbHJlYWR5IGhpdFwiKTtcbiAgICAgICAgZ2FtZVNxdWFyZVt5XVt4XS5oaXQgPSB0cnVlO1xuICAgICAgICB0dXJucy5wdXNoKFt4LHldKTtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uc2hpcCkge1xuICAgICAgICAgICAgZ2FtZVNxdWFyZVt5XVt4XS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVTcXVhcmVbeV1beF0uc2hpcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGNoZWNrRm9yRW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0dXJucy5sZW5ndGggPCAoc2l6ZSpzaXplKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCx4LHksaG9yaXpvbnRhbCkgPT4ge1xuICAgICAgICBjb25zdCBheGlzID0gaG9yaXpvbnRhbCA/IHggOiB5IDtcbiAgICAgICAgaWYgKCFjaGVja0JvdW5kYXJpZXMoYXhpcyxzaGlwLmxlbmd0aCkpIHRocm93IG5ldyBFcnJvcihcIlNoaXAgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgaWYgKCFjaGVja0ZvclNoaXBzKHNoaXAubGVuZ3RoLHgseSxob3Jpem9udGFsKSkgdGhyb3cgbmV3IEVycm9yKFwiU3BhY2Ugb2NjdXBpZWRcIik7XG4gICAgICAgIHNoaXAub3JpZW50YXRpb24gPSBob3Jpem9udGFsO1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVt5XVt4K2ldLnNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ucHVzaChnYW1lU3F1YXJlW3ldW3graV0uY29vcmRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVt5K2ldW3hdLnNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ucHVzaChnYW1lU3F1YXJlW3kraV1beF0uY29vcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNoaXAucG9zaXRpb24ucG9wKCk7XG4gICAgICAgICAgICBnYW1lU3F1YXJlW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXS5zaGlwID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5zcGxpY2Uoc2hpcHMuaW5kZXhPZihzaGlwKSwxKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvclNoaXBzID0gKGxlbmd0aCx4LHksaG9yaXpvbnRhbCkgPT4ge1xuICAgICAgICAvL0J1aWxkcyBhbiBhcnJheSBvZiBzcGFjZXMgdGhlIHNoaXAgd2lsbCBvY2N1cHlcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHJhbmdlLnB1c2goZ2FtZVNxdWFyZVt5XVt4K2ldLnNoaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZS5wdXNoKGdhbWVTcXVhcmVbeStpXVt4XS5zaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL1JldHVybnMgdHJ1ZSBpZiBhbGwgYXJlIGVtcHR5XG4gICAgICAgIHJldHVybiByYW5nZS5ldmVyeShzaGlwID0+IHNoaXAgPT09IG51bGwpO1xuICAgIH1cblxuXG4gICAgY29uc3QgY2hlY2tCb3VuZGFyaWVzID0gKGF4aXMsbGVuZ3RoKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlzICsgbGVuZ3RoID4gc2l6ZSA/IGZhbHNlIDogdHJ1ZTsgXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JBbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxDb25kaXRpb24gPSBbXVxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBhbGxDb25kaXRpb24ucHVzaChzaGlwLmlzU3VuaygpKSk7XG4gICAgICAgIHJldHVybiBhbGxDb25kaXRpb24uZXZlcnkoY29uZGl0aW9uID0+IGNvbmRpdGlvbiA9PT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNoaXBzLmxlbmd0aCA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1ciA9IHNoaXBzLnBvcCgpO1xuICAgICAgICAgICAgY3VyLnBvc2l0aW9uLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVtjb29yZFsxXV1bY29vcmRbMF1dLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TGVuZ3RoLFxuICAgICAgICBoaXRTcXVhcmUsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgY2xlYXJTaGlwLFxuICAgICAgICBjaGVja0ZvckFsbFN1bmssXG4gICAgICAgIGdldFNxdWFyZSxcbiAgICAgICAgY2hlY2tGb3JFbXB0eSxcbiAgICAgICAgZ2V0U2hpcHMsXG4gICAgICAgIGNsZWFyQWxsLFxuICAgICAgICBzcXVhcmVTdGF0dXMsXG4gICAgICAgIG9wcG9uZW50Om51bGwsXG4gICAgICAgIGlkLFxuICAgIH1cblxufTsiLCJpbXBvcnQgU2NyZWVuIGZyb20gXCIuL3NjcmVlbi5qc1wiXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiXG5pbXBvcnQgeyBTSElQX0lNQUdFUyB9IGZyb20gXCIuL3NjcmVlbi5qc1wiXG5cbmV4cG9ydCBjb25zdCBQbGFjZW1lbnRCb2FyZCA9IChnYW1lYm9hcmQsIG9uRmluaXNoKSA9PiB7XG4gICAgbGV0IHBsYWNpbmcgPSBmYWxzZTtcbiAgICBjb25zdCBzaGlwQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtYmFyJyk7XG5cbiAgICBjb25zdCBzaGlwcyA9IHtcbiAgICAgICAgY2Fycmllcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6NSxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYmF0dGxlc2hpcDp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6NCxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgY3J1aXNlcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MyxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWFyaW5lOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDozLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95ZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjIsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKHNoaXApO1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLHNoaXBzW3NoaXBdLmNvb3Jkc1swXSxzaGlwc1tzaGlwXS5jb29yZHNbMV0sc2hpcHNbc2hpcF0uaG9yaXpvbnRhbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1BsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuaWQgPSBgJHtqfS0ke2l9YDtcbiAgICAgICAgICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdwb3NpdGlvbjpyZWxhdGl2ZTsnKVxuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgZHJhd1BsYWNlbWVudEJvYXJkKCk7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFNoaXAgPSBtYWtlTmV4dFNoaXBCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV4dFNoaXAgPyBuZXh0U2hpcCA6IHJlbmRlclN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICBpZiAobmV4dFNoaXApIHtidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHNoaXBCYXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBtYWtlU2hpcChidXR0b24pO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwLHNoaXBzW3NoaXBdKTtcbiAgICAgICAgfSk7fSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcEJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Utc2hpcCcpO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIGV4aXN0aW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXhpc3RpbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2tleV0ucGxhY2VkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBTdHJpbmcoJ1BsYWNlICcrIGtleSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IGtleTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoYnV0dG9uLmlkKTtcbiAgICAgICAgc2hpcC5yb3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUZW1wbGF0ZSA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRlbXBsYXRlLmlkID0gc2hpcC5uYW1lO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtTSElQX0lNQUdFU1tzaGlwLm5hbWVdfWA7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgc2hpcEJhci5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiBzaGlwQmFyLnJlbW92ZUNoaWxkKGJ1dHRvbikpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JPVEFURSc7XG4gICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAoc2hpcCkgPT4ge1xuICAgICAgICBwbGFjaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlKHNoaXApO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgcmVuZGVyU2hpcCh0ZW1wbGF0ZSx0aWxlc1swXS5vZmZzZXRXaWR0aCxzaGlwKTtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBmaW5kSWxsZWdhbFNxdWFyZXMoc2hpcCk7XG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IGNyZWF0ZVJvdGF0ZUJ1dHRvbigpO1xuICAgICAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU1hcmtlcih0ZW1wbGF0ZSk7XG4gICAgICAgICAgICByb3RhdGVTaGlwKHNoaXApO1xuICAgICAgICB9KVxuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICBob3ZlckltYWdlKHRpbGUsdGVtcGxhdGUpO1xuICAgICAgICAgICAgaWYgKGlsbGVnYWxTcXVhcmVzLmluY2x1ZGVzKHRpbGUuaWQpKSB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdpbGxlZ2FsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2lsbGVnYWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhY2VUZW1wbGF0ZShlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpLHRlbXBsYXRlLHNoaXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRJbGxlZ2FsU3F1YXJlcyA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGlsbGVnYWxTcXVhcmVzID0gW107XG4gICAgICAgIC8vIEZpbmQgb3V0IG9mIGJvdW5kIHNxdWFyZXNcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGdhbWVib2FyZC5nZXRMZW5ndGgoKSA7IGkrKyApIHtcbiAgICAgICAgICAgIGZvciAoIGxldCBqID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpIC0gKHNoaXAubGVuZ3RoIC0gMSk7IGogPCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb29iTW92ZSA9IHNoaXAub3JpZW50YXRpb24gPyBbaixpXSA6IFtpLGpdIDtcbiAgICAgICAgICAgICAgICBpbGxlZ2FsU3F1YXJlcy5wdXNoKG9vYk1vdmUuam9pbignLScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL0dldCBzcGFjZXMgdGhhdCBhcmUgb2JzdHJ1Y3RlZCBieSBhbm90aGVyIHNoaXBcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNoaXBzKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZVNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGlmICghc2hpcHNba2V5XS5wbGFjZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgaWxsTW92ZXMgPSBnZXRPY2N1cGllZFNwYWNlcyhzaGlwc1trZXldKTtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5UG9pbnRlciA9IHNoaXAub3JpZW50YXRpb24gPyAwIDogMTsgXG4gICAgICAgICAgICBpbGxNb3Zlcy5mb3JFYWNoKChzcGFjZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNwYWNlU2V0LmFkZChzcGFjZS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIGZvciggbGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3BhY2UgPSBbLi4uc3BhY2VdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0U3BhY2VbYXJyYXlQb2ludGVyXSA9IG5leHRTcGFjZVthcnJheVBvaW50ZXJdIC0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTcGFjZVthcnJheVBvaW50ZXJdIDwgMCkgY29udGludWUgOyBcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VTZXQuYWRkKG5leHRTcGFjZS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3BhY2VTZXQuZm9yRWFjaCgoY29vcmQpID0+IGlsbGVnYWxTcXVhcmVzLnB1c2goY29vcmQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWxsZWdhbFNxdWFyZXM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0T2NjdXBpZWRTcGFjZXMgPSAobWFya2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYWNlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgYXJyYXlQb2ludGVyID0gbWFya2VyLmhvcml6b250YWwgPyAwIDogMSA7XG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBtYXJrZXIubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvb3JkID0gWy4uLm1hcmtlci5jb29yZHNdO1xuICAgICAgICAgICAgY3VycmVudENvb3JkW2FycmF5UG9pbnRlcl0gPSBjdXJyZW50Q29vcmRbYXJyYXlQb2ludGVyXSArIGk7XG4gICAgICAgICAgICBzcGFjZXMuYWRkKGN1cnJlbnRDb29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlcztcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTaGlwID0gKGltYWdlLHVuaXQsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHNoaXAub3JpZW50YXRpb24gPyAodW5pdCpzaGlwLmxlbmd0aCkrJ3B4JyA6IHVuaXQrJ3B4JztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgKydweCc6ICh1bml0KnNoaXAubGVuZ3RoKSsncHgnO1xuICAgICAgICBpbWFnZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlTWFya2VyID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVwbGFjZVdpdGgodGlsZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJvdGF0ZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLnJvdGF0ZSgpO1xuICAgICAgICBzaGlwUGxhY2VtZW50KHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmVTaGlwID0gKHRlbXBsYXRlLHNoaXApID0+IHtcbiAgICAgICAgaWYgKHBsYWNpbmcpIHJldHVybjtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICBzaGlwc1tzaGlwLm5hbWVdLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgICBzaGlwUGxhY2VtZW50KHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlVGVtcGxhdGUgPSAodGlsZSx0ZW1wbGF0ZSxzaGlwKSA9PiB7XG4gICAgICAgIGNsZWFyUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IFNjcmVlbi5nZXRUYXJnZXQodGlsZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbih0aWxlLm9mZnNldFdpZHRoLGNvb3Jkcyk7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0uY29vcmRzID0gY29vcmRzO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0uaG9yaXpvbnRhbCA9IHNoaXAub3JpZW50YXRpb247XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5wbGFjZWQgPSB0cnVlO1xuICAgICAgICB0ZW1wbGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IG1vdmVTaGlwKGUudGFyZ2V0LmNsb3Nlc3QoJy5wbGFjZWhvbGRlcicpLHNoaXApKTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICB0aWxlLnJlcGxhY2VXaXRoKHRpbGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfSlcbiAgICAgICAgcGxhY2luZyA9IGZhbHNlO1xuICAgICAgICBkcmF3TmV4dFNoaXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uID0gKHVuaXQsY29vcmRzKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSAoY29vcmRzWzBdKnVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IHRvcCA9IChjb29yZHNbMV0qdW5pdCkrJ3B4JztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICB0b3BcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgc2hpcEJhci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtcGxhY2VtZW50Jyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTVUJNSVQnO1xuICAgICAgICByZXR1cm4gc3VibWl0QnV0dG9uXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTaGlwcygpO1xuICAgICAgICBvbkZpbmlzaCgpO1xuICAgICAgICBzaGlwQmFyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuXG4gICAgY29uc3QgaG92ZXJJbWFnZSA9IChlbGVtZW50LGltZykgPT4ge1xuICAgICAgICBjb25zdCBldmVudCA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJyk7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBTY3JlZW4uZ2V0VGFyZ2V0KHRpbGUpO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbih0aWxlLm9mZnNldFdpZHRoLGNvb3Jkcyk7XG4gICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaWxsZWdhbCcpKSB7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ291dC1vZi1ib3VuZHMnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ291dC1vZi1ib3VuZHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSBwb3MudG9wO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSBwb3MubGVmdDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclBsYWNlbWVudFNjcmVlbixcbiAgICB9XG59IiwiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9zY3JlZW4uanNcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoaWQsZ2FtZWJvYXJkKSA9PiB7XG5cbiAgICBcbiAgICBjb25zdCBtYWtlTW92ZSA9ICh0aWxlLCBvcHBvbmVudEJvYXJkKSA9PiB7XG4gICAgICAgIGlmICghdGlsZSkgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgdGlsZS5cIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gb3Bwb25lbnRCb2FyZC5oaXRTcXVhcmUodGlsZVswXSx0aWxlWzFdKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW92ZSA9PT0gJ29iamVjdCcgJiYgbW92ZS5pc1N1bmsoKSkgU2NyZWVuLnN1bmtTaGlwKG1vdmUsIG9wcG9uZW50Qm9hcmQuaWQpOyBcbiAgICAgICAgICAgIFNjcmVlbi5yZW5kZXJQbGF5ZXJNb3ZlKHRpbGUsb3Bwb25lbnRCb2FyZCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5aW5nOiBmYWxzZSxcbiAgICAgICAgaXNDb21wOiBmYWxzZSxcbiAgICAgICAgaWQsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgbWFrZU1vdmVcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IENvbXB1dGVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRTdWNjZXNzID0gW107XG5gYFxuICAgIGNvbnN0IG1ha2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnJpZXI6IFNoaXAoJ2NhcnJpZXInKSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcbiAgICAgICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcbiAgICAgICAgICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJyksXG4gICAgICAgICAgICBkZXN0cm95ZXI6IFNoaXAoJ2Rlc3Ryb3llcicpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gbWFrZVNoaXBzKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmdldExlbmd0aCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5nZXRMZW5ndGgoKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoyKSA/IHRydWUgOiBmYWxzZSA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwc1tzaGlwXSx4LHksb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IHBsYWNlIGF0OiBcIiwgeCwgeSwgXCIgd2l0aCBcIiwgb3JpZW50YXRpb24sXCIgb3JpZW50YXRpb24uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAgICAgXG4gICAgY29uc3QgcGxheVRpbGUgPSAodGlsZSkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGhpdCA9IGdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhpdCA9PT0gJ29iamVjdCcgJiYgaGl0LmlzU3VuaygpKSBTY3JlZW4uc3Vua1NoaXAoaGl0LCBnYW1lYm9hcmQub3Bwb25lbnQuaWQpOyBcbiAgICAgICAgICAgIGlmIChoaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm91bmRhcnkgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGNvbnN0IHJhblggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm91bmRhcnkpO1xuICAgICAgICBjb25zdCByYW5ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgcmV0dXJuIFtyYW5YLHJhblldO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFN1Y2Nlc3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBlZHVjYXRlZE1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGR1bWJNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkdW1iTW92ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1vdmVUYWtlbiA9IGZhbHNlO1xuICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICBpZiAoIWdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gcGxheVRpbGUoY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MoY29vcmRzLG1vdmVUYWtlbik7XG4gICAgICAgIH1cbiAgICAgICAgU2NyZWVuLnJlbmRlckNvbXB1dGVyTW92ZShjb29yZHMsZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0U2hpcCA9IChjb29yZHMsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsTW92ZXMgPSBbWzAsMV0sWzAsLTFdLFsxLDBdLFstMSwwXV07XG5cbiAgICAgICAgY29uc3QgbmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21DaG9pY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3RlbnRpYWxNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGluZyA9IHBvdGVudGlhbE1vdmVzLnNwbGljZShyYW5kb21DaG9pY2UsMSkuZmxhdCgpO1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IFtjb29yZHNbMF0gKyBoZWFkaW5nWzBdLGNvb3Jkc1sxXSArIGhlYWRpbmdbMV1dO1xuICAgICAgICAgICAgcmV0dXJuICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjazptb3ZlLFxuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOmhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMgPSAoaGVhZGluZyxhdHRhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBbY29vcmRzWzBdIC0gYXR0YWNrWzBdLGNvb3Jkc1sxXSAtIGF0dGFja1sxXV07XG4gICAgICAgICAgICBjb25zdCBheGlzID0gaGVhZGluZ1swXSAhPSAwID8gMCA6IDEgO1xuICAgICAgICAgICAgbmV3SGVhZGluZ1theGlzXSA9IGhlYWRpbmdbYXhpc10gPiAwID8gaGVhZGluZ1theGlzXSsxIDogaGVhZGluZ1theGlzXS0xO1xuICAgICAgICAgICAgY29uc3Qgc3RpbGxWYWxpZCA9IHBvdGVudGlhbE1vdmVzLmZpbHRlcihoZWFkaW5nID0+IGhlYWRpbmdbYXhpc10gIT0gMCk7XG4gICAgICAgICAgICBzdGlsbFZhbGlkLnB1c2gobmV3SGVhZGluZyk7XG4gICAgICAgICAgICBwb3RlbnRpYWxNb3Zlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgc3RpbGxWYWxpZC5mb3JFYWNoKGNvb3JkID0+IHBvdGVudGlhbE1vdmVzLnB1c2goY29vcmQpKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29vcmRzLFxuICAgICAgICAgICAgdGFyZ2V0OnNoaXAsXG4gICAgICAgICAgICBwb3RlbnRpYWxNb3ZlcyxcbiAgICAgICAgICAgIG5leHRNb3ZlLFxuICAgICAgICAgICAgcmVjYWxjdWxhdGVQb3RlbnRpYWxNb3Zlc1xuICAgICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgcG9wdWxhdGVDdXJyZW50U3VjY2VzcyA9IChjb29yZHMsIHNoaXApID0+IHtcbiAgICAgICAgY3VycmVudFN1Y2Nlc3MucHVzaCh0YXJnZXRTaGlwKGNvb3JkcyxzaGlwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWR1Y2F0ZWRNb3ZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZVRha2VuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBjdXJyZW50U3VjY2Vzc1swXTtcbiAgICAgICAgaWYgKCFnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLmNoZWNrRm9yRW1wdHkoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTW9yZSBTcGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIW1vdmVUYWtlbikge1xuICAgICAgICAgICAgY29vcmRzID0gY3VycmVudFRhcmdldC5uZXh0TW92ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5aW5nIDogXCIsY29vcmRzKTtcbiAgICAgICAgICAgIG1vdmVUYWtlbiA9IHBsYXlUaWxlKGNvb3Jkcy5hdHRhY2spO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0JyAmJiBtb3ZlVGFrZW4uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRpbmc6IFwiLCBjdXJyZW50U3VjY2Vzc1swXSk7XG4gICAgICAgICAgICBjdXJyZW50U3VjY2Vzcy5zaGlmdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnICYmIG1vdmVUYWtlbiA9PT0gY3VycmVudFRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQucmVjYWxjdWxhdGVQb3RlbnRpYWxNb3Zlcyhjb29yZHMuaGVhZGluZyxjb29yZHMuYXR0YWNrKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzKGNvb3Jkcy5hdHRhY2ssbW92ZVRha2VuKVxuICAgICAgICB9XG4gICAgICAgIFNjcmVlbi5yZW5kZXJDb21wdXRlck1vdmUoY29vcmRzLmF0dGFjayxnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBpc0NvbXA6dHJ1ZSxcbiAgICAgICAgZ2VuZXJhdGVSYW5kb21Db29yZHMsXG4gICAgICAgIG1ha2VNb3ZlLFxuICAgICAgICBwbGFjZVxuICAgIH1cbn0iLCJpbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gXCIuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IFNISVBfSU1BR0VTID0ge1xuICAgIGJhdHRsZXNoaXA6IGJhdHRsZXNoaXBJbWFnZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgICBsZXQgb25OZXh0O1xuICAgIGxldCBvbldpbjtcbiAgICBsZXQgbW92ZVJlYWR5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRyYXdNYWluTWVudSA9IChzaW5nbGVJbml0aWFsaXNlLCBkb3VibGVJbml0aWFsaXNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IG1lbnVQYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudVBhbi5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUnKVxuICAgICAgICBjb25zdCBnYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtdGl0bGUnKTtcbiAgICAgICAgZ2FtZVRpdGxlLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXBzISdcbiAgICAgICAgbWVudVBhbi5hcHBlbmRDaGlsZChnYW1lVGl0bGUpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVQYW4pO1xuICAgICAgICBjb25zdCBidXR0b25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uQmFyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1iYXInKVxuICAgICAgICBjb25zdCBzdGFydFNpbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdGFydFNpbmdsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbicpXG4gICAgICAgIGNvbnN0IHN0YXJ0RG91YmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0RG91YmxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJylcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHN0YXJ0U2luZ2xlKTtcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHN0YXJ0RG91YmxlKTtcbiAgICAgICAgbWVudVBhbi5hcHBlbmRDaGlsZChidXR0b25CYXIpO1xuICAgICAgICBzdGFydFNpbmdsZS50ZXh0Q29udGVudCA9ICdTaW5nbGUgUGxheWVyJztcbiAgICAgICAgc3RhcnREb3VibGUudGV4dENvbnRlbnQgPSAnVHdvIFBsYXllcic7XG4gICAgICAgIHN0YXJ0U2luZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBnZXROYW1lKHNpbmdsZUluaXRpYWxpc2UpKTtcbiAgICAgICAgc3RhcnREb3VibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIGdldE5hbWUoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBnZXROYW1lKChzZWNvbmROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZUluaXRpYWxpc2UobmFtZSxzZWNvbmROYW1lKTtcbiAgICAgICAgICAgICAgICB9LCAndHdvJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKGNiLCBzdHJpbmcgPSAnb25lJykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgbmFtZVwiKTtcbiAgICAgICAgY29uc3QgbmFtZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBuYW1lRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2dldC1uYW1lJyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobmFtZURpYWxvZyk7XG4gICAgICAgIG5hbWVEaWFsb2cuc2hvdygpO1xuICAgICAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmFtZS1pbnB1dCcpO1xuICAgICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBgQWRtaXJhbCAke3N0cmluZ30gbmFtZTogYFxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuYW1lSW5wdXQuaWQgPSAnbmFtZS1pbnB1dCc7XG4gICAgICAgIGNvbnN0IG5hbWVTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmFtZVN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIG5hbWVEaWFsb2cuYXBwZW5kQ2hpbGQobmFtZUZvcm0pO1xuICAgICAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lU3VibWl0KTtcbiAgICAgICAgbmFtZVN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdnZXQtbmFtZS1zdWJtaXQnKTtcbiAgICAgICAgbmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChuYW1lSW5wdXQudmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgICAgICBjYihuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIG5hbWVEaWFsb2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuYW1lRGlhbG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9ICAgXG5cbiAgICBjb25zdCBwcmludFN0cmluZyA9ICh0b1ByaW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1iYXInKTtcbiAgICAgICAgc2hpcEJhci50ZXh0Q29udGVudCA9IHRvUHJpbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QmF0dGxlc2hpcENvb3JkcyA9IChjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgeExldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29vcmRzWzBdKzY1KTtcbiAgICAgICAgcmV0dXJuIGAke3hMZXR0ZXJ9JHtjb29yZHNbMV0rMX1gXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcFNjcmVlblNldHVwID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBwbGFjZSB5b3VyIHNoaXBzIWA7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXBzLXRpdGxlJyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnQuaWQgPSAnbGVmdCc7XG4gICAgICAgIGNvbnN0IGdhbWVhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVhcmVhLmlkID0gJ2dhbWVhcmVhJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChnYW1lYXJlYSk7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKGxlZnQpO1xuICAgICAgICBjb25zdCBzaGlwYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBiYXIuaWQgPSAnc2hpcC1iYXInO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNoaXBiYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dSZWFkeVNjcmVlbiA9IChwbGF5ZXIsbmV4dCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCByZWFkeURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBjb25zdCByZWFkeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcmVhZHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmVhZHlEaWFsb2cuY2xhc3NMaXN0LmFkZCgncmVhZHktZGlhbG9nJyk7XG4gICAgICAgIHJlYWR5VGV4dC5jbGFzc0xpc3QuYWRkKCdyZWFkeS10ZXh0Jyk7XG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlYWR5LWJ1dHRvbicpO1xuICAgICAgICByZWFkeVRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuaWR9J3MgdHVybiFgO1xuICAgICAgICByZWFkeUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZWFkeSc7XG4gICAgICAgIHJlYWR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVhZHlEaWFsb2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZWFkeURpYWxvZyk7XG4gICAgICAgICAgICByZWZyZXNoKHBsYXllcixuZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlYWR5RGlhbG9nLmFwcGVuZENoaWxkKHJlYWR5VGV4dClcbiAgICAgICAgcmVhZHlEaWFsb2cuYXBwZW5kQ2hpbGQocmVhZHlCdXR0b24pXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocmVhZHlEaWFsb2cpXG4gICAgICAgIHJlYWR5RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVTY3JlZW5TZXR1cCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0LmlkID0gJ2xlZnQnO1xuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodC5pZCA9ICdyaWdodCc7XG4gICAgICAgIGNvbnN0IGdhbWVhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVhcmVhLmlkID0gJ2dhbWVhcmVhJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChnYW1lYXJlYSk7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKGxlZnQpO1xuICAgICAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChyaWdodCk7XG4gICAgICAgIGNvbnN0IHNoaXBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcGJhci5pZCA9ICdzaGlwLWJhcic7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2hpcGJhcik7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0FjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBnZXRUYXJnZXQoZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykpO1xuICAgICAgICAgICAgICAgIGlmICghbW92ZVJlYWR5KSByZXR1cm47XG4gICAgICAgICAgICAgICAgbW92ZVJlYWR5ID0gZ2FtZWJvYXJkLm9wcG9uZW50Lm1ha2VNb3ZlKHRpbGUsIGdhbWVib2FyZClcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3RHVtbXlBY3RpdmVCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkcmF3U2hpcHMoZ2FtZWJvYXJkLGdhbWVib2FyZC5pZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0hpZGRlblJlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIC8vZHJhdyB0aGUgdGlsZXMgdG8gbWFpbnRhaW4gc2l6ZSBjb25zaXN0ZW5jeVxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaWRkZW4udGV4dENvbnRlbnQgPSBcIkRhdGEgRW5jcnlwdGVkLi4uXCJcbiAgICAgICAgaGlkZGVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1ib2FyZCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChoaWRkZW4pXG4gICAgfVxuXG4gICAgY29uc3QgcmVmcmVzaCA9IChjdXJyZW50LHByZXZpb3VzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBjb25zdCByZWNvbkFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKTtcbiAgICAgICAgYWN0aXZlQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVjb25BcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIWN1cnJlbnQuaXNDb21wKSB7XG4gICAgICAgICAgICBkcmF3QWN0aXZlQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdSZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdEdW1teUFjdGl2ZUJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3SGlkZGVuUmVjb25Cb2FyZChjdXJyZW50LmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3U2hpcHMocHJldmlvdXMuZ2FtZWJvYXJkLHByZXZpb3VzLmdhbWVib2FyZC5pZClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJDb21wdXRlck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBtb3ZlUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IGNvb3JkU3RyaW5nID0gZ2V0QmF0dGxlc2hpcENvb3Jkcyhjb29yZHMpO1xuICAgICAgICBwcmludFN0cmluZyhgQ29tcHV0ZXIgYXR0YWNrcyAke2Nvb3JkU3RyaW5nfS4uLmApO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJpbnRTdHJpbmcoYCR7Y29vcmRTdHJpbmd9IGlzIGEgJHtnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pfSFgKSw1MDApXG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tzXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc3RhbGxOZXh0VHVybiA9IGF3YWl0IHN0YWxsQ29tcHV0ZXJNb3ZlKCk7XG4gICAgICAgIHN0YWxsTmV4dFR1cm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQbGF5ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IGNvb3JkU3RyaW5nID0gZ2V0QmF0dGxlc2hpcENvb3Jkcyhjb29yZHMpO1xuICAgICAgICBwcmludFN0cmluZyhgJHtnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLm9wcG9uZW50LmlkfSBhdHRhY2tzICR7Y29vcmRTdHJpbmd9Li4uYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtjb29yZFN0cmluZ30gaXMgYSAke2dhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSl9IWApLDUwMClcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHNob3dQbGF5ZXJzVHVybiA9IGF3YWl0IHNob3dQbGF5ZXJSZXN1bHQoKTtcbiAgICAgICAgc2hvd1BsYXllcnNUdXJuKCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vua1NoaXAgPSAoc2hpcCwgbmFtZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHByaW50U3RyaW5nKGAke25hbWV9J3MgJHtzaGlwLm5hbWV9IGhhcyBiZWVuIHN1bmshYCksMjUwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1BsYXllclJlc3VsdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyUmVzdWx0VGltZXIgPSBhd2FpdCBwcm9taXNpZnkob25OZXh0LCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIHBsYXllclJlc3VsdFRpbWVyXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YWxsQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpbmlzaGVkID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgICAgIHJldHVybiBjb21wdXRlckZpbmlzaGVkXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb21pc2lmeSA9IChjYWxsYmFjayx0aW1lcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoY2FsbGJhY2spLCB0aW1lcikpO1xuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGRyYXdTaGlwcyA9IChnYW1lYm9hcmQsb25ib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdhbWVib2FyZC5nZXRTaGlwcygpO1xuICAgICAgICBjb25zdCBwbGF5em9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9uYm9hcmQpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24ocGxheXpvbmUsIGdhbWVib2FyZC5nZXRMZW5ndGgoKSwgc2hpcClcbiAgICAgICAgICAgIHBsYXl6b25lLmFwcGVuZENoaWxkKGRyYXdTaGlwKGRpbWVuc2lvbnMpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3U2hpcCA9IChkaW1lbnNpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwLW1hcmtlcicpO1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLGB0b3A6JHtkaW1lbnNpb25zLnRvcH07bGVmdDoke2RpbWVuc2lvbnMubGVmdH07d2lkdGg6JHtkaW1lbnNpb25zLmxlbmd0aH07aGVpZ2h0OiR7ZGltZW5zaW9ucy5oZWlnaHR9YCk7XG4gICAgICAgIHJldHVybiBzaGlwXG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24gPSAoem9uZSwgc2NhbGUgLHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgdW5pdCA9IHpvbmUub2Zmc2V0V2lkdGggLyBzY2FsZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVswXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVsxXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAub3JpZW50YXRpb24gPyBzaGlwLmxlbmd0aCAqIHVuaXQgOiB1bml0IDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgOiBzaGlwLmxlbmd0aCAqIHVuaXQgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIGxlbmd0aDpsZW5ndGgrJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDpoZWlnaHQrJ3B4J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFyZ2V0ID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoIWJ1dHRvbikgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBidXR0b247XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudC5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgLy8gRmluZCB0aGUgY29vcmRpbmF0ZXMgdGhyb3VnaCB0aGUgZWxlbWVudHMgcG9zaXRpb24gYW1vbmdzdCBpdHMgc2libGluZ3NcbiAgICAgICAgY29uc3QgeSA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYm9hcmQuY2hpbGRyZW4scGFyZW50KTtcbiAgICAgICAgY29uc3QgeCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLHRhcmdldCk7XG4gICAgICAgIHJldHVybiBbeCx5XVxuICAgIH1cblxuICAgIGNvbnN0IGVuZEdhbWUgPSAod2lubmVyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXIgJywgd2lubmVyLCAnIGlzIHZpY3RvcmlvdXMhJylcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgdmljdG9yeU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdmljdG9yeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmljdG9yeVRleHQudGV4dENvbnRlbnQgPSBgR2FtZSBvdmVyISAke3dpbm5lcn0gaXMgdmljdG9yaW91cyFgO1xuICAgICAgICBjb25zdCB2aWN0b3J5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHZpY3RvcnlCdXR0b24udGV4dENvbnRlbnQgPSBgTWFpbiBNZW51YDtcbiAgICAgICAgdmljdG9yeU1lbnUuY2xhc3NMaXN0LmFkZCgndmljdG9yeS1tZW51Jyk7XG4gICAgICAgIHZpY3RvcnlUZXh0LmNsYXNzTGlzdC5hZGQoJ3ZpY3RvcnktdGV4dCcpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG4gICAgICAgIHZpY3RvcnlNZW51LmFwcGVuZENoaWxkKHZpY3RvcnlUZXh0KTtcbiAgICAgICAgdmljdG9yeU1lbnUuYXBwZW5kQ2hpbGQodmljdG9yeUJ1dHRvbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodmljdG9yeU1lbnUpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25XaW4pO1xuICAgIH1cblxuXG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd1NoaXBzLFxuICAgICAgICBnYW1lU2NyZWVuU2V0dXAsXG4gICAgICAgIHNoaXBTY3JlZW5TZXR1cCxcbiAgICAgICAgcmVuZGVyQ29tcHV0ZXJNb3ZlLFxuICAgICAgICBlbmRHYW1lLFxuICAgICAgICBnZXRUYXJnZXQsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICBkcmF3TWFpbk1lbnUsXG4gICAgICAgIHNob3dSZWFkeVNjcmVlbixcbiAgICAgICAgc2V0IG9uTmV4dChuZXh0VHVybikge1xuICAgICAgICAgICAgb25OZXh0ID0gbmV4dFR1cm47XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbldpbih3aW4pIHtcbiAgICAgICAgICAgIG9uV2luID0gd2luO1xuICAgICAgICB9LFxuICAgIH1cbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChuYW1lID0gbnVsbCkgPT4ge1xuICAgIGxldCBoaXRDb3VudGVyID0gMDtcblxuICAgIGxldCBvcmllbnRhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlID0gKCkgPT4ge1xuICAgICAgICBvcmllbnRhdGlvbiA9ICFvcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBTSElQX1NJWkVTID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChoaXRDb3VudGVyID49IFNISVBfU0laRVNbbmFtZV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uOltdLFxuICAgICAgICBnZXQgb3JpZW50YXRpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb3JpZW50YXRpb24ob3IpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gb3I7XG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheWVkTmFtZSA9IG5hbWUuc3BsaXQoJycpO1xuICAgICAgICAgICAgYXJyYXllZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWVkTmFtZS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBTSElQX1NJWkVTW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XG4gICAgLS10aWxlLWF0dGFjazogcmdiYSgyNTUsMTUwLDE1MCwwLjkpO1xuICAgIC0tdGlsZS1oaXQ6IHJnYmEoMjU1LDIwMCwyMDAsMC44KTtcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xuICAgIC0tdGlsZS1ob3ZlcjogcmdiYSgyMzAsMjAwLDIwMCwwLjQpO1xuICAgIC0tYmFja2dyb3VuZDogIzU1ODg3NztcbiAgICAtLW1lbnUtYmFjazogIzU1QUE5OTtcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwZHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xufVxuXG4uZ2V0LW5hbWU6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4uZ2V0LW5hbWUgZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uZ2V0LW5hbWUgZm9ybSBsYWJlbCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZ2V0LW5hbWUtc3VibWl0IHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG59XG5cbi52aWN0b3J5LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluLW1lbnUsXG4udmljdG9yeS1tZW51LFxuLmdldC1uYW1lLFxuLnJlYWR5LWRpYWxvZyB7XG4gICAgd2lkdGg6IG1heCgzNSUsNDAwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFjayk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVhZHktZGlhbG9nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2spO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbn1cblxuXG4uZ2FtZS10aXRsZSxcbi5wbGFjZS1zaGlwcy10aXRsZSxcbi5yZWFkeS10ZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5idXR0b24tYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jc2hpcC1iYXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lbnUtYnV0dG9uLFxuLmdldC1uYW1lLXN1Ym1pdCxcbi5wbGFjZS1zaGlwLFxuLnJvdGF0ZSxcbi5zdWJtaXQtcGxhY2VtZW50LFxuLnJlYWR5LWJ1dHRvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrKTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuI2dhbWVhcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB3aGl0ZTtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbiNyaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbGVmdCAuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuI3JpZ2h0IC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbiNsZWZ0LFxuI3JpZ2h0IHtcbiAgICBtYXJnaW46IDJyZW07XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbi50aWxlLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzcyk7XG59XG5cbi50aWxlLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OmZsZXg7XG59XG5cbi50aWxlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmbGV4OjE7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlsZSk7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4udGlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XG59XG5cbkBtZWRpYSAoaG92ZXI6aG92ZXIpIHtcbiAgICBidXR0b24udGlsZTpob3ZlciB7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlcik7XG59XG59XG5cbi5oaWRkZW4tYm9hcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBib3R0b206MDtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6MDtcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDo1MCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuI3BsYXllci1vbmUsXG4jcGxheWVyLXR3byB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5zaGlwLW1hcmtlciB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuYnV0dG9uLnRpbGUuYXR0YWNrIHtcbiAgICBhbmltYXRpb246IGF0dGFjay1wdWxzZSAwLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBhdHRhY2stcHVsc2Uge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1hdHRhY2spIDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xuICAgIH1cbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDMlKTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBib3JkZXI6MDtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59XG5cbi5wbGFjZWhvbGRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ub3V0LW9mLWJvdW5kcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ucmVhZHktZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgI2dhbWVhcmVhIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBOzs7O0lBSUkscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0VBQXdFO0lBQ3hFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQTs7O0lBR0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3RUFBd0U7SUFDeEUsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7SUFNSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWix3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsTUFBTTtJQUNOLFVBQVU7SUFDVixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO09BQ0csbUNBQW1DO0FBQzFDO0FBQ0E7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QyxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztJQUN6QztJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XFxuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcXG4gICAgLS10aWxlLWhpdDogcmdiYSgyNTUsMjAwLDIwMCwwLjgpO1xcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjNTU4ODc3O1xcbiAgICAtLW1lbnUtYmFjazogIzU1QUE5OTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmdldC1uYW1lOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5nZXQtbmFtZSBmb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdldC1uYW1lIGZvcm0gbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZ2V0LW5hbWUtc3VibWl0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4udmljdG9yeS1tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW1lbnUsXFxuLnZpY3RvcnktbWVudSxcXG4uZ2V0LW5hbWUsXFxuLnJlYWR5LWRpYWxvZyB7XFxuICAgIHdpZHRoOiBtYXgoMzUlLDQwMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVhZHktZGlhbG9nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG5cXG4uZ2FtZS10aXRsZSxcXG4ucGxhY2Utc2hpcHMtdGl0bGUsXFxuLnJlYWR5LXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5idXR0b24tYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzaGlwLWJhciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uLFxcbi5nZXQtbmFtZS1zdWJtaXQsXFxuLnBsYWNlLXNoaXAsXFxuLnJvdGF0ZSxcXG4uc3VibWl0LXBsYWNlbWVudCxcXG4ucmVhZHktYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFjayk7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2dhbWVhcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHdoaXRlO1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbiNyaWdodCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2xlZnQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jcmlnaHQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNsZWZ0LFxcbiNyaWdodCB7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4udGlsZS5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcXG59XFxuXFxuLnRpbGUuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xcbn1cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4udGlsZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZsZXg6MTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aWxlKTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4udGlsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xcbn1cXG5cXG5AbWVkaWEgKGhvdmVyOmhvdmVyKSB7XFxuICAgIGJ1dHRvbi50aWxlOmhvdmVyIHtcXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlcik7XFxufVxcbn1cXG5cXG4uaGlkZGVuLWJvYXJkIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgYm90dG9tOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgcmlnaHQ6MDtcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIHdpZHRoOjUwJTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4jcGxheWVyLW9uZSxcXG4jcGxheWVyLXR3byB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uc2hpcC1tYXJrZXIge1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuYnV0dG9uLnRpbGUuYXR0YWNrIHtcXG4gICAgYW5pbWF0aW9uOiBhdHRhY2stcHVsc2UgMC41cyBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGF0dGFjay1wdWxzZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtYXR0YWNrKSA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcXG4gICAgfVxcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDMlKTtcXG59XFxuXFxuLnBsYWNlaG9sZGVyIHtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbi5wbGFjZWhvbGRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLm91dC1vZi1ib3VuZHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5yZWFkeS1kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgICNnYW1lYXJlYSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9tb2R1bGVzL3NjcmVlbi5qc1wiO1xuaW1wb3J0IHsgUGxhY2VtZW50Qm9hcmQgfSBmcm9tIFwiLi9tb2R1bGVzL3BsYWNlbWVudEJvYXJkLmpzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgLCBDb21wdXRlciB9IGZyb20gXCIuL21vZHVsZXMvcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9tb2R1bGVzL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBHYW1lID0gKCgpID0+IHtcbiAgICBsZXQgY3VycmVudFBsYXllclxuICAgIGNvbnN0IHBsYXllcnMgPSBbXTtcbiAgIFxuICAgIGNvbnN0IHNpbmdsZUluaXRpYWxpc2UgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZCgxMCwgbmFtZSk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gR2FtZWJvYXJkKDEwLCBcIkNvbXB1dGVyXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIobmFtZSwgcGxheWVyT25lQm9hcmQpO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd28gPSBDb21wdXRlcihuYW1lLCBwbGF5ZXJUd29Cb2FyZCk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJPbmUpO1xuICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyVHdvKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJUd287XG4gICAgICAgIHBsYXllclR3b0JvYXJkLm9wcG9uZW50ID0gcGxheWVyT25lO1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkb3VibGVJbml0aWFsaXNlID0gKG5hbWUsIHNlY29uZE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoMTAsIG5hbWUpO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZCgxMCwgc2Vjb25kTmFtZSk7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihuYW1lLCBwbGF5ZXJPbmVCb2FyZCk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3byA9IFBsYXllcihzZWNvbmROYW1lLCBwbGF5ZXJUd29Cb2FyZCk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJPbmUpO1xuICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyVHdvKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJUd287XG4gICAgICAgIHBsYXllclR3b0JvYXJkLm9wcG9uZW50ID0gcGxheWVyT25lO1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsaXNlR2FtZSA9ICgpID0+IHtcbiAgICAgICAgU2NyZWVuLmdhbWVTY3JlZW5TZXR1cCgpO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyc1sxXTtcbiAgICAgICAgU2NyZWVuLm9uTmV4dCA9IHR1cm5PdmVyO1xuICAgICAgICBuZXh0UGxheWVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdHVybk92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5jaGVja0ZvckFsbFN1bmsoKSB8fCBjdXJyZW50UGxheWVyLmdhbWVib2FyZC5jaGVja0ZvckFsbFN1bmsoKSkge1xuICAgICAgICAgICAgU2NyZWVuLmVuZEdhbWUoY3VycmVudFBsYXllci5nYW1lYm9hcmQub3Bwb25lbnQuaWQpO1xuICAgICAgICAgICAgcGxheWVycy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5leHRQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91cyA9IGN1cnJlbnRQbGF5ZXI7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF0gO1xuICAgICAgICBpZiAoY3VycmVudFBsYXllci5pc0NvbXApIHtcbiAgICAgICAgICAgIFNjcmVlbi5yZWZyZXNoKGN1cnJlbnRQbGF5ZXIscHJldmlvdXMpO1xuICAgICAgICAgICAgY3VycmVudFBsYXllci5tYWtlTW92ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKCFjdXJyZW50UGxheWVyLmdhbWVib2FyZC5vcHBvbmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIFNjcmVlbi5zaG93UmVhZHlTY3JlZW4oY3VycmVudFBsYXllcixwcmV2aW91cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTY3JlZW4ucmVmcmVzaChjdXJyZW50UGxheWVyLHByZXZpb3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAocGxheWVyLCBjYikgPT4ge1xuICAgICAgICAvLyBjb25zdCBvcHBvbmVudEJvYXJkID0gcGxheWVyID09PSBwbGF5ZXJPbmUgPyBwbGF5ZXJUd28uZ2FtZWJvYXJkIDogcGxheWVyT25lLmdhbWVib2FyZDtcbiAgICAgICAgU2NyZWVuLnNoaXBTY3JlZW5TZXR1cChwbGF5ZXIuaWQpO1xuICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSBQbGFjZW1lbnRCb2FyZChwbGF5ZXIuZ2FtZWJvYXJkLCBjYik7XG4gICAgICAgIHBsYWNlbWVudC5yZW5kZXJQbGFjZW1lbnRTY3JlZW4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlclBsYWNlID0gKHBsYXllciwgY2IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyKTtcbiAgICAgICAgcGxheWVyLnBsYWNlKCk7XG4gICAgICAgIGNiKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgICAgICBTY3JlZW4ub25XaW4gPSAoKSA9PiBTY3JlZW4uZHJhd01haW5NZW51KHNpbmdsZUluaXRpYWxpc2UsZG91YmxlSW5pdGlhbGlzZSk7XG4gICAgICAgIGNvbnN0IGFmdGVyUGxhY2UgPSBwbGF5ZXJzWzFdLmlzQ29tcCA/IGNvbXB1dGVyUGxhY2UgOiBzaGlwUGxhY2VtZW50IDtcbiAgICAgICAgc2hpcFBsYWNlbWVudChwbGF5ZXJzWzBdLCAoKSA9PiBhZnRlclBsYWNlKHBsYXllcnNbMV0sIGluaXRpYWxpc2VHYW1lKSk7XG4gICAgfVxuXG4gICAgU2NyZWVuLmRyYXdNYWluTWVudShzaW5nbGVJbml0aWFsaXNlLGRvdWJsZUluaXRpYWxpc2UpO1xuXG59KSgpOyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJHYW1lYm9hcmQiLCJzaXplIiwiYXJndW1lbnRzIiwic2hpcHMiLCJ0dXJucyIsIlNxdWFyZSIsIngiLCJ5Iiwic2hpcCIsImhpdCIsImNvb3JkcyIsImJ1aWxkUm93IiwiaW5kZXgiLCJjb2x1bW5zIiwiYnVpbGRTcXVhcmUiLCJyb3dzIiwiZ2V0TGVuZ3RoIiwiZ2V0U3F1YXJlIiwiZ2FtZVNxdWFyZSIsInNxdWFyZVN0YXR1cyIsImdldFNoaXBzIiwiaGl0U3F1YXJlIiwiRXJyb3IiLCJjaGVja0ZvckVtcHR5IiwicGxhY2VTaGlwIiwiaG9yaXpvbnRhbCIsImF4aXMiLCJjaGVja0JvdW5kYXJpZXMiLCJjaGVja0ZvclNoaXBzIiwib3JpZW50YXRpb24iLCJwb3NpdGlvbiIsImNsZWFyU2hpcCIsInBvcCIsInNwbGljZSIsImluZGV4T2YiLCJyYW5nZSIsImV2ZXJ5IiwiY2hlY2tGb3JBbGxTdW5rIiwiYWxsQ29uZGl0aW9uIiwiZm9yRWFjaCIsImlzU3VuayIsImNvbmRpdGlvbiIsImNsZWFyQWxsIiwiY3VyIiwiY29vcmQiLCJvcHBvbmVudCIsIlNjcmVlbiIsIlNoaXAiLCJTSElQX0lNQUdFUyIsIlBsYWNlbWVudEJvYXJkIiwiZ2FtZWJvYXJkIiwib25GaW5pc2giLCJwbGFjaW5nIiwic2hpcEJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXJyaWVyIiwicGxhY2VkIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJzZXRTaGlwcyIsIk9iamVjdCIsImtleXMiLCJuZXdTaGlwIiwiZHJhd1BsYWNlbWVudEJvYXJkIiwiem9uZURvbSIsImJvYXJkIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicm93Q29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaiIsInRpbGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW5kZXJQbGFjZW1lbnRTY3JlZW4iLCJkcmF3TmV4dFNoaXBCdXR0b24iLCJuZXh0U2hpcCIsIm1ha2VOZXh0U2hpcEJ1dHRvbiIsImJ1dHRvbiIsInJlbmRlclN1Ym1pdEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsIm1ha2VTaGlwIiwic2hpcFBsYWNlbWVudCIsInN1Ym1pdCIsImNsZWFyU2hpcEJhciIsImV4aXN0aW5nIiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJrZXkiLCJidXR0b25UZXh0IiwiU3RyaW5nIiwidG9VcHBlckNhc2UiLCJ0ZXh0Q29udGVudCIsInJvdGF0ZSIsImNyZWF0ZVRlbXBsYXRlIiwidGVtcGxhdGUiLCJuYW1lIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZEltYWdlIiwiY2xlYXJSb3RhdGVCdXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlUm90YXRlQnV0dG9uIiwidGlsZXMiLCJyZW5kZXJTaGlwIiwib2Zmc2V0V2lkdGgiLCJpbGxlZ2FsU3F1YXJlcyIsImZpbmRJbGxlZ2FsU3F1YXJlcyIsInJlbW92ZU1hcmtlciIsInJvdGF0ZVNoaXAiLCJob3ZlckltYWdlIiwiaW5jbHVkZXMiLCJyZW1vdmUiLCJlIiwicGxhY2VUZW1wbGF0ZSIsInRhcmdldCIsImNsb3Nlc3QiLCJvb2JNb3ZlIiwiX2xvb3AiLCJzcGFjZVNldCIsIlNldCIsImlsbE1vdmVzIiwiZ2V0T2NjdXBpZWRTcGFjZXMiLCJhcnJheVBvaW50ZXIiLCJzcGFjZSIsIm5leHRTcGFjZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9yZXQiLCJtYXJrZXIiLCJzcGFjZXMiLCJjdXJyZW50Q29vcmQiLCJpbWFnZSIsInVuaXQiLCJ3aWR0aCIsImhlaWdodCIsInJlcGxhY2VXaXRoIiwiY2xvbmVOb2RlIiwibW92ZVNoaXAiLCJnZXRUYXJnZXQiLCJjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uIiwiekluZGV4IiwiaW5uZXJIVE1MIiwic3VibWl0QnV0dG9uIiwiZWxlbWVudCIsImltZyIsImV2ZW50IiwicG9zIiwiY29udGFpbnMiLCJQbGF5ZXIiLCJtYWtlTW92ZSIsIm9wcG9uZW50Qm9hcmQiLCJtb3ZlIiwiX3R5cGVvZiIsInN1bmtTaGlwIiwicmVuZGVyUGxheWVyTW92ZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInBsYXlpbmciLCJpc0NvbXAiLCJDb21wdXRlciIsImN1cnJlbnRTdWNjZXNzIiwibWFrZVNoaXBzIiwicGxhY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJlcnIiLCJwbGF5VGlsZSIsImdlbmVyYXRlUmFuZG9tQ29vcmRzIiwiYm91bmRhcnkiLCJyYW5YIiwicmFuWSIsImVkdWNhdGVkTW92ZSIsImR1bWJNb3ZlIiwibW92ZVRha2VuIiwicG9wdWxhdGVDdXJyZW50U3VjY2VzcyIsInJlbmRlckNvbXB1dGVyTW92ZSIsInRhcmdldFNoaXAiLCJwb3RlbnRpYWxNb3ZlcyIsIm5leHRNb3ZlIiwicmFuZG9tQ2hvaWNlIiwiaGVhZGluZyIsImZsYXQiLCJhdHRhY2siLCJyZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzIiwibmV3SGVhZGluZyIsInN0aWxsVmFsaWQiLCJmaWx0ZXIiLCJjdXJyZW50VGFyZ2V0Iiwic2hpZnQiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiT3AiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFwcGx5IiwiYmF0dGxlc2hpcEltYWdlIiwib25OZXh0Iiwib25XaW4iLCJtb3ZlUmVhZHkiLCJkcmF3TWFpbk1lbnUiLCJzaW5nbGVJbml0aWFsaXNlIiwiZG91YmxlSW5pdGlhbGlzZSIsImJvZHkiLCJtZW51UGFuIiwiZ2FtZVRpdGxlIiwiYnV0dG9uQmFyIiwic3RhcnRTaW5nbGUiLCJzdGFydERvdWJsZSIsImdldE5hbWUiLCJzZWNvbmROYW1lIiwiY2IiLCJzdHJpbmciLCJuYW1lRGlhbG9nIiwic2hvdyIsIm5hbWVGb3JtIiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwibmFtZVN1Ym1pdCIsInJlcXVpcmVkIiwicHJldmVudERlZmF1bHQiLCJwcmludFN0cmluZyIsInRvUHJpbnQiLCJnZXRCYXR0bGVzaGlwQ29vcmRzIiwieExldHRlciIsImZyb21DaGFyQ29kZSIsInNoaXBTY3JlZW5TZXR1cCIsInRpdGxlIiwiZ2FtZWFyZWEiLCJzaGlwYmFyIiwic2hvd1JlYWR5U2NyZWVuIiwicGxheWVyIiwicmVhZHlEaWFsb2ciLCJyZWFkeVRleHQiLCJyZWFkeUJ1dHRvbiIsInJlZnJlc2giLCJzaG93TW9kYWwiLCJnYW1lU2NyZWVuU2V0dXAiLCJyaWdodCIsImRyYXdBY3RpdmVCb2FyZCIsImRyYXdEdW1teUFjdGl2ZUJvYXJkIiwiZHJhd1JlY29uQm9hcmQiLCJkcmF3U2hpcHMiLCJkcmF3SGlkZGVuUmVjb25Cb2FyZCIsImhpZGRlbiIsImN1cnJlbnQiLCJwcmV2aW91cyIsImFjdGl2ZUFyZWEiLCJyZWNvbkFyZWEiLCJfcmVmIiwiX2NhbGxlZSIsImFjdGl2ZVpvbmUiLCJyb3ciLCJjZWxsIiwiY29vcmRTdHJpbmciLCJyZW1vdmVBdHRhY2tNYXJrZXIiLCJzdGFsbE5leHRUdXJuIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNoaWxkcmVuIiwicHJvbWlzaWZ5Iiwic2V0VGltZW91dCIsInN0YWxsQ29tcHV0ZXJNb3ZlIiwiX3giLCJfeDIiLCJfcmVmMiIsIl9jYWxsZWUyIiwic2hvd1BsYXllcnNUdXJuIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic2hvd1BsYXllclJlc3VsdCIsIl94MyIsIl94NCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJwbGF5ZXJSZXN1bHRUaW1lciIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl9yZWY0IiwiX2NhbGxlZTQiLCJjb21wdXRlckZpbmlzaGVkIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiY2FsbGJhY2siLCJ0aW1lciIsIm9uYm9hcmQiLCJwbGF5em9uZSIsImRpbWVuc2lvbnMiLCJjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiIsImRyYXdTaGlwIiwiem9uZSIsInNjYWxlIiwicGFyZW50IiwiQXJyYXkiLCJlbmRHYW1lIiwid2lubmVyIiwidmljdG9yeU1lbnUiLCJ2aWN0b3J5VGV4dCIsInZpY3RvcnlCdXR0b24iLCJuZXh0VHVybiIsIndpbiIsImhpdENvdW50ZXIiLCJTSElQX1NJWkVTIiwib3IiLCJhcnJheWVkTmFtZSIsInNwbGl0IiwiR2FtZSIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXJzIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJUd29Cb2FyZCIsInBsYXllck9uZSIsInBsYXllclR3byIsInN0YXJ0R2FtZSIsImluaXRpYWxpc2VHYW1lIiwidHVybk92ZXIiLCJuZXh0UGxheWVyIiwicGxhY2VtZW50IiwiY29tcHV0ZXJQbGFjZSIsImFmdGVyUGxhY2UiXSwic291cmNlUm9vdCI6IiJ9