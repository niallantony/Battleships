/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/screen.js":
/*!*******************************!*\
  !*** ./src/modules/screen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/ship.js\");\n/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/battleship.png */ \"./src/images/battleship.png\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar SHIP_IMAGES = {\n  battleship: _images_battleship_png__WEBPACK_IMPORTED_MODULE_1__\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (_ref5) {\n  var playerOne = true;\n  var drawActiveBoard = function drawActiveBoard(gameboard) {\n    var zoneDom = document.getElementById(\"left\");\n    var board = document.createElement('div');\n    board.id = gameboard.id;\n    zoneDom.appendChild(board);\n    var size = gameboard.getLength();\n    for (var i = 0; i < size; i++) {\n      var rowContainer = document.createElement('div');\n      rowContainer.classList.add('row');\n      board.appendChild(rowContainer);\n      for (var j = 0; j < size; j++) {\n        var tile = document.createElement('button');\n        tile.classList.add('tile');\n        tile.classList.add(gameboard.squareStatus(j, i));\n        rowContainer.appendChild(tile);\n      }\n    }\n    board.addEventListener(\"click\", function (e) {\n      var tile = getTarget(e.target.closest('button'));\n      gameboard.opponent.makeMove(tile);\n    });\n  };\n  var drawReconBoard = function drawReconBoard(gameboard) {\n    var zoneDom = document.getElementById(\"right\");\n    var board = document.createElement('div');\n    board.id = gameboard.id;\n    zoneDom.appendChild(board);\n    var size = gameboard.getLength();\n    for (var i = 0; i < size; i++) {\n      var rowContainer = document.createElement('div');\n      rowContainer.classList.add('row');\n      board.appendChild(rowContainer);\n      for (var j = 0; j < size; j++) {\n        var tile = document.createElement('button');\n        tile.classList.add('tile');\n        tile.classList.add(gameboard.squareStatus(j, i));\n        rowContainer.appendChild(tile);\n      }\n    }\n    drawShips(gameboard, gameboard.id);\n  };\n  var drawHiddenReconBoard = function drawHiddenReconBoard(gameboard) {\n    var zoneDom = document.getElementById(\"right\");\n    var board = document.createElement('div');\n    board.id = gameboard.id;\n    zoneDom.appendChild(board);\n    var size = gameboard.getLength();\n    //draw the tiles to maintain size consistency\n    for (var i = 0; i < size; i++) {\n      var rowContainer = document.createElement('div');\n      rowContainer.classList.add('row');\n      board.appendChild(rowContainer);\n      for (var j = 0; j < size; j++) {\n        var tile = document.createElement('div');\n        tile.classList.add('tile');\n        rowContainer.appendChild(tile);\n      }\n    }\n    var hidden = document.createElement('div');\n    hidden.textContent = \"Data Encrypted...\";\n    hidden.classList.add('hidden-board');\n    board.appendChild(hidden);\n  };\n  var refresh = function refresh(current, previous) {\n    var activeArea = document.getElementById('left');\n    var reconArea = document.getElementById('right');\n    activeArea.innerHTML = '';\n    reconArea.innerHTML = '';\n    drawActiveBoard(current.gameboard);\n    if (!current.isComp) {\n      drawReconBoard(previous.gameboard);\n    } else {\n      drawHiddenReconBoard(previous.gameboard);\n      drawShips(current.gameboard, current.gameboard.id);\n    }\n  };\n  var instantShowResult = function instantShowResult(gameboard, coordscell) {\n    var activeArea = document.getElementById('left');\n    activeArea.innerHTML = '';\n    drawActiveBoard(gameboard);\n  };\n  var renderComputerMove = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(coords, gameboard) {\n      var activeZone, row, cell, removeAttackMarker, stallNextTurn;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            activeZone = document.getElementById(\"left\").querySelector('div');\n            row = activeZone.children[coords[1]];\n            cell = row.children[coords[0]];\n            cell.classList.add('attack');\n            _context.next = 6;\n            return promisify(function () {\n              return cell.classList.remove('attack');\n            }, 1000);\n          case 6:\n            removeAttackMarker = _context.sent;\n            removeAttackMarker();\n            //get result of attack\n            cell.classList.add(gameboard.squareStatus(coords[0], coords[1]));\n            _context.next = 11;\n            return stallComputerMove();\n          case 11:\n            stallNextTurn = _context.sent;\n            stallNextTurn();\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return function renderComputerMove(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  var renderPlayerMove = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(coords, gameboard) {\n      var activeZone, row, cell, removeAttackMarker, showPlayersTurn;\n      return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            activeZone = document.getElementById(\"left\").querySelector('div');\n            row = activeZone.children[coords[1]];\n            cell = row.children[coords[0]];\n            cell.classList.add('attack');\n            _context2.next = 6;\n            return promisify(function () {\n              return cell.classList.remove('attack');\n            }, 1000);\n          case 6:\n            removeAttackMarker = _context2.sent;\n            removeAttackMarker();\n            //get result of attack\n            cell.classList.add(gameboard.squareStatus(coords[0], coords[1]));\n            _context2.next = 11;\n            return showPlayerResult();\n          case 11:\n            showPlayersTurn = _context2.sent;\n            showPlayersTurn();\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2);\n    }));\n    return function renderPlayerMove(_x3, _x4) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  var sunkShip = function sunkShip(ship) {\n    console.log(ship.name, ' is a goner');\n  };\n  var showPlayerResult = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {\n      var playerResultTimer;\n      return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n        while (1) switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return promisify(f(), 2000);\n          case 2:\n            playerResultTimer = _context3.sent;\n            return _context3.abrupt(\"return\", playerResultTimer);\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }, _callee3);\n    }));\n    return function showPlayerResult() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n  var stallComputerMove = /*#__PURE__*/function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {\n      var computerFinished;\n      return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n        while (1) switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return promisify(f(), 2000);\n          case 2:\n            computerFinished = _context4.sent;\n            return _context4.abrupt(\"return\", computerFinished);\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }, _callee4);\n    }));\n    return function stallComputerMove() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n  var promisify = function promisify(callback, timer) {\n    return new Promise(function (resolve) {\n      return setTimeout(function () {\n        return resolve(callback);\n      }, timer);\n    });\n  };\n  var drawShips = function drawShips(gameboard, onboard) {\n    var ships = gameboard.getShips();\n    var playzone = document.getElementById(onboard);\n    ships.forEach(function (ship) {\n      var dimensions = calculateScreenPosition(playzone, gameboard.getLength(), ship);\n      playzone.appendChild(drawShip(dimensions));\n    });\n  };\n  var drawShip = function drawShip(dimensions) {\n    var ship = document.createElement('div');\n    ship.classList.add('ship-marker');\n    ship.setAttribute('style', \"top:\".concat(dimensions.top, \";left:\").concat(dimensions.left, \";width:\").concat(dimensions.length, \";height:\").concat(dimensions.height));\n    return ship;\n  };\n  var calculateScreenPosition = function calculateScreenPosition(zone, scale, ship) {\n    var unit = zone.offsetWidth / scale;\n    var left = Math.floor(ship.position[0][0] * unit) + 'px';\n    var top = Math.floor(ship.position[0][1] * unit) + 'px';\n    var length = ship.orientation ? ship.length * unit : unit;\n    var height = ship.orientation ? unit : ship.length * unit;\n    return {\n      top: top,\n      left: left,\n      length: length + 'px',\n      height: height + 'px'\n    };\n  };\n  var getTarget = function getTarget(button) {\n    if (!button) return;\n    var target = button;\n    var parent = target.parentNode;\n    var board = document.getElementById(parent.parentNode.id);\n    console.log(board, parent, target);\n    // Find the coordinates through the elements position amongst its siblings\n    var y = Array.prototype.indexOf.call(board.children, parent);\n    var x = Array.prototype.indexOf.call(parent.children, target);\n    return [x, y];\n  };\n  var endGame = function endGame() {\n    console.log('Game Over');\n  };\n  var drawPlacementBoard = function drawPlacementBoard(gameboard) {\n    var zoneDom = document.getElementById(\"left\");\n    var board = document.createElement('div');\n    board.id = gameboard.id;\n    zoneDom.appendChild(board);\n    var size = gameboard.getLength();\n    for (var i = 0; i < size; i++) {\n      var rowContainer = document.createElement('div');\n      rowContainer.classList.add('row');\n      board.appendChild(rowContainer);\n      for (var j = 0; j < size; j++) {\n        var tile = document.createElement('button');\n        tile.classList.add('tile');\n        tile.setAttribute('style', 'position:relative;');\n        tile.classList.add(gameboard.squareStatus(j, i));\n        rowContainer.appendChild(tile);\n      }\n    }\n  };\n  var renderShipButtons = function renderShipButtons() {\n    var shipBar = document.getElementById('ship-bar');\n  };\n  var shipPlacement = function shipPlacement(button) {\n    var horizontal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n    var shipTemplate = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(button.id);\n    shipTemplate.orientation = horizontal;\n    var tiles = document.querySelectorAll('.tile');\n    var template = document.createElement('button');\n    template.classList.add('placeholder');\n    template.id = button.id;\n    template.style.position = 'absolute';\n    template.style.top = '0px';\n    template.style.left = '0px';\n    template.style.backgroundImage = \"url(\".concat(SHIP_IMAGES[button.id]);\n    var board = document.getElementById('left');\n    var hoverEvent = hoverImage(board, template);\n    board.appendChild(template);\n    rotateShip(template, true, tiles[0].offsetWidth, shipTemplate.length);\n    tiles.forEach(function (tile) {\n      if (isOutOfBounds(horizontal, shipTemplate.length, tile)) return;\n      tile.addEventListener('click', function (e) {\n        board.removeEventListener('mouseover', hoverEvent);\n        placeTemplate(e.target.closest('.tile'), template);\n      });\n    });\n  };\n  var isOutOfBounds = function isOutOfBounds(orientation, length, tile) {\n    if (orientation) {\n      var row = tile.parentNode.children;\n      var index = Array.prototype.indexOf.call(row, tile);\n      if (length + index > row.length) return true;\n      return false;\n    } else {\n      var columns = tile.parentNode.parentnode.children;\n      var _index = Array.prototype.indexOf.call(columns, tile.parentNode);\n      if (length + _index > columns.length) return true;\n      return false;\n    }\n  };\n  var rotateShip = function rotateShip(image, orientation, unit, length) {\n    var width = orientation ? unit * length + 'px' : unit + 'px';\n    var height = orientation ? unit + 'px' : unit * length + 'px';\n    image.style.width = width;\n    image.style.height = height;\n  };\n  var moveShip = function moveShip(template) {\n    template.parentNode.removeChild(template);\n    shipPlacement(template);\n  };\n  var placeTemplate = function placeTemplate(tile, template) {\n    var coords = getTarget(tile);\n    var position = calculateTemplatePosition(tile.offsetWidth, coords);\n    template.style.top = position.top;\n    template.style.left = position.left;\n    template.style.zIndex = 10;\n    template.addEventListener('click', function (e) {\n      return moveShip(e.target.closest('.placeholder'));\n    });\n    var tiles = document.querySelectorAll('.tile');\n    tiles.forEach(function (tile) {\n      tile.replaceWith(tile.cloneNode(true));\n    });\n  };\n  var calculateTemplatePosition = function calculateTemplatePosition(unit, coords) {\n    var left = coords[0] * unit + 'px';\n    var top = coords[1] * unit + 'px';\n    return {\n      left: left,\n      top: top\n    };\n  };\n\n  // const hoverImage = (element,img) => {\n  //     element.addEventListener('mouseenter',(e) => e.target.appendChild(img));\n  //     element.addEventListener('mouseleave',(e) => e.target.removeChild(img));\n  // }\n\n  var hoverImage = function hoverImage(element, img) {\n    var event = element.addEventListener('mouseover', function (e) {\n      var coords = getTarget(e.target.closest('.tile'));\n      var pos = calculateTemplatePosition(e.target.closest('.tile').offsetWidth, coords);\n      img.style.top = pos.top;\n      img.style.left = pos.left;\n    });\n    return event;\n  };\n  return _ref5 = {\n    drawShips: drawShips,\n    renderComputerMove: renderComputerMove\n  }, _defineProperty(_ref5, \"renderComputerMove\", renderComputerMove), _defineProperty(_ref5, \"endGame\", endGame), _defineProperty(_ref5, \"refresh\", refresh), _defineProperty(_ref5, \"sunkShip\", sunkShip), _defineProperty(_ref5, \"renderPlayerMove\", renderPlayerMove), _defineProperty(_ref5, \"shipPlacement\", shipPlacement), _defineProperty(_ref5, \"drawPlacementBoard\", drawPlacementBoard), _defineProperty(_ref5, \"playerOne\", playerOne), _ref5;\n})());\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/screen.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _defineAccessor(type, obj, key, fn) { var desc = { configurable: !0, enumerable: !0 }; return desc[type] = fn, Object.defineProperty(obj, key, desc); }\nvar Ship = function Ship() {\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var hitCounter = 0;\n  var SHIP_SIZES = {\n    carrier: 5,\n    battleship: 4,\n    cruiser: 3,\n    submarine: 3,\n    destroyer: 2\n  };\n  var hit = function hit() {\n    hitCounter++;\n  };\n  var isSunk = function isSunk() {\n    return hitCounter >= length;\n  };\n  return _defineAccessor(\"get\", {\n    hit: hit,\n    isSunk: isSunk,\n    length: length,\n    position: [],\n    orientation: null,\n    get name() {\n      var arrayedName = name.split('');\n      arrayedName[0].toUpperCase();\n      return arrayedName.join('');\n    }\n  }, \"length\", function () {\n    return SHIP_SIZES[name];\n  });\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/ship.js?");

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e8f9c1b15ff5a8c30ea.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/battleship.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/screen.js");
/******/ 	
/******/ })()
;