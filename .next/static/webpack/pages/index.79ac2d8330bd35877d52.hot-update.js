"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _pudin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pudin.png */ \"./pages/pudin.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/usuario/Desktop/PruebaKLog/klog_test/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Tell Webpack this JS file uses this image\n\n\nfunction Home() {\n  _s();\n\n  var appid = '0BLshedrvRegOba2vyMWUuW3wrqMdWjCubQWpvMWgWI';\n  var endpoint = 'https://api.unsplash.com/search/photos';\n  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)({\n    button: {\n      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',\n      border: 0,\n      borderRadius: 3,\n      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',\n      color: 'white',\n      height: 48,\n      padding: '0 30px'\n    },\n    grid: {\n      background: 'linear-gradient(45deg, #552586 30%, #804FB3 90%)',\n      height: \"1000px\",\n      width: \"100%\"\n    },\n    container: {\n      height: \"400px\",\n      width: \"50%\"\n    }\n  });\n  var classes = useStyles();\n  var query = '';\n  ttrackQueryValue = trackQueryValue.bind(this);\n  buscar = this.buscar.bind(this); // // function constructor(){\n  // //   query='';\n  // //   trackQueryValue=trackQueryValue.bind(this);\n  // //   buscar = search.bind(this)\n  // // }\n\n  function buscar() {\n    fetch(\"\".concat(endpoint, \"?query=\").concat(query, \"&client_id=\").concat(clientId)).then(function (response) {\n      return response.json();\n    }).then(function (jsonResponse) {\n      console.log(jsonResponse);\n    });\n  }\n\n  function trackQueryValue(ev) {\n    console.log(\"entro\");\n    query = ev.target.value;\n    console.log(\"query vale \");\n    console.log(query);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n    container: true,\n    spacing: 250,\n    className: classes.grid,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {\n      className: classes.container,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n        className: \"previewForm\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"imageFilterTxt\",\n          onChange: trackQueryValue\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          name: \"button\",\n          onClick: buscar,\n          children: \"Buscar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 19\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Home, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", true);\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsVUFEUDtBQW1CRDs7R0E3RXVCcEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGltYWdlMSBmcm9tICcuL3B1ZGluLnBuZyc7IC8vIFRlbGwgV2VicGFjayB0aGlzIEpTIGZpbGUgdXNlcyB0aGlzIGltYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cblxuICBjb25zdCBhcHBpZD0nMEJMc2hlZHJ2UmVnT2JhMnZ5TVdVdVczd3JxTWRXakN1YlFXcHZNV2dXSSdcbiAgY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3MnXG5cblxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICBidXR0b246IHtcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRTZCOEIgMzAlLCAjRkY4RTUzIDkwJSknLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAzLFxuICAgICAgYm94U2hhZG93OiAnMCAzcHggNXB4IDJweCByZ2JhKDI1NSwgMTA1LCAxMzUsIC4zKScsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGhlaWdodDogNDgsXG4gICAgICBwYWRkaW5nOiAnMCAzMHB4JyxcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1NTI1ODYgMzAlLCAjODA0RkIzIDkwJSknLFxuICAgICAgaGVpZ2h0ICAgIDogXCIxMDAwcHhcIixcbiAgICAgIHdpZHRoICAgICA6IFwiMTAwJVwiLFxuXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodCAgICA6IFwiNDAwcHhcIixcbiAgICAgIHdpZHRoICAgICA6IFwiNTAlXCJcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgICAgICAgID0gdXNlU3R5bGVzKCk7XG4gbGV0ICBxdWVyeT0nJztcbiB0dHJhY2tRdWVyeVZhbHVlPXRyYWNrUXVlcnlWYWx1ZS5iaW5kKHRoaXMpO1xuIGJ1c2NhciA9IHRoaXMuYnVzY2FyLmJpbmQodGhpcylcblxuICAvLyAvLyBmdW5jdGlvbiBjb25zdHJ1Y3Rvcigpe1xuICAvLyAvLyAgIHF1ZXJ5PScnO1xuICAvLyAvLyAgIHRyYWNrUXVlcnlWYWx1ZT10cmFja1F1ZXJ5VmFsdWUuYmluZCh0aGlzKTtcbiAgLy8gLy8gICBidXNjYXIgPSBzZWFyY2guYmluZCh0aGlzKVxuICAvLyAvLyB9XG5cbiAgZnVuY3Rpb24gYnVzY2FyKCl7XG5cbiAgICBmZXRjaChgJHtlbmRwb2ludH0/cXVlcnk9JHtxdWVyeX0mY2xpZW50X2lkPSR7Y2xpZW50SWR9YClcbiAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgXG4gICAgfSkudGhlbihqc29uUmVzcG9uc2U9PntcbiAgICAgIGNvbnNvbGUubG9nKGpzb25SZXNwb25zZSlcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tRdWVyeVZhbHVlKGV2KXtcbiAgICBjb25zb2xlLmxvZyhcImVudHJvXCIpXG4gICAgcXVlcnkgPSBldi50YXJnZXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJxdWVyeSB2YWxlIFwiKVxuICAgIGNvbnNvbGUubG9nKCBxdWVyeSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MjUwfSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gID5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInByZXZpZXdGb3JtXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltYWdlRmlsdGVyVHh0XCIgIG9uQ2hhbmdlPXt0cmFja1F1ZXJ5VmFsdWV9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJidXR0b25cIiAgIG9uQ2xpY2s9e2J1c2Nhcn0+QnVzY2FyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0gPlxuICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgIHsvKiA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9ICA+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwcmV2aWV3Rm9ybVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhcmdhciBpbWFnZW5lc1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZTF9ICAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtID5cbiAgICAgICAgICAgICA8L0NvbnRhaW5lcj4gKi99XG4gICAgICAgIDwvR3JpZD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIkNvbnRhaW5lciIsIkdyaWQiLCJtYWtlU3R5bGVzIiwiaW1hZ2UxIiwiSG9tZSIsImFwcGlkIiwiZW5kcG9pbnQiLCJ1c2VTdHlsZXMiLCJidXR0b24iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiY29sb3IiLCJoZWlnaHQiLCJwYWRkaW5nIiwiZ3JpZCIsIndpZHRoIiwiY29udGFpbmVyIiwiY2xhc3NlcyIsInF1ZXJ5IiwidHRyYWNrUXVlcnlWYWx1ZSIsInRyYWNrUXVlcnlWYWx1ZSIsImJpbmQiLCJidXNjYXIiLCJmZXRjaCIsImNsaWVudElkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImpzb25SZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJldiIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});