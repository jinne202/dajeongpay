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
      setCheckKind(false);
    } else if (props.id === "jjjjjj") {
      setCheckKind(!checkKind);
      setCheckJoy(false);
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
      src: checkJoy ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      checkJoy: checkJoy,
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
  } else {
    return __jsx(SelectBox, {
      onClick: handleClick,
      checkKind: checkKind,
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
      src: checkKind ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      checkKind: checkKind,
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

_s(SelectCard, "XknmDDX2IflCU8AntCx47sf3qvo=");

_c = SelectCard;
var SelectBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectCard__SelectBox",
  componentId: "sc-1p71olm-0"
})(["width:750px;height:130px;position:relative;background-color:white;border:3px solid white;border-radius:16px;box-shadow:0 0 10px 0 rgba(0,0,0,0.05);transition:border 0.1s ease-in-out;transition:background-color 0.2s ease-in-out;cursor:pointer;&:hover{border:3px solid #ff6464;}", ""], function (props) {
  return props.checkJoy && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:#ff7b7b;border:3px solid #ff6464;"]);
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
  return props.checkJoy && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:white;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RDYXJkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNoZWNrSm95Iiwic2V0Q2hlY2tKb3kiLCJjaGVja0tpbmQiLCJzZXRDaGVja0tpbmQiLCJoYW5kbGVDbGljayIsImUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJqb3lXaGl0ZSIsImpveVBpbmsiLCJmdW5kaW5nSW1nMSIsIlNlbGVjdEJveCIsInN0eWxlZCIsImRpdiIsImNzcyIsIlNlbGVjdEJveF9MZWZ0IiwiU2VsZWN0Qm94X1JpZ2h0IiwiU2VsZWN0VGV4dCIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVNQyxzREFBUSxDQUFDLEtBQUQsQ0FGZDtBQUFBLE1BRW5CQyxRQUZtQjtBQUFBLE1BRVRDLFdBRlM7O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR25CRyxTQUhtQjtBQUFBLE1BR1JDLFlBSFE7O0FBSzFCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QixRQUFJUCxLQUFLLENBQUNRLEVBQU4sS0FBYSxLQUFqQixFQUF1QjtBQUNuQkwsaUJBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDQUcsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxLQUhELE1BR08sSUFBSUwsS0FBSyxDQUFDUSxFQUFOLEtBQWEsUUFBakIsRUFBMkI7QUFDOUJILGtCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0FELGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0g7O0FBQ0RNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFLLENBQUNRLEVBQWxCO0FBQ0gsR0FURDs7QUFXQSxNQUFJUixLQUFLLENBQUNRLEVBQU4sS0FBYSxLQUFqQixFQUF1QjtBQUNuQixXQUNJLE1BQUMsU0FBRDtBQUFXLGFBQU8sRUFBRUYsV0FBcEI7QUFBaUMsY0FBUSxFQUFFSixRQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRUEsUUFBUSxHQUFHUyw4REFBSCxHQUFjQyw2REFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUksTUFBQyxVQUFEO0FBQVksY0FBUSxFQUFFVixRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdKQUZKLENBREosRUFLSSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFVyxpRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FMSixDQURKO0FBV0gsR0FaRCxNQVlPO0FBQ0gsV0FDSSxNQUFDLFNBQUQ7QUFBVyxhQUFPLEVBQUVQLFdBQXBCO0FBQWlDLGVBQVMsRUFBRUYsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVBLFNBQVMsR0FBR08sOERBQUgsR0FBY0MsNkRBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJLE1BQUMsVUFBRDtBQUFZLGVBQVMsRUFBRVIsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQURKLEVBS0ksTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRVMsaUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBTEosQ0FESjtBQVdIO0FBQ0osQ0F6Q0Q7O0dBQU1kLFU7O0tBQUFBLFU7QUEyQ04sSUFBTWUsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlTQWdCVCxVQUFBaEIsS0FBSztBQUFBLFNBQ1BBLEtBQUssQ0FBQ0UsUUFBTixJQUNBZSw2REFEQSxrREFETztBQUFBLENBaEJJLENBQWY7TUFBTUgsUztBQXdCTixJQUFNSSxjQUFjLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEVBQXBCO01BQU1FLGM7QUFPTixJQUFNQyxlQUFlLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQXJCO01BQU1HLGU7QUFTTixJQUFNQyxVQUFVLEdBQUdMLHlEQUFNLENBQUNNLENBQVY7QUFBQTtBQUFBO0FBQUEseUNBSVYsVUFBQXJCLEtBQUs7QUFBQSxTQUNQQSxLQUFLLENBQUNFLFFBQU4sSUFDQWUsNkRBREEsa0JBRE87QUFBQSxDQUpLLENBQWhCO01BQU1HLFU7QUFXU3JCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbGVjdC4xZmI5ZmYyNTIyMWU0NjhiZTI5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGpveVBpbmsgZnJvbSAnLi4vZGF0YS9pbWcvam95X3BpbmsucG5nJztcclxuaW1wb3J0IGpveVdoaXRlIGZyb20gJy4uL2RhdGEvaW1nL2pveV93aGl0ZS5wbmcnO1xyXG5pbXBvcnQgZnVuZGluZ0ltZzEgZnJvbSAnLi4vZGF0YS9pbWcvZnVuZGluZ19pbWcxLnBuZyc7XHJcblxyXG5jb25zdCBTZWxlY3RDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrSm95LCBzZXRDaGVja0pveV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2hlY2tLaW5kLCBzZXRDaGVja0tpbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuaWQgPT09IFwiam95XCIpe1xyXG4gICAgICAgICAgICBzZXRDaGVja0pveSghY2hlY2tKb3kpO1xyXG4gICAgICAgICAgICBzZXRDaGVja0tpbmQoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMuaWQgPT09IFwiampqampqXCIpIHtcclxuICAgICAgICAgICAgc2V0Q2hlY2tLaW5kKCFjaGVja0tpbmQpO1xyXG4gICAgICAgICAgICBzZXRDaGVja0pveShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcHMuaWQgPT09IFwiam95XCIpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RCb3ggb25DbGljaz17aGFuZGxlQ2xpY2t9IGNoZWNrSm95PXtjaGVja0pveX0+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoZWNrSm95ID8gam95V2hpdGUgOiBqb3lQaW5rfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRleHQgY2hlY2tKb3k9e2NoZWNrSm95fT7ri7nsi6DsnbQgJ+q4sOyBqCfsnYQg64qQ6ryI64uk66m0IOq4sOyBnCDqsJDsoJXsnYQg7Y6A65SpIO2VtOyjvOyEuOyalDwvU2VsZWN0VGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X1JpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5kaW5nSW1nMX0vPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfUmlnaHQ+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlbGVjdEJveCBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2hlY2tLaW5kPXtjaGVja0tpbmR9PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGVja0tpbmQgPyBqb3lXaGl0ZSA6IGpveVBpbmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VGV4dCBjaGVja0tpbmQ9e2NoZWNrS2luZH0+7Z2gPC9TZWxlY3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bmRpbmdJbWcxfS8+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9SaWdodD5cclxuICAgICAgICAgICAgPC9TZWxlY3RCb3g+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBTZWxlY3RCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiA3NTBweDtcclxuICAgIGhlaWdodCA6IDEzMHB4O1xyXG4gICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiB3aGl0ZTtcclxuICAgIGJvcmRlciA6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAxNnB4O1xyXG4gICAgYm94LXNoYWRvdyA6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIHRyYW5zaXRpb24gOiBib3JkZXIgMC4xcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlciA6IDNweCBzb2xpZCAjZmY2NDY0O1xyXG4gICAgfVxyXG5cclxuICAgICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmNoZWNrSm95ICYmIFxyXG4gICAgY3NzYFxyXG4gICAgICBiYWNrZ3JvdW5kIDogI2ZmN2I3YjtcclxuICAgICAgYm9yZGVyIDogM3B4IHNvbGlkICNmZjY0NjQ7XHJcbiAgICBgfVxyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RCb3hfTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgcGluaztcclxuICAgIHdpZHRoIDogNDYwcHg7XHJcbiAgICBtYXJnaW4gOiAyOHB4IDAgMCA0OXB4O1xyXG4gICAgZm9udC1zaXplIDogMThweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X1JpZ2h0ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlciA6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgd2lkdGggOiAyMTlweDtcclxuICAgIGhlaWdodCA6IDE4MHB4O1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbSA6IC0zcHg7XHJcbiAgICByaWdodCA6IDE4cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdFRleHQgPSBzdHlsZWQucGBcclxuICAgIG1hcmdpbiA6IDVweCAwIDAgMDtcclxuICAgIGNvbG9yIDogIzMzMztcclxuXHJcbiAgICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5jaGVja0pveSAmJiBcclxuICAgIGNzc2BcclxuICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==