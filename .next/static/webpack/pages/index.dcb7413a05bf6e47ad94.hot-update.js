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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hello; }\n/* harmony export */ });\n/* harmony import */ var _Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _pudin_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pudin.png */ \"./pages/pudin.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/usuario/Desktop/PruebaKLog/klog_test/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n // Tell Webpack this JS file uses this image\n\n\n\nvar appid = '_Jl6gLWuDaAEqEflNWlLMyV2ciicov_SWaZnUdB4lRY';\nvar endpoint = 'https://api.unsplash.com/search/photos';\n\nvar _useState = useState(''),\n    _useState2 = (0,_Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__.default)(_useState, 2),\n    query = _useState2[0],\n    setQuery = _useState2[1];\n\nvar Hello = /*#__PURE__*/function (_React$Component) {\n  (0,_Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Hello, _React$Component);\n\n  var _super = _createSuper(Hello);\n\n  function Hello(props) {\n    var _this;\n\n    (0,_Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Hello);\n\n    _this = _super.call(this, props);\n    setQuery('');\n    _this.trackQueryValue = _this.trackQueryValue.bind((0,_Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));\n    _this.buscar = _this.search.bind((0,_Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));\n    return _this;\n  }\n\n  (0,_Users_usuario_Desktop_PruebaKLog_klog_test_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Hello, [{\n    key: \"search\",\n    value: function search() {\n      console.log(\"query value\");\n      console.log(query);\n      fetch(\"\".concat(endpoint, \"?query=\").concat(query, \"&client_id=\").concat(appid)) // fetch(`https://api.unsplash.com/search/photos?query=laptop&client_id=0BLshedrvRegOba2vyMWUuW3wrqMdWjCubQWpvMWgWI`)\n      .then(function (response) {\n        return response.json();\n      }).then(function (jsonResponse) {\n        console.log(jsonResponse);\n      });\n    }\n  }, {\n    key: \"trackQueryValue\",\n    value: function trackQueryValue(ev) {\n      console.log(\"entro \");\n      setQuery(ev.target.value);\n      console.log(query);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"input\", {\n          type: \"text\",\n          onChange: this.trackQueryValue\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"button\", {\n          onClick: this.search,\n          children: \" Buscar \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 12\n      }, this);\n    }\n  }]);\n\n  return Hello;\n}((react__WEBPACK_IMPORTED_MODULE_10___default().Component));\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBQ2tDOztBQUNsQzs7QUFFQSxJQUFNUSxLQUFLLEdBQUMsNkNBQVo7QUFDQSxJQUFNQyxRQUFRLEdBQUcsd0NBQWpCOztBQUNBLGdCQUEwQkMsUUFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQTtBQUFBLElBQU9DLEtBQVA7QUFBQSxJQUFjQyxRQUFkOztJQUdxQkM7Ozs7O0FBRXJCLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLDhCQUFNQSxLQUFOO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQyxFQUFELENBQVI7QUFDQSxVQUFLRyxlQUFMLEdBQXFCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLDBKQUFyQjtBQUNELFVBQUtDLE1BQUwsR0FBYyxNQUFLQyxNQUFMLENBQVlGLElBQVosMEpBQWQ7QUFKaUI7QUFNakI7Ozs7V0FHQyxrQkFBUTtBQUNORyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxLQUFaO0FBRUFVLE1BQUFBLEtBQUssV0FBSVosUUFBSixvQkFBc0JFLEtBQXRCLHdCQUF5Q0gsS0FBekMsRUFBTCxDQUNBO0FBREEsT0FFQ2MsSUFGRCxDQUVNLFVBQUFDLFFBQVEsRUFBRTtBQUNkLGVBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsT0FKRCxFQUlHRixJQUpILENBSVEsVUFBQUcsWUFBWSxFQUFFO0FBQ3BCTixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssWUFBWjtBQUNELE9BTkQ7QUFPRDs7O1dBRUEseUJBQWdCQyxFQUFoQixFQUFtQjtBQUNqQlAsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBUixNQUFBQSxRQUFRLENBQUNjLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxLQUFYLENBQVI7QUFDRFQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULEtBQVo7QUFDRDs7O1dBR0Qsa0JBQVE7QUFFTiwwQkFBTztBQUFBLGdDQUNIO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQVEsRUFBRSxLQUFLSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURHLGVBRUg7QUFBUSxpQkFBTyxFQUFFLEtBQUtHLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBS0M7Ozs7RUF0QzhCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBpbWFnZTEgZnJvbSAnLi9wdWRpbi5wbmcnOyAvLyBUZWxsIFdlYnBhY2sgdGhpcyBKUyBmaWxlIHVzZXMgdGhpcyBpbWFnZVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYXBwaWQ9J19KbDZnTFd1RGFBRXFFZmxOV2xMTXlWMmNpaWNvdl9TV2FablVkQjRsUlknXG5jb25zdCBlbmRwb2ludCA9ICdodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3RvcydcbmNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuICBzdXBlcihwcm9wcylcbiAgc2V0UXVlcnkoJycpXG4gIHRoaXMudHJhY2tRdWVyeVZhbHVlPXRoaXMudHJhY2tRdWVyeVZhbHVlLmJpbmQodGhpcyk7XG4gdGhpcy5idXNjYXIgPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpXG5cbn1cblxuXG4gIHNlYXJjaCgpe1xuICAgIGNvbnNvbGUubG9nKFwicXVlcnkgdmFsdWVcIilcbiAgICBjb25zb2xlLmxvZyhxdWVyeSlcblxuICAgIGZldGNoKGAke2VuZHBvaW50fT9xdWVyeT0ke3F1ZXJ5fSZjbGllbnRfaWQ9JHthcHBpZH1gKVxuICAgIC8vIGZldGNoKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvcz9xdWVyeT1sYXB0b3AmY2xpZW50X2lkPTBCTHNoZWRydlJlZ09iYTJ2eU1XVXVXM3dycU1kV2pDdWJRV3B2TVdnV0lgKVxuICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgfSkudGhlbihqc29uUmVzcG9uc2U9PntcbiAgICAgIGNvbnNvbGUubG9nKGpzb25SZXNwb25zZSlcbiAgICB9KVxuICB9XG5cbiAgIHRyYWNrUXVlcnlWYWx1ZShldil7XG4gICAgIGNvbnNvbGUubG9nKFwiZW50cm8gXCIpXG4gICAgIHNldFF1ZXJ5KGV2LnRhcmdldC52YWx1ZSkgIFxuICAgIGNvbnNvbGUubG9nKHF1ZXJ5KVxuICB9XG5cblxuICByZW5kZXIoKXtcblxuICAgIHJldHVybig8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy50cmFja1F1ZXJ5VmFsdWV9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2h9PiBCdXNjYXIgPC9idXR0b24+XG4gICAgICA8L2Rpdj4pXG4gICAgICAgICBcbiAgICB9XG5cblxuXG5cblxuXG5cbiAgfVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIkNvbnRhaW5lciIsIkdyaWQiLCJtYWtlU3R5bGVzIiwiaW1hZ2UxIiwiUmVhY3QiLCJhcHBpZCIsImVuZHBvaW50IiwidXNlU3RhdGUiLCJxdWVyeSIsInNldFF1ZXJ5IiwiSGVsbG8iLCJwcm9wcyIsInRyYWNrUXVlcnlWYWx1ZSIsImJpbmQiLCJidXNjYXIiLCJzZWFyY2giLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwianNvblJlc3BvbnNlIiwiZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});