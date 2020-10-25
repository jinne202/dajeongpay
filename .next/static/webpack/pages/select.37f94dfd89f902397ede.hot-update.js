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
    }, "\uB2F9\uC2E0\uC774 '\uAE30\uC068'\uC744 \uB290\uAF08\uB2E4\uBA74 \uAE30\uC05C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_1, {
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
      src: check ? _data_img_kind_white_png__WEBPACK_IMPORTED_MODULE_6___default.a : _data_img_kind_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
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
    }, "\uB2F9\uC2E0\uC774 \u2018\uB2E4\uC815\uD568\u2019\uC744 \uB290\uAF08\uB2E4\uBA74 \uB2E4\uC815\uD55C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_2, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
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
var SelectBox_Right_1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectCard__SelectBox_Right_1",
  componentId: "sc-1p71olm-2"
})(["border:1px solid blue;width:219px;height:180px;position:absolute;bottom:-3px;right:18px;"]);
_c4 = SelectBox_Right_1;
var SelectBox_Right_2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectCard__SelectBox_Right_2",
  componentId: "sc-1p71olm-3"
})(["border:1px solid blue;width:210px;height:130px;position:absolute;top:-28px;right:27px;"]);
_c5 = SelectBox_Right_2;
var SelectText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "SelectCard__SelectText",
  componentId: "sc-1p71olm-4"
})(["margin:5px 0 0 0;color:#333;", ""], function (props) {
  return props.check && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:white;"]);
});
_c6 = SelectText;
/* harmony default export */ __webpack_exports__["default"] = (SelectCard);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "SelectCard");
$RefreshReg$(_c2, "SelectBox");
$RefreshReg$(_c3, "SelectBox_Left");
$RefreshReg$(_c4, "SelectBox_Right_1");
$RefreshReg$(_c5, "SelectBox_Right_2");
$RefreshReg$(_c6, "SelectText");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RDYXJkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNoZWNrIiwic2V0Q2hlY2siLCJoYW5kbGVDbGljayIsImUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJqb3lXaGl0ZSIsImpveVBpbmsiLCJmdW5kaW5nSW1nMSIsImtpbmRXaGl0ZSIsImtpbmRQaW5rIiwiZnVuZGluZ0ltZzIiLCJTZWxlY3RCb3giLCJzdHlsZWQiLCJkaXYiLCJjc3MiLCJTZWxlY3RCb3hfTGVmdCIsIlNlbGVjdEJveF9SaWdodF8xIiwiU2VsZWN0Qm94X1JpZ2h0XzIiLCJTZWxlY3RUZXh0IiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsS0FBRCxDQUZSO0FBQUEsTUFFbkJDLEtBRm1CO0FBQUEsTUFFWkMsUUFGWTs7QUFJMUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLFFBQUlMLEtBQUssQ0FBQ00sRUFBTixLQUFhLEtBQWpCLEVBQXVCO0FBQ25CSCxjQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFSO0FBQ0gsS0FGRCxNQUVPLElBQUlGLEtBQUssQ0FBQ00sRUFBTixLQUFhLE1BQWpCLEVBQXlCO0FBQzVCSCxjQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFSO0FBQ0g7O0FBQ0RLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaLEVBQW1CRixLQUFLLENBQUNNLEVBQXpCO0FBQ0gsR0FQRDs7QUFTQSxNQUFJTixLQUFLLENBQUNNLEVBQU4sS0FBYSxLQUFqQixFQUF1QjtBQUNuQixXQUNJLE1BQUMsU0FBRDtBQUFXLGFBQU8sRUFBRUYsV0FBcEI7QUFBaUMsV0FBSyxFQUFFRixLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRUEsS0FBSyxHQUFHTyw4REFBSCxHQUFjQyw2REFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUksTUFBQyxVQUFEO0FBQVksV0FBSyxFQUFFUixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdKQUZKLENBREosRUFLSSxNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRVMsaUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBTEosQ0FESjtBQVdILEdBWkQsTUFZTyxJQUFJWCxLQUFLLENBQUNNLEVBQU4sS0FBYSxNQUFqQixFQUF5QjtBQUM1QixXQUNJLE1BQUMsU0FBRDtBQUFXLGFBQU8sRUFBRUYsV0FBcEI7QUFBaUMsV0FBSyxFQUFFRixLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRUEsS0FBSyxHQUFHVSwrREFBSCxHQUFlQyw4REFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUksTUFBQyxVQUFEO0FBQVksV0FBSyxFQUFFWCxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNLQUZKLENBREosRUFLSSxNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRVksaUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBTEosQ0FESjtBQVdIO0FBQ0osQ0F0Q0Q7O0dBQU1mLFU7O0tBQUFBLFU7QUF3Q04sSUFBTWdCLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpU0FnQlQsVUFBQWpCLEtBQUs7QUFBQSxTQUNQQSxLQUFLLENBQUNFLEtBQU4sSUFDQWdCLDZEQURBLGtEQURPO0FBQUEsQ0FoQkksQ0FBZjtNQUFNSCxTO0FBd0JOLElBQU1JLGNBQWMsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4RUFBcEI7TUFBTUUsYztBQU9OLElBQU1DLGlCQUFpQixHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdHQUF2QjtNQUFNRyxpQjtBQVNOLElBQU1DLGlCQUFpQixHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhGQUF2QjtNQUFNSSxpQjtBQVNOLElBQU1DLFVBQVUsR0FBR04seURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSx5Q0FJVixVQUFBdkIsS0FBSztBQUFBLFNBQ1BBLEtBQUssQ0FBQ0UsS0FBTixJQUNBZ0IsNkRBREEsa0JBRE87QUFBQSxDQUpLLENBQWhCO01BQU1JLFU7QUFXU3ZCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbGVjdC4zN2Y5NGRmZDg5ZjkwMjM5N2VkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGpveVBpbmsgZnJvbSAnLi4vZGF0YS9pbWcvam95X3BpbmsucG5nJztcclxuaW1wb3J0IGpveVdoaXRlIGZyb20gJy4uL2RhdGEvaW1nL2pveV93aGl0ZS5wbmcnO1xyXG5pbXBvcnQgZnVuZGluZ0ltZzEgZnJvbSAnLi4vZGF0YS9pbWcvZnVuZGluZ19pbWcxLnBuZyc7XHJcbmltcG9ydCBraW5kUGluayBmcm9tICcuLi9kYXRhL2ltZy9raW5kX3BpbmsucG5nJztcclxuaW1wb3J0IGtpbmRXaGl0ZSBmcm9tICcuLi9kYXRhL2ltZy9raW5kX3doaXRlLnBuZyc7XHJcbmltcG9ydCBmdW5kaW5nSW1nMiBmcm9tICcuLi9kYXRhL2ltZy9mdW5kaW5nX2ltZzIucG5nJztcclxuXHJcbmNvbnN0IFNlbGVjdENhcmQgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY2hlY2ssIHNldENoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmlkID09PSBcImpveVwiKXtcclxuICAgICAgICAgICAgc2V0Q2hlY2soIWNoZWNrKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmlkID09PSBcImtpbmRcIikge1xyXG4gICAgICAgICAgICBzZXRDaGVjayghY2hlY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhjaGVjaywgcHJvcHMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wcy5pZCA9PT0gXCJqb3lcIil7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlbGVjdEJveCBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2hlY2s9e2NoZWNrfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2sgPyBqb3lXaGl0ZSA6IGpveVBpbmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VGV4dCBjaGVjaz17Y2hlY2t9PuuLueyLoOydtCAn6riw7IGoJ+ydhCDripDqvIjri6TrqbQg6riw7IGcIOqwkOygleydhCDtjoDrlKkg7ZW07KO87IS47JqUPC9TZWxlY3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfUmlnaHRfMT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzF9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0XzE+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuaWQgPT09IFwia2luZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlbGVjdEJveCBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2hlY2s9e2NoZWNrfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2sgPyBraW5kV2hpdGUgOiBraW5kUGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUZXh0IGNoZWNrPXtjaGVja30+64u57Iug7J20IOKAmOuLpOygle2VqOKAmeydhCDripDqvIjri6TrqbQg64uk7KCV7ZWcIOqwkOygleydhCDtjoDrlKkg7ZW07KO87IS47JqUPC9TZWxlY3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfUmlnaHRfMj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzJ9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0XzI+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgU2VsZWN0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogNzUwcHg7XHJcbiAgICBoZWlnaHQgOiAxMzBweDtcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogd2hpdGU7XHJcbiAgICBib3JkZXIgOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTZweDtcclxuICAgIGJveC1zaGFkb3cgOiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICB0cmFuc2l0aW9uIDogYm9yZGVyIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXIgOiAzcHggc29saWQgI2ZmNjQ2NDtcclxuICAgIH1cclxuXHJcbiAgICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5jaGVjayAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBiYWNrZ3JvdW5kIDogI2ZmN2I3YjtcclxuICAgICAgYm9yZGVyIDogM3B4IHNvbGlkICNmZjY0NjQ7XHJcbiAgICBgfVxyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RCb3hfTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgcGluaztcclxuICAgIHdpZHRoIDogNDYwcHg7XHJcbiAgICBtYXJnaW4gOiAyOHB4IDAgMCA0OXB4O1xyXG4gICAgZm9udC1zaXplIDogMThweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X1JpZ2h0XzEgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICB3aWR0aCA6IDIxOXB4O1xyXG4gICAgaGVpZ2h0IDogMTgwcHg7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgYm90dG9tIDogLTNweDtcclxuICAgIHJpZ2h0IDogMThweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X1JpZ2h0XzIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICB3aWR0aCA6IDIxMHB4O1xyXG4gICAgaGVpZ2h0IDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgdG9wIDogLTI4cHg7XHJcbiAgICByaWdodCA6IDI3cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdFRleHQgPSBzdHlsZWQucGBcclxuICAgIG1hcmdpbiA6IDVweCAwIDAgMDtcclxuICAgIGNvbG9yIDogIzMzMztcclxuXHJcbiAgICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5jaGVjayAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgYH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9