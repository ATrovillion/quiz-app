"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-pages-browser)/./src/app/quiz/page.js":
/*!******************************!*\
  !*** ./src/app/quiz/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_QuizLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/QuizLogic */ \"(app-pages-browser)/./src/components/QuizLogic.js\");\n/* harmony import */ var _components_QuestionsImport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/QuestionsImport */ \"(app-pages-browser)/./src/components/QuestionsImport.js\");\n/* harmony import */ var _QuizStyles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuizStyles.scss */ \"(app-pages-browser)/./src/app/quiz/QuizStyles.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nlet questions = [];\nconst createQuestionList = async ()=>{\n    return (0,_components_QuestionsImport__WEBPACK_IMPORTED_MODULE_2__.getItems)().then((data)=>{\n        data.map((item)=>{\n            questions.push(item);\n        });\n        console.log(questions);\n        return questions;\n    });\n};\nconst questionList = createQuestionList();\nfunction Quiz() {\n    console.log(questions);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"quiz-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"question-container\",\n                children: \"q\"\n            }, void 0, false, {\n                fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"answer-buttons-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: \"Answer 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: \"Answer 2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: \"Answer 3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: \"Answer 4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"controls-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"start-btn btn hide\",\n                        onClick: _components_QuizLogic__WEBPACK_IMPORTED_MODULE_1__.startGame,\n                        children: \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"next-btn btn\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVpei9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNxRDtBQUNDO0FBQzNCO0FBRzNCLElBQUlFLFlBQVksRUFBRTtBQUNsQixNQUFNQyxxQkFBcUI7SUFDdkIsT0FBT0YscUVBQVFBLEdBQUdHLElBQUksQ0FBQ0MsQ0FBQUE7UUFDbkJBLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQztZQUNOTCxVQUFVTSxJQUFJLENBQUNEO1FBQ25CO1FBRUFFLFFBQVFDLEdBQUcsQ0FBQ1I7UUFDWixPQUFPQTtJQUNYO0FBRUo7QUFDQSxNQUFNUyxlQUFlUjtBQUNOLFNBQVNTO0lBQ3BCSCxRQUFRQyxHQUFHLENBQUNSO0lBQ1oscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBcUI7Ozs7OzswQkFDcEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU9ELFdBQVU7a0NBQWE7Ozs7OztrQ0FDL0IsOERBQUNDO3dCQUFPRCxXQUFVO2tDQUFhOzs7Ozs7a0NBQy9CLDhEQUFDQzt3QkFBT0QsV0FBVTtrQ0FBYTs7Ozs7O2tDQUMvQiw4REFBQ0M7d0JBQU9ELFdBQVU7a0NBQWE7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU9ELFdBQVU7d0JBQXFCRSxTQUFTaEIsNERBQVNBO2tDQUFFOzs7Ozs7a0NBQzNELDhEQUFDZTt3QkFBT0QsV0FBVTtrQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpEO0tBakJ3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9xdWl6L3BhZ2UuanM/ZGJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHtzdGFydEdhbWV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVpekxvZ2ljJztcbmltcG9ydCB7Z2V0SXRlbXN9IGZyb20gJ0AvY29tcG9uZW50cy9RdWVzdGlvbnNJbXBvcnQnO1xuaW1wb3J0ICcuL1F1aXpTdHlsZXMuc2Nzcyc7XG5cblxubGV0IHF1ZXN0aW9ucyA9IFtdXG5jb25zdCBjcmVhdGVRdWVzdGlvbkxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGdldEl0ZW1zKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHF1ZXN0aW9ucy5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpXG4gICAgICAgIHJldHVybiBxdWVzdGlvbnM7XG4gICAgfVxuICAgIClcbn07XG5jb25zdCBxdWVzdGlvbkxpc3QgPSBjcmVhdGVRdWVzdGlvbkxpc3QoKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25zKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpei1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb24tY29udGFpbmVyXCI+cTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItYnV0dG9ucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFuc3dlci1idG5cIj5BbnN3ZXIgMTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYW5zd2VyLWJ0blwiPkFuc3dlciAyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbnN3ZXItYnRuXCI+QW5zd2VyIDM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFuc3dlci1idG5cIj5BbnN3ZXIgNDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3RhcnQtYnRuIGJ0biBoaWRlXCIgb25DbGljaz17c3RhcnRHYW1lfT5TdGFydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dC1idG4gYnRuXCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsic3RhcnRHYW1lIiwiZ2V0SXRlbXMiLCJxdWVzdGlvbnMiLCJjcmVhdGVRdWVzdGlvbkxpc3QiLCJ0aGVuIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInF1ZXN0aW9uTGlzdCIsIlF1aXoiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quiz/page.js\n"));

/***/ })

});