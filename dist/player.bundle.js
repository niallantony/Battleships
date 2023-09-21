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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFSLE1BQUEsQ0FBQUksY0FBQSxDQUFBQyxHQUFBLEVBQUFDLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFmLEdBQUEsQ0FBQUMsR0FBQSxXQUFBVyxNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQUgsR0FBQSxDQUFBQyxHQUFBLElBQUFFLEtBQUEsZ0JBQUFjLEtBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsUUFBQUMsY0FBQSxHQUFBSCxPQUFBLElBQUFBLE9BQUEsQ0FBQXZCLFNBQUEsWUFBQTJCLFNBQUEsR0FBQUosT0FBQSxHQUFBSSxTQUFBLEVBQUFDLFNBQUEsR0FBQTdCLE1BQUEsQ0FBQThCLE1BQUEsQ0FBQUgsY0FBQSxDQUFBMUIsU0FBQSxHQUFBOEIsT0FBQSxPQUFBQyxPQUFBLENBQUFOLFdBQUEsZ0JBQUF0QixjQUFBLENBQUF5QixTQUFBLGVBQUFyQixLQUFBLEVBQUF5QixnQkFBQSxDQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxNQUFBRixTQUFBLGFBQUFLLFNBQUFDLEVBQUEsRUFBQTlCLEdBQUEsRUFBQStCLEdBQUEsbUJBQUFDLElBQUEsWUFBQUQsR0FBQSxFQUFBRCxFQUFBLENBQUFHLElBQUEsQ0FBQWpDLEdBQUEsRUFBQStCLEdBQUEsY0FBQWYsR0FBQSxhQUFBZ0IsSUFBQSxXQUFBRCxHQUFBLEVBQUFmLEdBQUEsUUFBQXZCLE9BQUEsQ0FBQXdCLElBQUEsR0FBQUEsSUFBQSxNQUFBaUIsZ0JBQUEsZ0JBQUFYLFVBQUEsY0FBQVksa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsaUJBQUEsT0FBQXpCLE1BQUEsQ0FBQXlCLGlCQUFBLEVBQUEvQixjQUFBLHFDQUFBZ0MsUUFBQSxHQUFBM0MsTUFBQSxDQUFBNEMsY0FBQSxFQUFBQyx1QkFBQSxHQUFBRixRQUFBLElBQUFBLFFBQUEsQ0FBQUEsUUFBQSxDQUFBRyxNQUFBLFFBQUFELHVCQUFBLElBQUFBLHVCQUFBLEtBQUE5QyxFQUFBLElBQUFHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQU8sdUJBQUEsRUFBQWxDLGNBQUEsTUFBQStCLGlCQUFBLEdBQUFHLHVCQUFBLE9BQUFFLEVBQUEsR0FBQU4sMEJBQUEsQ0FBQXhDLFNBQUEsR0FBQTJCLFNBQUEsQ0FBQTNCLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBWSxpQkFBQSxZQUFBTSxzQkFBQS9DLFNBQUEsZ0NBQUFnRCxPQUFBLFdBQUFDLE1BQUEsSUFBQWpDLE1BQUEsQ0FBQWhCLFNBQUEsRUFBQWlELE1BQUEsWUFBQWQsR0FBQSxnQkFBQWUsT0FBQSxDQUFBRCxNQUFBLEVBQUFkLEdBQUEsc0JBQUFnQixjQUFBdkIsU0FBQSxFQUFBd0IsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxRQUFBQyxNQUFBLEdBQUF2QixRQUFBLENBQUFMLFNBQUEsQ0FBQXFCLE1BQUEsR0FBQXJCLFNBQUEsRUFBQU8sR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQXFCLE1BQUEsR0FBQUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBNUIsS0FBQSxHQUFBa0QsTUFBQSxDQUFBbEQsS0FBQSxTQUFBQSxLQUFBLGdCQUFBbUQsT0FBQSxDQUFBbkQsS0FBQSxLQUFBTixNQUFBLENBQUFvQyxJQUFBLENBQUE5QixLQUFBLGVBQUE2QyxXQUFBLENBQUFFLE9BQUEsQ0FBQS9DLEtBQUEsQ0FBQW9ELE9BQUEsRUFBQUMsSUFBQSxXQUFBckQsS0FBQSxJQUFBOEMsTUFBQSxTQUFBOUMsS0FBQSxFQUFBK0MsT0FBQSxFQUFBQyxNQUFBLGdCQUFBbkMsR0FBQSxJQUFBaUMsTUFBQSxVQUFBakMsR0FBQSxFQUFBa0MsT0FBQSxFQUFBQyxNQUFBLFFBQUFILFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxFQUFBcUQsSUFBQSxXQUFBQyxTQUFBLElBQUFKLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXNELFNBQUEsRUFBQVAsT0FBQSxDQUFBRyxNQUFBLGdCQUFBSyxLQUFBLFdBQUFULE1BQUEsVUFBQVMsS0FBQSxFQUFBUixPQUFBLEVBQUFDLE1BQUEsU0FBQUEsTUFBQSxDQUFBQyxNQUFBLENBQUFyQixHQUFBLFNBQUE0QixlQUFBLEVBQUE1RCxjQUFBLG9CQUFBSSxLQUFBLFdBQUFBLE1BQUEwQyxNQUFBLEVBQUFkLEdBQUEsYUFBQTZCLDJCQUFBLGVBQUFaLFdBQUEsV0FBQUUsT0FBQSxFQUFBQyxNQUFBLElBQUFGLE1BQUEsQ0FBQUosTUFBQSxFQUFBZCxHQUFBLEVBQUFtQixPQUFBLEVBQUFDLE1BQUEsZ0JBQUFRLGVBQUEsR0FBQUEsZUFBQSxHQUFBQSxlQUFBLENBQUFILElBQUEsQ0FBQUksMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUFoQyxpQkFBQVYsT0FBQSxFQUFBRSxJQUFBLEVBQUFNLE9BQUEsUUFBQW1DLEtBQUEsc0NBQUFoQixNQUFBLEVBQUFkLEdBQUEsd0JBQUE4QixLQUFBLFlBQUFDLEtBQUEsc0RBQUFELEtBQUEsb0JBQUFoQixNQUFBLFFBQUFkLEdBQUEsU0FBQWdDLFVBQUEsV0FBQXJDLE9BQUEsQ0FBQW1CLE1BQUEsR0FBQUEsTUFBQSxFQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFBLEdBQUEsVUFBQWlDLFFBQUEsR0FBQXRDLE9BQUEsQ0FBQXNDLFFBQUEsTUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFDLG1CQUFBLENBQUFGLFFBQUEsRUFBQXRDLE9BQUEsT0FBQXVDLGNBQUEsUUFBQUEsY0FBQSxLQUFBL0IsZ0JBQUEsbUJBQUErQixjQUFBLHFCQUFBdkMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBbkIsT0FBQSxDQUFBeUMsSUFBQSxHQUFBekMsT0FBQSxDQUFBMEMsS0FBQSxHQUFBMUMsT0FBQSxDQUFBSyxHQUFBLHNCQUFBTCxPQUFBLENBQUFtQixNQUFBLDZCQUFBZ0IsS0FBQSxRQUFBQSxLQUFBLGdCQUFBbkMsT0FBQSxDQUFBSyxHQUFBLEVBQUFMLE9BQUEsQ0FBQTJDLGlCQUFBLENBQUEzQyxPQUFBLENBQUFLLEdBQUEsdUJBQUFMLE9BQUEsQ0FBQW1CLE1BQUEsSUFBQW5CLE9BQUEsQ0FBQTRDLE1BQUEsV0FBQTVDLE9BQUEsQ0FBQUssR0FBQSxHQUFBOEIsS0FBQSxvQkFBQVQsTUFBQSxHQUFBdkIsUUFBQSxDQUFBWCxPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxvQkFBQTBCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTZCLEtBQUEsR0FBQW5DLE9BQUEsQ0FBQTZDLElBQUEsbUNBQUFuQixNQUFBLENBQUFyQixHQUFBLEtBQUFHLGdCQUFBLHFCQUFBL0IsS0FBQSxFQUFBaUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBd0MsSUFBQSxFQUFBN0MsT0FBQSxDQUFBNkMsSUFBQSxrQkFBQW5CLE1BQUEsQ0FBQXBCLElBQUEsS0FBQTZCLEtBQUEsZ0JBQUFuQyxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXFCLE1BQUEsQ0FBQXJCLEdBQUEsbUJBQUFtQyxvQkFBQUYsUUFBQSxFQUFBdEMsT0FBQSxRQUFBOEMsVUFBQSxHQUFBOUMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBQSxNQUFBLEdBQUFtQixRQUFBLENBQUF6RCxRQUFBLENBQUFpRSxVQUFBLE9BQUFDLFNBQUEsS0FBQTVCLE1BQUEsU0FBQW5CLE9BQUEsQ0FBQXNDLFFBQUEscUJBQUFRLFVBQUEsSUFBQVIsUUFBQSxDQUFBekQsUUFBQSxlQUFBbUIsT0FBQSxDQUFBbUIsTUFBQSxhQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEVBQUFQLG1CQUFBLENBQUFGLFFBQUEsRUFBQXRDLE9BQUEsZUFBQUEsT0FBQSxDQUFBbUIsTUFBQSxrQkFBQTJCLFVBQUEsS0FBQTlDLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxPQUFBMkMsU0FBQSx1Q0FBQUYsVUFBQSxpQkFBQXRDLGdCQUFBLE1BQUFrQixNQUFBLEdBQUF2QixRQUFBLENBQUFnQixNQUFBLEVBQUFtQixRQUFBLENBQUF6RCxRQUFBLEVBQUFtQixPQUFBLENBQUFLLEdBQUEsbUJBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUFOLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxFQUFBTCxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxNQUFBeUMsSUFBQSxHQUFBdkIsTUFBQSxDQUFBckIsR0FBQSxTQUFBNEMsSUFBQSxHQUFBQSxJQUFBLENBQUFKLElBQUEsSUFBQTdDLE9BQUEsQ0FBQXNDLFFBQUEsQ0FBQVksVUFBQSxJQUFBRCxJQUFBLENBQUF4RSxLQUFBLEVBQUF1QixPQUFBLENBQUFtRCxJQUFBLEdBQUFiLFFBQUEsQ0FBQWMsT0FBQSxlQUFBcEQsT0FBQSxDQUFBbUIsTUFBQSxLQUFBbkIsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEdBQUEvQyxPQUFBLENBQUFzQyxRQUFBLFNBQUE5QixnQkFBQSxJQUFBeUMsSUFBQSxJQUFBakQsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEyQyxTQUFBLHNDQUFBaEQsT0FBQSxDQUFBc0MsUUFBQSxTQUFBOUIsZ0JBQUEsY0FBQTZDLGFBQUFDLElBQUEsUUFBQUMsS0FBQSxLQUFBQyxNQUFBLEVBQUFGLElBQUEsWUFBQUEsSUFBQSxLQUFBQyxLQUFBLENBQUFFLFFBQUEsR0FBQUgsSUFBQSxXQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUcsVUFBQSxHQUFBSixJQUFBLEtBQUFDLEtBQUEsQ0FBQUksUUFBQSxHQUFBTCxJQUFBLFdBQUFNLFVBQUEsQ0FBQUMsSUFBQSxDQUFBTixLQUFBLGNBQUFPLGNBQUFQLEtBQUEsUUFBQTdCLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxRQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxvQkFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsRUFBQWtELEtBQUEsQ0FBQVEsVUFBQSxHQUFBckMsTUFBQSxhQUFBekIsUUFBQU4sV0FBQSxTQUFBaUUsVUFBQSxNQUFBSixNQUFBLGFBQUE3RCxXQUFBLENBQUF1QixPQUFBLENBQUFtQyxZQUFBLGNBQUFXLEtBQUEsaUJBQUFqRCxPQUFBa0QsUUFBQSxRQUFBQSxRQUFBLFFBQUFDLGNBQUEsR0FBQUQsUUFBQSxDQUFBckYsY0FBQSxPQUFBc0YsY0FBQSxTQUFBQSxjQUFBLENBQUEzRCxJQUFBLENBQUEwRCxRQUFBLDRCQUFBQSxRQUFBLENBQUFkLElBQUEsU0FBQWMsUUFBQSxPQUFBRSxLQUFBLENBQUFGLFFBQUEsQ0FBQUcsTUFBQSxTQUFBQyxDQUFBLE9BQUFsQixJQUFBLFlBQUFBLEtBQUEsYUFBQWtCLENBQUEsR0FBQUosUUFBQSxDQUFBRyxNQUFBLE9BQUFqRyxNQUFBLENBQUFvQyxJQUFBLENBQUEwRCxRQUFBLEVBQUFJLENBQUEsVUFBQWxCLElBQUEsQ0FBQTFFLEtBQUEsR0FBQXdGLFFBQUEsQ0FBQUksQ0FBQSxHQUFBbEIsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsU0FBQUEsSUFBQSxDQUFBMUUsS0FBQSxHQUFBc0UsU0FBQSxFQUFBSSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxZQUFBQSxJQUFBLENBQUFBLElBQUEsR0FBQUEsSUFBQSxlQUFBQSxJQUFBLEVBQUFkLFVBQUEsZUFBQUEsV0FBQSxhQUFBNUQsS0FBQSxFQUFBc0UsU0FBQSxFQUFBRixJQUFBLGlCQUFBcEMsaUJBQUEsQ0FBQXZDLFNBQUEsR0FBQXdDLDBCQUFBLEVBQUFyQyxjQUFBLENBQUEyQyxFQUFBLG1CQUFBdkMsS0FBQSxFQUFBaUMsMEJBQUEsRUFBQXRCLFlBQUEsU0FBQWYsY0FBQSxDQUFBcUMsMEJBQUEsbUJBQUFqQyxLQUFBLEVBQUFnQyxpQkFBQSxFQUFBckIsWUFBQSxTQUFBcUIsaUJBQUEsQ0FBQTZELFdBQUEsR0FBQXBGLE1BQUEsQ0FBQXdCLDBCQUFBLEVBQUExQixpQkFBQSx3QkFBQWpCLE9BQUEsQ0FBQXdHLG1CQUFBLGFBQUFDLE1BQUEsUUFBQUMsSUFBQSx3QkFBQUQsTUFBQSxJQUFBQSxNQUFBLENBQUFFLFdBQUEsV0FBQUQsSUFBQSxLQUFBQSxJQUFBLEtBQUFoRSxpQkFBQSw2QkFBQWdFLElBQUEsQ0FBQUgsV0FBQSxJQUFBRyxJQUFBLENBQUFFLElBQUEsT0FBQTVHLE9BQUEsQ0FBQTZHLElBQUEsYUFBQUosTUFBQSxXQUFBdkcsTUFBQSxDQUFBNEcsY0FBQSxHQUFBNUcsTUFBQSxDQUFBNEcsY0FBQSxDQUFBTCxNQUFBLEVBQUE5RCwwQkFBQSxLQUFBOEQsTUFBQSxDQUFBTSxTQUFBLEdBQUFwRSwwQkFBQSxFQUFBeEIsTUFBQSxDQUFBc0YsTUFBQSxFQUFBeEYsaUJBQUEseUJBQUF3RixNQUFBLENBQUF0RyxTQUFBLEdBQUFELE1BQUEsQ0FBQThCLE1BQUEsQ0FBQWlCLEVBQUEsR0FBQXdELE1BQUEsS0FBQXpHLE9BQUEsQ0FBQWdILEtBQUEsYUFBQTFFLEdBQUEsYUFBQXdCLE9BQUEsRUFBQXhCLEdBQUEsT0FBQVkscUJBQUEsQ0FBQUksYUFBQSxDQUFBbkQsU0FBQSxHQUFBZ0IsTUFBQSxDQUFBbUMsYUFBQSxDQUFBbkQsU0FBQSxFQUFBWSxtQkFBQSxpQ0FBQWYsT0FBQSxDQUFBc0QsYUFBQSxHQUFBQSxhQUFBLEVBQUF0RCxPQUFBLENBQUFpSCxLQUFBLGFBQUF4RixPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLEVBQUEyQixXQUFBLGVBQUFBLFdBQUEsS0FBQUEsV0FBQSxHQUFBMkQsT0FBQSxPQUFBQyxJQUFBLE9BQUE3RCxhQUFBLENBQUE5QixJQUFBLENBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsR0FBQTJCLFdBQUEsVUFBQXZELE9BQUEsQ0FBQXdHLG1CQUFBLENBQUE5RSxPQUFBLElBQUF5RixJQUFBLEdBQUFBLElBQUEsQ0FBQS9CLElBQUEsR0FBQXJCLElBQUEsV0FBQUgsTUFBQSxXQUFBQSxNQUFBLENBQUFrQixJQUFBLEdBQUFsQixNQUFBLENBQUFsRCxLQUFBLEdBQUF5RyxJQUFBLENBQUEvQixJQUFBLFdBQUFsQyxxQkFBQSxDQUFBRCxFQUFBLEdBQUE5QixNQUFBLENBQUE4QixFQUFBLEVBQUFoQyxpQkFBQSxnQkFBQUUsTUFBQSxDQUFBOEIsRUFBQSxFQUFBcEMsY0FBQSxpQ0FBQU0sTUFBQSxDQUFBOEIsRUFBQSw2REFBQWpELE9BQUEsQ0FBQW9ILElBQUEsYUFBQUMsR0FBQSxRQUFBQyxNQUFBLEdBQUFwSCxNQUFBLENBQUFtSCxHQUFBLEdBQUFELElBQUEsZ0JBQUE1RyxHQUFBLElBQUE4RyxNQUFBLEVBQUFGLElBQUEsQ0FBQXRCLElBQUEsQ0FBQXRGLEdBQUEsVUFBQTRHLElBQUEsQ0FBQUcsT0FBQSxhQUFBbkMsS0FBQSxXQUFBZ0MsSUFBQSxDQUFBZixNQUFBLFNBQUE3RixHQUFBLEdBQUE0RyxJQUFBLENBQUFJLEdBQUEsUUFBQWhILEdBQUEsSUFBQThHLE1BQUEsU0FBQWxDLElBQUEsQ0FBQTFFLEtBQUEsR0FBQUYsR0FBQSxFQUFBNEUsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsV0FBQUEsSUFBQSxDQUFBTixJQUFBLE9BQUFNLElBQUEsUUFBQXBGLE9BQUEsQ0FBQWdELE1BQUEsR0FBQUEsTUFBQSxFQUFBZCxPQUFBLENBQUEvQixTQUFBLEtBQUF3RyxXQUFBLEVBQUF6RSxPQUFBLEVBQUErRCxLQUFBLFdBQUFBLE1BQUF3QixhQUFBLGFBQUFDLElBQUEsV0FBQXRDLElBQUEsV0FBQVYsSUFBQSxRQUFBQyxLQUFBLEdBQUFLLFNBQUEsT0FBQUYsSUFBQSxZQUFBUCxRQUFBLGNBQUFuQixNQUFBLGdCQUFBZCxHQUFBLEdBQUEwQyxTQUFBLE9BQUFhLFVBQUEsQ0FBQTFDLE9BQUEsQ0FBQTRDLGFBQUEsSUFBQTBCLGFBQUEsV0FBQWIsSUFBQSxrQkFBQUEsSUFBQSxDQUFBZSxNQUFBLE9BQUF2SCxNQUFBLENBQUFvQyxJQUFBLE9BQUFvRSxJQUFBLE1BQUFSLEtBQUEsRUFBQVEsSUFBQSxDQUFBZ0IsS0FBQSxjQUFBaEIsSUFBQSxJQUFBNUIsU0FBQSxNQUFBNkMsSUFBQSxXQUFBQSxLQUFBLFNBQUEvQyxJQUFBLFdBQUFnRCxVQUFBLFFBQUFqQyxVQUFBLElBQUFHLFVBQUEsa0JBQUE4QixVQUFBLENBQUF2RixJQUFBLFFBQUF1RixVQUFBLENBQUF4RixHQUFBLGNBQUF5RixJQUFBLEtBQUFuRCxpQkFBQSxXQUFBQSxrQkFBQW9ELFNBQUEsYUFBQWxELElBQUEsUUFBQWtELFNBQUEsTUFBQS9GLE9BQUEsa0JBQUFnRyxPQUFBQyxHQUFBLEVBQUFDLE1BQUEsV0FBQXhFLE1BQUEsQ0FBQXBCLElBQUEsWUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQTBGLFNBQUEsRUFBQS9GLE9BQUEsQ0FBQW1ELElBQUEsR0FBQThDLEdBQUEsRUFBQUMsTUFBQSxLQUFBbEcsT0FBQSxDQUFBbUIsTUFBQSxXQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUEwQyxTQUFBLEtBQUFtRCxNQUFBLGFBQUE3QixDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsR0FBQTNDLE1BQUEsR0FBQTZCLEtBQUEsQ0FBQVEsVUFBQSxpQkFBQVIsS0FBQSxDQUFBQyxNQUFBLFNBQUF3QyxNQUFBLGFBQUF6QyxLQUFBLENBQUFDLE1BQUEsU0FBQWlDLElBQUEsUUFBQVUsUUFBQSxHQUFBaEksTUFBQSxDQUFBb0MsSUFBQSxDQUFBZ0QsS0FBQSxlQUFBNkMsVUFBQSxHQUFBakksTUFBQSxDQUFBb0MsSUFBQSxDQUFBZ0QsS0FBQSxxQkFBQTRDLFFBQUEsSUFBQUMsVUFBQSxhQUFBWCxJQUFBLEdBQUFsQyxLQUFBLENBQUFFLFFBQUEsU0FBQXVDLE1BQUEsQ0FBQXpDLEtBQUEsQ0FBQUUsUUFBQSxnQkFBQWdDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLGNBQUF5QyxRQUFBLGFBQUFWLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLHFCQUFBMkMsVUFBQSxZQUFBaEUsS0FBQSxxREFBQXFELElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxTQUFBc0MsTUFBQSxDQUFBekMsS0FBQSxDQUFBRyxVQUFBLFlBQUFkLE1BQUEsV0FBQUEsT0FBQXRDLElBQUEsRUFBQUQsR0FBQSxhQUFBZ0UsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxJQUFBdEgsTUFBQSxDQUFBb0MsSUFBQSxDQUFBZ0QsS0FBQSx3QkFBQWtDLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUcsVUFBQSxRQUFBMkMsWUFBQSxHQUFBOUMsS0FBQSxhQUFBOEMsWUFBQSxpQkFBQS9GLElBQUEsbUJBQUFBLElBQUEsS0FBQStGLFlBQUEsQ0FBQTdDLE1BQUEsSUFBQW5ELEdBQUEsSUFBQUEsR0FBQSxJQUFBZ0csWUFBQSxDQUFBM0MsVUFBQSxLQUFBMkMsWUFBQSxjQUFBM0UsTUFBQSxHQUFBMkUsWUFBQSxHQUFBQSxZQUFBLENBQUF0QyxVQUFBLGNBQUFyQyxNQUFBLENBQUFwQixJQUFBLEdBQUFBLElBQUEsRUFBQW9CLE1BQUEsQ0FBQXJCLEdBQUEsR0FBQUEsR0FBQSxFQUFBZ0csWUFBQSxTQUFBbEYsTUFBQSxnQkFBQWdDLElBQUEsR0FBQWtELFlBQUEsQ0FBQTNDLFVBQUEsRUFBQWxELGdCQUFBLFNBQUE4RixRQUFBLENBQUE1RSxNQUFBLE1BQUE0RSxRQUFBLFdBQUFBLFNBQUE1RSxNQUFBLEVBQUFpQyxRQUFBLG9CQUFBakMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxxQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsbUJBQUFvQixNQUFBLENBQUFwQixJQUFBLFFBQUE2QyxJQUFBLEdBQUF6QixNQUFBLENBQUFyQixHQUFBLGdCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxTQUFBd0YsSUFBQSxRQUFBekYsR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxPQUFBYyxNQUFBLGtCQUFBZ0MsSUFBQSx5QkFBQXpCLE1BQUEsQ0FBQXBCLElBQUEsSUFBQXFELFFBQUEsVUFBQVIsSUFBQSxHQUFBUSxRQUFBLEdBQUFuRCxnQkFBQSxLQUFBK0YsTUFBQSxXQUFBQSxPQUFBN0MsVUFBQSxhQUFBVyxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBRyxVQUFBLEtBQUFBLFVBQUEsY0FBQTRDLFFBQUEsQ0FBQS9DLEtBQUEsQ0FBQVEsVUFBQSxFQUFBUixLQUFBLENBQUFJLFFBQUEsR0FBQUcsYUFBQSxDQUFBUCxLQUFBLEdBQUEvQyxnQkFBQSx5QkFBQWdHLE9BQUFoRCxNQUFBLGFBQUFhLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFDLE1BQUEsS0FBQUEsTUFBQSxRQUFBOUIsTUFBQSxHQUFBNkIsS0FBQSxDQUFBUSxVQUFBLGtCQUFBckMsTUFBQSxDQUFBcEIsSUFBQSxRQUFBbUcsTUFBQSxHQUFBL0UsTUFBQSxDQUFBckIsR0FBQSxFQUFBeUQsYUFBQSxDQUFBUCxLQUFBLFlBQUFrRCxNQUFBLGdCQUFBckUsS0FBQSw4QkFBQXNFLGFBQUEsV0FBQUEsY0FBQXpDLFFBQUEsRUFBQWYsVUFBQSxFQUFBRSxPQUFBLGdCQUFBZCxRQUFBLEtBQUF6RCxRQUFBLEVBQUFrQyxNQUFBLENBQUFrRCxRQUFBLEdBQUFmLFVBQUEsRUFBQUEsVUFBQSxFQUFBRSxPQUFBLEVBQUFBLE9BQUEsb0JBQUFqQyxNQUFBLFVBQUFkLEdBQUEsR0FBQTBDLFNBQUEsR0FBQXZDLGdCQUFBLE9BQUF6QyxPQUFBO0FBQUEsU0FBQTRJLG1CQUFBQyxHQUFBLEVBQUFwRixPQUFBLEVBQUFDLE1BQUEsRUFBQW9GLEtBQUEsRUFBQUMsTUFBQSxFQUFBdkksR0FBQSxFQUFBOEIsR0FBQSxjQUFBNEMsSUFBQSxHQUFBMkQsR0FBQSxDQUFBckksR0FBQSxFQUFBOEIsR0FBQSxPQUFBNUIsS0FBQSxHQUFBd0UsSUFBQSxDQUFBeEUsS0FBQSxXQUFBdUQsS0FBQSxJQUFBUCxNQUFBLENBQUFPLEtBQUEsaUJBQUFpQixJQUFBLENBQUFKLElBQUEsSUFBQXJCLE9BQUEsQ0FBQS9DLEtBQUEsWUFBQXdHLE9BQUEsQ0FBQXpELE9BQUEsQ0FBQS9DLEtBQUEsRUFBQXFELElBQUEsQ0FBQStFLEtBQUEsRUFBQUMsTUFBQTtBQUFBLFNBQUFDLGtCQUFBM0csRUFBQSw2QkFBQVYsSUFBQSxTQUFBc0gsSUFBQSxHQUFBQyxTQUFBLGFBQUFoQyxPQUFBLFdBQUF6RCxPQUFBLEVBQUFDLE1BQUEsUUFBQW1GLEdBQUEsR0FBQXhHLEVBQUEsQ0FBQThHLEtBQUEsQ0FBQXhILElBQUEsRUFBQXNILElBQUEsWUFBQUgsTUFBQXBJLEtBQUEsSUFBQWtJLGtCQUFBLENBQUFDLEdBQUEsRUFBQXBGLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0YsS0FBQSxFQUFBQyxNQUFBLFVBQUFySSxLQUFBLGNBQUFxSSxPQUFBeEgsR0FBQSxJQUFBcUgsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBcEYsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRixLQUFBLEVBQUFDLE1BQUEsV0FBQXhILEdBQUEsS0FBQXVILEtBQUEsQ0FBQTlELFNBQUE7QUFEaUM7QUFDc0I7QUFFaEQsSUFBTXNFLFdBQVcsR0FBRztFQUN2QkMsVUFBVSxFQUFFRixtREFBZUE7QUFDL0IsQ0FBQztBQUVELGlFQUFlLENBQUMsWUFBTTtFQUNsQixJQUFJRyxNQUFNO0VBQ1YsSUFBSUMsS0FBSztFQUNULElBQUlDLFNBQVMsR0FBRyxJQUFJO0VBRXBCLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUs7SUFDekQsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDM0NGLElBQUksQ0FBQ0csU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDN0MsSUFBTUMsU0FBUyxHQUFHTCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDL0NDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3JDRixTQUFTLENBQUNHLFdBQVcsR0FBRyxjQUFjO0lBQ3RDTCxPQUFPLENBQUNNLFdBQVcsQ0FBQ0osU0FBUyxDQUFDO0lBQzlCTixJQUFJLENBQUNVLFdBQVcsQ0FBQ04sT0FBTyxDQUFDO0lBQ3pCLElBQU1PLFNBQVMsR0FBR1YsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQy9DLElBQU1PLFdBQVcsR0FBR1gsUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3BELElBQU1RLFdBQVcsR0FBR1osUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3BETSxTQUFTLENBQUNELFdBQVcsQ0FBQ0UsV0FBVyxDQUFDO0lBQ2xDRCxTQUFTLENBQUNELFdBQVcsQ0FBQ0csV0FBVyxDQUFDO0lBQ2xDVCxPQUFPLENBQUNNLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDO0lBQzlCQyxXQUFXLENBQUNILFdBQVcsR0FBRyxlQUFlO0lBQ3pDSSxXQUFXLENBQUNKLFdBQVcsR0FBRyxZQUFZO0lBQ3RDRyxXQUFXLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBQztNQUFBLE9BQU1DLE9BQU8sQ0FBQ2pCLGdCQUFnQixDQUFDO0lBQUEsRUFBQztJQUNyRWUsV0FBVyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsWUFBTTtNQUN2Q0MsT0FBTyxDQUFDLFVBQUNqRSxJQUFJLEVBQUs7UUFDZGlFLE9BQU8sQ0FBQyxVQUFDQyxVQUFVLEVBQUs7VUFDcEJqQixnQkFBZ0IsQ0FBQ2pELElBQUksRUFBQ2tFLFVBQVUsQ0FBQztRQUNyQyxDQUFDLEVBQUUsS0FBSyxDQUFDO01BQ2IsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1ELE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJRSxFQUFFLEVBQXFCO0lBQUEsSUFBbkJDLE1BQU0sR0FBQTlCLFNBQUEsQ0FBQTdDLE1BQUEsUUFBQTZDLFNBQUEsUUFBQWxFLFNBQUEsR0FBQWtFLFNBQUEsTUFBRyxLQUFLO0lBQy9CK0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQzNCLElBQU1DLFVBQVUsR0FBR3BCLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNuRGdCLFVBQVUsQ0FBQ2QsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ3BDLElBQU1SLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzNDRixJQUFJLENBQUNVLFdBQVcsQ0FBQ1csVUFBVSxDQUFDO0lBQzVCQSxVQUFVLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLElBQU1DLFFBQVEsR0FBR3RCLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMvQyxJQUFNbUIsU0FBUyxHQUFHdkIsUUFBUSxDQUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2pEbUIsU0FBUyxDQUFDQyxZQUFZLENBQUMsS0FBSyxFQUFDLFlBQVksQ0FBQztJQUMxQ0QsU0FBUyxDQUFDZixXQUFXLGNBQUFpQixNQUFBLENBQWNSLE1BQU0sWUFBUztJQUNsRCxJQUFNUyxTQUFTLEdBQUcxQixRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDakRzQixTQUFTLENBQUNDLEVBQUUsR0FBRyxZQUFZO0lBQzNCLElBQU1DLFVBQVUsR0FBRzVCLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNuRHdCLFVBQVUsQ0FBQ3BCLFdBQVcsR0FBRyxRQUFRO0lBQ2pDWSxVQUFVLENBQUNYLFdBQVcsQ0FBQ2EsUUFBUSxDQUFDO0lBQ2hDQSxRQUFRLENBQUNiLFdBQVcsQ0FBQ2MsU0FBUyxDQUFDO0lBQy9CRCxRQUFRLENBQUNiLFdBQVcsQ0FBQ2lCLFNBQVMsQ0FBQztJQUMvQkosUUFBUSxDQUFDYixXQUFXLENBQUNtQixVQUFVLENBQUM7SUFDaENBLFVBQVUsQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQzNDcUIsVUFBVSxDQUFDZixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsVUFBQ2dCLENBQUMsRUFBSztNQUN2Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUNsQmQsRUFBRSxDQUFDVSxTQUFTLENBQUMvSyxLQUFLLENBQUM7TUFDbkJ5SyxVQUFVLENBQUNXLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDWixVQUFVLENBQUM7SUFDakQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxPQUFPLEVBQUs7SUFDN0IsSUFBTUMsT0FBTyxHQUFHbkMsUUFBUSxDQUFDb0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNuREQsT0FBTyxDQUFDM0IsV0FBVyxHQUFHMEIsT0FBTztFQUNqQyxDQUFDO0VBRUQsSUFBTUcsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSUMsTUFBTSxFQUFLO0lBQ3BDLElBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxZQUFZLENBQUNILE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUM7SUFDakQsVUFBQWIsTUFBQSxDQUFVYyxPQUFPLEVBQUFkLE1BQUEsQ0FBR2EsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUM7RUFDbkMsQ0FBQztFQUVELElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSTdGLElBQUksRUFBSztJQUM5QixJQUFNa0QsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDM0NGLElBQUksQ0FBQ0csU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBTXlDLEtBQUssR0FBRzNDLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQ3VDLEtBQUssQ0FBQ25DLFdBQVcsTUFBQWlCLE1BQUEsQ0FBTTVFLElBQUksdUJBQW9CO0lBQy9DOEYsS0FBSyxDQUFDckMsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7SUFDeENSLElBQUksQ0FBQ1UsV0FBVyxDQUFDa0MsS0FBSyxDQUFDO0lBQ3ZCLElBQU1DLElBQUksR0FBRzVDLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMxQ3dDLElBQUksQ0FBQ2pCLEVBQUUsR0FBRyxNQUFNO0lBQ2hCLElBQU1rQixRQUFRLEdBQUc3QyxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDOUN5QyxRQUFRLENBQUNsQixFQUFFLEdBQUcsVUFBVTtJQUN4QjVCLElBQUksQ0FBQ1UsV0FBVyxDQUFDb0MsUUFBUSxDQUFDO0lBQzFCQSxRQUFRLENBQUNwQyxXQUFXLENBQUNtQyxJQUFJLENBQUM7SUFDMUIsSUFBTUUsT0FBTyxHQUFHOUMsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzdDMEMsT0FBTyxDQUFDbkIsRUFBRSxHQUFHLFVBQVU7SUFDdkI1QixJQUFJLENBQUNVLFdBQVcsQ0FBQ3FDLE9BQU8sQ0FBQztFQUM3QixDQUFDO0VBRUQsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxNQUFNLEVBQUMzSCxJQUFJLEVBQUs7SUFDckMsSUFBTTBFLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzNDLElBQU1nRCxXQUFXLEdBQUdqRCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDcEQsSUFBTThDLFNBQVMsR0FBR2xELFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMvQyxJQUFNK0MsV0FBVyxHQUFHbkQsUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3BENkMsV0FBVyxDQUFDM0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3pDMkMsU0FBUyxDQUFDNUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3JDNEMsV0FBVyxDQUFDN0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3pDMkMsU0FBUyxDQUFDMUMsV0FBVyxNQUFBaUIsTUFBQSxDQUFNdUIsTUFBTSxDQUFDckIsRUFBRSxhQUFVO0lBQzlDd0IsV0FBVyxDQUFDM0MsV0FBVyxHQUFHLE9BQU87SUFDakMyQyxXQUFXLENBQUN0QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUN4Q29DLFdBQVcsQ0FBQ2xCLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDaUIsV0FBVyxDQUFDO01BQy9DRyxPQUFPLENBQUMvSCxJQUFJLEVBQUMySCxNQUFNLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0lBQ0ZDLFdBQVcsQ0FBQ3hDLFdBQVcsQ0FBQ3lDLFNBQVMsQ0FBQztJQUNsQ0QsV0FBVyxDQUFDeEMsV0FBVyxDQUFDMEMsV0FBVyxDQUFDO0lBQ3BDcEQsSUFBSSxDQUFDVSxXQUFXLENBQUN3QyxXQUFXLENBQUM7SUFDN0JBLFdBQVcsQ0FBQ0ksU0FBUyxDQUFDLENBQUM7RUFDM0IsQ0FBQztFQUVELElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUFTO0lBQzFCLElBQU12RCxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMzQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUcsRUFBRTtJQUNuQixJQUFNMEMsSUFBSSxHQUFHNUMsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDd0MsSUFBSSxDQUFDakIsRUFBRSxHQUFHLE1BQU07SUFDaEIsSUFBTTRCLEtBQUssR0FBR3ZELFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQ21ELEtBQUssQ0FBQzVCLEVBQUUsR0FBRyxPQUFPO0lBQ2xCLElBQU1rQixRQUFRLEdBQUc3QyxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDOUN5QyxRQUFRLENBQUNsQixFQUFFLEdBQUcsVUFBVTtJQUN4QjVCLElBQUksQ0FBQ1UsV0FBVyxDQUFDb0MsUUFBUSxDQUFDO0lBQzFCQSxRQUFRLENBQUNwQyxXQUFXLENBQUNtQyxJQUFJLENBQUM7SUFDMUJDLFFBQVEsQ0FBQ3BDLFdBQVcsQ0FBQzhDLEtBQUssQ0FBQztJQUMzQixJQUFNVCxPQUFPLEdBQUc5QyxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDN0MwQyxPQUFPLENBQUNuQixFQUFFLEdBQUcsVUFBVTtJQUN2QjVCLElBQUksQ0FBQ1UsV0FBVyxDQUFDcUMsT0FBTyxDQUFDO0VBQzdCLENBQUM7RUFFRCxJQUFNVSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLFNBQVMsRUFBSztJQUNuQyxJQUFNQyxPQUFPLEdBQUcxRCxRQUFRLENBQUNvQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQy9DLElBQU11QixLQUFLLEdBQUczRCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDM0N1RCxLQUFLLENBQUNoQyxFQUFFLEdBQUc4QixTQUFTLENBQUM5QixFQUFFO0lBQ3ZCK0IsT0FBTyxDQUFDakQsV0FBVyxDQUFDa0QsS0FBSyxDQUFDO0lBQzFCLElBQU1DLElBQUksR0FBR0gsU0FBUyxDQUFDSSxTQUFTLENBQUMsQ0FBQztJQUNsQyxLQUFLLElBQUl0SCxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdxSCxJQUFJLEVBQUdySCxDQUFDLEVBQUUsRUFBRztNQUM5QixJQUFNdUgsWUFBWSxHQUFHOUQsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ2xEMEQsWUFBWSxDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO01BQ2pDb0QsS0FBSyxDQUFDbEQsV0FBVyxDQUFDcUQsWUFBWSxDQUFDO01BQy9CLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBR0EsQ0FBQyxHQUFHSCxJQUFJLEVBQUdHLENBQUMsRUFBRSxFQUFHO1FBQzlCLElBQU1DLElBQUksR0FBR2hFLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUM3QzRELElBQUksQ0FBQzFELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQnlELElBQUksQ0FBQzFELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDa0QsU0FBUyxDQUFDUSxZQUFZLENBQUNGLENBQUMsRUFBQ3hILENBQUMsQ0FBQyxDQUFDO1FBQy9DdUgsWUFBWSxDQUFDckQsV0FBVyxDQUFDdUQsSUFBSSxDQUFDO01BQ2xDO0lBQ0o7SUFDQUwsS0FBSyxDQUFDOUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFnQixDQUFDLEVBQUk7TUFDakMsSUFBSTtRQUNBLElBQU1tQyxLQUFJLEdBQUdFLFNBQVMsQ0FBQ3JDLENBQUMsQ0FBQ3NDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQ3pFLFNBQVMsRUFBRTtRQUNoQkEsU0FBUyxHQUFHOEQsU0FBUyxDQUFDWSxRQUFRLENBQUNDLFFBQVEsQ0FBQ04sS0FBSSxFQUFFUCxTQUFTLENBQUM7TUFDNUQsQ0FBQyxDQUFDLE9BQU1qTSxHQUFHLEVBQUU7UUFDVDBKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDM0osR0FBRyxDQUFDO01BQ3BCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU0rTSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFJZCxTQUFTLEVBQUs7SUFDeEMsSUFBTUMsT0FBTyxHQUFHMUQsUUFBUSxDQUFDb0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMvQyxJQUFNdUIsS0FBSyxHQUFHM0QsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDdUQsS0FBSyxDQUFDaEMsRUFBRSxHQUFHOEIsU0FBUyxDQUFDOUIsRUFBRTtJQUN2QitCLE9BQU8sQ0FBQ2pELFdBQVcsQ0FBQ2tELEtBQUssQ0FBQztJQUMxQixJQUFNQyxJQUFJLEdBQUdILFNBQVMsQ0FBQ0ksU0FBUyxDQUFDLENBQUM7SUFDbEMsS0FBSyxJQUFJdEgsQ0FBQyxHQUFHLENBQUMsRUFBR0EsQ0FBQyxHQUFHcUgsSUFBSSxFQUFHckgsQ0FBQyxFQUFFLEVBQUc7TUFDOUIsSUFBTXVILFlBQVksR0FBRzlELFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNsRDBELFlBQVksQ0FBQ3hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztNQUNqQ29ELEtBQUssQ0FBQ2xELFdBQVcsQ0FBQ3FELFlBQVksQ0FBQztNQUMvQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBR0gsSUFBSSxFQUFHRyxDQUFDLEVBQUUsRUFBRztRQUM5QixJQUFNQyxJQUFJLEdBQUdoRSxRQUFRLENBQUNJLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDN0M0RCxJQUFJLENBQUMxRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDMUJ5RCxJQUFJLENBQUMxRCxTQUFTLENBQUNDLEdBQUcsQ0FBQ2tELFNBQVMsQ0FBQ1EsWUFBWSxDQUFDRixDQUFDLEVBQUN4SCxDQUFDLENBQUMsQ0FBQztRQUMvQ3VILFlBQVksQ0FBQ3JELFdBQVcsQ0FBQ3VELElBQUksQ0FBQztNQUNsQztJQUNKO0VBQ0osQ0FBQztFQUVELElBQU1RLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSWYsU0FBUyxFQUFLO0lBQ2xDLElBQU1DLE9BQU8sR0FBRzFELFFBQVEsQ0FBQ29DLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDaEQsSUFBTXVCLEtBQUssR0FBRzNELFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQ3VELEtBQUssQ0FBQ2hDLEVBQUUsR0FBRzhCLFNBQVMsQ0FBQzlCLEVBQUU7SUFDdkIrQixPQUFPLENBQUNqRCxXQUFXLENBQUNrRCxLQUFLLENBQUM7SUFDMUIsSUFBTUMsSUFBSSxHQUFHSCxTQUFTLENBQUNJLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLEtBQUssSUFBSXRILENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBR3FILElBQUksRUFBR3JILENBQUMsRUFBRSxFQUFHO01BQzlCLElBQU11SCxZQUFZLEdBQUc5RCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDbEQwRCxZQUFZLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDakNvRCxLQUFLLENBQUNsRCxXQUFXLENBQUNxRCxZQUFZLENBQUM7TUFDL0IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdILElBQUksRUFBR0csQ0FBQyxFQUFFLEVBQUc7UUFDOUIsSUFBTUMsSUFBSSxHQUFHaEUsUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzdDNEQsSUFBSSxDQUFDMUQsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCeUQsSUFBSSxDQUFDMUQsU0FBUyxDQUFDQyxHQUFHLENBQUNrRCxTQUFTLENBQUNRLFlBQVksQ0FBQ0YsQ0FBQyxFQUFDeEgsQ0FBQyxDQUFDLENBQUM7UUFDL0N1SCxZQUFZLENBQUNyRCxXQUFXLENBQUN1RCxJQUFJLENBQUM7TUFDbEM7SUFDSjtJQUNBUyxTQUFTLENBQUNoQixTQUFTLEVBQUNBLFNBQVMsQ0FBQzlCLEVBQUUsQ0FBQztFQUNyQyxDQUFDO0VBRUQsSUFBTStDLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlqQixTQUFTLEVBQUs7SUFDeEMsSUFBTUMsT0FBTyxHQUFHMUQsUUFBUSxDQUFDb0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUNoRCxJQUFNdUIsS0FBSyxHQUFHM0QsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDdUQsS0FBSyxDQUFDaEMsRUFBRSxHQUFHOEIsU0FBUyxDQUFDOUIsRUFBRTtJQUN2QitCLE9BQU8sQ0FBQ2pELFdBQVcsQ0FBQ2tELEtBQUssQ0FBQztJQUMxQixJQUFNQyxJQUFJLEdBQUdILFNBQVMsQ0FBQ0ksU0FBUyxDQUFDLENBQUM7SUFDbEM7SUFDQSxLQUFLLElBQUl0SCxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdxSCxJQUFJLEVBQUdySCxDQUFDLEVBQUUsRUFBRztNQUM5QixJQUFNdUgsWUFBWSxHQUFHOUQsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ2xEMEQsWUFBWSxDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO01BQ2pDb0QsS0FBSyxDQUFDbEQsV0FBVyxDQUFDcUQsWUFBWSxDQUFDO01BQy9CLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBR0EsQ0FBQyxHQUFHSCxJQUFJLEVBQUdHLENBQUMsRUFBRSxFQUFHO1FBQzlCLElBQU1DLElBQUksR0FBR2hFLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMxQzRELElBQUksQ0FBQzFELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMxQnVELFlBQVksQ0FBQ3JELFdBQVcsQ0FBQ3VELElBQUksQ0FBQztNQUNsQztJQUNKO0lBQ0EsSUFBTVcsTUFBTSxHQUFHM0UsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzVDdUUsTUFBTSxDQUFDbkUsV0FBVyxHQUFHLG1CQUFtQjtJQUN4Q21FLE1BQU0sQ0FBQ3JFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUNwQ29ELEtBQUssQ0FBQ2xELFdBQVcsQ0FBQ2tFLE1BQU0sQ0FBQztFQUM3QixDQUFDO0VBRUQsSUFBTXZCLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJd0IsT0FBTyxFQUFDQyxRQUFRLEVBQUs7SUFDbEMsSUFBTUMsVUFBVSxHQUFHOUUsUUFBUSxDQUFDb0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxJQUFNMkMsU0FBUyxHQUFHL0UsUUFBUSxDQUFDb0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUNsRDBDLFVBQVUsQ0FBQzVFLFNBQVMsR0FBRyxFQUFFO0lBQ3pCNkUsU0FBUyxDQUFDN0UsU0FBUyxHQUFHLEVBQUU7SUFDeEIsSUFBSSxDQUFDMEUsT0FBTyxDQUFDSSxNQUFNLEVBQUU7TUFDakJ4QixlQUFlLENBQUNxQixRQUFRLENBQUNwQixTQUFTLENBQUM7TUFDbkNlLGNBQWMsQ0FBQ0ksT0FBTyxDQUFDbkIsU0FBUyxDQUFDO0lBQ3JDLENBQUMsTUFBTTtNQUNIYyxvQkFBb0IsQ0FBQ00sUUFBUSxDQUFDcEIsU0FBUyxDQUFDO01BQ3hDaUIsb0JBQW9CLENBQUNFLE9BQU8sQ0FBQ25CLFNBQVMsQ0FBQztNQUN2Q2dCLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDcEIsU0FBUyxFQUFDb0IsUUFBUSxDQUFDcEIsU0FBUyxDQUFDOUIsRUFBRSxDQUFDO0lBQ3ZEO0VBQ0osQ0FBQztFQUVELElBQU1zRCxrQkFBa0I7SUFBQSxJQUFBQyxJQUFBLEdBQUFqRyxpQkFBQSxlQUFBakosbUJBQUEsR0FBQThHLElBQUEsQ0FBRyxTQUFBcUksUUFBTzdDLE1BQU0sRUFBQ21CLFNBQVM7TUFBQSxJQUFBMkIsVUFBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBQyxrQkFBQSxFQUFBQyxhQUFBO01BQUEsT0FBQXpQLG1CQUFBLEdBQUF5QixJQUFBLFVBQUFpTyxTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQWhJLElBQUEsR0FBQWdJLFFBQUEsQ0FBQXRLLElBQUE7VUFBQTtZQUM5Q3NFLFNBQVMsR0FBRyxLQUFLO1lBQ1h5RixVQUFVLEdBQUdwRixRQUFRLENBQUNvQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUNuQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ2pFb0YsR0FBRyxHQUFHRCxVQUFVLENBQUNRLFFBQVEsQ0FBQ3RELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQ2dELElBQUksR0FBR0QsR0FBRyxDQUFDTyxRQUFRLENBQUN0RCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcENnRCxJQUFJLENBQUNoRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDdEJnRixXQUFXLEdBQUdsRCxtQkFBbUIsQ0FBQ0MsTUFBTSxDQUFDO1lBQy9DTCxXQUFXLHFCQUFBUixNQUFBLENBQXFCOEQsV0FBVyxRQUFLLENBQUM7WUFBQ0ksUUFBQSxDQUFBdEssSUFBQTtZQUFBLE9BQ2pCd0ssU0FBUyxDQUFDO2NBQUEsT0FBTVAsSUFBSSxDQUFDaEYsU0FBUyxDQUFDd0YsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUFBLEdBQUMsSUFBSSxDQUFDO1VBQUE7WUFBaEZOLGtCQUFrQixHQUFBRyxRQUFBLENBQUFoTCxJQUFBO1lBQ3hCNkssa0JBQWtCLENBQUMsQ0FBQztZQUNwQk8sVUFBVSxDQUFDO2NBQUEsT0FBTTlELFdBQVcsSUFBQVIsTUFBQSxDQUFJOEQsV0FBVyxZQUFBOUQsTUFBQSxDQUFTZ0MsU0FBUyxDQUFDUSxZQUFZLENBQUMzQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUM7WUFBQSxHQUFDLEdBQUcsQ0FBQztZQUN4RztZQUNBZ0QsSUFBSSxDQUFDaEYsU0FBUyxDQUFDQyxHQUFHLENBQUNrRCxTQUFTLENBQUNRLFlBQVksQ0FBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQ3FELFFBQUEsQ0FBQXRLLElBQUE7WUFBQSxPQUNwQzJLLGlCQUFpQixDQUFDLENBQUM7VUFBQTtZQUF6Q1AsYUFBYSxHQUFBRSxRQUFBLENBQUFoTCxJQUFBO1lBQ25COEssYUFBYSxDQUFDLENBQUM7VUFBQztVQUFBO1lBQUEsT0FBQUUsUUFBQSxDQUFBN0gsSUFBQTtRQUFBO01BQUEsR0FBQXFILE9BQUE7SUFBQSxDQUNuQjtJQUFBLGdCQWZLRixrQkFBa0JBLENBQUFnQixFQUFBLEVBQUFDLEdBQUE7TUFBQSxPQUFBaEIsSUFBQSxDQUFBOUYsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQWV2QjtFQUVELElBQU1nSCxnQkFBZ0I7SUFBQSxJQUFBQyxLQUFBLEdBQUFuSCxpQkFBQSxlQUFBakosbUJBQUEsR0FBQThHLElBQUEsQ0FBRyxTQUFBdUosU0FBTy9ELE1BQU0sRUFBQ21CLFNBQVM7TUFBQSxJQUFBMkIsVUFBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxFQUFBQyxrQkFBQSxFQUFBYyxlQUFBO01BQUEsT0FBQXRRLG1CQUFBLEdBQUF5QixJQUFBLFVBQUE4TyxVQUFBQyxTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQTdJLElBQUEsR0FBQTZJLFNBQUEsQ0FBQW5MLElBQUE7VUFBQTtZQUN0QytKLFVBQVUsR0FBR3BGLFFBQVEsQ0FBQ29DLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQ25DLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDakVvRixHQUFHLEdBQUdELFVBQVUsQ0FBQ1EsUUFBUSxDQUFDdEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDZ0QsSUFBSSxHQUFHRCxHQUFHLENBQUNPLFFBQVEsQ0FBQ3RELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQ2dELElBQUksQ0FBQ2hGLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN0QmdGLFdBQVcsR0FBR2xELG1CQUFtQixDQUFDQyxNQUFNLENBQUM7WUFDL0NMLFdBQVcsSUFBQVIsTUFBQSxDQUFJZ0MsU0FBUyxDQUFDWSxRQUFRLENBQUMxQyxFQUFFLGVBQUFGLE1BQUEsQ0FBWThELFdBQVcsUUFBSyxDQUFDO1lBQUNpQixTQUFBLENBQUFuTCxJQUFBO1lBQUEsT0FDakN3SyxTQUFTLENBQUM7Y0FBQSxPQUFNUCxJQUFJLENBQUNoRixTQUFTLENBQUN3RixNQUFNLENBQUMsUUFBUSxDQUFDO1lBQUEsR0FBQyxJQUFJLENBQUM7VUFBQTtZQUFoRk4sa0JBQWtCLEdBQUFnQixTQUFBLENBQUE3TCxJQUFBO1lBQ3hCNkssa0JBQWtCLENBQUMsQ0FBQztZQUNwQk8sVUFBVSxDQUFDO2NBQUEsT0FBTTlELFdBQVcsSUFBQVIsTUFBQSxDQUFJOEQsV0FBVyxZQUFBOUQsTUFBQSxDQUFTZ0MsU0FBUyxDQUFDUSxZQUFZLENBQUMzQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUNBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUM7WUFBQSxHQUFDLEdBQUcsQ0FBQztZQUN4RztZQUNBZ0QsSUFBSSxDQUFDaEYsU0FBUyxDQUFDQyxHQUFHLENBQUNrRCxTQUFTLENBQUNRLFlBQVksQ0FBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQ2tFLFNBQUEsQ0FBQW5MLElBQUE7WUFBQSxPQUNsQ29MLGdCQUFnQixDQUFDLENBQUM7VUFBQTtZQUExQ0gsZUFBZSxHQUFBRSxTQUFBLENBQUE3TCxJQUFBO1lBQ3JCMkwsZUFBZSxDQUFDLENBQUM7WUFDakIzRyxTQUFTLEdBQUcsSUFBSTtVQUFDO1VBQUE7WUFBQSxPQUFBNkcsU0FBQSxDQUFBMUksSUFBQTtRQUFBO01BQUEsR0FBQXVJLFFBQUE7SUFBQSxDQUNwQjtJQUFBLGdCQWZLRixnQkFBZ0JBLENBQUFPLEdBQUEsRUFBQUMsR0FBQTtNQUFBLE9BQUFQLEtBQUEsQ0FBQWhILEtBQUEsT0FBQUQsU0FBQTtJQUFBO0VBQUEsR0FlckI7RUFFRCxJQUFNeUgsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlDLElBQUksRUFBRWhLLElBQUksRUFBSztJQUM3QmtKLFVBQVUsQ0FBQztNQUFBLE9BQU05RCxXQUFXLElBQUFSLE1BQUEsQ0FBSTVFLElBQUksU0FBQTRFLE1BQUEsQ0FBTW9GLElBQUksQ0FBQ2hLLElBQUksb0JBQWlCLENBQUM7SUFBQSxHQUFDLElBQUksQ0FBQztFQUMvRSxDQUFDO0VBRUQsSUFBTTRKLGdCQUFnQjtJQUFBLElBQUFLLEtBQUEsR0FBQTdILGlCQUFBLGVBQUFqSixtQkFBQSxHQUFBOEcsSUFBQSxDQUFHLFNBQUFpSyxTQUFBO01BQUEsSUFBQUMsaUJBQUE7TUFBQSxPQUFBaFIsbUJBQUEsR0FBQXlCLElBQUEsVUFBQXdQLFVBQUFDLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBdkosSUFBQSxHQUFBdUosU0FBQSxDQUFBN0wsSUFBQTtVQUFBO1lBQUE2TCxTQUFBLENBQUE3TCxJQUFBO1lBQUEsT0FDV3dLLFNBQVMsQ0FBQ3BHLE1BQU0sRUFBRSxJQUFJLENBQUM7VUFBQTtZQUFqRHVILGlCQUFpQixHQUFBRSxTQUFBLENBQUF2TSxJQUFBO1lBQUEsT0FBQXVNLFNBQUEsQ0FBQXBNLE1BQUEsV0FDaEJrTSxpQkFBaUI7VUFBQTtVQUFBO1lBQUEsT0FBQUUsU0FBQSxDQUFBcEosSUFBQTtRQUFBO01BQUEsR0FBQWlKLFFBQUE7SUFBQSxDQUMzQjtJQUFBLGdCQUhLTixnQkFBZ0JBLENBQUE7TUFBQSxPQUFBSyxLQUFBLENBQUExSCxLQUFBLE9BQUFELFNBQUE7SUFBQTtFQUFBLEdBR3JCO0VBRUQsSUFBTTZHLGlCQUFpQjtJQUFBLElBQUFtQixLQUFBLEdBQUFsSSxpQkFBQSxlQUFBakosbUJBQUEsR0FBQThHLElBQUEsQ0FBRyxTQUFBc0ssU0FBQTtNQUFBLElBQUFDLGdCQUFBO01BQUEsT0FBQXJSLG1CQUFBLEdBQUF5QixJQUFBLFVBQUE2UCxVQUFBQyxTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQTVKLElBQUEsR0FBQTRKLFNBQUEsQ0FBQWxNLElBQUE7VUFBQTtZQUFBa00sU0FBQSxDQUFBbE0sSUFBQTtZQUFBLE9BQ1N3SyxTQUFTLENBQUNwRyxNQUFNLEVBQUUsSUFBSSxDQUFDO1VBQUE7WUFBaEQ0SCxnQkFBZ0IsR0FBQUUsU0FBQSxDQUFBNU0sSUFBQTtZQUN0QmdGLFNBQVMsR0FBRyxJQUFJO1lBQUMsT0FBQTRILFNBQUEsQ0FBQXpNLE1BQUEsV0FDVnVNLGdCQUFnQjtVQUFBO1VBQUE7WUFBQSxPQUFBRSxTQUFBLENBQUF6SixJQUFBO1FBQUE7TUFBQSxHQUFBc0osUUFBQTtJQUFBLENBQzFCO0lBQUEsZ0JBSktwQixpQkFBaUJBLENBQUE7TUFBQSxPQUFBbUIsS0FBQSxDQUFBL0gsS0FBQSxPQUFBRCxTQUFBO0lBQUE7RUFBQSxHQUl0QjtFQUVELElBQU0wRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSTJCLFFBQVEsRUFBQ0MsS0FBSyxFQUFLO0lBQ2xDLE9BQU8sSUFBSXRLLE9BQU8sQ0FBQyxVQUFBekQsT0FBTztNQUFBLE9BQUlxTSxVQUFVLENBQUM7UUFBQSxPQUFNck0sT0FBTyxDQUFDOE4sUUFBUSxDQUFDO01BQUEsR0FBRUMsS0FBSyxDQUFDO0lBQUEsRUFBQztFQUM3RSxDQUFDO0VBR0QsSUFBTWhELFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJaEIsU0FBUyxFQUFDaUUsT0FBTyxFQUFLO0lBQ3JDLElBQU1DLEtBQUssR0FBR2xFLFNBQVMsQ0FBQ21FLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLElBQU1DLFFBQVEsR0FBRzdILFFBQVEsQ0FBQ29DLGNBQWMsQ0FBQ3NGLE9BQU8sQ0FBQztJQUNqREMsS0FBSyxDQUFDdk8sT0FBTyxDQUFDLFVBQUN5TixJQUFJLEVBQUs7TUFDcEIsSUFBTWlCLFVBQVUsR0FBR0MsdUJBQXVCLENBQUNGLFFBQVEsRUFBRXBFLFNBQVMsQ0FBQ0ksU0FBUyxDQUFDLENBQUMsRUFBRWdELElBQUksQ0FBQztNQUNqRmdCLFFBQVEsQ0FBQ3BILFdBQVcsQ0FBQ3VILFFBQVEsQ0FBQ0YsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJRixVQUFVLEVBQUs7SUFDN0IsSUFBTWpCLElBQUksR0FBRzdHLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMxQ3lHLElBQUksQ0FBQ3ZHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNqQ3NHLElBQUksQ0FBQ3JGLFlBQVksQ0FBQyxPQUFPLFNBQUFDLE1BQUEsQ0FBUXFHLFVBQVUsQ0FBQ0csR0FBRyxZQUFBeEcsTUFBQSxDQUFTcUcsVUFBVSxDQUFDbEYsSUFBSSxhQUFBbkIsTUFBQSxDQUFVcUcsVUFBVSxDQUFDeEwsTUFBTSxjQUFBbUYsTUFBQSxDQUFXcUcsVUFBVSxDQUFDSSxNQUFNLENBQUUsQ0FBQztJQUNqSSxPQUFPckIsSUFBSTtFQUNmLENBQUM7RUFFRCxJQUFNa0IsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUF1QkEsQ0FBSUksSUFBSSxFQUFFQyxLQUFLLEVBQUV2QixJQUFJLEVBQUs7SUFDbkQsSUFBTXdCLElBQUksR0FBR0YsSUFBSSxDQUFDRyxXQUFXLEdBQUdGLEtBQUs7SUFDckMsSUFBTXhGLElBQUksR0FBRzJGLElBQUksQ0FBQ0MsS0FBSyxDQUFDM0IsSUFBSSxDQUFDNEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSixJQUFJLENBQUMsR0FBQyxJQUFJO0lBQ3hELElBQU1KLEdBQUcsR0FBR00sSUFBSSxDQUFDQyxLQUFLLENBQUMzQixJQUFJLENBQUM0QixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdKLElBQUksQ0FBQyxHQUFDLElBQUk7SUFDdkQsSUFBTS9MLE1BQU0sR0FBR3VLLElBQUksQ0FBQzZCLFdBQVcsR0FBRzdCLElBQUksQ0FBQ3ZLLE1BQU0sR0FBRytMLElBQUksR0FBR0EsSUFBSTtJQUMzRCxJQUFNSCxNQUFNLEdBQUdyQixJQUFJLENBQUM2QixXQUFXLEdBQUdMLElBQUksR0FBR3hCLElBQUksQ0FBQ3ZLLE1BQU0sR0FBRytMLElBQUk7SUFDM0QsT0FBTztNQUNISixHQUFHLEVBQUhBLEdBQUc7TUFDSHJGLElBQUksRUFBSkEsSUFBSTtNQUNKdEcsTUFBTSxFQUFDQSxNQUFNLEdBQUMsSUFBSTtNQUNsQjRMLE1BQU0sRUFBQ0EsTUFBTSxHQUFDO0lBQ2xCLENBQUM7RUFDTCxDQUFDO0VBRUQsSUFBTWhFLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFJeUUsTUFBTSxFQUFLO0lBQzFCLElBQUksQ0FBQ0EsTUFBTSxFQUFFO0lBQ2IsSUFBTXhFLE1BQU0sR0FBR3dFLE1BQU07SUFDckIsSUFBTUMsTUFBTSxHQUFHekUsTUFBTSxDQUFDcEMsVUFBVTtJQUNoQyxJQUFNNEIsS0FBSyxHQUFHM0QsUUFBUSxDQUFDb0MsY0FBYyxDQUFDd0csTUFBTSxDQUFDN0csVUFBVSxDQUFDSixFQUFFLENBQUM7SUFDM0Q7SUFDQSxJQUFNa0gsQ0FBQyxHQUFHQyxLQUFLLENBQUMxUyxTQUFTLENBQUMyUyxPQUFPLENBQUN0USxJQUFJLENBQUNrTCxLQUFLLENBQUNpQyxRQUFRLEVBQUNnRCxNQUFNLENBQUM7SUFDN0QsSUFBTUksQ0FBQyxHQUFHRixLQUFLLENBQUMxUyxTQUFTLENBQUMyUyxPQUFPLENBQUN0USxJQUFJLENBQUNtUSxNQUFNLENBQUNoRCxRQUFRLEVBQUN6QixNQUFNLENBQUM7SUFDOUQsT0FBTyxDQUFDNkUsQ0FBQyxFQUFDSCxDQUFDLENBQUM7RUFDaEIsQ0FBQztFQUVELElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxNQUFNLEVBQUs7SUFDeEJoSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUUrSCxNQUFNLEVBQUUsaUJBQWlCLENBQUM7SUFDcEQsSUFBTW5KLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzNDRixJQUFJLENBQUNHLFNBQVMsR0FBRyxFQUFFO0lBQ25CLElBQU1pSixXQUFXLEdBQUduSixRQUFRLENBQUNJLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDakQsSUFBTWdKLFdBQVcsR0FBR3BKLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNqRGdKLFdBQVcsQ0FBQzVJLFdBQVcsaUJBQUFpQixNQUFBLENBQWlCeUgsTUFBTSxvQkFBaUI7SUFDL0QsSUFBTUcsYUFBYSxHQUFHckosUUFBUSxDQUFDSSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3REaUosYUFBYSxDQUFDN0ksV0FBVyxjQUFjO0lBQ3ZDMkksV0FBVyxDQUFDN0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3pDNkksV0FBVyxDQUFDOUksU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3pDOEksYUFBYSxDQUFDL0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7SUFDN0M0SSxXQUFXLENBQUMxSSxXQUFXLENBQUMySSxXQUFXLENBQUM7SUFDcENELFdBQVcsQ0FBQzFJLFdBQVcsQ0FBQzRJLGFBQWEsQ0FBQztJQUN0Q3RKLElBQUksQ0FBQ1UsV0FBVyxDQUFDMEksV0FBVyxDQUFDO0lBQzdCRSxhQUFhLENBQUN4SSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVuQixLQUFLLENBQUM7RUFDbEQsQ0FBQztFQU1ELE9BQU87SUFDSCtFLFNBQVMsRUFBVEEsU0FBUztJQUNUbkIsZUFBZSxFQUFmQSxlQUFlO0lBQ2ZaLGVBQWUsRUFBZkEsZUFBZTtJQUNmdUMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJnRSxPQUFPLEVBQVBBLE9BQU87SUFDUC9FLFNBQVMsRUFBVEEsU0FBUztJQUNUZCxPQUFPLEVBQVBBLE9BQU87SUFDUHdELFFBQVEsRUFBUkEsUUFBUTtJQUNSVCxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQnZHLFlBQVksRUFBWkEsWUFBWTtJQUNabUQsZUFBZSxFQUFmQSxlQUFlO0lBQ2YsSUFBSXRELE1BQU1BLENBQUM2SixRQUFRLEVBQUU7TUFDakI3SixNQUFNLEdBQUc2SixRQUFRO0lBQ3JCLENBQUM7SUFDRCxJQUFJNUosS0FBS0EsQ0FBQzZKLEdBQUcsRUFBRTtNQUNYN0osS0FBSyxHQUFHNkosR0FBRztJQUNmO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3BYRyxJQUFNbEssSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBb0I7RUFBQSxJQUFoQnhDLElBQUksR0FBQXNDLFNBQUEsQ0FBQTdDLE1BQUEsUUFBQTZDLFNBQUEsUUFBQWxFLFNBQUEsR0FBQWtFLFNBQUEsTUFBRyxJQUFJO0VBQzVCLElBQUlxSyxVQUFVLEdBQUcsQ0FBQztFQUVsQixJQUFJZCxXQUFXLEdBQUcsS0FBSztFQUV2QixJQUFNZSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQSxFQUFTO0lBQ2pCZixXQUFXLEdBQUcsQ0FBQ0EsV0FBVztFQUM5QixDQUFDO0VBRUQsSUFBTWdCLFVBQVUsR0FBRztJQUNmQyxPQUFPLEVBQUUsQ0FBQztJQUNWbkssVUFBVSxFQUFFLENBQUM7SUFDYm9LLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLFNBQVMsRUFBRSxDQUFDO0lBQ1pDLFNBQVMsRUFBRTtFQUNmLENBQUM7RUFFRCxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0lBQ2RQLFVBQVUsRUFBRTtFQUNoQixDQUFDO0VBRUQsSUFBTVEsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUEsRUFBUztJQUNqQixPQUFRUixVQUFVLElBQUlFLFVBQVUsQ0FBQzdNLElBQUksQ0FBQztFQUMxQyxDQUFDO0VBRUQsT0FBTztJQUNIa04sR0FBRyxFQUFIQSxHQUFHO0lBQ0hDLE1BQU0sRUFBTkEsTUFBTTtJQUNOdkIsUUFBUSxFQUFDLEVBQUU7SUFDWCxJQUFJQyxXQUFXQSxDQUFBLEVBQUk7TUFDZixPQUFPQSxXQUFXO0lBQ3RCLENBQUM7SUFDRCxJQUFJQSxXQUFXQSxDQUFDdUIsRUFBRSxFQUFFO01BQ2hCdkIsV0FBVyxHQUFHdUIsRUFBRTtJQUNwQixDQUFDO0lBQ0RSLE1BQU0sRUFBTkEsTUFBTTtJQUNOLElBQUk1TSxJQUFJQSxDQUFBLEVBQUc7TUFDUCxJQUFNcU4sV0FBVyxHQUFHck4sSUFBSSxDQUFDc04sS0FBSyxDQUFDLEVBQUUsQ0FBQztNQUNsQ0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxXQUFXLENBQUMsQ0FBQztNQUM1QixPQUFPRixXQUFXLENBQUNHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUkvTixNQUFNQSxDQUFBLEVBQUc7TUFDVCxPQUFPb04sVUFBVSxDQUFDN00sSUFBSSxDQUFDO0lBQzNCO0VBQ0osQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCaUM7QUFDQTtBQUUxQixJQUFNME4sTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUk1SSxFQUFFLEVBQUM4QixTQUFTLEVBQUs7RUFHcEMsSUFBTWEsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlOLElBQUksRUFBRXdHLGFBQWEsRUFBSztJQUN0QyxJQUFJLENBQUN4RyxJQUFJLEVBQUUsTUFBTSxJQUFJMUosS0FBSyxDQUFDLGFBQWEsQ0FBQztJQUN6QyxJQUFJO01BQ0EsSUFBTW1RLElBQUksR0FBR0QsYUFBYSxDQUFDRSxTQUFTLENBQUMxRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNyRCxJQUFJbEssT0FBQSxDQUFPMlEsSUFBSSxNQUFLLFFBQVEsSUFBSUEsSUFBSSxDQUFDVCxNQUFNLENBQUMsQ0FBQyxFQUFFTSxrREFBTSxDQUFDMUQsUUFBUSxDQUFDNkQsSUFBSSxFQUFFRCxhQUFhLENBQUM3SSxFQUFFLENBQUM7TUFDdEYySSxrREFBTSxDQUFDbkUsZ0JBQWdCLENBQUNuQyxJQUFJLEVBQUN3RyxhQUFhLENBQUM7TUFDM0MsT0FBTyxLQUFLO0lBQ2hCLENBQUMsQ0FBQyxPQUFNdFEsS0FBSyxFQUFFO01BQ1hnSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2pILEtBQUssQ0FBQztNQUNsQixPQUFPLElBQUk7SUFDZjtFQUNKLENBQUM7RUFHRCxPQUFPO0lBQ0h5USxPQUFPLEVBQUUsS0FBSztJQUNkM0YsTUFBTSxFQUFFLEtBQUs7SUFDYnJELEVBQUUsRUFBRkEsRUFBRTtJQUNGOEIsU0FBUyxFQUFUQSxTQUFTO0lBQ1RhLFFBQVEsRUFBUkE7RUFDSixDQUFDO0FBRUwsQ0FBQztBQUVNLElBQU1zRyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSWpKLEVBQUUsRUFBQzhCLFNBQVMsRUFBSztFQUV0QyxJQUFJb0gsY0FBYyxHQUFHLEVBQUU7RUFFdkIsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztJQUNwQixPQUFPO01BQ0huQixPQUFPLEVBQUV0Syw4Q0FBSSxDQUFDLFNBQVMsQ0FBQztNQUN4QkcsVUFBVSxFQUFFSCw4Q0FBSSxDQUFDLFlBQVksQ0FBQztNQUM5QnVLLE9BQU8sRUFBRXZLLDhDQUFJLENBQUMsU0FBUyxDQUFDO01BQ3hCd0ssU0FBUyxFQUFFeEssOENBQUksQ0FBQyxXQUFXLENBQUM7TUFDNUJ5SyxTQUFTLEVBQUV6Syw4Q0FBSSxDQUFDLFdBQVc7SUFDL0IsQ0FBQztFQUNMLENBQUM7RUFFRCxJQUFNMEwsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUEsRUFBUztJQUNoQixJQUFNcEQsS0FBSyxHQUFHbUQsU0FBUyxDQUFDLENBQUM7SUFDekIzVSxNQUFNLENBQUNrSCxJQUFJLENBQUNzSyxLQUFLLENBQUMsQ0FBQ3ZPLE9BQU8sQ0FBQyxVQUFDeU4sSUFBSSxFQUFLO01BQ2pDLElBQUltRSxNQUFNLEdBQUcsS0FBSztNQUNsQixPQUFPLENBQUNBLE1BQU0sRUFBRTtRQUNaLElBQUloQyxDQUFDLEdBQUdULElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUMwQyxNQUFNLENBQUMsQ0FBQyxHQUFHeEgsU0FBUyxDQUFDSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUlnRixDQUFDLEdBQUdOLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUMwQyxNQUFNLENBQUMsQ0FBQyxHQUFHeEgsU0FBUyxDQUFDSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUk2RSxXQUFXLEdBQUdILElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUMwQyxNQUFNLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLO1FBQzdELElBQUk7VUFDQXhILFNBQVMsQ0FBQ3lILFNBQVMsQ0FBQ3ZELEtBQUssQ0FBQ2QsSUFBSSxDQUFDLEVBQUNtQyxDQUFDLEVBQUNILENBQUMsRUFBQ0gsV0FBVyxDQUFDO1VBQ2hEc0MsTUFBTSxHQUFHLElBQUk7UUFDakIsQ0FBQyxDQUFDLE9BQU14VCxHQUFHLEVBQUU7VUFDVDBKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDM0osR0FBRyxDQUFDO1VBQ2hCMEosT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLEVBQUU2SCxDQUFDLEVBQUVILENBQUMsRUFBRSxRQUFRLEVBQUVILFdBQVcsRUFBQyxlQUFlLENBQUM7UUFDakY7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFHRCxJQUFNeUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUluSCxJQUFJLEVBQUs7SUFDdkIsSUFBSSxDQUFDQSxJQUFJLEVBQUU7SUFDWCxJQUFJO01BQ0EsSUFBTStGLEdBQUcsR0FBR3RHLFNBQVMsQ0FBQ1ksUUFBUSxDQUFDWixTQUFTLENBQUNpSCxTQUFTLENBQUMxRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNuRSxJQUFJbEssT0FBQSxDQUFPaVEsR0FBRyxNQUFLLFFBQVEsSUFBSUEsR0FBRyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFTSxrREFBTSxDQUFDMUQsUUFBUSxDQUFDbUQsR0FBRyxFQUFFdEcsU0FBUyxDQUFDWSxRQUFRLENBQUMxQyxFQUFFLENBQUM7TUFDeEYsSUFBSW9JLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDZCxPQUFPLE1BQU07TUFDakIsQ0FBQyxNQUFNO1FBQ0gsT0FBT0EsR0FBRztNQUNkO0lBQ0osQ0FBQyxDQUFDLE9BQU03UCxLQUFLLEVBQUU7TUFDWGdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDakgsS0FBSyxDQUFDO0lBQ3RCO0VBQ0osQ0FBQztFQUVELElBQU1rUixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFBLEVBQVM7SUFDL0IsSUFBTUMsUUFBUSxHQUFHNUgsU0FBUyxDQUFDSSxTQUFTLENBQUMsQ0FBQztJQUN0QyxJQUFNeUgsSUFBSSxHQUFHL0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQzBDLE1BQU0sQ0FBQyxDQUFDLEdBQUNJLFFBQVEsQ0FBQztJQUMvQyxJQUFNRSxJQUFJLEdBQUdoRCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDMEMsTUFBTSxDQUFDLENBQUMsR0FBQ0ksUUFBUSxDQUFDO0lBQy9DLE9BQU8sQ0FBQ0MsSUFBSSxFQUFDQyxJQUFJLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1qSCxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0lBQ25CLElBQUl1RyxjQUFjLENBQUN2TyxNQUFNLEVBQUU7TUFDdkJrUCxZQUFZLENBQUMsQ0FBQztJQUNsQixDQUFDLE1BQU07TUFDSEMsUUFBUSxDQUFDLENBQUM7SUFDZDtFQUNKLENBQUM7RUFFRCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0lBQ25CLElBQUlDLFNBQVMsR0FBRyxLQUFLO0lBQ3JCLElBQUlwSixNQUFNO0lBQ1YsSUFBSSxDQUFDbUIsU0FBUyxDQUFDWSxRQUFRLENBQUNaLFNBQVMsQ0FBQ2tJLGFBQWEsQ0FBQyxDQUFDLEVBQUU7TUFDL0MsTUFBTSxJQUFJclIsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUNwQztJQUNBLE9BQU8sQ0FBQ29SLFNBQVMsRUFBRTtNQUNmcEosTUFBTSxHQUFHOEksb0JBQW9CLENBQUMsQ0FBQztNQUMvQk0sU0FBUyxHQUFHUCxRQUFRLENBQUM3SSxNQUFNLENBQUM7SUFDaEM7SUFDQSxJQUFJeEksT0FBQSxDQUFPNFIsU0FBUyxNQUFLLFFBQVEsRUFBRTtNQUMvQkUsc0JBQXNCLENBQUN0SixNQUFNLEVBQUNvSixTQUFTLENBQUM7SUFDNUM7SUFDQXBCLGtEQUFNLENBQUNyRixrQkFBa0IsQ0FBQzNDLE1BQU0sRUFBQ21CLFNBQVMsQ0FBQ1ksUUFBUSxDQUFDWixTQUFTLENBQUM7RUFDbEUsQ0FBQztFQUVELElBQU1vSSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSXZKLE1BQU0sRUFBRXVFLElBQUksRUFBSztJQUNqQyxJQUFNaUYsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7TUFDbkIsSUFBTUMsWUFBWSxHQUFHekQsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQzBDLE1BQU0sQ0FBQyxDQUFDLEdBQUdhLGNBQWMsQ0FBQ3hQLE1BQU0sQ0FBQztNQUN0RSxJQUFNMlAsT0FBTyxHQUFHSCxjQUFjLENBQUNJLE1BQU0sQ0FBQ0YsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQztNQUM1RCxJQUFNMUIsSUFBSSxHQUFHLENBQUNuSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcySixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMzSixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcySixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDNUQsT0FBUTtRQUNBRyxNQUFNLEVBQUMzQixJQUFJO1FBQ1h3QixPQUFPLEVBQUNBO01BQ1IsQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFNSSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQXlCQSxDQUFJSixPQUFPLEVBQUNHLE1BQU0sRUFBSztNQUNsRCxJQUFNRSxVQUFVLEdBQUcsQ0FBQ2hLLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRzhKLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQzlKLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRzhKLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNoRSxJQUFNRyxJQUFJLEdBQUdOLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7TUFDcENLLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLEdBQUdOLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHTixPQUFPLENBQUNNLElBQUksQ0FBQyxHQUFDLENBQUMsR0FBR04sT0FBTyxDQUFDTSxJQUFJLENBQUMsR0FBQyxDQUFDO01BQ3hFLElBQU1DLFVBQVUsR0FBR1YsY0FBYyxDQUFDVyxNQUFNLENBQUMsVUFBQVIsT0FBTztRQUFBLE9BQUlBLE9BQU8sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQztNQUFBLEVBQUM7TUFDdkVDLFVBQVUsQ0FBQ3pRLElBQUksQ0FBQ3VRLFVBQVUsQ0FBQztNQUMzQlIsY0FBYyxDQUFDeFAsTUFBTSxHQUFHLENBQUM7TUFDekJrUSxVQUFVLENBQUNwVCxPQUFPLENBQUMsVUFBQXNULEtBQUs7UUFBQSxPQUFJWixjQUFjLENBQUMvUCxJQUFJLENBQUMyUSxLQUFLLENBQUM7TUFBQSxFQUFDO0lBQzNELENBQUM7SUFFRCxPQUFPO01BQ0hwSyxNQUFNLEVBQU5BLE1BQU07TUFDTjZCLE1BQU0sRUFBQzBDLElBQUk7TUFDWGlGLGNBQWMsRUFBZEEsY0FBYztNQUNkQyxRQUFRLEVBQVJBLFFBQVE7TUFDUk0seUJBQXlCLEVBQXpCQTtJQUNBLENBQUM7RUFDVCxDQUFDO0VBR0QsSUFBTVQsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUFzQkEsQ0FBSXRKLE1BQU0sRUFBRXVFLElBQUksRUFBSztJQUM3Q2dFLGNBQWMsQ0FBQzlPLElBQUksQ0FBQzhQLFVBQVUsQ0FBQ3ZKLE1BQU0sRUFBQ3VFLElBQUksQ0FBQyxDQUFDO0VBQ2hELENBQUM7RUFFRCxJQUFNMkUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN2QixJQUFJRSxTQUFTLEdBQUcsS0FBSztJQUNyQixJQUFJcEosTUFBTTtJQUNWLElBQU1xSyxhQUFhLEdBQUc5QixjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUksQ0FBQ3BILFNBQVMsQ0FBQ1ksUUFBUSxDQUFDWixTQUFTLENBQUNrSSxhQUFhLENBQUMsQ0FBQyxFQUFFO01BQy9DLE1BQU0sSUFBSXJSLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDcEM7SUFDQSxPQUFPLENBQUNvUixTQUFTLEVBQUU7TUFDZnBKLE1BQU0sR0FBR3FLLGFBQWEsQ0FBQ1osUUFBUSxDQUFDLENBQUM7TUFDakM3SyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUNtQixNQUFNLENBQUM7TUFDaENvSixTQUFTLEdBQUdQLFFBQVEsQ0FBQzdJLE1BQU0sQ0FBQzhKLE1BQU0sQ0FBQztJQUN2QztJQUNBLElBQUl0UyxPQUFBLENBQU80UixTQUFTLE1BQUssUUFBUSxJQUFJQSxTQUFTLENBQUMxQixNQUFNLENBQUMsQ0FBQyxFQUFFO01BQ3JEOUksT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFMEosY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzVDQSxjQUFjLENBQUMrQixLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDLE1BQU0sSUFBSTlTLE9BQUEsQ0FBTzRSLFNBQVMsTUFBSyxRQUFRLElBQUlBLFNBQVMsS0FBS2lCLGFBQWEsQ0FBQ3hJLE1BQU0sRUFBRTtNQUM1RXdJLGFBQWEsQ0FBQ04seUJBQXlCLENBQUMvSixNQUFNLENBQUMySixPQUFPLEVBQUMzSixNQUFNLENBQUM4SixNQUFNLENBQUM7SUFDekUsQ0FBQyxNQUFNLElBQUl0UyxPQUFBLENBQU80UixTQUFTLE1BQUssUUFBUSxFQUFFO01BQ3RDRSxzQkFBc0IsQ0FBQ3RKLE1BQU0sQ0FBQzhKLE1BQU0sRUFBQ1YsU0FBUyxDQUFDO0lBQ25EO0lBQ0FwQixrREFBTSxDQUFDckYsa0JBQWtCLENBQUMzQyxNQUFNLENBQUM4SixNQUFNLEVBQUMzSSxTQUFTLENBQUNZLFFBQVEsQ0FBQ1osU0FBUyxDQUFDO0VBQ3pFLENBQUM7RUFFRCxPQUFPO0lBQ0g5QixFQUFFLEVBQUZBLEVBQUU7SUFDRjhCLFNBQVMsRUFBVEEsU0FBUztJQUNUdUIsTUFBTSxFQUFDLElBQUk7SUFDWG9HLG9CQUFvQixFQUFwQkEsb0JBQW9CO0lBQ3BCOUcsUUFBUSxFQUFSQSxRQUFRO0lBQ1J5RyxLQUFLLEVBQUxBO0VBQ0osQ0FBQztBQUNMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCBiYXR0bGVzaGlwSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgU0hJUF9JTUFHRVMgPSB7XG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAgIGxldCBvbk5leHQ7XG4gICAgbGV0IG9uV2luO1xuICAgIGxldCBtb3ZlUmVhZHkgPSB0cnVlO1xuXG4gICAgY29uc3QgZHJhd01haW5NZW51ID0gKHNpbmdsZUluaXRpYWxpc2UsIGRvdWJsZUluaXRpYWxpc2UpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgbWVudVBhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBnYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtdGl0bGUnKTtcbiAgICAgICAgZ2FtZVRpdGxlLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXBzISdcbiAgICAgICAgbWVudVBhbi5hcHBlbmRDaGlsZChnYW1lVGl0bGUpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVQYW4pO1xuICAgICAgICBjb25zdCBidXR0b25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3RhcnRTaW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3RhcnREb3VibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHN0YXJ0U2luZ2xlKTtcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHN0YXJ0RG91YmxlKTtcbiAgICAgICAgbWVudVBhbi5hcHBlbmRDaGlsZChidXR0b25CYXIpO1xuICAgICAgICBzdGFydFNpbmdsZS50ZXh0Q29udGVudCA9ICdTaW5nbGUgUGxheWVyJztcbiAgICAgICAgc3RhcnREb3VibGUudGV4dENvbnRlbnQgPSAnVHdvIFBsYXllcic7XG4gICAgICAgIHN0YXJ0U2luZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBnZXROYW1lKHNpbmdsZUluaXRpYWxpc2UpKTtcbiAgICAgICAgc3RhcnREb3VibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIGdldE5hbWUoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBnZXROYW1lKChzZWNvbmROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZUluaXRpYWxpc2UobmFtZSxzZWNvbmROYW1lKTtcbiAgICAgICAgICAgICAgICB9LCAndHdvJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKGNiLCBzdHJpbmcgPSAnb25lJykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgbmFtZVwiKTtcbiAgICAgICAgY29uc3QgbmFtZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBuYW1lRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2dldC1uYW1lJyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobmFtZURpYWxvZyk7XG4gICAgICAgIG5hbWVEaWFsb2cuc2hvdygpO1xuICAgICAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmFtZS1pbnB1dCcpO1xuICAgICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBgQWRtaXJhbCAke3N0cmluZ30gbmFtZTogYFxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuYW1lSW5wdXQuaWQgPSAnbmFtZS1pbnB1dCc7XG4gICAgICAgIGNvbnN0IG5hbWVTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmFtZVN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIG5hbWVEaWFsb2cuYXBwZW5kQ2hpbGQobmFtZUZvcm0pO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lU3VibWl0KTtcbiAgICAgICAgbmFtZVN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdnZXQtbmFtZS1zdWJtaXQnKTtcbiAgICAgICAgbmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNiKG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBuYW1lRGlhbG9nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmFtZURpYWxvZyk7XG4gICAgICAgIH0pXG4gICAgfSAgIFxuXG4gICAgY29uc3QgcHJpbnRTdHJpbmcgPSAodG9QcmludCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtYmFyJyk7XG4gICAgICAgIHNoaXBCYXIudGV4dENvbnRlbnQgPSB0b1ByaW50O1xuICAgIH1cblxuICAgIGNvbnN0IGdldEJhdHRsZXNoaXBDb29yZHMgPSAoY29vcmRzKSA9PiB7XG4gICAgICAgIGNvbnN0IHhMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvb3Jkc1swXSs2NSk7XG4gICAgICAgIHJldHVybiBgJHt4TGV0dGVyfSR7Y29vcmRzWzFdKzF9YFxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBTY3JlZW5TZXR1cCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7bmFtZX0gcGxhY2UgeW91ciBzaGlwcyFgO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwbGFjZS1zaGlwcy10aXRsZScpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0LmlkID0gJ2xlZnQnO1xuICAgICAgICBjb25zdCBnYW1lYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lYXJlYS5pZCA9ICdnYW1lYXJlYSc7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWFyZWEpO1xuICAgICAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICAgICAgY29uc3Qgc2hpcGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwYmFyLmlkID0gJ3NoaXAtYmFyJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaGlwYmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UmVhZHlTY3JlZW4gPSAocGxheWVyLG5leHQpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgcmVhZHlEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgY29uc3QgcmVhZHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJlYWR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlYWR5RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3JlYWR5LWRpYWxvZycpO1xuICAgICAgICByZWFkeVRleHQuY2xhc3NMaXN0LmFkZCgncmVhZHktdGV4dCcpO1xuICAgICAgICByZWFkeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWFkeS1idXR0b24nKTtcbiAgICAgICAgcmVhZHlUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLmlkfSdzIHR1cm4hYDtcbiAgICAgICAgcmVhZHlCdXR0b24udGV4dENvbnRlbnQgPSAnUmVhZHknO1xuICAgICAgICByZWFkeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlYWR5RGlhbG9nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVhZHlEaWFsb2cpO1xuICAgICAgICAgICAgcmVmcmVzaChuZXh0LHBsYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZWFkeURpYWxvZy5hcHBlbmRDaGlsZChyZWFkeVRleHQpXG4gICAgICAgIHJlYWR5RGlhbG9nLmFwcGVuZENoaWxkKHJlYWR5QnV0dG9uKVxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHJlYWR5RGlhbG9nKVxuICAgICAgICByZWFkeURpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lU2NyZWVuU2V0dXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5pZCA9ICdsZWZ0JztcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHQuaWQgPSAncmlnaHQnO1xuICAgICAgICBjb25zdCBnYW1lYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lYXJlYS5pZCA9ICdnYW1lYXJlYSc7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWFyZWEpO1xuICAgICAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQocmlnaHQpO1xuICAgICAgICBjb25zdCBzaGlwYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBiYXIuaWQgPSAnc2hpcC1iYXInO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNoaXBiYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdBY3RpdmVCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZ2V0VGFyZ2V0KGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdmVSZWFkeSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIG1vdmVSZWFkeSA9IGdhbWVib2FyZC5vcHBvbmVudC5tYWtlTW92ZSh0aWxlLCBnYW1lYm9hcmQpXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0R1bW15QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd1JlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZHJhd1NoaXBzKGdhbWVib2FyZCxnYW1lYm9hcmQuaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGRyYXdIaWRkZW5SZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICAvL2RyYXcgdGhlIHRpbGVzIHRvIG1haW50YWluIHNpemUgY29uc2lzdGVuY3lcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGlkZGVuLnRleHRDb250ZW50ID0gXCJEYXRhIEVuY3J5cHRlZC4uLlwiXG4gICAgICAgIGhpZGRlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYm9hcmQnKTtcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoaGlkZGVuKVxuICAgIH1cblxuICAgIGNvbnN0IHJlZnJlc2ggPSAoY3VycmVudCxwcmV2aW91cykgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKTtcbiAgICAgICAgY29uc3QgcmVjb25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jyk7XG4gICAgICAgIGFjdGl2ZUFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlY29uQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCFjdXJyZW50LmlzQ29tcCkge1xuICAgICAgICAgICAgZHJhd0FjdGl2ZUJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3UmVjb25Cb2FyZChjdXJyZW50LmdhbWVib2FyZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkcmF3RHVtbXlBY3RpdmVCb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd0hpZGRlblJlY29uQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1NoaXBzKHByZXZpb3VzLmdhbWVib2FyZCxwcmV2aW91cy5nYW1lYm9hcmQuaWQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVuZGVyQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgbW92ZVJlYWR5ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCBjb29yZFN0cmluZyA9IGdldEJhdHRsZXNoaXBDb29yZHMoY29vcmRzKTtcbiAgICAgICAgcHJpbnRTdHJpbmcoYENvbXB1dGVyIGF0dGFja3MgJHtjb29yZFN0cmluZ30uLi5gKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHByaW50U3RyaW5nKGAke2Nvb3JkU3RyaW5nfSBpcyBhICR7Z2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKX0hYCksNTAwKVxuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrc1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHN0YWxsTmV4dFR1cm4gPSBhd2FpdCBzdGFsbENvbXB1dGVyTW92ZSgpO1xuICAgICAgICBzdGFsbE5leHRUdXJuKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUGxheWVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIikucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGFjdGl2ZVpvbmUuY2hpbGRyZW5bY29vcmRzWzFdXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5jaGlsZHJlbltjb29yZHNbMF1dO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICBjb25zdCBjb29yZFN0cmluZyA9IGdldEJhdHRsZXNoaXBDb29yZHMoY29vcmRzKTtcbiAgICAgICAgcHJpbnRTdHJpbmcoYCR7Z2FtZWJvYXJkLm9wcG9uZW50LmlkfSBhdHRhY2tzICR7Y29vcmRTdHJpbmd9Li4uYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtjb29yZFN0cmluZ30gaXMgYSAke2dhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSl9IWApLDUwMClcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHNob3dQbGF5ZXJzVHVybiA9IGF3YWl0IHNob3dQbGF5ZXJSZXN1bHQoKTtcbiAgICAgICAgc2hvd1BsYXllcnNUdXJuKCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vua1NoaXAgPSAoc2hpcCwgbmFtZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHByaW50U3RyaW5nKGAke25hbWV9J3MgJHtzaGlwLm5hbWV9IGhhcyBiZWVuIHN1bmshYCksMjUwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1BsYXllclJlc3VsdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyUmVzdWx0VGltZXIgPSBhd2FpdCBwcm9taXNpZnkob25OZXh0LCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIHBsYXllclJlc3VsdFRpbWVyXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YWxsQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpbmlzaGVkID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgICAgIHJldHVybiBjb21wdXRlckZpbmlzaGVkXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb21pc2lmeSA9IChjYWxsYmFjayx0aW1lcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoY2FsbGJhY2spLCB0aW1lcikpO1xuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGRyYXdTaGlwcyA9IChnYW1lYm9hcmQsb25ib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdhbWVib2FyZC5nZXRTaGlwcygpO1xuICAgICAgICBjb25zdCBwbGF5em9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9uYm9hcmQpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24ocGxheXpvbmUsIGdhbWVib2FyZC5nZXRMZW5ndGgoKSwgc2hpcClcbiAgICAgICAgICAgIHBsYXl6b25lLmFwcGVuZENoaWxkKGRyYXdTaGlwKGRpbWVuc2lvbnMpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3U2hpcCA9IChkaW1lbnNpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwLW1hcmtlcicpO1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLGB0b3A6JHtkaW1lbnNpb25zLnRvcH07bGVmdDoke2RpbWVuc2lvbnMubGVmdH07d2lkdGg6JHtkaW1lbnNpb25zLmxlbmd0aH07aGVpZ2h0OiR7ZGltZW5zaW9ucy5oZWlnaHR9YCk7XG4gICAgICAgIHJldHVybiBzaGlwXG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24gPSAoem9uZSwgc2NhbGUgLHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgdW5pdCA9IHpvbmUub2Zmc2V0V2lkdGggLyBzY2FsZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVswXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVsxXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAub3JpZW50YXRpb24gPyBzaGlwLmxlbmd0aCAqIHVuaXQgOiB1bml0IDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgOiBzaGlwLmxlbmd0aCAqIHVuaXQgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIGxlbmd0aDpsZW5ndGgrJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDpoZWlnaHQrJ3B4J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFyZ2V0ID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoIWJ1dHRvbikgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBidXR0b247XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudC5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgLy8gRmluZCB0aGUgY29vcmRpbmF0ZXMgdGhyb3VnaCB0aGUgZWxlbWVudHMgcG9zaXRpb24gYW1vbmdzdCBpdHMgc2libGluZ3NcbiAgICAgICAgY29uc3QgeSA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYm9hcmQuY2hpbGRyZW4scGFyZW50KTtcbiAgICAgICAgY29uc3QgeCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLHRhcmdldCk7XG4gICAgICAgIHJldHVybiBbeCx5XVxuICAgIH1cblxuICAgIGNvbnN0IGVuZEdhbWUgPSAod2lubmVyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXIgJywgd2lubmVyLCAnIGlzIHZpY3RvcmlvdXMhJylcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgdmljdG9yeU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdmljdG9yeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmljdG9yeVRleHQudGV4dENvbnRlbnQgPSBgR2FtZSBvdmVyISAke3dpbm5lcn0gaXMgdmljdG9yaW91cyFgO1xuICAgICAgICBjb25zdCB2aWN0b3J5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHZpY3RvcnlCdXR0b24udGV4dENvbnRlbnQgPSBgTWFpbiBNZW51YDtcbiAgICAgICAgdmljdG9yeU1lbnUuY2xhc3NMaXN0LmFkZCgndmljdG9yeS1tZW51Jyk7XG4gICAgICAgIHZpY3RvcnlUZXh0LmNsYXNzTGlzdC5hZGQoJ3ZpY3RvcnktdGV4dCcpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZpY3RvcnktYnV0dG9uJyk7XG4gICAgICAgIHZpY3RvcnlNZW51LmFwcGVuZENoaWxkKHZpY3RvcnlUZXh0KTtcbiAgICAgICAgdmljdG9yeU1lbnUuYXBwZW5kQ2hpbGQodmljdG9yeUJ1dHRvbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodmljdG9yeU1lbnUpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25XaW4pO1xuICAgIH1cblxuXG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd1NoaXBzLFxuICAgICAgICBnYW1lU2NyZWVuU2V0dXAsXG4gICAgICAgIHNoaXBTY3JlZW5TZXR1cCxcbiAgICAgICAgcmVuZGVyQ29tcHV0ZXJNb3ZlLFxuICAgICAgICBlbmRHYW1lLFxuICAgICAgICBnZXRUYXJnZXQsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICBkcmF3TWFpbk1lbnUsXG4gICAgICAgIHNob3dSZWFkeVNjcmVlbixcbiAgICAgICAgc2V0IG9uTmV4dChuZXh0VHVybikge1xuICAgICAgICAgICAgb25OZXh0ID0gbmV4dFR1cm47XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbldpbih3aW4pIHtcbiAgICAgICAgICAgIG9uV2luID0gd2luO1xuICAgICAgICB9LFxuICAgIH1cbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChuYW1lID0gbnVsbCkgPT4ge1xuICAgIGxldCBoaXRDb3VudGVyID0gMDtcblxuICAgIGxldCBvcmllbnRhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlID0gKCkgPT4ge1xuICAgICAgICBvcmllbnRhdGlvbiA9ICFvcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBTSElQX1NJWkVTID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChoaXRDb3VudGVyID49IFNISVBfU0laRVNbbmFtZV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uOltdLFxuICAgICAgICBnZXQgb3JpZW50YXRpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb3JpZW50YXRpb24ob3IpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gb3I7XG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheWVkTmFtZSA9IG5hbWUuc3BsaXQoJycpO1xuICAgICAgICAgICAgYXJyYXllZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWVkTmFtZS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBTSElQX1NJWkVTW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgbWFrZU1vdmUgPSAodGlsZSwgb3Bwb25lbnRCb2FyZCkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHRpbGUuXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG9wcG9uZW50Qm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vdmUgPT09ICdvYmplY3QnICYmIG1vdmUuaXNTdW5rKCkpIFNjcmVlbi5zdW5rU2hpcChtb3ZlLCBvcHBvbmVudEJvYXJkLmlkKTsgXG4gICAgICAgICAgICBTY3JlZW4ucmVuZGVyUGxheWVyTW92ZSh0aWxlLG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWluZzogZmFsc2UsXG4gICAgICAgIGlzQ29tcDogZmFsc2UsXG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIG1ha2VNb3ZlXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBDb21wdXRlciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIGxldCBjdXJyZW50U3VjY2VzcyA9IFtdO1xuXG4gICAgY29uc3QgbWFrZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxuICAgICAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxuICAgICAgICAgICAgY3J1aXNlcjogU2hpcCgnY3J1aXNlcicpLFxuICAgICAgICAgICAgc3VibWFyaW5lOiBTaGlwKCdzdWJtYXJpbmUnKSxcbiAgICAgICAgICAgIGRlc3Ryb3llcjogU2hpcCgnZGVzdHJveWVyJyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBtYWtlU2hpcHMoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmdldExlbmd0aCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjIpID8gdHJ1ZSA6IGZhbHNlIDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW3NoaXBdLHgseSxvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5ub3QgcGxhY2UgYXQ6IFwiLCB4LCB5LCBcIiB3aXRoIFwiLCBvcmllbnRhdGlvbixcIiBvcmllbnRhdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgICAgICBcbiAgICBjb25zdCBwbGF5VGlsZSA9ICh0aWxlKSA9PiB7XG4gICAgICAgIGlmICghdGlsZSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5oaXRTcXVhcmUodGlsZVswXSx0aWxlWzFdKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGl0ID09PSAnb2JqZWN0JyAmJiBoaXQuaXNTdW5rKCkpIFNjcmVlbi5zdW5rU2hpcChoaXQsIGdhbWVib2FyZC5vcHBvbmVudC5pZCk7IFxuICAgICAgICAgICAgaWYgKGhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib3VuZGFyeSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgY29uc3QgcmFuWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIGNvbnN0IHJhblkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm91bmRhcnkpO1xuICAgICAgICByZXR1cm4gW3JhblgscmFuWV07XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50U3VjY2Vzcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVkdWNhdGVkTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVtYk1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGR1bWJNb3ZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZVRha2VuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGlmICghZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5jaGVja0ZvckVtcHR5KCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIE1vcmUgU3BhY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCFtb3ZlVGFrZW4pIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IGdlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICBtb3ZlVGFrZW4gPSBwbGF5VGlsZShjb29yZHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcG9wdWxhdGVDdXJyZW50U3VjY2Vzcyhjb29yZHMsbW92ZVRha2VuKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JlZW4ucmVuZGVyQ29tcHV0ZXJNb3ZlKGNvb3JkcyxnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRTaGlwID0gKGNvb3Jkcywgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxNb3ZlcyA9IFtbMCwxXSxbMCwtMV0sWzEsMF0sWy0xLDBdXTtcblxuICAgICAgICBjb25zdCBuZXh0TW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvdGVudGlhbE1vdmVzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gcG90ZW50aWFsTW92ZXMuc3BsaWNlKHJhbmRvbUNob2ljZSwxKS5mbGF0KCk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gW2Nvb3Jkc1swXSArIGhlYWRpbmdbMF0sY29vcmRzWzFdICsgaGVhZGluZ1sxXV07XG4gICAgICAgICAgICByZXR1cm4gIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrOm1vdmUsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6aGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVjYWxjdWxhdGVQb3RlbnRpYWxNb3ZlcyA9IChoZWFkaW5nLGF0dGFjaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3SGVhZGluZyA9IFtjb29yZHNbMF0gLSBhdHRhY2tbMF0sY29vcmRzWzFdIC0gYXR0YWNrWzFdXTtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBoZWFkaW5nWzBdICE9IDAgPyAwIDogMSA7XG4gICAgICAgICAgICBuZXdIZWFkaW5nW2F4aXNdID0gaGVhZGluZ1theGlzXSA+IDAgPyBoZWFkaW5nW2F4aXNdKzEgOiBoZWFkaW5nW2F4aXNdLTE7XG4gICAgICAgICAgICBjb25zdCBzdGlsbFZhbGlkID0gcG90ZW50aWFsTW92ZXMuZmlsdGVyKGhlYWRpbmcgPT4gaGVhZGluZ1theGlzXSAhPSAwKTtcbiAgICAgICAgICAgIHN0aWxsVmFsaWQucHVzaChuZXdIZWFkaW5nKTtcbiAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBzdGlsbFZhbGlkLmZvckVhY2goY29vcmQgPT4gcG90ZW50aWFsTW92ZXMucHVzaChjb29yZCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb29yZHMsXG4gICAgICAgICAgICB0YXJnZXQ6c2hpcCxcbiAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzLFxuICAgICAgICAgICAgbmV4dE1vdmUsXG4gICAgICAgICAgICByZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzXG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzID0gKGNvb3Jkcywgc2hpcCkgPT4ge1xuICAgICAgICBjdXJyZW50U3VjY2Vzcy5wdXNoKHRhcmdldFNoaXAoY29vcmRzLHNoaXApKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZHVjYXRlZE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb3ZlVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGN1cnJlbnRTdWNjZXNzWzBdO1xuICAgICAgICBpZiAoIWdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBjdXJyZW50VGFyZ2V0Lm5leHRNb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXlpbmcgOiBcIixjb29yZHMpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gcGxheVRpbGUoY29vcmRzLmF0dGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnICYmIG1vdmVUYWtlbi5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGluZzogXCIsIGN1cnJlbnRTdWNjZXNzWzBdKTtcbiAgICAgICAgICAgIGN1cnJlbnRTdWNjZXNzLnNoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcgJiYgbW92ZVRha2VuID09PSBjdXJyZW50VGFyZ2V0LnRhcmdldCkge1xuICAgICAgICAgICAgY3VycmVudFRhcmdldC5yZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzKGNvb3Jkcy5oZWFkaW5nLGNvb3Jkcy5hdHRhY2spXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MoY29vcmRzLmF0dGFjayxtb3ZlVGFrZW4pXG4gICAgICAgIH1cbiAgICAgICAgU2NyZWVuLnJlbmRlckNvbXB1dGVyTW92ZShjb29yZHMuYXR0YWNrLGdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIGlzQ29tcDp0cnVlLFxuICAgICAgICBnZW5lcmF0ZVJhbmRvbUNvb3JkcyxcbiAgICAgICAgbWFrZU1vdmUsXG4gICAgICAgIHBsYWNlXG4gICAgfVxufSJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJTaGlwIiwiYmF0dGxlc2hpcEltYWdlIiwiU0hJUF9JTUFHRVMiLCJiYXR0bGVzaGlwIiwib25OZXh0Iiwib25XaW4iLCJtb3ZlUmVhZHkiLCJkcmF3TWFpbk1lbnUiLCJzaW5nbGVJbml0aWFsaXNlIiwiZG91YmxlSW5pdGlhbGlzZSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJtZW51UGFuIiwiY3JlYXRlRWxlbWVudCIsImdhbWVUaXRsZSIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJidXR0b25CYXIiLCJzdGFydFNpbmdsZSIsInN0YXJ0RG91YmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldE5hbWUiLCJzZWNvbmROYW1lIiwiY2IiLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwibmFtZURpYWxvZyIsInNob3ciLCJuYW1lRm9ybSIsIm5hbWVMYWJlbCIsInNldEF0dHJpYnV0ZSIsImNvbmNhdCIsIm5hbWVJbnB1dCIsImlkIiwibmFtZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInByaW50U3RyaW5nIiwidG9QcmludCIsInNoaXBCYXIiLCJnZXRFbGVtZW50QnlJZCIsImdldEJhdHRsZXNoaXBDb29yZHMiLCJjb29yZHMiLCJ4TGV0dGVyIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2hpcFNjcmVlblNldHVwIiwidGl0bGUiLCJsZWZ0IiwiZ2FtZWFyZWEiLCJzaGlwYmFyIiwic2hvd1JlYWR5U2NyZWVuIiwicGxheWVyIiwicmVhZHlEaWFsb2ciLCJyZWFkeVRleHQiLCJyZWFkeUJ1dHRvbiIsInJlZnJlc2giLCJzaG93TW9kYWwiLCJnYW1lU2NyZWVuU2V0dXAiLCJyaWdodCIsImRyYXdBY3RpdmVCb2FyZCIsImdhbWVib2FyZCIsInpvbmVEb20iLCJib2FyZCIsInNpemUiLCJnZXRMZW5ndGgiLCJyb3dDb250YWluZXIiLCJqIiwidGlsZSIsInNxdWFyZVN0YXR1cyIsImdldFRhcmdldCIsInRhcmdldCIsImNsb3Nlc3QiLCJvcHBvbmVudCIsIm1ha2VNb3ZlIiwiZHJhd0R1bW15QWN0aXZlQm9hcmQiLCJkcmF3UmVjb25Cb2FyZCIsImRyYXdTaGlwcyIsImRyYXdIaWRkZW5SZWNvbkJvYXJkIiwiaGlkZGVuIiwiY3VycmVudCIsInByZXZpb3VzIiwiYWN0aXZlQXJlYSIsInJlY29uQXJlYSIsImlzQ29tcCIsInJlbmRlckNvbXB1dGVyTW92ZSIsIl9yZWYiLCJfY2FsbGVlIiwiYWN0aXZlWm9uZSIsInJvdyIsImNlbGwiLCJjb29yZFN0cmluZyIsInJlbW92ZUF0dGFja01hcmtlciIsInN0YWxsTmV4dFR1cm4iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY2hpbGRyZW4iLCJwcm9taXNpZnkiLCJyZW1vdmUiLCJzZXRUaW1lb3V0Iiwic3RhbGxDb21wdXRlck1vdmUiLCJfeCIsIl94MiIsInJlbmRlclBsYXllck1vdmUiLCJfcmVmMiIsIl9jYWxsZWUyIiwic2hvd1BsYXllcnNUdXJuIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic2hvd1BsYXllclJlc3VsdCIsIl94MyIsIl94NCIsInN1bmtTaGlwIiwic2hpcCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJwbGF5ZXJSZXN1bHRUaW1lciIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl9yZWY0IiwiX2NhbGxlZTQiLCJjb21wdXRlckZpbmlzaGVkIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiY2FsbGJhY2siLCJ0aW1lciIsIm9uYm9hcmQiLCJzaGlwcyIsImdldFNoaXBzIiwicGxheXpvbmUiLCJkaW1lbnNpb25zIiwiY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24iLCJkcmF3U2hpcCIsInRvcCIsImhlaWdodCIsInpvbmUiLCJzY2FsZSIsInVuaXQiLCJvZmZzZXRXaWR0aCIsIk1hdGgiLCJmbG9vciIsInBvc2l0aW9uIiwib3JpZW50YXRpb24iLCJidXR0b24iLCJwYXJlbnQiLCJ5IiwiQXJyYXkiLCJpbmRleE9mIiwieCIsImVuZEdhbWUiLCJ3aW5uZXIiLCJ2aWN0b3J5TWVudSIsInZpY3RvcnlUZXh0IiwidmljdG9yeUJ1dHRvbiIsIm5leHRUdXJuIiwid2luIiwiaGl0Q291bnRlciIsInJvdGF0ZSIsIlNISVBfU0laRVMiLCJjYXJyaWVyIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImhpdCIsImlzU3VuayIsIm9yIiwiYXJyYXllZE5hbWUiLCJzcGxpdCIsInRvVXBwZXJDYXNlIiwiam9pbiIsIlNjcmVlbiIsIlBsYXllciIsIm9wcG9uZW50Qm9hcmQiLCJtb3ZlIiwiaGl0U3F1YXJlIiwicGxheWluZyIsIkNvbXB1dGVyIiwiY3VycmVudFN1Y2Nlc3MiLCJtYWtlU2hpcHMiLCJwbGFjZSIsInBsYWNlZCIsInJhbmRvbSIsInBsYWNlU2hpcCIsInBsYXlUaWxlIiwiZ2VuZXJhdGVSYW5kb21Db29yZHMiLCJib3VuZGFyeSIsInJhblgiLCJyYW5ZIiwiZWR1Y2F0ZWRNb3ZlIiwiZHVtYk1vdmUiLCJtb3ZlVGFrZW4iLCJjaGVja0ZvckVtcHR5IiwicG9wdWxhdGVDdXJyZW50U3VjY2VzcyIsInRhcmdldFNoaXAiLCJwb3RlbnRpYWxNb3ZlcyIsIm5leHRNb3ZlIiwicmFuZG9tQ2hvaWNlIiwiaGVhZGluZyIsInNwbGljZSIsImZsYXQiLCJhdHRhY2siLCJyZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzIiwibmV3SGVhZGluZyIsImF4aXMiLCJzdGlsbFZhbGlkIiwiZmlsdGVyIiwiY29vcmQiLCJjdXJyZW50VGFyZ2V0Iiwic2hpZnQiXSwic291cmNlUm9vdCI6IiJ9