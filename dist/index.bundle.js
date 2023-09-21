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
    victoryButton.classList.add('victory-button');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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LENBQUEsRUFBUztJQUNwQi9ZLDBEQUFNLENBQUM2UixLQUFLLEdBQUc7TUFBQSxPQUFNN1IsMERBQU0sQ0FBQytSLFlBQVksQ0FBQ0MsZ0JBQWdCLEVBQUNDLGdCQUFnQixDQUFDO0lBQUE7SUFDM0UsSUFBTW9ILFVBQVUsR0FBR1gsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDcFIsTUFBTSxHQUFHOFIsYUFBYSxHQUFHNVcsYUFBYTtJQUNwRUEsYUFBYSxDQUFDa1csT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQUEsT0FBTVcsVUFBVSxDQUFDWCxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUVNLGNBQWMsQ0FBQztJQUFBLEVBQUM7RUFDM0UsQ0FBQztFQUVEaFosMERBQU0sQ0FBQytSLFlBQVksQ0FBQ0MsZ0JBQWdCLEVBQUNDLGdCQUFnQixDQUFDO0FBRTFELENBQUMsQ0FBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9wbGFjZW1lbnRCb2FyZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2NyZWVuLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKHNpemUsaWQgPSBudWxsKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICBjb25zdCB0dXJucyA9IFtdO1xuICAgIGNvbnN0IFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNoaXA6IG51bGwsXG4gICAgICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICAgICAgY29vcmRzOiBbeCx5XSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkUm93ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKykge1xuICAgICAgICAgICAgY29sdW1ucy5wdXNoKFNxdWFyZShpLGluZGV4KSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRTcXVhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIHJvd3MucHVzaChidWlsZFJvdyhpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lU3F1YXJlW3ldW3hdO1xuICAgIH1cblxuICAgIGNvbnN0IHNxdWFyZVN0YXR1cyA9ICh4LHkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0ICYmIGdhbWVTcXVhcmVbeV1beF0uc2hpcCkgcmV0dXJuICdoaXQnO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQpIHJldHVybiAnbWlzcyc7XG4gICAgICAgIHJldHVybiAnZW1wdHknXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lU3F1YXJlID0gYnVpbGRTcXVhcmUoc2l6ZSk7XG5cbiAgICBjb25zdCBoaXRTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmICghZ2FtZVNxdWFyZVt5XSB8fCAhZ2FtZVNxdWFyZVt5XVt4XSkgdGhyb3cgbmV3IEVycm9yKFwiT3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0KSB0aHJvdyBuZXcgRXJyb3IoXCJTcXVhcmUgYWxyZWFkeSBoaXRcIik7XG4gICAgICAgIGdhbWVTcXVhcmVbeV1beF0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgdHVybnMucHVzaChbeCx5XSk7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLnNoaXApIHtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVbeV1beF0uc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBnYW1lU3F1YXJlW3ldW3hdLnNoaXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBjaGVja0ZvckVtcHR5ID0gKCkgPT4ge1xuICAgICAgICBpZiAodHVybnMubGVuZ3RoIDwgKHNpemUqc2l6ZSkpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAseCx5LGhvcml6b250YWwpID0+IHtcbiAgICAgICAgY29uc3QgYXhpcyA9IGhvcml6b250YWwgPyB4IDogeSA7XG4gICAgICAgIGlmICghY2hlY2tCb3VuZGFyaWVzKGF4aXMsc2hpcC5sZW5ndGgpKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIGlmICghY2hlY2tGb3JTaGlwcyhzaGlwLmxlbmd0aCx4LHksaG9yaXpvbnRhbCkpIHRocm93IG5ldyBFcnJvcihcIlNwYWNlIG9jY3VwaWVkXCIpO1xuICAgICAgICBzaGlwLm9yaWVudGF0aW9uID0gaG9yaXpvbnRhbDtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIGdhbWVTcXVhcmVbeV1beCtpXS5zaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uLnB1c2goZ2FtZVNxdWFyZVt5XVt4K2ldLmNvb3Jkcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbWVTcXVhcmVbeStpXVt4XS5zaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uLnB1c2goZ2FtZVNxdWFyZVt5K2ldW3hdLmNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBzaGlwLnBvc2l0aW9uLnBvcCgpO1xuICAgICAgICAgICAgZ2FtZVNxdWFyZVtjb29yZHNbMV1dW2Nvb3Jkc1swXV0uc2hpcCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMuc3BsaWNlKHNoaXBzLmluZGV4T2Yoc2hpcCksMSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JTaGlwcyA9IChsZW5ndGgseCx5LGhvcml6b250YWwpID0+IHtcbiAgICAgICAgLy9CdWlsZHMgYW4gYXJyYXkgb2Ygc3BhY2VzIHRoZSBzaGlwIHdpbGwgb2NjdXB5XG4gICAgICAgIGNvbnN0IHJhbmdlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICByYW5nZS5wdXNoKGdhbWVTcXVhcmVbeV1beCtpXS5zaGlwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZ2UucHVzaChnYW1lU3F1YXJlW3kraV1beF0uc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9SZXR1cm5zIHRydWUgaWYgYWxsIGFyZSBlbXB0eVxuICAgICAgICByZXR1cm4gcmFuZ2UuZXZlcnkoc2hpcCA9PiBzaGlwID09PSBudWxsKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNoZWNrQm91bmRhcmllcyA9IChheGlzLGxlbmd0aCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpcyArIGxlbmd0aCA+IHNpemUgPyBmYWxzZSA6IHRydWU7IFxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yQWxsU3VuayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQ29uZGl0aW9uID0gW11cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gYWxsQ29uZGl0aW9uLnB1c2goc2hpcC5pc1N1bmsoKSkpO1xuICAgICAgICByZXR1cm4gYWxsQ29uZGl0aW9uLmV2ZXJ5KGNvbmRpdGlvbiA9PiBjb25kaXRpb24gPT09IHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaGlwcy5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBjdXIgPSBzaGlwcy5wb3AoKTtcbiAgICAgICAgICAgIGN1ci5wb3NpdGlvbi5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWVTcXVhcmVbY29vcmRbMV1dW2Nvb3JkWzBdXS5zaGlwID0gbnVsbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgaGl0U3F1YXJlLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGNsZWFyU2hpcCxcbiAgICAgICAgY2hlY2tGb3JBbGxTdW5rLFxuICAgICAgICBnZXRTcXVhcmUsXG4gICAgICAgIGNoZWNrRm9yRW1wdHksXG4gICAgICAgIGdldFNoaXBzLFxuICAgICAgICBjbGVhckFsbCxcbiAgICAgICAgc3F1YXJlU3RhdHVzLFxuICAgICAgICBvcHBvbmVudDpudWxsLFxuICAgICAgICBpZCxcbiAgICB9XG5cbn07IiwiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9zY3JlZW4uanNcIlxuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIlxuaW1wb3J0IHsgU0hJUF9JTUFHRVMgfSBmcm9tIFwiLi9zY3JlZW4uanNcIlxuXG5leHBvcnQgY29uc3QgUGxhY2VtZW50Qm9hcmQgPSAoZ2FtZWJvYXJkLCBvbkZpbmlzaCkgPT4ge1xuICAgIGxldCBwbGFjaW5nID0gZmFsc2U7XG4gICAgY29uc3Qgc2hpcEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWJhcicpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSB7XG4gICAgICAgIGNhcnJpZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjUsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGJhdHRsZXNoaXA6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjQsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNydWlzZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjMsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1hcmluZTp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MyxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveWVyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDoyLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gU2hpcChzaGlwKTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAobmV3U2hpcCxzaGlwc1tzaGlwXS5jb29yZHNbMF0sc2hpcHNbc2hpcF0uY29vcmRzWzFdLHNoaXBzW3NoaXBdLmhvcml6b250YWwpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdQbGFjZW1lbnRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmlkID0gYCR7an0tJHtpfWA7XG4gICAgICAgICAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywncG9zaXRpb246cmVsYXRpdmU7JylcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQbGFjZW1lbnRTY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGRyYXdQbGFjZW1lbnRCb2FyZCgpO1xuICAgICAgICBkcmF3TmV4dFNoaXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3TmV4dFNoaXBCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRTaGlwID0gbWFrZU5leHRTaGlwQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5leHRTaGlwID8gbmV4dFNoaXAgOiByZW5kZXJTdWJtaXRCdXR0b24oKTtcbiAgICAgICAgaWYgKG5leHRTaGlwKSB7YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICBzaGlwQmFyLnJlbW92ZUNoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbWFrZVNoaXAoYnV0dG9uKTtcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCxzaGlwc1tzaGlwXSk7XG4gICAgICAgIH0pO30gZWxzZSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXQpO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclNoaXBCYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLXNoaXAnKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSBleGlzdGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGV4aXN0aW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlTmV4dFNoaXBCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyU2hpcEJhcigpO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChzaGlwc1trZXldLnBsYWNlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gU3RyaW5nKCdQbGFjZSAnKyBrZXkpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGFjZS1zaGlwJyk7XG4gICAgICAgICAgICBidXR0b24uaWQgPSBrZXk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgfSAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVNoaXAgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGJ1dHRvbi5pZCk7XG4gICAgICAgIHNoaXAucm90YXRlKCk7XG4gICAgICAgIHJldHVybiBzaGlwXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICB0ZW1wbGF0ZS5pZCA9IHNoaXAubmFtZTtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7U0hJUF9JTUFHRVNbc2hpcC5uYW1lXX1gO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJSb3RhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHNoaXBCYXIucXVlcnlTZWxlY3RvckFsbCgnLnJvdGF0ZScpLmZvckVhY2goKGJ1dHRvbikgPT4gc2hpcEJhci5yZW1vdmVDaGlsZChidXR0b24pKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVSb3RhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdSb3RhdGUnO1xuICAgICAgICBzaGlwQmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKHNoaXApID0+IHtcbiAgICAgICAgcGxhY2luZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZShzaGlwKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHJlbmRlclNoaXAodGVtcGxhdGUsdGlsZXNbMF0ub2Zmc2V0V2lkdGgsc2hpcCk7XG4gICAgICAgIGNvbnN0IGlsbGVnYWxTcXVhcmVzID0gZmluZElsbGVnYWxTcXVhcmVzKHNoaXApO1xuICAgICAgICBjb25zdCByb3RhdGUgPSBjcmVhdGVSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVNYXJrZXIodGVtcGxhdGUpO1xuICAgICAgICAgICAgcm90YXRlU2hpcChzaGlwKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgaG92ZXJJbWFnZSh0aWxlLHRlbXBsYXRlKTtcbiAgICAgICAgICAgIGlmIChpbGxlZ2FsU3F1YXJlcy5pbmNsdWRlcyh0aWxlLmlkKSkge1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaWxsZWdhbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdpbGxlZ2FsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBsYWNlVGVtcGxhdGUoZS50YXJnZXQuY2xvc2VzdCgnLnRpbGUnKSx0ZW1wbGF0ZSxzaGlwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kSWxsZWdhbFNxdWFyZXMgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBpbGxlZ2FsU3F1YXJlcyA9IFtdO1xuICAgICAgICAvLyBGaW5kIG91dCBvZiBib3VuZCBzcXVhcmVzXG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgOyBpKysgKSB7XG4gICAgICAgICAgICBmb3IgKCBsZXQgaiA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKSAtIChzaGlwLmxlbmd0aCAtIDEpOyBqIDwgZ2FtZWJvYXJkLmdldExlbmd0aCgpIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9vYk1vdmUgPSBzaGlwLm9yaWVudGF0aW9uID8gW2osaV0gOiBbaSxqXSA7XG4gICAgICAgICAgICAgICAgaWxsZWdhbFNxdWFyZXMucHVzaChvb2JNb3ZlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9HZXQgc3BhY2VzIHRoYXQgYXJlIG9ic3RydWN0ZWQgYnkgYW5vdGhlciBzaGlwXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzaGlwcykge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2VTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBpZiAoIXNoaXBzW2tleV0ucGxhY2VkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGlsbE1vdmVzID0gZ2V0T2NjdXBpZWRTcGFjZXMoc2hpcHNba2V5XSk7XG4gICAgICAgICAgICBjb25zdCBhcnJheVBvaW50ZXIgPSBzaGlwLm9yaWVudGF0aW9uID8gMCA6IDE7IFxuICAgICAgICAgICAgaWxsTW92ZXMuZm9yRWFjaCgoc3BhY2UpID0+IHtcbiAgICAgICAgICAgICAgICBzcGFjZVNldC5hZGQoc3BhY2Uuam9pbignLScpKTtcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aCA7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFNwYWNlID0gWy4uLnNwYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gPSBuZXh0U3BhY2VbYXJyYXlQb2ludGVyXSAtIGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0U3BhY2VbYXJyYXlQb2ludGVyXSA8IDApIGNvbnRpbnVlIDsgXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlU2V0LmFkZChuZXh0U3BhY2Uuam9pbignLScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNwYWNlU2V0LmZvckVhY2goKGNvb3JkKSA9PiBpbGxlZ2FsU3F1YXJlcy5wdXNoKGNvb3JkKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlsbGVnYWxTcXVhcmVzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE9jY3VwaWVkU3BhY2VzID0gKG1hcmtlcikgPT4ge1xuICAgICAgICBjb25zdCBzcGFjZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGFycmF5UG9pbnRlciA9IG1hcmtlci5ob3Jpem9udGFsID8gMCA6IDEgO1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbWFya2VyLmxlbmd0aCA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZCA9IFsuLi5tYXJrZXIuY29vcmRzXTtcbiAgICAgICAgICAgIGN1cnJlbnRDb29yZFthcnJheVBvaW50ZXJdID0gY3VycmVudENvb3JkW2FycmF5UG9pbnRlcl0gKyBpO1xuICAgICAgICAgICAgc3BhY2VzLmFkZChjdXJyZW50Q29vcmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcGFjZXM7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU2hpcCA9IChpbWFnZSx1bml0LHNoaXApID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBzaGlwLm9yaWVudGF0aW9uID8gKHVuaXQqc2hpcC5sZW5ndGgpKydweCcgOiB1bml0KydweCc7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0ICsncHgnOiAodW5pdCpzaGlwLmxlbmd0aCkrJ3B4JztcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZU1hcmtlciA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICB0ZW1wbGF0ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICB0aWxlLnJlcGxhY2VXaXRoKHRpbGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByb3RhdGVTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5yb3RhdGUoKTtcbiAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlU2hpcCA9ICh0ZW1wbGF0ZSxzaGlwKSA9PiB7XG4gICAgICAgIGlmIChwbGFjaW5nKSByZXR1cm47XG4gICAgICAgIGNsZWFyU2hpcEJhcigpO1xuICAgICAgICB0ZW1wbGF0ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgc2hpcHNbc2hpcC5uYW1lXS5wbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVRlbXBsYXRlID0gKHRpbGUsdGVtcGxhdGUsc2hpcCkgPT4ge1xuICAgICAgICBjbGVhclJvdGF0ZUJ1dHRvbigpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSBTY3JlZW4uZ2V0VGFyZ2V0KHRpbGUpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24odGlsZS5vZmZzZXRXaWR0aCxjb29yZHMpO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3A7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLmhvcml6b250YWwgPSBzaGlwLm9yaWVudGF0aW9uO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0ucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgdGVtcGxhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiBtb3ZlU2hpcChlLnRhcmdldC5jbG9zZXN0KCcucGxhY2Vob2xkZXInKSxzaGlwKSk7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5yZXBsYWNlV2l0aCh0aWxlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIHBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhd05leHRTaGlwQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbiA9ICh1bml0LGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0ID0gKGNvb3Jkc1swXSp1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSAoY29vcmRzWzFdKnVuaXQpKydweCc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgdG9wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LXBsYWNlbWVudCcpO1xuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICAgICAgcmV0dXJuIHN1Ym1pdEJ1dHRvblxuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hpcHMoKTtcbiAgICAgICAgb25GaW5pc2goKTtcbiAgICAgICAgc2hpcEJhci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cblxuICAgIGNvbnN0IGhvdmVySW1hZ2UgPSAoZWxlbWVudCxpbWcpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpO1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gU2NyZWVuLmdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24odGlsZS5vZmZzZXRXaWR0aCxjb29yZHMpO1xuICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lsbGVnYWwnKSkge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gcG9zLnRvcDtcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQ7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJQbGFjZW1lbnRTY3JlZW4sXG4gICAgfVxufSIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgbWFrZU1vdmUgPSAodGlsZSwgb3Bwb25lbnRCb2FyZCkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHRpbGUuXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG9wcG9uZW50Qm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vdmUgPT09ICdvYmplY3QnICYmIG1vdmUuaXNTdW5rKCkpIFNjcmVlbi5zdW5rU2hpcChtb3ZlLCBvcHBvbmVudEJvYXJkLmlkKTsgXG4gICAgICAgICAgICBTY3JlZW4ucmVuZGVyUGxheWVyTW92ZSh0aWxlLG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWluZzogZmFsc2UsXG4gICAgICAgIGlzQ29tcDogZmFsc2UsXG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIG1ha2VNb3ZlXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBDb21wdXRlciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIGxldCBjdXJyZW50U3VjY2VzcyA9IFtdO1xuXG4gICAgY29uc3QgbWFrZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxuICAgICAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxuICAgICAgICAgICAgY3J1aXNlcjogU2hpcCgnY3J1aXNlcicpLFxuICAgICAgICAgICAgc3VibWFyaW5lOiBTaGlwKCdzdWJtYXJpbmUnKSxcbiAgICAgICAgICAgIGRlc3Ryb3llcjogU2hpcCgnZGVzdHJveWVyJyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBtYWtlU2hpcHMoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmdldExlbmd0aCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjIpID8gdHJ1ZSA6IGZhbHNlIDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW3NoaXBdLHgseSxvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5ub3QgcGxhY2UgYXQ6IFwiLCB4LCB5LCBcIiB3aXRoIFwiLCBvcmllbnRhdGlvbixcIiBvcmllbnRhdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgICAgICBcbiAgICBjb25zdCBwbGF5VGlsZSA9ICh0aWxlKSA9PiB7XG4gICAgICAgIGlmICghdGlsZSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5oaXRTcXVhcmUodGlsZVswXSx0aWxlWzFdKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGl0ID09PSAnb2JqZWN0JyAmJiBoaXQuaXNTdW5rKCkpIFNjcmVlbi5zdW5rU2hpcChoaXQsIGdhbWVib2FyZC5vcHBvbmVudC5pZCk7IFxuICAgICAgICAgICAgaWYgKGhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib3VuZGFyeSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgY29uc3QgcmFuWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIGNvbnN0IHJhblkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm91bmRhcnkpO1xuICAgICAgICByZXR1cm4gW3JhblgscmFuWV07XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50U3VjY2Vzcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVkdWNhdGVkTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVtYk1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGR1bWJNb3ZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZVRha2VuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGlmICghZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5jaGVja0ZvckVtcHR5KCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIE1vcmUgU3BhY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCFtb3ZlVGFrZW4pIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IGdlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICBtb3ZlVGFrZW4gPSBwbGF5VGlsZShjb29yZHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcG9wdWxhdGVDdXJyZW50U3VjY2Vzcyhjb29yZHMsbW92ZVRha2VuKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JlZW4ucmVuZGVyQ29tcHV0ZXJNb3ZlKGNvb3JkcyxnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRTaGlwID0gKGNvb3Jkcywgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxNb3ZlcyA9IFtbMCwxXSxbMCwtMV0sWzEsMF0sWy0xLDBdXTtcblxuICAgICAgICBjb25zdCBuZXh0TW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvdGVudGlhbE1vdmVzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gcG90ZW50aWFsTW92ZXMuc3BsaWNlKHJhbmRvbUNob2ljZSwxKS5mbGF0KCk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gW2Nvb3Jkc1swXSArIGhlYWRpbmdbMF0sY29vcmRzWzFdICsgaGVhZGluZ1sxXV07XG4gICAgICAgICAgICByZXR1cm4gIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrOm1vdmUsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6aGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVjYWxjdWxhdGVQb3RlbnRpYWxNb3ZlcyA9IChoZWFkaW5nLGF0dGFjaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3SGVhZGluZyA9IFtjb29yZHNbMF0gLSBhdHRhY2tbMF0sY29vcmRzWzFdIC0gYXR0YWNrWzFdXTtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBoZWFkaW5nWzBdICE9IDAgPyAwIDogMSA7XG4gICAgICAgICAgICBuZXdIZWFkaW5nW2F4aXNdID0gaGVhZGluZ1theGlzXSA+IDAgPyBoZWFkaW5nW2F4aXNdKzEgOiBoZWFkaW5nW2F4aXNdLTE7XG4gICAgICAgICAgICBjb25zdCBzdGlsbFZhbGlkID0gcG90ZW50aWFsTW92ZXMuZmlsdGVyKGhlYWRpbmcgPT4gaGVhZGluZ1theGlzXSAhPSAwKTtcbiAgICAgICAgICAgIHN0aWxsVmFsaWQucHVzaChuZXdIZWFkaW5nKTtcbiAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBzdGlsbFZhbGlkLmZvckVhY2goY29vcmQgPT4gcG90ZW50aWFsTW92ZXMucHVzaChjb29yZCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb29yZHMsXG4gICAgICAgICAgICB0YXJnZXQ6c2hpcCxcbiAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzLFxuICAgICAgICAgICAgbmV4dE1vdmUsXG4gICAgICAgICAgICByZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzXG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzID0gKGNvb3Jkcywgc2hpcCkgPT4ge1xuICAgICAgICBjdXJyZW50U3VjY2Vzcy5wdXNoKHRhcmdldFNoaXAoY29vcmRzLHNoaXApKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZHVjYXRlZE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb3ZlVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGN1cnJlbnRTdWNjZXNzWzBdO1xuICAgICAgICBpZiAoIWdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBjdXJyZW50VGFyZ2V0Lm5leHRNb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXlpbmcgOiBcIixjb29yZHMpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gcGxheVRpbGUoY29vcmRzLmF0dGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnICYmIG1vdmVUYWtlbi5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGluZzogXCIsIGN1cnJlbnRTdWNjZXNzWzBdKTtcbiAgICAgICAgICAgIGN1cnJlbnRTdWNjZXNzLnNoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcgJiYgbW92ZVRha2VuID09PSBjdXJyZW50VGFyZ2V0LnRhcmdldCkge1xuICAgICAgICAgICAgY3VycmVudFRhcmdldC5yZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzKGNvb3Jkcy5oZWFkaW5nLGNvb3Jkcy5hdHRhY2spXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MoY29vcmRzLmF0dGFjayxtb3ZlVGFrZW4pXG4gICAgICAgIH1cbiAgICAgICAgU2NyZWVuLnJlbmRlckNvbXB1dGVyTW92ZShjb29yZHMuYXR0YWNrLGdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIGlzQ29tcDp0cnVlLFxuICAgICAgICBnZW5lcmF0ZVJhbmRvbUNvb3JkcyxcbiAgICAgICAgbWFrZU1vdmUsXG4gICAgICAgIHBsYWNlXG4gICAgfVxufSIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gXCIuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IFNISVBfSU1BR0VTID0ge1xuICAgIGJhdHRsZXNoaXA6IGJhdHRsZXNoaXBJbWFnZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgICBsZXQgb25OZXh0O1xuICAgIGxldCBvbldpbjtcbiAgICBsZXQgbW92ZVJlYWR5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRyYXdNYWluTWVudSA9IChzaW5nbGVJbml0aWFsaXNlLCBkb3VibGVJbml0aWFsaXNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IG1lbnVQYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZ2FtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXRpdGxlJyk7XG4gICAgICAgIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwcyEnXG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoZ2FtZVRpdGxlKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtZW51UGFuKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0U2luZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0RG91YmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzdGFydFNpbmdsZSk7XG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzdGFydERvdWJsZSk7XG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoYnV0dG9uQmFyKTtcbiAgICAgICAgc3RhcnRTaW5nbGUudGV4dENvbnRlbnQgPSAnU2luZ2xlIFBsYXllcic7XG4gICAgICAgIHN0YXJ0RG91YmxlLnRleHRDb250ZW50ID0gJ1R3byBQbGF5ZXInO1xuICAgICAgICBzdGFydFNpbmdsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gZ2V0TmFtZShzaW5nbGVJbml0aWFsaXNlKSk7XG4gICAgICAgIHN0YXJ0RG91YmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICBnZXROYW1lKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgZ2V0TmFtZSgoc2Vjb25kTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb3VibGVJbml0aWFsaXNlKG5hbWUsc2Vjb25kTmFtZSk7XG4gICAgICAgICAgICAgICAgfSwgJ3R3bycpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmFtZSA9IChjYiwgc3RyaW5nID0gJ29uZScpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIG5hbWVcIik7XG4gICAgICAgIGNvbnN0IG5hbWVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgbmFtZURpYWxvZy5jbGFzc0xpc3QuYWRkKCdnZXQtbmFtZScpO1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG5hbWVEaWFsb2cpO1xuICAgICAgICBuYW1lRGlhbG9nLnNob3coKTtcbiAgICAgICAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUtaW5wdXQnKTtcbiAgICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gYEFkbWlyYWwgJHtzdHJpbmd9IG5hbWU6IGBcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xuICAgICAgICBjb25zdCBuYW1lU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5hbWVTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBuYW1lRGlhbG9nLmFwcGVuZENoaWxkKG5hbWVGb3JtKTtcbiAgICAgICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICAgICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZVN1Ym1pdCk7XG4gICAgICAgIG5hbWVTdWJtaXQuY2xhc3NMaXN0LmFkZCgnZ2V0LW5hbWUtc3VibWl0Jyk7XG4gICAgICAgIG5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjYihuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgbmFtZURpYWxvZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5hbWVEaWFsb2cpO1xuICAgICAgICB9KVxuICAgIH0gICBcblxuICAgIGNvbnN0IHByaW50U3RyaW5nID0gKHRvUHJpbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWJhcicpO1xuICAgICAgICBzaGlwQmFyLnRleHRDb250ZW50ID0gdG9QcmludDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRCYXR0bGVzaGlwQ29vcmRzID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCB4TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb29yZHNbMF0rNjUpO1xuICAgICAgICByZXR1cm4gYCR7eExldHRlcn0ke2Nvb3Jkc1sxXSsxfWBcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwU2NyZWVuU2V0dXAgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke25hbWV9IHBsYWNlIHlvdXIgc2hpcHMhYDtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncGxhY2Utc2hpcHMtdGl0bGUnKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5pZCA9ICdsZWZ0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGNvbnN0IHNoaXBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcGJhci5pZCA9ICdzaGlwLWJhcic7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2hpcGJhcik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1JlYWR5U2NyZWVuID0gKHBsYXllcixuZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IHJlYWR5RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGNvbnN0IHJlYWR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCByZWFkeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZWFkeURpYWxvZy5jbGFzc0xpc3QuYWRkKCdyZWFkeS1kaWFsb2cnKTtcbiAgICAgICAgcmVhZHlUZXh0LmNsYXNzTGlzdC5hZGQoJ3JlYWR5LXRleHQnKTtcbiAgICAgICAgcmVhZHlCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVhZHktYnV0dG9uJyk7XG4gICAgICAgIHJlYWR5VGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllci5pZH0ncyB0dXJuIWA7XG4gICAgICAgIHJlYWR5QnV0dG9uLnRleHRDb250ZW50ID0gJ1JlYWR5JztcbiAgICAgICAgcmVhZHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZWFkeURpYWxvZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlYWR5RGlhbG9nKTtcbiAgICAgICAgICAgIHJlZnJlc2gobmV4dCxwbGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZHlEaWFsb2cuYXBwZW5kQ2hpbGQocmVhZHlUZXh0KVxuICAgICAgICByZWFkeURpYWxvZy5hcHBlbmRDaGlsZChyZWFkeUJ1dHRvbilcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyZWFkeURpYWxvZylcbiAgICAgICAgcmVhZHlEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZVNjcmVlblNldHVwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnQuaWQgPSAnbGVmdCc7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0LmlkID0gJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICAgICAgY29uc3Qgc2hpcGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwYmFyLmlkID0gJ3NoaXAtYmFyJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaGlwYmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGdldFRhcmdldChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3ZlUmVhZHkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBtb3ZlUmVhZHkgPSBnYW1lYm9hcmQub3Bwb25lbnQubWFrZU1vdmUodGlsZSwgZ2FtZWJvYXJkKVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdEdW1teUFjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdSZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyYXdTaGlwcyhnYW1lYm9hcmQsZ2FtZWJvYXJkLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3SGlkZGVuUmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgLy9kcmF3IHRoZSB0aWxlcyB0byBtYWludGFpbiBzaXplIGNvbnNpc3RlbmN5XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZGRlbi50ZXh0Q29udGVudCA9IFwiRGF0YSBFbmNyeXB0ZWQuLi5cIlxuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJvYXJkJyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGhpZGRlbilcbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoID0gKGN1cnJlbnQscHJldmlvdXMpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHJlY29uQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpO1xuICAgICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZWNvbkFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghY3VycmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIGRyYXdBY3RpdmVCb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1JlY29uQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd0R1bW15QWN0aXZlQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhwcmV2aW91cy5nYW1lYm9hcmQscHJldmlvdXMuZ2FtZWJvYXJkLmlkKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIG1vdmVSZWFkeSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBnZXRCYXR0bGVzaGlwQ29vcmRzKGNvb3Jkcyk7XG4gICAgICAgIHByaW50U3RyaW5nKGBDb21wdXRlciBhdHRhY2tzICR7Y29vcmRTdHJpbmd9Li4uYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtjb29yZFN0cmluZ30gaXMgYSAke2dhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSl9IWApLDUwMClcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja3NcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzdGFsbE5leHRUdXJuID0gYXdhaXQgc3RhbGxDb21wdXRlck1vdmUoKTtcbiAgICAgICAgc3RhbGxOZXh0VHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYXllck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBnZXRCYXR0bGVzaGlwQ29vcmRzKGNvb3Jkcyk7XG4gICAgICAgIHByaW50U3RyaW5nKGAke2dhbWVib2FyZC5vcHBvbmVudC5pZH0gYXR0YWNrcyAke2Nvb3JkU3RyaW5nfS4uLmApO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJpbnRTdHJpbmcoYCR7Y29vcmRTdHJpbmd9IGlzIGEgJHtnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pfSFgKSw1MDApXG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzaG93UGxheWVyc1R1cm4gPSBhd2FpdCBzaG93UGxheWVyUmVzdWx0KCk7XG4gICAgICAgIHNob3dQbGF5ZXJzVHVybigpO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN1bmtTaGlwID0gKHNoaXAsIG5hbWUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtuYW1lfSdzICR7c2hpcC5uYW1lfSBoYXMgYmVlbiBzdW5rIWApLDI1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dQbGF5ZXJSZXN1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllclJlc3VsdFRpbWVyID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJSZXN1bHRUaW1lclxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFsbENvbXB1dGVyTW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaW5pc2hlZCA9IGF3YWl0IHByb21pc2lmeShvbk5leHQsIDIwMDApO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gY29tcHV0ZXJGaW5pc2hlZFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9taXNpZnkgPSAoY2FsbGJhY2ssdGltZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGNhbGxiYWNrKSwgdGltZXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkLG9uYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBnYW1lYm9hcmQuZ2V0U2hpcHMoKTtcbiAgICAgICAgY29uc3QgcGxheXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmJvYXJkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uKHBsYXl6b25lLCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCksIHNoaXApXG4gICAgICAgICAgICBwbGF5em9uZS5hcHBlbmRDaGlsZChkcmF3U2hpcChkaW1lbnNpb25zKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1NoaXAgPSAoZGltZW5zaW9ucykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcC1tYXJrZXInKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxgdG9wOiR7ZGltZW5zaW9ucy50b3B9O2xlZnQ6JHtkaW1lbnNpb25zLmxlZnR9O3dpZHRoOiR7ZGltZW5zaW9ucy5sZW5ndGh9O2hlaWdodDoke2RpbWVuc2lvbnMuaGVpZ2h0fWApO1xuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uID0gKHpvbmUsIHNjYWxlICxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB6b25lLm9mZnNldFdpZHRoIC8gc2NhbGU7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMF0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMV0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLm9yaWVudGF0aW9uID8gc2hpcC5sZW5ndGggKiB1bml0IDogdW5pdCA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0IDogc2hpcC5sZW5ndGggKiB1bml0IDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICBsZW5ndGg6bGVuZ3RoKydweCcsXG4gICAgICAgICAgICBoZWlnaHQ6aGVpZ2h0KydweCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhcmdldCA9IChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIC8vIEZpbmQgdGhlIGNvb3JkaW5hdGVzIHRocm91Z2ggdGhlIGVsZW1lbnRzIHBvc2l0aW9uIGFtb25nc3QgaXRzIHNpYmxpbmdzXG4gICAgICAgIGNvbnN0IHkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJvYXJkLmNoaWxkcmVuLHBhcmVudCk7XG4gICAgICAgIGNvbnN0IHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbix0YXJnZXQpO1xuICAgICAgICByZXR1cm4gW3gseV1cbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyICcsIHdpbm5lciwgJyBpcyB2aWN0b3Jpb3VzIScpXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IHZpY3RvcnlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHZpY3RvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZpY3RvcnlUZXh0LnRleHRDb250ZW50ID0gYEdhbWUgb3ZlciEgJHt3aW5uZXJ9IGlzIHZpY3RvcmlvdXMhYDtcbiAgICAgICAgY29uc3QgdmljdG9yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLnRleHRDb250ZW50ID0gYE1haW4gTWVudWA7XG4gICAgICAgIHZpY3RvcnlNZW51LmNsYXNzTGlzdC5hZGQoJ3ZpY3RvcnktbWVudScpO1xuICAgICAgICB2aWN0b3J5VGV4dC5jbGFzc0xpc3QuYWRkKCd2aWN0b3J5LXRleHQnKTtcbiAgICAgICAgdmljdG9yeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd2aWN0b3J5LWJ1dHRvbicpO1xuICAgICAgICB2aWN0b3J5TWVudS5hcHBlbmRDaGlsZCh2aWN0b3J5VGV4dCk7XG4gICAgICAgIHZpY3RvcnlNZW51LmFwcGVuZENoaWxkKHZpY3RvcnlCdXR0b24pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHZpY3RvcnlNZW51KTtcbiAgICAgICAgdmljdG9yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luKTtcbiAgICB9XG5cblxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXdTaGlwcyxcbiAgICAgICAgZ2FtZVNjcmVlblNldHVwLFxuICAgICAgICBzaGlwU2NyZWVuU2V0dXAsXG4gICAgICAgIHJlbmRlckNvbXB1dGVyTW92ZSxcbiAgICAgICAgZW5kR2FtZSxcbiAgICAgICAgZ2V0VGFyZ2V0LFxuICAgICAgICByZWZyZXNoLFxuICAgICAgICBzdW5rU2hpcCxcbiAgICAgICAgcmVuZGVyUGxheWVyTW92ZSxcbiAgICAgICAgZHJhd01haW5NZW51LFxuICAgICAgICBzaG93UmVhZHlTY3JlZW4sXG4gICAgICAgIHNldCBvbk5leHQobmV4dFR1cm4pIHtcbiAgICAgICAgICAgIG9uTmV4dCA9IG5leHRUdXJuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25XaW4od2luKSB7XG4gICAgICAgICAgICBvbldpbiA9IHdpbjtcbiAgICAgICAgfSxcbiAgICB9XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBsZXQgaGl0Q291bnRlciA9IDA7XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAhb3JpZW50YXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgU0hJUF9TSVpFUyA9IHtcbiAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudGVyKytcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoaGl0Q291bnRlciA+PSBTSElQX1NJWkVTW25hbWVdKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBwb3NpdGlvbjpbXSxcbiAgICAgICAgZ2V0IG9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9yaWVudGF0aW9uKG9yKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IG9yO1xuICAgICAgICB9LFxuICAgICAgICByb3RhdGUsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXllZE5hbWUgPSBuYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGFycmF5ZWROYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXllZE5hbWUuam9pbignJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gU0hJUF9TSVpFU1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS10aWxlOiAgcmdiYSgyMDAsMjAwLDIwMCwwLjEpO1xuICAgIC0tdGlsZS1hdHRhY2s6IHJnYmEoMjU1LDE1MCwxNTAsMC45KTtcbiAgICAtLXRpbGUtaGl0OiByZ2JhKDI1NSwyMDAsMjAwLDAuOCk7XG4gICAgLS10aWxlLW1pc3M6IHJnYmEoMjAwLDIwMCwyNTUsMC44KTtcbiAgICAtLXRpbGUtaG92ZXI6IHJnYmEoMjMwLDIwMCwyMDAsMC40KTtcbn1cblxuI2dhbWVhcmVhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNsZWZ0IC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuXG4jcmlnaHQgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuI2xlZnQsXG4jcmlnaHQge1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuLnRpbGUubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcbn1cblxuLnRpbGUuaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cblxuLnRpbGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZsZXg6MTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aWxlKTtcbiAgICBib3JkZXI6IDA7XG59XG5cbi50aWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcbn1cblxuYnV0dG9uLnRpbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXIpO1xufVxuXG4uaGlkZGVuLWJvYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgYm90dG9tOjA7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OjA7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgd2lkdGg6NTAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI3BsYXllci1vbmUsXG4jcGxheWVyLXR3byB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5zaGlwLW1hcmtlciB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLyogYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcbiAgICBib3JkZXI6IDA7XG59ICovXG5cbmJ1dHRvbi50aWxlLmF0dGFjayB7XG4gICAgYW5pbWF0aW9uOiBhdHRhY2stcHVsc2UgMC41cyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgYXR0YWNrLXB1bHNlIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtYXR0YWNrKSA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcbiAgICB9XG59XG5cbi5wbGFjZS1zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBsYWNlLXNoaXA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzRkY7XG59XG5cbi5wbGFjZS1zaGlwOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDMlKTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBib3JkZXI6MDtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59XG5cbi5wbGFjZWhvbGRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ub3V0LW9mLWJvdW5kcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ucmVhZHktZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLE1BQU07SUFDTixVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO0lBQ3pDO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdGlsZTogIHJnYmEoMjAwLDIwMCwyMDAsMC4xKTtcXG4gICAgLS10aWxlLWF0dGFjazogcmdiYSgyNTUsMTUwLDE1MCwwLjkpO1xcbiAgICAtLXRpbGUtaGl0OiByZ2JhKDI1NSwyMDAsMjAwLDAuOCk7XFxuICAgIC0tdGlsZS1taXNzOiByZ2JhKDIwMCwyMDAsMjU1LDAuOCk7XFxuICAgIC0tdGlsZS1ob3ZlcjogcmdiYSgyMzAsMjAwLDIwMCwwLjQpO1xcbn1cXG5cXG4jZ2FtZWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2xlZnQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jcmlnaHQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNsZWZ0LFxcbiNyaWdodCB7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi50aWxlLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3MpO1xcbn1cXG5cXG4udGlsZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XFxufVxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi50aWxlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZmxleDoxO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRpbGUpO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi50aWxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XFxufVxcblxcbmJ1dHRvbi50aWxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlcik7XFxufVxcblxcbi5oaWRkZW4tYm9hcmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBib3R0b206MDtcXG4gICAgbGVmdDowO1xcbiAgICByaWdodDowO1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgd2lkdGg6NTAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhpdCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcGxheWVyLW9uZSxcXG4jcGxheWVyLXR3byB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4uc2hpcC1tYXJrZXIge1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLyogYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcXG4gICAgYm9yZGVyOiAwO1xcbn0gKi9cXG5cXG5idXR0b24udGlsZS5hdHRhY2sge1xcbiAgICBhbmltYXRpb246IGF0dGFjay1wdWxzZSAwLjVzIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYXR0YWNrLXB1bHNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1hdHRhY2spIDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xcbiAgICB9XFxufVxcblxcbi5wbGFjZS1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wbGFjZS1zaGlwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzNGRjtcXG59XFxuXFxuLnBsYWNlLXNoaXA6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDMlKTtcXG59XFxuXFxuLnBsYWNlaG9sZGVyIHtcXG4gICAgYm9yZGVyOjA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcblxcbi5wbGFjZWhvbGRlcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLm91dC1vZi1ib3VuZHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5yZWFkeS1kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgU2NyZWVuIGZyb20gXCIuL21vZHVsZXMvc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBQbGFjZW1lbnRCb2FyZCB9IGZyb20gXCIuL21vZHVsZXMvcGxhY2VtZW50Qm9hcmQuanNcIjtcbmltcG9ydCB7IFBsYXllciAsIENvbXB1dGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL21vZHVsZXMvZ2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50UGxheWVyXG4gICAgY29uc3QgcGxheWVycyA9IFtdO1xuICAgXG4gICAgY29uc3Qgc2luZ2xlSW5pdGlhbGlzZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKDEwLCBuYW1lKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoMTAsIFwiQ29tcHV0ZXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihuYW1lLCBwbGF5ZXJPbmVCb2FyZCk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3byA9IENvbXB1dGVyKG5hbWUsIHBsYXllclR3b0JvYXJkKTtcbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllck9uZSk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJUd28pO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5vcHBvbmVudCA9IHBsYXllclR3bztcbiAgICAgICAgcGxheWVyVHdvQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJPbmU7XG4gICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRvdWJsZUluaXRpYWxpc2UgPSAobmFtZSwgc2Vjb25kTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZCgxMCwgbmFtZSk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gR2FtZWJvYXJkKDEwLCBzZWNvbmROYW1lKTtcbiAgICAgICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKG5hbWUsIHBsYXllck9uZUJvYXJkKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKHNlY29uZE5hbWUsIHBsYXllclR3b0JvYXJkKTtcbiAgICAgICAgcGxheWVycy5wdXNoKHBsYXllck9uZSk7XG4gICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJUd28pO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5vcHBvbmVudCA9IHBsYXllclR3bztcbiAgICAgICAgcGxheWVyVHdvQm9hcmQub3Bwb25lbnQgPSBwbGF5ZXJPbmU7XG4gICAgICAgIHN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxpc2VHYW1lID0gKCkgPT4ge1xuICAgICAgICBTY3JlZW4uZ2FtZVNjcmVlblNldHVwKCk7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzWzFdO1xuICAgICAgICBTY3JlZW4ub25OZXh0ID0gdHVybk92ZXI7XG4gICAgICAgIG5leHRQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0dXJuT3ZlciA9ICgpID0+IHtcbiAgICAgICAgaWYoY3VycmVudFBsYXllci5nYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLmNoZWNrRm9yQWxsU3VuaygpKSB7XG4gICAgICAgICAgICBTY3JlZW4uZW5kR2FtZShjdXJyZW50UGxheWVyLmlkKTtcbiAgICAgICAgICAgIHBsYXllcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBuZXh0UGxheWVyKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFBsYXllciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBjdXJyZW50UGxheWVyO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gY3VycmVudFBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdIDtcbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuaXNDb21wKSB7XG4gICAgICAgICAgICBTY3JlZW4ucmVmcmVzaChjdXJyZW50UGxheWVyLHByZXZpb3VzKTtcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIubWFrZU1vdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmICghY3VycmVudFBsYXllci5nYW1lYm9hcmQub3Bwb25lbnQuaXNDb21wKSB7XG4gICAgICAgICAgICBTY3JlZW4uc2hvd1JlYWR5U2NyZWVuKGN1cnJlbnRQbGF5ZXIscHJldmlvdXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2NyZWVuLnJlZnJlc2goY3VycmVudFBsYXllcixwcmV2aW91cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKHBsYXllciwgY2IpID0+IHtcbiAgICAgICAgLy8gY29uc3Qgb3Bwb25lbnRCb2FyZCA9IHBsYXllciA9PT0gcGxheWVyT25lID8gcGxheWVyVHdvLmdhbWVib2FyZCA6IHBsYXllck9uZS5nYW1lYm9hcmQ7XG4gICAgICAgIFNjcmVlbi5zaGlwU2NyZWVuU2V0dXAocGxheWVyLmlkKTtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gUGxhY2VtZW50Qm9hcmQocGxheWVyLmdhbWVib2FyZCwgY2IpO1xuICAgICAgICBwbGFjZW1lbnQucmVuZGVyUGxhY2VtZW50U2NyZWVuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJQbGFjZSA9IChwbGF5ZXIsIGNiKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG4gICAgICAgIHBsYXllci5wbGFjZSgpO1xuICAgICAgICBjYigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgU2NyZWVuLm9uV2luID0gKCkgPT4gU2NyZWVuLmRyYXdNYWluTWVudShzaW5nbGVJbml0aWFsaXNlLGRvdWJsZUluaXRpYWxpc2UpO1xuICAgICAgICBjb25zdCBhZnRlclBsYWNlID0gcGxheWVyc1sxXS5pc0NvbXAgPyBjb21wdXRlclBsYWNlIDogc2hpcFBsYWNlbWVudCA7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQocGxheWVyc1swXSwgKCkgPT4gYWZ0ZXJQbGFjZShwbGF5ZXJzWzFdLCBpbml0aWFsaXNlR2FtZSkpO1xuICAgIH1cblxuICAgIFNjcmVlbi5kcmF3TWFpbk1lbnUoc2luZ2xlSW5pdGlhbGlzZSxkb3VibGVJbml0aWFsaXNlKTtcblxufSkoKTsiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiR2FtZWJvYXJkIiwic2l6ZSIsImFyZ3VtZW50cyIsInNoaXBzIiwidHVybnMiLCJTcXVhcmUiLCJ4IiwieSIsInNoaXAiLCJoaXQiLCJjb29yZHMiLCJidWlsZFJvdyIsImluZGV4IiwiY29sdW1ucyIsImJ1aWxkU3F1YXJlIiwicm93cyIsImdldExlbmd0aCIsImdldFNxdWFyZSIsImdhbWVTcXVhcmUiLCJzcXVhcmVTdGF0dXMiLCJnZXRTaGlwcyIsImhpdFNxdWFyZSIsIkVycm9yIiwiY2hlY2tGb3JFbXB0eSIsInBsYWNlU2hpcCIsImhvcml6b250YWwiLCJheGlzIiwiY2hlY2tCb3VuZGFyaWVzIiwiY2hlY2tGb3JTaGlwcyIsIm9yaWVudGF0aW9uIiwicG9zaXRpb24iLCJjbGVhclNoaXAiLCJwb3AiLCJzcGxpY2UiLCJpbmRleE9mIiwicmFuZ2UiLCJldmVyeSIsImNoZWNrRm9yQWxsU3VuayIsImFsbENvbmRpdGlvbiIsImZvckVhY2giLCJpc1N1bmsiLCJjb25kaXRpb24iLCJjbGVhckFsbCIsImN1ciIsImNvb3JkIiwib3Bwb25lbnQiLCJTY3JlZW4iLCJTaGlwIiwiU0hJUF9JTUFHRVMiLCJQbGFjZW1lbnRCb2FyZCIsImdhbWVib2FyZCIsIm9uRmluaXNoIiwicGxhY2luZyIsInNoaXBCYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FycmllciIsInBsYWNlZCIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwic2V0U2hpcHMiLCJPYmplY3QiLCJrZXlzIiwibmV3U2hpcCIsImRyYXdQbGFjZW1lbnRCb2FyZCIsInpvbmVEb20iLCJib2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJvd0NvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsImoiLCJ0aWxlIiwic2V0QXR0cmlidXRlIiwicmVuZGVyUGxhY2VtZW50U2NyZWVuIiwiZHJhd05leHRTaGlwQnV0dG9uIiwibmV4dFNoaXAiLCJtYWtlTmV4dFNoaXBCdXR0b24iLCJidXR0b24iLCJyZW5kZXJTdWJtaXRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJtYWtlU2hpcCIsInNoaXBQbGFjZW1lbnQiLCJzdWJtaXQiLCJjbGVhclNoaXBCYXIiLCJleGlzdGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwia2V5IiwiYnV0dG9uVGV4dCIsIlN0cmluZyIsInRvVXBwZXJDYXNlIiwidGV4dENvbnRlbnQiLCJyb3RhdGUiLCJjcmVhdGVUZW1wbGF0ZSIsInRlbXBsYXRlIiwibmFtZSIsInN0eWxlIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRJbWFnZSIsImNsZWFyUm90YXRlQnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZVJvdGF0ZUJ1dHRvbiIsInRpbGVzIiwicmVuZGVyU2hpcCIsIm9mZnNldFdpZHRoIiwiaWxsZWdhbFNxdWFyZXMiLCJmaW5kSWxsZWdhbFNxdWFyZXMiLCJyZW1vdmVNYXJrZXIiLCJyb3RhdGVTaGlwIiwiaG92ZXJJbWFnZSIsImluY2x1ZGVzIiwicmVtb3ZlIiwiZSIsInBsYWNlVGVtcGxhdGUiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib29iTW92ZSIsIl9sb29wIiwic3BhY2VTZXQiLCJTZXQiLCJpbGxNb3ZlcyIsImdldE9jY3VwaWVkU3BhY2VzIiwiYXJyYXlQb2ludGVyIiwic3BhY2UiLCJuZXh0U3BhY2UiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfcmV0IiwibWFya2VyIiwic3BhY2VzIiwiY3VycmVudENvb3JkIiwiaW1hZ2UiLCJ1bml0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsIm1vdmVTaGlwIiwiZ2V0VGFyZ2V0IiwiY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbiIsInpJbmRleCIsInN1Ym1pdEJ1dHRvbiIsImlubmVySFRNTCIsImVsZW1lbnQiLCJpbWciLCJldmVudCIsInBvcyIsImNvbnRhaW5zIiwiUGxheWVyIiwibWFrZU1vdmUiLCJvcHBvbmVudEJvYXJkIiwibW92ZSIsIl90eXBlb2YiLCJzdW5rU2hpcCIsInJlbmRlclBsYXllck1vdmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwbGF5aW5nIiwiaXNDb21wIiwiQ29tcHV0ZXIiLCJjdXJyZW50U3VjY2VzcyIsIm1ha2VTaGlwcyIsInBsYWNlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZXJyIiwicGxheVRpbGUiLCJnZW5lcmF0ZVJhbmRvbUNvb3JkcyIsImJvdW5kYXJ5IiwicmFuWCIsInJhblkiLCJlZHVjYXRlZE1vdmUiLCJkdW1iTW92ZSIsIm1vdmVUYWtlbiIsInBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MiLCJyZW5kZXJDb21wdXRlck1vdmUiLCJ0YXJnZXRTaGlwIiwicG90ZW50aWFsTW92ZXMiLCJuZXh0TW92ZSIsInJhbmRvbUNob2ljZSIsImhlYWRpbmciLCJmbGF0IiwiYXR0YWNrIiwicmVjYWxjdWxhdGVQb3RlbnRpYWxNb3ZlcyIsIm5ld0hlYWRpbmciLCJzdGlsbFZhbGlkIiwiZmlsdGVyIiwiY3VycmVudFRhcmdldCIsInNoaWZ0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIk9wIiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcHBseSIsImJhdHRsZXNoaXBJbWFnZSIsIm9uTmV4dCIsIm9uV2luIiwibW92ZVJlYWR5IiwiZHJhd01haW5NZW51Iiwic2luZ2xlSW5pdGlhbGlzZSIsImRvdWJsZUluaXRpYWxpc2UiLCJib2R5IiwibWVudVBhbiIsImdhbWVUaXRsZSIsImJ1dHRvbkJhciIsInN0YXJ0U2luZ2xlIiwic3RhcnREb3VibGUiLCJnZXROYW1lIiwic2Vjb25kTmFtZSIsImNiIiwic3RyaW5nIiwibmFtZURpYWxvZyIsInNob3ciLCJuYW1lRm9ybSIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsIm5hbWVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInByaW50U3RyaW5nIiwidG9QcmludCIsImdldEJhdHRsZXNoaXBDb29yZHMiLCJ4TGV0dGVyIiwiZnJvbUNoYXJDb2RlIiwic2hpcFNjcmVlblNldHVwIiwidGl0bGUiLCJnYW1lYXJlYSIsInNoaXBiYXIiLCJzaG93UmVhZHlTY3JlZW4iLCJwbGF5ZXIiLCJyZWFkeURpYWxvZyIsInJlYWR5VGV4dCIsInJlYWR5QnV0dG9uIiwicmVmcmVzaCIsInNob3dNb2RhbCIsImdhbWVTY3JlZW5TZXR1cCIsInJpZ2h0IiwiZHJhd0FjdGl2ZUJvYXJkIiwiZHJhd0R1bW15QWN0aXZlQm9hcmQiLCJkcmF3UmVjb25Cb2FyZCIsImRyYXdTaGlwcyIsImRyYXdIaWRkZW5SZWNvbkJvYXJkIiwiaGlkZGVuIiwiY3VycmVudCIsInByZXZpb3VzIiwiYWN0aXZlQXJlYSIsInJlY29uQXJlYSIsIl9yZWYiLCJfY2FsbGVlIiwiYWN0aXZlWm9uZSIsInJvdyIsImNlbGwiLCJjb29yZFN0cmluZyIsInJlbW92ZUF0dGFja01hcmtlciIsInN0YWxsTmV4dFR1cm4iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY2hpbGRyZW4iLCJwcm9taXNpZnkiLCJzZXRUaW1lb3V0Iiwic3RhbGxDb21wdXRlck1vdmUiLCJfeCIsIl94MiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJzaG93UGxheWVyc1R1cm4iLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzaG93UGxheWVyUmVzdWx0IiwiX3gzIiwiX3g0IiwiX3JlZjMiLCJfY2FsbGVlMyIsInBsYXllclJlc3VsdFRpbWVyIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3JlZjQiLCJfY2FsbGVlNCIsImNvbXB1dGVyRmluaXNoZWQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJjYWxsYmFjayIsInRpbWVyIiwib25ib2FyZCIsInBsYXl6b25lIiwiZGltZW5zaW9ucyIsImNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uIiwiZHJhd1NoaXAiLCJ6b25lIiwic2NhbGUiLCJwYXJlbnQiLCJBcnJheSIsImVuZEdhbWUiLCJ3aW5uZXIiLCJ2aWN0b3J5TWVudSIsInZpY3RvcnlUZXh0IiwidmljdG9yeUJ1dHRvbiIsIm5leHRUdXJuIiwid2luIiwiaGl0Q291bnRlciIsIlNISVBfU0laRVMiLCJvciIsImFycmF5ZWROYW1lIiwic3BsaXQiLCJHYW1lIiwiY3VycmVudFBsYXllciIsInBsYXllcnMiLCJwbGF5ZXJPbmVCb2FyZCIsInBsYXllclR3b0JvYXJkIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwic3RhcnRHYW1lIiwiaW5pdGlhbGlzZUdhbWUiLCJ0dXJuT3ZlciIsIm5leHRQbGF5ZXIiLCJwbGFjZW1lbnQiLCJjb21wdXRlclBsYWNlIiwiYWZ0ZXJQbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=