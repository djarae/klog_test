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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _pudin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pudin.png */ \"./pages/pudin.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/usuario/Desktop/PruebaKLog/klog_test/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Tell Webpack this JS file uses this image\n\n\nfunction Home() {\n  _s();\n\n  var appid = '0BLshedrvRegOba2vyMWUuW3wrqMdWjCubQWpvMWgWI';\n  var endpoint = 'https://api.unsplash.com/search/photos';\n  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)({\n    button: {\n      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',\n      border: 0,\n      borderRadius: 3,\n      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',\n      color: 'white',\n      height: 48,\n      padding: '0 30px'\n    },\n    grid: {\n      background: 'linear-gradient(45deg, #552586 30%, #804FB3 90%)',\n      height: \"1000px\",\n      width: \"100%\"\n    },\n    container: {\n      height: \"400px\",\n      width: \"50%\"\n    }\n  });\n  var classes = useStyles();\n  var query = '';\n  trackQueryValue = trackQueryValue.bind(this);\n  buscar = busacr.bind(this); // // function constructor(){\n  // //   query='';\n  // //   trackQueryValue=trackQueryValue.bind(this);\n  // //   buscar = search.bind(this)\n  // // }\n\n  function buscar() {\n    fetch(\"\".concat(endpoint, \"?query=\").concat(query, \"&client_id=\").concat(clientId)).then(function (response) {\n      return response.json();\n    }).then(function (jsonResponse) {\n      console.log(jsonResponse);\n    });\n  }\n\n  function trackQueryValue(ev) {\n    console.log(\"entro\");\n    query = ev.target.value;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n    container: true,\n    spacing: 250,\n    className: classes.grid,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {\n      className: classes.container,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n        className: \"previewForm\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"imageFilterTxt\",\n          onChange: trackQueryValue\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          name: \"button\",\n          onClick: buscar,\n          children: \"Buscar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 19\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Home, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", true);\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgaW1hZ2UxIGZyb20gJy4vcHVkaW4ucG5nJzsgLy8gVGVsbCBXZWJwYWNrIHRoaXMgSlMgZmlsZSB1c2VzIHRoaXMgaW1hZ2VcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG4gIGNvbnN0IGFwcGlkPScwQkxzaGVkcnZSZWdPYmEydnlNV1V1VzN3cnFNZFdqQ3ViUVdwdk1XZ1dJJ1xuICBjb25zdCBlbmRwb2ludCA9ICdodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3RvcydcblxuXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIGJ1dHRvbjoge1xuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZFNkI4QiAzMCUsICNGRjhFNTMgOTAlKScsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6IDMsXG4gICAgICBib3hTaGFkb3c6ICcwIDNweCA1cHggMnB4IHJnYmEoMjU1LCAxMDUsIDEzNSwgLjMpJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgIHBhZGRpbmc6ICcwIDMwcHgnLFxuICAgIH0sXG4gICAgZ3JpZDoge1xuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywgIzU1MjU4NiAzMCUsICM4MDRGQjMgOTAlKScsXG4gICAgICBoZWlnaHQgICAgOiBcIjEwMDBweFwiLFxuICAgICAgd2lkdGggICAgIDogXCIxMDAlXCIsXG5cbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0ICAgIDogXCI0MDBweFwiLFxuICAgICAgd2lkdGggICAgIDogXCI1MCVcIlxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY2xhc3NlcyAgICAgICAgPSB1c2VTdHlsZXMoKTtcbiBsZXQgIHF1ZXJ5PScnO1xuIHRyYWNrUXVlcnlWYWx1ZT10cmFja1F1ZXJ5VmFsdWUuYmluZCh0aGlzKTtcbiBidXNjYXIgPSBidXNhY3IuYmluZCh0aGlzKVxuXG4gIC8vIC8vIGZ1bmN0aW9uIGNvbnN0cnVjdG9yKCl7XG4gIC8vIC8vICAgcXVlcnk9Jyc7XG4gIC8vIC8vICAgdHJhY2tRdWVyeVZhbHVlPXRyYWNrUXVlcnlWYWx1ZS5iaW5kKHRoaXMpO1xuICAvLyAvLyAgIGJ1c2NhciA9IHNlYXJjaC5iaW5kKHRoaXMpXG4gIC8vIC8vIH1cblxuICBmdW5jdGlvbiBidXNjYXIoKXtcblxuICAgIGZldGNoKGAke2VuZHBvaW50fT9xdWVyeT0ke3F1ZXJ5fSZjbGllbnRfaWQ9JHtjbGllbnRJZH1gKVxuICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICBcbiAgICB9KS50aGVuKGpzb25SZXNwb25zZT0+e1xuICAgICAgY29uc29sZS5sb2coanNvblJlc3BvbnNlKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1F1ZXJ5VmFsdWUoZXYpe1xuICAgIGNvbnNvbGUubG9nKFwiZW50cm9cIilcbiAgICBxdWVyeSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MjUwfSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gID5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInByZXZpZXdGb3JtXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltYWdlRmlsdGVyVHh0XCIgIG9uQ2hhbmdlPXt0cmFja1F1ZXJ5VmFsdWV9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJidXR0b25cIiAgIG9uQ2xpY2s9e2J1c2Nhcn0+QnVzY2FyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0gPlxuICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgIHsvKiA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9ICA+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwcmV2aWV3Rm9ybVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhcmdhciBpbWFnZW5lc1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZTF9ICAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtID5cbiAgICAgICAgICAgICA8L0NvbnRhaW5lcj4gKi99XG4gICAgICAgIDwvR3JpZD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIkNvbnRhaW5lciIsIkdyaWQiLCJtYWtlU3R5bGVzIiwiaW1hZ2UxIiwiSG9tZSIsImFwcGlkIiwiZW5kcG9pbnQiLCJ1c2VTdHlsZXMiLCJidXR0b24iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiY29sb3IiLCJoZWlnaHQiLCJwYWRkaW5nIiwiZ3JpZCIsIndpZHRoIiwiY29udGFpbmVyIiwiY2xhc3NlcyIsInF1ZXJ5IiwidHJhY2tRdWVyeVZhbHVlIiwiYmluZCIsImJ1c2NhciIsImJ1c2FjciIsImZldGNoIiwiY2xpZW50SWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwianNvblJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImV2IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});