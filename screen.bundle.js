/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  !*** ./src/modules/screen.js ***!
  \*******************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDbk4sSUFBSSxDQUFDaUgsS0FBSyxDQUFDMkMsUUFBUSxFQUFDbUQsTUFBTSxDQUFDO0lBQzdELElBQU1LLENBQUMsR0FBR0YsS0FBSyxDQUFDdlAsU0FBUyxDQUFDd1AsT0FBTyxDQUFDbk4sSUFBSSxDQUFDK00sTUFBTSxDQUFDbkQsUUFBUSxFQUFDNUIsTUFBTSxDQUFDO0lBQzlELE9BQU8sQ0FBQ29GLENBQUMsRUFBQ0gsQ0FBQyxDQUFDO0VBQ2hCLENBQUM7RUFFRCxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0lBQ2xCeEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQzVCLENBQUM7RUFNRCxPQUFPO0lBQ0h6QyxTQUFTLEVBQVRBLFNBQVM7SUFDVFcsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJxRSxPQUFPLEVBQVBBLE9BQU87SUFDUHRGLFNBQVMsRUFBVEEsU0FBUztJQUNUVSxPQUFPLEVBQVBBLE9BQU87SUFDUGtDLFFBQVEsRUFBUkEsUUFBUTtJQUNSVCxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQnhELFNBQVMsRUFBVEEsU0FBUztJQUNULElBQUlDLE1BQU1BLENBQUMyRyxRQUFRLEVBQUU7TUFDakIzRyxNQUFNLEdBQUcyRyxRQUFRO0lBQ3JCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNoaXAgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBsZXQgaGl0Q291bnRlciA9IDA7XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAhb3JpZW50YXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgU0hJUF9TSVpFUyA9IHtcbiAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudGVyKytcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoaGl0Q291bnRlciA+PSBTSElQX1NJWkVTW25hbWVdKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBwb3NpdGlvbjpbXSxcbiAgICAgICAgZ2V0IG9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9yaWVudGF0aW9uKG9yKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IG9yO1xuICAgICAgICB9LFxuICAgICAgICByb3RhdGUsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXllZE5hbWUgPSBuYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGFycmF5ZWROYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXllZE5hbWUuam9pbignJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gU0hJUF9TSVpFU1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBTSElQX0lNQUdFUyA9IHtcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwSW1hZ2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cbiAgICAvL3doYXQgaXMgdGhpcyBkb2luZz9cbiAgICBsZXQgcGxheWVyT25lID0gdHJ1ZTtcbiAgICBsZXQgb25OZXh0O1xuXG4gICAgY29uc3QgZHJhd0FjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aWxlID0gZ2V0VGFyZ2V0KGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5vcHBvbmVudC5tYWtlTW92ZSh0aWxlLCBnYW1lYm9hcmQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1JlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZHJhd1NoaXBzKGdhbWVib2FyZCxnYW1lYm9hcmQuaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdIaWRkZW5SZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICAvL2RyYXcgdGhlIHRpbGVzIHRvIG1haW50YWluIHNpemUgY29uc2lzdGVuY3lcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGlkZGVuLnRleHRDb250ZW50ID0gXCJEYXRhIEVuY3J5cHRlZC4uLlwiXG4gICAgICAgIGhpZGRlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYm9hcmQnKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoaGlkZGVuKVxuICAgIH1cblxuICAgIGNvbnN0IHJlZnJlc2ggPSAoY3VycmVudCxwcmV2aW91cykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgY29uc3QgcmVjb25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jyk7XG4gICAgICAgIGFjdGl2ZUFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlY29uQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZHJhd0FjdGl2ZUJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgIGlmICghY3VycmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIGRyYXdSZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhwcmV2aW91cy5nYW1lYm9hcmQscHJldmlvdXMuZ2FtZWJvYXJkLmlkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVkdW5kYW50Li4uIGRlbGV0ZT9cbiAgICAvL1xuICAgIC8vIGNvbnN0IGluc3RhbnRTaG93UmVzdWx0ID0gKGdhbWVib2FyZCxjb29yZHNjZWxsKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGFjdGl2ZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgIC8vICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIC8vICAgICBkcmF3QWN0aXZlQm9hcmQoZ2FtZWJvYXJkKTtcbiAgICAvLyB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHN0YWxsTmV4dFR1cm4gPSBhd2FpdCBzdGFsbENvbXB1dGVyTW92ZSgpO1xuICAgICAgICBzdGFsbE5leHRUdXJuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxheWVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzaG93UGxheWVyc1R1cm4gPSBhd2FpdCBzaG93UGxheWVyUmVzdWx0KCk7XG4gICAgICAgIHNob3dQbGF5ZXJzVHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1bmtTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc2hpcC5uYW1lLCAnIGlzIGEgZ29uZXInKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dQbGF5ZXJSZXN1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllclJlc3VsdFRpbWVyID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJSZXN1bHRUaW1lclxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFsbENvbXB1dGVyTW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaW5pc2hlZCA9IGF3YWl0IHByb21pc2lmeShvbk5leHQsIDIwMDApO1xuICAgICAgICByZXR1cm4gY29tcHV0ZXJGaW5pc2hlZFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9taXNpZnkgPSAoY2FsbGJhY2ssdGltZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGNhbGxiYWNrKSwgdGltZXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkLG9uYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBnYW1lYm9hcmQuZ2V0U2hpcHMoKTtcbiAgICAgICAgY29uc3QgcGxheXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmJvYXJkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uKHBsYXl6b25lLCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCksIHNoaXApXG4gICAgICAgICAgICBwbGF5em9uZS5hcHBlbmRDaGlsZChkcmF3U2hpcChkaW1lbnNpb25zKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1NoaXAgPSAoZGltZW5zaW9ucykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcC1tYXJrZXInKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxgdG9wOiR7ZGltZW5zaW9ucy50b3B9O2xlZnQ6JHtkaW1lbnNpb25zLmxlZnR9O3dpZHRoOiR7ZGltZW5zaW9ucy5sZW5ndGh9O2hlaWdodDoke2RpbWVuc2lvbnMuaGVpZ2h0fWApO1xuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uID0gKHpvbmUsIHNjYWxlICxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB6b25lLm9mZnNldFdpZHRoIC8gc2NhbGU7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMF0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMV0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLm9yaWVudGF0aW9uID8gc2hpcC5sZW5ndGggKiB1bml0IDogdW5pdCA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0IDogc2hpcC5sZW5ndGggKiB1bml0IDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICBsZW5ndGg6bGVuZ3RoKydweCcsXG4gICAgICAgICAgICBoZWlnaHQ6aGVpZ2h0KydweCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhcmdldCA9IChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIC8vIEZpbmQgdGhlIGNvb3JkaW5hdGVzIHRocm91Z2ggdGhlIGVsZW1lbnRzIHBvc2l0aW9uIGFtb25nc3QgaXRzIHNpYmxpbmdzXG4gICAgICAgIGNvbnN0IHkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJvYXJkLmNoaWxkcmVuLHBhcmVudCk7XG4gICAgICAgIGNvbnN0IHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbix0YXJnZXQpO1xuICAgICAgICByZXR1cm4gW3gseV1cbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJylcbiAgICB9XG5cblxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXdTaGlwcyxcbiAgICAgICAgcmVuZGVyQ29tcHV0ZXJNb3ZlLFxuICAgICAgICBlbmRHYW1lLFxuICAgICAgICBnZXRUYXJnZXQsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICBwbGF5ZXJPbmUsXG4gICAgICAgIHNldCBvbk5leHQobmV4dFR1cm4pIHtcbiAgICAgICAgICAgIG9uTmV4dCA9IG5leHRUdXJuO1xuICAgICAgICB9LFxuICAgIH1cbn0pKCk7XG4iXSwibmFtZXMiOlsiU2hpcCIsIm5hbWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJoaXRDb3VudGVyIiwib3JpZW50YXRpb24iLCJyb3RhdGUiLCJTSElQX1NJWkVTIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiaGl0IiwiaXNTdW5rIiwicG9zaXRpb24iLCJvciIsImFycmF5ZWROYW1lIiwic3BsaXQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcHBseSIsImJhdHRsZXNoaXBJbWFnZSIsIlNISVBfSU1BR0VTIiwicGxheWVyT25lIiwib25OZXh0IiwiZHJhd0FjdGl2ZUJvYXJkIiwiZ2FtZWJvYXJkIiwiem9uZURvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImFwcGVuZENoaWxkIiwic2l6ZSIsImdldExlbmd0aCIsInJvd0NvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsImoiLCJ0aWxlIiwic3F1YXJlU3RhdHVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib3Bwb25lbnQiLCJtYWtlTW92ZSIsImRyYXdSZWNvbkJvYXJkIiwiZHJhd1NoaXBzIiwiZHJhd0hpZGRlblJlY29uQm9hcmQiLCJoaWRkZW4iLCJ0ZXh0Q29udGVudCIsInJlZnJlc2giLCJjdXJyZW50IiwicHJldmlvdXMiLCJhY3RpdmVBcmVhIiwicmVjb25BcmVhIiwiaW5uZXJIVE1MIiwiaXNDb21wIiwicmVuZGVyQ29tcHV0ZXJNb3ZlIiwiX3JlZiIsIl9jYWxsZWUiLCJjb29yZHMiLCJhY3RpdmVab25lIiwicm93IiwiY2VsbCIsInJlbW92ZUF0dGFja01hcmtlciIsInN0YWxsTmV4dFR1cm4iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwicHJvbWlzaWZ5IiwicmVtb3ZlIiwic3RhbGxDb21wdXRlck1vdmUiLCJfeCIsIl94MiIsInJlbmRlclBsYXllck1vdmUiLCJfcmVmMiIsIl9jYWxsZWUyIiwic2hvd1BsYXllcnNUdXJuIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic2hvd1BsYXllclJlc3VsdCIsIl94MyIsIl94NCIsInN1bmtTaGlwIiwic2hpcCIsImNvbnNvbGUiLCJsb2ciLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29tcHV0ZXJGaW5pc2hlZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImNhbGxiYWNrIiwidGltZXIiLCJzZXRUaW1lb3V0Iiwib25ib2FyZCIsInNoaXBzIiwiZ2V0U2hpcHMiLCJwbGF5em9uZSIsImRpbWVuc2lvbnMiLCJjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiIsImRyYXdTaGlwIiwic2V0QXR0cmlidXRlIiwiY29uY2F0IiwidG9wIiwibGVmdCIsImhlaWdodCIsInpvbmUiLCJzY2FsZSIsInVuaXQiLCJvZmZzZXRXaWR0aCIsIk1hdGgiLCJmbG9vciIsImJ1dHRvbiIsInBhcmVudCIsInBhcmVudE5vZGUiLCJ5IiwiQXJyYXkiLCJpbmRleE9mIiwieCIsImVuZEdhbWUiLCJuZXh0VHVybiJdLCJzb3VyY2VSb290IjoiIn0=