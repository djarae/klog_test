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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _pudin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pudin.png */ \"./pages/pudin.png\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/usuario/Desktop/PruebaKLog/klog_test/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Tell Webpack this JS file uses this image\n\n\nfunction Home() {\n  _s();\n\n  var appid = '0BLshedrvRegOba2vyMWUuW3wrqMdWjCubQWpvMWgWI';\n  var endpoint = 'https://api.unsplash.com/search/photos';\n  var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)({\n    button: {\n      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',\n      border: 0,\n      borderRadius: 3,\n      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',\n      color: 'white',\n      height: 48,\n      padding: '0 30px'\n    },\n    grid: {\n      background: 'linear-gradient(45deg, #552586 30%, #804FB3 90%)',\n      height: \"1000px\",\n      width: \"100%\"\n    },\n    container: {\n      height: \"400px\",\n      width: \"50%\"\n    }\n  });\n  var classes = useStyles();\n\n  function constructor() {\n    this.query = '';\n    this.trackQueryValue = this.trackQueryValue.bind(this);\n    this.buscar = this.search.bind(this);\n  }\n\n  function buscar() {\n    fetch(\"\".concat(endpoint, \"?query=\").concat(this.query, \"&client_id=\").concat(clientId)).then(function (response) {\n      return response.json();\n    }).then(function (jsonResponse) {\n      console.log(jsonResponse);\n    });\n  }\n\n  function trackQueryValue(ev) {\n    this.query = ev.target.value;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.default, {\n    container: true,\n    spacing: 250,\n    className: classes.grid,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {\n      className: classes.container,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n        className: \"previewForm\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"imageFilterTxt\",\n          value: this.state.value,\n          onChange: trackQueryValue()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          name: \"button\",\n          onClick: this.buscar,\n          children: \"Buscar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 19\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Home, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", true);\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FDa0M7OztBQUVuQixTQUFTTyxJQUFULEdBQWdCO0FBQUE7O0FBRzdCLE1BQU1DLEtBQUssR0FBQyw2Q0FBWjtBQUNBLE1BQU1DLFFBQVEsR0FBRyx3Q0FBakI7QUFHQSxNQUFNQyxTQUFTLEdBQUdMLG9FQUFVLENBQUM7QUFDM0JNLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxVQUFVLEVBQUUsa0RBRE47QUFFTkMsTUFBQUEsTUFBTSxFQUFFLENBRkY7QUFHTkMsTUFBQUEsWUFBWSxFQUFFLENBSFI7QUFJTkMsTUFBQUEsU0FBUyxFQUFFLHVDQUpMO0FBS05DLE1BQUFBLEtBQUssRUFBRSxPQUxEO0FBTU5DLE1BQUFBLE1BQU0sRUFBRSxFQU5GO0FBT05DLE1BQUFBLE9BQU8sRUFBRTtBQVBILEtBRG1CO0FBVTNCQyxJQUFBQSxJQUFJLEVBQUU7QUFDSlAsTUFBQUEsVUFBVSxFQUFFLGtEQURSO0FBRUpLLE1BQUFBLE1BQU0sRUFBTSxRQUZSO0FBR0pHLE1BQUFBLEtBQUssRUFBTztBQUhSLEtBVnFCO0FBZ0IzQkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1RKLE1BQUFBLE1BQU0sRUFBTSxPQURIO0FBRVRHLE1BQUFBLEtBQUssRUFBTztBQUZIO0FBaEJnQixHQUFELENBQTVCO0FBc0JBLE1BQU1FLE9BQU8sR0FBVVosU0FBUyxFQUFoQzs7QUFHQSxXQUFTYSxXQUFULEdBQXNCO0FBQ3BCLFNBQUtDLEtBQUwsR0FBVyxFQUFYO0FBQ0EsU0FBS0MsZUFBTCxHQUFxQixLQUFLQSxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUFyQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxNQUFMLENBQVlGLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNEOztBQUVELFdBQVNDLE1BQVQsR0FBaUI7QUFFZkUsSUFBQUEsS0FBSyxXQUFJcEIsUUFBSixvQkFBc0IsS0FBS2UsS0FBM0Isd0JBQThDTSxRQUE5QyxFQUFMLENBQ0NDLElBREQsQ0FDTSxVQUFBQyxRQUFRLEVBQUU7QUFDZCxhQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUVELEtBSkQsRUFJR0YsSUFKSCxDQUlRLFVBQUFHLFlBQVksRUFBRTtBQUNwQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFlBQVo7QUFDRCxLQU5EO0FBT0Q7O0FBRUQsV0FBU1QsZUFBVCxDQUF5QlksRUFBekIsRUFBNEI7QUFDMUIsU0FBS2IsS0FBTCxHQUFhYSxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsS0FBdkI7QUFDRDs7QUFFRCxzQkFDTyw4REFBQywyREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsR0FBekI7QUFBOEIsYUFBUyxFQUFFakIsT0FBTyxDQUFDSCxJQUFqRDtBQUFBLDJCQUNLLDhEQUFDLHdEQUFEO0FBQVcsZUFBUyxFQUFFRyxPQUFPLENBQUNELFNBQTlCO0FBQUEsNkJBQ0k7QUFBTSxpQkFBUyxFQUFDLGFBQWhCO0FBQUEsZ0NBQ007QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFJLEVBQUMsZ0JBQXhCO0FBQTBDLGVBQUssRUFBRSxLQUFLbUIsS0FBTCxDQUFXRCxLQUE1RDtBQUFtRSxrQkFBUSxFQUFFZCxlQUFlO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRE4sZUFFTTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZOLGVBR007QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUF3QixpQkFBTyxFQUFFLEtBQUtFLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFA7QUFtQkQ7O0dBeEV1QnBCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBpbWFnZTEgZnJvbSAnLi9wdWRpbi5wbmcnOyAvLyBUZWxsIFdlYnBhY2sgdGhpcyBKUyBmaWxlIHVzZXMgdGhpcyBpbWFnZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgY29uc3QgYXBwaWQ9JzBCTHNoZWRydlJlZ09iYTJ2eU1XVXVXM3dycU1kV2pDdWJRV3B2TVdnV0knXG4gIGNvbnN0IGVuZHBvaW50ID0gJ2h0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9zZWFyY2gvcGhvdG9zJ1xuXG5cbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgYnV0dG9uOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJyxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlclJhZGl1czogMyxcbiAgICAgIGJveFNoYWRvdzogJzAgM3B4IDVweCAycHggcmdiYSgyNTUsIDEwNSwgMTM1LCAuMyknLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBoZWlnaHQ6IDQ4LFxuICAgICAgcGFkZGluZzogJzAgMzBweCcsXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNTUyNTg2IDMwJSwgIzgwNEZCMyA5MCUpJyxcbiAgICAgIGhlaWdodCAgICA6IFwiMTAwMHB4XCIsXG4gICAgICB3aWR0aCAgICAgOiBcIjEwMCVcIixcblxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQgICAgOiBcIjQwMHB4XCIsXG4gICAgICB3aWR0aCAgICAgOiBcIjUwJVwiXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjbGFzc2VzICAgICAgICA9IHVzZVN0eWxlcygpO1xuXG5cbiAgZnVuY3Rpb24gY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnF1ZXJ5PScnO1xuICAgIHRoaXMudHJhY2tRdWVyeVZhbHVlPXRoaXMudHJhY2tRdWVyeVZhbHVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5idXNjYXIgPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpXG4gIH1cblxuICBmdW5jdGlvbiBidXNjYXIoKXtcblxuICAgIGZldGNoKGAke2VuZHBvaW50fT9xdWVyeT0ke3RoaXMucXVlcnl9JmNsaWVudF9pZD0ke2NsaWVudElkfWApXG4gICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIFxuICAgIH0pLnRoZW4oanNvblJlc3BvbnNlPT57XG4gICAgICBjb25zb2xlLmxvZyhqc29uUmVzcG9uc2UpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUXVlcnlWYWx1ZShldil7XG4gICAgdGhpcy5xdWVyeSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MjUwfSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XG4gICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gID5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInByZXZpZXdGb3JtXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltYWdlRmlsdGVyVHh0XCIgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dHJhY2tRdWVyeVZhbHVlKCl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJidXR0b25cIiAgIG9uQ2xpY2s9e3RoaXMuYnVzY2FyfT5CdXNjYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybSA+XG4gICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgey8qIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gID5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInByZXZpZXdGb3JtXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FyZ2FyIGltYWdlbmVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlMX0gIC8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0gPlxuICAgICAgICAgICAgIDwvQ29udGFpbmVyPiAqL31cbiAgICAgICAgPC9HcmlkPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiQ29udGFpbmVyIiwiR3JpZCIsIm1ha2VTdHlsZXMiLCJpbWFnZTEiLCJIb21lIiwiYXBwaWQiLCJlbmRwb2ludCIsInVzZVN0eWxlcyIsImJ1dHRvbiIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJjb2xvciIsImhlaWdodCIsInBhZGRpbmciLCJncmlkIiwid2lkdGgiLCJjb250YWluZXIiLCJjbGFzc2VzIiwiY29uc3RydWN0b3IiLCJxdWVyeSIsInRyYWNrUXVlcnlWYWx1ZSIsImJpbmQiLCJidXNjYXIiLCJzZWFyY2giLCJmZXRjaCIsImNsaWVudElkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImpzb25SZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJldiIsInRhcmdldCIsInZhbHVlIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});