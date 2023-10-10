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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Q7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFFBQVEsT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFh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Q0FBQ1gsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFTSxjQUFjLENBQUM7SUFBQSxFQUFDO0VBQzNFLENBQUM7RUFFRGpaLDBEQUFNLENBQUMrUixZQUFZLENBQUNDLGdCQUFnQixFQUFDQyxnQkFBZ0IsQ0FBQztBQUUxRCxDQUFDLENBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxhY2VtZW50Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9IChzaXplLGlkID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG4gICAgY29uc3QgdHVybnMgPSBbXTtcbiAgICBjb25zdCBTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgICAgICAgaGl0OiBmYWxzZSxcbiAgICAgICAgICAgIGNvb3JkczogW3gseV0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFJvdyA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaChTcXVhcmUoaSxpbmRleCkpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkU3F1YXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICByb3dzLnB1c2goYnVpbGRSb3coaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZVNxdWFyZVt5XVt4XTtcbiAgICB9XG5cbiAgICBjb25zdCBzcXVhcmVTdGF0dXMgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCAmJiBnYW1lU3F1YXJlW3ldW3hdLnNoaXApIHJldHVybiAnaGl0JztcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0KSByZXR1cm4gJ21pc3MnO1xuICAgICAgICByZXR1cm4gJ2VtcHR5J1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZVNxdWFyZSA9IGJ1aWxkU3F1YXJlKHNpemUpO1xuXG4gICAgY29uc3QgaGl0U3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoIWdhbWVTcXVhcmVbeV0gfHwgIWdhbWVTcXVhcmVbeV1beF0pIHRocm93IG5ldyBFcnJvcihcIk91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCkgdGhyb3cgbmV3IEVycm9yKFwiU3F1YXJlIGFscmVhZHkgaGl0XCIpO1xuICAgICAgICBnYW1lU3F1YXJlW3ldW3hdLmhpdCA9IHRydWU7XG4gICAgICAgIHR1cm5zLnB1c2goW3gseV0pO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5zaGlwKSB7XG4gICAgICAgICAgICBnYW1lU3F1YXJlW3ldW3hdLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZVNxdWFyZVt5XVt4XS5zaGlwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgY29uc3QgY2hlY2tGb3JFbXB0eSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHR1cm5zLmxlbmd0aCA8IChzaXplKnNpemUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLHgseSxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBob3Jpem9udGFsID8geCA6IHkgO1xuICAgICAgICBpZiAoIWNoZWNrQm91bmRhcmllcyhheGlzLHNoaXAubGVuZ3RoKSkgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICBpZiAoIWNoZWNrRm9yU2hpcHMoc2hpcC5sZW5ndGgseCx5LGhvcml6b250YWwpKSB0aHJvdyBuZXcgRXJyb3IoXCJTcGFjZSBvY2N1cGllZFwiKTtcbiAgICAgICAgc2hpcC5vcmllbnRhdGlvbiA9IGhvcml6b250YWw7XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW3ldW3graV0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbi5wdXNoKGdhbWVTcXVhcmVbeV1beCtpXS5jb29yZHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW3kraV1beF0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbi5wdXNoKGdhbWVTcXVhcmVbeStpXVt4XS5jb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gc2hpcC5wb3NpdGlvbi5wb3AoKTtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVbY29vcmRzWzFdXVtjb29yZHNbMF1dLnNoaXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBzLnNwbGljZShzaGlwcy5pbmRleE9mKHNoaXApLDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yU2hpcHMgPSAobGVuZ3RoLHgseSxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIC8vQnVpbGRzIGFuIGFycmF5IG9mIHNwYWNlcyB0aGUgc2hpcCB3aWxsIG9jY3VweVxuICAgICAgICBjb25zdCByYW5nZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2UucHVzaChnYW1lU3F1YXJlW3ldW3graV0uc2hpcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlLnB1c2goZ2FtZVNxdWFyZVt5K2ldW3hdLnNoaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vUmV0dXJucyB0cnVlIGlmIGFsbCBhcmUgZW1wdHlcbiAgICAgICAgcmV0dXJuIHJhbmdlLmV2ZXJ5KHNoaXAgPT4gc2hpcCA9PT0gbnVsbCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBjaGVja0JvdW5kYXJpZXMgPSAoYXhpcyxsZW5ndGgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aXMgKyBsZW5ndGggPiBzaXplID8gZmFsc2UgOiB0cnVlOyBcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvckFsbFN1bmsgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFsbENvbmRpdGlvbiA9IFtdXG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IGFsbENvbmRpdGlvbi5wdXNoKHNoaXAuaXNTdW5rKCkpKTtcbiAgICAgICAgcmV0dXJuIGFsbENvbmRpdGlvbi5ldmVyeShjb25kaXRpb24gPT4gY29uZGl0aW9uID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2hpcHMubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgY3VyID0gc2hpcHMucG9wKCk7XG4gICAgICAgICAgICBjdXIucG9zaXRpb24uZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlW2Nvb3JkWzFdXVtjb29yZFswXV0uc2hpcCA9IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGhpdFNxdWFyZSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICBjbGVhclNoaXAsXG4gICAgICAgIGNoZWNrRm9yQWxsU3VuayxcbiAgICAgICAgZ2V0U3F1YXJlLFxuICAgICAgICBjaGVja0ZvckVtcHR5LFxuICAgICAgICBnZXRTaGlwcyxcbiAgICAgICAgY2xlYXJBbGwsXG4gICAgICAgIHNxdWFyZVN0YXR1cyxcbiAgICAgICAgb3Bwb25lbnQ6bnVsbCxcbiAgICAgICAgaWQsXG4gICAgfVxuXG59OyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCJcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCJcbmltcG9ydCB7IFNISVBfSU1BR0VTIH0gZnJvbSBcIi4vc2NyZWVuLmpzXCJcblxuZXhwb3J0IGNvbnN0IFBsYWNlbWVudEJvYXJkID0gKGdhbWVib2FyZCwgb25GaW5pc2gpID0+IHtcbiAgICBsZXQgcGxhY2luZyA9IGZhbHNlO1xuICAgIGNvbnN0IHNoaXBCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1iYXInKTtcblxuICAgIGNvbnN0IHNoaXBzID0ge1xuICAgICAgICBjYXJyaWVyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDo1LFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBiYXR0bGVzaGlwOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDo0LFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjcnVpc2VyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDozLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBzdWJtYXJpbmU6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjMsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3llcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MixcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyhzaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAoc2hpcCk7XG4gICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsc2hpcHNbc2hpcF0uY29vcmRzWzBdLHNoaXBzW3NoaXBdLmNvb3Jkc1sxXSxzaGlwc1tzaGlwXS5ob3Jpem9udGFsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UGxhY2VtZW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5pZCA9IGAke2p9LSR7aX1gO1xuICAgICAgICAgICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3Bvc2l0aW9uOnJlbGF0aXZlOycpXG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxhY2VtZW50U2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBkcmF3UGxhY2VtZW50Qm9hcmQoKTtcbiAgICAgICAgZHJhd05leHRTaGlwQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd05leHRTaGlwQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0U2hpcCA9IG1ha2VOZXh0U2hpcEJ1dHRvbigpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBuZXh0U2hpcCA/IG5leHRTaGlwIDogcmVuZGVyU3VibWl0QnV0dG9uKCk7XG4gICAgICAgIGlmIChuZXh0U2hpcCkge2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgc2hpcEJhci5yZW1vdmVDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG1ha2VTaGlwKGJ1dHRvbik7XG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50KHNoaXAsc2hpcHNbc2hpcF0pO1xuICAgICAgICB9KTt9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0KTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwQmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJTaGlwQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZS1zaGlwJyk7XG4gICAgICAgIGlmIChleGlzdGluZykgZXhpc3RpbmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChleGlzdGluZyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU5leHRTaGlwQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjbGVhclNoaXBCYXIoKTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNoaXBzKSB7XG4gICAgICAgICAgICBpZiAoc2hpcHNba2V5XS5wbGFjZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uVGV4dCA9IFN0cmluZygnUGxhY2UgJysga2V5KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncGxhY2Utc2hpcCcpO1xuICAgICAgICAgICAgYnV0dG9uLmlkID0ga2V5O1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcbiAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgIH0gICBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VTaGlwID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gU2hpcChidXR0b24uaWQpO1xuICAgICAgICBzaGlwLnJvdGF0ZSgpO1xuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRlbXBsYXRlID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgdGVtcGxhdGUuaWQgPSBzaGlwLm5hbWU7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1NISVBfSU1BR0VTW3NoaXAubmFtZV19YDtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyUm90YXRlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBzaGlwQmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3RhdGUnKS5mb3JFYWNoKChidXR0b24pID0+IHNoaXBCYXIucmVtb3ZlQ2hpbGQoYnV0dG9uKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUm90YXRlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjbGVhclJvdGF0ZUJ1dHRvbigpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnUk9UQVRFJztcbiAgICAgICAgc2hpcEJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuXG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IChzaGlwKSA9PiB7XG4gICAgICAgIHBsYWNpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gY3JlYXRlVGVtcGxhdGUoc2hpcCk7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICByZW5kZXJTaGlwKHRlbXBsYXRlLHRpbGVzWzBdLm9mZnNldFdpZHRoLHNoaXApO1xuICAgICAgICBjb25zdCBpbGxlZ2FsU3F1YXJlcyA9IGZpbmRJbGxlZ2FsU3F1YXJlcyhzaGlwKTtcbiAgICAgICAgY29uc3Qgcm90YXRlID0gY3JlYXRlUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlTWFya2VyKHRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJvdGF0ZVNoaXAoc2hpcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIGhvdmVySW1hZ2UodGlsZSx0ZW1wbGF0ZSk7XG4gICAgICAgICAgICBpZiAoaWxsZWdhbFNxdWFyZXMuaW5jbHVkZXModGlsZS5pZCkpIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2lsbGVnYWwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnaWxsZWdhbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwbGFjZVRlbXBsYXRlKGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJyksdGVtcGxhdGUsc2hpcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmluZElsbGVnYWxTcXVhcmVzID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBbXTtcbiAgICAgICAgLy8gRmluZCBvdXQgb2YgYm91bmQgc3F1YXJlc1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgZ2FtZWJvYXJkLmdldExlbmd0aCgpIDsgaSsrICkge1xuICAgICAgICAgICAgZm9yICggbGV0IGogPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgLSAoc2hpcC5sZW5ndGggLSAxKTsgaiA8IGdhbWVib2FyZC5nZXRMZW5ndGgoKSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvb2JNb3ZlID0gc2hpcC5vcmllbnRhdGlvbiA/IFtqLGldIDogW2ksal0gO1xuICAgICAgICAgICAgICAgIGlsbGVnYWxTcXVhcmVzLnB1c2gob29iTW92ZS5qb2luKCctJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vR2V0IHNwYWNlcyB0aGF0IGFyZSBvYnN0cnVjdGVkIGJ5IGFub3RoZXIgc2hpcFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgaWYgKCFzaGlwc1trZXldLnBsYWNlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBpbGxNb3ZlcyA9IGdldE9jY3VwaWVkU3BhY2VzKHNoaXBzW2tleV0pO1xuICAgICAgICAgICAgY29uc3QgYXJyYXlQb2ludGVyID0gc2hpcC5vcmllbnRhdGlvbiA/IDAgOiAxOyBcbiAgICAgICAgICAgIGlsbE1vdmVzLmZvckVhY2goKHNwYWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc3BhY2VTZXQuYWRkKHNwYWNlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgZm9yKCBsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRTcGFjZSA9IFsuLi5zcGFjZV07XG4gICAgICAgICAgICAgICAgICAgIG5leHRTcGFjZVthcnJheVBvaW50ZXJdID0gbmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gLSBpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gPCAwKSBjb250aW51ZSA7IFxuICAgICAgICAgICAgICAgICAgICBzcGFjZVNldC5hZGQobmV4dFNwYWNlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcGFjZVNldC5mb3JFYWNoKChjb29yZCkgPT4gaWxsZWdhbFNxdWFyZXMucHVzaChjb29yZCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbGxlZ2FsU3F1YXJlcztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRPY2N1cGllZFNwYWNlcyA9IChtYXJrZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhY2VzID0gbmV3IFNldCgpO1xuICAgICAgICBjb25zdCBhcnJheVBvaW50ZXIgPSBtYXJrZXIuaG9yaXpvbnRhbCA/IDAgOiAxIDtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IG1hcmtlci5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29vcmQgPSBbLi4ubWFya2VyLmNvb3Jkc107XG4gICAgICAgICAgICBjdXJyZW50Q29vcmRbYXJyYXlQb2ludGVyXSA9IGN1cnJlbnRDb29yZFthcnJheVBvaW50ZXJdICsgaTtcbiAgICAgICAgICAgIHNwYWNlcy5hZGQoY3VycmVudENvb3JkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3BhY2VzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNoaXAgPSAoaW1hZ2UsdW5pdCxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2hpcC5vcmllbnRhdGlvbiA/ICh1bml0KnNoaXAubGVuZ3RoKSsncHgnIDogdW5pdCsncHgnO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCArJ3B4JzogKHVuaXQqc2hpcC5sZW5ndGgpKydweCc7XG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVNYXJrZXIgPSAodGVtcGxhdGUpID0+IHtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5yZXBsYWNlV2l0aCh0aWxlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgcm90YXRlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAucm90YXRlKCk7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZVNoaXAgPSAodGVtcGxhdGUsc2hpcCkgPT4ge1xuICAgICAgICBpZiAocGxhY2luZykgcmV0dXJuO1xuICAgICAgICBjbGVhclNoaXBCYXIoKTtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHNoaXBzW3NoaXAubmFtZV0ucGxhY2VkID0gZmFsc2U7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VUZW1wbGF0ZSA9ICh0aWxlLHRlbXBsYXRlLHNoaXApID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gU2NyZWVuLmdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKHRpbGUub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5ob3Jpem9udGFsID0gc2hpcC5vcmllbnRhdGlvbjtcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLnBsYWNlZCA9IHRydWU7XG4gICAgICAgIHRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4gbW92ZVNoaXAoZS50YXJnZXQuY2xvc2VzdCgnLnBsYWNlaG9sZGVyJyksc2hpcCkpO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVwbGFjZVdpdGgodGlsZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgICAgICBwbGFjaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24gPSAodW5pdCxjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IChjb29yZHNbMF0qdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gKGNvb3Jkc1sxXSp1bml0KSsncHgnO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIHRvcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBzaGlwQmFyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1wbGFjZW1lbnQnKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NVQk1JVCc7XG4gICAgICAgIHJldHVybiBzdWJtaXRCdXR0b25cbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNoaXBzKCk7XG4gICAgICAgIG9uRmluaXNoKCk7XG4gICAgICAgIHNoaXBCYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG5cbiAgICBjb25zdCBob3ZlckltYWdlID0gKGVsZW1lbnQsaW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZS50YXJnZXQuY2xvc2VzdCgnLnRpbGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IFNjcmVlbi5nZXRUYXJnZXQodGlsZSk7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKHRpbGUub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgICAgIGlmKHRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbGxlZ2FsJykpIHtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnb3V0LW9mLWJvdW5kcycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnb3V0LW9mLWJvdW5kcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IHBvcy50b3A7XG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IHBvcy5sZWZ0O1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyUGxhY2VtZW50U2NyZWVuLFxuICAgIH1cbn0iLCJpbXBvcnQgU2NyZWVuIGZyb20gXCIuL3NjcmVlbi5qc1wiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIFxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKHRpbGUsIG9wcG9uZW50Qm9hcmQpID0+IHtcbiAgICAgICAgaWYgKCF0aWxlKSB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSB0aWxlLlwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBvcHBvbmVudEJvYXJkLmhpdFNxdWFyZSh0aWxlWzBdLHRpbGVbMV0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtb3ZlID09PSAnb2JqZWN0JyAmJiBtb3ZlLmlzU3VuaygpKSBTY3JlZW4uc3Vua1NoaXAobW92ZSwgb3Bwb25lbnRCb2FyZC5pZCk7IFxuICAgICAgICAgICAgU2NyZWVuLnJlbmRlclBsYXllck1vdmUodGlsZSxvcHBvbmVudEJvYXJkKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgICAgICBpc0NvbXA6IGZhbHNlLFxuICAgICAgICBpZCxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBtYWtlTW92ZVxuICAgIH1cblxufVxuXG5leHBvcnQgY29uc3QgQ29tcHV0ZXIgPSAoaWQsZ2FtZWJvYXJkKSA9PiB7XG5cbiAgICBsZXQgY3VycmVudFN1Y2Nlc3MgPSBbXTtcblxuICAgIGNvbnN0IG1ha2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcnJpZXI6IFNoaXAoJ2NhcnJpZXInKSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcbiAgICAgICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcbiAgICAgICAgICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJyksXG4gICAgICAgICAgICBkZXN0cm95ZXI6IFNoaXAoJ2Rlc3Ryb3llcicpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gbWFrZVNoaXBzKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmdldExlbmd0aCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5nZXRMZW5ndGgoKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoyKSA/IHRydWUgOiBmYWxzZSA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwc1tzaGlwXSx4LHksb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IHBsYWNlIGF0OiBcIiwgeCwgeSwgXCIgd2l0aCBcIiwgb3JpZW50YXRpb24sXCIgb3JpZW50YXRpb24uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAgICAgXG4gICAgY29uc3QgcGxheVRpbGUgPSAodGlsZSkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGhpdCA9IGdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhpdCA9PT0gJ29iamVjdCcgJiYgaGl0LmlzU3VuaygpKSBTY3JlZW4uc3Vua1NoaXAoaGl0LCBnYW1lYm9hcmQub3Bwb25lbnQuaWQpOyBcbiAgICAgICAgICAgIGlmIChoaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm91bmRhcnkgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGNvbnN0IHJhblggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm91bmRhcnkpO1xuICAgICAgICBjb25zdCByYW5ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgcmV0dXJuIFtyYW5YLHJhblldO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFN1Y2Nlc3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBlZHVjYXRlZE1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGR1bWJNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkdW1iTW92ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1vdmVUYWtlbiA9IGZhbHNlO1xuICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICBpZiAoIWdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gcGxheVRpbGUoY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MoY29vcmRzLG1vdmVUYWtlbik7XG4gICAgICAgIH1cbiAgICAgICAgU2NyZWVuLnJlbmRlckNvbXB1dGVyTW92ZShjb29yZHMsZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0U2hpcCA9IChjb29yZHMsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsTW92ZXMgPSBbWzAsMV0sWzAsLTFdLFsxLDBdLFstMSwwXV07XG5cbiAgICAgICAgY29uc3QgbmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21DaG9pY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3RlbnRpYWxNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGluZyA9IHBvdGVudGlhbE1vdmVzLnNwbGljZShyYW5kb21DaG9pY2UsMSkuZmxhdCgpO1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IFtjb29yZHNbMF0gKyBoZWFkaW5nWzBdLGNvb3Jkc1sxXSArIGhlYWRpbmdbMV1dO1xuICAgICAgICAgICAgcmV0dXJuICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjazptb3ZlLFxuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOmhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMgPSAoaGVhZGluZyxhdHRhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBbY29vcmRzWzBdIC0gYXR0YWNrWzBdLGNvb3Jkc1sxXSAtIGF0dGFja1sxXV07XG4gICAgICAgICAgICBjb25zdCBheGlzID0gaGVhZGluZ1swXSAhPSAwID8gMCA6IDEgO1xuICAgICAgICAgICAgbmV3SGVhZGluZ1theGlzXSA9IGhlYWRpbmdbYXhpc10gPiAwID8gaGVhZGluZ1theGlzXSsxIDogaGVhZGluZ1theGlzXS0xO1xuICAgICAgICAgICAgY29uc3Qgc3RpbGxWYWxpZCA9IHBvdGVudGlhbE1vdmVzLmZpbHRlcihoZWFkaW5nID0+IGhlYWRpbmdbYXhpc10gIT0gMCk7XG4gICAgICAgICAgICBzdGlsbFZhbGlkLnB1c2gobmV3SGVhZGluZyk7XG4gICAgICAgICAgICBwb3RlbnRpYWxNb3Zlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgc3RpbGxWYWxpZC5mb3JFYWNoKGNvb3JkID0+IHBvdGVudGlhbE1vdmVzLnB1c2goY29vcmQpKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29vcmRzLFxuICAgICAgICAgICAgdGFyZ2V0OnNoaXAsXG4gICAgICAgICAgICBwb3RlbnRpYWxNb3ZlcyxcbiAgICAgICAgICAgIG5leHRNb3ZlLFxuICAgICAgICAgICAgcmVjYWxjdWxhdGVQb3RlbnRpYWxNb3Zlc1xuICAgICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgcG9wdWxhdGVDdXJyZW50U3VjY2VzcyA9IChjb29yZHMsIHNoaXApID0+IHtcbiAgICAgICAgY3VycmVudFN1Y2Nlc3MucHVzaCh0YXJnZXRTaGlwKGNvb3JkcyxzaGlwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWR1Y2F0ZWRNb3ZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZVRha2VuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBjdXJyZW50U3VjY2Vzc1swXTtcbiAgICAgICAgaWYgKCFnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLmNoZWNrRm9yRW1wdHkoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTW9yZSBTcGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIW1vdmVUYWtlbikge1xuICAgICAgICAgICAgY29vcmRzID0gY3VycmVudFRhcmdldC5uZXh0TW92ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5aW5nIDogXCIsY29vcmRzKTtcbiAgICAgICAgICAgIG1vdmVUYWtlbiA9IHBsYXlUaWxlKGNvb3Jkcy5hdHRhY2spO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0JyAmJiBtb3ZlVGFrZW4uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRpbmc6IFwiLCBjdXJyZW50U3VjY2Vzc1swXSk7XG4gICAgICAgICAgICBjdXJyZW50U3VjY2Vzcy5zaGlmdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnICYmIG1vdmVUYWtlbiA9PT0gY3VycmVudFRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQucmVjYWxjdWxhdGVQb3RlbnRpYWxNb3Zlcyhjb29yZHMuaGVhZGluZyxjb29yZHMuYXR0YWNrKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzKGNvb3Jkcy5hdHRhY2ssbW92ZVRha2VuKVxuICAgICAgICB9XG4gICAgICAgIFNjcmVlbi5yZW5kZXJDb21wdXRlck1vdmUoY29vcmRzLmF0dGFjayxnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBpc0NvbXA6dHJ1ZSxcbiAgICAgICAgZ2VuZXJhdGVSYW5kb21Db29yZHMsXG4gICAgICAgIG1ha2VNb3ZlLFxuICAgICAgICBwbGFjZVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBTSElQX0lNQUdFUyA9IHtcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwSW1hZ2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gICAgbGV0IG9uTmV4dDtcbiAgICBsZXQgb25XaW47XG4gICAgbGV0IG1vdmVSZWFkeSA9IHRydWU7XG5cbiAgICBjb25zdCBkcmF3TWFpbk1lbnUgPSAoc2luZ2xlSW5pdGlhbGlzZSwgZG91YmxlSW5pdGlhbGlzZSkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBtZW51UGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVQYW4uY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51JylcbiAgICAgICAgY29uc3QgZ2FtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXRpdGxlJyk7XG4gICAgICAgIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwcyEnXG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoZ2FtZVRpdGxlKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtZW51UGFuKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkJhci5jbGFzc0xpc3QuYWRkKCdidXR0b24tYmFyJylcbiAgICAgICAgY29uc3Qgc3RhcnRTaW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhcnRTaW5nbGUuY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKVxuICAgICAgICBjb25zdCBzdGFydERvdWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdGFydERvdWJsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbicpXG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzdGFydFNpbmdsZSk7XG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzdGFydERvdWJsZSk7XG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoYnV0dG9uQmFyKTtcbiAgICAgICAgc3RhcnRTaW5nbGUudGV4dENvbnRlbnQgPSAnU2luZ2xlIFBsYXllcic7XG4gICAgICAgIHN0YXJ0RG91YmxlLnRleHRDb250ZW50ID0gJ1R3byBQbGF5ZXInO1xuICAgICAgICBzdGFydFNpbmdsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gZ2V0TmFtZShzaW5nbGVJbml0aWFsaXNlKSk7XG4gICAgICAgIHN0YXJ0RG91YmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICBnZXROYW1lKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2V0TmFtZSgoc2Vjb25kTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb3VibGVJbml0aWFsaXNlKG5hbWUsc2Vjb25kTmFtZSk7XG4gICAgICAgICAgICAgICAgfSwgJ3R3bycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9IChjYiwgc3RyaW5nID0gJ29uZScpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIG5hbWVcIik7XG4gICAgICAgIGNvbnN0IG5hbWVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgbmFtZURpYWxvZy5jbGFzc0xpc3QuYWRkKCdnZXQtbmFtZScpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG5hbWVEaWFsb2cpO1xuICAgICAgICBuYW1lRGlhbG9nLnNob3coKTtcbiAgICAgICAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUtaW5wdXQnKTtcbiAgICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gYEFkbWlyYWwgJHtzdHJpbmd9IG5hbWU6IGBcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xuICAgICAgICBjb25zdCBuYW1lU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5hbWVTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBuYW1lRGlhbG9nLmFwcGVuZENoaWxkKG5hbWVGb3JtKTtcbiAgICAgICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICAgICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZVN1Ym1pdCk7XG4gICAgICAgIG5hbWVTdWJtaXQuY2xhc3NMaXN0LmFkZCgnZ2V0LW5hbWUtc3VibWl0Jyk7XG4gICAgICAgIG5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgY2IobmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyBuYW1lRGlhbG9nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmFtZURpYWxvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSAgIFxuXG4gICAgY29uc3QgcHJpbnRTdHJpbmcgPSAodG9QcmludCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtYmFyJyk7XG4gICAgICAgIHNoaXBCYXIudGV4dENvbnRlbnQgPSB0b1ByaW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldEJhdHRsZXNoaXBDb29yZHMgPSAoY29vcmRzKSA9PiB7XG4gICAgICAgIGNvbnN0IHhMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvb3Jkc1swXSs2NSk7XG4gICAgICAgIHJldHVybiBgJHt4TGV0dGVyfSR7Y29vcmRzWzFdKzF9YFxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBTY3JlZW5TZXR1cCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7bmFtZX0gcGxhY2UgeW91ciBzaGlwcyFgO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwbGFjZS1zaGlwcy10aXRsZScpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0LmlkID0gJ2xlZnQnO1xuICAgICAgICBjb25zdCBnYW1lYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lYXJlYS5pZCA9ICdnYW1lYXJlYSc7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWFyZWEpO1xuICAgICAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICAgICAgY29uc3Qgc2hpcGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwYmFyLmlkID0gJ3NoaXAtYmFyJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaGlwYmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UmVhZHlTY3JlZW4gPSAocGxheWVyLG5leHQpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgcmVhZHlEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgY29uc3QgcmVhZHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJlYWR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlYWR5RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3JlYWR5LWRpYWxvZycpO1xuICAgICAgICByZWFkeVRleHQuY2xhc3NMaXN0LmFkZCgncmVhZHktdGV4dCcpO1xuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWFkeS1idXR0b24nKTtcbiAgICAgICAgcmVhZHlUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLmlkfSdzIHR1cm4hYDtcbiAgICAgICAgcmVhZHlCdXR0b24udGV4dENvbnRlbnQgPSAnUmVhZHknO1xuICAgICAgICByZWFkeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlYWR5RGlhbG9nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVhZHlEaWFsb2cpO1xuICAgICAgICAgICAgcmVmcmVzaChuZXh0LHBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZWFkeURpYWxvZy5hcHBlbmRDaGlsZChyZWFkeVRleHQpXG4gICAgICAgIHJlYWR5RGlhbG9nLmFwcGVuZENoaWxkKHJlYWR5QnV0dG9uKVxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJlYWR5RGlhbG9nKVxuICAgICAgICByZWFkeURpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lU2NyZWVuU2V0dXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5pZCA9ICdsZWZ0JztcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHQuaWQgPSAncmlnaHQnO1xuICAgICAgICBjb25zdCBnYW1lYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lYXJlYS5pZCA9ICdnYW1lYXJlYSc7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWFyZWEpO1xuICAgICAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQocmlnaHQpO1xuICAgICAgICBjb25zdCBzaGlwYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBiYXIuaWQgPSAnc2hpcC1iYXInO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNoaXBiYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdBY3RpdmVCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZ2V0VGFyZ2V0KGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdmVSZWFkeSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIG1vdmVSZWFkeSA9IGdhbWVib2FyZC5vcHBvbmVudC5tYWtlTW92ZSh0aWxlLCBnYW1lYm9hcmQpXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0R1bW15QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1JlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZHJhd1NoaXBzKGdhbWVib2FyZCxnYW1lYm9hcmQuaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdIaWRkZW5SZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICAvL2RyYXcgdGhlIHRpbGVzIHRvIG1haW50YWluIHNpemUgY29uc2lzdGVuY3lcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGlkZGVuLnRleHRDb250ZW50ID0gXCJEYXRhIEVuY3J5cHRlZC4uLlwiXG4gICAgICAgIGhpZGRlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYm9hcmQnKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoaGlkZGVuKVxuICAgIH1cblxuICAgIGNvbnN0IHJlZnJlc2ggPSAoY3VycmVudCxwcmV2aW91cykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgY29uc3QgcmVjb25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jyk7XG4gICAgICAgIGFjdGl2ZUFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlY29uQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCFjdXJyZW50LmlzQ29tcCkge1xuICAgICAgICAgICAgZHJhd0FjdGl2ZUJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3UmVjb25Cb2FyZChjdXJyZW50LmdhbWVib2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcmF3RHVtbXlBY3RpdmVCb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd0hpZGRlblJlY29uQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1NoaXBzKHByZXZpb3VzLmdhbWVib2FyZCxwcmV2aW91cy5nYW1lYm9hcmQuaWQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgbW92ZVJlYWR5ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCBjb29yZFN0cmluZyA9IGdldEJhdHRsZXNoaXBDb29yZHMoY29vcmRzKTtcbiAgICAgICAgcHJpbnRTdHJpbmcoYENvbXB1dGVyIGF0dGFja3MgJHtjb29yZFN0cmluZ30uLi5gKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHByaW50U3RyaW5nKGAke2Nvb3JkU3RyaW5nfSBpcyBhICR7Z2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKX0hYCksNTAwKVxuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrc1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHN0YWxsTmV4dFR1cm4gPSBhd2FpdCBzdGFsbENvbXB1dGVyTW92ZSgpO1xuICAgICAgICBzdGFsbE5leHRUdXJuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxheWVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCBjb29yZFN0cmluZyA9IGdldEJhdHRsZXNoaXBDb29yZHMoY29vcmRzKTtcbiAgICAgICAgcHJpbnRTdHJpbmcoYCR7Z2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5vcHBvbmVudC5pZH0gYXR0YWNrcyAke2Nvb3JkU3RyaW5nfS4uLmApO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJpbnRTdHJpbmcoYCR7Y29vcmRTdHJpbmd9IGlzIGEgJHtnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pfSFgKSw1MDApXG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzaG93UGxheWVyc1R1cm4gPSBhd2FpdCBzaG93UGxheWVyUmVzdWx0KCk7XG4gICAgICAgIHNob3dQbGF5ZXJzVHVybigpO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN1bmtTaGlwID0gKHNoaXAsIG5hbWUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtuYW1lfSdzICR7c2hpcC5uYW1lfSBoYXMgYmVlbiBzdW5rIWApLDI1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dQbGF5ZXJSZXN1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllclJlc3VsdFRpbWVyID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJSZXN1bHRUaW1lclxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFsbENvbXB1dGVyTW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaW5pc2hlZCA9IGF3YWl0IHByb21pc2lmeShvbk5leHQsIDIwMDApO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gY29tcHV0ZXJGaW5pc2hlZFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9taXNpZnkgPSAoY2FsbGJhY2ssdGltZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGNhbGxiYWNrKSwgdGltZXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkLG9uYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBnYW1lYm9hcmQuZ2V0U2hpcHMoKTtcbiAgICAgICAgY29uc3QgcGxheXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmJvYXJkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uKHBsYXl6b25lLCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCksIHNoaXApXG4gICAgICAgICAgICBwbGF5em9uZS5hcHBlbmRDaGlsZChkcmF3U2hpcChkaW1lbnNpb25zKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1NoaXAgPSAoZGltZW5zaW9ucykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcC1tYXJrZXInKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxgdG9wOiR7ZGltZW5zaW9ucy50b3B9O2xlZnQ6JHtkaW1lbnNpb25zLmxlZnR9O3dpZHRoOiR7ZGltZW5zaW9ucy5sZW5ndGh9O2hlaWdodDoke2RpbWVuc2lvbnMuaGVpZ2h0fWApO1xuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uID0gKHpvbmUsIHNjYWxlICxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB6b25lLm9mZnNldFdpZHRoIC8gc2NhbGU7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMF0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMV0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLm9yaWVudGF0aW9uID8gc2hpcC5sZW5ndGggKiB1bml0IDogdW5pdCA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0IDogc2hpcC5sZW5ndGggKiB1bml0IDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICBsZW5ndGg6bGVuZ3RoKydweCcsXG4gICAgICAgICAgICBoZWlnaHQ6aGVpZ2h0KydweCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhcmdldCA9IChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIC8vIEZpbmQgdGhlIGNvb3JkaW5hdGVzIHRocm91Z2ggdGhlIGVsZW1lbnRzIHBvc2l0aW9uIGFtb25nc3QgaXRzIHNpYmxpbmdzXG4gICAgICAgIGNvbnN0IHkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJvYXJkLmNoaWxkcmVuLHBhcmVudCk7XG4gICAgICAgIGNvbnN0IHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbix0YXJnZXQpO1xuICAgICAgICByZXR1cm4gW3gseV1cbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyICcsIHdpbm5lciwgJyBpcyB2aWN0b3Jpb3VzIScpXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IHZpY3RvcnlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHZpY3RvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZpY3RvcnlUZXh0LnRleHRDb250ZW50ID0gYEdhbWUgb3ZlciEgJHt3aW5uZXJ9IGlzIHZpY3RvcmlvdXMhYDtcbiAgICAgICAgY29uc3QgdmljdG9yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLnRleHRDb250ZW50ID0gYE1haW4gTWVudWA7XG4gICAgICAgIHZpY3RvcnlNZW51LmNsYXNzTGlzdC5hZGQoJ3ZpY3RvcnktbWVudScpO1xuICAgICAgICB2aWN0b3J5VGV4dC5jbGFzc0xpc3QuYWRkKCd2aWN0b3J5LXRleHQnKTtcbiAgICAgICAgdmljdG9yeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbicpO1xuICAgICAgICB2aWN0b3J5TWVudS5hcHBlbmRDaGlsZCh2aWN0b3J5VGV4dCk7XG4gICAgICAgIHZpY3RvcnlNZW51LmFwcGVuZENoaWxkKHZpY3RvcnlCdXR0b24pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHZpY3RvcnlNZW51KTtcbiAgICAgICAgdmljdG9yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luKTtcbiAgICB9XG5cblxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXdTaGlwcyxcbiAgICAgICAgZ2FtZVNjcmVlblNldHVwLFxuICAgICAgICBzaGlwU2NyZWVuU2V0dXAsXG4gICAgICAgIHJlbmRlckNvbXB1dGVyTW92ZSxcbiAgICAgICAgZW5kR2FtZSxcbiAgICAgICAgZ2V0VGFyZ2V0LFxuICAgICAgICByZWZyZXNoLFxuICAgICAgICBzdW5rU2hpcCxcbiAgICAgICAgcmVuZGVyUGxheWVyTW92ZSxcbiAgICAgICAgZHJhd01haW5NZW51LFxuICAgICAgICBzaG93UmVhZHlTY3JlZW4sXG4gICAgICAgIHNldCBvbk5leHQobmV4dFR1cm4pIHtcbiAgICAgICAgICAgIG9uTmV4dCA9IG5leHRUdXJuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25XaW4od2luKSB7XG4gICAgICAgICAgICBvbldpbiA9IHdpbjtcbiAgICAgICAgfSxcbiAgICB9XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBsZXQgaGl0Q291bnRlciA9IDA7XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAhb3JpZW50YXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgU0hJUF9TSVpFUyA9IHtcbiAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudGVyKytcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoaGl0Q291bnRlciA+PSBTSElQX1NJWkVTW25hbWVdKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBwb3NpdGlvbjpbXSxcbiAgICAgICAgZ2V0IG9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9yaWVudGF0aW9uKG9yKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IG9yO1xuICAgICAgICB9LFxuICAgICAgICByb3RhdGUsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXllZE5hbWUgPSBuYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGFycmF5ZWROYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXllZE5hbWUuam9pbignJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gU0hJUF9TSVpFU1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10aWxlOiAgcmdiYSgyMDAsMjAwLDIwMCwwLjEpO1xuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcbiAgICAtLXRpbGUtaGl0OiByZ2JhKDI1NSwyMDAsMjAwLDAuOCk7XG4gICAgLS10aWxlLW1pc3M6IHJnYmEoMjAwLDIwMCwyNTUsMC44KTtcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcbiAgICAtLWJhY2tncm91bmQ6ICM1NTg4Nzc7XG4gICAgLS1tZW51LWJhY2s6ICM1NUFBOTk7XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1cblxuLmdldC1uYW1lOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmdldC1uYW1lIGZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmdldC1uYW1lIGZvcm0gbGFiZWwge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmdldC1uYW1lLXN1Ym1pdCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufVxuXG4udmljdG9yeS1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1tZW51LFxuLnZpY3RvcnktbWVudSxcbi5nZXQtbmFtZSxcbi5yZWFkeS1kaWFsb2cge1xuICAgIHdpZHRoOiBtYXgoMzUlLDQwMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2spO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlYWR5LWRpYWxvZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG59XG5cblxuLmdhbWUtdGl0bGUsXG4ucGxhY2Utc2hpcHMtdGl0bGUsXG4ucmVhZHktdGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uYnV0dG9uLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3NoaXAtYmFyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51LWJ1dHRvbixcbi5nZXQtbmFtZS1zdWJtaXQsXG4ucGxhY2Utc2hpcCxcbi5yb3RhdGUsXG4uc3VibWl0LXBsYWNlbWVudCxcbi5yZWFkeS1idXR0b24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFjayk7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbiNnYW1lYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgd2hpdGU7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4jcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2xlZnQgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbiNyaWdodCAuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jbGVmdCxcbiNyaWdodCB7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4udGlsZS5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3MpO1xufVxuXG4udGlsZS5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuXG4udGlsZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZmxleDoxO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRpbGUpO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLnRpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xufVxuXG5AbWVkaWEgKGhvdmVyOmhvdmVyKSB7XG4gICAgYnV0dG9uLnRpbGU6aG92ZXIge1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXIpO1xufVxufVxuXG4uaGlkZGVuLWJvYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgYm90dG9tOjA7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgd2lkdGg6NTAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbiNwbGF5ZXItb25lLFxuI3BsYXllci10d28ge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uc2hpcC1tYXJrZXIge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG5cbmJ1dHRvbi50aWxlLmF0dGFjayB7XG4gICAgYW5pbWF0aW9uOiBhdHRhY2stcHVsc2UgMC41cyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgYXR0YWNrLXB1bHNlIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtYXR0YWNrKSA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcbiAgICB9XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAzJSk7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gICAgYm9yZGVyOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuXG4ucGxhY2Vob2xkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLm91dC1vZi1ib3VuZHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnJlYWR5LWRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICNnYW1lYXJlYSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQix3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7OztJQUlJLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdFQUF3RTtJQUN4RSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7O0FBR0E7OztJQUdJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0VBQXdFO0lBQ3hFLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7Ozs7O0lBTUksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLE1BQU07SUFDTixVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSTtPQUNHLG1DQUFtQztBQUMxQztBQUNBOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxRQUFRO0lBQ1IsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsU0FBUztJQUNULG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQiw4Q0FBOEM7SUFDOUMsV0FBVztBQUNmOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0k7UUFDSSxxQ0FBcUM7SUFDekM7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS10aWxlOiAgcmdiYSgyMDAsMjAwLDIwMCwwLjEpO1xcbiAgICAtLXRpbGUtYXR0YWNrOiByZ2JhKDI1NSwxNTAsMTUwLDAuOSk7XFxuICAgIC0tdGlsZS1oaXQ6IHJnYmEoMjU1LDIwMCwyMDAsMC44KTtcXG4gICAgLS10aWxlLW1pc3M6IHJnYmEoMjAwLDIwMCwyNTUsMC44KTtcXG4gICAgLS10aWxlLWhvdmVyOiByZ2JhKDIzMCwyMDAsMjAwLDAuNCk7XFxuICAgIC0tYmFja2dyb3VuZDogIzU1ODg3NztcXG4gICAgLS1tZW51LWJhY2s6ICM1NUFBOTk7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxufVxcblxcbi5nZXQtbmFtZTo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uZ2V0LW5hbWUgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nZXQtbmFtZSBmb3JtIGxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmdldC1uYW1lLXN1Ym1pdCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnZpY3RvcnktbWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1tZW51LFxcbi52aWN0b3J5LW1lbnUsXFxuLmdldC1uYW1lLFxcbi5yZWFkeS1kaWFsb2cge1xcbiAgICB3aWR0aDogbWF4KDM1JSw0MDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlYWR5LWRpYWxvZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuXFxuLmdhbWUtdGl0bGUsXFxuLnBsYWNlLXNoaXBzLXRpdGxlLFxcbi5yZWFkeS10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYnV0dG9uLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2hpcC1iYXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51LWJ1dHRvbixcXG4uZ2V0LW5hbWUtc3VibWl0LFxcbi5wbGFjZS1zaGlwLFxcbi5yb3RhdGUsXFxuLnN1Ym1pdC1wbGFjZW1lbnQsXFxuLnJlYWR5LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2spO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNnYW1lYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNsZWZ0IC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuI3JpZ2h0IC5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jbGVmdCxcXG4jcmlnaHQge1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnRpbGUubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzcyk7XFxufVxcblxcbi50aWxlLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnRpbGUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmbGV4OjE7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlsZSk7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLnRpbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcXG59XFxuXFxuQG1lZGlhIChob3Zlcjpob3Zlcikge1xcbiAgICBidXR0b24udGlsZTpob3ZlciB7XFxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXIpO1xcbn1cXG59XFxuXFxuLmhpZGRlbi1ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIGJvdHRvbTowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuI3BsYXllci1vbmUsXFxuI3BsYXllci10d28ge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLnNoaXAtbWFya2VyIHtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbmJ1dHRvbi50aWxlLmF0dGFjayB7XFxuICAgIGFuaW1hdGlvbjogYXR0YWNrLXB1bHNlIDAuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhdHRhY2stcHVsc2Uge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWF0dGFjaykgO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAzJSk7XFxufVxcblxcbi5wbGFjZWhvbGRlciB7XFxuICAgIGJvcmRlcjowO1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5vdXQtb2YtYm91bmRzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucmVhZHktZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAjZ2FtZWFyZWEge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vbW9kdWxlcy9zY3JlZW4uanNcIjtcbmltcG9ydCB7IFBsYWNlbWVudEJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGFjZW1lbnRCb2FyZC5qc1wiO1xuaW1wb3J0IHsgUGxheWVyICwgQ29tcHV0ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgoKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXJzID0gW107XG4gICBcbiAgICBjb25zdCBzaW5nbGVJbml0aWFsaXNlID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoMTAsIG5hbWUpO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZCgxMCwgXCJDb21wdXRlclwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKG5hbWUsIHBsYXllck9uZUJvYXJkKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvID0gQ29tcHV0ZXIobmFtZSwgcGxheWVyVHdvQm9hcmQpO1xuICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyT25lKTtcbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllclR3byk7XG4gICAgICAgIHBsYXllck9uZUJvYXJkLm9wcG9uZW50ID0gcGxheWVyVHdvO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5vcHBvbmVudCA9IHBsYXllck9uZTtcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZG91YmxlSW5pdGlhbGlzZSA9IChuYW1lLCBzZWNvbmROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKDEwLCBuYW1lKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoMTAsIHNlY29uZE5hbWUpO1xuICAgICAgICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIobmFtZSwgcGxheWVyT25lQm9hcmQpO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd28gPSBQbGF5ZXIoc2Vjb25kTmFtZSwgcGxheWVyVHdvQm9hcmQpO1xuICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVyT25lKTtcbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllclR3byk7XG4gICAgICAgIHBsYXllck9uZUJvYXJkLm9wcG9uZW50ID0gcGxheWVyVHdvO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5vcHBvbmVudCA9IHBsYXllck9uZTtcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdGlhbGlzZUdhbWUgPSAoKSA9PiB7XG4gICAgICAgIFNjcmVlbi5nYW1lU2NyZWVuU2V0dXAoKTtcbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcnNbMV07XG4gICAgICAgIFNjcmVlbi5vbk5leHQgPSB0dXJuT3ZlcjtcbiAgICAgICAgbmV4dFBsYXllcigpO1xuICAgIH1cblxuICAgIGNvbnN0IHR1cm5PdmVyID0gKCkgPT4ge1xuICAgICAgICBpZihjdXJyZW50UGxheWVyLmdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuY2hlY2tGb3JBbGxTdW5rKCkgfHwgY3VycmVudFBsYXllci5nYW1lYm9hcmQuY2hlY2tGb3JBbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIFNjcmVlbi5lbmRHYW1lKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLm9wcG9uZW50LmlkKTtcbiAgICAgICAgICAgIHBsYXllcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuZXh0UGxheWVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBjdXJyZW50UGxheWVyO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdIDtcbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuaXNDb21wKSB7XG4gICAgICAgICAgICBTY3JlZW4ucmVmcmVzaChjdXJyZW50UGxheWVyLHByZXZpb3VzKTtcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIubWFrZU1vdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmICghY3VycmVudFBsYXllci5nYW1lYm9hcmQub3Bwb25lbnQuaXNDb21wKSB7XG4gICAgICAgICAgICBTY3JlZW4uc2hvd1JlYWR5U2NyZWVuKGN1cnJlbnRQbGF5ZXIscHJldmlvdXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2NyZWVuLnJlZnJlc2goY3VycmVudFBsYXllcixwcmV2aW91cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKHBsYXllciwgY2IpID0+IHtcbiAgICAgICAgLy8gY29uc3Qgb3Bwb25lbnRCb2FyZCA9IHBsYXllciA9PT0gcGxheWVyT25lID8gcGxheWVyVHdvLmdhbWVib2FyZCA6IHBsYXllck9uZS5nYW1lYm9hcmQ7XG4gICAgICAgIFNjcmVlbi5zaGlwU2NyZWVuU2V0dXAocGxheWVyLmlkKTtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gUGxhY2VtZW50Qm9hcmQocGxheWVyLmdhbWVib2FyZCwgY2IpO1xuICAgICAgICBwbGFjZW1lbnQucmVuZGVyUGxhY2VtZW50U2NyZWVuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJQbGFjZSA9IChwbGF5ZXIsIGNiKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG4gICAgICAgIHBsYXllci5wbGFjZSgpO1xuICAgICAgICBjYigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgU2NyZWVuLm9uV2luID0gKCkgPT4gU2NyZWVuLmRyYXdNYWluTWVudShzaW5nbGVJbml0aWFsaXNlLGRvdWJsZUluaXRpYWxpc2UpO1xuICAgICAgICBjb25zdCBhZnRlclBsYWNlID0gcGxheWVyc1sxXS5pc0NvbXAgPyBjb21wdXRlclBsYWNlIDogc2hpcFBsYWNlbWVudCA7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQocGxheWVyc1swXSwgKCkgPT4gYWZ0ZXJQbGFjZShwbGF5ZXJzWzFdLCBpbml0aWFsaXNlR2FtZSkpO1xuICAgIH1cblxuICAgIFNjcmVlbi5kcmF3TWFpbk1lbnUoc2luZ2xlSW5pdGlhbGlzZSxkb3VibGVJbml0aWFsaXNlKTtcblxufSkoKTsiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiR2FtZWJvYXJkIiwic2l6ZSIsImFyZ3VtZW50cyIsInNoaXBzIiwidHVybnMiLCJTcXVhcmUiLCJ4IiwieSIsInNoaXAiLCJoaXQiLCJjb29yZHMiLCJidWlsZFJvdyIsImluZGV4IiwiY29sdW1ucyIsImJ1aWxkU3F1YXJlIiwicm93cyIsImdldExlbmd0aCIsImdldFNxdWFyZSIsImdhbWVTcXVhcmUiLCJzcXVhcmVTdGF0dXMiLCJnZXRTaGlwcyIsImhpdFNxdWFyZSIsIkVycm9yIiwiY2hlY2tGb3JFbXB0eSIsInBsYWNlU2hpcCIsImhvcml6b250YWwiLCJheGlzIiwiY2hlY2tCb3VuZGFyaWVzIiwiY2hlY2tGb3JTaGlwcyIsIm9yaWVudGF0aW9uIiwicG9zaXRpb24iLCJjbGVhclNoaXAiLCJwb3AiLCJzcGxpY2UiLCJpbmRleE9mIiwicmFuZ2UiLCJldmVyeSIsImNoZWNrRm9yQWxsU3VuayIsImFsbENvbmRpdGlvbiIsImZvckVhY2giLCJpc1N1bmsiLCJjb25kaXRpb24iLCJjbGVhckFsbCIsImN1ciIsImNvb3JkIiwib3Bwb25lbnQiLCJTY3JlZW4iLCJTaGlwIiwiU0hJUF9JTUFHRVMiLCJQbGFjZW1lbnRCb2FyZCIsImdhbWVib2FyZCIsIm9uRmluaXNoIiwicGxhY2luZyIsInNoaXBCYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FycmllciIsInBsYWNlZCIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwic2V0U2hpcHMiLCJPYmplY3QiLCJrZXlzIiwibmV3U2hpcCIsImRyYXdQbGFjZW1lbnRCb2FyZCIsInpvbmVEb20iLCJib2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJvd0NvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsImoiLCJ0aWxlIiwic2V0QXR0cmlidXRlIiwicmVuZGVyUGxhY2VtZW50U2NyZWVuIiwiZHJhd05leHRTaGlwQnV0dG9uIiwibmV4dFNoaXAiLCJtYWtlTmV4dFNoaXBCdXR0b24iLCJidXR0b24iLCJyZW5kZXJTdWJtaXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJtYWtlU2hpcCIsInNoaXBQbGFjZW1lbnQiLCJzdWJtaXQiLCJjbGVhclNoaXBCYXIiLCJleGlzdGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwia2V5IiwiYnV0dG9uVGV4dCIsIlN0cmluZyIsInRvVXBwZXJDYXNlIiwidGV4dENvbnRlbnQiLCJyb3RhdGUiLCJjcmVhdGVUZW1wbGF0ZSIsInRlbXBsYXRlIiwibmFtZSIsInN0eWxlIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRJbWFnZSIsImNsZWFyUm90YXRlQnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZVJvdGF0ZUJ1dHRvbiIsInRpbGVzIiwicmVuZGVyU2hpcCIsIm9mZnNldFdpZHRoIiwiaWxsZWdhbFNxdWFyZXMiLCJmaW5kSWxsZWdhbFNxdWFyZXMiLCJyZW1vdmVNYXJrZXIiLCJyb3RhdGVTaGlwIiwiaG92ZXJJbWFnZSIsImluY2x1ZGVzIiwicmVtb3ZlIiwiZSIsInBsYWNlVGVtcGxhdGUiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib29iTW92ZSIsIl9sb29wIiwic3BhY2VTZXQiLCJTZXQiLCJpbGxNb3ZlcyIsImdldE9jY3VwaWVkU3BhY2VzIiwiYXJyYXlQb2ludGVyIiwic3BhY2UiLCJuZXh0U3BhY2UiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfcmV0IiwibWFya2VyIiwic3BhY2VzIiwiY3VycmVudENvb3JkIiwiaW1hZ2UiLCJ1bml0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsIm1vdmVTaGlwIiwiZ2V0VGFyZ2V0IiwiY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbiIsInpJbmRleCIsImlubmVySFRNTCIsInN1Ym1pdEJ1dHRvbiIsImVsZW1lbnQiLCJpbWciLCJldmVudCIsInBvcyIsImNvbnRhaW5zIiwiUGxheWVyIiwibWFrZU1vdmUiLCJvcHBvbmVudEJvYXJkIiwibW92ZSIsIl90eXBlb2YiLCJzdW5rU2hpcCIsInJlbmRlclBsYXllck1vdmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwbGF5aW5nIiwiaXNDb21wIiwiQ29tcHV0ZXIiLCJjdXJyZW50U3VjY2VzcyIsIm1ha2VTaGlwcyIsInBsYWNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZXJyIiwicGxheVRpbGUiLCJnZW5lcmF0ZVJhbmRvbUNvb3JkcyIsImJvdW5kYXJ5IiwicmFuWCIsInJhblkiLCJlZHVjYXRlZE1vdmUiLCJkdW1iTW92ZSIsIm1vdmVUYWtlbiIsInBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MiLCJyZW5kZXJDb21wdXRlck1vdmUiLCJ0YXJnZXRTaGlwIiwicG90ZW50aWFsTW92ZXMiLCJuZXh0TW92ZSIsInJhbmRvbUNob2ljZSIsImhlYWRpbmciLCJmbGF0IiwiYXR0YWNrIiwicmVjYWxjdWxhdGVQb3RlbnRpYWxNb3ZlcyIsIm5ld0hlYWRpbmciLCJzdGlsbFZhbGlkIiwiZmlsdGVyIiwiY3VycmVudFRhcmdldCIsInNoaWZ0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIk9wIiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcHBseSIsImJhdHRsZXNoaXBJbWFnZSIsIm9uTmV4dCIsIm9uV2luIiwibW92ZVJlYWR5IiwiZHJhd01haW5NZW51Iiwic2luZ2xlSW5pdGlhbGlzZSIsImRvdWJsZUluaXRpYWxpc2UiLCJib2R5IiwibWVudVBhbiIsImdhbWVUaXRsZSIsImJ1dHRvbkJhciIsInN0YXJ0U2luZ2xlIiwic3RhcnREb3VibGUiLCJnZXROYW1lIiwic2Vjb25kTmFtZSIsImNiIiwic3RyaW5nIiwibmFtZURpYWxvZyIsInNob3ciLCJuYW1lRm9ybSIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsIm5hbWVTdWJtaXQiLCJyZXF1aXJlZCIsInByZXZlbnREZWZhdWx0IiwicHJpbnRTdHJpbmciLCJ0b1ByaW50IiwiZ2V0QmF0dGxlc2hpcENvb3JkcyIsInhMZXR0ZXIiLCJmcm9tQ2hhckNvZGUiLCJzaGlwU2NyZWVuU2V0dXAiLCJ0aXRsZSIsImdhbWVhcmVhIiwic2hpcGJhciIsInNob3dSZWFkeVNjcmVlbiIsInBsYXllciIsInJlYWR5RGlhbG9nIiwicmVhZHlUZXh0IiwicmVhZHlCdXR0b24iLCJyZWZyZXNoIiwic2hvd01vZGFsIiwiZ2FtZVNjcmVlblNldHVwIiwicmlnaHQiLCJkcmF3QWN0aXZlQm9hcmQiLCJkcmF3RHVtbXlBY3RpdmVCb2FyZCIsImRyYXdSZWNvbkJvYXJkIiwiZHJhd1NoaXBzIiwiZHJhd0hpZGRlblJlY29uQm9hcmQiLCJoaWRkZW4iLCJjdXJyZW50IiwicHJldmlvdXMiLCJhY3RpdmVBcmVhIiwicmVjb25BcmVhIiwiX3JlZiIsIl9jYWxsZWUiLCJhY3RpdmVab25lIiwicm93IiwiY2VsbCIsImNvb3JkU3RyaW5nIiwicmVtb3ZlQXR0YWNrTWFya2VyIiwic3RhbGxOZXh0VHVybiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjaGlsZHJlbiIsInByb21pc2lmeSIsInNldFRpbWVvdXQiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29tcHV0ZXJGaW5pc2hlZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImNhbGxiYWNrIiwidGltZXIiLCJvbmJvYXJkIiwicGxheXpvbmUiLCJkaW1lbnNpb25zIiwiY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24iLCJkcmF3U2hpcCIsInpvbmUiLCJzY2FsZSIsInBhcmVudCIsIkFycmF5IiwiZW5kR2FtZSIsIndpbm5lciIsInZpY3RvcnlNZW51IiwidmljdG9yeVRleHQiLCJ2aWN0b3J5QnV0dG9uIiwibmV4dFR1cm4iLCJ3aW4iLCJoaXRDb3VudGVyIiwiU0hJUF9TSVpFUyIsIm9yIiwiYXJyYXllZE5hbWUiLCJzcGxpdCIsIkdhbWUiLCJjdXJyZW50UGxheWVyIiwicGxheWVycyIsInBsYXllck9uZUJvYXJkIiwicGxheWVyVHdvQm9hcmQiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJzdGFydEdhbWUiLCJpbml0aWFsaXNlR2FtZSIsInR1cm5PdmVyIiwibmV4dFBsYXllciIsInBsYWNlbWVudCIsImNvbXB1dGVyUGxhY2UiLCJhZnRlclBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==