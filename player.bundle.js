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
  var moveReady = true;
  var drawMainMenu = function drawMainMenu(singleInitialise, doubleInitialise) {
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
    buttonBar.appendChild(startSingle);
    buttonBar.appendChild(startDouble);
    menuPan.appendChild(buttonBar);
    startSingle.textContent = 'Single Player';
    startDouble.textContent = 'Two Player';
    startSingle.addEventListener('click', function () {
      return getName(singleInitialise);
    });
    startDouble.addEventListener('click', function () {
      return getName(function (name) {
        getName(function (secondName) {
          doubleInitialise(name, secondName);
        });
      });
    });
  };
  var getName = function getName(cb) {
    console.log("getting name");
    var nameDialog = document.createElement('dialog');
    nameDialog.classList.add('get-name');
    var body = document.querySelector('body');
    body.appendChild(nameDialog);
    nameDialog.show();
    var nameForm = document.createElement('form');
    var nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name-input');
    nameLabel.textContent = 'Admiral name: ';
    var nameInput = document.createElement('input');
    nameInput.id = 'name-input';
    var nameSubmit = document.createElement('button');
    nameSubmit.textContent = "Submit";
    nameDialog.appendChild(nameForm);
    nameForm.appendChild(nameInput);
    nameForm.appendChild(nameSubmit);
    nameSubmit.classList.add('get-name-submit');
    nameSubmit.addEventListener('click', function (e) {
      e.preventDefault();
      cb(nameInput.value);
      nameDialog.parentNode.removeChild(nameDialog);
    });
  };
  var shipScreenSetup = function shipScreenSetup() {
    var body = document.querySelector('body');
    body.innerHTML = '';
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
    gameScreenSetup: gameScreenSetup,
    shipScreenSetup: shipScreenSetup,
    renderComputerMove: renderComputerMove,
    endGame: endGame,
    getTarget: getTarget,
    refresh: refresh,
    sunkShip: sunkShip,
    renderPlayerMove: renderPlayerMove,
    drawMainMenu: drawMainMenu,
    set onNext(nextTurn) {
      onNext = nextTurn;
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
      if (_typeof(move) === 'object' && move.isSunk()) _screen_js__WEBPACK_IMPORTED_MODULE_0__["default"].sunkShip(move);
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
  var SQUARES_AROUND = function SQUARES_AROUND(x, y) {
    return {
      up: [x, y - 1],
      right: [x + 1, y],
      down: [x, y + 1],
      left: [x - 1, y]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZDO0lBQ0EsSUFBSW5SLE9BQUEsQ0FBT3lRLFNBQVMsTUFBSyxRQUFRLElBQUlBLFNBQVMsQ0FBQzdCLE1BQU0sQ0FBQyxDQUFDLEVBQUU7TUFDckQzSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUV1SSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDNUNBLGNBQWMsQ0FBQ2tDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUMsTUFBTSxJQUFJM1IsT0FBQSxDQUFPeVEsU0FBUyxNQUFLLFFBQVEsSUFBSUEsU0FBUyxLQUFLaUIsYUFBYSxDQUFDeEksTUFBTSxFQUFFO01BQzVFd0ksYUFBYSxDQUFDTix5QkFBeUIsQ0FBQ2hILE1BQU0sQ0FBQzRHLE9BQU8sRUFBQzVHLE1BQU0sQ0FBQytHLE1BQU0sQ0FBQztJQUN6RSxDQUFDLE1BQU0sSUFBSW5SLE9BQUEsQ0FBT3lRLFNBQVMsTUFBSyxRQUFRLEVBQUU7TUFDdENFLHNCQUFzQixDQUFDdkcsTUFBTSxDQUFDK0csTUFBTSxFQUFDVixTQUFTLENBQUM7SUFDbkQ7SUFDQXZCLGtEQUFNLENBQUNqRixrQkFBa0IsQ0FBQ0csTUFBTSxDQUFDK0csTUFBTSxFQUFDNUksU0FBUyxDQUFDYSxRQUFRLENBQUNiLFNBQVMsQ0FBQztFQUN6RSxDQUFDO0VBRUQsT0FBTztJQUNIZCxFQUFFLEVBQUZBLEVBQUU7SUFDRmMsU0FBUyxFQUFUQSxTQUFTO0lBQ1R5QixNQUFNLEVBQUMsSUFBSTtJQUNYbUcsb0JBQW9CLEVBQXBCQSxvQkFBb0I7SUFDcEI5RyxRQUFRLEVBQVJBLFFBQVE7SUFDUnlHLEtBQUssRUFBTEE7RUFDSixDQUFDO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc2NyZWVuLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBTSElQX0lNQUdFUyA9IHtcbiAgICBiYXR0bGVzaGlwOiBiYXR0bGVzaGlwSW1hZ2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gICAgbGV0IG9uTmV4dDtcbiAgICBsZXQgbW92ZVJlYWR5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRyYXdNYWluTWVudSA9IChzaW5nbGVJbml0aWFsaXNlLCBkb3VibGVJbml0aWFsaXNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IG1lbnVQYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZ2FtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXRpdGxlJyk7XG4gICAgICAgIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwcyEnXG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoZ2FtZVRpdGxlKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtZW51UGFuKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0U2luZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0RG91YmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzdGFydFNpbmdsZSk7XG4gICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChzdGFydERvdWJsZSk7XG4gICAgICAgIG1lbnVQYW4uYXBwZW5kQ2hpbGQoYnV0dG9uQmFyKTtcbiAgICAgICAgc3RhcnRTaW5nbGUudGV4dENvbnRlbnQgPSAnU2luZ2xlIFBsYXllcic7XG4gICAgICAgIHN0YXJ0RG91YmxlLnRleHRDb250ZW50ID0gJ1R3byBQbGF5ZXInO1xuICAgICAgICBzdGFydFNpbmdsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gZ2V0TmFtZShzaW5nbGVJbml0aWFsaXNlKSk7XG4gICAgICAgIHN0YXJ0RG91YmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBnZXROYW1lKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBnZXROYW1lKChzZWNvbmROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgZG91YmxlSW5pdGlhbGlzZShuYW1lLHNlY29uZE5hbWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoY2IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIG5hbWVcIilcbiAgICAgICAgY29uc3QgbmFtZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBuYW1lRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2dldC1uYW1lJyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobmFtZURpYWxvZyk7XG4gICAgICAgIG5hbWVEaWFsb2cuc2hvdygpO1xuICAgICAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmFtZS1pbnB1dCcpO1xuICAgICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnQWRtaXJhbCBuYW1lOiAnXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcbiAgICAgICAgY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuYW1lU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgbmFtZURpYWxvZy5hcHBlbmRDaGlsZChuYW1lRm9ybSk7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVTdWJtaXQpO1xuICAgICAgICBuYW1lU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2dldC1uYW1lLXN1Ym1pdCcpO1xuICAgICAgICBuYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2IobmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIG5hbWVEaWFsb2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuYW1lRGlhbG9nKTtcbiAgICAgICAgfSlcbiAgICB9ICAgXG5cbiAgICBjb25zdCBzaGlwU2NyZWVuU2V0dXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdC5pZCA9ICdsZWZ0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGNvbnN0IHNoaXBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcGJhci5pZCA9ICdzaGlwLWJhcic7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2hpcGJhcik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FtZVNjcmVlblNldHVwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnQuaWQgPSAnbGVmdCc7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJpZ2h0LmlkID0gJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgZ2FtZWFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ2FtZWFyZWEuaWQgPSAnZ2FtZWFyZWEnO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVhcmVhKTtcbiAgICAgICAgZ2FtZWFyZWEuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgICAgIGdhbWVhcmVhLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICAgICAgY29uc3Qgc2hpcGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwYmFyLmlkID0gJ3NoaXAtYmFyJztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzaGlwYmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3QWN0aXZlQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHpvbmVEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRcIilcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGdldFRhcmdldChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3ZlUmVhZHkpIHJldHVybjtcbiAgICAgICAgICAgICAgICBtb3ZlUmVhZHkgPSBnYW1lYm9hcmQub3Bwb25lbnQubWFrZU1vdmUodGlsZSwgZ2FtZWJvYXJkKVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdEdW1teUFjdGl2ZUJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2l6ZSA7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IHNpemUgOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgndGlsZScpO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGosaSkpO1xuICAgICAgICAgICAgICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRyYXdSZWNvbkJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCB6b25lRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBnYW1lYm9hcmQuaWQ7XG4gICAgICAgIHpvbmVEb20uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICBjb25zdCBzaXplID0gZ2FtZWJvYXJkLmdldExlbmd0aCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzaXplIDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgcm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3dDb250YWluZXIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgc2l6ZSA7IGorKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCd0aWxlJyk7XG4gICAgICAgICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKGdhbWVib2FyZC5zcXVhcmVTdGF0dXMoaixpKSk7XG4gICAgICAgICAgICAgICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyYXdTaGlwcyhnYW1lYm9hcmQsZ2FtZWJvYXJkLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3SGlkZGVuUmVjb25Cb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgem9uZURvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvYXJkLmlkID0gZ2FtZWJvYXJkLmlkO1xuICAgICAgICB6b25lRG9tLmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5nZXRMZW5ndGgoKTtcbiAgICAgICAgLy9kcmF3IHRoZSB0aWxlcyB0byBtYWludGFpbiBzaXplIGNvbnNpc3RlbmN5XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNpemUgOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCA7IGogPCBzaXplIDsgaisrICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQodGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhpZGRlbi50ZXh0Q29udGVudCA9IFwiRGF0YSBFbmNyeXB0ZWQuLi5cIlxuICAgICAgICBoaWRkZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJvYXJkJyk7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGhpZGRlbilcbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoID0gKGN1cnJlbnQscHJldmlvdXMpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHJlY29uQXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpO1xuICAgICAgICBhY3RpdmVBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZWNvbkFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghY3VycmVudC5pc0NvbXApIHtcbiAgICAgICAgICAgIGRyYXdBY3RpdmVCb2FyZChwcmV2aW91cy5nYW1lYm9hcmQpO1xuICAgICAgICAgICAgZHJhd1JlY29uQm9hcmQoY3VycmVudC5nYW1lYm9hcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHJhd0R1bW15QWN0aXZlQm9hcmQocHJldmlvdXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdIaWRkZW5SZWNvbkJvYXJkKGN1cnJlbnQuZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIGRyYXdTaGlwcyhwcmV2aW91cy5nYW1lYm9hcmQscHJldmlvdXMuZ2FtZWJvYXJkLmlkKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbmRlckNvbXB1dGVyTW92ZSA9IGFzeW5jIChjb29yZHMsZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIG1vdmVSZWFkeSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBhY3RpdmVab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0XCIpLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCByb3cgPSBhY3RpdmVab25lLmNoaWxkcmVuW2Nvb3Jkc1sxXV07XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuY2hpbGRyZW5bY29vcmRzWzBdXTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdhdHRhY2snKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQXR0YWNrTWFya2VyID0gYXdhaXQgcHJvbWlzaWZ5KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyksMTAwMCk7XG4gICAgICAgIHJlbW92ZUF0dGFja01hcmtlcigpO1xuICAgICAgICAvL2dldCByZXN1bHQgb2YgYXR0YWNrXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChnYW1lYm9hcmQuc3F1YXJlU3RhdHVzKGNvb3Jkc1swXSxjb29yZHNbMV0pKTtcbiAgICAgICAgY29uc3Qgc3RhbGxOZXh0VHVybiA9IGF3YWl0IHN0YWxsQ29tcHV0ZXJNb3ZlKCk7XG4gICAgICAgIHN0YWxsTmV4dFR1cm4oKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJQbGF5ZXJNb3ZlID0gYXN5bmMgKGNvb3JkcyxnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFwiKS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3Qgcm93ID0gYWN0aXZlWm9uZS5jaGlsZHJlbltjb29yZHNbMV1dO1xuICAgICAgICBjb25zdCBjZWxsID0gcm93LmNoaWxkcmVuW2Nvb3Jkc1swXV07XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUF0dGFja01hcmtlciA9IGF3YWl0IHByb21pc2lmeSgoKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpLDEwMDApO1xuICAgICAgICByZW1vdmVBdHRhY2tNYXJrZXIoKTtcbiAgICAgICAgLy9nZXQgcmVzdWx0IG9mIGF0dGFja1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoZ2FtZWJvYXJkLnNxdWFyZVN0YXR1cyhjb29yZHNbMF0sY29vcmRzWzFdKSk7XG4gICAgICAgIGNvbnN0IHNob3dQbGF5ZXJzVHVybiA9IGF3YWl0IHNob3dQbGF5ZXJSZXN1bHQoKTtcbiAgICAgICAgc2hvd1BsYXllcnNUdXJuKCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vua1NoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzaGlwLm5hbWUsICcgaXMgYSBnb25lcicpXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1BsYXllclJlc3VsdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcGxheWVyUmVzdWx0VGltZXIgPSBhd2FpdCBwcm9taXNpZnkob25OZXh0LCAyMDAwKTtcbiAgICAgICAgcmV0dXJuIHBsYXllclJlc3VsdFRpbWVyXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YWxsQ29tcHV0ZXJNb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlckZpbmlzaGVkID0gYXdhaXQgcHJvbWlzaWZ5KG9uTmV4dCwgMjAwMCk7XG4gICAgICAgIG1vdmVSZWFkeSA9IHRydWU7XG4gICAgICAgIHJldHVybiBjb21wdXRlckZpbmlzaGVkXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHByb21pc2lmeSA9IChjYWxsYmFjayx0aW1lcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoY2FsbGJhY2spLCB0aW1lcikpO1xuICAgIH1cbiAgICBcblxuICAgIGNvbnN0IGRyYXdTaGlwcyA9IChnYW1lYm9hcmQsb25ib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IGdhbWVib2FyZC5nZXRTaGlwcygpO1xuICAgICAgICBjb25zdCBwbGF5em9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9uYm9hcmQpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24ocGxheXpvbmUsIGdhbWVib2FyZC5nZXRMZW5ndGgoKSwgc2hpcClcbiAgICAgICAgICAgIHBsYXl6b25lLmFwcGVuZENoaWxkKGRyYXdTaGlwKGRpbWVuc2lvbnMpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3U2hpcCA9IChkaW1lbnNpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwLW1hcmtlcicpO1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnc3R5bGUnLGB0b3A6JHtkaW1lbnNpb25zLnRvcH07bGVmdDoke2RpbWVuc2lvbnMubGVmdH07d2lkdGg6JHtkaW1lbnNpb25zLmxlbmd0aH07aGVpZ2h0OiR7ZGltZW5zaW9ucy5oZWlnaHR9YCk7XG4gICAgICAgIHJldHVybiBzaGlwXG4gICAgfVxuXG4gICAgY29uc3QgY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24gPSAoem9uZSwgc2NhbGUgLHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgdW5pdCA9IHpvbmUub2Zmc2V0V2lkdGggLyBzY2FsZTtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVswXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3Ioc2hpcC5wb3NpdGlvblswXVsxXSAqIHVuaXQpKydweCc7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAub3JpZW50YXRpb24gPyBzaGlwLmxlbmd0aCAqIHVuaXQgOiB1bml0IDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2hpcC5vcmllbnRhdGlvbiA/IHVuaXQgOiBzaGlwLmxlbmd0aCAqIHVuaXQgO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgIGxlbmd0aDpsZW5ndGgrJ3B4JyxcbiAgICAgICAgICAgIGhlaWdodDpoZWlnaHQrJ3B4J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFyZ2V0ID0gKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoIWJ1dHRvbikgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBidXR0b247XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudC5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgLy8gRmluZCB0aGUgY29vcmRpbmF0ZXMgdGhyb3VnaCB0aGUgZWxlbWVudHMgcG9zaXRpb24gYW1vbmdzdCBpdHMgc2libGluZ3NcbiAgICAgICAgY29uc3QgeSA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYm9hcmQuY2hpbGRyZW4scGFyZW50KTtcbiAgICAgICAgY29uc3QgeCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLHRhcmdldCk7XG4gICAgICAgIHJldHVybiBbeCx5XVxuICAgIH1cblxuICAgIGNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKVxuICAgIH1cblxuXG5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd1NoaXBzLFxuICAgICAgICBnYW1lU2NyZWVuU2V0dXAsXG4gICAgICAgIHNoaXBTY3JlZW5TZXR1cCxcbiAgICAgICAgcmVuZGVyQ29tcHV0ZXJNb3ZlLFxuICAgICAgICBlbmRHYW1lLFxuICAgICAgICBnZXRUYXJnZXQsXG4gICAgICAgIHJlZnJlc2gsXG4gICAgICAgIHN1bmtTaGlwLFxuICAgICAgICByZW5kZXJQbGF5ZXJNb3ZlLFxuICAgICAgICBkcmF3TWFpbk1lbnUsXG4gICAgICAgIHNldCBvbk5leHQobmV4dFR1cm4pIHtcbiAgICAgICAgICAgIG9uTmV4dCA9IG5leHRUdXJuO1xuICAgICAgICB9LFxuICAgIH1cbn0pKCk7XG4iLCJleHBvcnQgY29uc3QgU2hpcCA9IChuYW1lID0gbnVsbCkgPT4ge1xuICAgIGxldCBoaXRDb3VudGVyID0gMDtcblxuICAgIGxldCBvcmllbnRhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlID0gKCkgPT4ge1xuICAgICAgICBvcmllbnRhdGlvbiA9ICFvcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBTSElQX1NJWkVTID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChoaXRDb3VudGVyID49IFNISVBfU0laRVNbbmFtZV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGl0LFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHBvc2l0aW9uOltdLFxuICAgICAgICBnZXQgb3JpZW50YXRpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb3JpZW50YXRpb24ob3IpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gb3I7XG4gICAgICAgIH0sXG4gICAgICAgIHJvdGF0ZSxcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheWVkTmFtZSA9IG5hbWUuc3BsaXQoJycpO1xuICAgICAgICAgICAgYXJyYXllZE5hbWVbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheWVkTmFtZS5qb2luKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBTSElQX1NJWkVTW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBTY3JlZW4gZnJvbSBcIi4vc2NyZWVuLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5leHBvcnQgY29uc3QgUGxheWVyID0gKGlkLGdhbWVib2FyZCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgbWFrZU1vdmUgPSAodGlsZSwgb3Bwb25lbnRCb2FyZCkgPT4ge1xuICAgICAgICBpZiAoIXRpbGUpIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHRpbGUuXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IG9wcG9uZW50Qm9hcmQuaGl0U3F1YXJlKHRpbGVbMF0sdGlsZVsxXSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vdmUgPT09ICdvYmplY3QnICYmIG1vdmUuaXNTdW5rKCkpIFNjcmVlbi5zdW5rU2hpcChtb3ZlKTsgXG4gICAgICAgICAgICBTY3JlZW4ucmVuZGVyUGxheWVyTW92ZSh0aWxlLG9wcG9uZW50Qm9hcmQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWluZzogZmFsc2UsXG4gICAgICAgIGlzQ29tcDogZmFsc2UsXG4gICAgICAgIGlkLFxuICAgICAgICBnYW1lYm9hcmQsXG4gICAgICAgIG1ha2VNb3ZlXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBDb21wdXRlciA9IChpZCxnYW1lYm9hcmQpID0+IHtcblxuICAgIGxldCBjdXJyZW50U3VjY2VzcyA9IFtdO1xuXG4gICAgY29uc3QgbWFrZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxuICAgICAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxuICAgICAgICAgICAgY3J1aXNlcjogU2hpcCgnY3J1aXNlcicpLFxuICAgICAgICAgICAgc3VibWFyaW5lOiBTaGlwKCdzdWJtYXJpbmUnKSxcbiAgICAgICAgICAgIGRlc3Ryb3llcjogU2hpcCgnZGVzdHJveWVyJyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBTUVVBUkVTX0FST1VORCA9ICh4LHkpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVwOlt4LHktMV0sXG4gICAgICAgICAgICByaWdodDpbeCsxLHldLFxuICAgICAgICAgICAgZG93bjpbeCx5KzFdLFxuICAgICAgICAgICAgbGVmdDpbeC0xLHldXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBtYWtlU2hpcHMoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoc2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLmdldExlbmd0aCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjIpID8gdHJ1ZSA6IGZhbHNlIDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW3NoaXBdLHgseSxvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5ub3QgcGxhY2UgYXQ6IFwiLCB4LCB5LCBcIiB3aXRoIFwiLCBvcmllbnRhdGlvbixcIiBvcmllbnRhdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgICAgICBcbiAgICBjb25zdCBwbGF5VGlsZSA9ICh0aWxlKSA9PiB7XG4gICAgICAgIGlmICghdGlsZSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaGl0ID0gZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZC5oaXRTcXVhcmUodGlsZVswXSx0aWxlWzFdKTtcbiAgICAgICAgICAgIGlmIChoaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGl0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm91bmRhcnkgPSBnYW1lYm9hcmQuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIGNvbnN0IHJhblggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqYm91bmRhcnkpO1xuICAgICAgICBjb25zdCByYW5ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmJvdW5kYXJ5KTtcbiAgICAgICAgcmV0dXJuIFtyYW5YLHJhblldO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VNb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFN1Y2Nlc3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBlZHVjYXRlZE1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGR1bWJNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkdW1iTW92ZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1vdmVUYWtlbiA9IGZhbHNlO1xuICAgICAgICBsZXQgY29vcmRzO1xuICAgICAgICBpZiAoIWdhbWVib2FyZC5vcHBvbmVudC5nYW1lYm9hcmQuY2hlY2tGb3JFbXB0eSgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNb3JlIFNwYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICghbW92ZVRha2VuKSB7XG4gICAgICAgICAgICBjb29yZHMgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgbW92ZVRha2VuID0gcGxheVRpbGUoY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1vdmVUYWtlbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlQ3VycmVudFN1Y2Nlc3MoY29vcmRzLG1vdmVUYWtlbik7XG4gICAgICAgIH1cbiAgICAgICAgU2NyZWVuLnJlbmRlckNvbXB1dGVyTW92ZShjb29yZHMsZ2FtZWJvYXJkLm9wcG9uZW50LmdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0U2hpcCA9IChjb29yZHMsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsTW92ZXMgPSBbWzAsMV0sWzAsLTFdLFsxLDBdLFstMSwwXV07XG5cbiAgICAgICAgY29uc3QgbmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5kb21DaG9pY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3RlbnRpYWxNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGluZyA9IHBvdGVudGlhbE1vdmVzLnNwbGljZShyYW5kb21DaG9pY2UsMSkuZmxhdCgpO1xuICAgICAgICAgICAgY29uc3QgbW92ZSA9IFtjb29yZHNbMF0gKyBoZWFkaW5nWzBdLGNvb3Jkc1sxXSArIGhlYWRpbmdbMV1dO1xuICAgICAgICAgICAgcmV0dXJuICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjazptb3ZlLFxuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nOmhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY2FsY3VsYXRlUG90ZW50aWFsTW92ZXMgPSAoaGVhZGluZyxhdHRhY2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBbY29vcmRzWzBdIC0gYXR0YWNrWzBdLGNvb3Jkc1sxXSAtIGF0dGFja1sxXV07XG4gICAgICAgICAgICBjb25zdCBheGlzID0gaGVhZGluZ1swXSAhPSAwID8gMCA6IDEgO1xuICAgICAgICAgICAgbmV3SGVhZGluZ1theGlzXSA9IGhlYWRpbmdbYXhpc10gPiAwID8gaGVhZGluZ1theGlzXSsxIDogaGVhZGluZ1theGlzXS0xO1xuICAgICAgICAgICAgY29uc3Qgc3RpbGxWYWxpZCA9IHBvdGVudGlhbE1vdmVzLmZpbHRlcihoZWFkaW5nID0+IGhlYWRpbmdbYXhpc10gIT0gMCk7XG4gICAgICAgICAgICBzdGlsbFZhbGlkLnB1c2gobmV3SGVhZGluZyk7XG4gICAgICAgICAgICBwb3RlbnRpYWxNb3Zlcy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgc3RpbGxWYWxpZC5mb3JFYWNoKGNvb3JkID0+IHBvdGVudGlhbE1vdmVzLnB1c2goY29vcmQpKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29vcmRzLFxuICAgICAgICAgICAgdGFyZ2V0OnNoaXAsXG4gICAgICAgICAgICBwb3RlbnRpYWxNb3ZlcyxcbiAgICAgICAgICAgIG5leHRNb3ZlLFxuICAgICAgICAgICAgcmVjYWxjdWxhdGVQb3RlbnRpYWxNb3Zlc1xuICAgICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgcG9wdWxhdGVDdXJyZW50U3VjY2VzcyA9IChjb29yZHMsIHNoaXApID0+IHtcbiAgICAgICAgY3VycmVudFN1Y2Nlc3MucHVzaCh0YXJnZXRTaGlwKGNvb3JkcyxzaGlwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWR1Y2F0ZWRNb3ZlID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW92ZVRha2VuID0gZmFsc2U7XG4gICAgICAgIGxldCBjb29yZHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBjdXJyZW50U3VjY2Vzc1swXTtcbiAgICAgICAgaWYgKCFnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkLmNoZWNrRm9yRW1wdHkoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTW9yZSBTcGFjZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoIW1vdmVUYWtlbikge1xuICAgICAgICAgICAgY29vcmRzID0gY3VycmVudFRhcmdldC5uZXh0TW92ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5aW5nIDogXCIsY29vcmRzKTtcbiAgICAgICAgICAgIG1vdmVUYWtlbiA9IHBsYXlUaWxlKGNvb3Jkcy5hdHRhY2spO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW92ZVRha2VuID09PSAnb2JqZWN0JyAmJiBtb3ZlVGFrZW4uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRpbmc6IFwiLCBjdXJyZW50U3VjY2Vzc1swXSk7XG4gICAgICAgICAgICBjdXJyZW50U3VjY2Vzcy5zaGlmdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnICYmIG1vdmVUYWtlbiA9PT0gY3VycmVudFRhcmdldC50YXJnZXQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQucmVjYWxjdWxhdGVQb3RlbnRpYWxNb3Zlcyhjb29yZHMuaGVhZGluZyxjb29yZHMuYXR0YWNrKVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb3ZlVGFrZW4gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZUN1cnJlbnRTdWNjZXNzKGNvb3Jkcy5hdHRhY2ssbW92ZVRha2VuKVxuICAgICAgICB9XG4gICAgICAgIFNjcmVlbi5yZW5kZXJDb21wdXRlck1vdmUoY29vcmRzLmF0dGFjayxnYW1lYm9hcmQub3Bwb25lbnQuZ2FtZWJvYXJkKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgZ2FtZWJvYXJkLFxuICAgICAgICBpc0NvbXA6dHJ1ZSxcbiAgICAgICAgZ2VuZXJhdGVSYW5kb21Db29yZHMsXG4gICAgICAgIG1ha2VNb3ZlLFxuICAgICAgICBwbGFjZVxuICAgIH1cbn0iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiU2hpcCIsImJhdHRsZXNoaXBJbWFnZSIsIlNISVBfSU1BR0VTIiwiYmF0dGxlc2hpcCIsIm9uTmV4dCIsIm1vdmVSZWFkeSIsImRyYXdNYWluTWVudSIsInNpbmdsZUluaXRpYWxpc2UiLCJkb3VibGVJbml0aWFsaXNlIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVQYW4iLCJjcmVhdGVFbGVtZW50IiwiZ2FtZVRpdGxlIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbkJhciIsInN0YXJ0U2luZ2xlIiwic3RhcnREb3VibGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0TmFtZSIsInNlY29uZE5hbWUiLCJjYiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lRGlhbG9nIiwic2hvdyIsIm5hbWVGb3JtIiwibmFtZUxhYmVsIiwic2V0QXR0cmlidXRlIiwibmFtZUlucHV0IiwiaWQiLCJuYW1lU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic2hpcFNjcmVlblNldHVwIiwiaW5uZXJIVE1MIiwibGVmdCIsImdhbWVhcmVhIiwic2hpcGJhciIsImdhbWVTY3JlZW5TZXR1cCIsInJpZ2h0IiwiZHJhd0FjdGl2ZUJvYXJkIiwiZ2FtZWJvYXJkIiwiem9uZURvbSIsImdldEVsZW1lbnRCeUlkIiwiYm9hcmQiLCJzaXplIiwiZ2V0TGVuZ3RoIiwicm93Q29udGFpbmVyIiwiaiIsInRpbGUiLCJzcXVhcmVTdGF0dXMiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib3Bwb25lbnQiLCJtYWtlTW92ZSIsImRyYXdEdW1teUFjdGl2ZUJvYXJkIiwiZHJhd1JlY29uQm9hcmQiLCJkcmF3U2hpcHMiLCJkcmF3SGlkZGVuUmVjb25Cb2FyZCIsImhpZGRlbiIsInJlZnJlc2giLCJjdXJyZW50IiwicHJldmlvdXMiLCJhY3RpdmVBcmVhIiwicmVjb25BcmVhIiwiaXNDb21wIiwicmVuZGVyQ29tcHV0ZXJNb3ZlIiwiX3JlZiIsIl9jYWxsZWUiLCJjb29yZHMiLCJhY3RpdmVab25lIiwicm93IiwiY2VsbCIsInJlbW92ZUF0dGFja01hcmtlciIsInN0YWxsTmV4dFR1cm4iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiY2hpbGRyZW4iLCJwcm9taXNpZnkiLCJyZW1vdmUiLCJzdGFsbENvbXB1dGVyTW92ZSIsIl94IiwiX3gyIiwicmVuZGVyUGxheWVyTW92ZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJzaG93UGxheWVyc1R1cm4iLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzaG93UGxheWVyUmVzdWx0IiwiX3gzIiwiX3g0Iiwic3Vua1NoaXAiLCJzaGlwIiwiX3JlZjMiLCJfY2FsbGVlMyIsInBsYXllclJlc3VsdFRpbWVyIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3JlZjQiLCJfY2FsbGVlNCIsImNvbXB1dGVyRmluaXNoZWQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJjYWxsYmFjayIsInRpbWVyIiwic2V0VGltZW91dCIsIm9uYm9hcmQiLCJzaGlwcyIsImdldFNoaXBzIiwicGxheXpvbmUiLCJkaW1lbnNpb25zIiwiY2FsY3VsYXRlU2NyZWVuUG9zaXRpb24iLCJkcmF3U2hpcCIsImNvbmNhdCIsInRvcCIsImhlaWdodCIsInpvbmUiLCJzY2FsZSIsInVuaXQiLCJvZmZzZXRXaWR0aCIsIk1hdGgiLCJmbG9vciIsInBvc2l0aW9uIiwib3JpZW50YXRpb24iLCJidXR0b24iLCJwYXJlbnQiLCJ5IiwiQXJyYXkiLCJpbmRleE9mIiwieCIsImVuZEdhbWUiLCJuZXh0VHVybiIsImhpdENvdW50ZXIiLCJyb3RhdGUiLCJTSElQX1NJWkVTIiwiY2FycmllciIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJoaXQiLCJpc1N1bmsiLCJvciIsImFycmF5ZWROYW1lIiwic3BsaXQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iLCJTY3JlZW4iLCJQbGF5ZXIiLCJvcHBvbmVudEJvYXJkIiwibW92ZSIsImhpdFNxdWFyZSIsInBsYXlpbmciLCJDb21wdXRlciIsImN1cnJlbnRTdWNjZXNzIiwibWFrZVNoaXBzIiwiU1FVQVJFU19BUk9VTkQiLCJ1cCIsImRvd24iLCJwbGFjZSIsInBsYWNlZCIsInJhbmRvbSIsInBsYWNlU2hpcCIsInBsYXlUaWxlIiwiZ2VuZXJhdGVSYW5kb21Db29yZHMiLCJib3VuZGFyeSIsInJhblgiLCJyYW5ZIiwiZWR1Y2F0ZWRNb3ZlIiwiZHVtYk1vdmUiLCJtb3ZlVGFrZW4iLCJjaGVja0ZvckVtcHR5IiwicG9wdWxhdGVDdXJyZW50U3VjY2VzcyIsInRhcmdldFNoaXAiLCJwb3RlbnRpYWxNb3ZlcyIsIm5leHRNb3ZlIiwicmFuZG9tQ2hvaWNlIiwiaGVhZGluZyIsInNwbGljZSIsImZsYXQiLCJhdHRhY2siLCJyZWNhbGN1bGF0ZVBvdGVudGlhbE1vdmVzIiwibmV3SGVhZGluZyIsImF4aXMiLCJzdGlsbFZhbGlkIiwiZmlsdGVyIiwiY29vcmQiLCJjdXJyZW50VGFyZ2V0Iiwic2hpZnQiXSwic291cmNlUm9vdCI6IiJ9