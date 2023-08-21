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
  var instantShowResult = function instantShowResult(gameboard, coordscell) {
    var activeArea = document.getElementById('left');
    activeArea.innerHTML = '';
    drawActiveBoard(gameboard);
  };
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
  var drawPlacementBoard = function drawPlacementBoard(gameboard) {
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
        tile.setAttribute('style', 'position:relative;');
        tile.classList.add(gameboard.squareStatus(j, i));
        rowContainer.appendChild(tile);
      }
    }
  };
  var renderPlacementScreen = function renderPlacementScreen(gameboard) {
    var placementBoard = PlacementBoard(gameboard);
    var shipBar = document.getElementById('ship-bar');
    var ships = placementBoard.shipsNames;
    ships.forEach(function (ship) {
      var buttonText = String('Place ' + ship).toUpperCase();
      var button = document.createElement('button');
      button.classList.add('place-ship');
      button.id = ship;
      button.textContent = buttonText;
      shipBar.appendChild(button);
      button.addEventListener('click', function () {
        shipBar.removeChild(button);
        shipPlacement(button, placementBoard.ships[ship]);
      });
    });
  };
  var shipPlacement = function shipPlacement(button, marker) {
    var horizontal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var shipTemplate = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(button.id);
    shipTemplate.orientation = horizontal;
    var tiles = document.querySelectorAll('.tile');
    var template = document.createElement('button');
    template.classList.add('placeholder');
    template.id = button.id;
    template.style.position = 'absolute';
    template.style.top = '0px';
    template.style.left = '0px';
    template.style.backgroundImage = "url(".concat(SHIP_IMAGES[button.id]);
    var board = document.getElementById('left');
    board.appendChild(template);
    rotateShip(template, true, tiles[0].offsetWidth, shipTemplate.length);
    tiles.forEach(function (tile) {
      if (isOutOfBounds(horizontal, shipTemplate.length, tile)) return;
      hoverImage(tile, template);
      tile.addEventListener('click', function (e) {
        marker.horizontal = horizontal;
        placeTemplate(e.target.closest('.tile'), template, marker);
      });
    });
  };
  var isOutOfBounds = function isOutOfBounds(orientation, length, tile) {
    if (orientation) {
      var row = tile.parentNode.children;
      var index = Array.prototype.indexOf.call(row, tile);
      if (length + index > row.length) return true;
      return false;
    } else {
      var columns = tile.parentNode.parentnode.children;
      var _index = Array.prototype.indexOf.call(columns, tile.parentNode);
      if (length + _index > columns.length) return true;
      return false;
    }
  };
  var rotateShip = function rotateShip(image, orientation, unit, length) {
    var width = orientation ? unit * length + 'px' : unit + 'px';
    var height = orientation ? unit + 'px' : unit * length + 'px';
    image.style.width = width;
    image.style.height = height;
  };
  var moveShip = function moveShip(template, marker) {
    template.parentNode.removeChild(template);
    shipPlacement(template, marker, marker.horizontal);
  };
  var placeTemplate = function placeTemplate(tile, template, marker) {
    var coords = getTarget(tile);
    marker.coords = coords;
    var position = calculateTemplatePosition(tile.offsetWidth, coords);
    template.style.top = position.top;
    template.style.left = position.left;
    template.style.zIndex = 10;
    template.addEventListener('click', function (e) {
      return moveShip(e.target.closest('.placeholder'), marker);
    });
    var tiles = document.querySelectorAll('.tile');
    tiles.forEach(function (tile) {
      tile.replaceWith(tile.cloneNode(true));
    });
  };
  var calculateTemplatePosition = function calculateTemplatePosition(unit, coords) {
    var left = coords[0] * unit + 'px';
    var top = coords[1] * unit + 'px';
    return {
      left: left,
      top: top
    };
  };

  // const hoverImage = (element,img) => {
  //     element.addEventListener('mouseenter',(e) => e.target.appendChild(img));
  //     element.addEventListener('mouseleave',(e) => e.target.removeChild(img));
  // }

  var hoverImage = function hoverImage(element, img) {
    var event = element.addEventListener('mouseover', function (e) {
      var coords = getTarget(e.target.closest('.tile'));
      var pos = calculateTemplatePosition(e.target.closest('.tile').offsetWidth, coords);
      img.style.top = pos.top;
      img.style.left = pos.left;
    });
    return event;
  };
  return {
    drawShips: drawShips,
    renderComputerMove: renderComputerMove,
    endGame: endGame,
    refresh: refresh,
    sunkShip: sunkShip,
    renderPlayerMove: renderPlayerMove,
    renderPlacementScreen: renderPlacementScreen,
    shipPlacement: shipPlacement,
    drawPlacementBoard: drawPlacementBoard,
    playerOne: playerOne
  };
})());
var PlacementBoard = function PlacementBoard(gameboard) {
  var ships = {
    carrier: {
      coords: [],
      horizontal: true
    },
    battleship: {
      coords: [],
      horizontal: true
    },
    cruiser: {
      coords: [],
      horizontal: true
    },
    submarine: {
      coords: [],
      horizontal: true
    },
    destroyer: {
      coords: [],
      horizontal: true
    }
  };
  var placeMarker = function placeMarker(ship, coords, horizontal) {
    ships[ship].coords = coords;
    ships[ship].horizontal = horizontal;
  };
  var setShips = function setShips() {
    Object.keys(ships).forEach(function (ship) {
      var newShip = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(ship);
      gameboard.placeShip(newShip, ships[ship].coords[0], ships[ship].coords[1], ships[ship].horizontal);
    });
  };
  return {
    placeMarker: placeMarker,
    setShips: setShips,
    ships: ships,
    get shipsNames() {
      return Object.keys(ships);
    }
  };
};

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
function _defineAccessor(type, obj, key, fn) { var desc = { configurable: !0, enumerable: !0 }; return desc[type] = fn, Object.defineProperty(obj, key, desc); }
var Ship = function Ship() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var hitCounter = 0;
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
  return _defineAccessor("get", {
    hit: hit,
    isSunk: isSunk,
    length: length,
    position: [],
    orientation: null,
    get name() {
      var arrayedName = name.split('');
      arrayedName[0].toUpperCase();
      return arrayedName.join('');
    }
  }, "length", function () {
    return SHIP_SIZES[name];
  });
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
/* harmony import */ var _modules_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/player.js */ "./src/modules/player.js");
/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameboard.js */ "./src/modules/gameboard.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




var Game = function () {
  var playerOneBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(10, "player-one");
  var playerTwoBoard = (0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_2__.Gameboard)(10, "player-two");
  var playerOne = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)("player-one", playerTwoBoard);
  var playerTwo = (0,_modules_player_js__WEBPACK_IMPORTED_MODULE_1__.Computer)("player-two", playerOneBoard);
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
    _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].drawPlacementBoard(player.gameboard);
    _modules_screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderPlacementScreen();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsMERBQU0sQ0FBQ3VRLHFCQUFxQixDQUFDLENBQUM7RUFDbEMsQ0FBQztFQUVEUyxhQUFhLENBQUMvRixTQUFTLENBQUM7O0VBRXhCOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQSxPQUFPO0lBQ0h3SSxRQUFRLEVBQVJBO0VBQ0osQ0FBQztBQUNMLENBQUMsQ0FBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2NyZWVuLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKHNpemUsaWQgPSBudWxsKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICBjb25zdCB0dXJucyA9IFtdO1xuICAgIGNvbnN0IFNxdWFyZSA9ICh4LHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNoaXA6IG51bGwsXG4gICAgICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICAgICAgY29vcmRzOiBbeCx5XSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkUm93ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKykge1xuICAgICAgICAgICAgY29sdW1ucy5wdXNoKFNxdWFyZShpLGluZGV4KSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29uc3QgYnVpbGRTcXVhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIHJvd3MucHVzaChidWlsZFJvdyhpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lU3F1YXJlW3ldW3hdO1xuICAgIH1cblxuICAgIGNvbnN0IHNxdWFyZVN0YXR1cyA9ICh4LHkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0ICYmIGdhbWVTcXVhcmVbeV1beF0uc2hpcCkgcmV0dXJuICdoaXQnO1xuICAgICAgICBpZiAoZ2FtZVNxdWFyZVt5XVt4XS5oaXQpIHJldHVybiAnbWlzcyc7XG4gICAgICAgIHJldHVybiAnZW1wdHknXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lU3F1YXJlID0gYnVpbGRTcXVhcmUoc2l6ZSk7XG5cbiAgICBjb25zdCBoaXRTcXVhcmUgPSAoeCx5KSA9PiB7XG4gICAgICAgIGlmICghZ2FtZVNxdWFyZVt5XSB8fCAhZ2FtZVNxdWFyZVt5XVt4XSkgdGhyb3cgbmV3IEVycm9yKFwiT3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgaWYgKGdhbWVTcXVhcmVbeV1beF0uaGl0KSB0aHJvdyBuZXcgRXJyb3IoXCJTcXVhcmUgYWxyZWFkeSBoaXRcIik7XG4gICAgICAgIGdhbWVTcXVhcmVbeV1beF0uaGl0ID0gdHJ1ZTtcbiAgICAgICAgdHVybnMucHVzaChbeCx5XSk7XG4gICAgICAgIGlmIChnYW1lU3F1YXJlW3ldW3hdLnNoaXApIHtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVbeV1beF0uc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHJldHVybiBnYW1lU3F1YXJlW3ldW3hdLnNoaXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBjaGVja0ZvckVtcHR5ID0gKCkgPT4ge1xuICAgICAgICBpZiAodHVybnMubGVuZ3RoIDwgKHNpemUqc2l6ZSkpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAseCx5LGhvcml6b250YWwpID0+IHtcbiAgICAgICAgY29uc3QgYXhpcyA9IGhvcml6b250YWwgPyB4IDogeSA7XG4gICAgICAgIGlmICghY2hlY2tCb3VuZGFyaWVzKGF4aXMsc2hpcC5sZW5ndGgpKSB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIGlmICghY2hlY2tGb3JTaGlwcyhzaGlwLmxlbmd0aCx4LHksaG9yaXpvbnRhbCkpIHRocm93IG5ldyBFcnJvcihcIlNwYWNlIG9jY3VwaWVkXCIpO1xuICAgICAgICBzaGlwLm9yaWVudGF0aW9uID0gaG9yaXpvbnRhbDtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIGdhbWVTcXVhcmVbeV1beCtpXS5zaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uLnB1c2goZ2FtZVNxdWFyZVt5XVt4K2ldLmNvb3Jkcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdhbWVTcXVhcmVbeStpXVt4XS5zaGlwID0gc2hpcDtcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uLnB1c2goZ2FtZVNxdWFyZVt5K2ldW3hdLmNvb3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgZm9yKGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBzaGlwLnBvc2l0aW9uLnBvcCgpO1xuICAgICAgICAgICAgZ2FtZVNxdWFyZVtjb29yZHNbMV1dW2Nvb3Jkc1swXV0uc2hpcCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMuc3BsaWNlKHNoaXBzLmluZGV4T2Yoc2hpcCksMSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tGb3JTaGlwcyA9IChsZW5ndGgseCx5LGhvcml6b250YWwpID0+IHtcbiAgICAgICAgLy9CdWlsZHMgYW4gYXJyYXkgb2Ygc3BhY2VzIHRoZSBzaGlwIHdpbGwgb2NjdXB5XG4gICAgICAgIGNvbnN0IHJhbmdlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICByYW5nZS5wdXNoKGdhbWVTcXVhcmVbeV1beCtpXS5zaGlwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZ2UucHVzaChnYW1lU3F1YXJlW3kraV1beF0uc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9SZXR1cm5zIHRydWUgaWYgYWxsIGFyZSBlbXB0eVxuICAgICAgICByZXR1cm4gcmFuZ2UuZXZlcnkoc2hpcCA9PiBzaGlwID09PSBudWxsKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGNoZWNrQm91bmRhcmllcyA9IChheGlzLGxlbmd0aCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpcyArIGxlbmd0aCA+IHNpemUgPyBmYWxzZSA6IHRydWU7IFxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRm9yQWxsU3VuayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsQ29uZGl0aW9uID0gW11cbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gYWxsQ29uZGl0aW9uLnB1c2goc2hpcC5pc1N1bmsoKSkpO1xuICAgICAgICByZXR1cm4gYWxsQ29uZGl0aW9uLmV2ZXJ5KGNvbmRpdGlvbiA9PiBjb25kaXRpb24gPT09IHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaGlwcy5sZW5ndGggOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBjdXIgPSBzaGlwcy5wb3AoKTtcbiAgICAgICAgICAgIGN1ci5wb3NpdGlvbi5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGdhbWVTcXVhcmVbY29vcmRbMV1dW2Nvb3JkWzBdXS5zaGlwID0gbnVsbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgaGl0U3F1YXJlLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIGNsZWFyU2hpcCxcbiAgICAgICAgY2hlY2tGb3JBbGxTdW5rLFxuICAgICAgICBnZXRTcXVhcmUsXG4gICAgICAgIGNoZWNrRm9yRW1wdHksXG4gICAgICAgIGdldFNoaXBzLFxuICAgICAgICBjbGVhckFsbCxcbiAgICAgICAgc3F1YXJlU3RhdHVzLFxuICAgICAgICBvcHBvbmVudDpudWxsLFxuICAgICAgICBpZCxcbiAgICB9XG5cbn07IiwiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9zY3JlZW4uanNcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIFxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKHRpbGUpID0+IHtcbiAgICAgICAgaWYgKCF0aWxlKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gZ2FtZWJvYXJkLmhpdFNxdWFyZSh0aWxlWzBdLHRpbGVbMV0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtb3ZlID09PSAnb2JqZWN0JyAmJiBtb3ZlLmlzU3VuaygpKSBTY3JlZW4uc3Vua1NoaXAobW92ZSk7IFxuICAgICAgICAgICAgU2NyZWVuLnJlbmRlclBsYXllck1vdmUodGlsZSxnYW1lYm9hcmQpO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgICAgICBpZCxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBtYWtlTW92ZVxuICAgIH1cblxufVxuXG5leHBvcnQgY29uc3QgQ29tcHV0ZXIgPSAoaWQsZ2FtZWJvYXJkKSA9PiB7XG5cbiAgICBsZXQgcmVjZW50SGl0ID0gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudFN1Y2Nlc3MgPSB7fVxuXG4gICAgY29uc3QgU1FVQVJFU19BUk9VTkQgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cDpbeCx5LTFdLFxuICAgICAgICAgICAgcmlnaHQ6W3grMSx5XSxcbiAgICAgICAgICAgIGRvd246W3gseSsxXSxcbiAgICAgICAgICAgIGxlZnQ6W3gtMSx5XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAgIFxuICAgIGNvbnN0IHBsYXlUaWxlID0gKHRpbGUpID0+IHtcbiAgICAgICAgaWYgKCF0aWxlKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBoaXQgPSBnYW1lYm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAoaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kYXJ5ID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBjb25zdCByYW5YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgY29uc3QgcmFuWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIHJldHVybiBbcmFuWCxyYW5ZXTtcbiAgICB9XG5cbiAgICBjb25zdCB0cnlNb3ZlID0gKGNvb3JkcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheVRpbGUoY29vcmRzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdWNjZXNzID0gT2JqZWN0LmFzc2lnbih7Y29vcmRzOmNvb3Jkc30scmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgcmVjZW50SGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb3ZlVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgaWYgKCFnYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gdHJ5TW92ZShjb29yZHMpO1xuICAgICAgICB9XG4gICAgICAgIFNjcmVlbi5yZW5kZXJDb21wdXRlck1vdmUoY29vcmRzLGdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWR1Y2F0ZWRNb3ZlID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgaXNDb21wOnRydWUsXG4gICAgICAgIGdlbmVyYXRlUmFuZG9tQ29vcmRzLFxuICAgICAgICB0cnlNb3ZlLFxuICAgICAgICBtYWtlTW92ZVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nXCI7XG5cbmNvbnN0IFNISVBfSU1BR0VTID0ge1xuICAgIGJhdHRsZXNoaXA6IGJhdHRsZXNoaXBJbWFnZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuXG4gICAgbGV0IHBsYXllck9uZSA9IHRydWU7XG5cbiAgICBjb25zdCBkcmF3QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBnZXRUYXJnZXQoZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykpO1xuICAgICAgICAgICAgZ2FtZWJvYXJkLm9wcG9uZW50Lm1ha2VNb3ZlKHRpbGUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1JlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZHJhd1NoaXBzKGdhbWVib2FyZCxnYW1lYm9hcmQuaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdIaWRkZW5SZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICAvL2RyYXcgdGhlIHRpbGVzIHRvIG1haW50YWluIHNpemUgY29uc2lzdGVuY3lcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGlkZGVuLnRleHRDb250ZW50ID0gXCJEYXRhIEVuY3J5cHRlZC4uLlwiXG4gICAgICAgIGhpZGRlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYm9hcmQnKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoaGlkZGVuKVxuICAgIH1cblxuICAgIGNvbnN0IHJlZnJlc2ggPSAoY3VycmVudCxwcmV2aW91cykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgY29uc3QgcmVjb25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jyk7XG4gICAgICAgIGFjdGl2ZUFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlY29uQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZHJhd0FjdGl2ZUJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgaWYgKCFjdXJyZW50LmlzQ29tcCkge1xuICAgICAgICAgICAgZHJhd1JlY29uQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3U2hpcHMoY3VycmVudC5nYW1lYm9hcmQsY3VycmVudC5nYW1lYm9hcmQuaWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW50U2hvd1Jlc3VsdCA9IChnYW1lYm9hcmQsY29vcmRzY2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgYWN0aXZlQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZHJhd0FjdGl2ZUJvYXJkKGdhbWVib2FyZCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzdGFsbE5leHRUdXJuID0gYXdhaXQgc3RhbGxDb21wdXRlck1vdmUoKTtcbiAgICAgICAgc3RhbGxOZXh0VHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYXllck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc2hvd1BsYXllcnNUdXJuID0gYXdhaXQgc2hvd1BsYXllclJlc3VsdCgpO1xuICAgICAgICBzaG93UGxheWVyc1R1cm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdW5rU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXAubmFtZSwgJyBpcyBhIGdvbmVyJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGxheWVyUmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJSZXN1bHRUaW1lciA9IGF3YWl0IHByb21pc2lmeShmKCksIDIwMDApO1xuICAgICAgICByZXR1cm4gcGxheWVyUmVzdWx0VGltZXJcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhbGxDb21wdXRlck1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmluaXNoZWQgPSBhd2FpdCBwcm9taXNpZnkoZigpLCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyRmluaXNoZWRcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvbWlzaWZ5ID0gKGNhbGxiYWNrLHRpbWVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShjYWxsYmFjayksIHRpbWVyKSk7XG4gICAgfVxuICAgIFxuXG4gICAgY29uc3QgZHJhd1NoaXBzID0gKGdhbWVib2FyZCxvbmJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ2FtZWJvYXJkLmdldFNoaXBzKCk7XG4gICAgICAgIGNvbnN0IHBsYXl6b25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob25ib2FyZCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbihwbGF5em9uZSwgZ2FtZWJvYXJkLmdldExlbmd0aCgpLCBzaGlwKVxuICAgICAgICAgICAgcGxheXpvbmUuYXBwZW5kQ2hpbGQoZHJhd1NoaXAoZGltZW5zaW9ucykpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdTaGlwID0gKGRpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbWFya2VyJyk7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdzdHlsZScsYHRvcDoke2RpbWVuc2lvbnMudG9wfTtsZWZ0OiR7ZGltZW5zaW9ucy5sZWZ0fTt3aWR0aDoke2RpbWVuc2lvbnMubGVuZ3RofTtoZWlnaHQ6JHtkaW1lbnNpb25zLmhlaWdodH1gKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiA9ICh6b25lLCBzY2FsZSAsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB1bml0ID0gem9uZS5vZmZzZXRXaWR0aCAvIHNjYWxlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzBdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzFdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5vcmllbnRhdGlvbiA/IHNoaXAubGVuZ3RoICogdW5pdCA6IHVuaXQgO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCA6IHNoaXAubGVuZ3RoICogdW5pdCA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgbGVuZ3RoOmxlbmd0aCsncHgnLFxuICAgICAgICAgICAgaGVpZ2h0OmhlaWdodCsncHgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXJnZXQgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmICghYnV0dG9uKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvbjtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICAvLyBGaW5kIHRoZSBjb29yZGluYXRlcyB0aHJvdWdoIHRoZSBlbGVtZW50cyBwb3NpdGlvbiBhbW9uZ3N0IGl0cyBzaWJsaW5nc1xuICAgICAgICBjb25zdCB5ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChib2FyZC5jaGlsZHJlbixwYXJlbnQpO1xuICAgICAgICBjb25zdCB4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGRyZW4sdGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIFt4LHldXG4gICAgfVxuXG4gICAgY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1BsYWNlbWVudEJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3Bvc2l0aW9uOnJlbGF0aXZlOycpXG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxhY2VtZW50U2NyZWVuID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBwbGFjZW1lbnRCb2FyZCA9IFBsYWNlbWVudEJvYXJkKGdhbWVib2FyZCk7XG4gICAgICAgIGNvbnN0IHNoaXBCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1iYXInKTtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBwbGFjZW1lbnRCb2FyZC5zaGlwc05hbWVzO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gU3RyaW5nKCdQbGFjZSAnK3NoaXApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGFjZS1zaGlwJyk7XG4gICAgICAgICAgICBidXR0b24uaWQgPSBzaGlwO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcbiAgICAgICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXBCYXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50KGJ1dHRvbixwbGFjZW1lbnRCb2FyZC5zaGlwc1tzaGlwXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IChidXR0b24sbWFya2VyLGhvcml6b250YWwgPSB0cnVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBUZW1wbGF0ZSA9IFNoaXAoYnV0dG9uLmlkKVxuICAgICAgICBzaGlwVGVtcGxhdGUub3JpZW50YXRpb24gPSBob3Jpem9udGFsO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRlbXBsYXRlLmlkID0gYnV0dG9uLmlkXG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1NISVBfSU1BR0VTW2J1dHRvbi5pZF19YDtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHJvdGF0ZVNoaXAodGVtcGxhdGUsdHJ1ZSx0aWxlc1swXS5vZmZzZXRXaWR0aCxzaGlwVGVtcGxhdGUubGVuZ3RoKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoaG9yaXpvbnRhbCxzaGlwVGVtcGxhdGUubGVuZ3RoLHRpbGUpKSByZXR1cm47XG4gICAgICAgICAgICBob3ZlckltYWdlKHRpbGUsdGVtcGxhdGUpO1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgICAgICBtYXJrZXIuaG9yaXpvbnRhbCA9IGhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgcGxhY2VUZW1wbGF0ZShlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpLHRlbXBsYXRlLG1hcmtlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNPdXRPZkJvdW5kcyA9IChvcmllbnRhdGlvbixsZW5ndGgsIHRpbGUpID0+IHtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aWxlLnBhcmVudE5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocm93LHRpbGUpO1xuICAgICAgICAgICAgaWYgKChsZW5ndGggKyBpbmRleCkgPiByb3cubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aWxlLnBhcmVudE5vZGUucGFyZW50bm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChjb2x1bW5zLHRpbGUucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCArIGluZGV4KSA+IGNvbHVtbnMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdGF0ZVNoaXAgPSAoaW1hZ2Usb3JpZW50YXRpb24sdW5pdCxsZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBvcmllbnRhdGlvbiA/ICh1bml0Kmxlbmd0aCkrJ3B4JyA6IHVuaXQrJ3B4JztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb3JpZW50YXRpb24gPyB1bml0ICsncHgnOiAodW5pdCpsZW5ndGgpKydweCc7XG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlU2hpcCA9ICh0ZW1wbGF0ZSxtYXJrZXIpID0+IHtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQodGVtcGxhdGUsbWFya2VyLG1hcmtlci5ob3Jpem9udGFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVRlbXBsYXRlID0gKHRpbGUsdGVtcGxhdGUsbWFya2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgbWFya2VyLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKHRpbGUub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIHRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4gbW92ZVNoaXAoZS50YXJnZXQuY2xvc2VzdCgnLnBsYWNlaG9sZGVyJyksbWFya2VyKSk7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5yZXBsYWNlV2l0aCh0aWxlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbiA9ICh1bml0LGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0ID0gKGNvb3Jkc1swXSp1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSAoY29vcmRzWzFdKnVuaXQpKydweCc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgdG9wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zdCBob3ZlckltYWdlID0gKGVsZW1lbnQsaW1nKSA9PiB7XG4gICAgLy8gICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKGUpID0+IGUudGFyZ2V0LmFwcGVuZENoaWxkKGltZykpO1xuICAgIC8vICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLChlKSA9PiBlLnRhcmdldC5yZW1vdmVDaGlsZChpbWcpKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBob3ZlckltYWdlID0gKGVsZW1lbnQsaW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBnZXRUYXJnZXQoZS50YXJnZXQuY2xvc2VzdCgnLnRpbGUnKSk7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJykub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSBwb3MudG9wO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSBwb3MubGVmdDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd1NoaXBzLFxuICAgICAgICByZW5kZXJDb21wdXRlck1vdmUsXG4gICAgICAgIGVuZEdhbWUsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICByZW5kZXJQbGFjZW1lbnRTY3JlZW4sXG4gICAgICAgIHNoaXBQbGFjZW1lbnQsXG4gICAgICAgIGRyYXdQbGFjZW1lbnRCb2FyZCxcbiAgICAgICAgcGxheWVyT25lXG4gICAgfVxufSkoKTtcblxuY29uc3QgUGxhY2VtZW50Qm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSB7XG4gICAgICAgIGNhcnJpZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBiYXR0bGVzaGlwOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY3J1aXNlcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1hcmluZTp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3llcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZU1hcmtlciA9IChzaGlwLGNvb3Jkcyxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIHNoaXBzW3NoaXBdLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgc2hpcHNbc2hpcF0uaG9yaXpvbnRhbCA9IGhvcml6b250YWw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gU2hpcChzaGlwKTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAobmV3U2hpcCxzaGlwc1tzaGlwXS5jb29yZHNbMF0sc2hpcHNbc2hpcF0uY29vcmRzWzFdLHNoaXBzW3NoaXBdLmhvcml6b250YWwpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZU1hcmtlcixcbiAgICAgICAgc2V0U2hpcHMsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBnZXQgc2hpcHNOYW1lcygpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzaGlwcyk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBsZXQgaGl0Q291bnRlciA9IDA7XG5cbiAgICBjb25zdCBTSElQX1NJWkVTID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChoaXRDb3VudGVyID49IGxlbmd0aClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBwb3NpdGlvbjpbXSxcbiAgICAgICAgb3JpZW50YXRpb246bnVsbCxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheWVkTmFtZSA9IG5hbWUuc3BsaXQoJycpO1xuICAgICAgICAgICAgYXJyYXllZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWVkTmFtZS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBTSElQX1NJWkVTW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRpbGU6ICByZ2JhKDIwMCwyMDAsMjAwLDAuMSk7XG4gICAgLS10aWxlLWF0dGFjazogcmdiYSgyNTUsMTUwLDE1MCwwLjkpO1xuICAgIC0tdGlsZS1oaXQ6IHJnYmEoMjU1LDIwMCwyMDAsMC44KTtcbiAgICAtLXRpbGUtbWlzczogcmdiYSgyMDAsMjAwLDI1NSwwLjgpO1xuICAgIC0tdGlsZS1ob3ZlcjogcmdiYSgyMzAsMjAwLDIwMCwwLjQpO1xufVxuXG4jZ2FtZWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNyaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2xlZnQgLnNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbiNyaWdodCAuc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jbGVmdCxcbiNyaWdodCB7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4ubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcbn1cblxuLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OmZsZXg7XG59XG5cbi50aWxlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmbGV4OjE7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlsZSk7XG4gICAgYm9yZGVyOiAwO1xufVxuXG5kaXYudGlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XG59XG5cbmJ1dHRvbi50aWxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhvdmVyKTtcbn1cblxuLmhpZGRlbi1ib2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTowO1xuICAgIGxlZnQ6MDtcbiAgICByaWdodDowO1xuICAgIG1hcmdpbjphdXRvO1xuICAgIHdpZHRoOjUwJTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNwbGF5ZXItb25lLFxuI3BsYXllci10d28ge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uc2hpcC1tYXJrZXIge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG5cbi8qIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XG4gICAgYm9yZGVyOiAwO1xufSAqL1xuXG5idXR0b24udGlsZS5hdHRhY2sge1xuICAgIGFuaW1hdGlvbjogYXR0YWNrLXB1bHNlIDAuNXMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGF0dGFjay1wdWxzZSB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWF0dGFjaykgO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XG4gICAgfVxufVxuXG4ucGxhY2Utc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbGFjZS1zaGlwOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzM0ZGO1xufVxuXG4ucGxhY2Utc2hpcDphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAzJSk7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gICAgYm9yZGVyOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuXG4ucGxhY2Vob2xkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLE1BQU07SUFDTixVQUFVO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFFBQVE7SUFDUixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJO1FBQ0kscUNBQXFDO0lBQ3pDO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdGlsZTogIHJnYmEoMjAwLDIwMCwyMDAsMC4xKTtcXG4gICAgLS10aWxlLWF0dGFjazogcmdiYSgyNTUsMTUwLDE1MCwwLjkpO1xcbiAgICAtLXRpbGUtaGl0OiByZ2JhKDI1NSwyMDAsMjAwLDAuOCk7XFxuICAgIC0tdGlsZS1taXNzOiByZ2JhKDIwMCwyMDAsMjU1LDAuOCk7XFxuICAgIC0tdGlsZS1ob3ZlcjogcmdiYSgyMzAsMjAwLDIwMCwwLjQpO1xcbn1cXG5cXG4jZ2FtZWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jcmlnaHQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2xlZnQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4jcmlnaHQgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNsZWZ0LFxcbiNyaWdodCB7XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1taXNzKTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcXG59XFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLnRpbGUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmbGV4OjE7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGlsZSk7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuZGl2LnRpbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlKTtcXG59XFxuXFxuYnV0dG9uLnRpbGU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWhvdmVyKTtcXG59XFxuXFxuLmhpZGRlbi1ib2FyZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIGJvdHRvbTowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIG1hcmdpbjphdXRvO1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaGl0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNwbGF5ZXItb25lLFxcbiNwbGF5ZXItdHdvIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5zaGlwLW1hcmtlciB7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4vKiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUpO1xcbiAgICBib3JkZXI6IDA7XFxufSAqL1xcblxcbmJ1dHRvbi50aWxlLmF0dGFjayB7XFxuICAgIGFuaW1hdGlvbjogYXR0YWNrLXB1bHNlIDAuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhdHRhY2stcHVsc2Uge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLWF0dGFjaykgO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZSk7XFxuICAgIH1cXG59XFxuXFxuLnBsYWNlLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYWNlLXNoaXA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzM0ZGO1xcbn1cXG5cXG4ucGxhY2Utc2hpcDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMyUpO1xcbn1cXG5cXG4ucGxhY2Vob2xkZXIge1xcbiAgICBib3JkZXI6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuXFxuLnBsYWNlaG9sZGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vbW9kdWxlcy9zY3JlZW4uanNcIjtcbmltcG9ydCB7IFBsYXllciAsIENvbXB1dGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL21vZHVsZXMvZ2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKDEwLCBcInBsYXllci1vbmVcIik7XG4gICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBHYW1lYm9hcmQoMTAsIFwicGxheWVyLXR3b1wiKTtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoXCJwbGF5ZXItb25lXCIscGxheWVyVHdvQm9hcmQpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IENvbXB1dGVyKFwicGxheWVyLXR3b1wiLHBsYXllck9uZUJvYXJkKTtcbiAgICBwbGF5ZXJPbmVCb2FyZC5vcHBvbmVudCA9IHBsYXllclR3bztcbiAgICBwbGF5ZXJUd29Cb2FyZC5vcHBvbmVudCA9IHBsYXllck9uZTtcbiAgIFxuICAgIGNvbnN0IGluaXRpYWxpc2VHYW1lID0gKHBsYXllck9uZSkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyT25lXG4gICAgfVxuXG4gICAgY29uc3QgdHVybk92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrRm9yQWxsU3VuaygpKSB7XG4gICAgICAgICAgICBTY3JlZW4uZW5kR2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5leHRQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2aW91cyA9IGN1cnJlbnRQbGF5ZXI7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSBwbGF5ZXJPbmUgPyBwbGF5ZXJUd28gOiBwbGF5ZXJPbmUgO1xuICAgICAgICBTY3JlZW4ucmVmcmVzaChjdXJyZW50UGxheWVyLHByZXZpb3VzKTtcbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuaXNDb21wKSB7XG4gICAgICAgICAgICBjdXJyZW50UGxheWVyLm1ha2VNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKHBsYXllcikgPT4ge1xuICAgICAgICBTY3JlZW4uZHJhd1BsYWNlbWVudEJvYXJkKHBsYXllci5nYW1lYm9hcmQpO1xuICAgICAgICBTY3JlZW4ucmVuZGVyUGxhY2VtZW50U2NyZWVuKCk7XG4gICAgfVxuXG4gICAgc2hpcFBsYWNlbWVudChwbGF5ZXJPbmUpO1xuXG4gICAgLy8gbGV0IGN1cnJlbnRQbGF5ZXIgPSBpbml0aWFsaXNlR2FtZShwbGF5ZXJPbmUpO1xuXG4gICAgLy8gY29uc3QgcGxheWVyVGFua2VyID0gU2hpcCg1LCAnVGFua2VyJyk7XG4gICAgLy8gY29uc3QgcGxheWVyRGVzdHJveWVyID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gICAgLy8gY29uc3QgcGxheWVyQ3J1aXNlciA9IFNoaXAoNCwgJ0NydWlzZXInKTtcblxuICAgIC8vIGNvbnN0IGNvbXB1dGVyVGFua2VyID0gU2hpcCg1LCAnVGFua2VyJyk7XG4gICAgLy8gY29uc3QgY29tcHV0ZXJEZXN0cm95ZXIgPSBTaGlwKDMsICdEZXN0cm95ZXInKTtcbiAgICAvLyBjb25zdCBjb21wdXRlckNydWlzZXIgPSBTaGlwKDQsICdDcnVpc2VyJyk7XG5cbiAgICAvLyBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyVGFua2VyLDEsMSx0cnVlKTtcbiAgICAvLyBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAocGxheWVyRGVzdHJveWVyLDMsNCxmYWxzZSk7XG4gICAgLy8gcGxheWVyT25lQm9hcmQucGxhY2VTaGlwKHBsYXllckNydWlzZXIsMCw5LHRydWUpO1xuICAgIFxuICAgIC8vIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChjb21wdXRlclRhbmtlciw5LDIsZmFsc2UpO1xuICAgIC8vIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChjb21wdXRlckRlc3Ryb3llciw1LDYsZmFsc2UpO1xuICAgIC8vIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChjb21wdXRlckNydWlzZXIsMCwwLHRydWUpO1xuXG4gICAgLy8gU2NyZWVuLnJlZnJlc2gocGxheWVyT25lLHBsYXllclR3bylcblxuICAgIHJldHVybiB7XG4gICAgICAgIHR1cm5PdmVyLFxuICAgIH1cbn0pKCk7Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIkdhbWVib2FyZCIsInNpemUiLCJhcmd1bWVudHMiLCJzaGlwcyIsInR1cm5zIiwiU3F1YXJlIiwieCIsInkiLCJzaGlwIiwiaGl0IiwiY29vcmRzIiwiYnVpbGRSb3ciLCJpbmRleCIsImNvbHVtbnMiLCJidWlsZFNxdWFyZSIsInJvd3MiLCJnZXRMZW5ndGgiLCJnZXRTcXVhcmUiLCJnYW1lU3F1YXJlIiwic3F1YXJlU3RhdHVzIiwiZ2V0U2hpcHMiLCJoaXRTcXVhcmUiLCJFcnJvciIsImNoZWNrRm9yRW1wdHkiLCJwbGFjZVNoaXAiLCJob3Jpem9udGFsIiwiYXhpcyIsImNoZWNrQm91bmRhcmllcyIsImNoZWNrRm9yU2hpcHMiLCJvcmllbnRhdGlvbiIsInBvc2l0aW9uIiwiY2xlYXJTaGlwIiwicG9wIiwic3BsaWNlIiwiaW5kZXhPZiIsInJhbmdlIiwiZXZlcnkiLCJjaGVja0ZvckFsbFN1bmsiLCJhbGxDb25kaXRpb24iLCJmb3JFYWNoIiwiaXNTdW5rIiwiY29uZGl0aW9uIiwiY2xlYXJBbGwiLCJjdXIiLCJjb29yZCIsIm9wcG9uZW50IiwiU2NyZWVuIiwiUGxheWVyIiwiZ2FtZWJvYXJkIiwibWFrZU1vdmUiLCJ0aWxlIiwibW92ZSIsIl90eXBlb2YiLCJzdW5rU2hpcCIsInJlbmRlclBsYXllck1vdmUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwbGF5aW5nIiwiQ29tcHV0ZXIiLCJyZWNlbnRIaXQiLCJjdXJyZW50U3VjY2VzcyIsIlNRVUFSRVNfQVJPVU5EIiwidXAiLCJyaWdodCIsImRvd24iLCJsZWZ0IiwicGxheVRpbGUiLCJnZW5lcmF0ZVJhbmRvbUNvb3JkcyIsImJvdW5kYXJ5IiwicmFuWCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhblkiLCJ0cnlNb3ZlIiwicmVzdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwibW92ZVRha2VuIiwicmVuZGVyQ29tcHV0ZXJNb3ZlIiwiZWR1Y2F0ZWRNb3ZlIiwiaXNDb21wIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIk9wIiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFwcGx5IiwiU2hpcCIsImJhdHRsZXNoaXBJbWFnZSIsIlNISVBfSU1BR0VTIiwiYmF0dGxlc2hpcCIsInBsYXllck9uZSIsImRyYXdBY3RpdmVCb2FyZCIsInpvbmVEb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyb3dDb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJqIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZHJhd1JlY29uQm9hcmQiLCJkcmF3U2hpcHMiLCJkcmF3SGlkZGVuUmVjb25Cb2FyZCIsImhpZGRlbiIsInRleHRDb250ZW50IiwicmVmcmVzaCIsImN1cnJlbnQiLCJwcmV2aW91cyIsImFjdGl2ZUFyZWEiLCJyZWNvbkFyZWEiLCJpbm5lckhUTUwiLCJpbnN0YW50U2hvd1Jlc3VsdCIsImNvb3Jkc2NlbGwiLCJfcmVmIiwiX2NhbGxlZSIsImFjdGl2ZVpvbmUiLCJyb3ciLCJjZWxsIiwicmVtb3ZlQXR0YWNrTWFya2VyIiwic3RhbGxOZXh0VHVybiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJwcm9taXNpZnkiLCJyZW1vdmUiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJmIiwiX3JlZjQiLCJfY2FsbGVlNCIsImNvbXB1dGVyRmluaXNoZWQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJjYWxsYmFjayIsInRpbWVyIiwic2V0VGltZW91dCIsIm9uYm9hcmQiLCJwbGF5em9uZSIsImRpbWVuc2lvbnMiLCJjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiIsImRyYXdTaGlwIiwic2V0QXR0cmlidXRlIiwidG9wIiwiaGVpZ2h0Iiwiem9uZSIsInNjYWxlIiwidW5pdCIsIm9mZnNldFdpZHRoIiwiYnV0dG9uIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIkFycmF5IiwiZW5kR2FtZSIsImRyYXdQbGFjZW1lbnRCb2FyZCIsInJlbmRlclBsYWNlbWVudFNjcmVlbiIsInBsYWNlbWVudEJvYXJkIiwiUGxhY2VtZW50Qm9hcmQiLCJzaGlwQmFyIiwic2hpcHNOYW1lcyIsImJ1dHRvblRleHQiLCJTdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInJlbW92ZUNoaWxkIiwic2hpcFBsYWNlbWVudCIsIm1hcmtlciIsInNoaXBUZW1wbGF0ZSIsInRpbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRlbXBsYXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyb3RhdGVTaGlwIiwiaXNPdXRPZkJvdW5kcyIsImhvdmVySW1hZ2UiLCJwbGFjZVRlbXBsYXRlIiwicGFyZW50bm9kZSIsImltYWdlIiwid2lkdGgiLCJtb3ZlU2hpcCIsImNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsImVsZW1lbnQiLCJpbWciLCJldmVudCIsInBvcyIsImNhcnJpZXIiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwicGxhY2VNYXJrZXIiLCJzZXRTaGlwcyIsIm5ld1NoaXAiLCJoaXRDb3VudGVyIiwiU0hJUF9TSVpFUyIsIl9kZWZpbmVBY2Nlc3NvciIsImFycmF5ZWROYW1lIiwic3BsaXQiLCJHYW1lIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJUd29Cb2FyZCIsInBsYXllclR3byIsImluaXRpYWxpc2VHYW1lIiwidHVybk92ZXIiLCJjdXJyZW50UGxheWVyIiwibmV4dFBsYXllciIsInBsYXllciJdLCJzb3VyY2VSb290IjoiIn0=