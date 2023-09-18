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
  var onNext;
  var moveReady = true;
  var drawMainMenu = function drawMainMenu() {
    var body = document.querySelector('body');
    var menuPan = document.createElement('div');
    var gameTitle = document.createElement('div');
    gameTitle.classList.add('game-title');
    gameTitle.textContent = 'Battleships!';
    menuPan.appendChild(gameTitle);
    body.appendChild(menuPan);
    var buttonBar = document.createElement('div');
    var startSingle = document.createElement('button');
    var startDouble = document.createElement('button');
    buttonBar.appendChild(startSingle, startDouble);
    menuPan.appendChild(buttonBar);
    startSingle.textContent = 'Single Player';
    startDouble.textContent = 'Two Player';
  };
  var drawDefault = function drawDefault() {
    var body = document.querySelector('body');
    var gamearea = document.createElement('div');
    var left = document.createElement('div');
    var right = document.createElement('div');
    var shipbar = document.createElement('div');
    body.appendChild(gamearea, shipbar);
    gamearea.appendChild(left, right);
    gamearea.id = 'gamearea';
    left.id = 'left';
    right.id = 'right';
    shipbar.id = 'shipbar';
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
      var activeZone, row, cell, removeAttackMarker, stallNextTurn;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            moveReady = false;
            activeZone = document.getElementById("left").querySelector('div');
            row = activeZone.children[coords[1]];
            cell = row.children[coords[0]];
            cell.classList.add('attack');
            _context.next = 7;
            return promisify(function () {
              return cell.classList.remove('attack');
            }, 1000);
          case 7:
            removeAttackMarker = _context.sent;
            removeAttackMarker();
            //get result of attack
            cell.classList.add(gameboard.squareStatus(coords[0], coords[1]));
            _context.next = 12;
            return stallComputerMove();
          case 12:
            stallNextTurn = _context.sent;
            stallNextTurn();
          case 14:
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
            moveReady = true;
          case 14:
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
    drawMainMenu: drawMainMenu,
    drawDefault: drawDefault,
    set onNext(nextTurn) {
      onNext = nextTurn;
    }
  };
})());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7SUFDVFUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJpRSxPQUFPLEVBQVBBLE9BQU87SUFDUHBGLFNBQVMsRUFBVEEsU0FBUztJQUNUWSxPQUFPLEVBQVBBLE9BQU87SUFDUGlDLFFBQVEsRUFBUkEsUUFBUTtJQUNSVCxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQnJFLFlBQVksRUFBWkEsWUFBWTtJQUNaYyxXQUFXLEVBQVhBLFdBQVc7SUFDWCxJQUFJaEIsTUFBTUEsQ0FBQ3dILFFBQVEsRUFBRTtNQUNqQnhILE1BQU0sR0FBR3dILFFBQVE7SUFDckI7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU2hpcCA9IChuYW1lID0gbnVsbCkgPT4ge1xuICAgIGxldCBoaXRDb3VudGVyID0gMDtcblxuICAgIGxldCBvcmllbnRhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlID0gKCkgPT4ge1xuICAgICAgICBvcmllbnRhdGlvbiA9ICFvcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBTSElQX1NJWkVTID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChoaXRDb3VudGVyID49IFNISVBfU0laRVNbbmFtZV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uOltdLFxuICAgICAgICBnZXQgb3JpZW50YXRpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb3JpZW50YXRpb24ob3IpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gb3I7XG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheWVkTmFtZSA9IG5hbWUuc3BsaXQoJycpO1xuICAgICAgICAgICAgYXJyYXllZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWVkTmFtZS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBTSElQX1NJWkVTW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gXCIuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IFNISVBfSU1BR0VTID0ge1xuICAgIGJhdHRsZXNoaXA6IGJhdHRsZXNoaXBJbWFnZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgICBsZXQgb25OZXh0O1xuICAgIGxldCBtb3ZlUmVhZHkgPSB0cnVlO1xuXG4gICAgY29uc3QgZHJhd01haW5NZW51ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBtZW51UGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lVGl0bGUuY2xhc3NMaXN0LmFkZCgnZ2FtZS10aXRsZScpO1xuICAgICAgICBnYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcHMhJ1xuICAgICAgICBtZW51UGFuLmFwcGVuZENoaWxkKGdhbWVUaXRsZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudVBhbik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzdGFydFNpbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBzdGFydERvdWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc3RhcnRTaW5nbGUsc3RhcnREb3VibGUpO1xuICAgICAgICBtZW51UGFuLmFwcGVuZENoaWxkKGJ1dHRvbkJhcik7XG4gICAgICAgIHN0YXJ0U2luZ2xlLnRleHRDb250ZW50ID0gJ1NpbmdsZSBQbGF5ZXInO1xuICAgICAgICBzdGFydERvdWJsZS50ZXh0Q29udGVudCA9ICdUd28gUGxheWVyJztcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3RGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzaGlwYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWFyZWEsIHNoaXBiYXIpO1xuICAgICAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChsZWZ0LHJpZ2h0KTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBsZWZ0LmlkID0gJ2xlZnQnO1xuICAgICAgICByaWdodC5pZCA9ICdyaWdodCc7XG4gICAgICAgIHNoaXBiYXIuaWQgPSAnc2hpcGJhcic7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0FjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBnZXRUYXJnZXQoZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykpO1xuICAgICAgICAgICAgICAgIGlmICghbW92ZVJlYWR5KSByZXR1cm47XG4gICAgICAgICAgICAgICAgbW92ZVJlYWR5ID0gZ2FtZWJvYXJkLm9wcG9uZW50Lm1ha2VNb3ZlKHRpbGUsIGdhbWVib2FyZClcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3RHVtbXlBY3RpdmVCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkcmF3U2hpcHMoZ2FtZWJvYXJkLGdhbWVib2FyZC5pZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0hpZGRlblJlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIC8vZHJhdyB0aGUgdGlsZXMgdG8gbWFpbnRhaW4gc2l6ZSBjb25zaXN0ZW5jeVxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaWRkZW4udGV4dENvbnRlbnQgPSBcIkRhdGEgRW5jcnlwdGVkLi4uXCJcbiAgICAgICAgaGlkZGVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1ib2FyZCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChoaWRkZW4pXG4gICAgfVxuXG4gICAgY29uc3QgcmVmcmVzaCA9IChjdXJyZW50LHByZXZpb3VzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBjb25zdCByZWNvbkFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKTtcbiAgICAgICAgYWN0aXZlQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVjb25BcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIWN1cnJlbnQuaXNDb21wKSB7XG4gICAgICAgICAgICBkcmF3QWN0aXZlQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdSZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdEdW1teUFjdGl2ZUJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3SGlkZGVuUmVjb25Cb2FyZChjdXJyZW50LmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3U2hpcHMocHJldmlvdXMuZ2FtZWJvYXJkLHByZXZpb3VzLmdhbWVib2FyZC5pZClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJDb21wdXRlck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBtb3ZlUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHN0YWxsTmV4dFR1cm4gPSBhd2FpdCBzdGFsbENvbXB1dGVyTW92ZSgpO1xuICAgICAgICBzdGFsbE5leHRUdXJuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxheWVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzaG93UGxheWVyc1R1cm4gPSBhd2FpdCBzaG93UGxheWVyUmVzdWx0KCk7XG4gICAgICAgIHNob3dQbGF5ZXJzVHVybigpO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN1bmtTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc2hpcC5uYW1lLCAnIGlzIGEgZ29uZXInKVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dQbGF5ZXJSZXN1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllclJlc3VsdFRpbWVyID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJSZXN1bHRUaW1lclxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFsbENvbXB1dGVyTW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaW5pc2hlZCA9IGF3YWl0IHByb21pc2lmeShvbk5leHQsIDIwMDApO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gY29tcHV0ZXJGaW5pc2hlZFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9taXNpZnkgPSAoY2FsbGJhY2ssdGltZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGNhbGxiYWNrKSwgdGltZXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkLG9uYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBnYW1lYm9hcmQuZ2V0U2hpcHMoKTtcbiAgICAgICAgY29uc3QgcGxheXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmJvYXJkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uKHBsYXl6b25lLCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCksIHNoaXApXG4gICAgICAgICAgICBwbGF5em9uZS5hcHBlbmRDaGlsZChkcmF3U2hpcChkaW1lbnNpb25zKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1NoaXAgPSAoZGltZW5zaW9ucykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcC1tYXJrZXInKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxgdG9wOiR7ZGltZW5zaW9ucy50b3B9O2xlZnQ6JHtkaW1lbnNpb25zLmxlZnR9O3dpZHRoOiR7ZGltZW5zaW9ucy5sZW5ndGh9O2hlaWdodDoke2RpbWVuc2lvbnMuaGVpZ2h0fWApO1xuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uID0gKHpvbmUsIHNjYWxlICxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB6b25lLm9mZnNldFdpZHRoIC8gc2NhbGU7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMF0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMV0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLm9yaWVudGF0aW9uID8gc2hpcC5sZW5ndGggKiB1bml0IDogdW5pdCA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0IDogc2hpcC5sZW5ndGggKiB1bml0IDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICBsZW5ndGg6bGVuZ3RoKydweCcsXG4gICAgICAgICAgICBoZWlnaHQ6aGVpZ2h0KydweCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhcmdldCA9IChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIC8vIEZpbmQgdGhlIGNvb3JkaW5hdGVzIHRocm91Z2ggdGhlIGVsZW1lbnRzIHBvc2l0aW9uIGFtb25nc3QgaXRzIHNpYmxpbmdzXG4gICAgICAgIGNvbnN0IHkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJvYXJkLmNoaWxkcmVuLHBhcmVudCk7XG4gICAgICAgIGNvbnN0IHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbix0YXJnZXQpO1xuICAgICAgICByZXR1cm4gW3gseV1cbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJylcbiAgICB9XG5cblxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXdTaGlwcyxcbiAgICAgICAgcmVuZGVyQ29tcHV0ZXJNb3ZlLFxuICAgICAgICBlbmRHYW1lLFxuICAgICAgICBnZXRUYXJnZXQsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICBkcmF3TWFpbk1lbnUsXG4gICAgICAgIGRyYXdEZWZhdWx0LFxuICAgICAgICBzZXQgb25OZXh0KG5leHRUdXJuKSB7XG4gICAgICAgICAgICBvbk5leHQgPSBuZXh0VHVybjtcbiAgICAgICAgfSxcbiAgICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbIlNoaXAiLCJuYW1lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaGl0Q291bnRlciIsIm9yaWVudGF0aW9uIiwicm90YXRlIiwiU0hJUF9TSVpFUyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImhpdCIsImlzU3VuayIsInBvc2l0aW9uIiwib3IiLCJhcnJheWVkTmFtZSIsInNwbGl0IiwidG9VcHBlckNhc2UiLCJqb2luIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXBwbHkiLCJiYXR0bGVzaGlwSW1hZ2UiLCJTSElQX0lNQUdFUyIsIm9uTmV4dCIsIm1vdmVSZWFkeSIsImRyYXdNYWluTWVudSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51UGFuIiwiY3JlYXRlRWxlbWVudCIsImdhbWVUaXRsZSIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJidXR0b25CYXIiLCJzdGFydFNpbmdsZSIsInN0YXJ0RG91YmxlIiwiZHJhd0RlZmF1bHQiLCJnYW1lYXJlYSIsImxlZnQiLCJyaWdodCIsInNoaXBiYXIiLCJpZCIsImRyYXdBY3RpdmVCb2FyZCIsImdhbWVib2FyZCIsInpvbmVEb20iLCJnZXRFbGVtZW50QnlJZCIsImJvYXJkIiwic2l6ZSIsImdldExlbmd0aCIsInJvd0NvbnRhaW5lciIsImoiLCJ0aWxlIiwic3F1YXJlU3RhdHVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib3Bwb25lbnQiLCJtYWtlTW92ZSIsImNvbnNvbGUiLCJsb2ciLCJkcmF3RHVtbXlBY3RpdmVCb2FyZCIsImRyYXdSZWNvbkJvYXJkIiwiZHJhd1NoaXBzIiwiZHJhd0hpZGRlblJlY29uQm9hcmQiLCJoaWRkZW4iLCJyZWZyZXNoIiwiY3VycmVudCIsInByZXZpb3VzIiwiYWN0aXZlQXJlYSIsInJlY29uQXJlYSIsImlubmVySFRNTCIsImlzQ29tcCIsInJlbmRlckNvbXB1dGVyTW92ZSIsIl9yZWYiLCJfY2FsbGVlIiwiY29vcmRzIiwiYWN0aXZlWm9uZSIsInJvdyIsImNlbGwiLCJyZW1vdmVBdHRhY2tNYXJrZXIiLCJzdGFsbE5leHRUdXJuIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNoaWxkcmVuIiwicHJvbWlzaWZ5IiwicmVtb3ZlIiwic3RhbGxDb21wdXRlck1vdmUiLCJfeCIsIl94MiIsInJlbmRlclBsYXllck1vdmUiLCJfcmVmMiIsIl9jYWxsZWUyIiwic2hvd1BsYXllcnNUdXJuIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic2hvd1BsYXllclJlc3VsdCIsIl94MyIsIl94NCIsInN1bmtTaGlwIiwic2hpcCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJwbGF5ZXJSZXN1bHRUaW1lciIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl9yZWY0IiwiX2NhbGxlZTQiLCJjb21wdXRlckZpbmlzaGVkIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiY2FsbGJhY2siLCJ0aW1lciIsInNldFRpbWVvdXQiLCJvbmJvYXJkIiwic2hpcHMiLCJnZXRTaGlwcyIsInBsYXl6b25lIiwiZGltZW5zaW9ucyIsImNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uIiwiZHJhd1NoaXAiLCJzZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJ0b3AiLCJoZWlnaHQiLCJ6b25lIiwic2NhbGUiLCJ1bml0Iiwib2Zmc2V0V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJidXR0b24iLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwieSIsIkFycmF5IiwiaW5kZXhPZiIsIngiLCJlbmRHYW1lIiwibmV4dFR1cm4iXSwic291cmNlUm9vdCI6IiJ9