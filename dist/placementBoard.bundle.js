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
/*!***************************************!*\
  !*** ./src/modules/placementBoard.js ***!
  \***************************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VtZW50Qm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMsT0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLGNBQUEsR0FBQUYsT0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxtQkFBQSxHQUFBSixPQUFBLENBQUFLLGFBQUEsdUJBQUFDLGlCQUFBLEdBQUFOLE9BQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQVIsTUFBQSxDQUFBSSxjQUFBLENBQUFDLEdBQUEsRUFBQUMsR0FBQSxJQUFBRSxLQUFBLEVBQUFBLEtBQUEsRUFBQVUsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQWYsR0FBQSxDQUFBQyxHQUFBLFdBQUFXLE1BQUEsbUJBQUFJLEdBQUEsSUFBQUosTUFBQSxZQUFBQSxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBSCxHQUFBLENBQUFDLEdBQUEsSUFBQUUsS0FBQSxnQkFBQWMsS0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxRQUFBQyxjQUFBLEdBQUFILE9BQUEsSUFBQUEsT0FBQSxDQUFBdkIsU0FBQSxZQUFBMkIsU0FBQSxHQUFBSixPQUFBLEdBQUFJLFNBQUEsRUFBQUMsU0FBQSxHQUFBN0IsTUFBQSxDQUFBOEIsTUFBQSxDQUFBSCxjQUFBLENBQUExQixTQUFBLEdBQUE4QixPQUFBLE9BQUFDLE9BQUEsQ0FBQU4sV0FBQSxnQkFBQXRCLGNBQUEsQ0FBQXlCLFNBQUEsZUFBQXJCLEtBQUEsRUFBQXlCLGdCQUFBLENBQUFWLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLE1BQUFGLFNBQUEsYUFBQUssU0FBQUMsRUFBQSxFQUFBOUIsR0FBQSxFQUFBK0IsR0FBQSxtQkFBQUMsSUFBQSxZQUFBRCxHQUFBLEVBQUFELEVBQUEsQ0FBQUcsSUFBQSxDQUFBakMsR0FBQSxFQUFBK0IsR0FBQSxjQUFBZixHQUFBLGFBQUFnQixJQUFBLFdBQUFELEdBQUEsRUFBQWYsR0FBQSxRQUFBdkIsT0FBQSxDQUFBd0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFpQixnQkFBQSxnQkFBQVgsVUFBQSxjQUFBWSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxpQkFBQSxPQUFBekIsTUFBQSxDQUFBeUIsaUJBQUEsRUFBQS9CLGNBQUEscUNBQUFnQyxRQUFBLEdBQUEzQyxNQUFBLENBQUE0QyxjQUFBLEVBQUFDLHVCQUFBLEdBQUFGLFFBQUEsSUFBQUEsUUFBQSxDQUFBQSxRQUFBLENBQUFHLE1BQUEsUUFBQUQsdUJBQUEsSUFBQUEsdUJBQUEsS0FBQTlDLEVBQUEsSUFBQUcsTUFBQSxDQUFBb0MsSUFBQSxDQUFBTyx1QkFBQSxFQUFBbEMsY0FBQSxNQUFBK0IsaUJBQUEsR0FBQUcsdUJBQUEsT0FBQUUsRUFBQSxHQUFBTiwwQkFBQSxDQUFBeEMsU0FBQSxHQUFBMkIsU0FBQSxDQUFBM0IsU0FBQSxHQUFBRCxNQUFBLENBQUE4QixNQUFBLENBQUFZLGlCQUFBLFlBQUFNLHNCQUFBL0MsU0FBQSxnQ0FBQWdELE9BQUEsV0FBQUMsTUFBQSxJQUFBakMsTUFBQSxDQUFBaEIsU0FBQSxFQUFBaUQsTUFBQSxZQUFBZCxHQUFBLGdCQUFBZSxPQUFBLENBQUFELE1BQUEsRUFBQWQsR0FBQSxzQkFBQWdCLGNBQUF2QixTQUFBLEVBQUF3QixXQUFBLGFBQUFDLE9BQUFKLE1BQUEsRUFBQWQsR0FBQSxFQUFBbUIsT0FBQSxFQUFBQyxNQUFBLFFBQUFDLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQUwsU0FBQSxDQUFBcUIsTUFBQSxHQUFBckIsU0FBQSxFQUFBTyxHQUFBLG1CQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBcUIsTUFBQSxHQUFBRCxNQUFBLENBQUFyQixHQUFBLEVBQUE1QixLQUFBLEdBQUFrRCxNQUFBLENBQUFsRCxLQUFBLFNBQUFBLEtBQUEsZ0JBQUFtRCxPQUFBLENBQUFuRCxLQUFBLEtBQUFOLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTlCLEtBQUEsZUFBQTZDLFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxDQUFBb0QsT0FBQSxFQUFBQyxJQUFBLFdBQUFyRCxLQUFBLElBQUE4QyxNQUFBLFNBQUE5QyxLQUFBLEVBQUErQyxPQUFBLEVBQUFDLE1BQUEsZ0JBQUFuQyxHQUFBLElBQUFpQyxNQUFBLFVBQUFqQyxHQUFBLEVBQUFrQyxPQUFBLEVBQUFDLE1BQUEsUUFBQUgsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLEVBQUFxRCxJQUFBLFdBQUFDLFNBQUEsSUFBQUosTUFBQSxDQUFBbEQsS0FBQSxHQUFBc0QsU0FBQSxFQUFBUCxPQUFBLENBQUFHLE1BQUEsZ0JBQUFLLEtBQUEsV0FBQVQsTUFBQSxVQUFBUyxLQUFBLEVBQUFSLE9BQUEsRUFBQUMsTUFBQSxTQUFBQSxNQUFBLENBQUFDLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTRCLGVBQUEsRUFBQTVELGNBQUEsb0JBQUFJLEtBQUEsV0FBQUEsTUFBQTBDLE1BQUEsRUFBQWQsR0FBQSxhQUFBNkIsMkJBQUEsZUFBQVosV0FBQSxXQUFBRSxPQUFBLEVBQUFDLE1BQUEsSUFBQUYsTUFBQSxDQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxnQkFBQVEsZUFBQSxHQUFBQSxlQUFBLEdBQUFBLGVBQUEsQ0FBQUgsSUFBQSxDQUFBSSwwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQWhDLGlCQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxRQUFBbUMsS0FBQSxzQ0FBQWhCLE1BQUEsRUFBQWQsR0FBQSx3QkFBQThCLEtBQUEsWUFBQUMsS0FBQSxzREFBQUQsS0FBQSxvQkFBQWhCLE1BQUEsUUFBQWQsR0FBQSxTQUFBZ0MsVUFBQSxXQUFBckMsT0FBQSxDQUFBbUIsTUFBQSxHQUFBQSxNQUFBLEVBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQUEsR0FBQSxVQUFBaUMsUUFBQSxHQUFBdEMsT0FBQSxDQUFBc0MsUUFBQSxNQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUMsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxPQUFBdUMsY0FBQSxRQUFBQSxjQUFBLEtBQUEvQixnQkFBQSxtQkFBQStCLGNBQUEscUJBQUF2QyxPQUFBLENBQUFtQixNQUFBLEVBQUFuQixPQUFBLENBQUF5QyxJQUFBLEdBQUF6QyxPQUFBLENBQUEwQyxLQUFBLEdBQUExQyxPQUFBLENBQUFLLEdBQUEsc0JBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsNkJBQUFnQixLQUFBLFFBQUFBLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFLLEdBQUEsRUFBQUwsT0FBQSxDQUFBMkMsaUJBQUEsQ0FBQTNDLE9BQUEsQ0FBQUssR0FBQSx1QkFBQUwsT0FBQSxDQUFBbUIsTUFBQSxJQUFBbkIsT0FBQSxDQUFBNEMsTUFBQSxXQUFBNUMsT0FBQSxDQUFBSyxHQUFBLEdBQUE4QixLQUFBLG9CQUFBVCxNQUFBLEdBQUF2QixRQUFBLENBQUFYLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLG9CQUFBMEIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNkIsS0FBQSxHQUFBbkMsT0FBQSxDQUFBNkMsSUFBQSxtQ0FBQW5CLE1BQUEsQ0FBQXJCLEdBQUEsS0FBQUcsZ0JBQUEscUJBQUEvQixLQUFBLEVBQUFpRCxNQUFBLENBQUFyQixHQUFBLEVBQUF3QyxJQUFBLEVBQUE3QyxPQUFBLENBQUE2QyxJQUFBLGtCQUFBbkIsTUFBQSxDQUFBcEIsSUFBQSxLQUFBNkIsS0FBQSxnQkFBQW5DLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxtQkFBQW1DLG9CQUFBRixRQUFBLEVBQUF0QyxPQUFBLFFBQUE4QyxVQUFBLEdBQUE5QyxPQUFBLENBQUFtQixNQUFBLEVBQUFBLE1BQUEsR0FBQW1CLFFBQUEsQ0FBQXpELFFBQUEsQ0FBQWlFLFVBQUEsT0FBQUMsU0FBQSxLQUFBNUIsTUFBQSxTQUFBbkIsT0FBQSxDQUFBc0MsUUFBQSxxQkFBQVEsVUFBQSxJQUFBUixRQUFBLENBQUF6RCxRQUFBLGVBQUFtQixPQUFBLENBQUFtQixNQUFBLGFBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsRUFBQVAsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBdEMsT0FBQSxlQUFBQSxPQUFBLENBQUFtQixNQUFBLGtCQUFBMkIsVUFBQSxLQUFBOUMsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEyQyxTQUFBLHVDQUFBRixVQUFBLGlCQUFBdEMsZ0JBQUEsTUFBQWtCLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQWdCLE1BQUEsRUFBQW1CLFFBQUEsQ0FBQXpELFFBQUEsRUFBQW1CLE9BQUEsQ0FBQUssR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQU4sT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLEVBQUFMLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLE1BQUF5QyxJQUFBLEdBQUF2QixNQUFBLENBQUFyQixHQUFBLFNBQUE0QyxJQUFBLEdBQUFBLElBQUEsQ0FBQUosSUFBQSxJQUFBN0MsT0FBQSxDQUFBc0MsUUFBQSxDQUFBWSxVQUFBLElBQUFELElBQUEsQ0FBQXhFLEtBQUEsRUFBQXVCLE9BQUEsQ0FBQW1ELElBQUEsR0FBQWIsUUFBQSxDQUFBYyxPQUFBLGVBQUFwRCxPQUFBLENBQUFtQixNQUFBLEtBQUFuQixPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsR0FBQS9DLE9BQUEsQ0FBQXNDLFFBQUEsU0FBQTlCLGdCQUFBLElBQUF5QyxJQUFBLElBQUFqRCxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTJDLFNBQUEsc0NBQUFoRCxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxjQUFBNkMsYUFBQUMsSUFBQSxRQUFBQyxLQUFBLEtBQUFDLE1BQUEsRUFBQUYsSUFBQSxZQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUUsUUFBQSxHQUFBSCxJQUFBLFdBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRyxVQUFBLEdBQUFKLElBQUEsS0FBQUMsS0FBQSxDQUFBSSxRQUFBLEdBQUFMLElBQUEsV0FBQU0sVUFBQSxDQUFBQyxJQUFBLENBQUFOLEtBQUEsY0FBQU8sY0FBQVAsS0FBQSxRQUFBN0IsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLFFBQUFyQyxNQUFBLENBQUFwQixJQUFBLG9CQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxFQUFBa0QsS0FBQSxDQUFBUSxVQUFBLEdBQUFyQyxNQUFBLGFBQUF6QixRQUFBTixXQUFBLFNBQUFpRSxVQUFBLE1BQUFKLE1BQUEsYUFBQTdELFdBQUEsQ0FBQXVCLE9BQUEsQ0FBQW1DLFlBQUEsY0FBQVcsS0FBQSxpQkFBQWpELE9BQUFrRCxRQUFBLFFBQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBRCxRQUFBLENBQUFyRixjQUFBLE9BQUFzRixjQUFBLFNBQUFBLGNBQUEsQ0FBQTNELElBQUEsQ0FBQTBELFFBQUEsNEJBQUFBLFFBQUEsQ0FBQWQsSUFBQSxTQUFBYyxRQUFBLE9BQUFFLEtBQUEsQ0FBQUYsUUFBQSxDQUFBRyxNQUFBLFNBQUFDLENBQUEsT0FBQWxCLElBQUEsWUFBQUEsS0FBQSxhQUFBa0IsQ0FBQSxHQUFBSixRQUFBLENBQUFHLE1BQUEsT0FBQWpHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTBELFFBQUEsRUFBQUksQ0FBQSxVQUFBbEIsSUFBQSxDQUFBMUUsS0FBQSxHQUFBd0YsUUFBQSxDQUFBSSxDQUFBLEdBQUFsQixJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxTQUFBQSxJQUFBLENBQUExRSxLQUFBLEdBQUFzRSxTQUFBLEVBQUFJLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFlBQUFBLElBQUEsQ0FBQUEsSUFBQSxHQUFBQSxJQUFBLGVBQUFBLElBQUEsRUFBQWQsVUFBQSxlQUFBQSxXQUFBLGFBQUE1RCxLQUFBLEVBQUFzRSxTQUFBLEVBQUFGLElBQUEsaUJBQUFwQyxpQkFBQSxDQUFBdkMsU0FBQSxHQUFBd0MsMEJBQUEsRUFBQXJDLGNBQUEsQ0FBQTJDLEVBQUEsbUJBQUF2QyxLQUFBLEVBQUFpQywwQkFBQSxFQUFBdEIsWUFBQSxTQUFBZixjQUFBLENBQUFxQywwQkFBQSxtQkFBQWpDLEtBQUEsRUFBQWdDLGlCQUFBLEVBQUFyQixZQUFBLFNBQUFxQixpQkFBQSxDQUFBNkQsV0FBQSxHQUFBcEYsTUFBQSxDQUFBd0IsMEJBQUEsRUFBQTFCLGlCQUFBLHdCQUFBakIsT0FBQSxDQUFBd0csbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQUUsV0FBQSxXQUFBRCxJQUFBLEtBQUFBLElBQUEsS0FBQWhFLGlCQUFBLDZCQUFBZ0UsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQUUsSUFBQSxPQUFBNUcsT0FBQSxDQUFBNkcsSUFBQSxhQUFBSixNQUFBLFdBQUF2RyxNQUFBLENBQUE0RyxjQUFBLEdBQUE1RyxNQUFBLENBQUE0RyxjQUFBLENBQUFMLE1BQUEsRUFBQTlELDBCQUFBLEtBQUE4RCxNQUFBLENBQUFNLFNBQUEsR0FBQXBFLDBCQUFBLEVBQUF4QixNQUFBLENBQUFzRixNQUFBLEVBQUF4RixpQkFBQSx5QkFBQXdGLE1BQUEsQ0FBQXRHLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBaUIsRUFBQSxHQUFBd0QsTUFBQSxLQUFBekcsT0FBQSxDQUFBZ0gsS0FBQSxhQUFBMUUsR0FBQSxhQUFBd0IsT0FBQSxFQUFBeEIsR0FBQSxPQUFBWSxxQkFBQSxDQUFBSSxhQUFBLENBQUFuRCxTQUFBLEdBQUFnQixNQUFBLENBQUFtQyxhQUFBLENBQUFuRCxTQUFBLEVBQUFZLG1CQUFBLGlDQUFBZixPQUFBLENBQUFzRCxhQUFBLEdBQUFBLGFBQUEsRUFBQXRELE9BQUEsQ0FBQWlILEtBQUEsYUFBQXhGLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQTJCLFdBQUEsZUFBQUEsV0FBQSxLQUFBQSxXQUFBLEdBQUEyRCxPQUFBLE9BQUFDLElBQUEsT0FBQTdELGFBQUEsQ0FBQTlCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBMkIsV0FBQSxVQUFBdkQsT0FBQSxDQUFBd0csbUJBQUEsQ0FBQTlFLE9BQUEsSUFBQXlGLElBQUEsR0FBQUEsSUFBQSxDQUFBL0IsSUFBQSxHQUFBckIsSUFBQSxXQUFBSCxNQUFBLFdBQUFBLE1BQUEsQ0FBQWtCLElBQUEsR0FBQWxCLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXlHLElBQUEsQ0FBQS9CLElBQUEsV0FBQWxDLHFCQUFBLENBQUFELEVBQUEsR0FBQTlCLE1BQUEsQ0FBQThCLEVBQUEsRUFBQWhDLGlCQUFBLGdCQUFBRSxNQUFBLENBQUE4QixFQUFBLEVBQUFwQyxjQUFBLGlDQUFBTSxNQUFBLENBQUE4QixFQUFBLDZEQUFBakQsT0FBQSxDQUFBb0gsSUFBQSxhQUFBQyxHQUFBLFFBQUFDLE1BQUEsR0FBQXBILE1BQUEsQ0FBQW1ILEdBQUEsR0FBQUQsSUFBQSxnQkFBQTVHLEdBQUEsSUFBQThHLE1BQUEsRUFBQUYsSUFBQSxDQUFBdEIsSUFBQSxDQUFBdEYsR0FBQSxVQUFBNEcsSUFBQSxDQUFBRyxPQUFBLGFBQUFuQyxLQUFBLFdBQUFnQyxJQUFBLENBQUFmLE1BQUEsU0FBQTdGLEdBQUEsR0FBQTRHLElBQUEsQ0FBQUksR0FBQSxRQUFBaEgsR0FBQSxJQUFBOEcsTUFBQSxTQUFBbEMsSUFBQSxDQUFBMUUsS0FBQSxHQUFBRixHQUFBLEVBQUE0RSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxXQUFBQSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxRQUFBcEYsT0FBQSxDQUFBZ0QsTUFBQSxHQUFBQSxNQUFBLEVBQUFkLE9BQUEsQ0FBQS9CLFNBQUEsS0FBQXdHLFdBQUEsRUFBQXpFLE9BQUEsRUFBQStELEtBQUEsV0FBQUEsTUFBQXdCLGFBQUEsYUFBQUMsSUFBQSxXQUFBdEMsSUFBQSxXQUFBVixJQUFBLFFBQUFDLEtBQUEsR0FBQUssU0FBQSxPQUFBRixJQUFBLFlBQUFQLFFBQUEsY0FBQW5CLE1BQUEsZ0JBQUFkLEdBQUEsR0FBQTBDLFNBQUEsT0FBQWEsVUFBQSxDQUFBMUMsT0FBQSxDQUFBNEMsYUFBQSxJQUFBMEIsYUFBQSxXQUFBYixJQUFBLGtCQUFBQSxJQUFBLENBQUFlLE1BQUEsT0FBQXZILE1BQUEsQ0FBQW9DLElBQUEsT0FBQW9FLElBQUEsTUFBQVIsS0FBQSxFQUFBUSxJQUFBLENBQUFnQixLQUFBLGNBQUFoQixJQUFBLElBQUE1QixTQUFBLE1BQUE2QyxJQUFBLFdBQUFBLEtBQUEsU0FBQS9DLElBQUEsV0FBQWdELFVBQUEsUUFBQWpDLFVBQUEsSUFBQUcsVUFBQSxrQkFBQThCLFVBQUEsQ0FBQXZGLElBQUEsUUFBQXVGLFVBQUEsQ0FBQXhGLEdBQUEsY0FBQXlGLElBQUEsS0FBQW5ELGlCQUFBLFdBQUFBLGtCQUFBb0QsU0FBQSxhQUFBbEQsSUFBQSxRQUFBa0QsU0FBQSxNQUFBL0YsT0FBQSxrQkFBQWdHLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBeEUsTUFBQSxDQUFBcEIsSUFBQSxZQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBMEYsU0FBQSxFQUFBL0YsT0FBQSxDQUFBbUQsSUFBQSxHQUFBOEMsR0FBQSxFQUFBQyxNQUFBLEtBQUFsRyxPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQTBDLFNBQUEsS0FBQW1ELE1BQUEsYUFBQTdCLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxHQUFBM0MsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGlCQUFBUixLQUFBLENBQUFDLE1BQUEsU0FBQXdDLE1BQUEsYUFBQXpDLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxRQUFBVSxRQUFBLEdBQUFoSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLGVBQUE2QyxVQUFBLEdBQUFqSSxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHFCQUFBNEMsUUFBQSxJQUFBQyxVQUFBLGFBQUFYLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLGdCQUFBZ0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsY0FBQXlDLFFBQUEsYUFBQVYsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEscUJBQUEyQyxVQUFBLFlBQUFoRSxLQUFBLHFEQUFBcUQsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsWUFBQWQsTUFBQSxXQUFBQSxPQUFBdEMsSUFBQSxFQUFBRCxHQUFBLGFBQUFnRSxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLElBQUF0SCxNQUFBLENBQUFvQyxJQUFBLENBQUFnRCxLQUFBLHdCQUFBa0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFFBQUEyQyxZQUFBLEdBQUE5QyxLQUFBLGFBQUE4QyxZQUFBLGlCQUFBL0YsSUFBQSxtQkFBQUEsSUFBQSxLQUFBK0YsWUFBQSxDQUFBN0MsTUFBQSxJQUFBbkQsR0FBQSxJQUFBQSxHQUFBLElBQUFnRyxZQUFBLENBQUEzQyxVQUFBLEtBQUEyQyxZQUFBLGNBQUEzRSxNQUFBLEdBQUEyRSxZQUFBLEdBQUFBLFlBQUEsQ0FBQXRDLFVBQUEsY0FBQXJDLE1BQUEsQ0FBQXBCLElBQUEsR0FBQUEsSUFBQSxFQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBQSxHQUFBLEVBQUFnRyxZQUFBLFNBQUFsRixNQUFBLGdCQUFBZ0MsSUFBQSxHQUFBa0QsWUFBQSxDQUFBM0MsVUFBQSxFQUFBbEQsZ0JBQUEsU0FBQThGLFFBQUEsQ0FBQTVFLE1BQUEsTUFBQTRFLFFBQUEsV0FBQUEsU0FBQTVFLE1BQUEsRUFBQWlDLFFBQUEsb0JBQUFqQyxNQUFBLENBQUFwQixJQUFBLFFBQUFvQixNQUFBLENBQUFyQixHQUFBLHFCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxtQkFBQW9CLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZDLElBQUEsR0FBQXpCLE1BQUEsQ0FBQXJCLEdBQUEsZ0JBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUF3RixJQUFBLFFBQUF6RixHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLE9BQUFjLE1BQUEsa0JBQUFnQyxJQUFBLHlCQUFBekIsTUFBQSxDQUFBcEIsSUFBQSxJQUFBcUQsUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQW5ELGdCQUFBLEtBQUErRixNQUFBLFdBQUFBLE9BQUE3QyxVQUFBLGFBQUFXLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBNEMsUUFBQSxDQUFBL0MsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQS9DLGdCQUFBLHlCQUFBZ0csT0FBQWhELE1BQUEsYUFBQWEsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE5QixNQUFBLEdBQUE2QixLQUFBLENBQUFRLFVBQUEsa0JBQUFyQyxNQUFBLENBQUFwQixJQUFBLFFBQUFtRyxNQUFBLEdBQUEvRSxNQUFBLENBQUFyQixHQUFBLEVBQUF5RCxhQUFBLENBQUFQLEtBQUEsWUFBQWtELE1BQUEsZ0JBQUFyRSxLQUFBLDhCQUFBc0UsYUFBQSxXQUFBQSxjQUFBekMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUFkLFFBQUEsS0FBQXpELFFBQUEsRUFBQWtDLE1BQUEsQ0FBQWtELFFBQUEsR0FBQWYsVUFBQSxFQUFBQSxVQUFBLEVBQUFFLE9BQUEsRUFBQUEsT0FBQSxvQkFBQWpDLE1BQUEsVUFBQWQsR0FBQSxHQUFBMEMsU0FBQSxHQUFBdkMsZ0JBQUEsT0FBQXpDLE9BQUE7QUFBQSxTQUFBNEksbUJBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLEVBQUF2SSxHQUFBLEVBQUE4QixHQUFBLGNBQUE0QyxJQUFBLEdBQUEyRCxHQUFBLENBQUFySSxHQUFBLEVBQUE4QixHQUFBLE9BQUE1QixLQUFBLEdBQUF3RSxJQUFBLENBQUF4RSxLQUFBLFdBQUF1RCxLQUFBLElBQUFQLE1BQUEsQ0FBQU8sS0FBQSxpQkFBQWlCLElBQUEsQ0FBQUosSUFBQSxJQUFBckIsT0FBQSxDQUFBL0MsS0FBQSxZQUFBd0csT0FBQSxDQUFBekQsT0FBQSxDQUFBL0MsS0FBQSxFQUFBcUQsSUFBQSxDQUFBK0UsS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUMsa0JBQUEzRyxFQUFBLDZCQUFBVixJQUFBLFNBQUFzSCxJQUFBLEdBQUFDLFNBQUEsYUFBQWhDLE9BQUEsV0FBQXpELE9BQUEsRUFBQUMsTUFBQSxRQUFBbUYsR0FBQSxHQUFBeEcsRUFBQSxDQUFBOEcsS0FBQSxDQUFBeEgsSUFBQSxFQUFBc0gsSUFBQSxZQUFBSCxNQUFBcEksS0FBQSxJQUFBa0ksa0JBQUEsQ0FBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsVUFBQXJJLEtBQUEsY0FBQXFJLE9BQUF4SCxHQUFBLElBQUFxSCxrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxXQUFBeEgsR0FBQSxLQUFBdUgsS0FBQSxDQUFBOUQsU0FBQTtBQURpQztBQUNzQjtBQUVoRCxJQUFNc0UsV0FBVyxHQUFHO0VBQ3ZCQyxVQUFVLEVBQUVGLG1EQUFlQTtBQUMvQixDQUFDO0FBRUQsaUVBQWUsQ0FBQyxZQUFNO0VBQ2xCLElBQUlHLE1BQU07RUFDVixJQUFJQyxLQUFLO0VBQ1QsSUFBSUMsU0FBUyxHQUFHLElBQUk7RUFFcEIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBSztJQUN6RCxJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMzQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM3Q0QsT0FBTyxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7SUFDbEMsSUFBTUMsU0FBUyxHQUFHUCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0NHLFNBQVMsQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3JDQyxTQUFTLENBQUNDLFdBQVcsR0FBRyxjQUFjO0lBQ3RDTCxPQUFPLENBQUNNLFdBQVcsQ0FBQ0YsU0FBUyxDQUFDO0lBQzlCUixJQUFJLENBQUNVLFdBQVcsQ0FBQ04sT0FBTyxDQUFDO0lBQ3pCLElBQU1PLFNBQVMsR0FBR1YsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9DTSxTQUFTLENBQUNMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUNyQyxJQUFNSyxXQUFXLEdBQUdYLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNwRE8sV0FBVyxDQUFDTixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDeEMsSUFBTU0sV0FBVyxHQUFHWixRQUFRLENBQUNJLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDcERRLFdBQVcsQ0FBQ1AsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ3hDSSxTQUFTLENBQUNELFdBQVcsQ0FBQ0UsV0FBVyxDQUFDO0lBQ2xDRCxTQUFTLENBQUNELFdBQVcsQ0FBQ0csV0FBVyxDQUFDO0lBQ2xDVCxPQUFPLENBQUNNLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDO0lBQzlCQyxXQUFXLENBQUNILFdBQVcsR0FBRyxlQUFlO0lBQ3pDSSxXQUFXLENBQUNKLFdBQVcsR0FBRyxZQUFZO0lBQ3RDRyxXQUFXLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBQztNQUFBLE9BQU1DLE9BQU8sQ0FBQ2pCLGdCQUFnQixDQUFDO0lBQUEsRUFBQztJQUNyRWUsV0FBVyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsWUFBTTtNQUN2Q0MsT0FBTyxDQUFDLFVBQUNqRSxJQUFJLEVBQUs7UUFDZGlFLE9BQU8sQ0FBQyxVQUFDQyxVQUFVLEVBQUs7VUFDcEJqQixnQkFBZ0IsQ0FBQ2pELElBQUksRUFBQ2tFLFVBQVUsQ0FBQztRQUNyQyxDQUFDLEVBQUUsS0FBSyxDQUFDO01BQ2IsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1ELE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJRSxFQUFFLEVBQXFCO0lBQUEsSUFBbkJDLE1BQU0sR0FBQTlCLFNBQUEsQ0FBQTdDLE1BQUEsUUFBQTZDLFNBQUEsUUFBQWxFLFNBQUEsR0FBQWtFLFNBQUEsTUFBRyxLQUFLO0lBQy9CK0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzNCLElBQU1DLFVBQVUsR0FBR3BCLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNuRGdCLFVBQVUsQ0FBQ2YsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ3BDLElBQU1QLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzNDRixJQUFJLENBQUNVLFdBQVcsQ0FBQ1csVUFBVSxDQUFDO0lBQzVCQSxVQUFVLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLElBQU1DLFFBQVEsR0FBR3RCLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMvQyxJQUFNbUIsU0FBUyxHQUFHdkIsUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2pEbUIsU0FBUyxDQUFDQyxZQUFZLENBQUMsS0FBSyxFQUFDLFlBQVksQ0FBQztJQUMxQ0QsU0FBUyxDQUFDZixXQUFXLGNBQUFpQixNQUFBLENBQWNSLE1BQU0sWUFBUztJQUNsRCxJQUFNUyxTQUFTLEdBQUcxQixRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDakRzQixTQUFTLENBQUNDLEVBQUUsR0FBRyxZQUFZO0lBQzNCLElBQU1DLFVBQVUsR0FBRzVCLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNuRHdCLFVBQVUsQ0FBQ3BCLFdBQVcsR0FBRyxRQUFRO0lBQ2pDWSxVQUFVLENBQUNYLFdBQVcsQ0FBQ2EsUUFBUSxDQUFDO0lBQ2hDSSxTQUFTLENBQUNHLFFBQVEsR0FBRyxJQUFJO0lBQ3pCUCxRQUFRLENBQUNiLFdBQVcsQ0FBQ2MsU0FBUyxDQUFDO0lBQy9CRCxRQUFRLENBQUNiLFdBQVcsQ0FBQ2lCLFNBQVMsQ0FBQztJQUMvQkosUUFBUSxDQUFDYixXQUFXLENBQUNtQixVQUFVLENBQUM7SUFDaENBLFVBQVUsQ0FBQ3ZCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQzNDc0IsVUFBVSxDQUFDZixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBQ2lCLENBQUMsRUFBSztNQUN2Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUNsQixJQUFJTCxTQUFTLENBQUMvSyxLQUFLLElBQUksRUFBRSxFQUFFO1FBQ3ZCcUssRUFBRSxDQUFDVSxTQUFTLENBQUMvSyxLQUFLLENBQUM7UUFDbkJ5SyxVQUFVLENBQUNZLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDYixVQUFVLENBQUM7TUFDakQ7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsSUFBTWMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLE9BQU8sRUFBSztJQUM3QixJQUFNQyxPQUFPLEdBQUdwQyxRQUFRLENBQUNxQyxjQUFjLENBQUMsVUFBVSxDQUFDO0lBQ25ERCxPQUFPLENBQUM1QixXQUFXLEdBQUcyQixPQUFPO0VBQ2pDLENBQUM7RUFFRCxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxNQUFNLEVBQUs7SUFDcEMsSUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQztJQUNqRCxVQUFBZCxNQUFBLENBQVVlLE9BQU8sRUFBQWYsTUFBQSxDQUFHYyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQztFQUNuQyxDQUFDO0VBRUQsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJOUYsSUFBSSxFQUFLO0lBQzlCLElBQU1rRCxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMzQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFNMEMsS0FBSyxHQUFHNUMsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDd0MsS0FBSyxDQUFDcEMsV0FBVyxNQUFBaUIsTUFBQSxDQUFNNUUsSUFBSSx1QkFBb0I7SUFDL0MrRixLQUFLLENBQUN2QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUN4Q1AsSUFBSSxDQUFDVSxXQUFXLENBQUNtQyxLQUFLLENBQUM7SUFDdkIsSUFBTUMsSUFBSSxHQUFHN0MsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDeUMsSUFBSSxDQUFDbEIsRUFBRSxHQUFHLE1BQU07SUFDaEIsSUFBTW1CLFFBQVEsR0FBRzlDLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM5QzBDLFFBQVEsQ0FBQ25CLEVBQUUsR0FBRyxVQUFVO0lBQ3hCNUIsSUFBSSxDQUFDVSxXQUFXLENBQUNxQyxRQUFRLENBQUM7SUFDMUJBLFFBQVEsQ0FBQ3JDLFdBQVcsQ0FBQ29DLElBQUksQ0FBQztJQUMxQixJQUFNRSxPQUFPLEdBQUcvQyxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDN0MyQyxPQUFPLENBQUNwQixFQUFFLEdBQUcsVUFBVTtJQUN2QjVCLElBQUksQ0FBQ1UsV0FBVyxDQUFDc0MsT0FBTyxDQUFDO0VBQzdCLENBQUM7RUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLE1BQU0sRUFBQzVILElBQUksRUFBSztJQUNyQyxJQUFNMEUsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDM0MsSUFBTWlELFdBQVcsR0FBR2xELFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNwRCxJQUFNK0MsU0FBUyxHQUFHbkQsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9DLElBQU1nRCxXQUFXLEdBQUdwRCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDcEQ4QyxXQUFXLENBQUM3QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDekM2QyxTQUFTLENBQUM5QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDckM4QyxXQUFXLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDekM2QyxTQUFTLENBQUMzQyxXQUFXLE1BQUFpQixNQUFBLENBQU13QixNQUFNLENBQUN0QixFQUFFLGFBQVU7SUFDOUN5QixXQUFXLENBQUM1QyxXQUFXLEdBQUcsT0FBTztJQUNqQzRDLFdBQVcsQ0FBQ3ZDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ3hDcUMsV0FBVyxDQUFDbEIsVUFBVSxDQUFDQyxXQUFXLENBQUNpQixXQUFXLENBQUM7TUFDL0NHLE9BQU8sQ0FBQ2hJLElBQUksRUFBQzRILE1BQU0sQ0FBQztJQUN4QixDQUFDLENBQUM7SUFDRkMsV0FBVyxDQUFDekMsV0FBVyxDQUFDMEMsU0FBUyxDQUFDO0lBQ2xDRCxXQUFXLENBQUN6QyxXQUFXLENBQUMyQyxXQUFXLENBQUM7SUFDcENyRCxJQUFJLENBQUNVLFdBQVcsQ0FBQ3lDLFdBQVcsQ0FBQztJQUM3QkEsV0FBVyxDQUFDSSxTQUFTLENBQUMsQ0FBQztFQUMzQixDQUFDO0VBRUQsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBLEVBQVM7SUFDMUIsSUFBTXhELElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzNDRixJQUFJLENBQUNHLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQU0yQyxJQUFJLEdBQUc3QyxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDMUN5QyxJQUFJLENBQUNsQixFQUFFLEdBQUcsTUFBTTtJQUNoQixJQUFNNkIsS0FBSyxHQUFHeEQsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDb0QsS0FBSyxDQUFDN0IsRUFBRSxHQUFHLE9BQU87SUFDbEIsSUFBTW1CLFFBQVEsR0FBRzlDLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM5QzBDLFFBQVEsQ0FBQ25CLEVBQUUsR0FBRyxVQUFVO0lBQ3hCNUIsSUFBSSxDQUFDVSxXQUFXLENBQUNxQyxRQUFRLENBQUM7SUFDMUJBLFFBQVEsQ0FBQ3JDLFdBQVcsQ0FBQ29DLElBQUksQ0FBQztJQUMxQkMsUUFBUSxDQUFDckMsV0FBVyxDQUFDK0MsS0FBSyxDQUFDO0lBQzNCLElBQU1ULE9BQU8sR0FBRy9DLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM3QzJDLE9BQU8sQ0FBQ3BCLEVBQUUsR0FBRyxVQUFVO0lBQ3ZCNUIsSUFBSSxDQUFDVSxXQUFXLENBQUNzQyxPQUFPLENBQUM7RUFDN0IsQ0FBQztFQUVELElBQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsU0FBUyxFQUFLO0lBQ25DLElBQU1DLE9BQU8sR0FBRzNELFFBQVEsQ0FBQ3FDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDL0MsSUFBTXVCLEtBQUssR0FBRzVELFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQ3dELEtBQUssQ0FBQ2pDLEVBQUUsR0FBRytCLFNBQVMsQ0FBQy9CLEVBQUU7SUFDdkJnQyxPQUFPLENBQUNsRCxXQUFXLENBQUNtRCxLQUFLLENBQUM7SUFDMUIsSUFBTUMsSUFBSSxHQUFHSCxTQUFTLENBQUNJLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLEtBQUssSUFBSXZILENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBR3NILElBQUksRUFBR3RILENBQUMsRUFBRSxFQUFHO01BQzlCLElBQU13SCxZQUFZLEdBQUcvRCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDbEQyRCxZQUFZLENBQUMxRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDakNzRCxLQUFLLENBQUNuRCxXQUFXLENBQUNzRCxZQUFZLENBQUM7TUFDL0IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdILElBQUksRUFBR0csQ0FBQyxFQUFFLEVBQUc7UUFDOUIsSUFBTUMsSUFBSSxHQUFHakUsUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzdDNkQsSUFBSSxDQUFDNUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCMkQsSUFBSSxDQUFDNUQsU0FBUyxDQUFDQyxHQUFHLENBQUNvRCxTQUFTLENBQUNRLFlBQVksQ0FBQ0YsQ0FBQyxFQUFDekgsQ0FBQyxDQUFDLENBQUM7UUFDL0N3SCxZQUFZLENBQUN0RCxXQUFXLENBQUN3RCxJQUFJLENBQUM7TUFDbEM7SUFDSjtJQUNBTCxLQUFLLENBQUMvQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQWlCLENBQUMsRUFBSTtNQUNqQyxJQUFJO1FBQ0EsSUFBTW1DLEtBQUksR0FBR0UsU0FBUyxDQUFDckMsQ0FBQyxDQUFDc0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDMUUsU0FBUyxFQUFFO1FBQ2hCQSxTQUFTLEdBQUcrRCxTQUFTLENBQUNZLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDTixLQUFJLEVBQUVQLFNBQVMsQ0FBQztNQUM1RCxDQUFDLENBQUMsT0FBTWxNLEdBQUcsRUFBRTtRQUNUMEosT0FBTyxDQUFDQyxHQUFHLENBQUMzSixHQUFHLENBQUM7TUFDcEI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsSUFBTWdOLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlkLFNBQVMsRUFBSztJQUN4QyxJQUFNQyxPQUFPLEdBQUczRCxRQUFRLENBQUNxQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQy9DLElBQU11QixLQUFLLEdBQUc1RCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDM0N3RCxLQUFLLENBQUNqQyxFQUFFLEdBQUcrQixTQUFTLENBQUMvQixFQUFFO0lBQ3ZCZ0MsT0FBTyxDQUFDbEQsV0FBVyxDQUFDbUQsS0FBSyxDQUFDO0lBQzFCLElBQU1DLElBQUksR0FBR0gsU0FBUyxDQUFDSSxTQUFTLENBQUMsQ0FBQztJQUNsQyxLQUFLLElBQUl2SCxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdzSCxJQUFJLEVBQUd0SCxDQUFDLEVBQUUsRUFBRztNQUM5QixJQUFNd0gsWUFBWSxHQUFHL0QsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ2xEMkQsWUFBWSxDQUFDMUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO01BQ2pDc0QsS0FBSyxDQUFDbkQsV0FBVyxDQUFDc0QsWUFBWSxDQUFDO01BQy9CLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBR0EsQ0FBQyxHQUFHSCxJQUFJLEVBQUdHLENBQUMsRUFBRSxFQUFHO1FBQzlCLElBQU1DLElBQUksR0FBR2pFLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUM3QzZELElBQUksQ0FBQzVELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQjJELElBQUksQ0FBQzVELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDb0QsU0FBUyxDQUFDUSxZQUFZLENBQUNGLENBQUMsRUFBQ3pILENBQUMsQ0FBQyxDQUFDO1FBQy9Dd0gsWUFBWSxDQUFDdEQsV0FBVyxDQUFDd0QsSUFBSSxDQUFDO01BQ2xDO0lBQ0o7RUFDSixDQUFDO0VBRUQsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJZixTQUFTLEVBQUs7SUFDbEMsSUFBTUMsT0FBTyxHQUFHM0QsUUFBUSxDQUFDcUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUNoRCxJQUFNdUIsS0FBSyxHQUFHNUQsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDd0QsS0FBSyxDQUFDakMsRUFBRSxHQUFHK0IsU0FBUyxDQUFDL0IsRUFBRTtJQUN2QmdDLE9BQU8sQ0FBQ2xELFdBQVcsQ0FBQ21ELEtBQUssQ0FBQztJQUMxQixJQUFNQyxJQUFJLEdBQUdILFNBQVMsQ0FBQ0ksU0FBUyxDQUFDLENBQUM7SUFDbEMsS0FBSyxJQUFJdkgsQ0FBQyxHQUFHLENBQUMsRUFBR0EsQ0FBQyxHQUFHc0gsSUFBSSxFQUFHdEgsQ0FBQyxFQUFFLEVBQUc7TUFDOUIsSUFBTXdILFlBQVksR0FBRy9ELFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNsRDJELFlBQVksQ0FBQzFELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUNqQ3NELEtBQUssQ0FBQ25ELFdBQVcsQ0FBQ3NELFlBQVksQ0FBQztNQUMvQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBR0gsSUFBSSxFQUFHRyxDQUFDLEVBQUUsRUFBRztRQUM5QixJQUFNQyxJQUFJLEdBQUdqRSxRQUFRLENBQUNJLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDN0M2RCxJQUFJLENBQUM1RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUIyRCxJQUFJLENBQUM1RCxTQUFTLENBQUNDLEdBQUcsQ0FBQ29ELFNBQVMsQ0FBQ1EsWUFBWSxDQUFDRixDQUFDLEVBQUN6SCxDQUFDLENBQUMsQ0FBQztRQUMvQ3dILFlBQVksQ0FBQ3RELFdBQVcsQ0FBQ3dELElBQUksQ0FBQztNQUNsQztJQUNKO0lBQ0FTLFNBQVMsQ0FBQ2hCLFNBQVMsRUFBQ0EsU0FBUyxDQUFDL0IsRUFBRSxDQUFDO0VBQ3JDLENBQUM7RUFFRCxJQUFNZ0Qsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSWpCLFNBQVMsRUFBSztJQUN4QyxJQUFNQyxPQUFPLEdBQUczRCxRQUFRLENBQUNxQyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQ2hELElBQU11QixLQUFLLEdBQUc1RCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDM0N3RCxLQUFLLENBQUNqQyxFQUFFLEdBQUcrQixTQUFTLENBQUMvQixFQUFFO0lBQ3ZCZ0MsT0FBTyxDQUFDbEQsV0FBVyxDQUFDbUQsS0FBSyxDQUFDO0lBQzFCLElBQU1DLElBQUksR0FBR0gsU0FBUyxDQUFDSSxTQUFTLENBQUMsQ0FBQztJQUNsQztJQUNBLEtBQUssSUFBSXZILENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBR3NILElBQUksRUFBR3RILENBQUMsRUFBRSxFQUFHO01BQzlCLElBQU13SCxZQUFZLEdBQUcvRCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDbEQyRCxZQUFZLENBQUMxRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDakNzRCxLQUFLLENBQUNuRCxXQUFXLENBQUNzRCxZQUFZLENBQUM7TUFDL0IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdILElBQUksRUFBR0csQ0FBQyxFQUFFLEVBQUc7UUFDOUIsSUFBTUMsSUFBSSxHQUFHakUsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzFDNkQsSUFBSSxDQUFDNUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCeUQsWUFBWSxDQUFDdEQsV0FBVyxDQUFDd0QsSUFBSSxDQUFDO01BQ2xDO0lBQ0o7SUFDQSxJQUFNVyxNQUFNLEdBQUc1RSxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDNUN3RSxNQUFNLENBQUNwRSxXQUFXLEdBQUcsbUJBQW1CO0lBQ3hDb0UsTUFBTSxDQUFDdkUsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3BDc0QsS0FBSyxDQUFDbkQsV0FBVyxDQUFDbUUsTUFBTSxDQUFDO0VBQzdCLENBQUM7RUFFRCxJQUFNdkIsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUl3QixPQUFPLEVBQUNDLFFBQVEsRUFBSztJQUNsQyxJQUFNQyxVQUFVLEdBQUcvRSxRQUFRLENBQUNxQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQ2xELElBQU0yQyxTQUFTLEdBQUdoRixRQUFRLENBQUNxQyxjQUFjLENBQUMsT0FBTyxDQUFDO0lBQ2xEMEMsVUFBVSxDQUFDN0UsU0FBUyxHQUFHLEVBQUU7SUFDekI4RSxTQUFTLENBQUM5RSxTQUFTLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUMyRSxPQUFPLENBQUNJLE1BQU0sRUFBRTtNQUNqQnhCLGVBQWUsQ0FBQ3FCLFFBQVEsQ0FBQ3BCLFNBQVMsQ0FBQztNQUNuQ2UsY0FBYyxDQUFDSSxPQUFPLENBQUNuQixTQUFTLENBQUM7SUFDckMsQ0FBQyxNQUFNO01BQ0hjLG9CQUFvQixDQUFDTSxRQUFRLENBQUNwQixTQUFTLENBQUM7TUFDeENpQixvQkFBb0IsQ0FBQ0UsT0FBTyxDQUFDbkIsU0FBUyxDQUFDO01BQ3ZDZ0IsU0FBUyxDQUFDSSxRQUFRLENBQUNwQixTQUFTLEVBQUNvQixRQUFRLENBQUNwQixTQUFTLENBQUMvQixFQUFFLENBQUM7SUFDdkQ7RUFDSixDQUFDO0VBRUQsSUFBTXVELGtCQUFrQjtJQUFBLElBQUFDLElBQUEsR0FBQWxHLGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFHLFNBQUFzSSxRQUFPN0MsTUFBTSxFQUFDbUIsU0FBUztNQUFBLElBQUEyQixVQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUFDLGtCQUFBLEVBQUFDLGFBQUE7TUFBQSxPQUFBMVAsbUJBQUEsR0FBQXlCLElBQUEsVUFBQWtPLFNBQUFDLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBakksSUFBQSxHQUFBaUksUUFBQSxDQUFBdkssSUFBQTtVQUFBO1lBQzlDc0UsU0FBUyxHQUFHLEtBQUs7WUFDWDBGLFVBQVUsR0FBR3JGLFFBQVEsQ0FBQ3FDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3BDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDakVxRixHQUFHLEdBQUdELFVBQVUsQ0FBQ1EsUUFBUSxDQUFDdEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDZ0QsSUFBSSxHQUFHRCxHQUFHLENBQUNPLFFBQVEsQ0FBQ3RELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQ2dELElBQUksQ0FBQ2xGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN0QmtGLFdBQVcsR0FBR2xELG1CQUFtQixDQUFDQyxNQUFNLENBQUM7WUFDL0NMLFdBQVcscUJBQUFULE1BQUEsQ0FBcUIrRCxXQUFXLFFBQUssQ0FBQztZQUFDSSxRQUFBLENBQUF2SyxJQUFBO1lBQUEsT0FDakJ5SyxTQUFTLENBQUM7Y0FBQSxPQUFNUCxJQUFJLENBQUNsRixTQUFTLENBQUMwRixNQUFNLENBQUMsUUFBUSxDQUFDO1lBQUEsR0FBQyxJQUFJLENBQUM7VUFBQTtZQUFoRk4sa0JBQWtCLEdBQUFHLFFBQUEsQ0FBQWpMLElBQUE7WUFDeEI4SyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3BCTyxVQUFVLENBQUM7Y0FBQSxPQUFNOUQsV0FBVyxJQUFBVCxNQUFBLENBQUkrRCxXQUFXLFlBQUEvRCxNQUFBLENBQVNpQyxTQUFTLENBQUNRLFlBQVksQ0FBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQztZQUFBLEdBQUMsR0FBRyxDQUFDO1lBQ3hHO1lBQ0FnRCxJQUFJLENBQUNsRixTQUFTLENBQUNDLEdBQUcsQ0FBQ29ELFNBQVMsQ0FBQ1EsWUFBWSxDQUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDcUQsUUFBQSxDQUFBdkssSUFBQTtZQUFBLE9BQ3BDNEssaUJBQWlCLENBQUMsQ0FBQztVQUFBO1lBQXpDUCxhQUFhLEdBQUFFLFFBQUEsQ0FBQWpMLElBQUE7WUFDbkIrSyxhQUFhLENBQUMsQ0FBQztVQUFDO1VBQUE7WUFBQSxPQUFBRSxRQUFBLENBQUE5SCxJQUFBO1FBQUE7TUFBQSxHQUFBc0gsT0FBQTtJQUFBLENBQ25CO0lBQUEsZ0JBZktGLGtCQUFrQkEsQ0FBQWdCLEVBQUEsRUFBQUMsR0FBQTtNQUFBLE9BQUFoQixJQUFBLENBQUEvRixLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBZXZCO0VBRUQsSUFBTWlILGdCQUFnQjtJQUFBLElBQUFDLEtBQUEsR0FBQXBILGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFHLFNBQUF3SixTQUFPL0QsTUFBTSxFQUFDbUIsU0FBUztNQUFBLElBQUEyQixVQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUFDLGtCQUFBLEVBQUFjLGVBQUE7TUFBQSxPQUFBdlEsbUJBQUEsR0FBQXlCLElBQUEsVUFBQStPLFVBQUFDLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBOUksSUFBQSxHQUFBOEksU0FBQSxDQUFBcEwsSUFBQTtVQUFBO1lBQ3RDZ0ssVUFBVSxHQUFHckYsUUFBUSxDQUFDcUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDcEMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNqRXFGLEdBQUcsR0FBR0QsVUFBVSxDQUFDUSxRQUFRLENBQUN0RCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcENnRCxJQUFJLEdBQUdELEdBQUcsQ0FBQ08sUUFBUSxDQUFDdEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDZ0QsSUFBSSxDQUFDbEYsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3RCa0YsV0FBVyxHQUFHbEQsbUJBQW1CLENBQUNDLE1BQU0sQ0FBQztZQUMvQ0wsV0FBVyxJQUFBVCxNQUFBLENBQUlpQyxTQUFTLENBQUNZLFFBQVEsQ0FBQzNDLEVBQUUsZUFBQUYsTUFBQSxDQUFZK0QsV0FBVyxRQUFLLENBQUM7WUFBQ2lCLFNBQUEsQ0FBQXBMLElBQUE7WUFBQSxPQUNqQ3lLLFNBQVMsQ0FBQztjQUFBLE9BQU1QLElBQUksQ0FBQ2xGLFNBQVMsQ0FBQzBGLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFBQSxHQUFDLElBQUksQ0FBQztVQUFBO1lBQWhGTixrQkFBa0IsR0FBQWdCLFNBQUEsQ0FBQTlMLElBQUE7WUFDeEI4SyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3BCTyxVQUFVLENBQUM7Y0FBQSxPQUFNOUQsV0FBVyxJQUFBVCxNQUFBLENBQUkrRCxXQUFXLFlBQUEvRCxNQUFBLENBQVNpQyxTQUFTLENBQUNRLFlBQVksQ0FBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQztZQUFBLEdBQUMsR0FBRyxDQUFDO1lBQ3hHO1lBQ0FnRCxJQUFJLENBQUNsRixTQUFTLENBQUNDLEdBQUcsQ0FBQ29ELFNBQVMsQ0FBQ1EsWUFBWSxDQUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDa0UsU0FBQSxDQUFBcEwsSUFBQTtZQUFBLE9BQ2xDcUwsZ0JBQWdCLENBQUMsQ0FBQztVQUFBO1lBQTFDSCxlQUFlLEdBQUFFLFNBQUEsQ0FBQTlMLElBQUE7WUFDckI0TCxlQUFlLENBQUMsQ0FBQztZQUNqQjVHLFNBQVMsR0FBRyxJQUFJO1VBQUM7VUFBQTtZQUFBLE9BQUE4RyxTQUFBLENBQUEzSSxJQUFBO1FBQUE7TUFBQSxHQUFBd0ksUUFBQTtJQUFBLENBQ3BCO0lBQUEsZ0JBZktGLGdCQUFnQkEsQ0FBQU8sR0FBQSxFQUFBQyxHQUFBO01BQUEsT0FBQVAsS0FBQSxDQUFBakgsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQWVyQjtFQUVELElBQU0wSCxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsSUFBSSxFQUFFakssSUFBSSxFQUFLO0lBQzdCbUosVUFBVSxDQUFDO01BQUEsT0FBTTlELFdBQVcsSUFBQVQsTUFBQSxDQUFJNUUsSUFBSSxTQUFBNEUsTUFBQSxDQUFNcUYsSUFBSSxDQUFDakssSUFBSSxvQkFBaUIsQ0FBQztJQUFBLEdBQUMsSUFBSSxDQUFDO0VBQy9FLENBQUM7RUFFRCxJQUFNNkosZ0JBQWdCO0lBQUEsSUFBQUssS0FBQSxHQUFBOUgsaUJBQUEsZUFBQWpKLG1CQUFBLEdBQUE4RyxJQUFBLENBQUcsU0FBQWtLLFNBQUE7TUFBQSxJQUFBQyxpQkFBQTtNQUFBLE9BQUFqUixtQkFBQSxHQUFBeUIsSUFBQSxVQUFBeVAsVUFBQUMsU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUF4SixJQUFBLEdBQUF3SixTQUFBLENBQUE5TCxJQUFBO1VBQUE7WUFBQThMLFNBQUEsQ0FBQTlMLElBQUE7WUFBQSxPQUNXeUssU0FBUyxDQUFDckcsTUFBTSxFQUFFLElBQUksQ0FBQztVQUFBO1lBQWpEd0gsaUJBQWlCLEdBQUFFLFNBQUEsQ0FBQXhNLElBQUE7WUFBQSxPQUFBd00sU0FBQSxDQUFBck0sTUFBQSxXQUNoQm1NLGlCQUFpQjtVQUFBO1VBQUE7WUFBQSxPQUFBRSxTQUFBLENBQUFySixJQUFBO1FBQUE7TUFBQSxHQUFBa0osUUFBQTtJQUFBLENBQzNCO0lBQUEsZ0JBSEtOLGdCQUFnQkEsQ0FBQTtNQUFBLE9BQUFLLEtBQUEsQ0FBQTNILEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FHckI7RUFFRCxJQUFNOEcsaUJBQWlCO0lBQUEsSUFBQW1CLEtBQUEsR0FBQW5JLGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFHLFNBQUF1SyxTQUFBO01BQUEsSUFBQUMsZ0JBQUE7TUFBQSxPQUFBdFIsbUJBQUEsR0FBQXlCLElBQUEsVUFBQThQLFVBQUFDLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBN0osSUFBQSxHQUFBNkosU0FBQSxDQUFBbk0sSUFBQTtVQUFBO1lBQUFtTSxTQUFBLENBQUFuTSxJQUFBO1lBQUEsT0FDU3lLLFNBQVMsQ0FBQ3JHLE1BQU0sRUFBRSxJQUFJLENBQUM7VUFBQTtZQUFoRDZILGdCQUFnQixHQUFBRSxTQUFBLENBQUE3TSxJQUFBO1lBQ3RCZ0YsU0FBUyxHQUFHLElBQUk7WUFBQyxPQUFBNkgsU0FBQSxDQUFBMU0sTUFBQSxXQUNWd00sZ0JBQWdCO1VBQUE7VUFBQTtZQUFBLE9BQUFFLFNBQUEsQ0FBQTFKLElBQUE7UUFBQTtNQUFBLEdBQUF1SixRQUFBO0lBQUEsQ0FDMUI7SUFBQSxnQkFKS3BCLGlCQUFpQkEsQ0FBQTtNQUFBLE9BQUFtQixLQUFBLENBQUFoSSxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBSXRCO0VBRUQsSUFBTTJHLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJMkIsUUFBUSxFQUFDQyxLQUFLLEVBQUs7SUFDbEMsT0FBTyxJQUFJdkssT0FBTyxDQUFDLFVBQUF6RCxPQUFPO01BQUEsT0FBSXNNLFVBQVUsQ0FBQztRQUFBLE9BQU10TSxPQUFPLENBQUMrTixRQUFRLENBQUM7TUFBQSxHQUFFQyxLQUFLLENBQUM7SUFBQSxFQUFDO0VBQzdFLENBQUM7RUFHRCxJQUFNaEQsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUloQixTQUFTLEVBQUNpRSxPQUFPLEVBQUs7SUFDckMsSUFBTUMsS0FBSyxHQUFHbEUsU0FBUyxDQUFDbUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsSUFBTUMsUUFBUSxHQUFHOUgsUUFBUSxDQUFDcUMsY0FBYyxDQUFDc0YsT0FBTyxDQUFDO0lBQ2pEQyxLQUFLLENBQUN4TyxPQUFPLENBQUMsVUFBQzBOLElBQUksRUFBSztNQUNwQixJQUFNaUIsVUFBVSxHQUFHQyx1QkFBdUIsQ0FBQ0YsUUFBUSxFQUFFcEUsU0FBUyxDQUFDSSxTQUFTLENBQUMsQ0FBQyxFQUFFZ0QsSUFBSSxDQUFDO01BQ2pGZ0IsUUFBUSxDQUFDckgsV0FBVyxDQUFDd0gsUUFBUSxDQUFDRixVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlGLFVBQVUsRUFBSztJQUM3QixJQUFNakIsSUFBSSxHQUFHOUcsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDMEcsSUFBSSxDQUFDekcsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2pDd0csSUFBSSxDQUFDdEYsWUFBWSxDQUFDLE9BQU8sU0FBQUMsTUFBQSxDQUFRc0csVUFBVSxDQUFDRyxHQUFHLFlBQUF6RyxNQUFBLENBQVNzRyxVQUFVLENBQUNsRixJQUFJLGFBQUFwQixNQUFBLENBQVVzRyxVQUFVLENBQUN6TCxNQUFNLGNBQUFtRixNQUFBLENBQVdzRyxVQUFVLENBQUNJLE1BQU0sQ0FBRSxDQUFDO0lBQ2pJLE9BQU9yQixJQUFJO0VBQ2YsQ0FBQztFQUVELElBQU1rQix1QkFBdUIsR0FBRyxTQUExQkEsdUJBQXVCQSxDQUFJSSxJQUFJLEVBQUVDLEtBQUssRUFBRXZCLElBQUksRUFBSztJQUNuRCxJQUFNd0IsSUFBSSxHQUFHRixJQUFJLENBQUNHLFdBQVcsR0FBR0YsS0FBSztJQUNyQyxJQUFNeEYsSUFBSSxHQUFHMkYsSUFBSSxDQUFDQyxLQUFLLENBQUMzQixJQUFJLENBQUM0QixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdKLElBQUksQ0FBQyxHQUFDLElBQUk7SUFDeEQsSUFBTUosR0FBRyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBQzNCLElBQUksQ0FBQzRCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0osSUFBSSxDQUFDLEdBQUMsSUFBSTtJQUN2RCxJQUFNaE0sTUFBTSxHQUFHd0ssSUFBSSxDQUFDNkIsV0FBVyxHQUFHN0IsSUFBSSxDQUFDeEssTUFBTSxHQUFHZ00sSUFBSSxHQUFHQSxJQUFJO0lBQzNELElBQU1ILE1BQU0sR0FBR3JCLElBQUksQ0FBQzZCLFdBQVcsR0FBR0wsSUFBSSxHQUFHeEIsSUFBSSxDQUFDeEssTUFBTSxHQUFHZ00sSUFBSTtJQUMzRCxPQUFPO01BQ0hKLEdBQUcsRUFBSEEsR0FBRztNQUNIckYsSUFBSSxFQUFKQSxJQUFJO01BQ0p2RyxNQUFNLEVBQUNBLE1BQU0sR0FBQyxJQUFJO01BQ2xCNkwsTUFBTSxFQUFDQSxNQUFNLEdBQUM7SUFDbEIsQ0FBQztFQUNMLENBQUM7RUFFRCxJQUFNaEUsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUl5RSxNQUFNLEVBQUs7SUFDMUIsSUFBSSxDQUFDQSxNQUFNLEVBQUU7SUFDYixJQUFNeEUsTUFBTSxHQUFHd0UsTUFBTTtJQUNyQixJQUFNQyxNQUFNLEdBQUd6RSxNQUFNLENBQUNwQyxVQUFVO0lBQ2hDLElBQU00QixLQUFLLEdBQUc1RCxRQUFRLENBQUNxQyxjQUFjLENBQUN3RyxNQUFNLENBQUM3RyxVQUFVLENBQUNMLEVBQUUsQ0FBQztJQUMzRDtJQUNBLElBQU1tSCxDQUFDLEdBQUdDLEtBQUssQ0FBQzNTLFNBQVMsQ0FBQzRTLE9BQU8sQ0FBQ3ZRLElBQUksQ0FBQ21MLEtBQUssQ0FBQ2lDLFFBQVEsRUFBQ2dELE1BQU0sQ0FBQztJQUM3RCxJQUFNSSxDQUFDLEdBQUdGLEtBQUssQ0FBQzNTLFNBQVMsQ0FBQzRTLE9BQU8sQ0FBQ3ZRLElBQUksQ0FBQ29RLE1BQU0sQ0FBQ2hELFFBQVEsRUFBQ3pCLE1BQU0sQ0FBQztJQUM5RCxPQUFPLENBQUM2RSxDQUFDLEVBQUNILENBQUMsQ0FBQztFQUNoQixDQUFDO0VBRUQsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLE1BQU0sRUFBSztJQUN4QmpJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksRUFBRWdJLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQztJQUNwRCxJQUFNcEosSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDM0NGLElBQUksQ0FBQ0csU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBTWtKLFdBQVcsR0FBR3BKLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNqRCxJQUFNaUosV0FBVyxHQUFHckosUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ2pEaUosV0FBVyxDQUFDN0ksV0FBVyxpQkFBQWlCLE1BQUEsQ0FBaUIwSCxNQUFNLG9CQUFpQjtJQUMvRCxJQUFNRyxhQUFhLEdBQUd0SixRQUFRLENBQUNJLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDdERrSixhQUFhLENBQUM5SSxXQUFXLGNBQWM7SUFDdkM0SSxXQUFXLENBQUMvSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDekMrSSxXQUFXLENBQUNoSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDekNnSixhQUFhLENBQUNqSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDMUM4SSxXQUFXLENBQUMzSSxXQUFXLENBQUM0SSxXQUFXLENBQUM7SUFDcENELFdBQVcsQ0FBQzNJLFdBQVcsQ0FBQzZJLGFBQWEsQ0FBQztJQUN0Q3ZKLElBQUksQ0FBQ1UsV0FBVyxDQUFDMkksV0FBVyxDQUFDO0lBQzdCRSxhQUFhLENBQUN6SSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVuQixLQUFLLENBQUM7RUFDbEQsQ0FBQztFQU1ELE9BQU87SUFDSGdGLFNBQVMsRUFBVEEsU0FBUztJQUNUbkIsZUFBZSxFQUFmQSxlQUFlO0lBQ2ZaLGVBQWUsRUFBZkEsZUFBZTtJQUNmdUMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJnRSxPQUFPLEVBQVBBLE9BQU87SUFDUC9FLFNBQVMsRUFBVEEsU0FBUztJQUNUZCxPQUFPLEVBQVBBLE9BQU87SUFDUHdELFFBQVEsRUFBUkEsUUFBUTtJQUNSVCxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQnhHLFlBQVksRUFBWkEsWUFBWTtJQUNab0QsZUFBZSxFQUFmQSxlQUFlO0lBQ2YsSUFBSXZELE1BQU1BLENBQUM4SixRQUFRLEVBQUU7TUFDakI5SixNQUFNLEdBQUc4SixRQUFRO0lBQ3JCLENBQUM7SUFDRCxJQUFJN0osS0FBS0EsQ0FBQzhKLEdBQUcsRUFBRTtNQUNYOUosS0FBSyxHQUFHOEosR0FBRztJQUNmO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzNYRyxJQUFNbkssSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBb0I7RUFBQSxJQUFoQnhDLElBQUksR0FBQXNDLFNBQUEsQ0FBQTdDLE1BQUEsUUFBQTZDLFNBQUEsUUFBQWxFLFNBQUEsR0FBQWtFLFNBQUEsTUFBRyxJQUFJO0VBQzVCLElBQUlzSyxVQUFVLEdBQUcsQ0FBQztFQUVsQixJQUFJZCxXQUFXLEdBQUcsS0FBSztFQUV2QixJQUFNZSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFTO0lBQ2pCZixXQUFXLEdBQUcsQ0FBQ0EsV0FBVztFQUM5QixDQUFDO0VBRUQsSUFBTWdCLFVBQVUsR0FBRztJQUNmQyxPQUFPLEVBQUUsQ0FBQztJQUNWcEssVUFBVSxFQUFFLENBQUM7SUFDYnFLLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLFNBQVMsRUFBRSxDQUFDO0lBQ1pDLFNBQVMsRUFBRTtFQUNmLENBQUM7RUFFRCxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0lBQ2RQLFVBQVUsRUFBRTtFQUNoQixDQUFDO0VBRUQsSUFBTVEsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUEsRUFBUztJQUNqQixPQUFRUixVQUFVLElBQUlFLFVBQVUsQ0FBQzlNLElBQUksQ0FBQztFQUMxQyxDQUFDO0VBRUQsT0FBTztJQUNIbU4sR0FBRyxFQUFIQSxHQUFHO0lBQ0hDLE1BQU0sRUFBTkEsTUFBTTtJQUNOdkIsUUFBUSxFQUFDLEVBQUU7SUFDWCxJQUFJQyxXQUFXQSxDQUFBLEVBQUk7TUFDZixPQUFPQSxXQUFXO0lBQ3RCLENBQUM7SUFDRCxJQUFJQSxXQUFXQSxDQUFDdUIsRUFBRSxFQUFFO01BQ2hCdkIsV0FBVyxHQUFHdUIsRUFBRTtJQUNwQixDQUFDO0lBQ0RSLE1BQU0sRUFBTkEsTUFBTTtJQUNOLElBQUk3TSxJQUFJQSxDQUFBLEVBQUc7TUFDUCxJQUFNc04sV0FBVyxHQUFHdE4sSUFBSSxDQUFDdU4sS0FBSyxDQUFDLEVBQUUsQ0FBQztNQUNsQ0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxXQUFXLENBQUMsQ0FBQztNQUM1QixPQUFPRixXQUFXLENBQUNHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUloTyxNQUFNQSxDQUFBLEVBQUc7TUFDVCxPQUFPcU4sVUFBVSxDQUFDOU0sSUFBSSxDQUFDO0lBQzNCO0VBQ0osQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmdDO0FBQ0E7QUFDUztBQUVsQyxJQUFNMk4sY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJOUcsU0FBUyxFQUFFK0csUUFBUSxFQUFLO0VBQ25ELElBQUlDLE9BQU8sR0FBRyxLQUFLO0VBQ25CLElBQU10SSxPQUFPLEdBQUdwQyxRQUFRLENBQUNxQyxjQUFjLENBQUMsVUFBVSxDQUFDO0VBRW5ELElBQU11RixLQUFLLEdBQUc7SUFDVmdDLE9BQU8sRUFBQztNQUNKckgsTUFBTSxFQUFDLEVBQUU7TUFDVG9JLFVBQVUsRUFBQyxJQUFJO01BQ2ZyTyxNQUFNLEVBQUMsQ0FBQztNQUNSc08sTUFBTSxFQUFDO0lBQ1gsQ0FBQztJQUNEcEwsVUFBVSxFQUFDO01BQ1ArQyxNQUFNLEVBQUMsRUFBRTtNQUNUb0ksVUFBVSxFQUFDLElBQUk7TUFDZnJPLE1BQU0sRUFBQyxDQUFDO01BQ1JzTyxNQUFNLEVBQUM7SUFDWCxDQUFDO0lBQ0RmLE9BQU8sRUFBQztNQUNKdEgsTUFBTSxFQUFDLEVBQUU7TUFDVG9JLFVBQVUsRUFBQyxJQUFJO01BQ2ZyTyxNQUFNLEVBQUMsQ0FBQztNQUNSc08sTUFBTSxFQUFDO0lBQ1gsQ0FBQztJQUNEZCxTQUFTLEVBQUM7TUFDTnZILE1BQU0sRUFBQyxFQUFFO01BQ1RvSSxVQUFVLEVBQUMsSUFBSTtNQUNmck8sTUFBTSxFQUFDLENBQUM7TUFDUnNPLE1BQU0sRUFBQztJQUNYLENBQUM7SUFDRGIsU0FBUyxFQUFDO01BQ054SCxNQUFNLEVBQUMsRUFBRTtNQUNUb0ksVUFBVSxFQUFDLElBQUk7TUFDZnJPLE1BQU0sRUFBQyxDQUFDO01BQ1JzTyxNQUFNLEVBQUM7SUFDWDtFQUNKLENBQUM7RUFFRCxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0lBQ25CMVUsTUFBTSxDQUFDa0gsSUFBSSxDQUFDdUssS0FBSyxDQUFDLENBQUN4TyxPQUFPLENBQUMsVUFBQzBOLElBQUksRUFBSztNQUNqQyxJQUFNZ0UsT0FBTyxHQUFHekwsOENBQUksQ0FBQ3lILElBQUksQ0FBQztNQUMxQnBELFNBQVMsQ0FBQ3FILFNBQVMsQ0FBQ0QsT0FBTyxFQUFDbEQsS0FBSyxDQUFDZCxJQUFJLENBQUMsQ0FBQ3ZFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQ3FGLEtBQUssQ0FBQ2QsSUFBSSxDQUFDLENBQUN2RSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUNxRixLQUFLLENBQUNkLElBQUksQ0FBQyxDQUFDNkQsVUFBVSxDQUFDO0lBQ25HLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7SUFDN0IsSUFBTXJILE9BQU8sR0FBRzNELFFBQVEsQ0FBQ3FDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDL0MsSUFBTXVCLEtBQUssR0FBRzVELFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQ3dELEtBQUssQ0FBQ2pDLEVBQUUsR0FBRytCLFNBQVMsQ0FBQy9CLEVBQUU7SUFDdkJnQyxPQUFPLENBQUNsRCxXQUFXLENBQUNtRCxLQUFLLENBQUM7SUFDMUIsSUFBTUMsSUFBSSxHQUFHSCxTQUFTLENBQUNJLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLEtBQUssSUFBSXZILENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBR3NILElBQUksRUFBR3RILENBQUMsRUFBRSxFQUFHO01BQzlCLElBQU13SCxZQUFZLEdBQUcvRCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDbEQyRCxZQUFZLENBQUMxRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDakNzRCxLQUFLLENBQUNuRCxXQUFXLENBQUNzRCxZQUFZLENBQUM7TUFDL0IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdILElBQUksRUFBR0csQ0FBQyxFQUFFLEVBQUc7UUFDOUIsSUFBTUMsSUFBSSxHQUFHakUsUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzdDNkQsSUFBSSxDQUFDNUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCMkQsSUFBSSxDQUFDdEMsRUFBRSxNQUFBRixNQUFBLENBQU11QyxDQUFDLE9BQUF2QyxNQUFBLENBQUlsRixDQUFDLENBQUU7UUFDckIwSCxJQUFJLENBQUN6QyxZQUFZLENBQUMsT0FBTyxFQUFDLG9CQUFvQixDQUFDO1FBQy9DeUMsSUFBSSxDQUFDNUQsU0FBUyxDQUFDQyxHQUFHLENBQUNvRCxTQUFTLENBQUNRLFlBQVksQ0FBQ0YsQ0FBQyxFQUFDekgsQ0FBQyxDQUFDLENBQUM7UUFDL0N3SCxZQUFZLENBQUN0RCxXQUFXLENBQUN3RCxJQUFJLENBQUM7TUFDbEM7SUFDSjtFQUNKLENBQUM7RUFFRCxJQUFNZ0gscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBQSxFQUFTO0lBQ2hDRCxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BCRSxrQkFBa0IsQ0FBQyxDQUFDO0VBQ3hCLENBQUM7RUFFRCxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFBLEVBQVM7SUFDN0IsSUFBTUMsUUFBUSxHQUFHQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JDLElBQU14QyxNQUFNLEdBQUd1QyxRQUFRLEdBQUdBLFFBQVEsR0FBR0Usa0JBQWtCLENBQUMsQ0FBQztJQUN6RCxJQUFJRixRQUFRLEVBQUU7TUFBQ3ZDLE1BQU0sQ0FBQy9ILGdCQUFnQixDQUFDLE9BQU8sRUFBQyxZQUFNO1FBQ2pEdUIsT0FBTyxDQUFDSCxXQUFXLENBQUMyRyxNQUFNLENBQUM7UUFDM0IsSUFBTTlCLElBQUksR0FBR3dFLFFBQVEsQ0FBQzFDLE1BQU0sQ0FBQztRQUM3QjJDLGFBQWEsQ0FBQ3pFLElBQUksRUFBQ2MsS0FBSyxDQUFDZCxJQUFJLENBQUMsQ0FBQztNQUNuQyxDQUFDLENBQUM7SUFBQyxDQUFDLE1BQU07TUFDTjhCLE1BQU0sQ0FBQy9ILGdCQUFnQixDQUFDLE9BQU8sRUFBRTJLLE1BQU0sQ0FBQztJQUM1QztJQUNBcEosT0FBTyxDQUFDM0IsV0FBVyxDQUFDbUksTUFBTSxDQUFDO0VBQy9CLENBQUM7RUFFRCxJQUFNNkMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN2QixJQUFNQyxRQUFRLEdBQUcxTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDdEQsSUFBSXlMLFFBQVEsRUFBRUEsUUFBUSxDQUFDMUosVUFBVSxDQUFDQyxXQUFXLENBQUN5SixRQUFRLENBQUM7RUFDM0QsQ0FBQztFQUVELElBQU1OLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztJQUM3QkssWUFBWSxDQUFDLENBQUM7SUFDZCxLQUFLLElBQUloVixHQUFHLElBQUltUixLQUFLLEVBQUU7TUFDbkIsSUFBSUEsS0FBSyxDQUFDblIsR0FBRyxDQUFDLENBQUNtVSxNQUFNLEVBQUU7TUFDdkIsSUFBTWUsVUFBVSxHQUFHbEosTUFBTSxDQUFDLFFBQVEsR0FBRWhNLEdBQUcsQ0FBQyxDQUFDNFQsV0FBVyxDQUFDLENBQUM7TUFDdEQsSUFBTXpCLE1BQU0sR0FBRzVJLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUMvQ3dJLE1BQU0sQ0FBQ3ZJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNsQ3NJLE1BQU0sQ0FBQ2pILEVBQUUsR0FBR2xMLEdBQUc7TUFDZm1TLE1BQU0sQ0FBQ3BJLFdBQVcsR0FBR21MLFVBQVU7TUFDL0IsT0FBTy9DLE1BQU07SUFDakI7SUFDQSxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUVELElBQU0wQyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSTFDLE1BQU0sRUFBSztJQUN6QixJQUFNOUIsSUFBSSxHQUFHekgsOENBQUksQ0FBQ3VKLE1BQU0sQ0FBQ2pILEVBQUUsQ0FBQztJQUM1Qm1GLElBQUksQ0FBQzRDLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsT0FBTzVDLElBQUk7RUFDZixDQUFDO0VBRUQsSUFBTThFLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSTlFLElBQUksRUFBSztJQUM3QixJQUFNK0UsUUFBUSxHQUFHN0wsUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ2pEeUwsUUFBUSxDQUFDeEwsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ3JDdUwsUUFBUSxDQUFDbEssRUFBRSxHQUFHbUYsSUFBSSxDQUFDakssSUFBSTtJQUN2QmdQLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDcEQsUUFBUSxHQUFHLFVBQVU7SUFDcENtRCxRQUFRLENBQUNDLEtBQUssQ0FBQzVELEdBQUcsR0FBRyxLQUFLO0lBQzFCMkQsUUFBUSxDQUFDQyxLQUFLLENBQUNqSixJQUFJLEdBQUcsS0FBSztJQUMzQmdKLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxlQUFlLFVBQUF0SyxNQUFBLENBQVVsQyxtREFBVyxDQUFDdUgsSUFBSSxDQUFDakssSUFBSSxDQUFDLENBQUU7SUFDaEUsT0FBT2dQLFFBQVE7RUFDbkIsQ0FBQztFQUVELElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztJQUM1QjVKLE9BQU8sQ0FBQzZKLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDN1MsT0FBTyxDQUFDLFVBQUN3UCxNQUFNO01BQUEsT0FBS3hHLE9BQU8sQ0FBQ0gsV0FBVyxDQUFDMkcsTUFBTSxDQUFDO0lBQUEsRUFBQztFQUN4RixDQUFDO0VBRUQsSUFBTXNELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztJQUM3QkYsaUJBQWlCLENBQUMsQ0FBQztJQUNuQixJQUFNcEQsTUFBTSxHQUFHNUksUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9Dd0ksTUFBTSxDQUFDdkksU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQzlCc0ksTUFBTSxDQUFDcEksV0FBVyxHQUFHLFFBQVE7SUFDN0I0QixPQUFPLENBQUMzQixXQUFXLENBQUNtSSxNQUFNLENBQUM7SUFDM0IsT0FBT0EsTUFBTTtFQUNqQixDQUFDO0VBR0QsSUFBTTJDLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSXpFLElBQUksRUFBSztJQUM1QjRELE9BQU8sR0FBRyxJQUFJO0lBQ2QsSUFBTXlCLEtBQUssR0FBR25NLFFBQVEsQ0FBQ2lNLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUNoRCxJQUFNSixRQUFRLEdBQUdELGNBQWMsQ0FBQzlFLElBQUksQ0FBQztJQUNyQyxJQUFNbEQsS0FBSyxHQUFHNUQsUUFBUSxDQUFDcUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUM3Q3VCLEtBQUssQ0FBQ25ELFdBQVcsQ0FBQ29MLFFBQVEsQ0FBQztJQUMzQk8sVUFBVSxDQUFDUCxRQUFRLEVBQUNNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzVELFdBQVcsRUFBQ3pCLElBQUksQ0FBQztJQUM5QyxJQUFNdUYsY0FBYyxHQUFHQyxrQkFBa0IsQ0FBQ3hGLElBQUksQ0FBQztJQUMvQyxJQUFNNEMsTUFBTSxHQUFHd0Msa0JBQWtCLENBQUMsQ0FBQztJQUNuQ3hDLE1BQU0sQ0FBQzdJLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxZQUFNO01BQ2xDMEwsWUFBWSxDQUFDVixRQUFRLENBQUM7TUFDdEJXLFVBQVUsQ0FBQzFGLElBQUksQ0FBQztJQUNwQixDQUFDLENBQUM7SUFDRnFGLEtBQUssQ0FBQy9TLE9BQU8sQ0FBQyxVQUFDNkssSUFBSSxFQUFLO01BQ3BCd0ksVUFBVSxDQUFDeEksSUFBSSxFQUFDNEgsUUFBUSxDQUFDO01BQ3pCLElBQUlRLGNBQWMsQ0FBQ0ssUUFBUSxDQUFDekksSUFBSSxDQUFDdEMsRUFBRSxDQUFDLEVBQUU7UUFDbENzQyxJQUFJLENBQUM1RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDN0I7TUFDSixDQUFDLE1BQU07UUFDSDJELElBQUksQ0FBQzVELFNBQVMsQ0FBQzBGLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDcEM7TUFDQTlCLElBQUksQ0FBQ3BELGdCQUFnQixDQUFDLE9BQU8sRUFBQyxVQUFDaUIsQ0FBQyxFQUFLO1FBQ2pDNkssYUFBYSxDQUFDN0ssQ0FBQyxDQUFDc0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUN3SCxRQUFRLEVBQUMvRSxJQUFJLENBQUM7TUFDMUQsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU13RixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJeEYsSUFBSSxFQUFLO0lBQ2pDLElBQU11RixjQUFjLEdBQUcsRUFBRTtJQUN6QjtJQUNBLEtBQU0sSUFBSTlQLENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBR21ILFNBQVMsQ0FBQ0ksU0FBUyxDQUFDLENBQUMsRUFBR3ZILENBQUMsRUFBRSxFQUFHO01BQ2hELEtBQU0sSUFBSXlILENBQUMsR0FBR04sU0FBUyxDQUFDSSxTQUFTLENBQUMsQ0FBQyxJQUFJZ0QsSUFBSSxDQUFDeEssTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFMEgsQ0FBQyxHQUFHTixTQUFTLENBQUNJLFNBQVMsQ0FBQyxDQUFDLEVBQUdFLENBQUMsRUFBRSxFQUFHO1FBQ3ZGLElBQU00SSxPQUFPLEdBQUc5RixJQUFJLENBQUM2QixXQUFXLEdBQUcsQ0FBQzNFLENBQUMsRUFBQ3pILENBQUMsQ0FBQyxHQUFHLENBQUNBLENBQUMsRUFBQ3lILENBQUMsQ0FBQztRQUNoRHFJLGNBQWMsQ0FBQ3RRLElBQUksQ0FBQzZRLE9BQU8sQ0FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUMxQztJQUNKO0lBQ0E7SUFBQSxJQUFBdUMsS0FBQSxZQUFBQSxNQUFBLEVBQ3VCO01BQ25CLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQztNQUMxQixJQUFJLENBQUNuRixLQUFLLENBQUNuUixHQUFHLENBQUMsQ0FBQ21VLE1BQU07TUFDdEIsSUFBTW9DLFFBQVEsR0FBR0MsaUJBQWlCLENBQUNyRixLQUFLLENBQUNuUixHQUFHLENBQUMsQ0FBQztNQUM5QyxJQUFNeVcsWUFBWSxHQUFHcEcsSUFBSSxDQUFDNkIsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDO01BQzdDcUUsUUFBUSxDQUFDNVQsT0FBTyxDQUFDLFVBQUMrVCxLQUFLLEVBQUs7UUFDeEJMLFFBQVEsQ0FBQ3hNLEdBQUcsQ0FBQzZNLEtBQUssQ0FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixLQUFLLElBQUkvTixFQUFDLEdBQUcsQ0FBQyxFQUFHQSxFQUFDLEdBQUd1SyxJQUFJLENBQUN4SyxNQUFNLEVBQUdDLEVBQUMsRUFBRSxFQUFHO1VBQ3JDLElBQU02USxTQUFTLEdBQUFDLGtCQUFBLENBQU9GLEtBQUssQ0FBQztVQUM1QkMsU0FBUyxDQUFDRixZQUFZLENBQUMsR0FBR0UsU0FBUyxDQUFDRixZQUFZLENBQUMsR0FBRzNRLEVBQUM7VUFDckQsSUFBSTZRLFNBQVMsQ0FBQ0YsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1VBQ2pDSixRQUFRLENBQUN4TSxHQUFHLENBQUM4TSxTQUFTLENBQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckM7TUFDSixDQUFDLENBQUM7TUFDRndDLFFBQVEsQ0FBQzFULE9BQU8sQ0FBQyxVQUFDa1UsS0FBSztRQUFBLE9BQUtqQixjQUFjLENBQUN0USxJQUFJLENBQUN1UixLQUFLLENBQUM7TUFBQSxFQUFDO0lBQzNELENBQUM7SUFmRCxLQUFLLElBQUk3VyxHQUFHLElBQUltUixLQUFLO01BQUEsSUFBQTJGLElBQUEsR0FBQVYsS0FBQTtNQUFBLElBQUFVLElBQUEsaUJBRU87SUFBUztJQWNyQyxPQUFPbEIsY0FBYztFQUN6QixDQUFDO0VBRUQsSUFBTVksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSU8sTUFBTSxFQUFLO0lBQ2xDLElBQU1DLE1BQU0sR0FBRyxJQUFJVixHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFNRyxZQUFZLEdBQUdNLE1BQU0sQ0FBQzdDLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxLQUFNLElBQUlwTyxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdpUixNQUFNLENBQUNsUixNQUFNLEVBQUdDLENBQUMsRUFBRSxFQUFHO01BQ3hDLElBQU1tUixZQUFZLEdBQUFMLGtCQUFBLENBQU9HLE1BQU0sQ0FBQ2pMLE1BQU0sQ0FBQztNQUN2Q21MLFlBQVksQ0FBQ1IsWUFBWSxDQUFDLEdBQUdRLFlBQVksQ0FBQ1IsWUFBWSxDQUFDLEdBQUczUSxDQUFDO01BQzNEa1IsTUFBTSxDQUFDbk4sR0FBRyxDQUFDb04sWUFBWSxDQUFDO0lBQzVCO0lBQ0EsT0FBT0QsTUFBTTtFQUNqQixDQUFDO0VBRUQsSUFBTXJCLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJdUIsS0FBSyxFQUFDckYsSUFBSSxFQUFDeEIsSUFBSSxFQUFLO0lBQ3BDLElBQU04RyxLQUFLLEdBQUc5RyxJQUFJLENBQUM2QixXQUFXLEdBQUlMLElBQUksR0FBQ3hCLElBQUksQ0FBQ3hLLE1BQU0sR0FBRSxJQUFJLEdBQUdnTSxJQUFJLEdBQUMsSUFBSTtJQUNwRSxJQUFNSCxNQUFNLEdBQUdyQixJQUFJLENBQUM2QixXQUFXLEdBQUdMLElBQUksR0FBRSxJQUFJLEdBQUdBLElBQUksR0FBQ3hCLElBQUksQ0FBQ3hLLE1BQU0sR0FBRSxJQUFJO0lBQ3JFcVIsS0FBSyxDQUFDN0IsS0FBSyxDQUFDOEIsS0FBSyxHQUFHQSxLQUFLO0lBQ3pCRCxLQUFLLENBQUM3QixLQUFLLENBQUMzRCxNQUFNLEdBQUdBLE1BQU07RUFDL0IsQ0FBQztFQUVELElBQU1vRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSVYsUUFBUSxFQUFLO0lBQy9CQSxRQUFRLENBQUM3SixVQUFVLENBQUNDLFdBQVcsQ0FBQzRKLFFBQVEsQ0FBQztJQUN6QyxJQUFNTSxLQUFLLEdBQUduTSxRQUFRLENBQUNpTSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7SUFDaERFLEtBQUssQ0FBQy9TLE9BQU8sQ0FBQyxVQUFDNkssSUFBSSxFQUFLO01BQ3BCQSxJQUFJLENBQUM0SixXQUFXLENBQUM1SixJQUFJLENBQUM2SixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU10QixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSTFGLElBQUksRUFBSztJQUN6QkEsSUFBSSxDQUFDNEMsTUFBTSxDQUFDLENBQUM7SUFDYjZCLGFBQWEsQ0FBQ3pFLElBQUksQ0FBQztFQUN2QixDQUFDO0VBRUQsSUFBTWlILFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJbEMsUUFBUSxFQUFDL0UsSUFBSSxFQUFLO0lBQ2hDLElBQUk0RCxPQUFPLEVBQUU7SUFDYmUsWUFBWSxDQUFDLENBQUM7SUFDZEksUUFBUSxDQUFDN0osVUFBVSxDQUFDQyxXQUFXLENBQUM0SixRQUFRLENBQUM7SUFDekNqRSxLQUFLLENBQUNkLElBQUksQ0FBQ2pLLElBQUksQ0FBQyxDQUFDK04sTUFBTSxHQUFHLEtBQUs7SUFDL0JXLGFBQWEsQ0FBQ3pFLElBQUksQ0FBQztFQUN2QixDQUFDO0VBRUQsSUFBTTZGLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSTFJLElBQUksRUFBQzRILFFBQVEsRUFBQy9FLElBQUksRUFBSztJQUMxQ2tGLGlCQUFpQixDQUFDLENBQUM7SUFDbkIsSUFBTXpKLE1BQU0sR0FBR2dJLGtEQUFNLENBQUNwRyxTQUFTLENBQUNGLElBQUksQ0FBQztJQUNyQyxJQUFNeUUsUUFBUSxHQUFHc0YseUJBQXlCLENBQUMvSixJQUFJLENBQUNzRSxXQUFXLEVBQUNoRyxNQUFNLENBQUM7SUFDbkVzSixRQUFRLENBQUNDLEtBQUssQ0FBQzVELEdBQUcsR0FBR1EsUUFBUSxDQUFDUixHQUFHO0lBQ2pDMkQsUUFBUSxDQUFDQyxLQUFLLENBQUNqSixJQUFJLEdBQUc2RixRQUFRLENBQUM3RixJQUFJO0lBQ25DZ0osUUFBUSxDQUFDQyxLQUFLLENBQUNtQyxNQUFNLEdBQUcsRUFBRTtJQUMxQnJHLEtBQUssQ0FBQ2lFLFFBQVEsQ0FBQ2xLLEVBQUUsQ0FBQyxDQUFDWSxNQUFNLEdBQUdBLE1BQU07SUFDbENxRixLQUFLLENBQUNpRSxRQUFRLENBQUNsSyxFQUFFLENBQUMsQ0FBQ2dKLFVBQVUsR0FBRzdELElBQUksQ0FBQzZCLFdBQVc7SUFDaERmLEtBQUssQ0FBQ2lFLFFBQVEsQ0FBQ2xLLEVBQUUsQ0FBQyxDQUFDaUosTUFBTSxHQUFHLElBQUk7SUFDaENpQixRQUFRLENBQUNoTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBQ2lCLENBQUM7TUFBQSxPQUFLaU0sUUFBUSxDQUFDak0sQ0FBQyxDQUFDc0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUN5QyxJQUFJLENBQUM7SUFBQSxFQUFDO0lBQ3pGLElBQU1xRixLQUFLLEdBQUduTSxRQUFRLENBQUNpTSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7SUFDaERFLEtBQUssQ0FBQy9TLE9BQU8sQ0FBQyxVQUFDNkssSUFBSSxFQUFLO01BQ3BCQSxJQUFJLENBQUM0SixXQUFXLENBQUM1SixJQUFJLENBQUM2SixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0lBQ0ZwRCxPQUFPLEdBQUcsS0FBSztJQUNmUSxrQkFBa0IsQ0FBQyxDQUFDO0VBQ3hCLENBQUM7RUFFRCxJQUFNOEMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QkEsQ0FBSTFGLElBQUksRUFBQy9GLE1BQU0sRUFBSztJQUMvQyxJQUFNTSxJQUFJLEdBQUlOLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQytGLElBQUksR0FBRSxJQUFJO0lBQ2xDLElBQU1KLEdBQUcsR0FBSTNGLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQytGLElBQUksR0FBRSxJQUFJO0lBQ2pDLE9BQU87TUFDSHpGLElBQUksRUFBSkEsSUFBSTtNQUNKcUYsR0FBRyxFQUFIQTtJQUNKLENBQUM7RUFDTCxDQUFDO0VBRUQsSUFBTW1ELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztJQUM3QmpKLE9BQU8sQ0FBQ2xDLFNBQVMsR0FBRyxFQUFFO0lBQ3RCLElBQU1nTyxZQUFZLEdBQUdsTyxRQUFRLENBQUNJLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDckQ4TixZQUFZLENBQUM3TixTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUM5QzROLFlBQVksQ0FBQzFOLFdBQVcsR0FBRyxRQUFRO0lBQ25DLE9BQU8wTixZQUFZO0VBQ3ZCLENBQUM7RUFFRCxJQUFNMUMsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUEsRUFBUztJQUNqQlgsUUFBUSxDQUFDLENBQUM7SUFDVkosUUFBUSxDQUFDLENBQUM7SUFDVnJJLE9BQU8sQ0FBQ2xDLFNBQVMsR0FBRyxFQUFFO0VBQzFCLENBQUM7RUFHRCxJQUFNdU0sVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUkwQixPQUFPLEVBQUNDLEdBQUcsRUFBSztJQUNoQyxJQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ3ROLGdCQUFnQixDQUFDLFdBQVcsRUFBQyxVQUFDaUIsQ0FBQyxFQUFLO01BQ3RELElBQU1tQyxJQUFJLEdBQUduQyxDQUFDLENBQUNzQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDdEMsSUFBTTlCLE1BQU0sR0FBR2dJLGtEQUFNLENBQUNwRyxTQUFTLENBQUNGLElBQUksQ0FBQztNQUNyQyxJQUFNcUssR0FBRyxHQUFHTix5QkFBeUIsQ0FBQy9KLElBQUksQ0FBQ3NFLFdBQVcsRUFBQ2hHLE1BQU0sQ0FBQztNQUM5RCxJQUFHMEIsSUFBSSxDQUFDNUQsU0FBUyxDQUFDa08sUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ25DSCxHQUFHLENBQUMvTixTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7TUFDdEMsQ0FBQyxNQUFNO1FBQ0g4TixHQUFHLENBQUMvTixTQUFTLENBQUMwRixNQUFNLENBQUMsZUFBZSxDQUFDO01BQ3pDO01BQ0FxSSxHQUFHLENBQUN0QyxLQUFLLENBQUM1RCxHQUFHLEdBQUdvRyxHQUFHLENBQUNwRyxHQUFHO01BQ3ZCa0csR0FBRyxDQUFDdEMsS0FBSyxDQUFDakosSUFBSSxHQUFHeUwsR0FBRyxDQUFDekwsSUFBSTtJQUM3QixDQUFDLENBQUM7SUFDRixPQUFPd0wsS0FBSztFQUNoQixDQUFDO0VBRUQsT0FBTztJQUNIcEQscUJBQXFCLEVBQXJCQTtFQUNKLENBQUM7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxhY2VtZW50Qm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCBiYXR0bGVzaGlwSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgU0hJUF9JTUFHRVMgPSB7XG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAgIGxldCBvbk5leHQ7XG4gICAgbGV0IG9uV2luO1xuICAgIGxldCBtb3ZlUmVhZHkgPSB0cnVlO1xuXG4gICAgY29uc3QgZHJhd01haW5NZW51ID0gKHNpbmdsZUluaXRpYWxpc2UsIGRvdWJsZUluaXRpYWxpc2UpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgbWVudVBhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51UGFuLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudScpXG4gICAgICAgIGNvbnN0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lVGl0bGUuY2xhc3NMaXN0LmFkZCgnZ2FtZS10aXRsZScpO1xuICAgICAgICBnYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcHMhJ1xuICAgICAgICBtZW51UGFuLmFwcGVuZENoaWxkKGdhbWVUaXRsZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudVBhbik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25CYXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWJhcicpXG4gICAgICAgIGNvbnN0IHN0YXJ0U2luZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0U2luZ2xlLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJylcbiAgICAgICAgY29uc3Qgc3RhcnREb3VibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhcnREb3VibGUuY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKVxuICAgICAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc3RhcnRTaW5nbGUpO1xuICAgICAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc3RhcnREb3VibGUpO1xuICAgICAgICBtZW51UGFuLmFwcGVuZENoaWxkKGJ1dHRvbkJhcik7XG4gICAgICAgIHN0YXJ0U2luZ2xlLnRleHRDb250ZW50ID0gJ1NpbmdsZSBQbGF5ZXInO1xuICAgICAgICBzdGFydERvdWJsZS50ZXh0Q29udGVudCA9ICdUd28gUGxheWVyJztcbiAgICAgICAgc3RhcnRTaW5nbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGdldE5hbWUoc2luZ2xlSW5pdGlhbGlzZSkpO1xuICAgICAgICBzdGFydERvdWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgZ2V0TmFtZSgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGdldE5hbWUoKHNlY29uZE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlSW5pdGlhbGlzZShuYW1lLHNlY29uZE5hbWUpO1xuICAgICAgICAgICAgICAgIH0sICd0d28nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoY2IsIHN0cmluZyA9ICdvbmUnKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBuYW1lXCIpO1xuICAgICAgICBjb25zdCBuYW1lRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIG5hbWVEaWFsb2cuY2xhc3NMaXN0LmFkZCgnZ2V0LW5hbWUnKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChuYW1lRGlhbG9nKTtcbiAgICAgICAgbmFtZURpYWxvZy5zaG93KCk7XG4gICAgICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduYW1lLWlucHV0Jyk7XG4gICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IGBBZG1pcmFsICR7c3RyaW5nfSBuYW1lOiBgXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcbiAgICAgICAgY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuYW1lU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgbmFtZURpYWxvZy5hcHBlbmRDaGlsZChuYW1lRm9ybSk7XG4gICAgICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVTdWJtaXQpO1xuICAgICAgICBuYW1lU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2dldC1uYW1lLXN1Ym1pdCcpO1xuICAgICAgICBuYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKG5hbWVJbnB1dC52YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGNiKG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgbmFtZURpYWxvZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5hbWVEaWFsb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gICBcblxuICAgIGNvbnN0IHByaW50U3RyaW5nID0gKHRvUHJpbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWJhcicpO1xuICAgICAgICBzaGlwQmFyLnRleHRDb250ZW50ID0gdG9QcmludDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRCYXR0bGVzaGlwQ29vcmRzID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCB4TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb29yZHNbMF0rNjUpO1xuICAgICAgICByZXR1cm4gYCR7eExldHRlcn0ke2Nvb3Jkc1sxXSsxfWBcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwU2NyZWVuU2V0dXAgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke25hbWV9IHBsYWNlIHlvdXIgc2hpcHMhYDtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncGxhY2Utc2hpcHMtdGl0bGUnKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5pZCA9ICdsZWZ0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGNvbnN0IHNoaXBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcGJhci5pZCA9ICdzaGlwLWJhcic7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2hpcGJhcik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1JlYWR5U2NyZWVuID0gKHBsYXllcixuZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IHJlYWR5RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGNvbnN0IHJlYWR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCByZWFkeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZWFkeURpYWxvZy5jbGFzc0xpc3QuYWRkKCdyZWFkeS1kaWFsb2cnKTtcbiAgICAgICAgcmVhZHlUZXh0LmNsYXNzTGlzdC5hZGQoJ3JlYWR5LXRleHQnKTtcbiAgICAgICAgcmVhZHlCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVhZHktYnV0dG9uJyk7XG4gICAgICAgIHJlYWR5VGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllci5pZH0ncyB0dXJuIWA7XG4gICAgICAgIHJlYWR5QnV0dG9uLnRleHRDb250ZW50ID0gJ1JlYWR5JztcbiAgICAgICAgcmVhZHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZWFkeURpYWxvZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlYWR5RGlhbG9nKTtcbiAgICAgICAgICAgIHJlZnJlc2gobmV4dCxwbGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZHlEaWFsb2cuYXBwZW5kQ2hpbGQocmVhZHlUZXh0KVxuICAgICAgICByZWFkeURpYWxvZy5hcHBlbmRDaGlsZChyZWFkeUJ1dHRvbilcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyZWFkeURpYWxvZylcbiAgICAgICAgcmVhZHlEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZVNjcmVlblNldHVwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnQuaWQgPSAnbGVmdCc7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0LmlkID0gJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICAgICAgY29uc3Qgc2hpcGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwYmFyLmlkID0gJ3NoaXAtYmFyJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaGlwYmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGdldFRhcmdldChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3ZlUmVhZHkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBtb3ZlUmVhZHkgPSBnYW1lYm9hcmQub3Bwb25lbnQubWFrZU1vdmUodGlsZSwgZ2FtZWJvYXJkKVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdEdW1teUFjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdSZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyYXdTaGlwcyhnYW1lYm9hcmQsZ2FtZWJvYXJkLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3SGlkZGVuUmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgLy9kcmF3IHRoZSB0aWxlcyB0byBtYWludGFpbiBzaXplIGNvbnNpc3RlbmN5XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZGRlbi50ZXh0Q29udGVudCA9IFwiRGF0YSBFbmNyeXB0ZWQuLi5cIlxuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJvYXJkJyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGhpZGRlbilcbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoID0gKGN1cnJlbnQscHJldmlvdXMpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHJlY29uQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpO1xuICAgICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZWNvbkFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghY3VycmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIGRyYXdBY3RpdmVCb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1JlY29uQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd0R1bW15QWN0aXZlQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhwcmV2aW91cy5nYW1lYm9hcmQscHJldmlvdXMuZ2FtZWJvYXJkLmlkKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIG1vdmVSZWFkeSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBnZXRCYXR0bGVzaGlwQ29vcmRzKGNvb3Jkcyk7XG4gICAgICAgIHByaW50U3RyaW5nKGBDb21wdXRlciBhdHRhY2tzICR7Y29vcmRTdHJpbmd9Li4uYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtjb29yZFN0cmluZ30gaXMgYSAke2dhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSl9IWApLDUwMClcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja3NcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzdGFsbE5leHRUdXJuID0gYXdhaXQgc3RhbGxDb21wdXRlck1vdmUoKTtcbiAgICAgICAgc3RhbGxOZXh0VHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYXllck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBnZXRCYXR0bGVzaGlwQ29vcmRzKGNvb3Jkcyk7XG4gICAgICAgIHByaW50U3RyaW5nKGAke2dhbWVib2FyZC5vcHBvbmVudC5pZH0gYXR0YWNrcyAke2Nvb3JkU3RyaW5nfS4uLmApO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJpbnRTdHJpbmcoYCR7Y29vcmRTdHJpbmd9IGlzIGEgJHtnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pfSFgKSw1MDApXG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzaG93UGxheWVyc1R1cm4gPSBhd2FpdCBzaG93UGxheWVyUmVzdWx0KCk7XG4gICAgICAgIHNob3dQbGF5ZXJzVHVybigpO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHN1bmtTaGlwID0gKHNoaXAsIG5hbWUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtuYW1lfSdzICR7c2hpcC5uYW1lfSBoYXMgYmVlbiBzdW5rIWApLDI1MDApO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dQbGF5ZXJSZXN1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsYXllclJlc3VsdFRpbWVyID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJSZXN1bHRUaW1lclxuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFsbENvbXB1dGVyTW92ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJGaW5pc2hlZCA9IGF3YWl0IHByb21pc2lmeShvbk5leHQsIDIwMDApO1xuICAgICAgICBtb3ZlUmVhZHkgPSB0cnVlO1xuICAgICAgICByZXR1cm4gY29tcHV0ZXJGaW5pc2hlZFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBwcm9taXNpZnkgPSAoY2FsbGJhY2ssdGltZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKGNhbGxiYWNrKSwgdGltZXIpKTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkLG9uYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBnYW1lYm9hcmQuZ2V0U2hpcHMoKTtcbiAgICAgICAgY29uc3QgcGxheXpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmJvYXJkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uKHBsYXl6b25lLCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCksIHNoaXApXG4gICAgICAgICAgICBwbGF5em9uZS5hcHBlbmRDaGlsZChkcmF3U2hpcChkaW1lbnNpb25zKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1NoaXAgPSAoZGltZW5zaW9ucykgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcC1tYXJrZXInKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxgdG9wOiR7ZGltZW5zaW9ucy50b3B9O2xlZnQ6JHtkaW1lbnNpb25zLmxlZnR9O3dpZHRoOiR7ZGltZW5zaW9ucy5sZW5ndGh9O2hlaWdodDoke2RpbWVuc2lvbnMuaGVpZ2h0fWApO1xuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIGNvbnN0IGNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uID0gKHpvbmUsIHNjYWxlICxzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB6b25lLm9mZnNldFdpZHRoIC8gc2NhbGU7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMF0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKHNoaXAucG9zaXRpb25bMF1bMV0gKiB1bml0KSsncHgnO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLm9yaWVudGF0aW9uID8gc2hpcC5sZW5ndGggKiB1bml0IDogdW5pdCA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0IDogc2hpcC5sZW5ndGggKiB1bml0IDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICBsZW5ndGg6bGVuZ3RoKydweCcsXG4gICAgICAgICAgICBoZWlnaHQ6aGVpZ2h0KydweCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhcmdldCA9IChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKCFidXR0b24pIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gYnV0dG9uO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIC8vIEZpbmQgdGhlIGNvb3JkaW5hdGVzIHRocm91Z2ggdGhlIGVsZW1lbnRzIHBvc2l0aW9uIGFtb25nc3QgaXRzIHNpYmxpbmdzXG4gICAgICAgIGNvbnN0IHkgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJvYXJkLmNoaWxkcmVuLHBhcmVudCk7XG4gICAgICAgIGNvbnN0IHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbix0YXJnZXQpO1xuICAgICAgICByZXR1cm4gW3gseV1cbiAgICB9XG5cbiAgICBjb25zdCBlbmRHYW1lID0gKHdpbm5lcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyICcsIHdpbm5lciwgJyBpcyB2aWN0b3Jpb3VzIScpXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IHZpY3RvcnlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHZpY3RvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZpY3RvcnlUZXh0LnRleHRDb250ZW50ID0gYEdhbWUgb3ZlciEgJHt3aW5uZXJ9IGlzIHZpY3RvcmlvdXMhYDtcbiAgICAgICAgY29uc3QgdmljdG9yeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLnRleHRDb250ZW50ID0gYE1haW4gTWVudWA7XG4gICAgICAgIHZpY3RvcnlNZW51LmNsYXNzTGlzdC5hZGQoJ3ZpY3RvcnktbWVudScpO1xuICAgICAgICB2aWN0b3J5VGV4dC5jbGFzc0xpc3QuYWRkKCd2aWN0b3J5LXRleHQnKTtcbiAgICAgICAgdmljdG9yeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbicpO1xuICAgICAgICB2aWN0b3J5TWVudS5hcHBlbmRDaGlsZCh2aWN0b3J5VGV4dCk7XG4gICAgICAgIHZpY3RvcnlNZW51LmFwcGVuZENoaWxkKHZpY3RvcnlCdXR0b24pO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHZpY3RvcnlNZW51KTtcbiAgICAgICAgdmljdG9yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luKTtcbiAgICB9XG5cblxuXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRyYXdTaGlwcyxcbiAgICAgICAgZ2FtZVNjcmVlblNldHVwLFxuICAgICAgICBzaGlwU2NyZWVuU2V0dXAsXG4gICAgICAgIHJlbmRlckNvbXB1dGVyTW92ZSxcbiAgICAgICAgZW5kR2FtZSxcbiAgICAgICAgZ2V0VGFyZ2V0LFxuICAgICAgICByZWZyZXNoLFxuICAgICAgICBzdW5rU2hpcCxcbiAgICAgICAgcmVuZGVyUGxheWVyTW92ZSxcbiAgICAgICAgZHJhd01haW5NZW51LFxuICAgICAgICBzaG93UmVhZHlTY3JlZW4sXG4gICAgICAgIHNldCBvbk5leHQobmV4dFR1cm4pIHtcbiAgICAgICAgICAgIG9uTmV4dCA9IG5leHRUdXJuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25XaW4od2luKSB7XG4gICAgICAgICAgICBvbldpbiA9IHdpbjtcbiAgICAgICAgfSxcbiAgICB9XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobmFtZSA9IG51bGwpID0+IHtcbiAgICBsZXQgaGl0Q291bnRlciA9IDA7XG5cbiAgICBsZXQgb3JpZW50YXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAhb3JpZW50YXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgU0hJUF9TSVpFUyA9IHtcbiAgICAgICAgY2FycmllcjogNSxcbiAgICAgICAgYmF0dGxlc2hpcDogNCxcbiAgICAgICAgY3J1aXNlcjogMyxcbiAgICAgICAgc3VibWFyaW5lOiAzLFxuICAgICAgICBkZXN0cm95ZXI6IDIsXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRDb3VudGVyKytcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoaGl0Q291bnRlciA+PSBTSElQX1NJWkVTW25hbWVdKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpdCxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBwb3NpdGlvbjpbXSxcbiAgICAgICAgZ2V0IG9yaWVudGF0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9yaWVudGF0aW9uKG9yKSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IG9yO1xuICAgICAgICB9LFxuICAgICAgICByb3RhdGUsXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXllZE5hbWUgPSBuYW1lLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGFycmF5ZWROYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXllZE5hbWUuam9pbignJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gU0hJUF9TSVpFU1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgU2NyZWVuIGZyb20gXCIuL3NjcmVlbi5qc1wiXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiXG5pbXBvcnQgeyBTSElQX0lNQUdFUyB9IGZyb20gXCIuL3NjcmVlbi5qc1wiXG5cbmV4cG9ydCBjb25zdCBQbGFjZW1lbnRCb2FyZCA9IChnYW1lYm9hcmQsIG9uRmluaXNoKSA9PiB7XG4gICAgbGV0IHBsYWNpbmcgPSBmYWxzZTtcbiAgICBjb25zdCBzaGlwQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtYmFyJyk7XG5cbiAgICBjb25zdCBzaGlwcyA9IHtcbiAgICAgICAgY2Fycmllcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6NSxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYmF0dGxlc2hpcDp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6NCxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgY3J1aXNlcjp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MyxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3VibWFyaW5lOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDozLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95ZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjIsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXRTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKHNoaXApO1xuICAgICAgICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLHNoaXBzW3NoaXBdLmNvb3Jkc1swXSxzaGlwc1tzaGlwXS5jb29yZHNbMV0sc2hpcHNbc2hpcF0uaG9yaXpvbnRhbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1BsYWNlbWVudEJvYXJkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuaWQgPSBgJHtqfS0ke2l9YDtcbiAgICAgICAgICAgICAgICB0aWxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdwb3NpdGlvbjpyZWxhdGl2ZTsnKVxuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYWNlbWVudFNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgZHJhd1BsYWNlbWVudEJvYXJkKCk7XG4gICAgICAgIGRyYXdOZXh0U2hpcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dFNoaXAgPSBtYWtlTmV4dFNoaXBCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV4dFNoaXAgPyBuZXh0U2hpcCA6IHJlbmRlclN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICBpZiAobmV4dFNoaXApIHtidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHNoaXBCYXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBtYWtlU2hpcChidXR0b24pO1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwLHNoaXBzW3NoaXBdKTtcbiAgICAgICAgfSk7fSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEJhci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyU2hpcEJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2Utc2hpcCcpO1xuICAgICAgICBpZiAoZXhpc3RpbmcpIGV4aXN0aW5nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXhpc3RpbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VOZXh0U2hpcEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXBzW2tleV0ucGxhY2VkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRleHQgPSBTdHJpbmcoJ1BsYWNlICcrIGtleSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pZCA9IGtleTtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlU2hpcCA9IChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoYnV0dG9uLmlkKTtcbiAgICAgICAgc2hpcC5yb3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUZW1wbGF0ZSA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRlbXBsYXRlLmlkID0gc2hpcC5uYW1lO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtTSElQX0lNQUdFU1tzaGlwLm5hbWVdfWA7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgc2hpcEJhci5xdWVyeVNlbGVjdG9yQWxsKCcucm90YXRlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiBzaGlwQmFyLnJlbW92ZUNoaWxkKGJ1dHRvbikpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVJvdGF0ZUJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1JPVEFURSc7XG4gICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cblxuICAgIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAoc2hpcCkgPT4ge1xuICAgICAgICBwbGFjaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZVRlbXBsYXRlKHNoaXApO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgcmVuZGVyU2hpcCh0ZW1wbGF0ZSx0aWxlc1swXS5vZmZzZXRXaWR0aCxzaGlwKTtcbiAgICAgICAgY29uc3QgaWxsZWdhbFNxdWFyZXMgPSBmaW5kSWxsZWdhbFNxdWFyZXMoc2hpcCk7XG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IGNyZWF0ZVJvdGF0ZUJ1dHRvbigpO1xuICAgICAgICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZU1hcmtlcih0ZW1wbGF0ZSk7XG4gICAgICAgICAgICByb3RhdGVTaGlwKHNoaXApO1xuICAgICAgICB9KVxuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICBob3ZlckltYWdlKHRpbGUsdGVtcGxhdGUpO1xuICAgICAgICAgICAgaWYgKGlsbGVnYWxTcXVhcmVzLmluY2x1ZGVzKHRpbGUuaWQpKSB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdpbGxlZ2FsJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2lsbGVnYWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcGxhY2VUZW1wbGF0ZShlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpLHRlbXBsYXRlLHNoaXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRJbGxlZ2FsU3F1YXJlcyA9IChzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGlsbGVnYWxTcXVhcmVzID0gW107XG4gICAgICAgIC8vIEZpbmQgb3V0IG9mIGJvdW5kIHNxdWFyZXNcbiAgICAgICAgZm9yICggbGV0IGkgPSAwIDsgaSA8IGdhbWVib2FyZC5nZXRMZW5ndGgoKSA7IGkrKyApIHtcbiAgICAgICAgICAgIGZvciAoIGxldCBqID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpIC0gKHNoaXAubGVuZ3RoIC0gMSk7IGogPCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb29iTW92ZSA9IHNoaXAub3JpZW50YXRpb24gPyBbaixpXSA6IFtpLGpdIDtcbiAgICAgICAgICAgICAgICBpbGxlZ2FsU3F1YXJlcy5wdXNoKG9vYk1vdmUuam9pbignLScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL0dldCBzcGFjZXMgdGhhdCBhcmUgb2JzdHJ1Y3RlZCBieSBhbm90aGVyIHNoaXBcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNoaXBzKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZVNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGlmICghc2hpcHNba2V5XS5wbGFjZWQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgaWxsTW92ZXMgPSBnZXRPY2N1cGllZFNwYWNlcyhzaGlwc1trZXldKTtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5UG9pbnRlciA9IHNoaXAub3JpZW50YXRpb24gPyAwIDogMTsgXG4gICAgICAgICAgICBpbGxNb3Zlcy5mb3JFYWNoKChzcGFjZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNwYWNlU2V0LmFkZChzcGFjZS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIGZvciggbGV0IGkgPSAwIDsgaSA8IHNoaXAubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3BhY2UgPSBbLi4uc3BhY2VdO1xuICAgICAgICAgICAgICAgICAgICBuZXh0U3BhY2VbYXJyYXlQb2ludGVyXSA9IG5leHRTcGFjZVthcnJheVBvaW50ZXJdIC0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRTcGFjZVthcnJheVBvaW50ZXJdIDwgMCkgY29udGludWUgOyBcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VTZXQuYWRkKG5leHRTcGFjZS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3BhY2VTZXQuZm9yRWFjaCgoY29vcmQpID0+IGlsbGVnYWxTcXVhcmVzLnB1c2goY29vcmQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWxsZWdhbFNxdWFyZXM7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0T2NjdXBpZWRTcGFjZXMgPSAobWFya2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwYWNlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29uc3QgYXJyYXlQb2ludGVyID0gbWFya2VyLmhvcml6b250YWwgPyAwIDogMSA7XG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBtYXJrZXIubGVuZ3RoIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENvb3JkID0gWy4uLm1hcmtlci5jb29yZHNdO1xuICAgICAgICAgICAgY3VycmVudENvb3JkW2FycmF5UG9pbnRlcl0gPSBjdXJyZW50Q29vcmRbYXJyYXlQb2ludGVyXSArIGk7XG4gICAgICAgICAgICBzcGFjZXMuYWRkKGN1cnJlbnRDb29yZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwYWNlcztcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTaGlwID0gKGltYWdlLHVuaXQsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHNoaXAub3JpZW50YXRpb24gPyAodW5pdCpzaGlwLmxlbmd0aCkrJ3B4JyA6IHVuaXQrJ3B4JztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgKydweCc6ICh1bml0KnNoaXAubGVuZ3RoKSsncHgnO1xuICAgICAgICBpbWFnZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlTWFya2VyID0gKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICBjb25zdCB0aWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlJyk7XG4gICAgICAgIHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVwbGFjZVdpdGgodGlsZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHJvdGF0ZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBzaGlwLnJvdGF0ZSgpO1xuICAgICAgICBzaGlwUGxhY2VtZW50KHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IG1vdmVTaGlwID0gKHRlbXBsYXRlLHNoaXApID0+IHtcbiAgICAgICAgaWYgKHBsYWNpbmcpIHJldHVybjtcbiAgICAgICAgY2xlYXJTaGlwQmFyKCk7XG4gICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICBzaGlwc1tzaGlwLm5hbWVdLnBsYWNlZCA9IGZhbHNlO1xuICAgICAgICBzaGlwUGxhY2VtZW50KHNoaXApO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlVGVtcGxhdGUgPSAodGlsZSx0ZW1wbGF0ZSxzaGlwKSA9PiB7XG4gICAgICAgIGNsZWFyUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IFNjcmVlbi5nZXRUYXJnZXQodGlsZSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbih0aWxlLm9mZnNldFdpZHRoLGNvb3Jkcyk7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnRvcCA9IHBvc2l0aW9uLnRvcDtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLnpJbmRleCA9IDEwO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0uY29vcmRzID0gY29vcmRzO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0uaG9yaXpvbnRhbCA9IHNoaXAub3JpZW50YXRpb247XG4gICAgICAgIHNoaXBzW3RlbXBsYXRlLmlkXS5wbGFjZWQgPSB0cnVlO1xuICAgICAgICB0ZW1wbGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IG1vdmVTaGlwKGUudGFyZ2V0LmNsb3Nlc3QoJy5wbGFjZWhvbGRlcicpLHNoaXApKTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICB0aWxlLnJlcGxhY2VXaXRoKHRpbGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfSlcbiAgICAgICAgcGxhY2luZyA9IGZhbHNlO1xuICAgICAgICBkcmF3TmV4dFNoaXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVUZW1wbGF0ZVBvc2l0aW9uID0gKHVuaXQsY29vcmRzKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSAoY29vcmRzWzBdKnVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IHRvcCA9IChjb29yZHNbMV0qdW5pdCkrJ3B4JztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICB0b3BcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgc2hpcEJhci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtcGxhY2VtZW50Jyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTVUJNSVQnO1xuICAgICAgICByZXR1cm4gc3VibWl0QnV0dG9uXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBzZXRTaGlwcygpO1xuICAgICAgICBvbkZpbmlzaCgpO1xuICAgICAgICBzaGlwQmFyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuXG4gICAgY29uc3QgaG92ZXJJbWFnZSA9IChlbGVtZW50LGltZykgPT4ge1xuICAgICAgICBjb25zdCBldmVudCA9IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGlsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50aWxlJyk7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBTY3JlZW4uZ2V0VGFyZ2V0KHRpbGUpO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbih0aWxlLm9mZnNldFdpZHRoLGNvb3Jkcyk7XG4gICAgICAgICAgICBpZih0aWxlLmNsYXNzTGlzdC5jb250YWlucygnaWxsZWdhbCcpKSB7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ291dC1vZi1ib3VuZHMnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ291dC1vZi1ib3VuZHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSBwb3MudG9wO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSBwb3MubGVmdDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlclBsYWNlbWVudFNjcmVlbixcbiAgICB9XG59Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIlNoaXAiLCJiYXR0bGVzaGlwSW1hZ2UiLCJTSElQX0lNQUdFUyIsImJhdHRsZXNoaXAiLCJvbk5leHQiLCJvbldpbiIsIm1vdmVSZWFkeSIsImRyYXdNYWluTWVudSIsInNpbmdsZUluaXRpYWxpc2UiLCJkb3VibGVJbml0aWFsaXNlIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIm1lbnVQYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2FtZVRpdGxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbkJhciIsInN0YXJ0U2luZ2xlIiwic3RhcnREb3VibGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0TmFtZSIsInNlY29uZE5hbWUiLCJjYiIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lRGlhbG9nIiwic2hvdyIsIm5hbWVGb3JtIiwibmFtZUxhYmVsIiwic2V0QXR0cmlidXRlIiwiY29uY2F0IiwibmFtZUlucHV0IiwiaWQiLCJuYW1lU3VibWl0IiwicmVxdWlyZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJwcmludFN0cmluZyIsInRvUHJpbnQiLCJzaGlwQmFyIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRCYXR0bGVzaGlwQ29vcmRzIiwiY29vcmRzIiwieExldHRlciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInNoaXBTY3JlZW5TZXR1cCIsInRpdGxlIiwibGVmdCIsImdhbWVhcmVhIiwic2hpcGJhciIsInNob3dSZWFkeVNjcmVlbiIsInBsYXllciIsInJlYWR5RGlhbG9nIiwicmVhZHlUZXh0IiwicmVhZHlCdXR0b24iLCJyZWZyZXNoIiwic2hvd01vZGFsIiwiZ2FtZVNjcmVlblNldHVwIiwicmlnaHQiLCJkcmF3QWN0aXZlQm9hcmQiLCJnYW1lYm9hcmQiLCJ6b25lRG9tIiwiYm9hcmQiLCJzaXplIiwiZ2V0TGVuZ3RoIiwicm93Q29udGFpbmVyIiwiaiIsInRpbGUiLCJzcXVhcmVTdGF0dXMiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib3Bwb25lbnQiLCJtYWtlTW92ZSIsImRyYXdEdW1teUFjdGl2ZUJvYXJkIiwiZHJhd1JlY29uQm9hcmQiLCJkcmF3U2hpcHMiLCJkcmF3SGlkZGVuUmVjb25Cb2FyZCIsImhpZGRlbiIsImN1cnJlbnQiLCJwcmV2aW91cyIsImFjdGl2ZUFyZWEiLCJyZWNvbkFyZWEiLCJpc0NvbXAiLCJyZW5kZXJDb21wdXRlck1vdmUiLCJfcmVmIiwiX2NhbGxlZSIsImFjdGl2ZVpvbmUiLCJyb3ciLCJjZWxsIiwiY29vcmRTdHJpbmciLCJyZW1vdmVBdHRhY2tNYXJrZXIiLCJzdGFsbE5leHRUdXJuIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNoaWxkcmVuIiwicHJvbWlzaWZ5IiwicmVtb3ZlIiwic2V0VGltZW91dCIsInN0YWxsQ29tcHV0ZXJNb3ZlIiwiX3giLCJfeDIiLCJyZW5kZXJQbGF5ZXJNb3ZlIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJzdW5rU2hpcCIsInNoaXAiLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29tcHV0ZXJGaW5pc2hlZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImNhbGxiYWNrIiwidGltZXIiLCJvbmJvYXJkIiwic2hpcHMiLCJnZXRTaGlwcyIsInBsYXl6b25lIiwiZGltZW5zaW9ucyIsImNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uIiwiZHJhd1NoaXAiLCJ0b3AiLCJoZWlnaHQiLCJ6b25lIiwic2NhbGUiLCJ1bml0Iiwib2Zmc2V0V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJwb3NpdGlvbiIsIm9yaWVudGF0aW9uIiwiYnV0dG9uIiwicGFyZW50IiwieSIsIkFycmF5IiwiaW5kZXhPZiIsIngiLCJlbmRHYW1lIiwid2lubmVyIiwidmljdG9yeU1lbnUiLCJ2aWN0b3J5VGV4dCIsInZpY3RvcnlCdXR0b24iLCJuZXh0VHVybiIsIndpbiIsImhpdENvdW50ZXIiLCJyb3RhdGUiLCJTSElQX1NJWkVTIiwiY2FycmllciIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJoaXQiLCJpc1N1bmsiLCJvciIsImFycmF5ZWROYW1lIiwic3BsaXQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJTY3JlZW4iLCJQbGFjZW1lbnRCb2FyZCIsIm9uRmluaXNoIiwicGxhY2luZyIsImhvcml6b250YWwiLCJwbGFjZWQiLCJzZXRTaGlwcyIsIm5ld1NoaXAiLCJwbGFjZVNoaXAiLCJkcmF3UGxhY2VtZW50Qm9hcmQiLCJyZW5kZXJQbGFjZW1lbnRTY3JlZW4iLCJkcmF3TmV4dFNoaXBCdXR0b24iLCJuZXh0U2hpcCIsIm1ha2VOZXh0U2hpcEJ1dHRvbiIsInJlbmRlclN1Ym1pdEJ1dHRvbiIsIm1ha2VTaGlwIiwic2hpcFBsYWNlbWVudCIsInN1Ym1pdCIsImNsZWFyU2hpcEJhciIsImV4aXN0aW5nIiwiYnV0dG9uVGV4dCIsImNyZWF0ZVRlbXBsYXRlIiwidGVtcGxhdGUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNsZWFyUm90YXRlQnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZVJvdGF0ZUJ1dHRvbiIsInRpbGVzIiwicmVuZGVyU2hpcCIsImlsbGVnYWxTcXVhcmVzIiwiZmluZElsbGVnYWxTcXVhcmVzIiwicmVtb3ZlTWFya2VyIiwicm90YXRlU2hpcCIsImhvdmVySW1hZ2UiLCJpbmNsdWRlcyIsInBsYWNlVGVtcGxhdGUiLCJvb2JNb3ZlIiwiX2xvb3AiLCJzcGFjZVNldCIsIlNldCIsImlsbE1vdmVzIiwiZ2V0T2NjdXBpZWRTcGFjZXMiLCJhcnJheVBvaW50ZXIiLCJzcGFjZSIsIm5leHRTcGFjZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImNvb3JkIiwiX3JldCIsIm1hcmtlciIsInNwYWNlcyIsImN1cnJlbnRDb29yZCIsImltYWdlIiwid2lkdGgiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsIm1vdmVTaGlwIiwiY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbiIsInpJbmRleCIsInN1Ym1pdEJ1dHRvbiIsImVsZW1lbnQiLCJpbWciLCJldmVudCIsInBvcyIsImNvbnRhaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==