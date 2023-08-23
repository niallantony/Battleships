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



var PlacementBoard = function PlacementBoard(gameboard) {
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
        tile.id = String(j) + i;
        tile.setAttribute('style', 'position:relative;');
        tile.classList.add(gameboard.squareStatus(j, i));
        rowContainer.appendChild(tile);
      }
    }
  };
  var renderPlacementScreen = function renderPlacementScreen() {
    drawPlacementBoard();
    var shipBar = document.getElementById('ship-bar');
    var shipsNames = Object.keys(ships);
    shipsNames.forEach(function (ship) {
      var buttonText = String('Place ' + ship).toUpperCase();
      var button = document.createElement('button');
      button.classList.add('place-ship');
      button.id = ship;
      button.textContent = buttonText;
      shipBar.appendChild(button);
      button.addEventListener('click', function () {
        shipBar.removeChild(button);
        var ship = makeShip(button);
        shipPlacement(ship, ships[ship]);
      });
    });
  };
  var makeShip = function makeShip(button) {
    var ship = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship)(button.id);
    ship.rotate();
    console.log(findIllegalSquares(ship));
    return ship;
  };
  var shipPlacement = function shipPlacement(ship) {
    var tiles = document.querySelectorAll('.tile');
    var template = document.createElement('button');
    template.classList.add('placeholder');
    template.id = ship.name;
    template.style.position = 'absolute';
    template.style.top = '0px';
    template.style.left = '0px';
    template.style.backgroundImage = "url(".concat(_screen_js__WEBPACK_IMPORTED_MODULE_0__.SHIP_IMAGES[ship.name]);
    var board = document.getElementById('left');
    board.appendChild(template);
    renderShip(template, tiles[0].offsetWidth, ship);
    console.log(ship.orientation);
    tiles.forEach(function (tile) {
      if (isOutOfBounds(ship.orientation, ship.length, tile)) return;
      hoverImage(tile, template);
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
        illegalSquares.push(oobMove);
      }
    }
    return illegalSquares;
  };
  var isOutOfBounds = function isOutOfBounds(orientation, length, tile) {
    var tileLength = tile.parentNode.children.length;
    if (orientation) {
      if (length + Number(tile.id.split('')[0]) > tileLength) return true;
      return false;
    } else {
      if (length + Number(tile.id.split('')[1]) > tileLength) return true;
      return false;
    }
  };
  var renderShip = function renderShip(image, unit, ship) {
    var width = ship.orientation ? unit * ship.length + 'px' : unit + 'px';
    var height = ship.orientation ? unit + 'px' : unit * ship.length + 'px';
    image.style.width = width;
    image.style.height = height;
  };
  var moveShip = function moveShip(template, ship) {
    template.parentNode.removeChild(template);
    shipPlacement(ship);
  };
  var placeTemplate = function placeTemplate(tile, template, ship) {
    var coords = _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTarget(tile);
    var position = calculateTemplatePosition(tile.offsetWidth, coords);
    template.style.top = position.top;
    template.style.left = position.left;
    template.style.zIndex = 10;
    ships[template.id].coords = coords;
    ships[template.id].placed = true;
    template.addEventListener('click', function (e) {
      return moveShip(e.target.closest('.placeholder'), ship);
    });
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach(function (tile) {
      tile.replaceWith(tile.cloneNode(true));
    });
    if (!checkForUnplaced()) {
      renderSubmitButton();
    } else {
      removeSubmitButton();
    }
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
    var shipBar = document.getElementById('ship-bar');
    var submitButton = document.createElement('button');
    submitButton.classList.add('submit-placement');
    shipBar.appendChild(submitButton);
  };
  var removeSubmitButton = function removeSubmitButton() {
    var submitButton = document.querySelectorAll('.submit-placement');
    submitButton.forEach(function (button) {
      return button.parentNode.removeChild(button);
    });
  };
  var hoverImage = function hoverImage(element, img) {
    var event = element.addEventListener('mouseover', function (e) {
      var coords = _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTarget(e.target.closest('.tile'));
      var pos = calculateTemplatePosition(e.target.closest('.tile').offsetWidth, coords);
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
  var SQUARES_AROUND = function SQUARES_AROUND(x, y) {
    return {
      up: [x, y - 1],
      right: [x + 1, y],
      down: [x, y + 1],
      left: [x - 1, y]
    };
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
    makeMove: makeMove
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,oCAAoC;IACpC,iCAAiC;IACjC,kCAAkC;IAClC,mCAAmC;AACvC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,MAAM;IACN,UAAU;IACV,SAAS;IACT,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,KAAK;IACL,QAAQ;IACR,MAAM;IACN,OAAO;IACP,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,aAAa;IACb,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;;;;;GAKG;;AAEH;IACI,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI;QACI,qCAAqC;IACzC;IACA;QACI,6BAA6B;IACjC;AACJ;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":[":root {\n    --tile:  rgba(200,200,200,0.1);\n    --tile-attack: rgba(255,150,150,0.9);\n    --tile-hit: rgba(255,200,200,0.8);\n    --tile-miss: rgba(200,200,255,0.8);\n    --tile-hover: rgba(230,200,200,0.4);\n}\n\n#gamearea {\n    display: flex;\n}\n\n#right {\n    position: relative;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n#left .ship {\n    background-color: blue;\n}\n\n#right .ship {\n    background-color: red;\n}\n\n#left,\n#right {\n    margin: 2rem;\n    position:relative;\n}\n\n.miss {\n    background-color: var(--tile-miss);\n}\n\n.hit {\n    background-color: var(--tile-hit);\n}\n\n.row {\n    display:flex;\n}\n\n.tile {\n    height: 100%;\n    width: 100%;\n    padding: 1rem;\n    flex:1;\n    z-index: 2;\n    margin: 0;\n    background: var(--tile);\n    border: 0;\n}\n\ndiv.tile {\n    background-color: var(--tile);\n}\n\nbutton.tile:hover {\n    background-color: var(--tile-hover);\n}\n\n.hidden-board {\n    position: absolute;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    margin:auto;\n    width:50%;\n    height: fit-content;\n    padding: 1rem;\n    background-color: var(--tile-hit);\n    text-align: center;\n    border-radius: 5px;\n}\n\n#player-one,\n#player-two {\n    position:relative;\n}\n\n.ship-marker {\n    position:absolute;\n    background-color: aqua;\n}\n\n/* button {\n    padding: 0;\n    margin: 0;\n    background-color: var(--tile);\n    border: 0;\n} */\n\nbutton.tile.attack {\n    animation: attack-pulse 0.5s infinite;\n    animation-direction: alternate;\n}\n\n@keyframes attack-pulse {\n    0% {\n        background-color: var(--tile-attack) ;\n    }\n    100% {\n        background-color: var(--tile);\n    }\n}\n\n.place-ship {\n    background-color: blue;\n    border-radius: 5px;\n    padding: 1rem;\n    color: white;\n}\n\n.place-ship:hover {\n    background-color: #3333FF;\n}\n\n.place-ship:active {\n    transform: scale(103%);\n}\n\n.placeholder {\n    border:0;\n    margin:0;\n    padding:0;\n}\n\n.placeholder:hover {\n    background-color: rgb(255, 255, 255);\n}"],"sourceRoot":""}]);
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
  var playerOneBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, "player-one");
  var playerTwoBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)(10, "player-two");
  var playerOne = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Player)("player-one", playerTwoBoard);
  var playerTwo = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_2__.Computer)("player-two", playerOneBoard);
  playerOneBoard.opponent = playerTwo;
  playerTwoBoard.opponent = playerOne;
  var initialiseGame = function initialiseGame(playerOne) {
    return playerOne;
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
  var shipPlacement = function shipPlacement(player) {
    var placement = (0,_modules_placementBoard_js__WEBPACK_IMPORTED_MODULE_1__.PlacementBoard)(player.gameboard);
    placement.renderPlacementScreen();
  };
  shipPlacement(playerOne);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFP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LENBQUM7RUFDaEIsQ0FBQztFQUVELElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckIsSUFBTTdELFFBQVEsR0FBRzRELGFBQWE7SUFDOUJBLGFBQWEsR0FBR0EsYUFBYSxLQUFLcEUsU0FBUyxHQUFHaUUsU0FBUyxHQUFHakUsU0FBUztJQUNuRTNQLDBEQUFNLENBQUNpUSxPQUFPLENBQUM4RCxhQUFhLEVBQUM1RCxRQUFRLENBQUM7SUFDdEMsSUFBSTRELGFBQWEsQ0FBQzVNLE1BQU0sRUFBRTtNQUN0QjRNLGFBQWEsQ0FBQ3hPLFFBQVEsQ0FBQyxDQUFDO0lBQzVCO0VBQ0osQ0FBQztFQUVELElBQU05QyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUl3UixNQUFNLEVBQUs7SUFDOUIsSUFBTUMsU0FBUyxHQUFHL1QsMEVBQWMsQ0FBQzhULE1BQU0sQ0FBQzdULFNBQVMsQ0FBQztJQUNsRDhULFNBQVMsQ0FBQ25TLHFCQUFxQixDQUFDLENBQUM7RUFDckMsQ0FBQztFQUVEVSxhQUFhLENBQUNrTixTQUFTLENBQUM7O0VBRXhCOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQSxPQUFPO0lBQ0htRSxRQUFRLEVBQVJBO0VBQ0osQ0FBQztBQUNMLENBQUMsQ0FBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9wbGFjZW1lbnRCb2FyZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2NyZWVuLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKHNpemUsaWQgPSBudWxsKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICBjb25zdCB0dXJucyA9IFtdO1xuICAgIGNvbnN0IFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNoaXA6IG51bGwsXG4gICAgICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICAgICAgY29vcmRzOiBbeCx5XSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkUm93ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKykge1xuICAgICAgICAgICAgY29sdW1ucy5wdXNoKFNxdWFyZShpLGluZGV4KSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRTcXVhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIHJvd3MucHVzaChidWlsZFJvdyhpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lU3F1YXJlW3ldW3hdO1xuICAgIH1cblxuICAgIGNvbnN0IHNxdWFyZVN0YXR1cyA9ICh4LHkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0ICYmIGdhbWVTcXVhcmVbeV1beF0uc2hpcCkgcmV0dXJuICdoaXQnO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQpIHJldHVybiAnbWlzcyc7XG4gICAgICAgIHJldHVybiAnZW1wdHknXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lU3F1YXJlID0gYnVpbGRTcXVhcmUoc2l6ZSk7XG5cbiAgICBjb25zdCBoaXRTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmICghZ2FtZVNxdWFyZVt5XSB8fCAhZ2FtZVNxdWFyZVt5XVt4XSkgdGhyb3cgbmV3IEVycm9yKFwiT3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0KSB0aHJvdyBuZXcgRXJyb3IoXCJTcXVhcmUgYWxyZWFkeSBoaXRcIik7XG4gICAgICAgIGdhbWVTcXVhcmVbeV1beF0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgdHVybnMucHVzaChbeCx5XSk7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLnNoaXApIHtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVbeV1beF0uc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBnYW1lU3F1YXJlW3ldW3hdLnNoaXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBjaGVja0ZvckVtcHR5ID0gKCkgPT4ge1xuICAgICAgICBpZiAodHVybnMubGVuZ3RoIDwgKHNpemUqc2l6ZSkpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAseCx5LGhvcml6b250YWwpID0+IHtcbiAgICAgICAgY29uc3QgYXhpcyA9IGhvcml6b250YWwgPyB4IDogeSA7XG4gICAgICAgIGlmICghY2hlY2tCb3VuZGFyaWVzKGF4aXMsc2hpcC5sZW5ndGgpKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIGlmICghY2hlY2tGb3JTaGlwcyhzaGlwLmxlbmd0aCx4LHksaG9yaXpvbnRhbCkpIHRocm93IG5ldyBFcnJvcihcIlNwYWNlIG9jY3VwaWVkXCIpO1xuICAgICAgICBzaGlwLm9yaWVudGF0aW9uID0gaG9yaXpvbnRhbDtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIGdhbWVTcXVhcmVbeV1beCtpXS5zaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uLnB1c2goZ2FtZVNxdWFyZVt5XVt4K2ldLmNvb3Jkcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbWVTcXVhcmVbeStpXVt4XS5zaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uLnB1c2goZ2FtZVNxdWFyZVt5K2ldW3hdLmNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBzaGlwLnBvc2l0aW9uLnBvcCgpO1xuICAgICAgICAgICAgZ2FtZVNxdWFyZVtjb29yZHNbMV1dW2Nvb3Jkc1swXV0uc2hpcCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMuc3BsaWNlKHNoaXBzLmluZGV4T2Yoc2hpcCksMSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JTaGlwcyA9IChsZW5ndGgseCx5LGhvcml6b250YWwpID0+IHtcbiAgICAgICAgLy9CdWlsZHMgYW4gYXJyYXkgb2Ygc3BhY2VzIHRoZSBzaGlwIHdpbGwgb2NjdXB5XG4gICAgICAgIGNvbnN0IHJhbmdlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICByYW5nZS5wdXNoKGdhbWVTcXVhcmVbeV1beCtpXS5zaGlwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZ2UucHVzaChnYW1lU3F1YXJlW3kraV1beF0uc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9SZXR1cm5zIHRydWUgaWYgYWxsIGFyZSBlbXB0eVxuICAgICAgICByZXR1cm4gcmFuZ2UuZXZlcnkoc2hpcCA9PiBzaGlwID09PSBudWxsKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNoZWNrQm91bmRhcmllcyA9IChheGlzLGxlbmd0aCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpcyArIGxlbmd0aCA+IHNpemUgPyBmYWxzZSA6IHRydWU7IFxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yQWxsU3VuayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQ29uZGl0aW9uID0gW11cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gYWxsQ29uZGl0aW9uLnB1c2goc2hpcC5pc1N1bmsoKSkpO1xuICAgICAgICByZXR1cm4gYWxsQ29uZGl0aW9uLmV2ZXJ5KGNvbmRpdGlvbiA9PiBjb25kaXRpb24gPT09IHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaGlwcy5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBjdXIgPSBzaGlwcy5wb3AoKTtcbiAgICAgICAgICAgIGN1ci5wb3NpdGlvbi5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWVTcXVhcmVbY29vcmRbMV1dW2Nvb3JkWzBdXS5zaGlwID0gbnVsbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgaGl0U3F1YXJlLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGNsZWFyU2hpcCxcbiAgICAgICAgY2hlY2tGb3JBbGxTdW5rLFxuICAgICAgICBnZXRTcXVhcmUsXG4gICAgICAgIGNoZWNrRm9yRW1wdHksXG4gICAgICAgIGdldFNoaXBzLFxuICAgICAgICBjbGVhckFsbCxcbiAgICAgICAgc3F1YXJlU3RhdHVzLFxuICAgICAgICBvcHBvbmVudDpudWxsLFxuICAgICAgICBpZCxcbiAgICB9XG5cbn07IiwiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9zY3JlZW4uanNcIlxuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIlxuaW1wb3J0IHsgU0hJUF9JTUFHRVMgfSBmcm9tIFwiLi9zY3JlZW4uanNcIlxuXG5leHBvcnQgY29uc3QgUGxhY2VtZW50Qm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSB7XG4gICAgICAgIGNhcnJpZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjUsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGJhdHRsZXNoaXA6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjQsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNydWlzZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjMsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1hcmluZTp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MyxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveWVyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDoyLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gU2hpcChzaGlwKTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAobmV3U2hpcCxzaGlwc1tzaGlwXS5jb29yZHNbMF0sc2hpcHNbc2hpcF0uY29vcmRzWzFdLHNoaXBzW3NoaXBdLmhvcml6b250YWwpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yVW5wbGFjZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzaGlwcykuc29tZSgoc2hpcCkgPT4ge3JldHVybiAhc2hpcHNbc2hpcF0ucGxhY2VkfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UGxhY2VtZW50Qm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5pZCA9IFN0cmluZyhqKStpO1xuICAgICAgICAgICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3Bvc2l0aW9uOnJlbGF0aXZlOycpXG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxhY2VtZW50U2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBkcmF3UGxhY2VtZW50Qm9hcmQoKTtcbiAgICAgICAgY29uc3Qgc2hpcEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWJhcicpO1xuICAgICAgICBjb25zdCBzaGlwc05hbWVzID0gT2JqZWN0LmtleXMoc2hpcHMpO1xuICAgICAgICBzaGlwc05hbWVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBTdHJpbmcoJ1BsYWNlICcrc2hpcCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IHNoaXA7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xuICAgICAgICAgICAgc2hpcEJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcEJhci5yZW1vdmVDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBtYWtlU2hpcChidXR0b24pO1xuICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCxzaGlwc1tzaGlwXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoYnV0dG9uLmlkKTtcbiAgICAgICAgc2hpcC5yb3RhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coZmluZElsbGVnYWxTcXVhcmVzKHNoaXApKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cblxuXG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgdGVtcGxhdGUuaWQgPSBzaGlwLm5hbWU7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1NISVBfSU1BR0VTW3NoaXAubmFtZV19YDtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHJlbmRlclNoaXAodGVtcGxhdGUsdGlsZXNbMF0ub2Zmc2V0V2lkdGgsc2hpcCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXAub3JpZW50YXRpb24pO1xuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPdXRPZkJvdW5kcyhzaGlwLm9yaWVudGF0aW9uLHNoaXAubGVuZ3RoLHRpbGUpKSByZXR1cm47XG4gICAgICAgICAgICBob3ZlckltYWdlKHRpbGUsdGVtcGxhdGUpO1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgICAgICBwbGFjZVRlbXBsYXRlKGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJyksdGVtcGxhdGUsc2hpcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmluZElsbGVnYWxTcXVhcmVzID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBbXTtcbiAgICAgICAgLy8gRmluZCBvdXQgb2YgYm91bmQgc3F1YXJlc1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgZ2FtZWJvYXJkLmdldExlbmd0aCgpIDsgaSsrICkge1xuICAgICAgICAgICAgZm9yICggbGV0IGogPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgLSAoc2hpcC5sZW5ndGggLSAxKTsgaiA8IGdhbWVib2FyZC5nZXRMZW5ndGgoKSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvb2JNb3ZlID0gc2hpcC5vcmllbnRhdGlvbiA/IFtqLGldIDogW2ksal0gO1xuICAgICAgICAgICAgICAgIGlsbGVnYWxTcXVhcmVzLnB1c2gob29iTW92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlsbGVnYWxTcXVhcmVzIDtcbiAgICB9XG5cbiAgICBjb25zdCBpc091dE9mQm91bmRzID0gKG9yaWVudGF0aW9uLGxlbmd0aCwgdGlsZSkgPT4ge1xuICAgICAgICBjb25zdCB0aWxlTGVuZ3RoID0gdGlsZS5wYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCArIE51bWJlcih0aWxlLmlkLnNwbGl0KCcnKVswXSkpID4gdGlsZUxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCArIE51bWJlcih0aWxlLmlkLnNwbGl0KCcnKVsxXSkpID4gdGlsZUxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTaGlwID0gKGltYWdlLHVuaXQsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHNoaXAub3JpZW50YXRpb24gPyAodW5pdCpzaGlwLmxlbmd0aCkrJ3B4JyA6IHVuaXQrJ3B4JztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgKydweCc6ICh1bml0KnNoaXAubGVuZ3RoKSsncHgnO1xuICAgICAgICBpbWFnZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZVNoaXAgPSAodGVtcGxhdGUsc2hpcCkgPT4ge1xuICAgICAgICB0ZW1wbGF0ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVRlbXBsYXRlID0gKHRpbGUsdGVtcGxhdGUsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBTY3JlZW4uZ2V0VGFyZ2V0KHRpbGUpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24odGlsZS5vZmZzZXRXaWR0aCxjb29yZHMpO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3A7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLnBsYWNlZCA9IHRydWU7XG4gICAgICAgIHRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4gbW92ZVNoaXAoZS50YXJnZXQuY2xvc2VzdCgnLnBsYWNlaG9sZGVyJyksc2hpcCkpO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVwbGFjZVdpdGgodGlsZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoIWNoZWNrRm9yVW5wbGFjZWQoKSkge1xuICAgICAgICAgICAgcmVuZGVyU3VibWl0QnV0dG9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVTdWJtaXRCdXR0b24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24gPSAodW5pdCxjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgbGVmdCA9IChjb29yZHNbMF0qdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gKGNvb3Jkc1sxXSp1bml0KSsncHgnO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIHRvcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtYmFyJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LXBsYWNlbWVudCcpO1xuICAgICAgICBzaGlwQmFyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlU3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWl0LXBsYWNlbWVudCcpO1xuICAgICAgICBzdWJtaXRCdXR0b24uZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidXR0b24pKTtcbiAgICB9XG5cbiAgICBjb25zdCBob3ZlckltYWdlID0gKGVsZW1lbnQsaW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBTY3JlZW4uZ2V0VGFyZ2V0KGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJykpO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbihlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpLm9mZnNldFdpZHRoLGNvb3Jkcyk7XG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gcG9zLnRvcDtcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQ7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJQbGFjZW1lbnRTY3JlZW4sXG4gICAgfVxufSIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAoaWQsZ2FtZWJvYXJkKSA9PiB7XG5cbiAgICBcbiAgICBjb25zdCBtYWtlTW92ZSA9ICh0aWxlKSA9PiB7XG4gICAgICAgIGlmICghdGlsZSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IGdhbWVib2FyZC5oaXRTcXVhcmUodGlsZVswXSx0aWxlWzFdKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW92ZSA9PT0gJ29iamVjdCcgJiYgbW92ZS5pc1N1bmsoKSkgU2NyZWVuLnN1bmtTaGlwKG1vdmUpOyBcbiAgICAgICAgICAgIFNjcmVlbi5yZW5kZXJQbGF5ZXJNb3ZlKHRpbGUsZ2FtZWJvYXJkKTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5aW5nOiBmYWxzZSxcbiAgICAgICAgaWQsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgbWFrZU1vdmVcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IENvbXB1dGVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgbGV0IHJlY2VudEhpdCA9IGZhbHNlO1xuXG4gICAgbGV0IGN1cnJlbnRTdWNjZXNzID0ge31cblxuICAgIGNvbnN0IFNRVUFSRVNfQVJPVU5EID0gKHgseSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXA6W3gseS0xXSxcbiAgICAgICAgICAgIHJpZ2h0Olt4KzEseV0sXG4gICAgICAgICAgICBkb3duOlt4LHkrMV0sXG4gICAgICAgICAgICBsZWZ0Olt4LTEseV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgICBcbiAgICBjb25zdCBwbGF5VGlsZSA9ICh0aWxlKSA9PiB7XG4gICAgICAgIGlmICghdGlsZSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gZ2FtZWJvYXJkLmhpdFNxdWFyZSh0aWxlWzBdLHRpbGVbMV0pO1xuICAgICAgICAgICAgaWYgKGhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib3VuZGFyeSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgY29uc3QgcmFuWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIGNvbnN0IHJhblkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm91bmRhcnkpO1xuICAgICAgICByZXR1cm4gW3JhblgscmFuWV07XG4gICAgfVxuXG4gICAgY29uc3QgdHJ5TW92ZSA9IChjb29yZHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXlUaWxlKGNvb3Jkcyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3VjY2VzcyA9IE9iamVjdC5hc3NpZ24oe2Nvb3Jkczpjb29yZHN9LHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgIHJlY2VudEhpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZVRha2VuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGlmICghZ2FtZWJvYXJkLmNoZWNrRm9yRW1wdHkoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTW9yZSBTcGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIW1vdmVUYWtlbikge1xuICAgICAgICAgICAgY29vcmRzID0gZ2VuZXJhdGVSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgIG1vdmVUYWtlbiA9IHRyeU1vdmUoY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JlZW4ucmVuZGVyQ29tcHV0ZXJNb3ZlKGNvb3JkcyxnYW1lYm9hcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IGVkdWNhdGVkTW92ZSA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIGlzQ29tcDp0cnVlLFxuICAgICAgICBnZW5lcmF0ZVJhbmRvbUNvb3JkcyxcbiAgICAgICAgdHJ5TW92ZSxcbiAgICAgICAgbWFrZU1vdmVcbiAgICB9XG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCBiYXR0bGVzaGlwSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgU0hJUF9JTUFHRVMgPSB7XG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG5cbiAgICBsZXQgcGxheWVyT25lID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRyYXdBY3RpdmVCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGdldFRhcmdldChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSk7XG4gICAgICAgICAgICBnYW1lYm9hcmQub3Bwb25lbnQubWFrZU1vdmUodGlsZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkcmF3U2hpcHMoZ2FtZWJvYXJkLGdhbWVib2FyZC5pZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0hpZGRlblJlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIC8vZHJhdyB0aGUgdGlsZXMgdG8gbWFpbnRhaW4gc2l6ZSBjb25zaXN0ZW5jeVxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaWRkZW4udGV4dENvbnRlbnQgPSBcIkRhdGEgRW5jcnlwdGVkLi4uXCJcbiAgICAgICAgaGlkZGVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1ib2FyZCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChoaWRkZW4pXG4gICAgfVxuXG4gICAgY29uc3QgcmVmcmVzaCA9IChjdXJyZW50LHByZXZpb3VzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBjb25zdCByZWNvbkFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKTtcbiAgICAgICAgYWN0aXZlQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVjb25BcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBkcmF3QWN0aXZlQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICBpZiAoIWN1cnJlbnQuaXNDb21wKSB7XG4gICAgICAgICAgICBkcmF3UmVjb25Cb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd0hpZGRlblJlY29uQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhjdXJyZW50LmdhbWVib2FyZCxjdXJyZW50LmdhbWVib2FyZC5pZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlZHVuZGFudC4uLiBkZWxldGU/XG4gICAgLy9cbiAgICAvLyBjb25zdCBpbnN0YW50U2hvd1Jlc3VsdCA9IChnYW1lYm9hcmQsY29vcmRzY2VsbCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAvLyAgICAgYWN0aXZlQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAvLyAgICAgZHJhd0FjdGl2ZUJvYXJkKGdhbWVib2FyZCk7XG4gICAgLy8gfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzdGFsbE5leHRUdXJuID0gYXdhaXQgc3RhbGxDb21wdXRlck1vdmUoKTtcbiAgICAgICAgc3RhbGxOZXh0VHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYXllck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc2hvd1BsYXllcnNUdXJuID0gYXdhaXQgc2hvd1BsYXllclJlc3VsdCgpO1xuICAgICAgICBzaG93UGxheWVyc1R1cm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdW5rU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXAubmFtZSwgJyBpcyBhIGdvbmVyJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGxheWVyUmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJSZXN1bHRUaW1lciA9IGF3YWl0IHByb21pc2lmeShmKCksIDIwMDApO1xuICAgICAgICByZXR1cm4gcGxheWVyUmVzdWx0VGltZXJcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhbGxDb21wdXRlck1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmluaXNoZWQgPSBhd2FpdCBwcm9taXNpZnkoZigpLCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyRmluaXNoZWRcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvbWlzaWZ5ID0gKGNhbGxiYWNrLHRpbWVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShjYWxsYmFjayksIHRpbWVyKSk7XG4gICAgfVxuICAgIFxuXG4gICAgY29uc3QgZHJhd1NoaXBzID0gKGdhbWVib2FyZCxvbmJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ2FtZWJvYXJkLmdldFNoaXBzKCk7XG4gICAgICAgIGNvbnN0IHBsYXl6b25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob25ib2FyZCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbihwbGF5em9uZSwgZ2FtZWJvYXJkLmdldExlbmd0aCgpLCBzaGlwKVxuICAgICAgICAgICAgcGxheXpvbmUuYXBwZW5kQ2hpbGQoZHJhd1NoaXAoZGltZW5zaW9ucykpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdTaGlwID0gKGRpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbWFya2VyJyk7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdzdHlsZScsYHRvcDoke2RpbWVuc2lvbnMudG9wfTtsZWZ0OiR7ZGltZW5zaW9ucy5sZWZ0fTt3aWR0aDoke2RpbWVuc2lvbnMubGVuZ3RofTtoZWlnaHQ6JHtkaW1lbnNpb25zLmhlaWdodH1gKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiA9ICh6b25lLCBzY2FsZSAsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB1bml0ID0gem9uZS5vZmZzZXRXaWR0aCAvIHNjYWxlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzBdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzFdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5vcmllbnRhdGlvbiA/IHNoaXAubGVuZ3RoICogdW5pdCA6IHVuaXQgO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCA6IHNoaXAubGVuZ3RoICogdW5pdCA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgbGVuZ3RoOmxlbmd0aCsncHgnLFxuICAgICAgICAgICAgaGVpZ2h0OmhlaWdodCsncHgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXJnZXQgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmICghYnV0dG9uKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvbjtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICAvLyBGaW5kIHRoZSBjb29yZGluYXRlcyB0aHJvdWdoIHRoZSBlbGVtZW50cyBwb3NpdGlvbiBhbW9uZ3N0IGl0cyBzaWJsaW5nc1xuICAgICAgICBjb25zdCB5ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChib2FyZC5jaGlsZHJlbixwYXJlbnQpO1xuICAgICAgICBjb25zdCB4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGRyZW4sdGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIFt4LHldXG4gICAgfVxuXG4gICAgY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgfVxuXG5cblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkcmF3U2hpcHMsXG4gICAgICAgIHJlbmRlckNvbXB1dGVyTW92ZSxcbiAgICAgICAgZW5kR2FtZSxcbiAgICAgICAgZ2V0VGFyZ2V0LFxuICAgICAgICByZWZyZXNoLFxuICAgICAgICBzdW5rU2hpcCxcbiAgICAgICAgcmVuZGVyUGxheWVyTW92ZSxcbiAgICAgICAgcGxheWVyT25lXG4gICAgfVxufSkoKTtcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKG5hbWUgPSBudWxsKSA9PiB7XG4gICAgbGV0IGhpdENvdW50ZXIgPSAwO1xuXG4gICAgbGV0IG9yaWVudGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCByb3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIG9yaWVudGF0aW9uID0gIW9yaWVudGF0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IFNISVBfU0laRVMgPSB7XG4gICAgICAgIGNhcnJpZXI6IDUsXG4gICAgICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgICAgIGNydWlzZXI6IDMsXG4gICAgICAgIHN1Ym1hcmluZTogMyxcbiAgICAgICAgZGVzdHJveWVyOiAyLFxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0Q291bnRlcisrXG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGhpdENvdW50ZXIgPj0gbGVuZ3RoKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBwb3NpdGlvbjpbXSxcbiAgICAgICAgZ2V0IG9yaWVudGF0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheWVkTmFtZSA9IG5hbWUuc3BsaXQoJycpO1xuICAgICAgICAgICAgYXJyYXllZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWVkTmFtZS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBTSElQX1NJWkVTW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XG4gICAgLS10aWxlLWF0dGFjazogcmdiYSgyNTUsMTUwLDE1MCwwLjkpO1xuICAgIC0tdGlsZS1oaXQ6IHJnYmEoMjU1LDIwMCwyMDAsMC44KTtcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xuICAgIC0tdGlsZS1ob3ZlcjogcmdiYSgyMzAsMjAwLDIwMCwwLjQpO1xufVxuXG4jZ2FtZWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNyaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2xlZnQgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbiNyaWdodCAuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jbGVmdCxcbiNyaWdodCB7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4ubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcbn1cblxuLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OmZsZXg7XG59XG5cbi50aWxlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmbGV4OjE7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlsZSk7XG4gICAgYm9yZGVyOiAwO1xufVxuXG5kaXYudGlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XG59XG5cbmJ1dHRvbi50aWxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhvdmVyKTtcbn1cblxuLmhpZGRlbi1ib2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTowO1xuICAgIGxlZnQ6MDtcbiAgICByaWdodDowO1xuICAgIG1hcmdpbjphdXRvO1xuICAgIHdpZHRoOjUwJTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNwbGF5ZXItb25lLFxuI3BsYXllci10d28ge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uc2hpcC1tYXJrZXIge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG5cbi8qIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XG4gICAgYm9yZGVyOiAwO1xufSAqL1xuXG5idXR0b24udGlsZS5hdHRhY2sge1xuICAgIGFuaW1hdGlvbjogYXR0YWNrLXB1bHNlIDAuNXMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGF0dGFjay1wdWxzZSB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWF0dGFjaykgO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XG4gICAgfVxufVxuXG4ucGxhY2Utc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbGFjZS1zaGlwOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzM0ZGO1xufVxuXG4ucGxhY2Utc2hpcDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAzJSk7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gICAgYm9yZGVyOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuXG4ucGxhY2Vob2xkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLE1BQU07SUFDTixVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO0lBQ3pDO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdGlsZTogIHJnYmEoMjAwLDIwMCwyMDAsMC4xKTtcXG4gICAgLS10aWxlLWF0dGFjazogcmdiYSgyNTUsMTUwLDE1MCwwLjkpO1xcbiAgICAtLXRpbGUtaGl0OiByZ2JhKDI1NSwyMDAsMjAwLDAuOCk7XFxuICAgIC0tdGlsZS1taXNzOiByZ2JhKDIwMCwyMDAsMjU1LDAuOCk7XFxuICAgIC0tdGlsZS1ob3ZlcjogcmdiYSgyMzAsMjAwLDIwMCwwLjQpO1xcbn1cXG5cXG4jZ2FtZWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2xlZnQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jcmlnaHQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNsZWZ0LFxcbiNyaWdodCB7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnRpbGUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmbGV4OjE7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlsZSk7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuZGl2LnRpbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcXG59XFxuXFxuYnV0dG9uLnRpbGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhvdmVyKTtcXG59XFxuXFxuLmhpZGRlbi1ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIGJvdHRvbTowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNwbGF5ZXItb25lLFxcbiNwbGF5ZXItdHdvIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5zaGlwLW1hcmtlciB7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4vKiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xcbiAgICBib3JkZXI6IDA7XFxufSAqL1xcblxcbmJ1dHRvbi50aWxlLmF0dGFjayB7XFxuICAgIGFuaW1hdGlvbjogYXR0YWNrLXB1bHNlIDAuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhdHRhY2stcHVsc2Uge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWF0dGFjaykgO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XFxuICAgIH1cXG59XFxuXFxuLnBsYWNlLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYWNlLXNoaXA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzM0ZGO1xcbn1cXG5cXG4ucGxhY2Utc2hpcDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMyUpO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXIge1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuLnBsYWNlaG9sZGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vbW9kdWxlcy9zY3JlZW4uanNcIjtcbmltcG9ydCB7IFBsYWNlbWVudEJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGFjZW1lbnRCb2FyZC5qc1wiO1xuaW1wb3J0IHsgUGxheWVyICwgQ29tcHV0ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9nYW1lYm9hcmQuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoMTAsIFwicGxheWVyLW9uZVwiKTtcbiAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZCgxMCwgXCJwbGF5ZXItdHdvXCIpO1xuICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcihcInBsYXllci1vbmVcIixwbGF5ZXJUd29Cb2FyZCk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gQ29tcHV0ZXIoXCJwbGF5ZXItdHdvXCIscGxheWVyT25lQm9hcmQpO1xuICAgIHBsYXllck9uZUJvYXJkLm9wcG9uZW50ID0gcGxheWVyVHdvO1xuICAgIHBsYXllclR3b0JvYXJkLm9wcG9uZW50ID0gcGxheWVyT25lO1xuICAgXG4gICAgY29uc3QgaW5pdGlhbGlzZUdhbWUgPSAocGxheWVyT25lKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXJPbmVcbiAgICB9XG5cbiAgICBjb25zdCB0dXJuT3ZlciA9ICgpID0+IHtcbiAgICAgICAgaWYoY3VycmVudFBsYXllci5nYW1lYm9hcmQuY2hlY2tGb3JBbGxTdW5rKCkpIHtcbiAgICAgICAgICAgIFNjcmVlbi5lbmRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbmV4dFBsYXllcigpO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzID0gY3VycmVudFBsYXllcjtcbiAgICAgICAgY3VycmVudFBsYXllciA9IGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllck9uZSA/IHBsYXllclR3byA6IHBsYXllck9uZSA7XG4gICAgICAgIFNjcmVlbi5yZWZyZXNoKGN1cnJlbnRQbGF5ZXIscHJldmlvdXMpO1xuICAgICAgICBpZiAoY3VycmVudFBsYXllci5pc0NvbXApIHtcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIubWFrZU1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYWNlbWVudCA9IFBsYWNlbWVudEJvYXJkKHBsYXllci5nYW1lYm9hcmQpO1xuICAgICAgICBwbGFjZW1lbnQucmVuZGVyUGxhY2VtZW50U2NyZWVuKCk7XG4gICAgfVxuXG4gICAgc2hpcFBsYWNlbWVudChwbGF5ZXJPbmUpO1xuXG4gICAgLy8gbGV0IGN1cnJlbnRQbGF5ZXIgPSBpbml0aWFsaXNlR2FtZShwbGF5ZXJPbmUpO1xuXG4gICAgLy8gY29uc3QgcGxheWVyVGFua2VyID0gU2hpcCg1LCAnVGFua2VyJyk7XG4gICAgLy8gY29uc3QgcGxheWVyRGVzdHJveWVyID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gICAgLy8gY29uc3QgcGxheWVyQ3J1aXNlciA9IFNoaXAoNCwgJ0NydWlzZXInKTtcblxuICAgIC8vIGNvbnN0IGNvbXB1dGVyVGFua2VyID0gU2hpcCg1LCAnVGFua2VyJyk7XG4gICAgLy8gY29uc3QgY29tcHV0ZXJEZXN0cm95ZXIgPSBTaGlwKDMsICdEZXN0cm95ZXInKTtcbiAgICAvLyBjb25zdCBjb21wdXRlckNydWlzZXIgPSBTaGlwKDQsICdDcnVpc2VyJyk7XG5cbiAgICAvLyBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyVGFua2VyLDEsMSx0cnVlKTtcbiAgICAvLyBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyRGVzdHJveWVyLDMsNCxmYWxzZSk7XG4gICAgLy8gcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllckNydWlzZXIsMCw5LHRydWUpO1xuICAgIFxuICAgIC8vIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChjb21wdXRlclRhbmtlciw5LDIsZmFsc2UpO1xuICAgIC8vIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChjb21wdXRlckRlc3Ryb3llciw1LDYsZmFsc2UpO1xuICAgIC8vIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChjb21wdXRlckNydWlzZXIsMCwwLHRydWUpO1xuXG4gICAgLy8gU2NyZWVuLnJlZnJlc2gocGxheWVyT25lLHBsYXllclR3bylcblxuICAgIHJldHVybiB7XG4gICAgICAgIHR1cm5PdmVyLFxuICAgIH1cbn0pKCk7Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIkdhbWVib2FyZCIsInNpemUiLCJhcmd1bWVudHMiLCJzaGlwcyIsInR1cm5zIiwiU3F1YXJlIiwieCIsInkiLCJzaGlwIiwiaGl0IiwiY29vcmRzIiwiYnVpbGRSb3ciLCJpbmRleCIsImNvbHVtbnMiLCJidWlsZFNxdWFyZSIsInJvd3MiLCJnZXRMZW5ndGgiLCJnZXRTcXVhcmUiLCJnYW1lU3F1YXJlIiwic3F1YXJlU3RhdHVzIiwiZ2V0U2hpcHMiLCJoaXRTcXVhcmUiLCJFcnJvciIsImNoZWNrRm9yRW1wdHkiLCJwbGFjZVNoaXAiLCJob3Jpem9udGFsIiwiYXhpcyIsImNoZWNrQm91bmRhcmllcyIsImNoZWNrRm9yU2hpcHMiLCJvcmllbnRhdGlvbiIsInBvc2l0aW9uIiwiY2xlYXJTaGlwIiwicG9wIiwic3BsaWNlIiwiaW5kZXhPZiIsInJhbmdlIiwiZXZlcnkiLCJjaGVja0ZvckFsbFN1bmsiLCJhbGxDb25kaXRpb24iLCJmb3JFYWNoIiwiaXNTdW5rIiwiY29uZGl0aW9uIiwiY2xlYXJBbGwiLCJjdXIiLCJjb29yZCIsIm9wcG9uZW50IiwiU2NyZWVuIiwiU2hpcCIsIlNISVBfSU1BR0VTIiwiUGxhY2VtZW50Qm9hcmQiLCJnYW1lYm9hcmQiLCJjYXJyaWVyIiwicGxhY2VkIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJzZXRTaGlwcyIsIk9iamVjdCIsImtleXMiLCJuZXdTaGlwIiwiY2hlY2tGb3JVbnBsYWNlZCIsInNvbWUiLCJkcmF3UGxhY2VtZW50Qm9hcmQiLCJ6b25lRG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvYXJkIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicm93Q29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaiIsInRpbGUiLCJTdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJyZW5kZXJQbGFjZW1lbnRTY3JlZW4iLCJzaGlwQmFyIiwic2hpcHNOYW1lcyIsImJ1dHRvblRleHQiLCJ0b1VwcGVyQ2FzZSIsImJ1dHRvbiIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNoaWxkIiwibWFrZVNoaXAiLCJzaGlwUGxhY2VtZW50Iiwicm90YXRlIiwiY29uc29sZSIsImxvZyIsImZpbmRJbGxlZ2FsU3F1YXJlcyIsInRpbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRlbXBsYXRlIiwibmFtZSIsInN0eWxlIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRJbWFnZSIsInJlbmRlclNoaXAiLCJvZmZzZXRXaWR0aCIsImlzT3V0T2ZCb3VuZHMiLCJob3ZlckltYWdlIiwiZSIsInBsYWNlVGVtcGxhdGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiaWxsZWdhbFNxdWFyZXMiLCJvb2JNb3ZlIiwidGlsZUxlbmd0aCIsInBhcmVudE5vZGUiLCJjaGlsZHJlbiIsIk51bWJlciIsInNwbGl0IiwiaW1hZ2UiLCJ1bml0Iiwid2lkdGgiLCJoZWlnaHQiLCJtb3ZlU2hpcCIsImdldFRhcmdldCIsImNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsInJlbmRlclN1Ym1pdEJ1dHRvbiIsInJlbW92ZVN1Ym1pdEJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiIsImVsZW1lbnQiLCJpbWciLCJldmVudCIsInBvcyIsIlBsYXllciIsIm1ha2VNb3ZlIiwibW92ZSIsIl90eXBlb2YiLCJzdW5rU2hpcCIsInJlbmRlclBsYXllck1vdmUiLCJlcnJvciIsInBsYXlpbmciLCJDb21wdXRlciIsInJlY2VudEhpdCIsImN1cnJlbnRTdWNjZXNzIiwiU1FVQVJFU19BUk9VTkQiLCJ1cCIsInJpZ2h0IiwiZG93biIsInBsYXlUaWxlIiwiZ2VuZXJhdGVSYW5kb21Db29yZHMiLCJib3VuZGFyeSIsInJhblgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5ZIiwidHJ5TW92ZSIsInJlc3VsdCIsImFzc2lnbiIsIm1vdmVUYWtlbiIsInJlbmRlckNvbXB1dGVyTW92ZSIsImVkdWNhdGVkTW92ZSIsImlzQ29tcCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJPcCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXBwbHkiLCJiYXR0bGVzaGlwSW1hZ2UiLCJwbGF5ZXJPbmUiLCJkcmF3QWN0aXZlQm9hcmQiLCJkcmF3UmVjb25Cb2FyZCIsImRyYXdTaGlwcyIsImRyYXdIaWRkZW5SZWNvbkJvYXJkIiwiaGlkZGVuIiwicmVmcmVzaCIsImN1cnJlbnQiLCJwcmV2aW91cyIsImFjdGl2ZUFyZWEiLCJyZWNvbkFyZWEiLCJpbm5lckhUTUwiLCJfcmVmIiwiX2NhbGxlZSIsImFjdGl2ZVpvbmUiLCJyb3ciLCJjZWxsIiwicmVtb3ZlQXR0YWNrTWFya2VyIiwic3RhbGxOZXh0VHVybiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwicHJvbWlzaWZ5IiwicmVtb3ZlIiwic3RhbGxDb21wdXRlck1vdmUiLCJfeCIsIl94MiIsIl9yZWYyIiwiX2NhbGxlZTIiLCJzaG93UGxheWVyc1R1cm4iLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzaG93UGxheWVyUmVzdWx0IiwiX3gzIiwiX3g0IiwiX3JlZjMiLCJfY2FsbGVlMyIsInBsYXllclJlc3VsdFRpbWVyIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZiIsIl9yZWY0IiwiX2NhbGxlZTQiLCJjb21wdXRlckZpbmlzaGVkIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiY2FsbGJhY2siLCJ0aW1lciIsInNldFRpbWVvdXQiLCJvbmJvYXJkIiwicGxheXpvbmUiLCJkaW1lbnNpb25zIiwiY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24iLCJkcmF3U2hpcCIsInpvbmUiLCJzY2FsZSIsInBhcmVudCIsIkFycmF5IiwiZW5kR2FtZSIsImhpdENvdW50ZXIiLCJTSElQX1NJWkVTIiwiYXJyYXllZE5hbWUiLCJHYW1lIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJUd29Cb2FyZCIsInBsYXllclR3byIsImluaXRpYWxpc2VHYW1lIiwidHVybk92ZXIiLCJjdXJyZW50UGxheWVyIiwibmV4dFBsYXllciIsInBsYXllciIsInBsYWNlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=