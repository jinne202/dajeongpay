webpackHotUpdate_N_E("pages/select",{

/***/ "./src/components/ButtonComp.js":
/*!**************************************!*\
  !*** ./src/components/ButtonComp.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\project\\dajungpay\\src\\components\\ButtonComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CommonButton = function CommonButton(props) {
  return __jsx(ButtonStyle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, props.title);
};

_c = CommonButton;
var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "ButtonComp__ButtonStyle",
  componentId: "d5ixsq-0"
})(["width:200px;height:60px;background-color:#ff6464;border:0;border-radius:50px;margin:0 auto 0;display:block;color:white;font-size:24px;outline:0;box-shadow:0px 0px 10px rgba(0,0,0,0.1);transition:all .3s ease-in-out;&:active{border:0;outline:0;}&:hover{cursor:pointer;background-color:#FF908A;}"]);
_c2 = ButtonStyle;
/* harmony default export */ __webpack_exports__["default"] = (CommonButton);

var _c, _c2;

$RefreshReg$(_c, "CommonButton");
$RefreshReg$(_c2, "ButtonStyle");

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

/***/ "./src/pages/select.js":
/*!*****************************!*\
  !*** ./src/pages/select.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_ButtonComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ButtonComp */ "./src/components/ButtonComp.js");
/* harmony import */ var _components_CurrentState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CurrentState */ "./src/components/CurrentState.js");
/* harmony import */ var _components_SelectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SelectCard */ "./src/components/SelectCard.js");
/* harmony import */ var _data_img_select_bg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/img/select_bg.png */ "./src/data/img/select_bg.png");
/* harmony import */ var _data_img_select_bg_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_img_select_bg_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/img/reword_title.png */ "./src/data/img/reword_title.png");
/* harmony import */ var _data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_img_select_graph_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/img/select_graph.png */ "./src/data/img/select_graph.png");
/* harmony import */ var _data_img_select_graph_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_img_select_graph_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/img/select_graph_bubble.png */ "./src/data/img/select_graph_bubble.png");
/* harmony import */ var _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_8__);
var _this = undefined,
    _jsxFileName = "C:\\project\\dajungpay\\src\\pages\\select.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var SelectPage = function SelectPage() {
  return __jsx(BackgroundWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(TopWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(TopLeftWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: _data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: _data_img_reword_title_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), __jsx(MainTextStyle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "2020\uB144 \uD55C \uD574\uB97C \uB2E4\uC815\uD558\uAC8C \uCC44\uC6CC\uC8FC\uC6E0\uB358 \uB9CC\uB0A8\uB4E4\uC744 \uB9AC\uB9C8\uC778\uB4DC \uD574\uBCF4\uC138\uC694.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 58
    }
  }), " \uB9CC\uB0A8 \uC18D\uC5D0\uC11C \uB2F9\uC2E0\uC740 \uC5B4\uB5A4 \uD398\uC774\uB97C \uD574\uC624\uC168\uB098\uC694? ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 89
    }
  }), "\uAE30\uC068, \uB2E4\uC815\uD568, \uAC10\uC0AC\uD568, \uBD88\uD3B8\uD588\uB358 \uAC10\uC815 \uB4E4 \uC911 \uB2F9\uC2E0\uC774 \uB290\uAF08\uB358 \uAC10\uC815\uC744 \uB098\uB204\uC5B4\uC8FC\uC138\uC694.")), __jsx(TopRightWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx(_components_CurrentState__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }))), __jsx(MiddleWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(MiddleLeftWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(SelectCardWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "joy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  })), __jsx(SelectCardWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "kind",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  })), __jsx(SelectCardWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "thanks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  })), __jsx(SelectCardWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "un",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }))), __jsx(MiddelRightWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(GraphTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: _data_img_select_graph_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  })), __jsx(GraphWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(GraphCard, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx(Graph_Bubble, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, "65%")), __jsx(GraphBackground, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx(GraphFunction, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  })), __jsx(GraphSubTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, "\uAE30\uC068")), __jsx(GraphCard, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx(Graph_Bubble, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, "65%")), __jsx(GraphBackground, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, __jsx(GraphFunction, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  })), __jsx(GraphSubTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "\uB2E4\uC815")), __jsx(GraphCard, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx(Graph_Bubble, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, "65%")), __jsx(GraphBackground, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx(GraphFunction, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  })), __jsx(GraphSubTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "\uAC10\uC0AC")), __jsx(GraphCard, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, __jsx(Graph_Bubble, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: _data_img_select_graph_bubble_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, "65%")), __jsx(GraphBackground, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, __jsx(GraphFunction, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 33
    }
  })), __jsx(GraphSubTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, "\uBD88\uD3B8"))))), __jsx(Link, {
    href: "/select",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      position: "absolute",
      bottom: 60,
      right: 120
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx(_components_ButtonComp__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\uC2E0\uCCAD\uD558\uAE30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }))));
};

_c = SelectPage;
var BackgroundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__BackgroundWrapper",
  componentId: "sc-1fdfnkq-0"
})(["background-image:url(", ");width:1920px;height:980px;top:0;position:absolute;"], _data_img_select_bg_png__WEBPACK_IMPORTED_MODULE_5___default.a);
_c2 = BackgroundWrapper;
var TopWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__TopWrapper",
  componentId: "sc-1fdfnkq-1"
})(["width:1200px;margin:100px auto 59px;display:flex;justify-content:space-between;"]);
_c3 = TopWrapper;
var TopLeftWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__TopLeftWrapper",
  componentId: "sc-1fdfnkq-2"
})(["display:block;"]);
_c4 = TopLeftWrapper;
var TopRightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__TopRightWrapper",
  componentId: "sc-1fdfnkq-3"
})(["display:block;float:right;"]);
_c5 = TopRightWrapper;
var MainTextStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "select__MainTextStyle",
  componentId: "sc-1fdfnkq-4"
})(["font-size:16px;line-height:22px;letter-spacing:-0.48px;margin:30px 0 0 0;width:650px;"]);
_c6 = MainTextStyle;
var MiddleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__MiddleWrapper",
  componentId: "sc-1fdfnkq-5"
})(["width:1200px;margin:0 auto;display:flex;"]);
_c7 = MiddleWrapper;
var MiddleLeftWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__MiddleLeftWrapper",
  componentId: "sc-1fdfnkq-6"
})(["width:750px;"]);
_c8 = MiddleLeftWrapper;
var SelectCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__SelectCardWrapper",
  componentId: "sc-1fdfnkq-7"
})(["margin-bottom:31px;"]);
_c9 = SelectCardWrapper;
var MiddelRightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__MiddelRightWrapper",
  componentId: "sc-1fdfnkq-8"
})(["width:334px;margin-left:116px;"]);
_c10 = MiddelRightWrapper;
var GraphTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__GraphTitle",
  componentId: "sc-1fdfnkq-9"
})(["width:193px;height:55px;margin:47px 0 59px 100px;"]);
_c11 = GraphTitle;
var GraphWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__GraphWrapper",
  componentId: "sc-1fdfnkq-10"
})(["display:flex;"]);
_c12 = GraphWrapper;
var GraphCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__GraphCard",
  componentId: "sc-1fdfnkq-11"
})(["width:67px;margin:0 22px 0 0;"]);
_c13 = GraphCard;
var Graph_Bubble = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__Graph_Bubble",
  componentId: "sc-1fdfnkq-12"
})(["position:relative;width:67px;& > p{position:absolute;top:0;margin:0;color:#ff7b7b;line-height:34px;width:67px;text-align:center;}"]);
_c14 = Graph_Bubble;
var GraphBackground = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__GraphBackground",
  componentId: "sc-1fdfnkq-13"
})(["background-color:white;position:relative;border-radius:80px;width:29px;height:276px;border:solid 1.5px #6b4d4d;margin:43px auto 20px;"]);
_c15 = GraphBackground;
var GraphFunction = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__GraphFunction",
  componentId: "sc-1fdfnkq-14"
})(["background-color:#ff908a;position:absolute;z-index:999;width:21px;height:65%;bottom:3px;left:2px;border-radius:20px 20px 40px 40px;"]);
_c16 = GraphFunction;
var GraphSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "select__GraphSubTitle",
  componentId: "sc-1fdfnkq-15"
})(["font-size:20px;color:#333333;text-align:center;"]);
_c17 = GraphSubTitle;
/* harmony default export */ __webpack_exports__["default"] = (SelectPage);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

$RefreshReg$(_c, "SelectPage");
$RefreshReg$(_c2, "BackgroundWrapper");
$RefreshReg$(_c3, "TopWrapper");
$RefreshReg$(_c4, "TopLeftWrapper");
$RefreshReg$(_c5, "TopRightWrapper");
$RefreshReg$(_c6, "MainTextStyle");
$RefreshReg$(_c7, "MiddleWrapper");
$RefreshReg$(_c8, "MiddleLeftWrapper");
$RefreshReg$(_c9, "SelectCardWrapper");
$RefreshReg$(_c10, "MiddelRightWrapper");
$RefreshReg$(_c11, "GraphTitle");
$RefreshReg$(_c12, "GraphWrapper");
$RefreshReg$(_c13, "GraphCard");
$RefreshReg$(_c14, "Graph_Bubble");
$RefreshReg$(_c15, "GraphBackground");
$RefreshReg$(_c16, "GraphFunction");
$RefreshReg$(_c17, "GraphSubTitle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uQ29tcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJDb21tb25CdXR0b24iLCJwcm9wcyIsInRpdGxlIiwiQnV0dG9uU3R5bGUiLCJzdHlsZWQiLCJidXR0b24iLCJTZWxlY3RQYWdlIiwicmV3b3JkVGl0bGUiLCJzZWxlY3RHcmFwaFRpdGxlIiwiZ3JhcGhCdWJibGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiQmFja2dyb3VuZFdyYXBwZXIiLCJkaXYiLCJiYWNrZ3JvdW5kSW1nIiwiVG9wV3JhcHBlciIsIlRvcExlZnRXcmFwcGVyIiwiVG9wUmlnaHRXcmFwcGVyIiwiTWFpblRleHRTdHlsZSIsInAiLCJNaWRkbGVXcmFwcGVyIiwiTWlkZGxlTGVmdFdyYXBwZXIiLCJTZWxlY3RDYXJkV3JhcHBlciIsIk1pZGRlbFJpZ2h0V3JhcHBlciIsIkdyYXBoVGl0bGUiLCJHcmFwaFdyYXBwZXIiLCJHcmFwaENhcmQiLCJHcmFwaF9CdWJibGUiLCJHcmFwaEJhY2tncm91bmQiLCJHcmFwaEZ1bmN0aW9uIiwiR3JhcGhTdWJUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsU0FDSSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxLQUFLLENBQUNDLEtBRFgsQ0FESjtBQUtILENBTkQ7O0tBQU1GLFk7QUFRTixJQUFNRyxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEsNlNBQWpCO01BQU1GLFc7QUF5QlNILDJFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsU0FDSSxNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUVDLGlFQUFWO0FBQXVCLE9BQUcsRUFBRUEsaUVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJLQUNxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHJDLDBIQUNvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHBFLDZNQUZKLENBREosRUFPSSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosQ0FESixFQVlJLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLE1BQUUsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLE1BQUUsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0ksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLE1BQUUsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLEVBVUksTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFZLE1BQUUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVZKLENBREosRUFlSSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFQyxpRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFQyx3RUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkosQ0FESixFQUtJLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QSx1REFBbkI7T0FBTWlCLGE7QUFNU3pCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbGVjdC5kOTBjNThkY2QxNzUwZjE2YjVhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Zm9yd2FyZFJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IENvbW1vbkJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uU3R5bGU+XHJcbiAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cclxuICAgICAgICA8L0J1dHRvblN0eWxlPlxyXG4gICAgKVxyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGUgPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgd2lkdGggOiAyMDBweDtcclxuICAgIGhlaWdodCA6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2ZmNjQ2NDtcclxuICAgIGJvcmRlciA6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzIDogNTBweDtcclxuICAgIG1hcmdpbiA6IDAgYXV0byAwO1xyXG4gICAgZGlzcGxheSA6IGJsb2NrO1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZSA6IDI0cHg7XHJcbiAgICBvdXRsaW5lIDogMDtcclxuICAgIGJveC1zaGFkb3cgOiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBib3JkZXIgOiAwO1xyXG4gICAgICAgIG91dGxpbmUgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI0ZGOTA4QTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uQnV0dG9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBDb21tb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25Db21wJztcclxuaW1wb3J0IEN1cnJlbnRTdGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL0N1cnJlbnRTdGF0ZSc7XHJcbmltcG9ydCBTZWxlY3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0Q2FyZCdcclxuaW1wb3J0IGJhY2tncm91bmRJbWcgZnJvbSAnLi4vZGF0YS9pbWcvc2VsZWN0X2JnLnBuZyc7XHJcbmltcG9ydCByZXdvcmRUaXRsZSBmcm9tICcuLi9kYXRhL2ltZy9yZXdvcmRfdGl0bGUucG5nJztcclxuaW1wb3J0IHNlbGVjdEdyYXBoVGl0bGUgZnJvbSAnLi4vZGF0YS9pbWcvc2VsZWN0X2dyYXBoLnBuZyc7XHJcbmltcG9ydCBncmFwaEJ1YmJsZSBmcm9tICcuLi9kYXRhL2ltZy9zZWxlY3RfZ3JhcGhfYnViYmxlLnBuZyc7XHJcblxyXG5jb25zdCBTZWxlY3RQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFja2dyb3VuZFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxUb3BXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFRvcExlZnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXdvcmRUaXRsZX0gYWx0PXtyZXdvcmRUaXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDIwMjDrhYQg7ZWcIO2VtOulvCDri6TsoJXtlZjqsowg7LGE7JuM7KO87Jug642YIOunjOuCqOuTpOydhCDrpqzrp4jsnbjrk5wg7ZW067O07IS47JqULjxici8+IOunjOuCqCDsho3sl5DshJwg64u57Iug7J2AIOyWtOuWpCDtjpjsnbTrpbwg7ZW07Jik7IWo64KY7JqUPyA8YnIvPuq4sOyBqCwg64uk7KCV7ZWoLCDqsJDsgqztlagsIOu2iO2OuO2WiOuNmCDqsJDsoJUg65OkIOykkSDri7nsi6DsnbQg64qQ6ryI642YIOqwkOygleydhCDrgpjriITslrTso7zshLjsmpQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9Ub3BMZWZ0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxUb3BSaWdodFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEN1cnJlbnRTdGF0ZS8+XHJcbiAgICAgICAgICAgICAgICA8L1RvcFJpZ2h0V3JhcHBlcj5cclxuICAgICAgICAgICAgPC9Ub3BXcmFwcGVyPlxyXG4gICAgICAgICAgICA8TWlkZGxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxNaWRkbGVMZWZ0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDYXJkIGlkPVwiam95XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q2FyZCBpZD1cImtpbmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDYXJkIGlkPVwidGhhbmtzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q2FyZCBpZD1cInVuXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L01pZGRsZUxlZnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPE1pZGRlbFJpZ2h0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JhcGhUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlbGVjdEdyYXBoVGl0bGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyYXBoVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyYXBoV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaF9CdWJibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dyYXBoQnViYmxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NjUlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaF9CdWJibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEZ1bmN0aW9uPjwvR3JhcGhGdW5jdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoU3ViVGl0bGU+6riw7IGoPC9HcmFwaFN1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaF9CdWJibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dyYXBoQnViYmxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NjUlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaF9CdWJibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEZ1bmN0aW9uPjwvR3JhcGhGdW5jdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoU3ViVGl0bGU+64uk7KCVPC9HcmFwaFN1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaF9CdWJibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dyYXBoQnViYmxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NjUlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaF9CdWJibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEZ1bmN0aW9uPjwvR3JhcGhGdW5jdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoU3ViVGl0bGU+6rCQ7IKsPC9HcmFwaFN1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaF9CdWJibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dyYXBoQnViYmxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NjUlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmFwaF9CdWJibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFwaEZ1bmN0aW9uPjwvR3JhcGhGdW5jdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JhcGhCYWNrZ3JvdW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyYXBoU3ViVGl0bGU+67aI7Y64PC9HcmFwaFN1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyYXBoQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyYXBoV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDwvTWlkZGVsUmlnaHRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L01pZGRsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCBib3R0b20gOiA2MCwgcmlnaHQgOiAxMjB9fT5cclxuICAgICAgICAgICAgICAgIDxDb21tb25CdXR0b24gdGl0bGU9XCLsi6Dssq3tlZjquLBcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQmFja2dyb3VuZFdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEJhY2tncm91bmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2JhY2tncm91bmRJbWd9KTtcclxuICAgIHdpZHRoIDogMTkyMHB4O1xyXG4gICAgaGVpZ2h0IDogOTgwcHg7XHJcbiAgICB0b3AgOiAwO1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuYFxyXG5cclxuY29uc3QgVG9wV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDEyMDBweDtcclxuICAgIG1hcmdpbiA6IDEwMHB4IGF1dG8gNTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcblxyXG5jb25zdCBUb3BMZWZ0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5IDogYmxvY2s7XHJcbmBcclxuXHJcbmNvbnN0IFRvcFJpZ2h0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5IDogYmxvY2s7XHJcbiAgICBmbG9hdCA6IHJpZ2h0O1xyXG5gXHJcblxyXG5jb25zdCBNYWluVGV4dFN0eWxlID0gc3R5bGVkLnBgXHJcbiAgICBmb250LXNpemUgOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQgOiAyMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmcgOiAtMC40OHB4O1xyXG4gICAgbWFyZ2luOjMwcHggMCAwIDA7XHJcbiAgICB3aWR0aCA6IDY1MHB4O1xyXG5gXHJcblxyXG5jb25zdCBNaWRkbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogMTIwMHB4O1xyXG4gICAgbWFyZ2luIDogMCBhdXRvO1xyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbmBcclxuXHJcbmNvbnN0IE1pZGRsZUxlZnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoIDogNzUwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1ib3R0b20gOiAzMXB4O1xyXG5gXHJcblxyXG5jb25zdCBNaWRkZWxSaWdodFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiAzMzRweDtcclxuICAgIG1hcmdpbi1sZWZ0IDogMTE2cHg7XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiAxOTNweDtcclxuICAgIGhlaWdodCA6IDU1cHg7XHJcbiAgICBtYXJnaW4gOiA0N3B4IDAgNTlweCAxMDBweDtcclxuYFxyXG5cclxuY29uc3QgR3JhcGhXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXkgOiBmbGV4O1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiA2N3B4O1xyXG4gICAgbWFyZ2luIDogMCAyMnB4IDAgMDtcclxuYFxyXG5cclxuY29uc3QgR3JhcGhfQnViYmxlID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XHJcbiAgICB3aWR0aCA6IDY3cHg7XHJcblxyXG4gICAgJiA+IHAge1xyXG4gICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wIDogMDtcclxuICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgIGNvbG9yIDogI2ZmN2I3YjtcclxuICAgICAgICBsaW5lLWhlaWdodCA6IDM0cHg7XHJcbiAgICAgICAgd2lkdGggOiA2N3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDgwcHg7XHJcbiAgICB3aWR0aCA6IDI5cHg7XHJcbiAgICBoZWlnaHQgOiAyNzZweDtcclxuICAgIGJvcmRlcjogc29saWQgMS41cHggIzZiNGQ0ZDtcclxuICAgIG1hcmdpbiA6IDQzcHggYXV0byAyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaEZ1bmN0aW9uID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiAjZmY5MDhhO1xyXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXggOiA5OTk7XHJcbiAgICB3aWR0aCA6IDIxcHg7XHJcbiAgICBoZWlnaHQgOiA2NSU7XHJcbiAgICBib3R0b20gOiAzcHg7XHJcbiAgICBsZWZ0IDogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDIwcHggMjBweCA0MHB4IDQwcHg7XHJcbmBcclxuXHJcbmNvbnN0IEdyYXBoU3ViVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC1zaXplIDogMjBweDtcclxuICAgIGNvbG9yIDogIzMzMzMzMztcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==