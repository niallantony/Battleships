/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBRTtNQUNmdkcsTUFBTSxHQUFHZ0csb0JBQW9CLENBQUMsQ0FBQztNQUMvQk8sU0FBUyxHQUFHRixPQUFPLENBQUNyRyxNQUFNLENBQUM7SUFDL0I7SUFDQW1GLGtEQUFNLENBQUN0RixrQkFBa0IsQ0FBQ0csTUFBTSxFQUFDdEMsU0FBUyxDQUFDO0VBQy9DLENBQUM7RUFFRCxJQUFNK0ksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUyxDQUUzQixDQUFDO0VBRUQsT0FBTztJQUNIekksRUFBRSxFQUFGQSxFQUFFO0lBQ0ZOLFNBQVMsRUFBVEEsU0FBUztJQUNUa0MsTUFBTSxFQUFDLElBQUk7SUFDWG9HLG9CQUFvQixFQUFwQkEsb0JBQW9CO0lBQ3BCSyxPQUFPLEVBQVBBLE9BQU87SUFDUHJILFFBQVEsRUFBUkE7RUFDSixDQUFDO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2NyZWVuLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBTSElQX0lNQUdFUyA9IHtcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwSW1hZ2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cblxuICAgIGxldCBwbGF5ZXJPbmUgPSB0cnVlO1xuXG4gICAgY29uc3QgZHJhd0FjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZ2V0VGFyZ2V0KGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5vcHBvbmVudC5tYWtlTW92ZSh0aWxlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdSZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyYXdTaGlwcyhnYW1lYm9hcmQsZ2FtZWJvYXJkLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3SGlkZGVuUmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgLy9kcmF3IHRoZSB0aWxlcyB0byBtYWludGFpbiBzaXplIGNvbnNpc3RlbmN5XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZGRlbi50ZXh0Q29udGVudCA9IFwiRGF0YSBFbmNyeXB0ZWQuLi5cIlxuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJvYXJkJyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGhpZGRlbilcbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoID0gKGN1cnJlbnQscHJldmlvdXMpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHJlY29uQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpO1xuICAgICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZWNvbkFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGRyYXdBY3RpdmVCb2FyZChjdXJyZW50LmdhbWVib2FyZCk7XG4gICAgICAgIGlmICghY3VycmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIGRyYXdSZWNvbkJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcmF3SGlkZGVuUmVjb25Cb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1NoaXBzKGN1cnJlbnQuZ2FtZWJvYXJkLGN1cnJlbnQuZ2FtZWJvYXJkLmlkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVkdW5kYW50Li4uIGRlbGV0ZT9cbiAgICAvL1xuICAgIC8vIGNvbnN0IGluc3RhbnRTaG93UmVzdWx0ID0gKGdhbWVib2FyZCxjb29yZHNjZWxsKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGFjdGl2ZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgIC8vICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIC8vICAgICBkcmF3QWN0aXZlQm9hcmQoZ2FtZWJvYXJkKTtcbiAgICAvLyB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHN0YWxsTmV4dFR1cm4gPSBhd2FpdCBzdGFsbENvbXB1dGVyTW92ZSgpO1xuICAgICAgICBzdGFsbE5leHRUdXJuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxheWVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzaG93UGxheWVyc1R1cm4gPSBhd2FpdCBzaG93UGxheWVyUmVzdWx0KCk7XG4gICAgICAgIHNob3dQbGF5ZXJzVHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1bmtTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc2hpcC5uYW1lLCAnIGlzIGEgZ29uZXInKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dQbGF5ZXJSZXN1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllclJlc3VsdFRpbWVyID0gYXdhaXQgcHJvbWlzaWZ5KGYoKSwgMjAwMCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJSZXN1bHRUaW1lclxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFsbENvbXB1dGVyTW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaW5pc2hlZCA9IGF3YWl0IHByb21pc2lmeShmKCksIDIwMDApO1xuICAgICAgICByZXR1cm4gY29tcHV0ZXJGaW5pc2hlZFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9taXNpZnkgPSAoY2FsbGJhY2ssdGltZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGNhbGxiYWNrKSwgdGltZXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkLG9uYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBnYW1lYm9hcmQuZ2V0U2hpcHMoKTtcbiAgICAgICAgY29uc3QgcGxheXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmJvYXJkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uKHBsYXl6b25lLCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCksIHNoaXApXG4gICAgICAgICAgICBwbGF5em9uZS5hcHBlbmRDaGlsZChkcmF3U2hpcChkaW1lbnNpb25zKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1NoaXAgPSAoZGltZW5zaW9ucykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcC1tYXJrZXInKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxgdG9wOiR7ZGltZW5zaW9ucy50b3B9O2xlZnQ6JHtkaW1lbnNpb25zLmxlZnR9O3dpZHRoOiR7ZGltZW5zaW9ucy5sZW5ndGh9O2hlaWdodDoke2RpbWVuc2lvbnMuaGVpZ2h0fWApO1xuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uID0gKHpvbmUsIHNjYWxlICxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB6b25lLm9mZnNldFdpZHRoIC8gc2NhbGU7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMF0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMV0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLm9yaWVudGF0aW9uID8gc2hpcC5sZW5ndGggKiB1bml0IDogdW5pdCA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0IDogc2hpcC5sZW5ndGggKiB1bml0IDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICBsZW5ndGg6bGVuZ3RoKydweCcsXG4gICAgICAgICAgICBoZWlnaHQ6aGVpZ2h0KydweCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhcmdldCA9IChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIC8vIEZpbmQgdGhlIGNvb3JkaW5hdGVzIHRocm91Z2ggdGhlIGVsZW1lbnRzIHBvc2l0aW9uIGFtb25nc3QgaXRzIHNpYmxpbmdzXG4gICAgICAgIGNvbnN0IHkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJvYXJkLmNoaWxkcmVuLHBhcmVudCk7XG4gICAgICAgIGNvbnN0IHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbix0YXJnZXQpO1xuICAgICAgICByZXR1cm4gW3gseV1cbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJylcbiAgICB9XG5cblxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXdTaGlwcyxcbiAgICAgICAgcmVuZGVyQ29tcHV0ZXJNb3ZlLFxuICAgICAgICBlbmRHYW1lLFxuICAgICAgICBnZXRUYXJnZXQsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICBwbGF5ZXJPbmVcbiAgICB9XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBsZXQgaGl0Q291bnRlciA9IDA7XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAhb3JpZW50YXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgU0hJUF9TSVpFUyA9IHtcbiAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudGVyKytcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoaGl0Q291bnRlciA+PSBsZW5ndGgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uOltdLFxuICAgICAgICBnZXQgb3JpZW50YXRpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZW50YXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgcm90YXRlLFxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ZWROYW1lID0gbmFtZS5zcGxpdCgnJyk7XG4gICAgICAgICAgICBhcnJheWVkTmFtZVswXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5ZWROYW1lLmpvaW4oJycpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIFNISVBfU0laRVNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9zY3JlZW4uanNcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIFxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKHRpbGUpID0+IHtcbiAgICAgICAgaWYgKCF0aWxlKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gZ2FtZWJvYXJkLmhpdFNxdWFyZSh0aWxlWzBdLHRpbGVbMV0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtb3ZlID09PSAnb2JqZWN0JyAmJiBtb3ZlLmlzU3VuaygpKSBTY3JlZW4uc3Vua1NoaXAobW92ZSk7IFxuICAgICAgICAgICAgU2NyZWVuLnJlbmRlclBsYXllck1vdmUodGlsZSxnYW1lYm9hcmQpO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgICAgICBpZCxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBtYWtlTW92ZVxuICAgIH1cblxufVxuXG5leHBvcnQgY29uc3QgQ29tcHV0ZXIgPSAoaWQsZ2FtZWJvYXJkKSA9PiB7XG5cbiAgICBsZXQgcmVjZW50SGl0ID0gZmFsc2U7XG5cbiAgICBsZXQgY3VycmVudFN1Y2Nlc3MgPSB7fVxuXG4gICAgY29uc3QgU1FVQVJFU19BUk9VTkQgPSAoeCx5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cDpbeCx5LTFdLFxuICAgICAgICAgICAgcmlnaHQ6W3grMSx5XSxcbiAgICAgICAgICAgIGRvd246W3gseSsxXSxcbiAgICAgICAgICAgIGxlZnQ6W3gtMSx5XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAgIFxuICAgIGNvbnN0IHBsYXlUaWxlID0gKHRpbGUpID0+IHtcbiAgICAgICAgaWYgKCF0aWxlKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBoaXQgPSBnYW1lYm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAoaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdtaXNzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvdW5kYXJ5ID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBjb25zdCByYW5YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgY29uc3QgcmFuWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIHJldHVybiBbcmFuWCxyYW5ZXTtcbiAgICB9XG5cbiAgICBjb25zdCB0cnlNb3ZlID0gKGNvb3JkcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheVRpbGUoY29vcmRzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdWNjZXNzID0gT2JqZWN0LmFzc2lnbih7Y29vcmRzOmNvb3Jkc30scmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgcmVjZW50SGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb3ZlVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgaWYgKCFnYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gdHJ5TW92ZShjb29yZHMpO1xuICAgICAgICB9XG4gICAgICAgIFNjcmVlbi5yZW5kZXJDb21wdXRlck1vdmUoY29vcmRzLGdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWR1Y2F0ZWRNb3ZlID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgaXNDb21wOnRydWUsXG4gICAgICAgIGdlbmVyYXRlUmFuZG9tQ29vcmRzLFxuICAgICAgICB0cnlNb3ZlLFxuICAgICAgICBtYWtlTW92ZVxuICAgIH1cbn0iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiU2hpcCIsImJhdHRsZXNoaXBJbWFnZSIsIlNISVBfSU1BR0VTIiwiYmF0dGxlc2hpcCIsInBsYXllck9uZSIsImRyYXdBY3RpdmVCb2FyZCIsImdhbWVib2FyZCIsInpvbmVEb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJhcHBlbmRDaGlsZCIsInNpemUiLCJnZXRMZW5ndGgiLCJyb3dDb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJqIiwidGlsZSIsInNxdWFyZVN0YXR1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZ2V0VGFyZ2V0IiwidGFyZ2V0IiwiY2xvc2VzdCIsIm9wcG9uZW50IiwibWFrZU1vdmUiLCJkcmF3UmVjb25Cb2FyZCIsImRyYXdTaGlwcyIsImRyYXdIaWRkZW5SZWNvbkJvYXJkIiwiaGlkZGVuIiwidGV4dENvbnRlbnQiLCJyZWZyZXNoIiwiY3VycmVudCIsInByZXZpb3VzIiwiYWN0aXZlQXJlYSIsInJlY29uQXJlYSIsImlubmVySFRNTCIsImlzQ29tcCIsInJlbmRlckNvbXB1dGVyTW92ZSIsIl9yZWYiLCJfY2FsbGVlIiwiY29vcmRzIiwiYWN0aXZlWm9uZSIsInJvdyIsImNlbGwiLCJyZW1vdmVBdHRhY2tNYXJrZXIiLCJzdGFsbE5leHRUdXJuIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsInByb21pc2lmeSIsInJlbW92ZSIsInN0YWxsQ29tcHV0ZXJNb3ZlIiwiX3giLCJfeDIiLCJyZW5kZXJQbGF5ZXJNb3ZlIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJzdW5rU2hpcCIsInNoaXAiLCJjb25zb2xlIiwibG9nIiwiX3JlZjMiLCJfY2FsbGVlMyIsInBsYXllclJlc3VsdFRpbWVyIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZiIsIl9yZWY0IiwiX2NhbGxlZTQiLCJjb21wdXRlckZpbmlzaGVkIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiY2FsbGJhY2siLCJ0aW1lciIsInNldFRpbWVvdXQiLCJvbmJvYXJkIiwic2hpcHMiLCJnZXRTaGlwcyIsInBsYXl6b25lIiwiZGltZW5zaW9ucyIsImNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uIiwiZHJhd1NoaXAiLCJzZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0Iiwiem9uZSIsInNjYWxlIiwidW5pdCIsIm9mZnNldFdpZHRoIiwiTWF0aCIsImZsb29yIiwicG9zaXRpb24iLCJvcmllbnRhdGlvbiIsImJ1dHRvbiIsInBhcmVudCIsInBhcmVudE5vZGUiLCJ5IiwiQXJyYXkiLCJpbmRleE9mIiwieCIsImVuZEdhbWUiLCJoaXRDb3VudGVyIiwicm90YXRlIiwiU0hJUF9TSVpFUyIsImNhcnJpZXIiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiaGl0IiwiaXNTdW5rIiwiYXJyYXllZE5hbWUiLCJzcGxpdCIsInRvVXBwZXJDYXNlIiwiam9pbiIsIlNjcmVlbiIsIlBsYXllciIsIm1vdmUiLCJoaXRTcXVhcmUiLCJwbGF5aW5nIiwiQ29tcHV0ZXIiLCJyZWNlbnRIaXQiLCJjdXJyZW50U3VjY2VzcyIsIlNRVUFSRVNfQVJPVU5EIiwidXAiLCJyaWdodCIsImRvd24iLCJwbGF5VGlsZSIsImdlbmVyYXRlUmFuZG9tQ29vcmRzIiwiYm91bmRhcnkiLCJyYW5YIiwicmFuZG9tIiwicmFuWSIsInRyeU1vdmUiLCJhc3NpZ24iLCJtb3ZlVGFrZW4iLCJjaGVja0ZvckVtcHR5IiwiZWR1Y2F0ZWRNb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==