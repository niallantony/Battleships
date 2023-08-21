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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMrRyxJQUFJLENBQUNzSCxLQUFLLENBQUM7SUFDN0I7RUFDSixDQUFDO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTaGlwID0gKG5hbWUgPSBudWxsKSA9PiB7XG4gICAgbGV0IGhpdENvdW50ZXIgPSAwO1xuXG4gICAgY29uc3QgU0hJUF9TSVpFUyA9IHtcbiAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudGVyKytcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoaGl0Q291bnRlciA+PSBsZW5ndGgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgcG9zaXRpb246W10sXG4gICAgICAgIG9yaWVudGF0aW9uOm51bGwsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXllZE5hbWUgPSBuYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGFycmF5ZWROYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXllZE5hbWUuam9pbignJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gU0hJUF9TSVpFU1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nXCI7XG5cbmNvbnN0IFNISVBfSU1BR0VTID0ge1xuICAgIGJhdHRsZXNoaXA6IGJhdHRsZXNoaXBJbWFnZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblxuXG4gICAgbGV0IHBsYXllck9uZSA9IHRydWU7XG5cbiAgICBjb25zdCBkcmF3QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBnZXRUYXJnZXQoZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykpO1xuICAgICAgICAgICAgZ2FtZWJvYXJkLm9wcG9uZW50Lm1ha2VNb3ZlKHRpbGUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1JlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZHJhd1NoaXBzKGdhbWVib2FyZCxnYW1lYm9hcmQuaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdIaWRkZW5SZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICAvL2RyYXcgdGhlIHRpbGVzIHRvIG1haW50YWluIHNpemUgY29uc2lzdGVuY3lcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGlkZGVuLnRleHRDb250ZW50ID0gXCJEYXRhIEVuY3J5cHRlZC4uLlwiXG4gICAgICAgIGhpZGRlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYm9hcmQnKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoaGlkZGVuKVxuICAgIH1cblxuICAgIGNvbnN0IHJlZnJlc2ggPSAoY3VycmVudCxwcmV2aW91cykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgY29uc3QgcmVjb25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jyk7XG4gICAgICAgIGFjdGl2ZUFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlY29uQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZHJhd0FjdGl2ZUJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgaWYgKCFjdXJyZW50LmlzQ29tcCkge1xuICAgICAgICAgICAgZHJhd1JlY29uQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3U2hpcHMoY3VycmVudC5nYW1lYm9hcmQsY3VycmVudC5nYW1lYm9hcmQuaWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW50U2hvd1Jlc3VsdCA9IChnYW1lYm9hcmQsY29vcmRzY2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgYWN0aXZlQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZHJhd0FjdGl2ZUJvYXJkKGdhbWVib2FyZCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzdGFsbE5leHRUdXJuID0gYXdhaXQgc3RhbGxDb21wdXRlck1vdmUoKTtcbiAgICAgICAgc3RhbGxOZXh0VHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYXllck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc2hvd1BsYXllcnNUdXJuID0gYXdhaXQgc2hvd1BsYXllclJlc3VsdCgpO1xuICAgICAgICBzaG93UGxheWVyc1R1cm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdW5rU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXAubmFtZSwgJyBpcyBhIGdvbmVyJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGxheWVyUmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJSZXN1bHRUaW1lciA9IGF3YWl0IHByb21pc2lmeShmKCksIDIwMDApO1xuICAgICAgICByZXR1cm4gcGxheWVyUmVzdWx0VGltZXJcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhbGxDb21wdXRlck1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmluaXNoZWQgPSBhd2FpdCBwcm9taXNpZnkoZigpLCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyRmluaXNoZWRcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvbWlzaWZ5ID0gKGNhbGxiYWNrLHRpbWVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShjYWxsYmFjayksIHRpbWVyKSk7XG4gICAgfVxuICAgIFxuXG4gICAgY29uc3QgZHJhd1NoaXBzID0gKGdhbWVib2FyZCxvbmJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ2FtZWJvYXJkLmdldFNoaXBzKCk7XG4gICAgICAgIGNvbnN0IHBsYXl6b25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob25ib2FyZCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbihwbGF5em9uZSwgZ2FtZWJvYXJkLmdldExlbmd0aCgpLCBzaGlwKVxuICAgICAgICAgICAgcGxheXpvbmUuYXBwZW5kQ2hpbGQoZHJhd1NoaXAoZGltZW5zaW9ucykpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdTaGlwID0gKGRpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbWFya2VyJyk7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdzdHlsZScsYHRvcDoke2RpbWVuc2lvbnMudG9wfTtsZWZ0OiR7ZGltZW5zaW9ucy5sZWZ0fTt3aWR0aDoke2RpbWVuc2lvbnMubGVuZ3RofTtoZWlnaHQ6JHtkaW1lbnNpb25zLmhlaWdodH1gKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiA9ICh6b25lLCBzY2FsZSAsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB1bml0ID0gem9uZS5vZmZzZXRXaWR0aCAvIHNjYWxlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzBdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzFdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5vcmllbnRhdGlvbiA/IHNoaXAubGVuZ3RoICogdW5pdCA6IHVuaXQgO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCA6IHNoaXAubGVuZ3RoICogdW5pdCA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgbGVuZ3RoOmxlbmd0aCsncHgnLFxuICAgICAgICAgICAgaGVpZ2h0OmhlaWdodCsncHgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXJnZXQgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmICghYnV0dG9uKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvbjtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICAvLyBGaW5kIHRoZSBjb29yZGluYXRlcyB0aHJvdWdoIHRoZSBlbGVtZW50cyBwb3NpdGlvbiBhbW9uZ3N0IGl0cyBzaWJsaW5nc1xuICAgICAgICBjb25zdCB5ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChib2FyZC5jaGlsZHJlbixwYXJlbnQpO1xuICAgICAgICBjb25zdCB4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGRyZW4sdGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIFt4LHldXG4gICAgfVxuXG4gICAgY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1BsYWNlbWVudEJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3Bvc2l0aW9uOnJlbGF0aXZlOycpXG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxhY2VtZW50U2NyZWVuID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBwbGFjZW1lbnRCb2FyZCA9IFBsYWNlbWVudEJvYXJkKGdhbWVib2FyZCk7XG4gICAgICAgIGNvbnN0IHNoaXBCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1iYXInKTtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBwbGFjZW1lbnRCb2FyZC5zaGlwc05hbWVzO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gU3RyaW5nKCdQbGFjZSAnK3NoaXApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGFjZS1zaGlwJyk7XG4gICAgICAgICAgICBidXR0b24uaWQgPSBzaGlwO1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcbiAgICAgICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXBCYXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50KGJ1dHRvbixwbGFjZW1lbnRCb2FyZC5zaGlwc1tzaGlwXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IChidXR0b24sbWFya2VyLGhvcml6b250YWwgPSB0cnVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBUZW1wbGF0ZSA9IFNoaXAoYnV0dG9uLmlkKVxuICAgICAgICBzaGlwVGVtcGxhdGUub3JpZW50YXRpb24gPSBob3Jpem9udGFsO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRlbXBsYXRlLmlkID0gYnV0dG9uLmlkXG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1NISVBfSU1BR0VTW2J1dHRvbi5pZF19YDtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHJvdGF0ZVNoaXAodGVtcGxhdGUsdHJ1ZSx0aWxlc1swXS5vZmZzZXRXaWR0aCxzaGlwVGVtcGxhdGUubGVuZ3RoKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3V0T2ZCb3VuZHMoaG9yaXpvbnRhbCxzaGlwVGVtcGxhdGUubGVuZ3RoLHRpbGUpKSByZXR1cm47XG4gICAgICAgICAgICBob3ZlckltYWdlKHRpbGUsdGVtcGxhdGUpO1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgICAgICBtYXJrZXIuaG9yaXpvbnRhbCA9IGhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgcGxhY2VUZW1wbGF0ZShlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpLHRlbXBsYXRlLG1hcmtlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNPdXRPZkJvdW5kcyA9IChvcmllbnRhdGlvbixsZW5ndGgsIHRpbGUpID0+IHtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSB0aWxlLnBhcmVudE5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocm93LHRpbGUpO1xuICAgICAgICAgICAgaWYgKChsZW5ndGggKyBpbmRleCkgPiByb3cubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aWxlLnBhcmVudE5vZGUucGFyZW50bm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChjb2x1bW5zLHRpbGUucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCArIGluZGV4KSA+IGNvbHVtbnMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdGF0ZVNoaXAgPSAoaW1hZ2Usb3JpZW50YXRpb24sdW5pdCxsZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBvcmllbnRhdGlvbiA/ICh1bml0Kmxlbmd0aCkrJ3B4JyA6IHVuaXQrJ3B4JztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb3JpZW50YXRpb24gPyB1bml0ICsncHgnOiAodW5pdCpsZW5ndGgpKydweCc7XG4gICAgICAgIGltYWdlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlU2hpcCA9ICh0ZW1wbGF0ZSxtYXJrZXIpID0+IHtcbiAgICAgICAgdGVtcGxhdGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQodGVtcGxhdGUsbWFya2VyLG1hcmtlci5ob3Jpem9udGFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVRlbXBsYXRlID0gKHRpbGUsdGVtcGxhdGUsbWFya2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgbWFya2VyLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKHRpbGUub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUuekluZGV4ID0gMTA7XG4gICAgICAgIHRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4gbW92ZVNoaXAoZS50YXJnZXQuY2xvc2VzdCgnLnBsYWNlaG9sZGVyJyksbWFya2VyKSk7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5yZXBsYWNlV2l0aCh0aWxlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbiA9ICh1bml0LGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0ID0gKGNvb3Jkc1swXSp1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSAoY29vcmRzWzFdKnVuaXQpKydweCc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgdG9wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zdCBob3ZlckltYWdlID0gKGVsZW1lbnQsaW1nKSA9PiB7XG4gICAgLy8gICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKGUpID0+IGUudGFyZ2V0LmFwcGVuZENoaWxkKGltZykpO1xuICAgIC8vICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLChlKSA9PiBlLnRhcmdldC5yZW1vdmVDaGlsZChpbWcpKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBob3ZlckltYWdlID0gKGVsZW1lbnQsaW1nKSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBnZXRUYXJnZXQoZS50YXJnZXQuY2xvc2VzdCgnLnRpbGUnKSk7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uKGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJykub2Zmc2V0V2lkdGgsY29vcmRzKTtcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSBwb3MudG9wO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSBwb3MubGVmdDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd1NoaXBzLFxuICAgICAgICByZW5kZXJDb21wdXRlck1vdmUsXG4gICAgICAgIGVuZEdhbWUsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICByZW5kZXJQbGFjZW1lbnRTY3JlZW4sXG4gICAgICAgIHNoaXBQbGFjZW1lbnQsXG4gICAgICAgIGRyYXdQbGFjZW1lbnRCb2FyZCxcbiAgICAgICAgcGxheWVyT25lXG4gICAgfVxufSkoKTtcblxuY29uc3QgUGxhY2VtZW50Qm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSB7XG4gICAgICAgIGNhcnJpZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBiYXR0bGVzaGlwOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY3J1aXNlcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1hcmluZTp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3llcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZU1hcmtlciA9IChzaGlwLGNvb3Jkcyxob3Jpem9udGFsKSA9PiB7XG4gICAgICAgIHNoaXBzW3NoaXBdLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgc2hpcHNbc2hpcF0uaG9yaXpvbnRhbCA9IGhvcml6b250YWw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gU2hpcChzaGlwKTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAobmV3U2hpcCxzaGlwc1tzaGlwXS5jb29yZHNbMF0sc2hpcHNbc2hpcF0uY29vcmRzWzFdLHNoaXBzW3NoaXBdLmhvcml6b250YWwpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZU1hcmtlcixcbiAgICAgICAgc2V0U2hpcHMsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBnZXQgc2hpcHNOYW1lcygpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzaGlwcyk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIlNoaXAiLCJuYW1lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaGl0Q291bnRlciIsIlNISVBfU0laRVMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJoaXQiLCJpc1N1bmsiLCJfZGVmaW5lQWNjZXNzb3IiLCJwb3NpdGlvbiIsIm9yaWVudGF0aW9uIiwiYXJyYXllZE5hbWUiLCJzcGxpdCIsInRvVXBwZXJDYXNlIiwiam9pbiIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFwcGx5IiwiYmF0dGxlc2hpcEltYWdlIiwiU0hJUF9JTUFHRVMiLCJwbGF5ZXJPbmUiLCJkcmF3QWN0aXZlQm9hcmQiLCJnYW1lYm9hcmQiLCJ6b25lRG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvYXJkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJzaXplIiwiZ2V0TGVuZ3RoIiwicm93Q29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaiIsInRpbGUiLCJzcXVhcmVTdGF0dXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImdldFRhcmdldCIsInRhcmdldCIsImNsb3Nlc3QiLCJvcHBvbmVudCIsIm1ha2VNb3ZlIiwiZHJhd1JlY29uQm9hcmQiLCJkcmF3U2hpcHMiLCJkcmF3SGlkZGVuUmVjb25Cb2FyZCIsImhpZGRlbiIsInRleHRDb250ZW50IiwicmVmcmVzaCIsImN1cnJlbnQiLCJwcmV2aW91cyIsImFjdGl2ZUFyZWEiLCJyZWNvbkFyZWEiLCJpbm5lckhUTUwiLCJpc0NvbXAiLCJpbnN0YW50U2hvd1Jlc3VsdCIsImNvb3Jkc2NlbGwiLCJyZW5kZXJDb21wdXRlck1vdmUiLCJfcmVmIiwiX2NhbGxlZSIsImNvb3JkcyIsImFjdGl2ZVpvbmUiLCJyb3ciLCJjZWxsIiwicmVtb3ZlQXR0YWNrTWFya2VyIiwic3RhbGxOZXh0VHVybiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJwcm9taXNpZnkiLCJyZW1vdmUiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwicmVuZGVyUGxheWVyTW92ZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJzaG93UGxheWVyc1R1cm4iLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzaG93UGxheWVyUmVzdWx0IiwiX3gzIiwiX3g0Iiwic3Vua1NoaXAiLCJzaGlwIiwiY29uc29sZSIsImxvZyIsIl9yZWYzIiwiX2NhbGxlZTMiLCJwbGF5ZXJSZXN1bHRUaW1lciIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImYiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29tcHV0ZXJGaW5pc2hlZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImNhbGxiYWNrIiwidGltZXIiLCJzZXRUaW1lb3V0Iiwib25ib2FyZCIsInNoaXBzIiwiZ2V0U2hpcHMiLCJwbGF5em9uZSIsImRpbWVuc2lvbnMiLCJjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiIsImRyYXdTaGlwIiwic2V0QXR0cmlidXRlIiwiY29uY2F0IiwidG9wIiwibGVmdCIsImhlaWdodCIsInpvbmUiLCJzY2FsZSIsInVuaXQiLCJvZmZzZXRXaWR0aCIsIk1hdGgiLCJmbG9vciIsImJ1dHRvbiIsInBhcmVudCIsInBhcmVudE5vZGUiLCJ5IiwiQXJyYXkiLCJpbmRleE9mIiwieCIsImVuZEdhbWUiLCJkcmF3UGxhY2VtZW50Qm9hcmQiLCJyZW5kZXJQbGFjZW1lbnRTY3JlZW4iLCJwbGFjZW1lbnRCb2FyZCIsIlBsYWNlbWVudEJvYXJkIiwic2hpcEJhciIsInNoaXBzTmFtZXMiLCJidXR0b25UZXh0IiwiU3RyaW5nIiwicmVtb3ZlQ2hpbGQiLCJzaGlwUGxhY2VtZW50IiwibWFya2VyIiwiaG9yaXpvbnRhbCIsInNoaXBUZW1wbGF0ZSIsInRpbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsInRlbXBsYXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyb3RhdGVTaGlwIiwiaXNPdXRPZkJvdW5kcyIsImhvdmVySW1hZ2UiLCJwbGFjZVRlbXBsYXRlIiwiaW5kZXgiLCJjb2x1bW5zIiwicGFyZW50bm9kZSIsImltYWdlIiwid2lkdGgiLCJtb3ZlU2hpcCIsImNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsImVsZW1lbnQiLCJpbWciLCJldmVudCIsInBvcyIsInBsYWNlTWFya2VyIiwic2V0U2hpcHMiLCJuZXdTaGlwIiwicGxhY2VTaGlwIl0sInNvdXJjZVJvb3QiOiIifQ==