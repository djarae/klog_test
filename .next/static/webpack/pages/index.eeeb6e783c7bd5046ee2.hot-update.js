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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pudin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pudin.png */ \"./pages/pudin.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/usuario/Desktop/PruebaKLog/klog_test/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Tell Webpack this JS file uses this image\n\n\n\n\nvar appid = '_Jl6gLWuDaAEqEflNWlLMyV2ciicov_SWaZnUdB4lRY';\nvar endpoint = 'https://api.unsplash.com/search/photos';\n\nfunction Hello() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      query = _useState[0],\n      setQuery = _useState[1];\n\n  var itemsPics = [];\n\n  function constructor() {\n    setQuery('');\n    this.trackQueryValue = this.trackQueryValue.bind(this);\n    this.buscar = this.search.bind(this);\n  }\n\n  function search() {\n    var _this = this;\n\n    console.log(\"Entro a search\");\n    fetch(\"\".concat(endpoint, \"?query=\").concat(query, \"&client_id=\").concat(appid)) // fetch(`https://api.unsplash.com/search/photos?query=laptop&client_id=0BLshedrvRegOba2vyMWUuW3wrqMdWjCubQWpvMWgWI`)\n    .then(function (response) {\n      return response.json();\n    }).then(function (jsonResponse) {\n      console.log(jsonResponse); //Renderizamos:\n\n      for (var i = 0; i < jsonResponse.results.length; i++) {\n        console.log(\"entro al renderizadod\");\n        itemsPics.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"table\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"tr\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"td\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n                src: jsonResponse.results[i].urls.thumb\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 31\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n                children: \"AAA \"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 31\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 12\n        }, _this));\n      }\n    });\n  }\n\n  function trackQueryValue(ev) {\n    console.log(\"entro a trackQueryValue \");\n    setQuery(ev.target.value);\n    console.log(query);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      onChange: function onChange(e) {\n        return trackQueryValue(e);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      onClick: function onClick() {\n        return search();\n      },\n      children: \" Buscar \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      children: itemsPics\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 12\n  }, this);\n}\n\n_s(Hello, \"qO/HZodsWTfJhuzZtdaxiosei2U=\");\n\n_c = Hello;\n\nvar _c;\n\n$RefreshReg$(_c, \"Hello\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGltYWdlMSBmcm9tICcuL3B1ZGluLnBuZyc7IC8vIFRlbGwgV2VicGFjayB0aGlzIEpTIGZpbGUgdXNlcyB0aGlzIGltYWdlXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IGFwcGlkPSdfSmw2Z0xXdURhQUVxRWZsTldsTE15VjJjaWljb3ZfU1dhWm5VZEI0bFJZJ1xuY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3MnXG5cblxuZnVuY3Rpb24gSGVsbG8oKXtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGxldCBpdGVtc1BpY3MgPSBbXVxuXG5cblxuZnVuY3Rpb24gY29uc3RydWN0b3IoKXtcblxuICBzZXRRdWVyeSgnJylcbiAgdGhpcy50cmFja1F1ZXJ5VmFsdWU9dGhpcy50cmFja1F1ZXJ5VmFsdWUuYmluZCh0aGlzKTtcbiB0aGlzLmJ1c2NhciA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcylcblxufVxuXG5cbiBmdW5jdGlvbiAgc2VhcmNoKCl7XG4gICAgY29uc29sZS5sb2coXCJFbnRybyBhIHNlYXJjaFwiKVxuXG4gICAgZmV0Y2goYCR7ZW5kcG9pbnR9P3F1ZXJ5PSR7cXVlcnl9JmNsaWVudF9pZD0ke2FwcGlkfWApXG4gICAgLy8gZmV0Y2goYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9zZWFyY2gvcGhvdG9zP3F1ZXJ5PWxhcHRvcCZjbGllbnRfaWQ9MEJMc2hlZHJ2UmVnT2JhMnZ5TVdVdVczd3JxTWRXakN1YlFXcHZNV2dXSWApXG4gICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICB9KS50aGVuKGpzb25SZXNwb25zZT0+e1xuICAgICAgY29uc29sZS5sb2coanNvblJlc3BvbnNlKVxuICAgICAgICAgICAvL1JlbmRlcml6YW1vczpcbiAgICAgICAgICBmb3IgKGxldCBpPTA7aTxqc29uUmVzcG9uc2UucmVzdWx0cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50cm8gYWwgcmVuZGVyaXphZG9kXCIpXG4gICAgICAgICAgICBpdGVtc1BpY3MucHVzaChcbiAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17anNvblJlc3BvbnNlLnJlc3VsdHNbaV0udXJscy50aHVtYn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5BQUEgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgfVxuXG5cblxuXG4gICAgfSlcblxuICAgIFxuXG5cblxuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tRdWVyeVZhbHVlKGV2KXtcbiAgICAgY29uc29sZS5sb2coXCJlbnRybyBhIHRyYWNrUXVlcnlWYWx1ZSBcIilcbiAgICAgc2V0UXVlcnkoZXYudGFyZ2V0LnZhbHVlKSAgXG4gICAgY29uc29sZS5sb2cocXVlcnkpXG4gIH1cblxuXG5cblxuICAgIHJldHVybig8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHRyYWNrUXVlcnlWYWx1ZShlKX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2VhcmNoKCl9PiBCdXNjYXIgPC9idXR0b24+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIHtpdGVtc1BpY3N9XG4gICAgICAgIDwvZm9ybT5cblxuXG5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICApXG5cbiAgICAgXG5cblxuXG5cblxuXG5cbiAgfVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIkNvbnRhaW5lciIsIkdyaWQiLCJtYWtlU3R5bGVzIiwiaW1hZ2UxIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImltYWdlIiwiYXBwaWQiLCJlbmRwb2ludCIsIkhlbGxvIiwicXVlcnkiLCJzZXRRdWVyeSIsIml0ZW1zUGljcyIsImNvbnN0cnVjdG9yIiwidHJhY2tRdWVyeVZhbHVlIiwiYmluZCIsImJ1c2NhciIsInNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJqc29uUmVzcG9uc2UiLCJpIiwicmVzdWx0cyIsImxlbmd0aCIsInB1c2giLCJ1cmxzIiwidGh1bWIiLCJldiIsInRhcmdldCIsInZhbHVlIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});