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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hello; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pudin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pudin.png */ \"./pages/pudin.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/usuario/Desktop/PruebaKLog/klog_test/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Tell Webpack this JS file uses this image\n\n\n\n\nvar appid = '_Jl6gLWuDaAEqEflNWlLMyV2ciicov_SWaZnUdB4lRY';\nvar endpoint = 'https://api.unsplash.com/search/photos';\nfunction Hello() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      jsonPics = _useState2[0],\n      setJsonPics = _useState2[1];\n\n  function constructor() {\n    setQuery('');\n    this.trackQueryValue = this.trackQueryValue.bind(this);\n    this.buscar = this.search.bind(this);\n  }\n\n  function search() {\n    var _this = this;\n\n    console.log(\"Entro a search\");\n    fetch(\"\".concat(endpoint, \"?query=\").concat(query, \"&client_id=\").concat(appid)) // fetch(`https://api.unsplash.com/search/photos?query=laptop&client_id=0BLshedrvRegOba2vyMWUuW3wrqMdWjCubQWpvMWgWI`)\n    .then(function (response) {\n      return response.json();\n    }).then(function (jsonResponse) {\n      console.log(jsonResponse); //Renderizamos:\n\n      var itemsPics = [];\n\n      for (var i = 0; i < jsonResponse.results.length; i++) {\n        console.log(\"entro al renderizadod\");\n        itemsPics.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"table\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"tr\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"td\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n                src: jsonResponse.results[i].urls.thumb\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 31\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 12\n        }, _this));\n      }\n\n      setJsonPics(itemsPics);\n    });\n  }\n\n  function trackQueryValue(ev) {\n    console.log(\"entro a trackQueryValue \");\n    setQuery(ev.target.value);\n    console.log(query);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      onChange: function onChange(e) {\n        return trackQueryValue(e);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      className: \"btnBuscar\",\n      onClick: function onClick() {\n        return search();\n      },\n      children: \" Buscar \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      children: jsonPics\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 12\n  }, this);\n}\n\n_s(Hello, \"SZuOnxTz/ucEhwmxxNkg7Suma8E=\");\n\n_c = Hello;\n\nvar _c;\n\n$RefreshReg$(_c, \"Hello\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7R0E3RXFCSDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgaW1hZ2UxIGZyb20gJy4vcHVkaW4ucG5nJzsgLy8gVGVsbCBXZWJwYWNrIHRoaXMgSlMgZmlsZSB1c2VzIHRoaXMgaW1hZ2VcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgYXBwaWQ9J19KbDZnTFd1RGFBRXFFZmxOV2xMTXlWMmNpaWNvdl9TV2FablVkQjRsUlknXG5jb25zdCBlbmRwb2ludCA9ICdodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3RvcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxsbygpe1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2pzb25QaWNzLCBzZXRKc29uUGljc10gPSB1c2VTdGF0ZShbXSk7XG5cblxuZnVuY3Rpb24gY29uc3RydWN0b3IoKXtcblxuICBzZXRRdWVyeSgnJylcbiAgdGhpcy50cmFja1F1ZXJ5VmFsdWU9dGhpcy50cmFja1F1ZXJ5VmFsdWUuYmluZCh0aGlzKTtcbiB0aGlzLmJ1c2NhciA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcylcblxufVxuXG5cbiBmdW5jdGlvbiAgc2VhcmNoKCl7XG4gICAgY29uc29sZS5sb2coXCJFbnRybyBhIHNlYXJjaFwiKVxuXG4gICAgZmV0Y2goYCR7ZW5kcG9pbnR9P3F1ZXJ5PSR7cXVlcnl9JmNsaWVudF9pZD0ke2FwcGlkfWApXG4gICAgLy8gZmV0Y2goYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9zZWFyY2gvcGhvdG9zP3F1ZXJ5PWxhcHRvcCZjbGllbnRfaWQ9MEJMc2hlZHJ2UmVnT2JhMnZ5TVdVdVczd3JxTWRXakN1YlFXcHZNV2dXSWApXG4gICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICB9KS50aGVuKGpzb25SZXNwb25zZT0+e1xuICAgICAgY29uc29sZS5sb2coanNvblJlc3BvbnNlKVxuICAgICAgICAgICAvL1JlbmRlcml6YW1vczpcbiAgICAgICAgICAgbGV0IGl0ZW1zUGljcyA9IFtdXG4gICAgICAgICAgZm9yIChsZXQgaT0wO2k8anNvblJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoO2krKykge1xuICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudHJvIGFsIHJlbmRlcml6YWRvZFwiKVxuICAgICAgICAgICAgaXRlbXNQaWNzLnB1c2goXG4gICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2pzb25SZXNwb25zZS5yZXN1bHRzW2ldLnVybHMudGh1bWJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICApXG5cbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0SnNvblBpY3MoaXRlbXNQaWNzKVxuICAgIH0pXG5cbiAgICBcblxuXG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUXVlcnlWYWx1ZShldil7XG4gICAgIGNvbnNvbGUubG9nKFwiZW50cm8gYSB0cmFja1F1ZXJ5VmFsdWUgXCIpXG4gICAgIHNldFF1ZXJ5KGV2LnRhcmdldC52YWx1ZSkgIFxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5KVxuICB9XG5cblxuXG5cbiAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiB0cmFja1F1ZXJ5VmFsdWUoZSl9IC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQnVzY2FyXCIgb25DbGljaz17KCk9PnNlYXJjaCgpfT4gQnVzY2FyIDwvYnV0dG9uPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICB7anNvblBpY3N9XG4gICAgICAgIDwvZm9ybT5cblxuXG5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICApXG5cbiAgICAgXG5cblxuXG5cblxuXG5cbiAgfVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIkNvbnRhaW5lciIsIkdyaWQiLCJtYWtlU3R5bGVzIiwiaW1hZ2UxIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImltYWdlIiwiYXBwaWQiLCJlbmRwb2ludCIsIkhlbGxvIiwicXVlcnkiLCJzZXRRdWVyeSIsImpzb25QaWNzIiwic2V0SnNvblBpY3MiLCJjb25zdHJ1Y3RvciIsInRyYWNrUXVlcnlWYWx1ZSIsImJpbmQiLCJidXNjYXIiLCJzZWFyY2giLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwianNvblJlc3BvbnNlIiwiaXRlbXNQaWNzIiwiaSIsInJlc3VsdHMiLCJsZW5ndGgiLCJwdXNoIiwidXJscyIsInRodW1iIiwiZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});