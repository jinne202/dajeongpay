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
/* harmony import */ var _data_img_thanks_pink_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/img/thanks_pink.png */ "./src/data/img/thanks_pink.png");
/* harmony import */ var _data_img_thanks_pink_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_img_thanks_pink_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_img_thanks_white_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/img/thanks_white.png */ "./src/data/img/thanks_white.png");
/* harmony import */ var _data_img_thanks_white_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_img_thanks_white_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_img_funding_img3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/img/funding_img3.png */ "./src/data/img/funding_img3.png");
/* harmony import */ var _data_img_funding_img3_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_data_img_funding_img3_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_img_un_pink_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/img/un_pink.png */ "./src/data/img/un_pink.png");
/* harmony import */ var _data_img_un_pink_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_data_img_un_pink_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_img_funding_img4_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/img/funding_img4.png */ "./src/data/img/funding_img4.png");
/* harmony import */ var _data_img_funding_img4_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_data_img_funding_img4_png__WEBPACK_IMPORTED_MODULE_12__);
var _this = undefined,
    _jsxFileName = "C:\\project\\dajungpay\\src\\components\\SelectCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











 // import kindWhite from '../data/img/kind_white.png';



var SelectCard = function SelectCard(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      check = _useState[0],
      setCheck = _useState[1];

  var handleClick = function handleClick(e) {
    setCheck(!check);
    console.log(check, props.id);
  };

  if (props.id === "joy") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_joy_white_png__WEBPACK_IMPORTED_MODULE_3___default.a : _data_img_joy_pink_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 '\uAE30\uC068'\uC744 \uB290\uAF08\uB2E4\uBA74 \uAE30\uC05C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_1, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
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
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_kind_white_png__WEBPACK_IMPORTED_MODULE_6___default.a : _data_img_kind_pink_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 \u2018\uB2E4\uC815\uD568\u2019\uC744 \uB290\uAF08\uB2E4\uBA74 \uB2E4\uC815\uD55C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_2, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    })));
  } else if (props.id === "thanks") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_thanks_white_png__WEBPACK_IMPORTED_MODULE_9___default.a : _data_img_thanks_pink_png__WEBPACK_IMPORTED_MODULE_8___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 \u2018\uAC10\uC0AC\uD568\u2019\uC744 \uB290\uAF08\uB2E4\uBA74 \uAC10\uC0AC\uD55C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_3, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img3_png__WEBPACK_IMPORTED_MODULE_10___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    })));
  } else if (props.id === "un") {
    return __jsx(SelectBox, {
      onClick: handleClick,
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx(SelectBox_Left, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: check ? _data_img_un_pink_png__WEBPACK_IMPORTED_MODULE_11___default.a : _data_img_un_pink_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }), __jsx(SelectText, {
      check: check,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, "\uB2F9\uC2E0\uC774 \u2018\uBD88\uD3B8\uD568\u2019\uC744 \uB290\uAF08\uB2E4\uBA74 \uBD88\uD3B8\uD55C \uAC10\uC815\uC744 \uD380\uB529 \uD574\uC8FC\uC138\uC694")), __jsx(SelectBox_Right_4, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: _data_img_funding_img4_png__WEBPACK_IMPORTED_MODULE_12___default.a,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
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
var SelectBox_Right_3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectCard__SelectBox_Right_3",
  componentId: "sc-1p71olm-4"
})(["border:1px solid blue;width:204px;height:130px;position:absolute;top:-28px;right:27px;"]);
_c6 = SelectBox_Right_3;
var SelectBox_Right_4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SelectCard__SelectBox_Right_4",
  componentId: "sc-1p71olm-5"
})(["border:1px solid blue;width:170px;height:142px;position:absolute;top:-30px;right:18px;"]);
_c7 = SelectBox_Right_4;
var SelectText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "SelectCard__SelectText",
  componentId: "sc-1p71olm-6"
})(["margin:5px 0 0 0;color:#333;", ""], function (props) {
  return props.check && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:white;"]);
});
_c8 = SelectText;
/* harmony default export */ __webpack_exports__["default"] = (SelectCard);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "SelectCard");
$RefreshReg$(_c2, "SelectBox");
$RefreshReg$(_c3, "SelectBox_Left");
$RefreshReg$(_c4, "SelectBox_Right_1");
$RefreshReg$(_c5, "SelectBox_Right_2");
$RefreshReg$(_c6, "SelectBox_Right_3");
$RefreshReg$(_c7, "SelectBox_Right_4");
$RefreshReg$(_c8, "SelectText");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0Q2FyZC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RDYXJkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNoZWNrIiwic2V0Q2hlY2siLCJoYW5kbGVDbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJqb3lXaGl0ZSIsImpveVBpbmsiLCJmdW5kaW5nSW1nMSIsImtpbmRXaGl0ZSIsImtpbmRQaW5rIiwiZnVuZGluZ0ltZzIiLCJ0aGFua3NXaGl0ZSIsInRoYW5rc1BpbmsiLCJmdW5kaW5nSW1nMyIsInVuUGluayIsImZ1bmRpbmdJbWc0IiwiU2VsZWN0Qm94Iiwic3R5bGVkIiwiZGl2IiwiY3NzIiwiU2VsZWN0Qm94X0xlZnQiLCJTZWxlY3RCb3hfUmlnaHRfMSIsIlNlbGVjdEJveF9SaWdodF8yIiwiU2VsZWN0Qm94X1JpZ2h0XzMiLCJTZWxlY3RCb3hfUmlnaHRfNCIsIlNlbGVjdFRleHQiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFQUMsc0RBQVEsQ0FBQyxLQUFELENBRlI7QUFBQSxNQUVuQkMsS0FGbUI7QUFBQSxNQUVaQyxRQUZZOztBQUkxQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDdkJGLFlBQVEsQ0FBQyxDQUFDRCxLQUFGLENBQVI7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVosRUFBbUJGLEtBQUssQ0FBQ1EsRUFBekI7QUFDSCxHQUhEOztBQUtBLE1BQUlSLEtBQUssQ0FBQ1EsRUFBTixLQUFhLEtBQWpCLEVBQXVCO0FBQ25CLFdB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LmJjYzM0YzkxMmI4NzM4ZDNlZjQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgam95UGluayBmcm9tICcuLi9kYXRhL2ltZy9qb3lfcGluay5wbmcnO1xyXG5pbXBvcnQgam95V2hpdGUgZnJvbSAnLi4vZGF0YS9pbWcvam95X3doaXRlLnBuZyc7XHJcbmltcG9ydCBmdW5kaW5nSW1nMSBmcm9tICcuLi9kYXRhL2ltZy9mdW5kaW5nX2ltZzEucG5nJztcclxuaW1wb3J0IGtpbmRQaW5rIGZyb20gJy4uL2RhdGEvaW1nL2tpbmRfcGluay5wbmcnO1xyXG5pbXBvcnQga2luZFdoaXRlIGZyb20gJy4uL2RhdGEvaW1nL2tpbmRfd2hpdGUucG5nJztcclxuaW1wb3J0IGZ1bmRpbmdJbWcyIGZyb20gJy4uL2RhdGEvaW1nL2Z1bmRpbmdfaW1nMi5wbmcnO1xyXG5pbXBvcnQgdGhhbmtzUGluayBmcm9tICcuLi9kYXRhL2ltZy90aGFua3NfcGluay5wbmcnO1xyXG5pbXBvcnQgdGhhbmtzV2hpdGUgZnJvbSAnLi4vZGF0YS9pbWcvdGhhbmtzX3doaXRlLnBuZyc7XHJcbmltcG9ydCBmdW5kaW5nSW1nMyBmcm9tICcuLi9kYXRhL2ltZy9mdW5kaW5nX2ltZzMucG5nJztcclxuaW1wb3J0IHVuUGluayBmcm9tICcuLi9kYXRhL2ltZy91bl9waW5rLnBuZyc7XHJcbi8vIGltcG9ydCBraW5kV2hpdGUgZnJvbSAnLi4vZGF0YS9pbWcva2luZF93aGl0ZS5wbmcnO1xyXG5pbXBvcnQgZnVuZGluZ0ltZzQgZnJvbSAnLi4vZGF0YS9pbWcvZnVuZGluZ19pbWc0LnBuZyc7XHJcblxyXG5jb25zdCBTZWxlY3RDYXJkID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldENoZWNrKCFjaGVjayk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlY2ssIHByb3BzLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvcHMuaWQgPT09IFwiam95XCIpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RCb3ggb25DbGljaz17aGFuZGxlQ2xpY2t9IGNoZWNrPXtjaGVja30+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoZWNrID8gam95V2hpdGUgOiBqb3lQaW5rfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRleHQgY2hlY2s9e2NoZWNrfT7ri7nsi6DsnbQgJ+q4sOyBqCfsnYQg64qQ6ryI64uk66m0IOq4sOyBnCDqsJDsoJXsnYQg7Y6A65SpIO2VtOyjvOyEuOyalDwvU2VsZWN0VGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X1JpZ2h0XzE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bmRpbmdJbWcxfS8+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9SaWdodF8xPlxyXG4gICAgICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmlkID09PSBcImtpbmRcIikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxTZWxlY3RCb3ggb25DbGljaz17aGFuZGxlQ2xpY2t9IGNoZWNrPXtjaGVja30+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoZWNrID8ga2luZFdoaXRlIDoga2luZFBpbmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VGV4dCBjaGVjaz17Y2hlY2t9PuuLueyLoOydtCDigJjri6TsoJXtlajigJnsnYQg64qQ6ryI64uk66m0IOuLpOygle2VnCDqsJDsoJXsnYQg7Y6A65SpIO2VtOyjvOyEuOyalDwvU2VsZWN0VGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X1JpZ2h0XzI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bmRpbmdJbWcyfS8+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9SaWdodF8yPlxyXG4gICAgICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmlkID09PSBcInRoYW5rc1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNlbGVjdEJveCBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2hlY2s9e2NoZWNrfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2sgPyB0aGFua3NXaGl0ZSA6IHRoYW5rc1Bpbmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0VGV4dCBjaGVjaz17Y2hlY2t9PuuLueyLoOydtCDigJjqsJDsgqztlajigJnsnYQg64qQ6ryI64uk66m0IOqwkOyCrO2VnCDqsJDsoJXsnYQg7Y6A65SpIO2VtOyjvOyEuOyalDwvU2VsZWN0VGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X0xlZnQ+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Qm94X1JpZ2h0XzM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Z1bmRpbmdJbWczfS8+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdEJveF9SaWdodF8zPlxyXG4gICAgICAgICAgICA8L1NlbGVjdEJveD5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmlkID09PSBcInVuXCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8U2VsZWN0Qm94IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjaGVjaz17Y2hlY2t9PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJveF9MZWZ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjaGVjayA/IHVuUGluayA6IHVuUGlua30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RUZXh0IGNoZWNrPXtjaGVja30+64u57Iug7J20IOKAmOu2iO2OuO2VqOKAmeydhCDripDqvIjri6TrqbQg67aI7Y647ZWcIOqwkOygleydhCDtjoDrlKkg7ZW07KO87IS47JqUPC9TZWxlY3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RCb3hfTGVmdD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCb3hfUmlnaHRfND5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZnVuZGluZ0ltZzR9Lz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Qm94X1JpZ2h0XzQ+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0Qm94PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgU2VsZWN0Qm94ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogNzUwcHg7XHJcbiAgICBoZWlnaHQgOiAxMzBweDtcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogd2hpdGU7XHJcbiAgICBib3JkZXIgOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTZweDtcclxuICAgIGJveC1zaGFkb3cgOiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICB0cmFuc2l0aW9uIDogYm9yZGVyIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXIgOiAzcHggc29saWQgI2ZmNjQ2NDtcclxuICAgIH1cclxuXHJcbiAgICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5jaGVjayAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBiYWNrZ3JvdW5kIDogI2ZmN2I3YjtcclxuICAgICAgYm9yZGVyIDogM3B4IHNvbGlkICNmZjY0NjQ7XHJcbiAgICBgfVxyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RCb3hfTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgcGluaztcclxuICAgIHdpZHRoIDogNDYwcHg7XHJcbiAgICBtYXJnaW4gOiAyOHB4IDAgMCA0OXB4O1xyXG4gICAgZm9udC1zaXplIDogMThweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X1JpZ2h0XzEgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICB3aWR0aCA6IDIxOXB4O1xyXG4gICAgaGVpZ2h0IDogMTgwcHg7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgYm90dG9tIDogLTNweDtcclxuICAgIHJpZ2h0IDogMThweDtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0Qm94X1JpZ2h0XzIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICB3aWR0aCA6IDIxMHB4O1xyXG4gICAgaGVpZ2h0IDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xyXG4gICAgdG9wIDogLTI4cHg7XHJcbiAgICByaWdodCA6IDI3cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdEJveF9SaWdodF8zID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlciA6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgd2lkdGggOiAyMDRweDtcclxuICAgIGhlaWdodCA6IDEzMHB4O1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgIHRvcCA6IC0yOHB4O1xyXG4gICAgcmlnaHQgOiAyN3B4O1xyXG5gXHJcblxyXG5jb25zdCBTZWxlY3RCb3hfUmlnaHRfNCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgYmx1ZTtcclxuICAgIHdpZHRoIDogMTcwcHg7XHJcbiAgICBoZWlnaHQgOiAxNDJweDtcclxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgOiAtMzBweDtcclxuICAgIHJpZ2h0IDogMThweDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IFNlbGVjdFRleHQgPSBzdHlsZWQucGBcclxuICAgIG1hcmdpbiA6IDVweCAwIDAgMDtcclxuICAgIGNvbG9yIDogIzMzMztcclxuXHJcbiAgICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5jaGVjayAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgYH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9