/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFvQjtFQUFBLElBQWhCQyxJQUFJLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUk7RUFDNUIsSUFBSUcsVUFBVSxHQUFHLENBQUM7RUFFbEIsSUFBSUMsV0FBVyxHQUFHLEtBQUs7RUFFdkIsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUEsRUFBUztJQUNqQkQsV0FBVyxHQUFHLENBQUNBLFdBQVc7RUFDOUIsQ0FBQztFQUVELElBQU1FLFVBQVUsR0FBRztJQUNmQyxPQUFPLEVBQUUsQ0FBQztJQUNWQyxVQUFVLEVBQUUsQ0FBQztJQUNiQyxPQUFPLEVBQUUsQ0FBQztJQUNWQyxTQUFTLEVBQUUsQ0FBQztJQUNaQyxTQUFTLEVBQUU7RUFDZixDQUFDO0VBRUQsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztJQUNkVCxVQUFVLEVBQUU7RUFDaEIsQ0FBQztFQUVELElBQU1VLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFBLEVBQVM7SUFDakIsT0FBUVYsVUFBVSxJQUFJRixNQUFNO0VBQ2hDLENBQUM7RUFFRCxPQUFPO0lBQ0hXLEdBQUcsRUFBSEEsR0FBRztJQUNIQyxNQUFNLEVBQU5BLE1BQU07SUFDTkMsUUFBUSxFQUFDLEVBQUU7SUFDWCxJQUFJVixXQUFXQSxDQUFBLEVBQUk7TUFDZixPQUFPQSxXQUFXO0lBQ3RCLENBQUM7SUFDRCxJQUFJQSxXQUFXQSxDQUFDVyxFQUFFLEVBQUU7TUFDaEJYLFdBQVcsR0FBR1csRUFBRTtJQUNwQixDQUFDO0lBQ0RWLE1BQU0sRUFBTkEsTUFBTTtJQUNOLElBQUlOLElBQUlBLENBQUEsRUFBRztNQUNQLElBQU1pQixXQUFXLEdBQUdqQixJQUFJLENBQUNrQixLQUFLLENBQUMsRUFBRSxDQUFDO01BQ2xDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNFLFdBQVcsQ0FBQyxDQUFDO01BQzVCLE9BQU9GLFdBQVcsQ0FBQ0csSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSWxCLE1BQU1BLENBQUEsRUFBRztNQUNULE9BQU9LLFVBQVUsQ0FBQ1AsSUFBSSxDQUFDO0lBQzNCO0VBQ0osQ0FBQztBQUNMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY29uc3QgU2hpcCA9IChuYW1lID0gbnVsbCkgPT4ge1xuICAgIGxldCBoaXRDb3VudGVyID0gMDtcblxuICAgIGxldCBvcmllbnRhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgcm90YXRlID0gKCkgPT4ge1xuICAgICAgICBvcmllbnRhdGlvbiA9ICFvcmllbnRhdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBTSElQX1NJWkVTID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBjcnVpc2VyOiAzLFxuICAgICAgICBzdWJtYXJpbmU6IDMsXG4gICAgICAgIGRlc3Ryb3llcjogMixcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdENvdW50ZXIrK1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChoaXRDb3VudGVyID49IGxlbmd0aClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoaXQsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgcG9zaXRpb246W10sXG4gICAgICAgIGdldCBvcmllbnRhdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZW50YXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvcmllbnRhdGlvbihvcikge1xuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBvcjtcbiAgICAgICAgfSxcbiAgICAgICAgcm90YXRlLFxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ZWROYW1lID0gbmFtZS5zcGxpdCgnJyk7XG4gICAgICAgICAgICBhcnJheWVkTmFtZVswXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5ZWROYW1lLmpvaW4oJycpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICAgICAgcmV0dXJuIFNISVBfU0laRVNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiU2hpcCIsIm5hbWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJoaXRDb3VudGVyIiwib3JpZW50YXRpb24iLCJyb3RhdGUiLCJTSElQX1NJWkVTIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiaGl0IiwiaXNTdW5rIiwicG9zaXRpb24iLCJvciIsImFycmF5ZWROYW1lIiwic3BsaXQiLCJ0b1VwcGVyQ2FzZSIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9