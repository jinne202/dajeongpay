module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./src/store/configureStore.js");
var _jsxFileName = "C:\\project\\dajungpay\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Dajeongpay = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "DAJEONG PAY")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
};

Dajeongpay.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(Dajeongpay));

/***/ }),

/***/ "./src/reducers/countReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/countReducer.js ***!
  \**************************************/
/*! exports provided: countInitialState, JOY_INCREMENT, KIND_INCREMENT, THANKS_INCREMENT, UN_INCREMENT, PEOPLE_INCREMENT, joyIncrementAction, kindIncrementAction, thanksIncrementAction, unIncrementAction, peopleIncrementAction, countReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countInitialState", function() { return countInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOY_INCREMENT", function() { return JOY_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KIND_INCREMENT", function() { return KIND_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THANKS_INCREMENT", function() { return THANKS_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UN_INCREMENT", function() { return UN_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PEOPLE_INCREMENT", function() { return PEOPLE_INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joyIncrementAction", function() { return joyIncrementAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kindIncrementAction", function() { return kindIncrementAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thanksIncrementAction", function() { return thanksIncrementAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unIncrementAction", function() { return unIncrementAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peopleIncrementAction", function() { return peopleIncrementAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countReducer", function() { return countReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const countInitialState = {
  joyNumber: 21,
  kindNumber: 19,
  thanksNumber: 30,
  unComfNumber: 8,
  fundingPeople: 60
};
const JOY_INCREMENT = 'JOY_INCREMENT';
const KIND_INCREMENT = 'KIND_INCREMENT';
const THANKS_INCREMENT = 'THANKS_INCREMENT';
const UN_INCREMENT = 'UN_INCREMENT';
const PEOPLE_INCREMENT = 'PEOPLE_INCREMENT';
const joyIncrementAction = () => ({
  type: JOY_INCREMENT
});
const kindIncrementAction = () => ({
  type: KIND_INCREMENT
});
const thanksIncrementAction = () => ({
  type: THANKS_INCREMENT
});
const unIncrementAction = () => ({
  type: UN_INCREMENT
});
const peopleIncrementAction = () => ({
  type: PEOPLE_INCREMENT
});
const countReducer = (state = countInitialState, action) => {
  switch (action.type) {
    case JOY_INCREMENT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          joyNumber: state.joyNumber + 1
        });
      }

    case KIND_INCREMENT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          kindNumber: state.kindNumber + 1
        });
      }

    case THANKS_INCREMENT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          thanksNumber: state.thanksNumber + 1
        });
      }

    case UN_INCREMENT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          unComfNumber: state.unComfNumber + 1
        });
      }

    case PEOPLE_INCREMENT:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          fundingPeople: state.fundingPeople + 1
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selectedReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectedReducer */ "./src/reducers/selectedReducer.js");
/* harmony import */ var _countReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countReducer */ "./src/reducers/countReducer.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  selectedReducer: _selectedReducer__WEBPACK_IMPORTED_MODULE_1__["selectedReducer"],
  countReducer: _countReducer__WEBPACK_IMPORTED_MODULE_2__["countReducer"]
});

/***/ }),

/***/ "./src/reducers/selectedReducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/selectedReducer.js ***!
  \*****************************************/
/*! exports provided: selectInitialState, SELECT_EMOTION, selectEmotionAction, selectedReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInitialState", function() { return selectInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_EMOTION", function() { return SELECT_EMOTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmotionAction", function() { return selectEmotionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedReducer", function() { return selectedReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const selectInitialState = {
  emotionCard: ""
};
const SELECT_EMOTION = 'SELECT_EMOTION';
const selectEmotionAction = payload => {
  return {
    type: SELECT_EMOTION,
    payload
  };
};
const selectedReducer = (state = selectInitialState, action) => {
  switch (action.type) {
    case SELECT_EMOTION:
      {
        // if (emotionCard.includes(action.payload)) {
        //   console.log("중복")
        //   return state;
        // }
        return _objectSpread(_objectSpread({}, state), {}, {
          emotionCard: action.payload
        });
      }

    default:
      {
        console.log(state, "select state");
        return _objectSpread({}, state);
      }
  }
};

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");





const configureStore = context => {
  console.log(context);
  const middlewares = [];
  const enhancer = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["rootReducer"], enhancer);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NvdW50UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3NlbGVjdGVkUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJEYWplb25ncGF5IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImNvdW50SW5pdGlhbFN0YXRlIiwiam95TnVtYmVyIiwia2luZE51bWJlciIsInRoYW5rc051bWJlciIsInVuQ29tZk51bWJlciIsImZ1bmRpbmdQZW9wbGUiLCJKT1lfSU5DUkVNRU5UIiwiS0lORF9JTkNSRU1FTlQiLCJUSEFOS1NfSU5DUkVNRU5UIiwiVU5fSU5DUkVNRU5UIiwiUEVPUExFX0lOQ1JFTUVOVCIsImpveUluY3JlbWVudEFjdGlvbiIsInR5cGUiLCJraW5kSW5jcmVtZW50QWN0aW9uIiwidGhhbmtzSW5jcmVtZW50QWN0aW9uIiwidW5JbmNyZW1lbnRBY3Rpb24iLCJwZW9wbGVJbmNyZW1lbnRBY3Rpb24iLCJjb3VudFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwic2VsZWN0ZWRSZWR1Y2VyIiwic2VsZWN0SW5pdGlhbFN0YXRlIiwiZW1vdGlvbkNhcmQiLCJTRUxFQ1RfRU1PVElPTiIsInNlbGVjdEVtb3Rpb25BY3Rpb24iLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyZVN0b3JlIiwiY29udGV4dCIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1B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Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IERhamVvbmdwYXkgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRBSkVPTkcgUEFZPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuRGFqZW9uZ3BheS5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KERhamVvbmdwYXkpOyIsImV4cG9ydCBjb25zdCBjb3VudEluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGpveU51bWJlciA6IDIxLFxyXG4gICAga2luZE51bWJlciA6IDE5LFxyXG4gICAgdGhhbmtzTnVtYmVyIDogMzAsXHJcbiAgICB1bkNvbWZOdW1iZXIgOiA4LFxyXG4gICAgZnVuZGluZ1Blb3BsZSA6IDYwLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSk9ZX0lOQ1JFTUVOVCA9ICdKT1lfSU5DUkVNRU5UJztcclxuZXhwb3J0IGNvbnN0IEtJTkRfSU5DUkVNRU5UID0gJ0tJTkRfSU5DUkVNRU5UJztcclxuZXhwb3J0IGNvbnN0IFRIQU5LU19JTkNSRU1FTlQgPSAnVEhBTktTX0lOQ1JFTUVOVCc7XHJcbmV4cG9ydCBjb25zdCBVTl9JTkNSRU1FTlQgPSAnVU5fSU5DUkVNRU5UJztcclxuZXhwb3J0IGNvbnN0IFBFT1BMRV9JTkNSRU1FTlQgPSAnUEVPUExFX0lOQ1JFTUVOVCc7XHJcblxyXG5leHBvcnQgY29uc3Qgam95SW5jcmVtZW50QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBKT1lfSU5DUkVNRU5UXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGtpbmRJbmNyZW1lbnRBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IEtJTkRfSU5DUkVNRU5UXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoYW5rc0luY3JlbWVudEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogVEhBTktTX0lOQ1JFTUVOVFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bkluY3JlbWVudEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogVU5fSU5DUkVNRU5UXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBlb3BsZUluY3JlbWVudEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogUEVPUExFX0lOQ1JFTUVOVFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudFJlZHVjZXIgPSAoc3RhdGUgPSBjb3VudEluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxyXG57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgSk9ZX0lOQ1JFTUVOVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGpveU51bWJlcjogc3RhdGUuam95TnVtYmVyICsgMSAsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEtJTkRfSU5DUkVNRU5UOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAga2luZE51bWJlcjogc3RhdGUua2luZE51bWJlciArIDEgLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBUSEFOS1NfSU5DUkVNRU5UOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdGhhbmtzTnVtYmVyOiBzdGF0ZS50aGFua3NOdW1iZXIgKyAxICxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5fSU5DUkVNRU5UOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdW5Db21mTnVtYmVyOiBzdGF0ZS51bkNvbWZOdW1iZXIgKyAxICxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgUEVPUExFX0lOQ1JFTUVOVDoge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZ1bmRpbmdQZW9wbGU6IHN0YXRlLmZ1bmRpbmdQZW9wbGUgKyAxICxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0ZWRSZWR1Y2VyIH0gZnJvbSAnLi9zZWxlY3RlZFJlZHVjZXInO1xyXG5pbXBvcnQgeyBjb3VudFJlZHVjZXIgfSBmcm9tICcuL2NvdW50UmVkdWNlcic7XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgc2VsZWN0ZWRSZWR1Y2VyLFxyXG4gICAgY291bnRSZWR1Y2VyXHJcbn0pXHJcbiIsImV4cG9ydCBjb25zdCBzZWxlY3RJbml0aWFsU3RhdGUgPSB7XHJcbiAgICBlbW90aW9uQ2FyZCA6IFwiXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9FTU9USU9OID0gJ1NFTEVDVF9FTU9USU9OJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RFbW90aW9uQWN0aW9uID0gKHBheWxvYWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFNFTEVDVF9FTU9USU9OLFxyXG4gICAgICBwYXlsb2FkLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkUmVkdWNlciA9IChzdGF0ZSA9IHNlbGVjdEluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PlxyXG57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgU0VMRUNUX0VNT1RJT046IHtcclxuICAgICAgICAvLyBpZiAoZW1vdGlvbkNhcmQuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQpKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIuykkeuztVwiKVxyXG4gICAgICAgIC8vICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBlbW90aW9uQ2FyZCA6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUsIFwic2VsZWN0IHN0YXRlXCIpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gJy4uL3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge2RlYnVnIDogdHJ1ZX0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=