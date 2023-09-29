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
        nameDialog.parentNode.removeChild(nameDialog);
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
            printString("".concat(gameboard.opponent.id, " attacks ").concat(coordString, "..."));
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

.main-menu,
.victory-menu,
.get-name {
    width: max(35%,400px);
    background-color: var(--menu-back);
    border-radius: 5px;
    border: 5px solid white;
    padding: 2rem;
    color: white;
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
.place-ships-title {
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
.submit-placement {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,iCAAiC;IACjC,kCAAkC;IAClC,mCAAmC;IACnC,qBAAqB;IACrB,oBAAoB;IACpB,wEAAwE;AAC5E;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,qBAAqB;IACrB,kCAAkC;IAClC,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,kCAAkC;IAClC,kBAAkB;IAClB,mBAAmB;IACnB,wEAAwE;IACxE,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,wEAAwE;IACxE,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;;;;;IAKI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,wEAAwE;AAC5E;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,MAAM;IACN,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,KAAK;IACL,QAAQ;IACR,MAAM;IACN,OAAO;IACP,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,8CAA8C;IAC9C,WAAW;AACf;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI;QACI,qCAAqC;IACzC;IACA;QACI,6BAA6B;IACjC;AACJ;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":[":root {\n    --tile:  rgba(200,200,200,0.1);\n    --tile-attack: rgba(255,150,150,0.9);\n    --tile-hit: rgba(255,200,200,0.8);\n    --tile-miss: rgba(200,200,255,0.8);\n    --tile-hover: rgba(230,200,200,0.4);\n    --background: #558877;\n    --menu-back: #55AA99;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\nbody {\n    height: 100dvh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--background);\n}\n\n.get-name::backdrop {\n    background-color: #000;\n}\n\n.get-name form {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\n.get-name form label {\n    grid-column: 1 / 2;\n    text-align: right;\n}\n\n.get-name-submit {\n    grid-column: 1 / 3;\n}\n\n.main-menu,\n.victory-menu,\n.get-name {\n    width: max(35%,400px);\n    background-color: var(--menu-back);\n    border-radius: 5px;\n    border: 5px solid white;\n    padding: 2rem;\n    color: white;\n}\n\ninput {\n    border: 2px dashed white;\n    background-color: var(--menu-back);\n    border-radius: 5px;\n    padding: .5rem 1rem;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: white;\n    margin: 1rem;\n    grid-column: 2 / 3;\n}\n\n\n.game-title,\n.place-ships-title {\n    color: white;\n    text-align: center;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 3rem;\n}\n\n.button-bar {\n    display: flex;\n    justify-content: center;\n}\n\n#ship-bar {\n    color: white;\n}\n\n.menu-button,\n.get-name-submit,\n.place-ship,\n.rotate,\n.submit-placement {\n    border: 2px solid white;\n    background-color: var(--menu-back);\n    margin: 1rem;\n    border-radius: 5px;\n    padding: 1rem;\n    color: white;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n#gamearea {\n    display: flex;\n    border: 2px dashed white;\n    margin: 1rem;\n}\n\n#right {\n    position: relative;\n}\n\n#left .ship {\n    background-color: blue;\n}\n\n#right .ship {\n    background-color: red;\n}\n\n#left,\n#right {\n    margin: 2rem;\n    position:relative;\n    border: 2px solid white;\n}\n\n.tile.miss {\n    background-color: var(--tile-miss);\n}\n\n.tile.hit {\n    background-color: var(--tile-hit);\n}\n\n.row {\n    display:flex;\n}\n\n.tile {\n    height: 100%;\n    width: 100%;\n    padding: 1rem;\n    flex:1;\n    z-index: 2;\n    margin: 0;\n    background: var(--tile);\n    border: 0;\n}\n\n.tile {\n    background-color: var(--tile);\n}\n\nbutton.tile:hover {\n    background-color: var(--tile-hover);\n}\n\n.hidden-board {\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    width:50%;\n    height: fit-content;\n    padding: 1rem;\n    background-color: var(--tile-hit);\n    text-align: center;\n    font-family: 'Courier New', Courier, monospace;\n    color:white;\n}\n\n#player-one,\n#player-two {\n    position:relative;\n}\n\n.ship-marker {\n    position:absolute;\n    background-color: aqua;\n}\n\nbutton.tile.attack {\n    animation: attack-pulse 0.5s infinite;\n    animation-direction: alternate;\n}\n\n@keyframes attack-pulse {\n    0% {\n        background-color: var(--tile-attack) ;\n    }\n    100% {\n        background-color: var(--tile);\n    }\n}\n\nbutton:active {\n    transform: scale(103%);\n}\n\n.placeholder {\n    border:0;\n    margin:0;\n    padding:0;\n}\n\n.placeholder:hover {\n    background-color: rgb(255, 255, 255);\n}\n\n.out-of-bounds {\n    background-color: red;\n}\n\n.ready-dialog::backdrop {\n    background-color: #000000;\n}\n\n@media (max-width: 800px) {\n    #gamearea {\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
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
    if (currentPlayer.gameboard.opponent.gameboard.checkForAllSunk()) {
      _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].endGame(currentPlayer.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFFBQVEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxTQUFTLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1B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QUlzUixNQUFNLEVBQUVwQixFQUFFLEVBQUs7SUFDbEM7SUFDQTFTLDBEQUFNLENBQUN5VCxlQUFlLENBQUNLLE1BQU0sQ0FBQ3hYLEVBQUUsQ0FBQztJQUNqQyxJQUFNOGMsU0FBUyxHQUFHalosMEVBQWMsQ0FBQzJULE1BQU0sQ0FBQzFULFNBQVMsRUFBRXNTLEVBQUUsQ0FBQztJQUN0RDBHLFNBQVMsQ0FBQ3JYLHFCQUFxQixDQUFDLENBQUM7RUFDckMsQ0FBQztFQUVELElBQU1zWCxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUl2RixNQUFNLEVBQUVwQixFQUFFLEVBQUs7SUFDbEN2TCxPQUFPLENBQUNDLEdBQUcsQ0FBQzBNLE1BQU0sQ0FBQztJQUNuQkEsTUFBTSxDQUFDcE0sS0FBSyxDQUFDLENBQUM7SUFDZGdMLEVBQUUsQ0FBQyxDQUFDO0VBQ1IsQ0FBQztFQUVELElBQU1zRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0lBQ3BCaFosMERBQU0sQ0FBQzZSLEtBQUssR0FBRztNQUFBLE9BQU03UiwwREFBTSxDQUFDK1IsWUFBWSxDQUFDQyxnQkFBZ0IsRUFBQ0MsZ0JBQWdCLENBQUM7SUFBQTtJQUMzRSxJQUFNcUgsVUFBVSxHQUFHWCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNyUixNQUFNLEdBQUcrUixhQUFhLEdBQUc3VyxhQUFhO0lBQ3BFQSxhQUFhLENBQUNtVyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFBQSxPQUFNVyxVQUFVLENBQUNYLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRU0sY0FBYyxDQUFDO0lBQUEsRUFBQztFQUMzRSxDQUFDO0VBRURqWiwwREFBTSxDQUFDK1IsWUFBWSxDQUFDQyxnQkFBZ0IsRUFBQ0MsZ0JBQWdCLENBQUM7QUFFMUQsQ0FBQyxDQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BsYWNlbWVudEJvYXJkLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoc2l6ZSxpZCA9IG51bGwpID0+IHtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGNvbnN0IHR1cm5zID0gW107XG4gICAgY29uc3QgU3F1YXJlID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hpcDogbnVsbCxcbiAgICAgICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgICAgICBjb29yZHM6IFt4LHldLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRSb3cgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goU3F1YXJlKGksaW5kZXgpKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG5cbiAgICBjb25zdCBidWlsZFNxdWFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgcm93cy5wdXNoKGJ1aWxkUm93KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVTcXVhcmVbeV1beF07XG4gICAgfVxuXG4gICAgY29uc3Qgc3F1YXJlU3RhdHVzID0gKHgseSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQgJiYgZ2FtZVNxdWFyZVt5XVt4XS5zaGlwKSByZXR1cm4gJ2hpdCc7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLmhpdCkgcmV0dXJuICdtaXNzJztcbiAgICAgICAgcmV0dXJuICdlbXB0eSdcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVTcXVhcmUgPSBidWlsZFNxdWFyZShzaXplKTtcblxuICAgIGNvbnN0IGhpdFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lU3F1YXJlW3ldIHx8ICFnYW1lU3F1YXJlW3ldW3hdKSB0aHJvdyBuZXcgRXJyb3IoXCJPdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQpIHRocm93IG5ldyBFcnJvcihcIlNxdWFyZSBhbHJlYWR5IGhpdFwiKTtcbiAgICAgICAgZ2FtZVNxdWFyZVt5XVt4XS5oaXQgPSB0cnVlO1xuICAgICAgICB0dXJucy5wdXNoKFt4LHldKTtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uc2hpcCkge1xuICAgICAgICAgICAgZ2FtZVNxdWFyZVt5XVt4XS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVTcXVhcmVbeV1beF0uc2hpcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGNoZWNrRm9yRW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0dXJucy5sZW5ndGggPCAoc2l6ZSpzaXplKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCx4LHksaG9yaXpvbnRhbCkgPT4ge1xuICAgICAgICBjb25zdCBheGlzID0gaG9yaXpvbnRhbCA/IHggOiB5IDtcbiAgICAgICAgaWYgKCFjaGVja0JvdW5kYXJpZXMoYXhpcyxzaGlwLmxlbmd0aCkpIHRocm93IG5ldyBFcnJvcihcIlNoaXAgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgaWYgKCFjaGVja0ZvclNoaXBzKHNoaXAubGVuZ3RoLHgseSxob3Jpem9udGFsKSkgdGhyb3cgbmV3IEVycm9yKFwiU3BhY2Ugb2NjdXBpZWRcIik7XG4gICAgICAgIHNoaXAub3JpZW50YXRpb24gPSBob3Jpem9udGFsO1xuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgc2hpcC5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVt5XVt4K2ldLnNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ucHVzaChnYW1lU3F1YXJlW3ldW3graV0uY29vcmRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVt5K2ldW3hdLnNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ucHVzaChnYW1lU3F1YXJlW3kraV1beF0uY29vcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IHNoaXAucG9zaXRpb24ucG9wKCk7XG4gICAgICAgICAgICBnYW1lU3F1YXJlW2Nvb3Jkc1sxXV1bY29vcmRzWzBdXS5zaGlwID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5zcGxpY2Uoc2hpcHMuaW5kZXhPZihzaGlwKSwxKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0ZvclNoaXBzID0gKGxlbmd0aCx4LHksaG9yaXpvbnRhbCkgPT4ge1xuICAgICAgICAvL0J1aWxkcyBhbiBhcnJheSBvZiBzcGFjZXMgdGhlIHNoaXAgd2lsbCBvY2N1cHlcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgbGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHJhbmdlLnB1c2goZ2FtZVNxdWFyZVt5XVt4K2ldLnNoaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZS5wdXNoKGdhbWVTcXVhcmVbeStpXVt4XS5zaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL1JldHVybnMgdHJ1ZSBpZiBhbGwgYXJlIGVtcHR5XG4gICAgICAgIHJldHVybiByYW5nZS5ldmVyeShzaGlwID0+IHNoaXAgPT09IG51bGwpO1xuICAgIH1cblxuXG4gICAgY29uc3QgY2hlY2tCb3VuZGFyaWVzID0gKGF4aXMsbGVuZ3RoKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlzICsgbGVuZ3RoID4gc2l6ZSA/IGZhbHNlIDogdHJ1ZTsgXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JBbGxTdW5rID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhbGxDb25kaXRpb24gPSBbXVxuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBhbGxDb25kaXRpb24ucHVzaChzaGlwLmlzU3VuaygpKSk7XG4gICAgICAgIHJldHVybiBhbGxDb25kaXRpb24uZXZlcnkoY29uZGl0aW9uID0+IGNvbmRpdGlvbiA9PT0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNoaXBzLmxlbmd0aCA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1ciA9IHNoaXBzLnBvcCgpO1xuICAgICAgICAgICAgY3VyLnBvc2l0aW9uLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2FtZVNxdWFyZVtjb29yZFsxXV1bY29vcmRbMF1dLnNoaXAgPSBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0TGVuZ3RoLFxuICAgICAgICBoaXRTcXVhcmUsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgY2xlYXJTaGlwLFxuICAgICAgICBjaGVja0ZvckFsbFN1bmssXG4gICAgICAgIGdldFNxdWFyZSxcbiAgICAgICAgY2hlY2tGb3JFbXB0eSxcbiAgICAgICAgZ2V0U2hpcHMsXG4gICAgICAgIGNsZWFyQWxsLFxuICAgICAgICBzcXVhcmVTdGF0dXMsXG4gICAgICAgIG9wcG9uZW50Om51bGwsXG4gICAgICAgIGlkLFxuICAgIH1cblxufTsiLCJpbXBvcnQgU2NyZWVuIGZyb20gXCIuL3NjcmVlbi5qc1wiXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiXG5pbXBvcnQgeyBTSElQX0lNQUdFUyB9IGZyb20gXCIuL3NjcmVlbi5qc1wiXG5cbmV4cG9ydCBjb25zdCBQbGFjZW1lbnRCb2FyZCA9IChnYW1lYm9hcmQsIG9uRmluaXNoKSA9PiB7XG4gICAgbGV0IHBsYWNpbmcgPSBmYWxzZTtcbiAgICBjb25zdCBzaGlwQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtYmFyJyk7XG5cbiAgICBjb25zdCBzaGlwcyA9IHtcbiAgICAgICAgY2Fycmllcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6NSxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYmF0dGxlc2hpcDp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6NCxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgY3J1aXNlcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MyxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWFyaW5lOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDozLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95ZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjIsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKHNoaXApO1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLHNoaXBzW3NoaXBdLmNvb3Jkc1swXSxzaGlwc1tzaGlwXS5jb29yZHNbMV0sc2hpcHNbc2hpcF0uaG9yaXpvbnRhbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1BsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuaWQgPSBgJHtqfS0ke2l9YDtcbiAgICAgICAgICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdwb3NpdGlvbjpyZWxhdGl2ZTsnKVxuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgZHJhd1BsYWNlbWVudEJvYXJkKCk7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFNoaXAgPSBtYWtlTmV4dFNoaXBCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV4dFNoaXAgPyBuZXh0U2hpcCA6IHJlbmRlclN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICBpZiAobmV4dFNoaXApIHtidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHNoaXBCYXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBtYWtlU2hpcChidXR0b24pO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwLHNoaXBzW3NoaXBdKTtcbiAgICAgICAgfSk7fSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcEJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Utc2hpcCcpO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIGV4aXN0aW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXhpc3RpbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2tleV0ucGxhY2VkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBTdHJpbmcoJ1BsYWNlICcrIGtleSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IGtleTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoYnV0dG9uLmlkKTtcbiAgICAgICAgc2hpcC5yb3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUZW1wbGF0ZSA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRlbXBsYXRlLmlkID0gc2hpcC5uYW1lO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtTSElQX0lNQUdFU1tzaGlwLm5hbWVdfWA7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgc2hpcEJhci5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiBzaGlwQmFyLnJlbW92ZUNoaWxkKGJ1dHRvbikpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JPVEFURSc7XG4gICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAoc2hpcCkgPT4ge1xuICAgICAgICBwbGFjaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlKHNoaXApO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgcmVuZGVyU2hpcCh0ZW1wbGF0ZSx0aWxlc1swXS5vZmZzZXRXaWR0aCxzaGlwKTtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBmaW5kSWxsZWdhbFNxdWFyZXMoc2hpcCk7XG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IGNyZWF0ZVJvdGF0ZUJ1dHRvbigpO1xuICAgICAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU1hcmtlcih0ZW1wbGF0ZSk7XG4gICAgICAgICAgICByb3RhdGVTaGlwKHNoaXApO1xuICAgICAgICB9KVxuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICBob3ZlckltYWdlKHRpbGUsdGVtcGxhdGUpO1xuICAgICAgICAgICAgaWYgKGlsbGVnYWxTcXVhcmVzLmluY2x1ZGVzKHRpbGUuaWQpKSB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdpbGxlZ2FsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2lsbGVnYWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhY2VUZW1wbGF0ZShlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpLHRlbXBsYXRlLHNoaXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRJbGxlZ2FsU3F1YXJlcyA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGlsbGVnYWxTcXVhcmVzID0gW107XG4gICAgICAgIC8vIEZpbmQgb3V0IG9mIGJvdW5kIHNxdWFyZXNcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGdhbWVib2FyZC5nZXRMZW5ndGgoKSA7IGkrKyApIHtcbiAgICAgICAgICAgIGZvciAoIGxldCBqID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpIC0gKHNoaXAubGVuZ3RoIC0gMSk7IGogPCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb29iTW92ZSA9IHNoaXAub3JpZW50YXRpb24gPyBbaixpXSA6IFtpLGpdIDtcbiAgICAgICAgICAgICAgICBpbGxlZ2FsU3F1YXJlcy5wdXNoKG9vYk1vdmUuam9pbignLScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL0dldCBzcGFjZXMgdGhhdCBhcmUgb2JzdHJ1Y3RlZCBieSBhbm90aGVyIHNoaXBcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNoaXBzKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZVNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGlmICghc2hpcHNba2V5XS5wbGFjZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgaWxsTW92ZXMgPSBnZXRPY2N1cGllZFNwYWNlcyhzaGlwc1trZXldKTtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5UG9pbnRlciA9IHNoaXAub3JpZW50YXRpb24gPyAwIDogMTsgXG4gICAgICAgICAgICBpbGxNb3Zlcy5mb3JFYWNoKChzcGFjZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNwYWNlU2V0LmFkZChzcGFjZS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIGZvciggbGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3BhY2UgPSBbLi4uc3BhY2VdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0U3BhY2VbYXJyYXlQb2ludGVyXSA9IG5leHRTcGFjZVthcnJheVBvaW50ZXJdIC0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTcGFjZVthcnJheVBvaW50ZXJdIDwgMCkgY29udGludWUgOyBcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VTZXQuYWRkKG5leHRTcGFjZS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3BhY2VTZXQuZm9yRWFjaCgoY29vcmQpID0+IGlsbGVnYWxTcXVhcmVzLnB1c2goY29vcmQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWxsZWdhbFNxdWFyZXM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0T2NjdXBpZWRTcGFjZXMgPSAobWFya2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYWNlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgYXJyYXlQb2ludGVyID0gbWFya2VyLmhvcml6b250YWwgPyAwIDogMSA7XG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBtYXJrZXIubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvb3JkID0gWy4uLm1hcmtlci5jb29yZHNdO1xuICAgICAgICAgICAgY3VycmVudENvb3JkW2FycmF5UG9pbnRlcl0gPSBjdXJyZW50Q29vcmRbYXJyYXlQb2ludGVyXSArIGk7XG4gICAgICAgICAgICBzcGFjZXMuYWRkKGN1cnJlbnRDb29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlcztcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTaGlwID0gKGltYWdlLHVuaXQsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHNoaXAub3JpZW50YXRpb24gPyAodW5pdCpzaGlwLmxlbmd0aCkrJ3B4JyA6IHVuaXQrJ3B4JztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgKydweCc6ICh1bml0KnNoaXAubGVuZ3RoKSsncHgnO1xuICAgICAgICBpbWFnZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlTWFya2VyID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVwbGFjZVdpdGgodGlsZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJvdGF0ZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLnJvdGF0ZSgpO1xuICAgICAgICBzaGlwUGxhY2VtZW50KHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmVTaGlwID0gKHRlbXBsYXRlLHNoaXApID0+IHtcbiAgICAgICAgaWYgKHBsYWNpbmcpIHJldHVybjtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICBzaGlwc1tzaGlwLm5hbWVdLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgICBzaGlwUGxhY2VtZW50KHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlVGVtcGxhdGUgPSAodGlsZSx0ZW1wbGF0ZSxzaGlwKSA9PiB7XG4gICAgICAgIGNsZWFyUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IFNjcmVlbi5nZXRUYXJnZXQodGlsZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbih0aWxlLm9mZnNldFdpZHRoLGNvb3Jkcyk7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0uY29vcmRzID0gY29vcmRzO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0uaG9yaXpvbnRhbCA9IHNoaXAub3JpZW50YXRpb247XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5wbGFjZWQgPSB0cnVlO1xuICAgICAgICB0ZW1wbGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IG1vdmVTaGlwKGUudGFyZ2V0LmNsb3Nlc3QoJy5wbGFjZWhvbGRlcicpLHNoaXApKTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICB0aWxlLnJlcGxhY2VXaXRoKHRpbGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfSlcbiAgICAgICAgcGxhY2luZyA9IGZhbHNlO1xuICAgICAgICBkcmF3TmV4dFNoaXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uID0gKHVuaXQsY29vcmRzKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSAoY29vcmRzWzBdKnVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IHRvcCA9IChjb29yZHNbMV0qdW5pdCkrJ3B4JztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICB0b3BcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgc2hpcEJhci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtcGxhY2VtZW50Jyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTVUJNSVQnO1xuICAgICAgICByZXR1cm4gc3VibWl0QnV0dG9uXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTaGlwcygpO1xuICAgICAgICBvbkZpbmlzaCgpO1xuICAgICAgICBzaGlwQmFyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuXG4gICAgY29uc3QgaG92ZXJJbWFnZSA9IChlbGVtZW50LGltZykgPT4ge1xuICAgICAgICBjb25zdCBldmVudCA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJyk7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBTY3JlZW4uZ2V0VGFyZ2V0KHRpbGUpO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbih0aWxlLm9mZnNldFdpZHRoLGNvb3Jkcyk7XG4gICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaWxsZWdhbCcpKSB7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ291dC1vZi1ib3VuZHMnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ291dC1vZi1ib3VuZHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSBwb3MudG9wO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSBwb3MubGVmdDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclBsYWNlbWVudFNjcmVlbixcbiAgICB9XG59IiwiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9zY3JlZW4uanNcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoaWQsZ2FtZWJvYXJkKSA9PiB7XG5cbiAgICBcbiAgICBjb25zdCBtYWtlTW92ZSA9ICh0aWxlLCBvcHBvbmVudEJvYXJkKSA9PiB7XG4gICAgICAgIGlmICghdGlsZSkgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgdGlsZS5cIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gb3Bwb25lbnRCb2FyZC5oaXRTcXVhcmUodGlsZVswXSx0aWxlWzFdKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW92ZSA9PT0gJ29iamVjdCcgJiYgbW92ZS5pc1N1bmsoKSkgU2NyZWVuLnN1bmtTaGlwKG1vdmUsIG9wcG9uZW50Qm9hcmQuaWQpOyBcbiAgICAgICAgICAgIFNjcmVlbi5yZW5kZXJQbGF5ZXJNb3ZlKHRpbGUsb3Bwb25lbnRCb2FyZCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5aW5nOiBmYWxzZSxcbiAgICAgICAgaXNDb21wOiBmYWxzZSxcbiAgICAgICAgaWQsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgbWFrZU1vdmVcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IENvbXB1dGVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRTdWNjZXNzID0gW107XG5cbiAgICBjb25zdCBtYWtlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJyksXG4gICAgICAgICAgICBiYXR0bGVzaGlwOiBTaGlwKCdiYXR0bGVzaGlwJyksXG4gICAgICAgICAgICBjcnVpc2VyOiBTaGlwKCdjcnVpc2VyJyksXG4gICAgICAgICAgICBzdWJtYXJpbmU6IFNoaXAoJ3N1Ym1hcmluZScpLFxuICAgICAgICAgICAgZGVzdHJveWVyOiBTaGlwKCdkZXN0cm95ZXInKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IG1ha2VTaGlwcygpO1xuICAgICAgICBPYmplY3Qua2V5cyhzaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5nZXRMZW5ndGgoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMikgPyB0cnVlIDogZmFsc2UgO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcHNbc2hpcF0seCx5LG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbm5vdCBwbGFjZSBhdDogXCIsIHgsIHksIFwiIHdpdGggXCIsIG9yaWVudGF0aW9uLFwiIG9yaWVudGF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgICAgIFxuICAgIGNvbnN0IHBsYXlUaWxlID0gKHRpbGUpID0+IHtcbiAgICAgICAgaWYgKCF0aWxlKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBoaXQgPSBnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLmhpdFNxdWFyZSh0aWxlWzBdLHRpbGVbMV0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoaXQgPT09ICdvYmplY3QnICYmIGhpdC5pc1N1bmsoKSkgU2NyZWVuLnN1bmtTaGlwKGhpdCwgZ2FtZWJvYXJkLm9wcG9uZW50LmlkKTsgXG4gICAgICAgICAgICBpZiAoaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kYXJ5ID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBjb25zdCByYW5YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgY29uc3QgcmFuWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIHJldHVybiBbcmFuWCxyYW5ZXTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRTdWNjZXNzLmxlbmd0aCkge1xuICAgICAgICAgICAgZWR1Y2F0ZWRNb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkdW1iTW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHVtYk1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb3ZlVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgaWYgKCFnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLmNoZWNrRm9yRW1wdHkoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTW9yZSBTcGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIW1vdmVUYWtlbikge1xuICAgICAgICAgICAgY29vcmRzID0gZ2VuZXJhdGVSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgIG1vdmVUYWtlbiA9IHBsYXlUaWxlKGNvb3Jkcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzKGNvb3Jkcyxtb3ZlVGFrZW4pO1xuICAgICAgICB9XG4gICAgICAgIFNjcmVlbi5yZW5kZXJDb21wdXRlck1vdmUoY29vcmRzLGdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldFNoaXAgPSAoY29vcmRzLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbE1vdmVzID0gW1swLDFdLFswLC0xXSxbMSwwXSxbLTEsMF1dO1xuXG4gICAgICAgIGNvbnN0IG5leHRNb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tQ2hvaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG90ZW50aWFsTW92ZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBwb3RlbnRpYWxNb3Zlcy5zcGxpY2UocmFuZG9tQ2hvaWNlLDEpLmZsYXQoKTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBbY29vcmRzWzBdICsgaGVhZGluZ1swXSxjb29yZHNbMV0gKyBoZWFkaW5nWzFdXTtcbiAgICAgICAgICAgIHJldHVybiAge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2s6bW92ZSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZzpoZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzID0gKGhlYWRpbmcsYXR0YWNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdIZWFkaW5nID0gW2Nvb3Jkc1swXSAtIGF0dGFja1swXSxjb29yZHNbMV0gLSBhdHRhY2tbMV1dO1xuICAgICAgICAgICAgY29uc3QgYXhpcyA9IGhlYWRpbmdbMF0gIT0gMCA/IDAgOiAxIDtcbiAgICAgICAgICAgIG5ld0hlYWRpbmdbYXhpc10gPSBoZWFkaW5nW2F4aXNdID4gMCA/IGhlYWRpbmdbYXhpc10rMSA6IGhlYWRpbmdbYXhpc10tMTtcbiAgICAgICAgICAgIGNvbnN0IHN0aWxsVmFsaWQgPSBwb3RlbnRpYWxNb3Zlcy5maWx0ZXIoaGVhZGluZyA9PiBoZWFkaW5nW2F4aXNdICE9IDApO1xuICAgICAgICAgICAgc3RpbGxWYWxpZC5wdXNoKG5ld0hlYWRpbmcpO1xuICAgICAgICAgICAgcG90ZW50aWFsTW92ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHN0aWxsVmFsaWQuZm9yRWFjaChjb29yZCA9PiBwb3RlbnRpYWxNb3Zlcy5wdXNoKGNvb3JkKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvb3JkcyxcbiAgICAgICAgICAgIHRhcmdldDpzaGlwLFxuICAgICAgICAgICAgcG90ZW50aWFsTW92ZXMsXG4gICAgICAgICAgICBuZXh0TW92ZSxcbiAgICAgICAgICAgIHJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXNcbiAgICAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MgPSAoY29vcmRzLCBzaGlwKSA9PiB7XG4gICAgICAgIGN1cnJlbnRTdWNjZXNzLnB1c2godGFyZ2V0U2hpcChjb29yZHMsc2hpcCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGVkdWNhdGVkTW92ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1vdmVUYWtlbiA9IGZhbHNlO1xuICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gY3VycmVudFN1Y2Nlc3NbMF07XG4gICAgICAgIGlmICghZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5jaGVja0ZvckVtcHR5KCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIE1vcmUgU3BhY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCFtb3ZlVGFrZW4pIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IGN1cnJlbnRUYXJnZXQubmV4dE1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWluZyA6IFwiLGNvb3Jkcyk7XG4gICAgICAgICAgICBtb3ZlVGFrZW4gPSBwbGF5VGlsZShjb29yZHMuYXR0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcgJiYgbW92ZVRha2VuLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0aW5nOiBcIiwgY3VycmVudFN1Y2Nlc3NbMF0pO1xuICAgICAgICAgICAgY3VycmVudFN1Y2Nlc3Muc2hpZnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0JyAmJiBtb3ZlVGFrZW4gPT09IGN1cnJlbnRUYXJnZXQudGFyZ2V0KSB7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0LnJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMoY29vcmRzLmhlYWRpbmcsY29vcmRzLmF0dGFjaylcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcG9wdWxhdGVDdXJyZW50U3VjY2Vzcyhjb29yZHMuYXR0YWNrLG1vdmVUYWtlbilcbiAgICAgICAgfVxuICAgICAgICBTY3JlZW4ucmVuZGVyQ29tcHV0ZXJNb3ZlKGNvb3Jkcy5hdHRhY2ssZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgaXNDb21wOnRydWUsXG4gICAgICAgIGdlbmVyYXRlUmFuZG9tQ29vcmRzLFxuICAgICAgICBtYWtlTW92ZSxcbiAgICAgICAgcGxhY2VcbiAgICB9XG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCBiYXR0bGVzaGlwSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgU0hJUF9JTUFHRVMgPSB7XG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAgIGxldCBvbk5leHQ7XG4gICAgbGV0IG9uV2luO1xuICAgIGxldCBtb3ZlUmVhZHkgPSB0cnVlO1xuXG4gICAgY29uc3QgZHJhd01haW5NZW51ID0gKHNpbmdsZUluaXRpYWxpc2UsIGRvdWJsZUluaXRpYWxpc2UpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgbWVudVBhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51UGFuLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudScpXG4gICAgICAgIGNvbnN0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lVGl0bGUuY2xhc3NMaXN0LmFkZCgnZ2FtZS10aXRsZScpO1xuICAgICAgICBnYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcHMhJ1xuICAgICAgICBtZW51UGFuLmFwcGVuZENoaWxkKGdhbWVUaXRsZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudVBhbik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25CYXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWJhcicpXG4gICAgICAgIGNvbnN0IHN0YXJ0U2luZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0U2luZ2xlLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJylcbiAgICAgICAgY29uc3Qgc3RhcnREb3VibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhcnREb3VibGUuY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKVxuICAgICAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc3RhcnRTaW5nbGUpO1xuICAgICAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc3RhcnREb3VibGUpO1xuICAgICAgICBtZW51UGFuLmFwcGVuZENoaWxkKGJ1dHRvbkJhcik7XG4gICAgICAgIHN0YXJ0U2luZ2xlLnRleHRDb250ZW50ID0gJ1NpbmdsZSBQbGF5ZXInO1xuICAgICAgICBzdGFydERvdWJsZS50ZXh0Q29udGVudCA9ICdUd28gUGxheWVyJztcbiAgICAgICAgc3RhcnRTaW5nbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGdldE5hbWUoc2luZ2xlSW5pdGlhbGlzZSkpO1xuICAgICAgICBzdGFydERvdWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgZ2V0TmFtZSgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGdldE5hbWUoKHNlY29uZE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlSW5pdGlhbGlzZShuYW1lLHNlY29uZE5hbWUpO1xuICAgICAgICAgICAgICAgIH0sICd0d28nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoY2IsIHN0cmluZyA9ICdvbmUnKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBuYW1lXCIpO1xuICAgICAgICBjb25zdCBuYW1lRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIG5hbWVEaWFsb2cuY2xhc3NMaXN0LmFkZCgnZ2V0LW5hbWUnKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChuYW1lRGlhbG9nKTtcbiAgICAgICAgbmFtZURpYWxvZy5zaG93KCk7XG4gICAgICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduYW1lLWlucHV0Jyk7XG4gICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IGBBZG1pcmFsICR7c3RyaW5nfSBuYW1lOiBgXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcbiAgICAgICAgY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuYW1lU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgbmFtZURpYWxvZy5hcHBlbmRDaGlsZChuYW1lRm9ybSk7XG4gICAgICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVTdWJtaXQpO1xuICAgICAgICBuYW1lU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2dldC1uYW1lLXN1Ym1pdCcpO1xuICAgICAgICBuYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKG5hbWVJbnB1dC52YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGNiKG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgbmFtZURpYWxvZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5hbWVEaWFsb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gICBcblxuICAgIGNvbnN0IHByaW50U3RyaW5nID0gKHRvUHJpbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWJhcicpO1xuICAgICAgICBzaGlwQmFyLnRleHRDb250ZW50ID0gdG9QcmludDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRCYXR0bGVzaGlwQ29vcmRzID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCB4TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb29yZHNbMF0rNjUpO1xuICAgICAgICByZXR1cm4gYCR7eExldHRlcn0ke2Nvb3Jkc1sxXSsxfWBcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwU2NyZWVuU2V0dXAgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke25hbWV9IHBsYWNlIHlvdXIgc2hpcHMhYDtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncGxhY2Utc2hpcHMtdGl0bGUnKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5pZCA9ICdsZWZ0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGNvbnN0IHNoaXBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcGJhci5pZCA9ICdzaGlwLWJhcic7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2hpcGJhcik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1JlYWR5U2NyZWVuID0gKHBsYXllcixuZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IHJlYWR5RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGNvbnN0IHJlYWR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCByZWFkeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZWFkeURpYWxvZy5jbGFzc0xpc3QuYWRkKCdyZWFkeS1kaWFsb2cnKTtcbiAgICAgICAgcmVhZHlUZXh0LmNsYXNzTGlzdC5hZGQoJ3JlYWR5LXRleHQnKTtcbiAgICAgICAgcmVhZHlCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVhZHktYnV0dG9uJyk7XG4gICAgICAgIHJlYWR5VGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllci5pZH0ncyB0dXJuIWA7XG4gICAgICAgIHJlYWR5QnV0dG9uLnRleHRDb250ZW50ID0gJ1JlYWR5JztcbiAgICAgICAgcmVhZHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZWFkeURpYWxvZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlYWR5RGlhbG9nKTtcbiAgICAgICAgICAgIHJlZnJlc2gobmV4dCxwbGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZHlEaWFsb2cuYXBwZW5kQ2hpbGQocmVhZHlUZXh0KVxuICAgICAgICByZWFkeURpYWxvZy5hcHBlbmRDaGlsZChyZWFkeUJ1dHRvbilcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyZWFkeURpYWxvZylcbiAgICAgICAgcmVhZHlEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZVNjcmVlblNldHVwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnQuaWQgPSAnbGVmdCc7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0LmlkID0gJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICAgICAgY29uc3Qgc2hpcGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwYmFyLmlkID0gJ3NoaXAtYmFyJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaGlwYmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGdldFRhcmdldChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3ZlUmVhZHkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBtb3ZlUmVhZHkgPSBnYW1lYm9hcmQub3Bwb25lbnQubWFrZU1vdmUodGlsZSwgZ2FtZWJvYXJkKVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdEdW1teUFjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdSZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyYXdTaGlwcyhnYW1lYm9hcmQsZ2FtZWJvYXJkLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3SGlkZGVuUmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgLy9kcmF3IHRoZSB0aWxlcyB0byBtYWludGFpbiBzaXplIGNvbnNpc3RlbmN5XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZGRlbi50ZXh0Q29udGVudCA9IFwiRGF0YSBFbmNyeXB0ZWQuLi5cIlxuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJvYXJkJyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGhpZGRlbilcbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoID0gKGN1cnJlbnQscHJldmlvdXMpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHJlY29uQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpO1xuICAgICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZWNvbkFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghY3VycmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIGRyYXdBY3RpdmVCb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1JlY29uQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd0R1bW15QWN0aXZlQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhwcmV2aW91cy5nYW1lYm9hcmQscHJldmlvdXMuZ2FtZWJvYXJkLmlkKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIG1vdmVSZWFkeSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBnZXRCYXR0bGVzaGlwQ29vcmRzKGNvb3Jkcyk7XG4gICAgICAgIHByaW50U3RyaW5nKGBDb21wdXRlciBhdHRhY2tzICR7Y29vcmRTdHJpbmd9Li4uYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtjb29yZFN0cmluZ30gaXMgYSAke2dhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSl9IWApLDUwMClcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja3NcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzdGFsbE5leHRUdXJuID0gYXdhaXQgc3RhbGxDb21wdXRlck1vdmUoKTtcbiAgICAgICAgc3RhbGxOZXh0VHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYXllck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBnZXRCYXR0bGVzaGlwQ29vcmRzKGNvb3Jkcyk7XG4gICAgICAgIHByaW50U3RyaW5nKGAke2dhbWVib2FyZC5vcHBvbmVudC5pZH0gYXR0YWNrcyAke2Nvb3JkU3RyaW5nfS4uLmApO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJpbnRTdHJpbmcoYCR7Y29vcmRTdHJpbmd9IGlzIGEgJHtnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pfSFgKSw1MDApXG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzaG93UGxheWVyc1R1cm4gPSBhd2FpdCBzaG93UGxheWVyUmVzdWx0KCk7XG4gICAgICAgIHNob3dQbGF5ZXJzVHVybigpO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN1bmtTaGlwID0gKHNoaXAsIG5hbWUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtuYW1lfSdzICR7c2hpcC5uYW1lfSBoYXMgYmVlbiBzdW5rIWApLDI1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dQbGF5ZXJSZXN1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllclJlc3VsdFRpbWVyID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJSZXN1bHRUaW1lclxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFsbENvbXB1dGVyTW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaW5pc2hlZCA9IGF3YWl0IHByb21pc2lmeShvbk5leHQsIDIwMDApO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gY29tcHV0ZXJGaW5pc2hlZFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9taXNpZnkgPSAoY2FsbGJhY2ssdGltZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGNhbGxiYWNrKSwgdGltZXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkLG9uYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBnYW1lYm9hcmQuZ2V0U2hpcHMoKTtcbiAgICAgICAgY29uc3QgcGxheXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmJvYXJkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uKHBsYXl6b25lLCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCksIHNoaXApXG4gICAgICAgICAgICBwbGF5em9uZS5hcHBlbmRDaGlsZChkcmF3U2hpcChkaW1lbnNpb25zKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1NoaXAgPSAoZGltZW5zaW9ucykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcC1tYXJrZXInKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxgdG9wOiR7ZGltZW5zaW9ucy50b3B9O2xlZnQ6JHtkaW1lbnNpb25zLmxlZnR9O3dpZHRoOiR7ZGltZW5zaW9ucy5sZW5ndGh9O2hlaWdodDoke2RpbWVuc2lvbnMuaGVpZ2h0fWApO1xuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uID0gKHpvbmUsIHNjYWxlICxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB6b25lLm9mZnNldFdpZHRoIC8gc2NhbGU7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMF0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMV0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLm9yaWVudGF0aW9uID8gc2hpcC5sZW5ndGggKiB1bml0IDogdW5pdCA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0IDogc2hpcC5sZW5ndGggKiB1bml0IDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICBsZW5ndGg6bGVuZ3RoKydweCcsXG4gICAgICAgICAgICBoZWlnaHQ6aGVpZ2h0KydweCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhcmdldCA9IChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIC8vIEZpbmQgdGhlIGNvb3JkaW5hdGVzIHRocm91Z2ggdGhlIGVsZW1lbnRzIHBvc2l0aW9uIGFtb25nc3QgaXRzIHNpYmxpbmdzXG4gICAgICAgIGNvbnN0IHkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJvYXJkLmNoaWxkcmVuLHBhcmVudCk7XG4gICAgICAgIGNvbnN0IHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbix0YXJnZXQpO1xuICAgICAgICByZXR1cm4gW3gseV1cbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyICcsIHdpbm5lciwgJyBpcyB2aWN0b3Jpb3VzIScpXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IHZpY3RvcnlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHZpY3RvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZpY3RvcnlUZXh0LnRleHRDb250ZW50ID0gYEdhbWUgb3ZlciEgJHt3aW5uZXJ9IGlzIHZpY3RvcmlvdXMhYDtcbiAgICAgICAgY29uc3QgdmljdG9yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLnRleHRDb250ZW50ID0gYE1haW4gTWVudWA7XG4gICAgICAgIHZpY3RvcnlNZW51LmNsYXNzTGlzdC5hZGQoJ3ZpY3RvcnktbWVudScpO1xuICAgICAgICB2aWN0b3J5VGV4dC5jbGFzc0xpc3QuYWRkKCd2aWN0b3J5LXRleHQnKTtcbiAgICAgICAgdmljdG9yeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbicpO1xuICAgICAgICB2aWN0b3J5TWVudS5hcHBlbmRDaGlsZCh2aWN0b3J5VGV4dCk7XG4gICAgICAgIHZpY3RvcnlNZW51LmFwcGVuZENoaWxkKHZpY3RvcnlCdXR0b24pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHZpY3RvcnlNZW51KTtcbiAgICAgICAgdmljdG9yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luKTtcbiAgICB9XG5cblxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXdTaGlwcyxcbiAgICAgICAgZ2FtZVNjcmVlblNldHVwLFxuICAgICAgICBzaGlwU2NyZWVuU2V0dXAsXG4gICAgICAgIHJlbmRlckNvbXB1dGVyTW92ZSxcbiAgICAgICAgZW5kR2FtZSxcbiAgICAgICAgZ2V0VGFyZ2V0LFxuICAgICAgICByZWZyZXNoLFxuICAgICAgICBzdW5rU2hpcCxcbiAgICAgICAgcmVuZGVyUGxheWVyTW92ZSxcbiAgICAgICAgZHJhd01haW5NZW51LFxuICAgICAgICBzaG93UmVhZHlTY3JlZW4sXG4gICAgICAgIHNldCBvbk5leHQobmV4dFR1cm4pIHtcbiAgICAgICAgICAgIG9uTmV4dCA9IG5leHRUdXJuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25XaW4od2luKSB7XG4gICAgICAgICAgICBvbldpbiA9IHdpbjtcbiAgICAgICAgfSxcbiAgICB9XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBsZXQgaGl0Q291bnRlciA9IDA7XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAhb3JpZW50YXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgU0hJUF9TSVpFUyA9IHtcbiAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudGVyKytcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoaGl0Q291bnRlciA+PSBTSElQX1NJWkVTW25hbWVdKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBwb3NpdGlvbjpbXSxcbiAgICAgICAgZ2V0IG9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9yaWVudGF0aW9uKG9yKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IG9yO1xuICAgICAgICB9LFxuICAgICAgICByb3RhdGUsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXllZE5hbWUgPSBuYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGFycmF5ZWROYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXllZE5hbWUuam9pbignJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gU0hJUF9TSVpFU1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10aWxlOiAgcmdiYSgyMDAsMjAwLDIwMCwwLjEpO1xuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcbiAgICAtLXRpbGUtaGl0OiByZ2JhKDI1NSwyMDAsMjAwLDAuOCk7XG4gICAgLS10aWxlLW1pc3M6IHJnYmEoMjAwLDIwMCwyNTUsMC44KTtcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcbiAgICAtLWJhY2tncm91bmQ6ICM1NTg4Nzc7XG4gICAgLS1tZW51LWJhY2s6ICM1NUFBOTk7XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMGR2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1cblxuLmdldC1uYW1lOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLmdldC1uYW1lIGZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmdldC1uYW1lIGZvcm0gbGFiZWwge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmdldC1uYW1lLXN1Ym1pdCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufVxuXG4ubWFpbi1tZW51LFxuLnZpY3RvcnktbWVudSxcbi5nZXQtbmFtZSB7XG4gICAgd2lkdGg6IG1heCgzNSUsNDAwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFjayk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dCB7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtYmFjayk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG5cbi5nYW1lLXRpdGxlLFxuLnBsYWNlLXNoaXBzLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5idXR0b24tYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jc2hpcC1iYXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lbnUtYnV0dG9uLFxuLmdldC1uYW1lLXN1Ym1pdCxcbi5wbGFjZS1zaGlwLFxuLnJvdGF0ZSxcbi5zdWJtaXQtcGxhY2VtZW50IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2spO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4jZ2FtZWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHdoaXRlO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuI3JpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNsZWZ0IC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4jcmlnaHQgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuI2xlZnQsXG4jcmlnaHQge1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnRpbGUubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcbn1cblxuLnRpbGUuaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cblxuLnRpbGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZsZXg6MTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aWxlKTtcbiAgICBib3JkZXI6IDA7XG59XG5cbi50aWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcbn1cblxuYnV0dG9uLnRpbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXIpO1xufVxuXG4uaGlkZGVuLWJvYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgYm90dG9tOjA7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgd2lkdGg6NTAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbiNwbGF5ZXItb25lLFxuI3BsYXllci10d28ge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uc2hpcC1tYXJrZXIge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG5cbmJ1dHRvbi50aWxlLmF0dGFjayB7XG4gICAgYW5pbWF0aW9uOiBhdHRhY2stcHVsc2UgMC41cyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgYXR0YWNrLXB1bHNlIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtYXR0YWNrKSA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcbiAgICB9XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAzJSk7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gICAgYm9yZGVyOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuXG4ucGxhY2Vob2xkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLm91dC1vZi1ib3VuZHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnJlYWR5LWRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICNnYW1lYXJlYSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQix3RUFBd0U7QUFDNUU7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsd0VBQXdFO0lBQ3hFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdFQUF3RTtJQUN4RSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7O0lBS0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLE1BQU07SUFDTixVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QyxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLHFDQUFxQztJQUN6QztJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XFxuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcXG4gICAgLS10aWxlLWhpdDogcmdiYSgyNTUsMjAwLDIwMCwwLjgpO1xcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcXG4gICAgLS1iYWNrZ3JvdW5kOiAjNTU4ODc3O1xcbiAgICAtLW1lbnUtYmFjazogIzU1QUE5OTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmdldC1uYW1lOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5nZXQtbmFtZSBmb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdldC1uYW1lIGZvcm0gbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZ2V0LW5hbWUtc3VibWl0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4ubWFpbi1tZW51LFxcbi52aWN0b3J5LW1lbnUsXFxuLmdldC1uYW1lIHtcXG4gICAgd2lkdGg6IG1heCgzNSUsNDAwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0IHtcXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuXFxuLmdhbWUtdGl0bGUsXFxuLnBsYWNlLXNoaXBzLXRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYnV0dG9uLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc2hpcC1iYXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51LWJ1dHRvbixcXG4uZ2V0LW5hbWUtc3VibWl0LFxcbi5wbGFjZS1zaGlwLFxcbi5yb3RhdGUsXFxuLnN1Ym1pdC1wbGFjZW1lbnQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYWNrKTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jZ2FtZWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgd2hpdGU7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuI3JpZ2h0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jbGVmdCAuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbiNyaWdodCAuc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI2xlZnQsXFxuI3JpZ2h0IHtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi50aWxlLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3MpO1xcbn1cXG5cXG4udGlsZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZmxleDoxO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRpbGUpO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi50aWxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XFxufVxcblxcbmJ1dHRvbi50aWxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlcik7XFxufVxcblxcbi5oaWRkZW4tYm9hcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgd2lkdGg6NTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbiNwbGF5ZXItb25lLFxcbiNwbGF5ZXItdHdvIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5zaGlwLW1hcmtlciB7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG5idXR0b24udGlsZS5hdHRhY2sge1xcbiAgICBhbmltYXRpb246IGF0dGFjay1wdWxzZSAwLjVzIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYXR0YWNrLXB1bHNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1hdHRhY2spIDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xcbiAgICB9XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMyUpO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXIge1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuLnBsYWNlaG9sZGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4ub3V0LW9mLWJvdW5kcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnJlYWR5LWRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgI2dhbWVhcmVhIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgU2NyZWVuIGZyb20gXCIuL21vZHVsZXMvc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBQbGFjZW1lbnRCb2FyZCB9IGZyb20gXCIuL21vZHVsZXMvcGxhY2VtZW50Qm9hcmQuanNcIjtcbmltcG9ydCB7IFBsYXllciAsIENvbXB1dGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL21vZHVsZXMvZ2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50UGxheWVyXG4gICAgY29uc3QgcGxheWVycyA9IFtdO1xuICAgXG4gICAgY29uc3Qgc2luZ2xlSW5pdGlhbGlzZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKDEwLCBuYW1lKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoMTAsIFwiQ29tcHV0ZXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihuYW1lLCBwbGF5ZXJPbmVCb2FyZCk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3byA9IENvbXB1dGVyKG5hbWUsIHBsYXllclR3b0JvYXJkKTtcbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllck9uZSk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJUd28pO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5vcHBvbmVudCA9IHBsYXllclR3bztcbiAgICAgICAgcGxheWVyVHdvQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJPbmU7XG4gICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRvdWJsZUluaXRpYWxpc2UgPSAobmFtZSwgc2Vjb25kTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZCgxMCwgbmFtZSk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gR2FtZWJvYXJkKDEwLCBzZWNvbmROYW1lKTtcbiAgICAgICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKG5hbWUsIHBsYXllck9uZUJvYXJkKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKHNlY29uZE5hbWUsIHBsYXllclR3b0JvYXJkKTtcbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllck9uZSk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJUd28pO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5vcHBvbmVudCA9IHBsYXllclR3bztcbiAgICAgICAgcGxheWVyVHdvQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJPbmU7XG4gICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxpc2VHYW1lID0gKCkgPT4ge1xuICAgICAgICBTY3JlZW4uZ2FtZVNjcmVlblNldHVwKCk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdO1xuICAgICAgICBTY3JlZW4ub25OZXh0ID0gdHVybk92ZXI7XG4gICAgICAgIG5leHRQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0dXJuT3ZlciA9ICgpID0+IHtcbiAgICAgICAgaWYoY3VycmVudFBsYXllci5nYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLmNoZWNrRm9yQWxsU3VuaygpKSB7XG4gICAgICAgICAgICBTY3JlZW4uZW5kR2FtZShjdXJyZW50UGxheWVyLmlkKTtcbiAgICAgICAgICAgIHBsYXllcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuZXh0UGxheWVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBjdXJyZW50UGxheWVyO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdIDtcbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuaXNDb21wKSB7XG4gICAgICAgICAgICBTY3JlZW4ucmVmcmVzaChjdXJyZW50UGxheWVyLHByZXZpb3VzKTtcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIubWFrZU1vdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmICghY3VycmVudFBsYXllci5nYW1lYm9hcmQub3Bwb25lbnQuaXNDb21wKSB7XG4gICAgICAgICAgICBTY3JlZW4uc2hvd1JlYWR5U2NyZWVuKGN1cnJlbnRQbGF5ZXIscHJldmlvdXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2NyZWVuLnJlZnJlc2goY3VycmVudFBsYXllcixwcmV2aW91cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKHBsYXllciwgY2IpID0+IHtcbiAgICAgICAgLy8gY29uc3Qgb3Bwb25lbnRCb2FyZCA9IHBsYXllciA9PT0gcGxheWVyT25lID8gcGxheWVyVHdvLmdhbWVib2FyZCA6IHBsYXllck9uZS5nYW1lYm9hcmQ7XG4gICAgICAgIFNjcmVlbi5zaGlwU2NyZWVuU2V0dXAocGxheWVyLmlkKTtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gUGxhY2VtZW50Qm9hcmQocGxheWVyLmdhbWVib2FyZCwgY2IpO1xuICAgICAgICBwbGFjZW1lbnQucmVuZGVyUGxhY2VtZW50U2NyZWVuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJQbGFjZSA9IChwbGF5ZXIsIGNiKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG4gICAgICAgIHBsYXllci5wbGFjZSgpO1xuICAgICAgICBjYigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgU2NyZWVuLm9uV2luID0gKCkgPT4gU2NyZWVuLmRyYXdNYWluTWVudShzaW5nbGVJbml0aWFsaXNlLGRvdWJsZUluaXRpYWxpc2UpO1xuICAgICAgICBjb25zdCBhZnRlclBsYWNlID0gcGxheWVyc1sxXS5pc0NvbXAgPyBjb21wdXRlclBsYWNlIDogc2hpcFBsYWNlbWVudCA7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQocGxheWVyc1swXSwgKCkgPT4gYWZ0ZXJQbGFjZShwbGF5ZXJzWzFdLCBpbml0aWFsaXNlR2FtZSkpO1xuICAgIH1cblxuICAgIFNjcmVlbi5kcmF3TWFpbk1lbnUoc2luZ2xlSW5pdGlhbGlzZSxkb3VibGVJbml0aWFsaXNlKTtcblxufSkoKTsiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiR2FtZWJvYXJkIiwic2l6ZSIsImFyZ3VtZW50cyIsInNoaXBzIiwidHVybnMiLCJTcXVhcmUiLCJ4IiwieSIsInNoaXAiLCJoaXQiLCJjb29yZHMiLCJidWlsZFJvdyIsImluZGV4IiwiY29sdW1ucyIsImJ1aWxkU3F1YXJlIiwicm93cyIsImdldExlbmd0aCIsImdldFNxdWFyZSIsImdhbWVTcXVhcmUiLCJzcXVhcmVTdGF0dXMiLCJnZXRTaGlwcyIsImhpdFNxdWFyZSIsIkVycm9yIiwiY2hlY2tGb3JFbXB0eSIsInBsYWNlU2hpcCIsImhvcml6b250YWwiLCJheGlzIiwiY2hlY2tCb3VuZGFyaWVzIiwiY2hlY2tGb3JTaGlwcyIsIm9yaWVudGF0aW9uIiwicG9zaXRpb24iLCJjbGVhclNoaXAiLCJwb3AiLCJzcGxpY2UiLCJpbmRleE9mIiwicmFuZ2UiLCJldmVyeSIsImNoZWNrRm9yQWxsU3VuayIsImFsbENvbmRpdGlvbiIsImZvckVhY2giLCJpc1N1bmsiLCJjb25kaXRpb24iLCJjbGVhckFsbCIsImN1ciIsImNvb3JkIiwib3Bwb25lbnQiLCJTY3JlZW4iLCJTaGlwIiwiU0hJUF9JTUFHRVMiLCJQbGFjZW1lbnRCb2FyZCIsImdhbWVib2FyZCIsIm9uRmluaXNoIiwicGxhY2luZyIsInNoaXBCYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FycmllciIsInBsYWNlZCIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwic2V0U2hpcHMiLCJPYmplY3QiLCJrZXlzIiwibmV3U2hpcCIsImRyYXdQbGFjZW1lbnRCb2FyZCIsInpvbmVEb20iLCJib2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJvd0NvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsImoiLCJ0aWxlIiwic2V0QXR0cmlidXRlIiwicmVuZGVyUGxhY2VtZW50U2NyZWVuIiwiZHJhd05leHRTaGlwQnV0dG9uIiwibmV4dFNoaXAiLCJtYWtlTmV4dFNoaXBCdXR0b24iLCJidXR0b24iLCJyZW5kZXJTdWJtaXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJtYWtlU2hpcCIsInNoaXBQbGFjZW1lbnQiLCJzdWJtaXQiLCJjbGVhclNoaXBCYXIiLCJleGlzdGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwia2V5IiwiYnV0dG9uVGV4dCIsIlN0cmluZyIsInRvVXBwZXJDYXNlIiwidGV4dENvbnRlbnQiLCJyb3RhdGUiLCJjcmVhdGVUZW1wbGF0ZSIsInRlbXBsYXRlIiwibmFtZSIsInN0eWxlIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRJbWFnZSIsImNsZWFyUm90YXRlQnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZVJvdGF0ZUJ1dHRvbiIsInRpbGVzIiwicmVuZGVyU2hpcCIsIm9mZnNldFdpZHRoIiwiaWxsZWdhbFNxdWFyZXMiLCJmaW5kSWxsZWdhbFNxdWFyZXMiLCJyZW1vdmVNYXJrZXIiLCJyb3RhdGVTaGlwIiwiaG92ZXJJbWFnZSIsImluY2x1ZGVzIiwicmVtb3ZlIiwiZSIsInBsYWNlVGVtcGxhdGUiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib29iTW92ZSIsIl9sb29wIiwic3BhY2VTZXQiLCJTZXQiLCJpbGxNb3ZlcyIsImdldE9jY3VwaWVkU3BhY2VzIiwiYXJyYXlQb2ludGVyIiwic3BhY2UiLCJuZXh0U3BhY2UiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfcmV0IiwibWFya2VyIiwic3BhY2VzIiwiY3VycmVudENvb3JkIiwiaW1hZ2UiLCJ1bml0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsIm1vdmVTaGlwIiwiZ2V0VGFyZ2V0IiwiY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbiIsInpJbmRleCIsImlubmVySFRNTCIsInN1Ym1pdEJ1dHRvbiIsImVsZW1lbnQiLCJpbWciLCJldmVudCIsInBvcyIsImNvbnRhaW5zIiwiUGxheWVyIiwibWFrZU1vdmUiLCJvcHBvbmVudEJvYXJkIiwibW92ZSIsIl90eXBlb2YiLCJzdW5rU2hpcCIsInJlbmRlclBsYXllck1vdmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwbGF5aW5nIiwiaXNDb21wIiwiQ29tcHV0ZXIiLCJjdXJyZW50U3VjY2VzcyIsIm1ha2VTaGlwcyIsInBsYWNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZXJyIiwicGxheVRpbGUiLCJnZW5lcmF0ZVJhbmRvbUNvb3JkcyIsImJvdW5kYXJ5IiwicmFuWCIsInJhblkiLCJlZHVjYXRlZE1vdmUiLCJkdW1iTW92ZSIsIm1vdmVUYWtlbiIsInBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MiLCJyZW5kZXJDb21wdXRlck1vdmUiLCJ0YXJnZXRTaGlwIiwicG90ZW50aWFsTW92ZXMiLCJuZXh0TW92ZSIsInJhbmRvbUNob2ljZSIsImhlYWRpbmciLCJmbGF0IiwiYXR0YWNrIiwicmVjYWxjdWxhdGVQb3RlbnRpYWxNb3ZlcyIsIm5ld0hlYWRpbmciLCJzdGlsbFZhbGlkIiwiZmlsdGVyIiwiY3VycmVudFRhcmdldCIsInNoaWZ0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIk9wIiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcHBseSIsImJhdHRsZXNoaXBJbWFnZSIsIm9uTmV4dCIsIm9uV2luIiwibW92ZVJlYWR5IiwiZHJhd01haW5NZW51Iiwic2luZ2xlSW5pdGlhbGlzZSIsImRvdWJsZUluaXRpYWxpc2UiLCJib2R5IiwibWVudVBhbiIsImdhbWVUaXRsZSIsImJ1dHRvbkJhciIsInN0YXJ0U2luZ2xlIiwic3RhcnREb3VibGUiLCJnZXROYW1lIiwic2Vjb25kTmFtZSIsImNiIiwic3RyaW5nIiwibmFtZURpYWxvZyIsInNob3ciLCJuYW1lRm9ybSIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsIm5hbWVTdWJtaXQiLCJyZXF1aXJlZCIsInByZXZlbnREZWZhdWx0IiwicHJpbnRTdHJpbmciLCJ0b1ByaW50IiwiZ2V0QmF0dGxlc2hpcENvb3JkcyIsInhMZXR0ZXIiLCJmcm9tQ2hhckNvZGUiLCJzaGlwU2NyZWVuU2V0dXAiLCJ0aXRsZSIsImdhbWVhcmVhIiwic2hpcGJhciIsInNob3dSZWFkeVNjcmVlbiIsInBsYXllciIsInJlYWR5RGlhbG9nIiwicmVhZHlUZXh0IiwicmVhZHlCdXR0b24iLCJyZWZyZXNoIiwic2hvd01vZGFsIiwiZ2FtZVNjcmVlblNldHVwIiwicmlnaHQiLCJkcmF3QWN0aXZlQm9hcmQiLCJkcmF3RHVtbXlBY3RpdmVCb2FyZCIsImRyYXdSZWNvbkJvYXJkIiwiZHJhd1NoaXBzIiwiZHJhd0hpZGRlblJlY29uQm9hcmQiLCJoaWRkZW4iLCJjdXJyZW50IiwicHJldmlvdXMiLCJhY3RpdmVBcmVhIiwicmVjb25BcmVhIiwiX3JlZiIsIl9jYWxsZWUiLCJhY3RpdmVab25lIiwicm93IiwiY2VsbCIsImNvb3JkU3RyaW5nIiwicmVtb3ZlQXR0YWNrTWFya2VyIiwic3RhbGxOZXh0VHVybiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjaGlsZHJlbiIsInByb21pc2lmeSIsInNldFRpbWVvdXQiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29tcHV0ZXJGaW5pc2hlZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImNhbGxiYWNrIiwidGltZXIiLCJvbmJvYXJkIiwicGxheXpvbmUiLCJkaW1lbnNpb25zIiwiY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24iLCJkcmF3U2hpcCIsInpvbmUiLCJzY2FsZSIsInBhcmVudCIsIkFycmF5IiwiZW5kR2FtZSIsIndpbm5lciIsInZpY3RvcnlNZW51IiwidmljdG9yeVRleHQiLCJ2aWN0b3J5QnV0dG9uIiwibmV4dFR1cm4iLCJ3aW4iLCJoaXRDb3VudGVyIiwiU0hJUF9TSVpFUyIsIm9yIiwiYXJyYXllZE5hbWUiLCJzcGxpdCIsIkdhbWUiLCJjdXJyZW50UGxheWVyIiwicGxheWVycyIsInBsYXllck9uZUJvYXJkIiwicGxheWVyVHdvQm9hcmQiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJzdGFydEdhbWUiLCJpbml0aWFsaXNlR2FtZSIsInR1cm5PdmVyIiwibmV4dFBsYXllciIsInBsYWNlbWVudCIsImNvbXB1dGVyUGxhY2UiLCJhZnRlclBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==