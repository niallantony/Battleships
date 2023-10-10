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
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/battleship.png */ "./src/images/battleship.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SHIP_IMAGES = {
  battleship: _images_battleship_png__WEBPACK_IMPORTED_MODULE_0__
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
      refresh(player, next);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO01BQ3RDLElBQU1oQyxNQUFNLEdBQUdtSSxrREFBTSxDQUFDckcsU0FBUyxDQUFDRixJQUFJLENBQUM7TUFDckMsSUFBTXNLLEdBQUcsR0FBR04seUJBQXlCLENBQUNoSyxJQUFJLENBQUNzRSxXQUFXLEVBQUNsRyxNQUFNLENBQUM7TUFDOUQsSUFBRzRCLElBQUksQ0FBQzVELFNBQVMsQ0FBQ21PLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUNuQ0gsR0FBRyxDQUFDaE8sU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQ3RDLENBQUMsTUFBTTtRQUNIK04sR0FBRyxDQUFDaE8sU0FBUyxDQUFDMEYsTUFBTSxDQUFDLGVBQWUsQ0FBQztNQUN6QztNQUNBc0ksR0FBRyxDQUFDdEMsS0FBSyxDQUFDN0QsR0FBRyxHQUFHcUcsR0FBRyxDQUFDckcsR0FBRztNQUN2Qm1HLEdBQUcsQ0FBQ3RDLEtBQUssQ0FBQ3BKLElBQUksR0FBRzRMLEdBQUcsQ0FBQzVMLElBQUk7SUFDN0IsQ0FBQyxDQUFDO0lBQ0YsT0FBTzJMLEtBQUs7RUFDaEIsQ0FBQztFQUVELE9BQU87SUFDSHBELHFCQUFxQixFQUFyQkE7RUFDSixDQUFDO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2NyZWVuLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BsYWNlbWVudEJvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXR0bGVzaGlwSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9iYXR0bGVzaGlwLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgU0hJUF9JTUFHRVMgPSB7XG4gICAgYmF0dGxlc2hpcDogYmF0dGxlc2hpcEltYWdlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAgIGxldCBvbk5leHQ7XG4gICAgbGV0IG9uV2luO1xuICAgIGxldCBtb3ZlUmVhZHkgPSB0cnVlO1xuXG4gICAgY29uc3QgZHJhd01haW5NZW51ID0gKHNpbmdsZUluaXRpYWxpc2UsIGRvdWJsZUluaXRpYWxpc2UpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgbWVudVBhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51UGFuLmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudScpXG4gICAgICAgIGNvbnN0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lVGl0bGUuY2xhc3NMaXN0LmFkZCgnZ2FtZS10aXRsZScpO1xuICAgICAgICBnYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcHMhJ1xuICAgICAgICBtZW51UGFuLmFwcGVuZENoaWxkKGdhbWVUaXRsZSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudVBhbik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25CYXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWJhcicpXG4gICAgICAgIGNvbnN0IHN0YXJ0U2luZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0U2luZ2xlLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJylcbiAgICAgICAgY29uc3Qgc3RhcnREb3VibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3RhcnREb3VibGUuY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKVxuICAgICAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc3RhcnRTaW5nbGUpO1xuICAgICAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoc3RhcnREb3VibGUpO1xuICAgICAgICBtZW51UGFuLmFwcGVuZENoaWxkKGJ1dHRvbkJhcik7XG4gICAgICAgIHN0YXJ0U2luZ2xlLnRleHRDb250ZW50ID0gJ1NpbmdsZSBQbGF5ZXInO1xuICAgICAgICBzdGFydERvdWJsZS50ZXh0Q29udGVudCA9ICdUd28gUGxheWVyJztcbiAgICAgICAgc3RhcnRTaW5nbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGdldE5hbWUoc2luZ2xlSW5pdGlhbGlzZSkpO1xuICAgICAgICBzdGFydERvdWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgZ2V0TmFtZSgobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGdldE5hbWUoKHNlY29uZE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlSW5pdGlhbGlzZShuYW1lLHNlY29uZE5hbWUpO1xuICAgICAgICAgICAgICAgIH0sICd0d28nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoY2IsIHN0cmluZyA9ICdvbmUnKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBuYW1lXCIpO1xuICAgICAgICBjb25zdCBuYW1lRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIG5hbWVEaWFsb2cuY2xhc3NMaXN0LmFkZCgnZ2V0LW5hbWUnKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChuYW1lRGlhbG9nKTtcbiAgICAgICAgbmFtZURpYWxvZy5zaG93KCk7XG4gICAgICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduYW1lLWlucHV0Jyk7XG4gICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IGBBZG1pcmFsICR7c3RyaW5nfSBuYW1lOiBgXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcbiAgICAgICAgY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuYW1lU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgbmFtZURpYWxvZy5hcHBlbmRDaGlsZChuYW1lRm9ybSk7XG4gICAgICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVTdWJtaXQpO1xuICAgICAgICBuYW1lU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2dldC1uYW1lLXN1Ym1pdCcpO1xuICAgICAgICBuYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKG5hbWVJbnB1dC52YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGNiKG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gbmFtZURpYWxvZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5hbWVEaWFsb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gICBcblxuICAgIGNvbnN0IHByaW50U3RyaW5nID0gKHRvUHJpbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWJhcicpO1xuICAgICAgICBzaGlwQmFyLnRleHRDb250ZW50ID0gdG9QcmludDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRCYXR0bGVzaGlwQ29vcmRzID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCB4TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb29yZHNbMF0rNjUpO1xuICAgICAgICByZXR1cm4gYCR7eExldHRlcn0ke2Nvb3Jkc1sxXSsxfWBcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwU2NyZWVuU2V0dXAgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke25hbWV9IHBsYWNlIHlvdXIgc2hpcHMhYDtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncGxhY2Utc2hpcHMtdGl0bGUnKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5pZCA9ICdsZWZ0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGNvbnN0IHNoaXBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcGJhci5pZCA9ICdzaGlwLWJhcic7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2hpcGJhcik7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1JlYWR5U2NyZWVuID0gKHBsYXllcixuZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IHJlYWR5RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGNvbnN0IHJlYWR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCByZWFkeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZWFkeURpYWxvZy5jbGFzc0xpc3QuYWRkKCdyZWFkeS1kaWFsb2cnKTtcbiAgICAgICAgcmVhZHlUZXh0LmNsYXNzTGlzdC5hZGQoJ3JlYWR5LXRleHQnKTtcbiAgICAgICAgcmVhZHlCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVhZHktYnV0dG9uJyk7XG4gICAgICAgIHJlYWR5VGV4dC50ZXh0Q29udGVudCA9IGAke3BsYXllci5pZH0ncyB0dXJuIWA7XG4gICAgICAgIHJlYWR5QnV0dG9uLnRleHRDb250ZW50ID0gJ1JlYWR5JztcbiAgICAgICAgcmVhZHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZWFkeURpYWxvZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlYWR5RGlhbG9nKTtcbiAgICAgICAgICAgIHJlZnJlc2gocGxheWVyLG5leHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZHlEaWFsb2cuYXBwZW5kQ2hpbGQocmVhZHlUZXh0KVxuICAgICAgICByZWFkeURpYWxvZy5hcHBlbmRDaGlsZChyZWFkeUJ1dHRvbilcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChyZWFkeURpYWxvZylcbiAgICAgICAgcmVhZHlEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZVNjcmVlblNldHVwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnQuaWQgPSAnbGVmdCc7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0LmlkID0gJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICAgICAgY29uc3Qgc2hpcGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwYmFyLmlkID0gJ3NoaXAtYmFyJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaGlwYmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGdldFRhcmdldChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3ZlUmVhZHkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBtb3ZlUmVhZHkgPSBnYW1lYm9hcmQub3Bwb25lbnQubWFrZU1vdmUodGlsZSwgZ2FtZWJvYXJkKVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdEdW1teUFjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdSZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyYXdTaGlwcyhnYW1lYm9hcmQsZ2FtZWJvYXJkLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3SGlkZGVuUmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgLy9kcmF3IHRoZSB0aWxlcyB0byBtYWludGFpbiBzaXplIGNvbnNpc3RlbmN5XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZGRlbi50ZXh0Q29udGVudCA9IFwiRGF0YSBFbmNyeXB0ZWQuLi5cIlxuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJvYXJkJyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGhpZGRlbilcbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoID0gKGN1cnJlbnQscHJldmlvdXMpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHJlY29uQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpO1xuICAgICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZWNvbkFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghY3VycmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIGRyYXdBY3RpdmVCb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1JlY29uQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd0R1bW15QWN0aXZlQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhwcmV2aW91cy5nYW1lYm9hcmQscHJldmlvdXMuZ2FtZWJvYXJkLmlkKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIG1vdmVSZWFkeSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBnZXRCYXR0bGVzaGlwQ29vcmRzKGNvb3Jkcyk7XG4gICAgICAgIHByaW50U3RyaW5nKGBDb21wdXRlciBhdHRhY2tzICR7Y29vcmRTdHJpbmd9Li4uYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwcmludFN0cmluZyhgJHtjb29yZFN0cmluZ30gaXMgYSAke2dhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSl9IWApLDUwMClcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja3NcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoY29vcmRzWzBdLGNvb3Jkc1sxXSkpO1xuICAgICAgICBjb25zdCBzdGFsbE5leHRUdXJuID0gYXdhaXQgc3RhbGxDb21wdXRlck1vdmUoKTtcbiAgICAgICAgc3RhbGxOZXh0VHVybigpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclBsYXllck1vdmUgPSBhc3luYyAoY29vcmRzLGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBnZXRCYXR0bGVzaGlwQ29vcmRzKGNvb3Jkcyk7XG4gICAgICAgIHByaW50U3RyaW5nKGAke2dhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQub3Bwb25lbnQuaWR9IGF0dGFja3MgJHtjb29yZFN0cmluZ30uLi5gKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHByaW50U3RyaW5nKGAke2Nvb3JkU3RyaW5nfSBpcyBhICR7Z2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKX0hYCksNTAwKVxuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc2hvd1BsYXllcnNUdXJuID0gYXdhaXQgc2hvd1BsYXllclJlc3VsdCgpO1xuICAgICAgICBzaG93UGxheWVyc1R1cm4oKTtcbiAgICAgICAgbW92ZVJlYWR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzdW5rU2hpcCA9IChzaGlwLCBuYW1lKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJpbnRTdHJpbmcoYCR7bmFtZX0ncyAke3NoaXAubmFtZX0gaGFzIGJlZW4gc3VuayFgKSwyNTAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGxheWVyUmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ZXJSZXN1bHRUaW1lciA9IGF3YWl0IHByb21pc2lmeShvbk5leHQsIDIwMDApO1xuICAgICAgICByZXR1cm4gcGxheWVyUmVzdWx0VGltZXJcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhbGxDb21wdXRlck1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyRmluaXNoZWQgPSBhd2FpdCBwcm9taXNpZnkob25OZXh0LCAyMDAwKTtcbiAgICAgICAgbW92ZVJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyRmluaXNoZWRcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcHJvbWlzaWZ5ID0gKGNhbGxiYWNrLHRpbWVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShjYWxsYmFjayksIHRpbWVyKSk7XG4gICAgfVxuICAgIFxuXG4gICAgY29uc3QgZHJhd1NoaXBzID0gKGdhbWVib2FyZCxvbmJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gZ2FtZWJvYXJkLmdldFNoaXBzKCk7XG4gICAgICAgIGNvbnN0IHBsYXl6b25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob25ib2FyZCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbihwbGF5em9uZSwgZ2FtZWJvYXJkLmdldExlbmd0aCgpLCBzaGlwKVxuICAgICAgICAgICAgcGxheXpvbmUuYXBwZW5kQ2hpbGQoZHJhd1NoaXAoZGltZW5zaW9ucykpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdTaGlwID0gKGRpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbWFya2VyJyk7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdzdHlsZScsYHRvcDoke2RpbWVuc2lvbnMudG9wfTtsZWZ0OiR7ZGltZW5zaW9ucy5sZWZ0fTt3aWR0aDoke2RpbWVuc2lvbnMubGVuZ3RofTtoZWlnaHQ6JHtkaW1lbnNpb25zLmhlaWdodH1gKTtcbiAgICAgICAgcmV0dXJuIHNoaXBcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjdWxhdGVTY3JlZW5Qb3NpdGlvbiA9ICh6b25lLCBzY2FsZSAsc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB1bml0ID0gem9uZS5vZmZzZXRXaWR0aCAvIHNjYWxlO1xuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzBdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihzaGlwLnBvc2l0aW9uWzBdWzFdICogdW5pdCkrJ3B4JztcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5vcmllbnRhdGlvbiA/IHNoaXAubGVuZ3RoICogdW5pdCA6IHVuaXQgO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaGlwLm9yaWVudGF0aW9uID8gdW5pdCA6IHNoaXAubGVuZ3RoICogdW5pdCA7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgbGVuZ3RoOmxlbmd0aCsncHgnLFxuICAgICAgICAgICAgaGVpZ2h0OmhlaWdodCsncHgnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXJnZXQgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmICghYnV0dG9uKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvbjtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICAvLyBGaW5kIHRoZSBjb29yZGluYXRlcyB0aHJvdWdoIHRoZSBlbGVtZW50cyBwb3NpdGlvbiBhbW9uZ3N0IGl0cyBzaWJsaW5nc1xuICAgICAgICBjb25zdCB5ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChib2FyZC5jaGlsZHJlbixwYXJlbnQpO1xuICAgICAgICBjb25zdCB4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGRyZW4sdGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIFt4LHldXG4gICAgfVxuXG4gICAgY29uc3QgZW5kR2FtZSA9ICh3aW5uZXIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlciAnLCB3aW5uZXIsICcgaXMgdmljdG9yaW91cyEnKVxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCB2aWN0b3J5TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB2aWN0b3J5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2aWN0b3J5VGV4dC50ZXh0Q29udGVudCA9IGBHYW1lIG92ZXIhICR7d2lubmVyfSBpcyB2aWN0b3Jpb3VzIWA7XG4gICAgICAgIGNvbnN0IHZpY3RvcnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdmljdG9yeUJ1dHRvbi50ZXh0Q29udGVudCA9IGBNYWluIE1lbnVgO1xuICAgICAgICB2aWN0b3J5TWVudS5jbGFzc0xpc3QuYWRkKCd2aWN0b3J5LW1lbnUnKTtcbiAgICAgICAgdmljdG9yeVRleHQuY2xhc3NMaXN0LmFkZCgndmljdG9yeS10ZXh0Jyk7XG4gICAgICAgIHZpY3RvcnlCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcbiAgICAgICAgdmljdG9yeU1lbnUuYXBwZW5kQ2hpbGQodmljdG9yeVRleHQpO1xuICAgICAgICB2aWN0b3J5TWVudS5hcHBlbmRDaGlsZCh2aWN0b3J5QnV0dG9uKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh2aWN0b3J5TWVudSk7XG4gICAgICAgIHZpY3RvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbldpbik7XG4gICAgfVxuXG5cblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkcmF3U2hpcHMsXG4gICAgICAgIGdhbWVTY3JlZW5TZXR1cCxcbiAgICAgICAgc2hpcFNjcmVlblNldHVwLFxuICAgICAgICByZW5kZXJDb21wdXRlck1vdmUsXG4gICAgICAgIGVuZEdhbWUsXG4gICAgICAgIGdldFRhcmdldCxcbiAgICAgICAgcmVmcmVzaCxcbiAgICAgICAgc3Vua1NoaXAsXG4gICAgICAgIHJlbmRlclBsYXllck1vdmUsXG4gICAgICAgIGRyYXdNYWluTWVudSxcbiAgICAgICAgc2hvd1JlYWR5U2NyZWVuLFxuICAgICAgICBzZXQgb25OZXh0KG5leHRUdXJuKSB7XG4gICAgICAgICAgICBvbk5leHQgPSBuZXh0VHVybjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9uV2luKHdpbikge1xuICAgICAgICAgICAgb25XaW4gPSB3aW47XG4gICAgICAgIH0sXG4gICAgfVxufSkoKTtcbiIsImV4cG9ydCBjb25zdCBTaGlwID0gKG5hbWUgPSBudWxsKSA9PiB7XG4gICAgbGV0IGhpdENvdW50ZXIgPSAwO1xuXG4gICAgbGV0IG9yaWVudGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCByb3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIG9yaWVudGF0aW9uID0gIW9yaWVudGF0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IFNISVBfU0laRVMgPSB7XG4gICAgICAgIGNhcnJpZXI6IDUsXG4gICAgICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgICAgIGNydWlzZXI6IDMsXG4gICAgICAgIHN1Ym1hcmluZTogMyxcbiAgICAgICAgZGVzdHJveWVyOiAyLFxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0Q291bnRlcisrXG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKGhpdENvdW50ZXIgPj0gU0hJUF9TSVpFU1tuYW1lXSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgcG9zaXRpb246W10sXG4gICAgICAgIGdldCBvcmllbnRhdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZW50YXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvcmllbnRhdGlvbihvcikge1xuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBvcjtcbiAgICAgICAgfSxcbiAgICAgICAgcm90YXRlLFxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ZWROYW1lID0gbmFtZS5zcGxpdCgnJyk7XG4gICAgICAgICAgICBhcnJheWVkTmFtZVswXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5ZWROYW1lLmpvaW4oJycpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIFNISVBfU0laRVNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFNjcmVlbiBmcm9tIFwiLi9zY3JlZW4uanNcIlxuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIlxuaW1wb3J0IHsgU0hJUF9JTUFHRVMgfSBmcm9tIFwiLi9zY3JlZW4uanNcIlxuXG5leHBvcnQgY29uc3QgUGxhY2VtZW50Qm9hcmQgPSAoZ2FtZWJvYXJkLCBvbkZpbmlzaCkgPT4ge1xuICAgIGxldCBwbGFjaW5nID0gZmFsc2U7XG4gICAgY29uc3Qgc2hpcEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLWJhcicpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSB7XG4gICAgICAgIGNhcnJpZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjUsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGJhdHRsZXNoaXA6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjQsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNydWlzZXI6e1xuICAgICAgICAgICAgY29vcmRzOltdLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDp0cnVlLFxuICAgICAgICAgICAgbGVuZ3RoOjMsXG4gICAgICAgICAgICBwbGFjZWQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1hcmluZTp7XG4gICAgICAgICAgICBjb29yZHM6W10sXG4gICAgICAgICAgICBob3Jpem9udGFsOnRydWUsXG4gICAgICAgICAgICBsZW5ndGg6MyxcbiAgICAgICAgICAgIHBsYWNlZDpmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveWVyOntcbiAgICAgICAgICAgIGNvb3JkczpbXSxcbiAgICAgICAgICAgIGhvcml6b250YWw6dHJ1ZSxcbiAgICAgICAgICAgIGxlbmd0aDoyLFxuICAgICAgICAgICAgcGxhY2VkOmZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNoaXBzKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gU2hpcChzaGlwKTtcbiAgICAgICAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAobmV3U2hpcCxzaGlwc1tzaGlwXS5jb29yZHNbMF0sc2hpcHNbc2hpcF0uY29vcmRzWzFdLHNoaXBzW3NoaXBdLmhvcml6b250YWwpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdQbGFjZW1lbnRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKVxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGdhbWVib2FyZC5pZDtcbiAgICAgICAgem9uZURvbS5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmlkID0gYCR7an0tJHtpfWA7XG4gICAgICAgICAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywncG9zaXRpb246cmVsYXRpdmU7JylcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhqLGkpKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQbGFjZW1lbnRTY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGRyYXdQbGFjZW1lbnRCb2FyZCgpO1xuICAgICAgICBkcmF3TmV4dFNoaXBCdXR0b24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3TmV4dFNoaXBCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRTaGlwID0gbWFrZU5leHRTaGlwQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5leHRTaGlwID8gbmV4dFNoaXAgOiByZW5kZXJTdWJtaXRCdXR0b24oKTtcbiAgICAgICAgaWYgKG5leHRTaGlwKSB7YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICBzaGlwQmFyLnJlbW92ZUNoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbWFrZVNoaXAoYnV0dG9uKTtcbiAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQoc2hpcCxzaGlwc1tzaGlwXSk7XG4gICAgICAgIH0pO30gZWxzZSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXQpO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclNoaXBCYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLXNoaXAnKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSBleGlzdGluZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGV4aXN0aW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlTmV4dFNoaXBCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyU2hpcEJhcigpO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIGlmIChzaGlwc1trZXldLnBsYWNlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBidXR0b25UZXh0ID0gU3RyaW5nKCdQbGFjZSAnKyBrZXkpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwbGFjZS1zaGlwJyk7XG4gICAgICAgICAgICBidXR0b24uaWQgPSBrZXk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgfSAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVNoaXAgPSAoYnV0dG9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKGJ1dHRvbi5pZCk7XG4gICAgICAgIHNoaXAucm90YXRlKCk7XG4gICAgICAgIHJldHVybiBzaGlwXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGVtcGxhdGUgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICB0ZW1wbGF0ZS5pZCA9IHNoaXAubmFtZTtcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgdGVtcGxhdGUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7U0hJUF9JTUFHRVNbc2hpcC5uYW1lXX1gO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJSb3RhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHNoaXBCYXIucXVlcnlTZWxlY3RvckFsbCgnLnJvdGF0ZScpLmZvckVhY2goKGJ1dHRvbikgPT4gc2hpcEJhci5yZW1vdmVDaGlsZChidXR0b24pKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVSb3RhdGVCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyUm90YXRlQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdST1RBVEUnO1xuICAgICAgICBzaGlwQmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG5cbiAgICBjb25zdCBzaGlwUGxhY2VtZW50ID0gKHNoaXApID0+IHtcbiAgICAgICAgcGxhY2luZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVUZW1wbGF0ZShzaGlwKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdCcpO1xuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHJlbmRlclNoaXAodGVtcGxhdGUsdGlsZXNbMF0ub2Zmc2V0V2lkdGgsc2hpcCk7XG4gICAgICAgIGNvbnN0IGlsbGVnYWxTcXVhcmVzID0gZmluZElsbGVnYWxTcXVhcmVzKHNoaXApO1xuICAgICAgICBjb25zdCByb3RhdGUgPSBjcmVhdGVSb3RhdGVCdXR0b24oKTtcbiAgICAgICAgcm90YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVNYXJrZXIodGVtcGxhdGUpO1xuICAgICAgICAgICAgcm90YXRlU2hpcChzaGlwKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgaG92ZXJJbWFnZSh0aWxlLHRlbXBsYXRlKTtcbiAgICAgICAgICAgIGlmIChpbGxlZ2FsU3F1YXJlcy5pbmNsdWRlcyh0aWxlLmlkKSkge1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnaWxsZWdhbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdpbGxlZ2FsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHBsYWNlVGVtcGxhdGUoZS50YXJnZXQuY2xvc2VzdCgnLnRpbGUnKSx0ZW1wbGF0ZSxzaGlwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kSWxsZWdhbFNxdWFyZXMgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBpbGxlZ2FsU3F1YXJlcyA9IFtdO1xuICAgICAgICAvLyBGaW5kIG91dCBvZiBib3VuZCBzcXVhcmVzXG4gICAgICAgIGZvciAoIGxldCBpID0gMCA7IGkgPCBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkgOyBpKysgKSB7XG4gICAgICAgICAgICBmb3IgKCBsZXQgaiA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKSAtIChzaGlwLmxlbmd0aCAtIDEpOyBqIDwgZ2FtZWJvYXJkLmdldExlbmd0aCgpIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9vYk1vdmUgPSBzaGlwLm9yaWVudGF0aW9uID8gW2osaV0gOiBbaSxqXSA7XG4gICAgICAgICAgICAgICAgaWxsZWdhbFNxdWFyZXMucHVzaChvb2JNb3ZlLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9HZXQgc3BhY2VzIHRoYXQgYXJlIG9ic3RydWN0ZWQgYnkgYW5vdGhlciBzaGlwXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzaGlwcykge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2VTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBpZiAoIXNoaXBzW2tleV0ucGxhY2VkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGlsbE1vdmVzID0gZ2V0T2NjdXBpZWRTcGFjZXMoc2hpcHNba2V5XSk7XG4gICAgICAgICAgICBjb25zdCBhcnJheVBvaW50ZXIgPSBzaGlwLm9yaWVudGF0aW9uID8gMCA6IDE7IFxuICAgICAgICAgICAgaWxsTW92ZXMuZm9yRWFjaCgoc3BhY2UpID0+IHtcbiAgICAgICAgICAgICAgICBzcGFjZVNldC5hZGQoc3BhY2Uuam9pbignLScpKTtcbiAgICAgICAgICAgICAgICBmb3IoIGxldCBpID0gMCA7IGkgPCBzaGlwLmxlbmd0aCA7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFNwYWNlID0gWy4uLnNwYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNwYWNlW2FycmF5UG9pbnRlcl0gPSBuZXh0U3BhY2VbYXJyYXlQb2ludGVyXSAtIGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0U3BhY2VbYXJyYXlQb2ludGVyXSA8IDApIGNvbnRpbnVlIDsgXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlU2V0LmFkZChuZXh0U3BhY2Uuam9pbignLScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNwYWNlU2V0LmZvckVhY2goKGNvb3JkKSA9PiBpbGxlZ2FsU3F1YXJlcy5wdXNoKGNvb3JkKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlsbGVnYWxTcXVhcmVzO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE9jY3VwaWVkU3BhY2VzID0gKG1hcmtlcikgPT4ge1xuICAgICAgICBjb25zdCBzcGFjZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnN0IGFycmF5UG9pbnRlciA9IG1hcmtlci5ob3Jpem9udGFsID8gMCA6IDEgO1xuICAgICAgICBmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbWFya2VyLmxlbmd0aCA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZCA9IFsuLi5tYXJrZXIuY29vcmRzXTtcbiAgICAgICAgICAgIGN1cnJlbnRDb29yZFthcnJheVBvaW50ZXJdID0gY3VycmVudENvb3JkW2FycmF5UG9pbnRlcl0gKyBpO1xuICAgICAgICAgICAgc3BhY2VzLmFkZChjdXJyZW50Q29vcmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcGFjZXM7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU2hpcCA9IChpbWFnZSx1bml0LHNoaXApID0+IHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBzaGlwLm9yaWVudGF0aW9uID8gKHVuaXQqc2hpcC5sZW5ndGgpKydweCcgOiB1bml0KydweCc7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNoaXAub3JpZW50YXRpb24gPyB1bml0ICsncHgnOiAodW5pdCpzaGlwLmxlbmd0aCkrJ3B4JztcbiAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZU1hcmtlciA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICB0ZW1wbGF0ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZScpO1xuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgICAgICB0aWxlLnJlcGxhY2VXaXRoKHRpbGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByb3RhdGVTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgc2hpcC5yb3RhdGUoKTtcbiAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlU2hpcCA9ICh0ZW1wbGF0ZSxzaGlwKSA9PiB7XG4gICAgICAgIGlmIChwbGFjaW5nKSByZXR1cm47XG4gICAgICAgIGNsZWFyU2hpcEJhcigpO1xuICAgICAgICB0ZW1wbGF0ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBsYXRlKTtcbiAgICAgICAgc2hpcHNbc2hpcC5uYW1lXS5wbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgc2hpcFBsYWNlbWVudChzaGlwKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVRlbXBsYXRlID0gKHRpbGUsdGVtcGxhdGUsc2hpcCkgPT4ge1xuICAgICAgICBjbGVhclJvdGF0ZUJ1dHRvbigpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSBTY3JlZW4uZ2V0VGFyZ2V0KHRpbGUpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24odGlsZS5vZmZzZXRXaWR0aCxjb29yZHMpO1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3A7XG4gICAgICAgIHRlbXBsYXRlLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xuICAgICAgICB0ZW1wbGF0ZS5zdHlsZS56SW5kZXggPSAxMDtcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgc2hpcHNbdGVtcGxhdGUuaWRdLmhvcml6b250YWwgPSBzaGlwLm9yaWVudGF0aW9uO1xuICAgICAgICBzaGlwc1t0ZW1wbGF0ZS5pZF0ucGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgdGVtcGxhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiBtb3ZlU2hpcChlLnRhcmdldC5jbG9zZXN0KCcucGxhY2Vob2xkZXInKSxzaGlwKSk7XG4gICAgICAgIGNvbnN0IHRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUnKTtcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5yZXBsYWNlV2l0aCh0aWxlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIHBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhd05leHRTaGlwQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlVGVtcGxhdGVQb3NpdGlvbiA9ICh1bml0LGNvb3JkcykgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0ID0gKGNvb3Jkc1swXSp1bml0KSsncHgnO1xuICAgICAgICBjb25zdCB0b3AgPSAoY29vcmRzWzFdKnVuaXQpKydweCc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgdG9wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJTdWJtaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHNoaXBCYXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LXBsYWNlbWVudCcpO1xuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU1VCTUlUJztcbiAgICAgICAgcmV0dXJuIHN1Ym1pdEJ1dHRvblxuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hpcHMoKTtcbiAgICAgICAgb25GaW5pc2goKTtcbiAgICAgICAgc2hpcEJhci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cblxuICAgIGNvbnN0IGhvdmVySW1hZ2UgPSAoZWxlbWVudCxpbWcpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBlLnRhcmdldC5jbG9zZXN0KCcudGlsZScpO1xuICAgICAgICAgICAgY29uc3QgY29vcmRzID0gU2NyZWVuLmdldFRhcmdldCh0aWxlKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24odGlsZS5vZmZzZXRXaWR0aCxjb29yZHMpO1xuICAgICAgICAgICAgaWYodGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2lsbGVnYWwnKSkge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKCdvdXQtb2YtYm91bmRzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gcG9zLnRvcDtcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQ7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJQbGFjZW1lbnRTY3JlZW4sXG4gICAgfVxufSJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJiYXR0bGVzaGlwSW1hZ2UiLCJTSElQX0lNQUdFUyIsImJhdHRsZXNoaXAiLCJvbk5leHQiLCJvbldpbiIsIm1vdmVSZWFkeSIsImRyYXdNYWluTWVudSIsInNpbmdsZUluaXRpYWxpc2UiLCJkb3VibGVJbml0aWFsaXNlIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIm1lbnVQYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2FtZVRpdGxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbkJhciIsInN0YXJ0U2luZ2xlIiwic3RhcnREb3VibGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0TmFtZSIsInNlY29uZE5hbWUiLCJjYiIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lRGlhbG9nIiwic2hvdyIsIm5hbWVGb3JtIiwibmFtZUxhYmVsIiwic2V0QXR0cmlidXRlIiwiY29uY2F0IiwibmFtZUlucHV0IiwiaWQiLCJuYW1lU3VibWl0IiwicmVxdWlyZWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcmludFN0cmluZyIsInRvUHJpbnQiLCJzaGlwQmFyIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRCYXR0bGVzaGlwQ29vcmRzIiwiY29vcmRzIiwieExldHRlciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInNoaXBTY3JlZW5TZXR1cCIsInRpdGxlIiwibGVmdCIsImdhbWVhcmVhIiwic2hpcGJhciIsInNob3dSZWFkeVNjcmVlbiIsInBsYXllciIsInJlYWR5RGlhbG9nIiwicmVhZHlUZXh0IiwicmVhZHlCdXR0b24iLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZWZyZXNoIiwic2hvd01vZGFsIiwiZ2FtZVNjcmVlblNldHVwIiwicmlnaHQiLCJkcmF3QWN0aXZlQm9hcmQiLCJnYW1lYm9hcmQiLCJ6b25lRG9tIiwiYm9hcmQiLCJzaXplIiwiZ2V0TGVuZ3RoIiwicm93Q29udGFpbmVyIiwiaiIsInRpbGUiLCJzcXVhcmVTdGF0dXMiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib3Bwb25lbnQiLCJtYWtlTW92ZSIsImRyYXdEdW1teUFjdGl2ZUJvYXJkIiwiZHJhd1JlY29uQm9hcmQiLCJkcmF3U2hpcHMiLCJkcmF3SGlkZGVuUmVjb25Cb2FyZCIsImhpZGRlbiIsImN1cnJlbnQiLCJwcmV2aW91cyIsImFjdGl2ZUFyZWEiLCJyZWNvbkFyZWEiLCJpc0NvbXAiLCJyZW5kZXJDb21wdXRlck1vdmUiLCJfcmVmIiwiX2NhbGxlZSIsImFjdGl2ZVpvbmUiLCJyb3ciLCJjZWxsIiwiY29vcmRTdHJpbmciLCJyZW1vdmVBdHRhY2tNYXJrZXIiLCJzdGFsbE5leHRUdXJuIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNoaWxkcmVuIiwicHJvbWlzaWZ5IiwicmVtb3ZlIiwic2V0VGltZW91dCIsInN0YWxsQ29tcHV0ZXJNb3ZlIiwiX3giLCJfeDIiLCJyZW5kZXJQbGF5ZXJNb3ZlIiwiX3JlZjIiLCJfY2FsbGVlMiIsInNob3dQbGF5ZXJzVHVybiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNob3dQbGF5ZXJSZXN1bHQiLCJfeDMiLCJfeDQiLCJzdW5rU2hpcCIsInNoaXAiLCJfcmVmMyIsIl9jYWxsZWUzIiwicGxheWVyUmVzdWx0VGltZXIiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfcmVmNCIsIl9jYWxsZWU0IiwiY29tcHV0ZXJGaW5pc2hlZCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImNhbGxiYWNrIiwidGltZXIiLCJvbmJvYXJkIiwic2hpcHMiLCJnZXRTaGlwcyIsInBsYXl6b25lIiwiZGltZW5zaW9ucyIsImNhbGN1bGF0ZVNjcmVlblBvc2l0aW9uIiwiZHJhd1NoaXAiLCJ0b3AiLCJoZWlnaHQiLCJ6b25lIiwic2NhbGUiLCJ1bml0Iiwib2Zmc2V0V2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJwb3NpdGlvbiIsIm9yaWVudGF0aW9uIiwiYnV0dG9uIiwicGFyZW50IiwieSIsIkFycmF5IiwiaW5kZXhPZiIsIngiLCJlbmRHYW1lIiwid2lubmVyIiwidmljdG9yeU1lbnUiLCJ2aWN0b3J5VGV4dCIsInZpY3RvcnlCdXR0b24iLCJuZXh0VHVybiIsIndpbiIsIlNoaXAiLCJoaXRDb3VudGVyIiwicm90YXRlIiwiU0hJUF9TSVpFUyIsImNhcnJpZXIiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiaGl0IiwiaXNTdW5rIiwib3IiLCJhcnJheWVkTmFtZSIsInNwbGl0IiwidG9VcHBlckNhc2UiLCJqb2luIiwiU2NyZWVuIiwiUGxhY2VtZW50Qm9hcmQiLCJvbkZpbmlzaCIsInBsYWNpbmciLCJob3Jpem9udGFsIiwicGxhY2VkIiwic2V0U2hpcHMiLCJuZXdTaGlwIiwicGxhY2VTaGlwIiwiZHJhd1BsYWNlbWVudEJvYXJkIiwicmVuZGVyUGxhY2VtZW50U2NyZWVuIiwiZHJhd05leHRTaGlwQnV0dG9uIiwibmV4dFNoaXAiLCJtYWtlTmV4dFNoaXBCdXR0b24iLCJyZW5kZXJTdWJtaXRCdXR0b24iLCJtYWtlU2hpcCIsInNoaXBQbGFjZW1lbnQiLCJzdWJtaXQiLCJjbGVhclNoaXBCYXIiLCJleGlzdGluZyIsImJ1dHRvblRleHQiLCJjcmVhdGVUZW1wbGF0ZSIsInRlbXBsYXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjbGVhclJvdGF0ZUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVSb3RhdGVCdXR0b24iLCJ0aWxlcyIsInJlbmRlclNoaXAiLCJpbGxlZ2FsU3F1YXJlcyIsImZpbmRJbGxlZ2FsU3F1YXJlcyIsInJlbW92ZU1hcmtlciIsInJvdGF0ZVNoaXAiLCJob3ZlckltYWdlIiwiaW5jbHVkZXMiLCJwbGFjZVRlbXBsYXRlIiwib29iTW92ZSIsIl9sb29wIiwic3BhY2VTZXQiLCJTZXQiLCJpbGxNb3ZlcyIsImdldE9jY3VwaWVkU3BhY2VzIiwiYXJyYXlQb2ludGVyIiwic3BhY2UiLCJuZXh0U3BhY2UiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjb29yZCIsIl9yZXQiLCJtYXJrZXIiLCJzcGFjZXMiLCJjdXJyZW50Q29vcmQiLCJpbWFnZSIsIndpZHRoIiwicmVwbGFjZVdpdGgiLCJjbG9uZU5vZGUiLCJtb3ZlU2hpcCIsImNhbGN1bGF0ZVRlbXBsYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJzdWJtaXRCdXR0b24iLCJlbGVtZW50IiwiaW1nIiwiZXZlbnQiLCJwb3MiLCJjb250YWlucyJdLCJzb3VyY2VSb290IjoiIn0=