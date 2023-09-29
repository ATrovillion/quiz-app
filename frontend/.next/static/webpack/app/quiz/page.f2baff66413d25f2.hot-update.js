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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QuizLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/QuizLogic */ \"(app-pages-browser)/./src/components/QuizLogic.js\");\n/* harmony import */ var _components_QuestionsImport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/QuestionsImport */ \"(app-pages-browser)/./src/components/QuestionsImport.js\");\n/* harmony import */ var _QuizStyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuizStyles.scss */ \"(app-pages-browser)/./src/app/quiz/QuizStyles.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Quiz() {\n    _s();\n    const [questionList, setQuestionList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_components_QuestionsImport__WEBPACK_IMPORTED_MODULE_3__.getItems)().then((response)=>setQuestionList(response));\n    }, []);\n    console.log(questionList[0]);\n    const { answer1, answer2, answer3, answer4, question, explanation } = questionList[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"quiz-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"question-container\",\n                children: questionList[0].question\n            }, void 0, false, {\n                fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"answer-buttons-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: \"Answer 1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: \"Answer 2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: \"Answer 3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: \"Answer 4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"controls-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"start-btn btn hide\",\n                        onClick: _components_QuizLogic__WEBPACK_IMPORTED_MODULE_2__.startGame,\n                        children: \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"next-btn btn\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_s(Quiz, \"jV5/Rk/qgjW3ankKagSnEUwt3Vg=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVpei9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM0QztBQUNTO0FBQ0M7QUFDM0I7QUFFWixTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNuREMsZ0RBQVNBLENBQUM7UUFDTkUscUVBQVFBLEdBQUdJLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUYsZ0JBQWdCRTtJQUNoRCxHQUFHLEVBQUU7SUFDTEMsUUFBUUMsR0FBRyxDQUFDTCxZQUFZLENBQUMsRUFBRTtJQUMzQixNQUFNLEVBQUNNLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUMsR0FBR1gsWUFBWSxDQUFDLEVBQUU7SUFDbkYscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBc0JiLFlBQVksQ0FBQyxFQUFFLENBQUNVLFFBQVE7Ozs7OzswQkFDN0QsOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU9ELFdBQVU7a0NBQWE7Ozs7OztrQ0FDL0IsOERBQUNDO3dCQUFPRCxXQUFVO2tDQUFhOzs7Ozs7a0NBQy9CLDhEQUFDQzt3QkFBT0QsV0FBVTtrQ0FBYTs7Ozs7O2tDQUMvQiw4REFBQ0M7d0JBQU9ELFdBQVU7a0NBQWE7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU9ELFdBQVU7d0JBQXFCRSxTQUFTbEIsNERBQVNBO2tDQUFFOzs7Ozs7a0NBQzNELDhEQUFDaUI7d0JBQU9ELFdBQVU7a0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRDtHQXRCd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcXVpei9wYWdlLmpzP2RiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3N0YXJ0R2FtZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9RdWl6TG9naWMnO1xuaW1wb3J0IHtnZXRJdGVtc30gZnJvbSAnQC9jb21wb25lbnRzL1F1ZXN0aW9uc0ltcG9ydCc7XG5pbXBvcnQgJy4vUXVpelN0eWxlcy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcbiAgICBjb25zdCBbcXVlc3Rpb25MaXN0LCBzZXRRdWVzdGlvbkxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldEl0ZW1zKCkudGhlbihyZXNwb25zZSA9PiBzZXRRdWVzdGlvbkxpc3QocmVzcG9uc2UpKVxuICAgIH0sIFtdKVxuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uTGlzdFswXSlcbiAgICBjb25zdCB7YW5zd2VyMSwgYW5zd2VyMiwgYW5zd2VyMywgYW5zd2VyNCwgcXVlc3Rpb24sIGV4cGxhbmF0aW9ufSA9IHF1ZXN0aW9uTGlzdFswXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpei1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlc3Rpb24tY29udGFpbmVyXCI+e3F1ZXN0aW9uTGlzdFswXS5xdWVzdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbnN3ZXItYnRuXCI+QW5zd2VyIDE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFuc3dlci1idG5cIj5BbnN3ZXIgMjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYW5zd2VyLWJ0blwiPkFuc3dlciAzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbnN3ZXItYnRuXCI+QW5zd2VyIDQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9scy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN0YXJ0LWJ0biBidG4gaGlkZVwiIG9uQ2xpY2s9e3N0YXJ0R2FtZX0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHQtYnRuIGJ0blwiPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3RhcnRHYW1lIiwiZ2V0SXRlbXMiLCJRdWl6IiwicXVlc3Rpb25MaXN0Iiwic2V0UXVlc3Rpb25MaXN0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImFuc3dlcjEiLCJhbnN3ZXIyIiwiYW5zd2VyMyIsImFuc3dlcjQiLCJxdWVzdGlvbiIsImV4cGxhbmF0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quiz/page.js\n"));

/***/ })

});