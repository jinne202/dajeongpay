webpackHotUpdate_N_E("pages/select",{

/***/ "./src/components/SelectCard.js":
/*!**************************************!*\
  !*** ./src/components/SelectCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/img/joy_pink.png */ "./src/data/img/joy_pink.png");
/* harmony import */ var _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/img/joy_white.png */ "./src/data/img/joy_white.png");
/* harmony import */ var _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/img/funding_img1.png */ "./src/data/img/funding_img1.png");
/* harmony import */ var _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\project\\dajungpay\\src\\components\\SelectCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SelectCard = function SelectCard(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      checkJoy = _useState[0],
      setCheckJoy = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      checkKind = _useState2[0],
      setCheckKind = _useState2[1];

  var handleClick = function handleClick(e) {
    if (props.id === "joy") {
      setCheckJoy(!checkJoy);
    } else if (props.id === "jjjjjj") {
      setCheckKind(!checkKind);
    }

    console.log(props.id);
  };

  if (props.id === "joy") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      checkJoy: checkJoy,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: checkJoy ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      checkJoy: checkJoy,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 '\uAE30\uC068'\uC744 \uB290\uAF08\uB2E4\uBA74 \uAE30\uC05C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx(SelectBox, {
      onClick: handleClick,
      checkKind: checkKind,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: checkKind ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      checkKind: checkKind,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, "\uD760")), __jsx(SelectBox_Right, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    })));
  }
};

_s(SelectCard, "XknmDDX2IflCU8AntCx47sf3qvo=");

_c = SelectCard;
var SelectBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectCard__SelectBox",
  componentId: "sc-1p71olm-0"
})(["width:750px;height:130px;position:relative;background-color:white;border:3px solid white;border-radius:16px;box-shadow:0 0 10px 0 rgba(0,0,0,0.05);transition:border 0.1s ease-in-out;transition:background-color 0.2s ease-in-out;cursor:pointer;&:hover{border:3px solid #ff6464;}", ""], function (props) {
  return props.check && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:#ff7b7b;border:3px solid #ff6464;"]);
});
_c2 = SelectBox;
var SelectBox_Left = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectCard__SelectBox_Left",
  componentId: "sc-1p71olm-1"
})(["border:1px solid pink;width:460px;margin:28px 0 0 49px;font-size:18px;"]);
_c3 = SelectBox_Left;
var SelectBox_Right = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectCard__SelectBox_Right",
  componentId: "sc-1p71olm-2"
})(["border:1px solid blue;width:219px;height:180px;position:absolute;bottom:-3px;right:18px;"]);
_c4 = SelectBox_Right;
var SelectText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "SelectCard__SelectText",
  componentId: "sc-1p71olm-3"
})(["margin:5px 0 0 0;color:#333;", ""], function (props) {
  return props.check && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:white;"]);
});
_c5 = SelectText;
/* harmony default export */ __webpack_exports__["default"] = (SelectCard);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "SelectCard");
$RefreshReg$(_c2, "SelectBox");
$RefreshReg$(_c3, "SelectBox_Left");
$RefreshReg$(_c4, "SelectBox_Right");
$RefreshReg$(_c5, "SelectText");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RDYXJkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNoZWNrSm95Iiwic2V0Q2hlY2tKb3kiLCJjaGVja0tpbmQiLCJzZXRDaGVja0tpbmQiLCJoYW5kbGVDbGljayIsImUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJqb3lXaGl0ZSIsImpveVBpbmsiLCJmdW5kaW5nSW1nMSIsIlNlbGVjdEJveCIsInN0eWxlZCIsImRpdiIsImNoZWNrIiwiY3NzIiwiU2VsZWN0Qm94X0xlZnQiLCJTZWxlY3RCb3hfUmlnaHQiLCJTZWxlY3RUZXh0IiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUMsS0FBRCxDQUZkO0FBQUEsTUFFbkJDLFFBRm1CO0FBQUEsTUFFVEMsV0FGUzs7QUFBQSxtQkFHUUYsc0RBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHbkJHLFNBSG1CO0FBQUEsTUFHUkMsWUFIUTs7QUFLMUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLFFBQUlQLEtBQUssQ0FBQ1EsRUFBTixLQUFhLEtBQWpCLEVBQXVCO0FBQ25CTCxpQkFBVyxDQUFDLENBQUNELFFBQUYsQ0FBWDtBQUNILEtBRkQsTUFFTyxJQUFJRixLQUFLLENBQUNRLEVBQU4sS0FBYSxRQUFqQixFQUEyQjtBQUM5Qkgsa0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSDs7QUFDREssV0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQUssQ0FBQ1EsRUFBbEI7QUFDSCxHQVBEOztBQVNBLE1BQUlSLEtBQUssQ0FBQ1EsRUFBTixLQUFhLEtBQWpCLEVBQXVCO0FBQ25CLFdBQ0ksTUFBQyxTQUFEO0FBQVcsYUFBTyxFQUFFRixXQUFwQjtBQUFpQyxjQUFRLEVBQUVKLFFBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFQSxRQUFRLEdBQUdTLDhEQUFILEdBQWNDLDZEQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSSxNQUFDLFVBQUQ7QUFBWSxjQUFRLEVBQUVWLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0pBRkosQ0FESixFQUtJLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVXLGlFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUxKLENBREo7QUFXSCxHQVpELE1BWU87QUFDSCxXQUNJLE1BQUMsU0FBRDtBQUFXLGFBQU8sRUFBRVAsV0FBcEI7QUFBaUMsZUFBUyxFQUFFRixTQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRUEsU0FBUyxHQUFHTyw4REFBSCxHQUFjQyw2REFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUksTUFBQyxVQUFEO0FBQVksZUFBUyxFQUFFUixTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLENBREosRUFLSSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFUyxpRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FMSixDQURKO0FBV0g7QUFDSixDQXZDRDs7R0FBTWQsVTs7S0FBQUEsVTtBQXlDTixJQUFNZSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVNBZ0JULFVBQUFoQixLQUFLO0FBQUEsU0FDUEEsS0FBSyxDQUFDaUIsS0FBTixJQUNBQyw2REFEQSxrREFETztBQUFBLENBaEJJLENBQWY7TUFBTUosUztBQXdCTixJQUFNSyxjQUFjLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEVBQXBCO01BQU1HLGM7QUFPTixJQUFNQyxlQUFlLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQXJCO01BQU1JLGU7QUFTTixJQUFNQyxVQUFVLEdBQUdOLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEseUNBSVYsVUFBQXRCLEtBQUs7QUFBQSxTQUNQQSxLQUFLLENBQUNpQixLQUFOLElBQ0FDLDZEQURBLGtCQURPO0FBQUEsQ0FKSyxDQUFoQjtNQUFNRyxVO0FBV1N0Qix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxlY3QuOWQ5NzkwNTEyZTU5MGJjMmFjM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBqb3lQaW5rIGZyb20gJy4uL2RhdGEvaW1nL2pveV9waW5rLnBuZyc7XHJcbmltcG9ydCBqb3lXaGl0ZSBmcm9tICcuLi9kYXRhL2ltZy9qb3lfd2hpdGUucG5nJztcclxuaW1wb3J0IGZ1bmRpbmdJbWcxIGZyb20gJy4uL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMS5wbmcnO1xyXG5cclxuY29uc3QgU2VsZWN0Q2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjaGVja0pveSwgc2V0Q2hlY2tKb3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NoZWNrS2luZCwgc2V0Q2hlY2tLaW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmlkID09PSBcImpveVwiKXtcclxuICAgICAgICAgICAgc2V0Q2hlY2tKb3koIWNoZWNrSm95KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmlkID09PSBcImpqampqalwiKSB7XHJcbiAgICAgICAgICAgIHNldENoZWNrS2luZCghY2hlY2tLaW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wcy5pZCA9PT0gXCJqb3lcIil7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlbGVjdEJveCBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2hlY2tKb3k9e2NoZWNrSm95fT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2tKb3kgPyBqb3lXaGl0ZSA6IGpveVBpbmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VGV4dCBjaGVja0pveT17Y2hlY2tKb3l9PuuLueyLoOydtCAn6riw7IGoJ+ydhCDripDqvIjri6TrqbQg6riw7IGcIOqwkOygleydhCDtjoDrlKkg7ZW07KO87IS47JqUPC9TZWxlY3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bmRpbmdJbWcxfS8+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9SaWdodD5cclxuICAgICAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Qm94IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjaGVja0tpbmQ9e2NoZWNrS2luZH0+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoZWNrS2luZCA/IGpveVdoaXRlIDogam95UGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUZXh0IGNoZWNrS2luZD17Y2hlY2tLaW5kfT7tnaA8L1NlbGVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzF9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0PlxyXG4gICAgICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFNlbGVjdEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDc1MHB4O1xyXG4gICAgaGVpZ2h0IDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IHdoaXRlO1xyXG4gICAgYm9yZGVyIDogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93IDogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgdHJhbnNpdGlvbiA6IGJvcmRlciAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyIDogM3B4IHNvbGlkICNmZjY0NjQ7XHJcbiAgICB9XHJcblxyXG4gICAgJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuY2hlY2sgJiZcclxuICAgIGNzc2BcclxuICAgICAgYmFja2dyb3VuZCA6ICNmZjdiN2I7XHJcbiAgICAgIGJvcmRlciA6IDNweCBzb2xpZCAjZmY2NDY0O1xyXG4gICAgYH1cclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X0xlZnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIHBpbms7XHJcbiAgICB3aWR0aCA6IDQ2MHB4O1xyXG4gICAgbWFyZ2luIDogMjhweCAwIDAgNDlweDtcclxuICAgIGZvbnQtc2l6ZSA6IDE4cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdEJveF9SaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgYmx1ZTtcclxuICAgIHdpZHRoIDogMjE5cHg7XHJcbiAgICBoZWlnaHQgOiAxODBweDtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICBib3R0b20gOiAtM3B4O1xyXG4gICAgcmlnaHQgOiAxOHB4O1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICBtYXJnaW4gOiA1cHggMCAwIDA7XHJcbiAgICBjb2xvciA6ICMzMzM7XHJcblxyXG4gICAgJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuY2hlY2sgJiZcclxuICAgIGNzc2BcclxuICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==