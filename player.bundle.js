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
        // nameDialog.parentNode.removeChild(nameDialog);
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
            printString("".concat(gameboard.opponent.gameboard.opponent.id, " attacks ").concat(coordString, "..."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDakssTUFBTSxDQUFDNkosT0FBTyxFQUFDN0osTUFBTSxDQUFDZ0ssTUFBTSxDQUFDO0lBQ3pFLENBQUMsTUFBTSxJQUFJdlMsT0FBQSxDQUFPNlIsU0FBUyxNQUFLLFFBQVEsRUFBRTtNQUN0Q0Usc0JBQXNCLENBQUN4SixNQUFNLENBQUNnSyxNQUFNLEVBQUNWLFNBQVMsQ0FBQztJQUNuRDtJQUNBcEIsa0RBQU0sQ0FBQ3JGLGtCQUFrQixDQUFDN0MsTUFBTSxDQUFDZ0ssTUFBTSxFQUFDM0ksU0FBUyxDQUFDWSxRQUFRLENBQUNaLFNBQVMsQ0FBQztFQUN6RSxDQUFDO0VBRUQsT0FBTztJQUNIL0IsRUFBRSxFQUFGQSxFQUFFO0lBQ0YrQixTQUFTLEVBQVRBLFNBQVM7SUFDVHVCLE1BQU0sRUFBQyxJQUFJO0lBQ1hvRyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtJQUNwQjlHLFFBQVEsRUFBUkEsUUFBUTtJQUNSeUcsS0FBSyxFQUFMQTtFQUNKLENBQUM7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kdWxlcy9zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvcGxheWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQgYmF0dGxlc2hpcEltYWdlIGZyb20gXCIuLi9pbWFnZXMvYmF0dGxlc2hpcC5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IFNISVBfSU1BR0VTID0ge1xuICAgIGJhdHRsZXNoaXA6IGJhdHRsZXNoaXBJbWFnZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgICBsZXQgb25OZXh0O1xuICAgIGxldCBvbldpbjtcbiAgICBsZXQgbW92ZVJlYWR5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRyYXdNYWluTWVudSA9IChzaW5nbGVJbml0aWFsaXNlLCBkb3VibGVJbml0aWFsaXNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IG1lbnVQYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudVBhbi5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnUnKVxuICAgICAgICBjb25zdCBnYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtdGl0bGUnKTtcbiAgICAgICAgZ2FtZVRpdGxlLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXBzISdcbiAgICAgICAgbWVudVBhbi5hcHBlbmRDaGlsZChnYW1lVGl0bGUpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVQYW4pO1xuICAgICAgICBjb25zdCBidXR0b25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uQmFyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1iYXInKVxuICAgICAgICBjb25zdCBzdGFydFNpbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdGFydFNpbmdsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbicpXG4gICAgICAgIGNvbnN0IHN0YXJ0RG91YmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0RG91YmxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJylcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHN0YXJ0U2luZ2xlKTtcbiAgICAgICAgYnV0dG9uQmFyLmFwcGVuZENoaWxkKHN0YXJ0RG91YmxlKTtcbiAgICAgICAgbWVudVBhbi5hcHBlbmRDaGlsZChidXR0b25CYXIpO1xuICAgICAgICBzdGFydFNpbmdsZS50ZXh0Q29udGVudCA9ICdTaW5nbGUgUGxheWVyJztcbiAgICAgICAgc3RhcnREb3VibGUudGV4dENvbnRlbnQgPSAnVHdvIFBsYXllcic7XG4gICAgICAgIHN0YXJ0U2luZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBnZXROYW1lKHNpbmdsZUluaXRpYWxpc2UpKTtcbiAgICAgICAgc3RhcnREb3VibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIGdldE5hbWUoKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBnZXROYW1lKChzZWNvbmROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvdWJsZUluaXRpYWxpc2UobmFtZSxzZWNvbmROYW1lKTtcbiAgICAgICAgICAgICAgICB9LCAndHdvJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKGNiLCBzdHJpbmcgPSAnb25lJykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgbmFtZVwiKTtcbiAgICAgICAgY29uc3QgbmFtZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBuYW1lRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2dldC1uYW1lJyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobmFtZURpYWxvZyk7XG4gICAgICAgIG5hbWVEaWFsb2cuc2hvdygpO1xuICAgICAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmFtZS1pbnB1dCcpO1xuICAgICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBgQWRtaXJhbCAke3N0cmluZ30gbmFtZTogYFxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuYW1lSW5wdXQuaWQgPSAnbmFtZS1pbnB1dCc7XG4gICAgICAgIGNvbnN0IG5hbWVTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmFtZVN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIG5hbWVEaWFsb2cuYXBwZW5kQ2hpbGQobmFtZUZvcm0pO1xuICAgICAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgICAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lU3VibWl0KTtcbiAgICAgICAgbmFtZVN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdnZXQtbmFtZS1zdWJtaXQnKTtcbiAgICAgICAgbmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChuYW1lSW5wdXQudmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgICAgICBjYihuYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIG5hbWVEaWFsb2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuYW1lRGlhbG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9ICAgXG5cbiAgICBjb25zdCBwcmludFN0cmluZyA9ICh0b1ByaW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1iYXInKTtcbiAgICAgICAgc2hpcEJhci50ZXh0Q29udGVudCA9IHRvUHJpbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QmF0dGxlc2hpcENvb3JkcyA9IChjb29yZHMpID0+IHtcbiAgICAgICAgY29uc3QgeExldHRlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29vcmRzWzBdKzY1KTtcbiAgICAgICAgcmV0dXJuIGAke3hMZXR0ZXJ9JHtjb29yZHNbMV0rMX1gXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcFNjcmVlblNldHVwID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtuYW1lfSBwbGFjZSB5b3VyIHNoaXBzIWA7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXBzLXRpdGxlJyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnQuaWQgPSAnbGVmdCc7XG4gICAgICAgIGNvbnN0IGdhbWVhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVhcmVhLmlkID0gJ2dhbWVhcmVhJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChnYW1lYXJlYSk7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKGxlZnQpO1xuICAgICAgICBjb25zdCBzaGlwYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXBiYXIuaWQgPSAnc2hpcC1iYXInO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNoaXBiYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dSZWFkeVNjcmVlbiA9IChwbGF5ZXIsbmV4dCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCByZWFkeURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBjb25zdCByZWFkeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcmVhZHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmVhZHlEaWFsb2cuY2xhc3NMaXN0LmFkZCgncmVhZHktZGlhbG9nJyk7XG4gICAgICAgIHJlYWR5VGV4dC5jbGFzc0xpc3QuYWRkKCdyZWFkeS10ZXh0Jyk7XG4gICAgICAgIHJlYWR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlYWR5LWJ1dHRvbicpO1xuICAgICAgICByZWFkeVRleHQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuaWR9J3MgdHVybiFgO1xuICAgICAgICByZWFkeUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZWFkeSc7XG4gICAgICAgIHJlYWR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcmVhZHlEaWFsb2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZWFkeURpYWxvZyk7XG4gICAgICAgICAgICByZWZyZXNoKG5leHQscGxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlYWR5RGlhbG9nLmFwcGVuZENoaWxkKHJlYWR5VGV4dClcbiAgICAgICAgcmVhZHlEaWFsb2cuYXBwZW5kQ2hpbGQocmVhZHlCdXR0b24pXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocmVhZHlEaWFsb2cpXG4gICAgICAgIHJlYWR5RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVTY3JlZW5TZXR1cCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0LmlkID0gJ2xlZnQnO1xuICAgICAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodC5pZCA9ICdyaWdodCc7XG4gICAgICAgIGNvbnN0IGdhbWVhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVhcmVhLmlkID0gJ2dhbWVhcmVhJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChnYW1lYXJlYSk7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKGxlZnQpO1xuICAgICAgICBnYW1lYXJlYS5hcHBlbmRDaGlsZChyaWdodCk7XG4gICAgICAgIGNvbnN0IHNoaXBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcGJhci5pZCA9ICdzaGlwLWJhcic7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2hpcGJhcik7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0FjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBnZXRUYXJnZXQoZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykpO1xuICAgICAgICAgICAgICAgIGlmICghbW92ZVJlYWR5KSByZXR1cm47XG4gICAgICAgICAgICAgICAgbW92ZVJlYWR5ID0gZ2FtZWJvYXJkLm9wcG9uZW50Lm1ha2VNb3ZlKHRpbGUsIGdhbWVib2FyZClcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3RHVtbXlBY3RpdmVCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkcmF3UmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkcmF3U2hpcHMoZ2FtZWJvYXJkLGdhbWVib2FyZC5pZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhd0hpZGRlblJlY29uQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0XCIpO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIC8vZHJhdyB0aGUgdGlsZXMgdG8gbWFpbnRhaW4gc2l6ZSBjb25zaXN0ZW5jeVxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaWRkZW4udGV4dENvbnRlbnQgPSBcIkRhdGEgRW5jcnlwdGVkLi4uXCJcbiAgICAgICAgaGlkZGVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1ib2FyZCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChoaWRkZW4pXG4gICAgfVxuXG4gICAgY29uc3QgcmVmcmVzaCA9IChjdXJyZW50LHByZXZpb3VzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBjb25zdCByZWNvbkFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKTtcbiAgICAgICAgYWN0aXZlQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVjb25BcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIWN1cnJlbnQuaXNDb21wKSB7XG4gICAgICAgICAgICBkcmF3QWN0aXZlQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdSZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRyYXdEdW1teUFjdGl2ZUJvYXJkKHByZXZpb3VzLmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3SGlkZGVuUmVjb25Cb2FyZChjdXJyZW50LmdhbWVib2FyZCk7XG4gICAgICAgICAgICBkcmF3U2hpcHMocHJldmlvdXMuZ2FtZWJvYXJkLHByZXZpb3VzLmdhbWVib2FyZC5pZClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZW5kZXJDb21wdXRlck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBtb3ZlUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IGNvb3JkU3RyaW5nID0gZ2V0QmF0dGxlc2hpcENvb3Jkcyhjb29yZHMpO1xuICAgICAgICBwcmludFN0cmluZyhgQ29tcHV0ZXIgYXR0YWNrcyAke2Nvb3JkU3RyaW5nfS4uLmApO1xuICAgICAgICBjb25zdCByZW1vdmVBdHRhY2tNYXJrZXIgPSBhd2FpdCBwcm9taXNpZnkoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKSwxMDAwKTtcbiAgICAgICAgcmVtb3ZlQXR0YWNrTWFya2VyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJpbnRTdHJpbmcoYCR7Y29vcmRTdHJpbmd9IGlzIGEgJHtnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pfSFgKSw1MDApXG4gICAgICAgIC8vZ2V0IHJlc3VsdCBvZiBhdHRhY2tzXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc3RhbGxOZXh0VHVybiA9IGF3YWl0IHN0YWxsQ29tcHV0ZXJNb3ZlKCk7XG4gICAgICAgIHN0YWxsTmV4dFR1cm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQbGF5ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IGNvb3JkU3RyaW5nID0gZ2V0QmF0dGxlc2hpcENvb3Jkcyhjb29yZHMpO1xuICAgICAgICBwcmludFN0cmluZyhgJHtnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLm9wcG9uZW50LmlkfSBhdHRhY2tzICR7Y29vcmRTdHJpbmd9Li4uYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtjb29yZFN0cmluZ30gaXMgYSAke2dhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSl9IWApLDUwMClcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHNob3dQbGF5ZXJzVHVybiA9IGF3YWl0IHNob3dQbGF5ZXJSZXN1bHQoKTtcbiAgICAgICAgc2hvd1BsYXllcnNUdXJuKCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vua1NoaXAgPSAoc2hpcCwgbmFtZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHByaW50U3RyaW5nKGAke25hbWV9J3MgJHtzaGlwLm5hbWV9IGhhcyBiZWVuIHN1bmshYCksMjUwMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1BsYXllclJlc3VsdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyUmVzdWx0VGltZXIgPSBhd2FpdCBwcm9taXNpZnkob25OZXh0LCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIHBsYXllclJlc3VsdFRpbWVyXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YWxsQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpbmlzaGVkID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgICAgIHJldHVybiBjb21wdXRlckZpbmlzaGVkXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb21pc2lmeSA9IChjYWxsYmFjayx0aW1lcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoY2FsbGJhY2spLCB0aW1lcikpO1xuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGRyYXdTaGlwcyA9IChnYW1lYm9hcmQsb25ib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdhbWVib2FyZC5nZXRTaGlwcygpO1xuICAgICAgICBjb25zdCBwbGF5em9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9uYm9hcmQpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24ocGxheXpvbmUsIGdhbWVib2FyZC5nZXRMZW5ndGgoKSwgc2hpcClcbiAgICAgICAgICAgIHBsYXl6b25lLmFwcGVuZENoaWxkKGRyYXdTaGlwKGRpbWVuc2lvbnMpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3U2hpcCA9IChkaW1lbnNpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwLW1hcmtlcicpO1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLGB0b3A6JHtkaW1lbnNpb25zLnRvcH07bGVmdDoke2RpbWVuc2lvbnMubGVmdH07d2lkdGg6JHtkaW1lbnNpb25zLmxlbmd0aH07aGVpZ2h0OiR7ZGltZW5zaW9ucy5oZWlnaHR9YCk7XG4gICAgICAgIHJldHVybiBzaGlwXG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24gPSAoem9uZSwgc2NhbGUgLHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgdW5pdCA9IHpvbmUub2Zmc2V0V2lkdGggLyBzY2FsZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVswXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVsxXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAub3JpZW50YXRpb24gPyBzaGlwLmxlbmd0aCAqIHVuaXQgOiB1bml0IDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgOiBzaGlwLmxlbmd0aCAqIHVuaXQgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIGxlbmd0aDpsZW5ndGgrJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDpoZWlnaHQrJ3B4J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFyZ2V0ID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoIWJ1dHRvbikgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBidXR0b247XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudC5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgLy8gRmluZCB0aGUgY29vcmRpbmF0ZXMgdGhyb3VnaCB0aGUgZWxlbWVudHMgcG9zaXRpb24gYW1vbmdzdCBpdHMgc2libGluZ3NcbiAgICAgICAgY29uc3QgeSA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYm9hcmQuY2hpbGRyZW4scGFyZW50KTtcbiAgICAgICAgY29uc3QgeCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLHRhcmdldCk7XG4gICAgICAgIHJldHVybiBbeCx5XVxuICAgIH1cblxuICAgIGNvbnN0IGVuZEdhbWUgPSAod2lubmVyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXIgJywgd2lubmVyLCAnIGlzIHZpY3RvcmlvdXMhJylcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgdmljdG9yeU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdmljdG9yeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmljdG9yeVRleHQudGV4dENvbnRlbnQgPSBgR2FtZSBvdmVyISAke3dpbm5lcn0gaXMgdmljdG9yaW91cyFgO1xuICAgICAgICBjb25zdCB2aWN0b3J5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHZpY3RvcnlCdXR0b24udGV4dENvbnRlbnQgPSBgTWFpbiBNZW51YDtcbiAgICAgICAgdmljdG9yeU1lbnUuY2xhc3NMaXN0LmFkZCgndmljdG9yeS1tZW51Jyk7XG4gICAgICAgIHZpY3RvcnlUZXh0LmNsYXNzTGlzdC5hZGQoJ3ZpY3RvcnktdGV4dCcpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG4gICAgICAgIHZpY3RvcnlNZW51LmFwcGVuZENoaWxkKHZpY3RvcnlUZXh0KTtcbiAgICAgICAgdmljdG9yeU1lbnUuYXBwZW5kQ2hpbGQodmljdG9yeUJ1dHRvbik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodmljdG9yeU1lbnUpO1xuICAgICAgICB2aWN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25XaW4pO1xuICAgIH1cblxuXG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd1NoaXBzLFxuICAgICAgICBnYW1lU2NyZWVuU2V0dXAsXG4gICAgICAgIHNoaXBTY3JlZW5TZXR1cCxcbiAgICAgICAgcmVuZGVyQ29tcHV0ZXJNb3ZlLFxuICAgICAgICBlbmRHYW1lLFxuICAgICAgICBnZXRUYXJnZXQsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICBkcmF3TWFpbk1lbnUsXG4gICAgICAgIHNob3dSZWFkeVNjcmVlbixcbiAgICAgICAgc2V0IG9uTmV4dChuZXh0VHVybikge1xuICAgICAgICAgICAgb25OZXh0ID0gbmV4dFR1cm47XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbldpbih3aW4pIHtcbiAgICAgICAgICAgIG9uV2luID0gd2luO1xuICAgICAgICB9LFxuICAgIH1cbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChuYW1lID0gbnVsbCkgPT4ge1xuICAgIGxldCBoaXRDb3VudGVyID0gMDtcblxuICAgIGxldCBvcmllbnRhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlID0gKCkgPT4ge1xuICAgICAgICBvcmllbnRhdGlvbiA9ICFvcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBTSElQX1NJWkVTID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChoaXRDb3VudGVyID49IFNISVBfU0laRVNbbmFtZV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uOltdLFxuICAgICAgICBnZXQgb3JpZW50YXRpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb3JpZW50YXRpb24ob3IpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gb3I7XG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheWVkTmFtZSA9IG5hbWUuc3BsaXQoJycpO1xuICAgICAgICAgICAgYXJyYXllZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWVkTmFtZS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBTSElQX1NJWkVTW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgbWFrZU1vdmUgPSAodGlsZSwgb3Bwb25lbnRCb2FyZCkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHRpbGUuXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG9wcG9uZW50Qm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vdmUgPT09ICdvYmplY3QnICYmIG1vdmUuaXNTdW5rKCkpIFNjcmVlbi5zdW5rU2hpcChtb3ZlLCBvcHBvbmVudEJvYXJkLmlkKTsgXG4gICAgICAgICAgICBTY3JlZW4ucmVuZGVyUGxheWVyTW92ZSh0aWxlLG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWluZzogZmFsc2UsXG4gICAgICAgIGlzQ29tcDogZmFsc2UsXG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIG1ha2VNb3ZlXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBDb21wdXRlciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIGxldCBjdXJyZW50U3VjY2VzcyA9IFtdO1xuXG4gICAgY29uc3QgbWFrZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxuICAgICAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxuICAgICAgICAgICAgY3J1aXNlcjogU2hpcCgnY3J1aXNlcicpLFxuICAgICAgICAgICAgc3VibWFyaW5lOiBTaGlwKCdzdWJtYXJpbmUnKSxcbiAgICAgICAgICAgIGRlc3Ryb3llcjogU2hpcCgnZGVzdHJveWVyJyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBtYWtlU2hpcHMoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmdldExlbmd0aCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjIpID8gdHJ1ZSA6IGZhbHNlIDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW3NoaXBdLHgseSxvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5ub3QgcGxhY2UgYXQ6IFwiLCB4LCB5LCBcIiB3aXRoIFwiLCBvcmllbnRhdGlvbixcIiBvcmllbnRhdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgICAgICBcbiAgICBjb25zdCBwbGF5VGlsZSA9ICh0aWxlKSA9PiB7XG4gICAgICAgIGlmICghdGlsZSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5oaXRTcXVhcmUodGlsZVswXSx0aWxlWzFdKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGl0ID09PSAnb2JqZWN0JyAmJiBoaXQuaXNTdW5rKCkpIFNjcmVlbi5zdW5rU2hpcChoaXQsIGdhbWVib2FyZC5vcHBvbmVudC5pZCk7IFxuICAgICAgICAgICAgaWYgKGhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBoaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib3VuZGFyeSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgY29uc3QgcmFuWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpib3VuZGFyeSk7XG4gICAgICAgIGNvbnN0IHJhblkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm91bmRhcnkpO1xuICAgICAgICByZXR1cm4gW3JhblgscmFuWV07XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50U3VjY2Vzcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVkdWNhdGVkTW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVtYk1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGR1bWJNb3ZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZVRha2VuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGlmICghZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5jaGVja0ZvckVtcHR5KCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIE1vcmUgU3BhY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKCFtb3ZlVGFrZW4pIHtcbiAgICAgICAgICAgIGNvb3JkcyA9IGdlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICBtb3ZlVGFrZW4gPSBwbGF5VGlsZShjb29yZHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcG9wdWxhdGVDdXJyZW50U3VjY2Vzcyhjb29yZHMsbW92ZVRha2VuKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JlZW4ucmVuZGVyQ29tcHV0ZXJNb3ZlKGNvb3JkcyxnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRTaGlwID0gKGNvb3Jkcywgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxNb3ZlcyA9IFtbMCwxXSxbMCwtMV0sWzEsMF0sWy0xLDBdXTtcblxuICAgICAgICBjb25zdCBuZXh0TW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNob2ljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvdGVudGlhbE1vdmVzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gcG90ZW50aWFsTW92ZXMuc3BsaWNlKHJhbmRvbUNob2ljZSwxKS5mbGF0KCk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gW2Nvb3Jkc1swXSArIGhlYWRpbmdbMF0sY29vcmRzWzFdICsgaGVhZGluZ1sxXV07XG4gICAgICAgICAgICByZXR1cm4gIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrOm1vdmUsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6aGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVjYWxjdWxhdGVQb3RlbnRpYWxNb3ZlcyA9IChoZWFkaW5nLGF0dGFjaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3SGVhZGluZyA9IFtjb29yZHNbMF0gLSBhdHRhY2tbMF0sY29vcmRzWzFdIC0gYXR0YWNrWzFdXTtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBoZWFkaW5nWzBdICE9IDAgPyAwIDogMSA7XG4gICAgICAgICAgICBuZXdIZWFkaW5nW2F4aXNdID0gaGVhZGluZ1theGlzXSA+IDAgPyBoZWFkaW5nW2F4aXNdKzEgOiBoZWFkaW5nW2F4aXNdLTE7XG4gICAgICAgICAgICBjb25zdCBzdGlsbFZhbGlkID0gcG90ZW50aWFsTW92ZXMuZmlsdGVyKGhlYWRpbmcgPT4gaGVhZGluZ1theGlzXSAhPSAwKTtcbiAgICAgICAgICAgIHN0aWxsVmFsaWQucHVzaChuZXdIZWFkaW5nKTtcbiAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBzdGlsbFZhbGlkLmZvckVhY2goY29vcmQgPT4gcG90ZW50aWFsTW92ZXMucHVzaChjb29yZCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb29yZHMsXG4gICAgICAgICAgICB0YXJnZXQ6c2hpcCxcbiAgICAgICAgICAgIHBvdGVudGlhbE1vdmVzLFxuICAgICAgICAgICAgbmV4dE1vdmUsXG4gICAgICAgICAgICByZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzXG4gICAgICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzID0gKGNvb3Jkcywgc2hpcCkgPT4ge1xuICAgICAgICBjdXJyZW50U3VjY2Vzcy5wdXNoKHRhcmdldFNoaXAoY29vcmRzLHNoaXApKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZHVjYXRlZE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb3ZlVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvb3JkcztcbiAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGN1cnJlbnRTdWNjZXNzWzBdO1xuICAgICAgICBpZiAoIWdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBjdXJyZW50VGFyZ2V0Lm5leHRNb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXlpbmcgOiBcIixjb29yZHMpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gcGxheVRpbGUoY29vcmRzLmF0dGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnICYmIG1vdmVUYWtlbi5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGluZzogXCIsIGN1cnJlbnRTdWNjZXNzWzBdKTtcbiAgICAgICAgICAgIGN1cnJlbnRTdWNjZXNzLnNoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcgJiYgbW92ZVRha2VuID09PSBjdXJyZW50VGFyZ2V0LnRhcmdldCkge1xuICAgICAgICAgICAgY3VycmVudFRhcmdldC5yZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzKGNvb3Jkcy5oZWFkaW5nLGNvb3Jkcy5hdHRhY2spXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MoY29vcmRzLmF0dGFjayxtb3ZlVGFrZW4pXG4gICAgICAgIH1cbiAgICAgICAgU2NyZWVuLnJlbmRlckNvbXB1dGVyTW92ZShjb29yZHMuYXR0YWNrLGdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIGlzQ29tcDp0cnVlLFxuICAgICAgICBnZW5lcmF0ZVJhbmRvbUNvb3JkcyxcbiAgICAgICAgbWFrZU1vdmUsXG4gICAgICAgIHBsYWNlXG4gICAgfVxufSJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJTaGlwIiwiYmF0dGxlc2hpcEltYWdlIiwiU0hJUF9JTUFHRVMiLCJiYXR0bGVzaGlwIiwib25OZXh0Iiwib25XaW4iLCJtb3ZlUmVhZHkiLCJkcmF3TWFpbk1lbnUiLCJzaW5nbGVJbml0aWFsaXNlIiwiZG91YmxlSW5pdGlhbGlzZSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJtZW51UGFuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImdhbWVUaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJidXR0b25CYXIiLCJzdGFydFNpbmdsZSIsInN0YXJ0RG91YmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldE5hbWUiLCJzZWNvbmROYW1lIiwiY2IiLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwibmFtZURpYWxvZyIsInNob3ciLCJuYW1lRm9ybSIsIm5hbWVMYWJlbCIsInNldEF0dHJpYnV0ZSIsImNvbmNhdCIsIm5hbWVJbnB1dCIsImlkIiwibmFtZVN1Ym1pdCIsInJlcXVpcmVkIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJpbnRTdHJpbmciLCJ0b1ByaW50Iiwic2hpcEJhciIsImdldEVsZW1lbnRCeUlkIiwiZ2V0QmF0dGxlc2hpcENvb3JkcyIsImNvb3JkcyIsInhMZXR0ZXIiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzaGlwU2NyZWVuU2V0dXAiLCJ0aXRsZSIsImxlZnQiLCJnYW1lYXJlYSIsInNoaXBiYXIiLCJzaG93UmVhZHlTY3JlZW4iLCJwbGF5ZXIiLCJyZWFkeURpYWxvZyIsInJlYWR5VGV4dCIsInJlYWR5QnV0dG9uIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVmcmVzaCIsInNob3dNb2RhbCIsImdhbWVTY3JlZW5TZXR1cCIsInJpZ2h0IiwiZHJhd0FjdGl2ZUJvYXJkIiwiZ2FtZWJvYXJkIiwiem9uZURvbSIsImJvYXJkIiwic2l6ZSIsImdldExlbmd0aCIsInJvd0NvbnRhaW5lciIsImoiLCJ0aWxlIiwic3F1YXJlU3RhdHVzIiwiZ2V0VGFyZ2V0IiwidGFyZ2V0IiwiY2xvc2VzdCIsIm9wcG9uZW50IiwibWFrZU1vdmUiLCJkcmF3RHVtbXlBY3RpdmVCb2FyZCIsImRyYXdSZWNvbkJvYXJkIiwiZHJhd1NoaXBzIiwiZHJhd0hpZGRlblJlY29uQm9hcmQiLCJoaWRkZW4iLCJjdXJyZW50IiwicHJldmlvdXMiLCJhY3RpdmVBcmVhIiwicmVjb25BcmVhIiwiaXNDb21wIiwicmVuZGVyQ29tcHV0ZXJNb3ZlIiwiX3JlZiIsIl9jYWxsZWUiLCJhY3RpdmVab25lIiwicm93IiwiY2VsbCIsImNvb3JkU3RyaW5nIiwicmVtb3ZlQXR0YWNrTWFya2VyIiwic3RhbGxOZXh0VHVybiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjaGlsZHJlbiIsInByb21pc2lmeSIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwicmVuZGVyUGxheWVyTW92ZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJzaG93UGxheWVyc1R1cm4iLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzaG93UGxheWVyUmVzdWx0IiwiX3gzIiwiX3g0Iiwic3Vua1NoaXAiLCJzaGlwIiwiX3JlZjMiLCJfY2FsbGVlMyIsInBsYXllclJlc3VsdFRpbWVyIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3JlZjQiLCJfY2FsbGVlNCIsImNvbXB1dGVyRmluaXNoZWQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJjYWxsYmFjayIsInRpbWVyIiwib25ib2FyZCIsInNoaXBzIiwiZ2V0U2hpcHMiLCJwbGF5em9uZSIsImRpbWVuc2lvbnMiLCJjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiIsImRyYXdTaGlwIiwidG9wIiwiaGVpZ2h0Iiwiem9uZSIsInNjYWxlIiwidW5pdCIsIm9mZnNldFdpZHRoIiwiTWF0aCIsImZsb29yIiwicG9zaXRpb24iLCJvcmllbnRhdGlvbiIsImJ1dHRvbiIsInBhcmVudCIsInkiLCJBcnJheSIsImluZGV4T2YiLCJ4IiwiZW5kR2FtZSIsIndpbm5lciIsInZpY3RvcnlNZW51IiwidmljdG9yeVRleHQiLCJ2aWN0b3J5QnV0dG9uIiwibmV4dFR1cm4iLCJ3aW4iLCJoaXRDb3VudGVyIiwicm90YXRlIiwiU0hJUF9TSVpFUyIsImNhcnJpZXIiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiaGl0IiwiaXNTdW5rIiwib3IiLCJhcnJheWVkTmFtZSIsInNwbGl0IiwidG9VcHBlckNhc2UiLCJqb2luIiwiU2NyZWVuIiwiUGxheWVyIiwib3Bwb25lbnRCb2FyZCIsIm1vdmUiLCJoaXRTcXVhcmUiLCJwbGF5aW5nIiwiQ29tcHV0ZXIiLCJjdXJyZW50U3VjY2VzcyIsIm1ha2VTaGlwcyIsInBsYWNlIiwicGxhY2VkIiwicmFuZG9tIiwicGxhY2VTaGlwIiwicGxheVRpbGUiLCJnZW5lcmF0ZVJhbmRvbUNvb3JkcyIsImJvdW5kYXJ5IiwicmFuWCIsInJhblkiLCJlZHVjYXRlZE1vdmUiLCJkdW1iTW92ZSIsIm1vdmVUYWtlbiIsImNoZWNrRm9yRW1wdHkiLCJwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzIiwidGFyZ2V0U2hpcCIsInBvdGVudGlhbE1vdmVzIiwibmV4dE1vdmUiLCJyYW5kb21DaG9pY2UiLCJoZWFkaW5nIiwic3BsaWNlIiwiZmxhdCIsImF0dGFjayIsInJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMiLCJuZXdIZWFkaW5nIiwiYXhpcyIsInN0aWxsVmFsaWQiLCJmaWx0ZXIiLCJjb29yZCIsImN1cnJlbnRUYXJnZXQiLCJzaGlmdCJdLCJzb3VyY2VSb290IjoiIn0=