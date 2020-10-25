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

    console.log(setCheckJoy, setCheckKind, props.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RDYXJkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNoZWNrSm95Iiwic2V0Q2hlY2tKb3kiLCJjaGVja0tpbmQiLCJzZXRDaGVja0tpbmQiLCJoYW5kbGVDbGljayIsImUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJqb3lXaGl0ZSIsImpveVBpbmsiLCJmdW5kaW5nSW1nMSIsIlNlbGVjdEJveCIsInN0eWxlZCIsImRpdiIsImNzcyIsIlNlbGVjdEJveF9MZWZ0IiwiU2VsZWN0Qm94X1JpZ2h0IiwiU2VsZWN0VGV4dCIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVNQyxzREFBUSxDQUFDLEtBQUQsQ0FGZDtBQUFBLE1BRW5CQyxRQUZtQjtBQUFBLE1BRVRDLFdBRlM7O0FBQUEsbUJBR1FGLHNEQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR25CRyxTQUhtQjtBQUFBLE1BR1JDLFlBSFE7O0FBSzFCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QixRQUFJUCxLQUFLLENBQUNRLEVBQU4sS0FBYSxLQUFqQixFQUF1QjtBQUNuQkwsaUJBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDQUcsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxLQUhELE1BR08sSUFBSUwsS0FBSyxDQUFDUSxFQUFOLEtBQWEsUUFBakIsRUFBMkI7QUFDOUJILGtCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0FELGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0g7O0FBQ0RNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxXQUFaLEVBQXlCRSxZQUF6QixFQUF1Q0wsS0FBSyxDQUFDUSxFQUE3QztBQUNILEdBVEQ7O0FBV0EsTUFBSVIsS0FBSyxDQUFDUSxFQUFOLEtBQWEsS0FBakIsRUFBdUI7QUFDbkIsV0FDSSxNQUFDLFNBQUQ7QUFBVyxhQUFPLEVBQUVGLFdBQXBCO0FBQWlDLGNBQVEsRUFBRUosUUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVBLFFBQVEsR0FBR1MsOERBQUgsR0FBY0MsNkRBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJLE1BQUMsVUFBRDtBQUFZLGNBQVEsRUFBRVYsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnSkFGSixDQURKLEVBS0ksTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsRUFBRVcsaUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBTEosQ0FESjtBQVdILEdBWkQsTUFZTztBQUNILFdBQ0ksTUFBQyxTQUFEO0FBQVcsYUFBTyxFQUFFUCxXQUFwQjtBQUFpQyxlQUFTLEVBQUVGLFNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFQSxTQUFTLEdBQUdPLDhEQUFILEdBQWNDLDZEQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSSxNQUFDLFVBQUQ7QUFBWSxlQUFTLEVBQUVSLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosQ0FESixFQUtJLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVTLGlFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQUxKLENBREo7QUFXSDtBQUNKLENBekNEOztHQUFNZCxVOztLQUFBQSxVO0FBMkNOLElBQU1lLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpU0FnQlQsVUFBQWhCLEtBQUs7QUFBQSxTQUNQQSxLQUFLLENBQUNFLFFBQU4sSUFDQWUsNkRBREEsa0RBRE87QUFBQSxDQWhCSSxDQUFmO01BQU1ILFM7QUF3Qk4sSUFBTUksY0FBYyxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhFQUFwQjtNQUFNRSxjO0FBT04sSUFBTUMsZUFBZSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdHQUFyQjtNQUFNRyxlO0FBU04sSUFBTUMsVUFBVSxHQUFHTCx5REFBTSxDQUFDTSxDQUFWO0FBQUE7QUFBQTtBQUFBLHlDQUlWLFVBQUFyQixLQUFLO0FBQUEsU0FDUEEsS0FBSyxDQUFDRSxRQUFOLElBQ0FlLDZEQURBLGtCQURPO0FBQUEsQ0FKSyxDQUFoQjtNQUFNRyxVO0FBV1NyQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxlY3QuOWVmYjMyYWEyYWVkZTFkNTE5N2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBqb3lQaW5rIGZyb20gJy4uL2RhdGEvaW1nL2pveV9waW5rLnBuZyc7XHJcbmltcG9ydCBqb3lXaGl0ZSBmcm9tICcuLi9kYXRhL2ltZy9qb3lfd2hpdGUucG5nJztcclxuaW1wb3J0IGZ1bmRpbmdJbWcxIGZyb20gJy4uL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMS5wbmcnO1xyXG5cclxuY29uc3QgU2VsZWN0Q2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjaGVja0pveSwgc2V0Q2hlY2tKb3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NoZWNrS2luZCwgc2V0Q2hlY2tLaW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmlkID09PSBcImpveVwiKXtcclxuICAgICAgICAgICAgc2V0Q2hlY2tKb3koIWNoZWNrSm95KTtcclxuICAgICAgICAgICAgc2V0Q2hlY2tLaW5kKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmlkID09PSBcImpqampqalwiKSB7XHJcbiAgICAgICAgICAgIHNldENoZWNrS2luZCghY2hlY2tLaW5kKTtcclxuICAgICAgICAgICAgc2V0Q2hlY2tKb3koZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhzZXRDaGVja0pveSwgc2V0Q2hlY2tLaW5kLCBwcm9wcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLmlkID09PSBcImpveVwiKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Qm94IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjaGVja0pveT17Y2hlY2tKb3l9PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGVja0pveSA/IGpveVdoaXRlIDogam95UGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUZXh0IGNoZWNrSm95PXtjaGVja0pveX0+64u57Iug7J20ICfquLDsgagn7J2EIOuKkOq8iOuLpOuptCDquLDsgZwg6rCQ7KCV7J2EIO2OgOuUqSDtlbTso7zshLjsmpQ8L1NlbGVjdFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9SaWdodD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzF9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0PlxyXG4gICAgICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RCb3ggb25DbGljaz17aGFuZGxlQ2xpY2t9IGNoZWNrS2luZD17Y2hlY2tLaW5kfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2tLaW5kID8gam95V2hpdGUgOiBqb3lQaW5rfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRleHQgY2hlY2tLaW5kPXtjaGVja0tpbmR9Pu2doDwvU2VsZWN0VGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X1JpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmdW5kaW5nSW1nMX0vPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfUmlnaHQ+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgU2VsZWN0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogNzUwcHg7XHJcbiAgICBoZWlnaHQgOiAxMzBweDtcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogd2hpdGU7XHJcbiAgICBib3JkZXIgOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTZweDtcclxuICAgIGJveC1zaGFkb3cgOiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICB0cmFuc2l0aW9uIDogYm9yZGVyIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXIgOiAzcHggc29saWQgI2ZmNjQ2NDtcclxuICAgIH1cclxuXHJcbiAgICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5jaGVja0pveSAmJiBcclxuICAgIGNzc2BcclxuICAgICAgYmFja2dyb3VuZCA6ICNmZjdiN2I7XHJcbiAgICAgIGJvcmRlciA6IDNweCBzb2xpZCAjZmY2NDY0O1xyXG4gICAgYH1cclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X0xlZnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIHBpbms7XHJcbiAgICB3aWR0aCA6IDQ2MHB4O1xyXG4gICAgbWFyZ2luIDogMjhweCAwIDAgNDlweDtcclxuICAgIGZvbnQtc2l6ZSA6IDE4cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdEJveF9SaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgYmx1ZTtcclxuICAgIHdpZHRoIDogMjE5cHg7XHJcbiAgICBoZWlnaHQgOiAxODBweDtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICBib3R0b20gOiAtM3B4O1xyXG4gICAgcmlnaHQgOiAxOHB4O1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICBtYXJnaW4gOiA1cHggMCAwIDA7XHJcbiAgICBjb2xvciA6ICMzMzM7XHJcblxyXG4gICAgJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuY2hlY2tKb3kgJiYgXHJcbiAgICBjc3NgXHJcbiAgICAgIGNvbG9yIDogd2hpdGU7XHJcbiAgICBgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=