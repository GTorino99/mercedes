/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/models"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fserxhio%2FDesktop%2Fappi%2Fpages%2Fmodels.js&page=%2Fmodels!":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fserxhio%2FDesktop%2Fappi%2Fpages%2Fmodels.js&page=%2Fmodels! ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/models\",\n      function () {\n        return __webpack_require__(/*! ./pages/models.js */ \"./pages/models.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/models\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRnNlcnhoaW8lMkZEZXNrdG9wJTJGYXBwaSUyRnBhZ2VzJTJGbW9kZWxzLmpzJnBhZ2U9JTJGbW9kZWxzIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YWRlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL21vZGVsc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvbW9kZWxzLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9tb2RlbHNcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fserxhio%2FDesktop%2Fappi%2Fpages%2Fmodels.js&page=%2Fmodels!\n"));

/***/ }),

/***/ "./components/ModelsView.js":
/*!**********************************!*\
  !*** ./components/ModelsView.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModelView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ModelView(param) {\n    let { model  } = param;\n    const { modelName , modelImage  } = model.fields;\n    console.log({\n        modelImage,\n        model\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modelview-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"rounded-t-lg model-image\",\n                        src: \"https:\" + modelImage.fields.file.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-5 model-card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/vehicle-model/\".concat(modelName),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                children: modelName\n                            }, void 0, false, {\n                                fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n                                lineNumber: 15,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-3 font-normal text-gray-700 dark:text-gray-400\",\n                            children: \"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                            children: [\n                                \"See more\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    \"aria-hidden\": \"true\",\n                                    className: \"w-4 h-4 ml-2 -mr-1\",\n                                    fill: \"currentColor\",\n                                    viewBox: \"0 0 20 20\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fillRule: \"evenodd\",\n                                        d: \"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\",\n                                        clipRule: \"evenodd\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 147\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/serxhio/Desktop/appi/components/ModelsView.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = ModelView;\nvar _c;\n$RefreshReg$(_c, \"ModelView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGVsc1ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxVQUFVLEtBQU8sRUFBRTtRQUFULEVBQUNDLE1BQUssRUFBQyxHQUFQO0lBRWhDLE1BQU0sRUFBQ0MsVUFBUyxFQUFFQyxXQUFVLEVBQUMsR0FBR0YsTUFBTUcsTUFBTTtJQUU1Q0MsUUFBUUMsR0FBRyxDQUFDO1FBQUNIO1FBQVlGO0lBQUs7SUFFOUIscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUMsTUFBSzs4QkFDSiw0RUFBQ0M7d0JBQUlILFdBQVU7d0JBQTJCSSxLQUFLLFdBQVdULFdBQVdDLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDQyxHQUFHO3dCQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFOUYsOERBQUNSO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQUVDLE1BQU0sa0JBQTRCLE9BQVZSO3NDQUN2Qiw0RUFBQ2M7Z0NBQUdSLFdBQVU7MENBQXdFTjs7Ozs7Ozs7Ozs7c0NBRTFGLDhEQUFDZTs0QkFBRVQsV0FBVTtzQ0FBb0Q7Ozs7OztzQ0FDakUsOERBQUNDOzRCQUFFQyxNQUFLOzRCQUFJRixXQUFVOztnQ0FBOE87OENBRWhRLDhEQUFDVTtvQ0FBSUMsZUFBWTtvQ0FBT1gsV0FBVTtvQ0FBcUJZLE1BQUs7b0NBQWVDLFNBQVE7b0NBQVlDLE9BQU07OENBQTZCLDRFQUFDQzt3Q0FBS0MsVUFBUzt3Q0FBVUMsR0FBRTt3Q0FBMklDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNalUsQ0FBQztLQXpCdUIxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZGVsc1ZpZXcuanM/ODA0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbFZpZXcoe21vZGVsfSkge1xuXG4gIGNvbnN0IHttb2RlbE5hbWUsIG1vZGVsSW1hZ2V9ID0gbW9kZWwuZmllbGRzXG5cbiAgY29uc29sZS5sb2coe21vZGVsSW1hZ2UsIG1vZGVsfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsdmlldy13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNtIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3ctbWQgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLXQtbGcgbW9kZWwtaW1hZ2VcIiBzcmM9eydodHRwczonICsgbW9kZWxJbWFnZS5maWVsZHMuZmlsZS51cmx9IGFsdD1cIlwiLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBtb2RlbC1jYXJkXCI+XG4gICAgICAgICAgICA8YSBocmVmPXtgL3ZlaGljbGUtbW9kZWwvJHttb2RlbE5hbWV9YH0+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+e21vZGVsTmFtZX08L2g0PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPkhlcmUgYXJlIHRoZSBiaWdnZXN0IGVudGVycHJpc2UgdGVjaG5vbG9neSBhY3F1aXNpdGlvbnMgb2YgMjAyMSBzbyBmYXIsIGluIHJldmVyc2UgY2hyb25vbG9naWNhbCBvcmRlci48L3A+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIj5cbiAgICAgICAgICAgICAgICBTZWUgbW9yZVxuICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0yIC1tci0xXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMC4yOTMgMy4yOTNhMSAxIDAgMDExLjQxNCAwbDYgNmExIDEgMCAwMTAgMS40MTRsLTYgNmExIDEgMCAwMS0xLjQxNC0xLjQxNEwxNC41ODYgMTFIM2ExIDEgMCAxMTAtMmgxMS41ODZsLTQuMjkzLTQuMjkzYTEgMSAwIDAxMC0xLjQxNHpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiTW9kZWxWaWV3IiwibW9kZWwiLCJtb2RlbE5hbWUiLCJtb2RlbEltYWdlIiwiZmllbGRzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiZmlsZSIsInVybCIsImFsdCIsImg0IiwicCIsInN2ZyIsImFyaWEtaGlkZGVuIiwiZmlsbCIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ModelsView.js\n"));

/***/ }),

/***/ "./pages/models.js":
/*!*************************!*\
  !*** ./pages/models.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Model; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ModelsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ModelsView */ \"./components/ModelsView.js\");\n\n\nvar __N_SSG = true;\nfunction Model(param) {\n    let { models  } = param;\n    console.log({\n        models\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"models-root\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"models-titles pt-15\",\n                children: \"List of Models from Mercedes\"\n            }, void 0, false, {\n                fileName: \"/Users/serxhio/Desktop/appi/pages/models.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-8\",\n                children: models && models.map((model)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ModelsView__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        model: model\n                    }, model.sys.id, false, {\n                        fileName: \"/Users/serxhio/Desktop/appi/pages/models.js\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/serxhio/Desktop/appi/pages/models.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serxhio/Desktop/appi/pages/models.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = Model;\nvar _c;\n$RefreshReg$(_c, \"Model\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb2RlbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNnRDs7QUFxQmpDLFNBQVNDLE1BQU0sS0FBUSxFQUFFO1FBQVYsRUFBQ0MsT0FBTSxFQUFDLEdBQVI7SUFFNUJDLFFBQVFDLEdBQUcsQ0FBQztRQUFDRjtJQUFNO0lBQ25CLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNCOzs7Ozs7MEJBQ3BDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFWEosVUFBVUEsT0FBT00sR0FBRyxDQUFDQyxDQUFBQSxRQUFTO29CQUM1QixxQkFDRSw4REFBQ1QsOERBQVNBO3dCQUFvQlMsT0FBT0E7dUJBQXJCQSxNQUFNQyxHQUFHLENBQUNDLEVBQUU7Ozs7O2dCQUVoQzs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztLQWxCdUJWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vZGVscy5qcz8xNzUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJjb250ZW50ZnVsXCJcbmltcG9ydCBNb2RlbFZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kZWxzVmlld1wiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICAgIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxuICAgICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIFxuICB9KVxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtjb250ZW50X3R5cGU6ICd2ZWhpY2xlTW9kZWwnfSlcbiAgY29uc3QgcmVzcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtjb250ZW50X3R5cGU6ICdjYXInfSlcblxuICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWxzOiByZXMuaXRlbXMsXG4gICAgICAgIGNhcnM6IHJlc3MuaXRlbXNcbiAgICAgIH1cbiAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kZWwoe21vZGVsc30pIHtcblxuICBjb25zb2xlLmxvZyh7bW9kZWxzfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbHMtcm9vdFwiPlxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibW9kZWxzLXRpdGxlcyBwdC0xNVwiPkxpc3Qgb2YgTW9kZWxzIGZyb20gTWVyY2VkZXM8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC00IG1kOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy0zIHB0LThcIiA+XG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlbHMgJiYgbW9kZWxzLm1hcChtb2RlbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TW9kZWxWaWV3IGtleT17bW9kZWwuc3lzLmlkfSBtb2RlbD17bW9kZWx9Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJNb2RlbFZpZXciLCJNb2RlbCIsIm1vZGVscyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsIm1vZGVsIiwic3lzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/models.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fserxhio%2FDesktop%2Fappi%2Fpages%2Fmodels.js&page=%2Fmodels!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);