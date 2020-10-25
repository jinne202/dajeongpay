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
      check = _useState[0],
      setCheck = _useState[1];

  var handleClick = function handleClick() {
    if (props.id === "joy") {
      setCheck(!check);
    } else if (props.id === "jjjjjj") {
      setCheck(!check);
    }

    console.log(check, props.id);
  };

  if (props.id === "joy") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 '\uAE30\uC068'\uC744 \uB290\uAF08\uB2E4\uBA74 \uAE30\uC05C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    })));
  } else {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, "\uD760")), __jsx(SelectBox_Right, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    })));
  }
};

_s(SelectCard, "DRDVi1AbBAW051ishmTW/zYCTgg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RDYXJkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNoZWNrIiwic2V0Q2hlY2siLCJoYW5kbGVDbGljayIsImlkIiwiY29uc29sZSIsImxvZyIsImpveVdoaXRlIiwiam95UGluayIsImZ1bmRpbmdJbWcxIiwiU2VsZWN0Qm94Iiwic3R5bGVkIiwiZGl2IiwiY3NzIiwiU2VsZWN0Qm94X0xlZnQiLCJTZWxlY3RCb3hfUmlnaHQiLCJTZWxlY3RUZXh0IiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsS0FBRCxDQUZSO0FBQUEsTUFFbkJDLEtBRm1CO0FBQUEsTUFFWkMsUUFGWTs7QUFJMUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJSixLQUFLLENBQUNLLEVBQU4sS0FBYSxLQUFqQixFQUF1QjtBQUNuQkYsY0FBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNILEtBRkQsTUFFTyxJQUFJRixLQUFLLENBQUNLLEVBQU4sS0FBYSxRQUFqQixFQUEyQjtBQUM5QkYsY0FBUSxDQUFDLENBQUNELEtBQUYsQ0FBUjtBQUNIOztBQUNESSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWixFQUFtQkYsS0FBSyxDQUFDSyxFQUF6QjtBQUNILEdBUEQ7O0FBU0EsTUFBSUwsS0FBSyxDQUFDSyxFQUFOLEtBQWEsS0FBakIsRUFBdUI7QUFDbkIsV0FDSSxNQUFDLFNBQUQ7QUFBVyxhQUFPLEVBQUVELFdBQXBCO0FBQWlDLFdBQUssRUFBRUYsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVBLEtBQUssR0FBR00sOERBQUgsR0FBY0MsNkRBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJLE1BQUMsVUFBRDtBQUFZLFdBQUssRUFBRVAsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnSkFGSixDQURKLEVBS0ksTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRVEsaUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBTEosQ0FESjtBQVdILEdBWkQsTUFZTztBQUNILFdBQ0ksTUFBQyxTQUFEO0FBQVcsYUFBTyxFQUFFTixXQUFwQjtBQUFpQyxXQUFLLEVBQUVGLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFQSxLQUFLLEdBQUdNLDhEQUFILEdBQWNDLDZEQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSSxNQUFDLFVBQUQ7QUFBWSxXQUFLLEVBQUVQLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosQ0FESixFQUtJLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVRLGlFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUxKLENBREo7QUFXSDtBQUNKLENBdENEOztHQUFNWCxVOztLQUFBQSxVO0FBd0NOLElBQU1ZLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpU0FnQlQsVUFBQWIsS0FBSztBQUFBLFNBQ1BBLEtBQUssQ0FBQ0UsS0FBTixJQUNBWSw2REFEQSxrREFETztBQUFBLENBaEJJLENBQWY7TUFBTUgsUztBQXdCTixJQUFNSSxjQUFjLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEVBQXBCO01BQU1FLGM7QUFPTixJQUFNQyxlQUFlLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQXJCO01BQU1HLGU7QUFTTixJQUFNQyxVQUFVLEdBQUdMLHlEQUFNLENBQUNNLENBQVY7QUFBQTtBQUFBO0FBQUEseUNBSVYsVUFBQWxCLEtBQUs7QUFBQSxTQUNQQSxLQUFLLENBQUNFLEtBQU4sSUFDQVksNkRBREEsa0JBRE87QUFBQSxDQUpLLENBQWhCO01BQU1HLFU7QUFXU2xCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbGVjdC4yZTRjOWYwNmM0MjA4ZTNkMDZhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGpveVBpbmsgZnJvbSAnLi4vZGF0YS9pbWcvam95X3BpbmsucG5nJztcclxuaW1wb3J0IGpveVdoaXRlIGZyb20gJy4uL2RhdGEvaW1nL2pveV93aGl0ZS5wbmcnO1xyXG5pbXBvcnQgZnVuZGluZ0ltZzEgZnJvbSAnLi4vZGF0YS9pbWcvZnVuZGluZ19pbWcxLnBuZyc7XHJcblxyXG5jb25zdCBTZWxlY3RDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmlkID09PSBcImpveVwiKXtcclxuICAgICAgICAgICAgc2V0Q2hlY2soIWNoZWNrKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmlkID09PSBcImpqampqalwiKSB7XHJcbiAgICAgICAgICAgIHNldENoZWNrKCFjaGVjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrLCBwcm9wcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLmlkID09PSBcImpveVwiKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Qm94IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjaGVjaz17Y2hlY2t9PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGVjayA/IGpveVdoaXRlIDogam95UGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUZXh0IGNoZWNrPXtjaGVja30+64u57Iug7J20ICfquLDsgagn7J2EIOuKkOq8iOuLpOuptCDquLDsgZwg6rCQ7KCV7J2EIO2OgOuUqSDtlbTso7zshLjsmpQ8L1NlbGVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzF9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0PlxyXG4gICAgICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RCb3ggb25DbGljaz17aGFuZGxlQ2xpY2t9IGNoZWNrPXtjaGVja30+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoZWNrID8gam95V2hpdGUgOiBqb3lQaW5rfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRleHQgY2hlY2s9e2NoZWNrfT7tnaA8L1NlbGVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzF9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0PlxyXG4gICAgICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFNlbGVjdEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDc1MHB4O1xyXG4gICAgaGVpZ2h0IDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IHdoaXRlO1xyXG4gICAgYm9yZGVyIDogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93IDogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgdHJhbnNpdGlvbiA6IGJvcmRlciAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyIDogM3B4IHNvbGlkICNmZjY0NjQ7XHJcbiAgICB9XHJcblxyXG4gICAgJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuY2hlY2sgJiZcclxuICAgIGNzc2BcclxuICAgICAgYmFja2dyb3VuZCA6ICNmZjdiN2I7XHJcbiAgICAgIGJvcmRlciA6IDNweCBzb2xpZCAjZmY2NDY0O1xyXG4gICAgYH1cclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X0xlZnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIHBpbms7XHJcbiAgICB3aWR0aCA6IDQ2MHB4O1xyXG4gICAgbWFyZ2luIDogMjhweCAwIDAgNDlweDtcclxuICAgIGZvbnQtc2l6ZSA6IDE4cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdEJveF9SaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgYmx1ZTtcclxuICAgIHdpZHRoIDogMjE5cHg7XHJcbiAgICBoZWlnaHQgOiAxODBweDtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICBib3R0b20gOiAtM3B4O1xyXG4gICAgcmlnaHQgOiAxOHB4O1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICBtYXJnaW4gOiA1cHggMCAwIDA7XHJcbiAgICBjb2xvciA6ICMzMzM7XHJcblxyXG4gICAgJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuY2hlY2sgJiZcclxuICAgIGNzc2BcclxuICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==