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
/* harmony import */ var _data_img_kind_pink_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/img/kind_pink.png */ "./src/data/img/kind_pink.png");
/* harmony import */ var _data_img_kind_pink_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_img_kind_pink_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_img_kind_white_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/img/kind_white.png */ "./src/data/img/kind_white.png");
/* harmony import */ var _data_img_kind_white_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_img_kind_white_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_img_funding_img2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/img/funding_img2.png */ "./src/data/img/funding_img2.png");
/* harmony import */ var _data_img_funding_img2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_img_funding_img2_png__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "C:\\project\\dajungpay\\src\\components\\SelectCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var SelectCard = function SelectCard(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      check = _useState[0],
      setCheck = _useState[1];

  var handleClick = function handleClick(e) {
    if (props.id === "joy") {
      setCheck(!check);
    } else if (props.id === "kind") {
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
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 '\uAE30\uC068'\uC744 \uB290\uAF08\uB2E4\uBA74 \uAE30\uC05C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    })));
  } else if (props.id === "kind") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, "\uD760")), __jsx(SelectBox_Right, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
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

/***/ }),

/***/ "./src/data/img/funding_img2.png":
/*!***************************************!*\
  !*** ./src/data/img/funding_img2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/funding_img2-fedb7363d70c0cbeaf559f6888f785e0.png";

/***/ }),

/***/ "./src/data/img/kind_pink.png":
/*!************************************!*\
  !*** ./src/data/img/kind_pink.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/data/img/kind_white.png":
/*!*************************************!*\
  !*** ./src/data/img/kind_white.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMi5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9kYXRhL2ltZy9raW5kX3BpbmsucG5nIiwid2VicGFjazovL19OX0UvLi9zcmMvZGF0YS9pbWcva2luZF93aGl0ZS5wbmciXSwibmFtZXMiOlsiU2VsZWN0Q2FyZCIsInByb3BzIiwidXNlU3RhdGUiLCJjaGVjayIsInNldENoZWNrIiwiaGFuZGxlQ2xpY2siLCJlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiam95V2hpdGUiLCJqb3lQaW5rIiwiZnVuZGluZ0ltZzEiLCJTZWxlY3RCb3giLCJzdHlsZWQiLCJkaXYiLCJjc3MiLCJTZWxlY3RCb3hfTGVmdCIsIlNlbGVjdEJveF9SaWdodCIsIlNlbGVjdFRleHQiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFQUMsc0RBQVEsQ0FBQyxLQUFELENBRlI7QUFBQSxNQUVuQkMsS0FGbUI7QUFBQSxNQUVaQyxRQUZZOztBQUkxQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDdkIsUUFBSUwsS0FBSyxDQUFDTSxFQUFOLEtBQWEsS0FBakIsRUFBdUI7QUFDbkJILGNBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDSCxLQUZELE1BRU8sSUFBSUYsS0FBSyxDQUFDTSxFQUFOLEtBQWEsTUFBakIsRUFBeUI7QUFDNUJILGNBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDSDs7QUFDREssV0FBTyxDQUFDQyxHQUFSLENBQVlOLEtBQVosRUFBbUJGLEtBQUssQ0FBQ00sRUFBekI7QUFDSCxHQVBEOztBQVNBLE1BQUlOLEtBQUssQ0FBQ00sRUFBTixLQUFhLEtBQWpCLEVBQXVCO0FBQ25CLFdBQ0ksTUFBQyxTQUFEO0FBQVcsYUFBTyxFQUFFRixXQUFwQjtBQUFpQyxXQUFLLEVBQUVGLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFQSxLQUFLLEdBQUdPLDhEQUFILEdBQWNDLDZEQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSSxNQUFDLFVBQUQ7QUFBWSxXQUFLLEVBQUVSLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0pBRkosQ0FESixFQUtJLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVTLGlFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUxKLENBREo7QUFXSCxHQVpELE1BWU8sSUFBSVgsS0FBSyxDQUFDTSxFQUFOLEtBQWEsTUFBakIsRUFBeUI7QUFDNUIsV0FDSSxNQUFDLFNBQUQ7QUFBVyxhQUFPLEVBQUVGLFdBQXBCO0FBQWlDLFdBQUssRUFBRUYsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVBLEtBQUssR0FBR08sOERBQUgsR0FBY0MsNkRBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJLE1BQUMsVUFBRDtBQUFZLFdBQUssRUFBRVIsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQURKLEVBS0ksTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRVMsaUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBTEosQ0FESjtBQVdIO0FBQ0osQ0F0Q0Q7O0dBQU1aLFU7O0tBQUFBLFU7QUF3Q04sSUFBTWEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlTQWdCVCxVQUFBZCxLQUFLO0FBQUEsU0FDUEEsS0FBSyxDQUFDRSxLQUFOLElBQ0FhLDZEQURBLGtEQURPO0FBQUEsQ0FoQkksQ0FBZjtNQUFNSCxTO0FBd0JOLElBQU1JLGNBQWMsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4RUFBcEI7TUFBTUUsYztBQU9OLElBQU1DLGVBQWUsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FBckI7TUFBTUcsZTtBQVNOLElBQU1DLFVBQVUsR0FBR0wseURBQU0sQ0FBQ00sQ0FBVjtBQUFBO0FBQUE7QUFBQSx5Q0FJVixVQUFBbkIsS0FBSztBQUFBLFNBQ1BBLEtBQUssQ0FBQ0UsS0FBTixJQUNBYSw2REFEQSxrQkFETztBQUFBLENBSkssQ0FBaEI7TUFBTUcsVTtBQVdTbkIseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0EsMEY7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLDRnRjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHcyRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxlY3QuZjRjNTMzNTJiZTIwNDI1OGY1ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBqb3lQaW5rIGZyb20gJy4uL2RhdGEvaW1nL2pveV9waW5rLnBuZyc7XHJcbmltcG9ydCBqb3lXaGl0ZSBmcm9tICcuLi9kYXRhL2ltZy9qb3lfd2hpdGUucG5nJztcclxuaW1wb3J0IGZ1bmRpbmdJbWcxIGZyb20gJy4uL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMS5wbmcnO1xyXG5pbXBvcnQga2luZFBpbmsgZnJvbSAnLi4vZGF0YS9pbWcva2luZF9waW5rLnBuZyc7XHJcbmltcG9ydCBraW5kV2hpdGUgZnJvbSAnLi4vZGF0YS9pbWcva2luZF93aGl0ZS5wbmcnO1xyXG5pbXBvcnQgZnVuZGluZ0ltZzIgZnJvbSAnLi4vZGF0YS9pbWcvZnVuZGluZ19pbWcyLnBuZyc7XHJcblxyXG5jb25zdCBTZWxlY3RDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5pZCA9PT0gXCJqb3lcIil7XHJcbiAgICAgICAgICAgIHNldENoZWNrKCFjaGVjayk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5pZCA9PT0gXCJraW5kXCIpIHtcclxuICAgICAgICAgICAgc2V0Q2hlY2soIWNoZWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2ssIHByb3BzLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcHMuaWQgPT09IFwiam95XCIpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RCb3ggb25DbGljaz17aGFuZGxlQ2xpY2t9IGNoZWNrPXtjaGVja30+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoZWNrID8gam95V2hpdGUgOiBqb3lQaW5rfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRleHQgY2hlY2s9e2NoZWNrfT7ri7nsi6DsnbQgJ+q4sOyBqCfsnYQg64qQ6ryI64uk66m0IOq4sOyBnCDqsJDsoJXsnYQg7Y6A65SpIO2VtOyjvOyEuOyalDwvU2VsZWN0VGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X1JpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5kaW5nSW1nMX0vPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfUmlnaHQ+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuaWQgPT09IFwia2luZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlbGVjdEJveCBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2hlY2s9e2NoZWNrfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2sgPyBqb3lXaGl0ZSA6IGpveVBpbmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VGV4dCBjaGVjaz17Y2hlY2t9Pu2doDwvU2VsZWN0VGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X1JpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5kaW5nSW1nMX0vPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfUmlnaHQ+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgU2VsZWN0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogNzUwcHg7XHJcbiAgICBoZWlnaHQgOiAxMzBweDtcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogd2hpdGU7XHJcbiAgICBib3JkZXIgOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTZweDtcclxuICAgIGJveC1zaGFkb3cgOiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICB0cmFuc2l0aW9uIDogYm9yZGVyIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXIgOiAzcHggc29saWQgI2ZmNjQ2NDtcclxuICAgIH1cclxuXHJcbiAgICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5jaGVjayAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBiYWNrZ3JvdW5kIDogI2ZmN2I3YjtcclxuICAgICAgYm9yZGVyIDogM3B4IHNvbGlkICNmZjY0NjQ7XHJcbiAgICBgfVxyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RCb3hfTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgcGluaztcclxuICAgIHdpZHRoIDogNDYwcHg7XHJcbiAgICBtYXJnaW4gOiAyOHB4IDAgMCA0OXB4O1xyXG4gICAgZm9udC1zaXplIDogMThweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X1JpZ2h0ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlciA6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgd2lkdGggOiAyMTlweDtcclxuICAgIGhlaWdodCA6IDE4MHB4O1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbSA6IC0zcHg7XHJcbiAgICByaWdodCA6IDE4cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdFRleHQgPSBzdHlsZWQucGBcclxuICAgIG1hcmdpbiA6IDVweCAwIDAgMDtcclxuICAgIGNvbG9yIDogIzMzMztcclxuXHJcbiAgICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5jaGVjayAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgYH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2FyZDsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZnVuZGluZ19pbWcyLWZlZGI3MzYzZDcwYzBjYmVhZjU1OWY2ODg4Zjc4NWUwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUg4QUFBQWRDQVlBQUFDRGdiTkNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCenBKUkVGVWFFUHRXVDFzVTFjVS9xNmZuY1NPRGNGQUNEOEtBUUtKWUdnWU9vRlVtTXJDMUF6ZFNCVm5LUjFnZ2dIVVZsUVZxSldnVXBod1VESjFTY1VLVTZuRXhtSUdLbWlkTmtRdGNaSVNrc2I1OWMrdHJsK2VmZDk5Zi9jK201aW91VktHUE45Ny9yNXp6ajNuWElKM3NHZ2ljUWJBenh6cHIwa3krWlh4UCszcmEwRW85RUZWckhPNVYyUjRlSnluUVJNSnh1Tkw3dHRaa2t3K2R1TkRCd1o2QUd5dlNoYjk4RHk1ZHk5VjFqR1JZSHcvTXY0bnlTVGg5TzlBS0hTd0NwNG1YaHhQeXRIOGhTU1REQWZIVlJLb0JFWXcrTmFuTUNtU1RKNFVRSEFIMytvYzZxd3AvWUVNRFYycUdud0JKSFZCeWlkTXhxWnU0RnVkVkpXdExiQTBrZkFCZnBWZzhGNWRjaWFSSHFValpHaW9qL05RMFRsVWxXZjdMUWJ3RmZsYjRGdlN0QW9ZOHlTWmJQR0lmREVxYWdHKzZTb3BPVjEvL3pBSXVhQ1U5dnY3NzRBUWx2b0JTanRBaUVvNm5nZWdwM3BLVTN3bTJyeVJUK2tyRURJczVRSEY0amk1ZjkrMDErYk85N3gvbk81S0FKNzNkaTNPcm1jc3o1cEJOcldLNElPUWswWk40Q2REeVdBaEs1dEJTNy96cldsZkdpdzdvYXFoWnpHYUEvaTJoUnFsZHdEb1Vhd3ZhY2Q1NStCenNteUI3K0RLMHVBbkVuTVNWZm9XK0M0cFkvTkd2cm15ZFZKeHc4QVhVcTZkUEdWWnRpTGZ4anlsNjRMU0J5Q0VMeUFmSTUvL3pLYW5mNjhpZjFPQ1Q3Ly85amorem55SWhhVkswVWJJVTNRZEtyZG1Nc1dHYVk4ZmV1bUppOGpuUDNma3BXa1AwQnEvaGUyeGhkS2V5ZWx1RklzeDAvN3M4bFZRMmwzK0ZvdjBZWC9iVTJuNVJSbnN6ci80NDNtWkhtOG4vcnNkUTU2V0RCOXBvYm1OVHJJNTBDTDA5bmRuTURuVmc5bTUyK1U5V3VBWnVvK2FCaWhLc3FqUW0zblRpWmszVjBCcHB3U1BMTUtOb3pqY01XSzc5OFh2ZDFBb1ZpYUg4WmJMMkx1blBIWHpwRDgyM29lVjFVcXJhSGYrK2N2SzVKSzNFOU41WmJVVHhXSzB4R2RsOVJ5QVBXV2VQQzJSVDdocEVKRncybE0rY1VOYjZ6UFRKeWZaNmdvK3o1dzMySjhUdlZoYVpzYldEV2FzVU9nbjdOaitFTE52KzVBdm5MS1JQWU5ZN0M3YTl6MHgvZll5L1kxcC8wYUNMd3JwNW9naStNcW9yeDg0MFhWMmM0RVBaSER3d0FEK2VuMERoU0xmbGpFOUZoR0wzVFNCcW1lUnE2WW9NalNPeGE2YjlzcEVycHVoWmM3TFJ0Y1crRGFXWnBGUEFobms4eCtiZm1YZkQreTdobWh6MWhhZjhZbHpXRnorQWtEeit1OVRPTkgxcVdtdkRIaDJFUXJvTS9GQ3NRMEErOU1YSVdrRWlGa2VzOE5tb1FVcTZicjc2T1h5V1Rmd21TNzZ0UUFVYVJTVUhsRUkvaWxvZ1V4cHYzZzF5enFtb2Q2RzNQbkFGSm9hSDVaNE1zRzN4VktZbkU2dUE3bUlTSGdZaDlwSFBRMlFYWXhpYXFZWEs2dTlpTGRjczl6bmZzRG5EZVlwZ01jR1BnMVhXMy80a2VXOUJOK3VnR1NGSHJ2VGQrOGNSSHlIN3NuVnJ2ODcrRXovZkw0VGxFWkx3ZGJScmdlY3c2cC90ZThtSFl2MDdLSnpTb3cyanpsZUU3S094QXhXcTNXa285SXUrNDE4UStkY0lZcmNxbnNIRkFobTBOU1FRVU5veWs4QXZUL2d6NzV0dzl5L3A3Q1c2MEdod0FwQmN3ZmdEbEFHbXBaR1F5aUYxbDJQcW5hSVdqaURDUDdCQStjZDVXSzZ2NW43Qkd0cnAwMDFoNW9jR1lSQ0tlemFNU0xyQ1BVSG4zbjY1UFFGckszMXF1bnFzcnVoWVJSSEQ5MnRHVDAvaEVUd3hiYk1vS2tYc2hjVm5kMWRvbkRqc09Nc2hEdFpmL0RGM3R5UG9lM09hTm9UZEhkZVZ5TDNjdXhxdVF0aGxmN3hZd05LNS9uTk11Q0x3ekQrUEt1VDJBcG9hV2dCYXdlVXkrbHRjcUhJcmdhakE2cFFpSVR2ZWhYUjlRVi80dlZwTEN6Y01CbVlLYzJLbGNiR2pOUjBqaGx3ZGJXdDFEcngwejFHVkp3RGVDRXBBNWdYRFQ2aTlkWlJYM3c5WUh3VEhaL3B2ak0raU4wNzFhWjlSdkZzSG9obGNhTHJ2SnU0OVFWZnJNNGx2TlhWOXZyRWtLVlFmVFUxanRnYTNZbElMY0dYY1JKem0ybWRXOGpRY01zMkhoTk9lL0JaeW91M0RDcng1aXRPMmRtK1NsRWtJd3dybkNhbmZ5eHZWWDJqcUNmNHFyTGEyVU94MWJVSFg4YlE0aDQreW1UQjUrOVlScTkxMTRCeXl1UGxZT2x2K3A5NzVVL0I0Q04wSGJrcHJVNDl3YSsyeG1CS2l2YjBGZm5TMXVJMitnRmZUTlBNQUcyN3I4dTJLaVl4V2RSblptNllYZ2RWcjVHTkJ2L1gzNUttMFc0MVhZcGQvZVRXWHJMcGRXbThLMFpNcmNGbnIzVEhEbHV2RVQxTkcyUGVDdGZTVEQyUVFVT3dVdmlFR3RNSWFWbUl3NDk4c1cxOXFpVU9SQmF4dHpXaDVFZ2krRnBBZnc3VzUrOHlUODVPbHNzaUZIcGtzWUhlNWwwUkRtV2hhYW15N3BHSS9aUDAwbkluUUtOZyt1dVZmNlc0WkFRbHNwNE9QbHZNQWZKNWxjR0tXV2IrM1Z4TSsyNkZsL1hCeG8vcldjODBoMjk1alRjdGgwVHdheU9KVHNYcFRoZFRkUzE0RWpLRzl2Mlh2SVpkRmZCcndkU2dvUUkrTzhNeXdNd3NtMHViWC9yOHlNUThQdDR5NnF0MnFBZjRURWVXc3BjV2V5MnRxcnIrK2dPYVhWdHBRK3ZkZ0crOHZoa01JK0dVVk0vTzlqUEhXVnJXQnhqR0lNUE5DR3lreVJiakVZdW12YnpkMVo1RzlqUDRxeHZmK2NTMjJCTlBoMlIybTUzdlFXNnRFNFZpRk1XQysxVkRTQmJCSUJzQ1pkRGNuUGFrTDBqM0h3dXhTRCsva2x2dkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUg4QUFBQWRDQVlBQUFDRGdiTkNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCcjFKUkVGVWFFUHRXVDJNRTFjUS9zYnJIL2xQUmpTNUxwRnlCVXFUbzBnRlVxQUtEVld1U0hjWEtUUWhCVlJRZ0pLSUZGQ0ZTRWVWRkZ5VjVoRHRVU1dScnFNNWluUWdRWGRYb01OYSs0elhYcjlvL0x6ZXQyLy8zcTdOK1U2NTEzazliMmJlZkRQelp1WVJQc0FTUWx3QzhKZkMrbWNpK3NuN0xZUTRBK0R6R1VXL0lhTFhLZzhoQk12NFVmbDJtWWorVHBJamhGZ0IwSnBSRjk3ZUpxSmQ1WXdzOTB2dk54R1I4dDhuQUQ2ZVFXWkFsc0pYS0R6L0lTTEdJWGFORlpxQWNaQlRtVjBpT3ErQmtBYSsvbjhlMGI4UjBZMDVnQjhBS1k4aWt6MEJZd3Noa3NEWG5UU3IyRWhnaFJDNXdKOEpETldySjg2azg5c2tvblhGUTJlU0YyWHNpZHc4a1g4S3ZwYW1zM2dpcHlCTzQ5TVZrZmIxcUpnSCtJR3JaQUwrWXdCckdkUCtRd0NjK25sbFRjZHRBRjZxNXd3NHpVUW5PZkxmQUdCRG1xelhSQlNnVFFNL2lhbHVOQUNwOTdhU1VmUW9OdDVybWpsTVUydkVPYzU3TlVHZTJzUUVDRlBkUEY3ZW5hOUhZbXF4a0FKZ2JuNm00TWNVYW1vVXM0ckhDZnlwTHFmZ3gzaFBCdkRmR1ZUcHArQW5ST2xKam55MXNvMDc0cEdCcjZYY0tIMU9JOS9ndW5nS1FDMGcrUjcvTnFLblAxYVJmeUxCRjIvZmZvWm04d3VVU243UkpzUnpIQnhNV3pPVFlpTkFrNGRmcTNVZGx2VjlyQ3dobnNLMkgyQTR0TWMwMWVvNUZJdk5BSDJwZEJ2QXVlbTN3V0FkdHYzY1dIOWRoNmo5WjgvK3E3UTF2cDNVNzFFQ1ZWNG1jb3lWVmdqamRJdmhSZUxnNEJLcTFSVlVLcjhxaDNxQmRqc3dRTW1rU3haKzVmSXlxdFZiSUZwT2xTRkVCNlBSRm14N001SzIxWG9JSW45eTJPL2ZSSzgzbmJxbDhtODIxMkZaZnFzWXRmL01HWDl5S1lSdkp6NXpvYkNNUXFFeGxsTW9YQUhSUjFPWktpOWR6bUN3Z2RIb1phcCtPa0d2OXlMd0tVNjNoWUt2Q2xjTlZxK3ZvbGhjQTVFMG1MZGM5d242L1cxVUtnekdoWkR1UXV4aE1IaUV3OE1kTGVQOEVxQS9TdkIxSlpNY1VRYy9NK3FURGUvZVhUNXA0TytoMDdtR1J1TWVpTHpoaWp5REVGME1CdmNEb0hKRWxjdTNBMUhrbmRoeDdnWm9UU0kzeWRBbSswMmo2eFQ4Q0V0ejVJOUdlN0NzcndMLzh2ZE81dzVjdHhPSlQ2MTJCYVhTRHlDcVR4eGxIKzMyTjFya3A2ZnRxQWdGdk01aENVUkxVeEloT0JVSDlWRWRscThod0UvWDdmYk42ZDRrOE9WWnJreG9HeUQ2MURqNGhkZ0hzRGVtMTY5bVU4ZWNDRHVxTzM4Zm85SDJXS2JyN3NGeGRsR3YvekVHa3FOOU9IeU1ibmNyMVFDVzFVQ3R0b3BDWVJXT2N5ZDBuNXRFcmk1RU5WaXFBaWtFYWhxZXRmN0lvOHN4QlQ5Y1FIS2h4M2Q2cjdlQjRWQjY4cXpyL3c0K254K1FSZWRnc0kzRFF4bHdNZXVvSWo5Zjk4Q1JYaTdIcDBUSGVSVjdUWmc2a2pUWWZKWnQrKzF5M3NqM3pzeEZzR1VsZDBDY1JXWHh1NThuZ0k0UCtNWGlFaXFWQ3lnVXVHVmFDWFVBU2ZDd0FiaFZHbzEyOGY3OXM1a2RZaDZ1b0lOdjIxZGo5ZUt6VjZ0Zm8xQzRHS2c1c3VnaGJiQ0xYbS9UMUJFV0Q3Njh4OWRnV2F0WnpwcEk2N284QzNnME4zNTVHT25nNjIyWngxTVdmOWN6T1h1YVBxNzdPSFlXb3V4ZFBQak5ackEzVHp1WTZmK3V1d1Bidm10S1BxWnJObTlQdXhDdTlOdnRhNW4ycThRbTRPdkRNSFUvZHorODVQQW4zQUZ4ZHBScmVkb0JxZnQ1RHBKU1JDOFcvRnJ0SXNybGV3RUQ4Nkc1V09FMFpqS2RZd055ZThhdGt6cmRZNmI2SENBTlNSUEEwbmlvRVcxWmZ0dW8xZ01lamU3NGZIWXVnQjBuMjdUUEs1N1ZnUmkzb2UzMjFTUjFGd3QrZU15WjZxMkp0dWVKSWFkUWI3bnVKcUtNSHNka251Q2JPRW13TlF2UExVeDRKR1dibEFsbkhQZ3Y0VGdibVdTckZhZnBiRDlMVVdTaURCZE9qY2FmVTFKMWxHeXlmN0hnNSt1STFITmxiSFdqd1RjeGxFNmpScGtwK09vZHkvd09ENjlsVG5tcUhycGMxMzBHMjc1dmZKekZnajliamNHSDFPMlpLL0tOcmFVUTVnRmZUOU5jWkhXN2QwMWJsWUNhSFBYMU9yOFgrTDJ4UWRFVDRISFU0TGRhUE9YMDV4aXpkQ2xSOVZOU2V3bEFSajRYRExYYTcza3dqN3hmd3hINEJMWWR2a1lrWUhMTXF5NTJBcDcvcTNOejEzMEpMbUxDdzQrbDhWT3EvaVRNWStOdTk3dE1qcVNETDRUM0hNeno5L1FuNXpnRHlxZG96a0pCRzNDYlZ5N2YwczdPdEN4WEZuM0RZZlNUdFA5OHpPZVhSYSs2RExLZUJKOFhPd0QzM0htWFdwbUh3WTh2dlBRSG03enk5WDJPOHlCdHZCa1NwWU0vTDEyWVQxejlvYWZxZWNnVTRoVTZuUnRwd3k0Zi9Ia0k5WGhrQVovM3lBa1h2OGdGWC9yeTZNUWUzKzl2NWFvZEZnRStuNUZUZHFtMEdtcFZzNTZmWC96NEFjMnd3L2t3NEh1dmI1N3luTHBNZW5hbVo4Y3BGdVVBd3g5a3hKdEJwa2laSHJrL2puc1NOakdrbC8wOCtTWjdUR242L1oxVWgyUzdWU29yazVsK1kzeWRKYTNSU0Q0cDg0eC9PT1FPTGROODREOElsVktUdDNBd2NnQUFBQUJKUlU1RXJrSmdnZz09XCIiXSwic291cmNlUm9vdCI6IiJ9