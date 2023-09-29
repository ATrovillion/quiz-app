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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_QuestionsImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/QuestionsImport */ \"(app-pages-browser)/./src/components/QuestionsImport.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_QuizLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/QuizLogic */ \"(app-pages-browser)/./src/components/QuizLogic.js\");\n/* harmony import */ var _QuizStyles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuizStyles.scss */ \"(app-pages-browser)/./src/app/quiz/QuizStyles.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Quiz() {\n    _s();\n    const initial = [\n        {\n            question: \"\",\n            answer1: \"\",\n            answer2: \"\",\n            answer3: \"\",\n            answer4: \"\",\n            explanation: \"\"\n        }\n    ];\n    const [questionList, setQuestionList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_components_QuestionsImport__WEBPACK_IMPORTED_MODULE_1__.getItems)().then((response)=>setQuestionList(response));\n    }, []);\n    const { question, answer1, answer2, answer3, answer4, explanation } = questionList;\n    console.log(questionList);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"quiz-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"question-container\",\n                children: question\n            }, void 0, false, {\n                fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"answer-buttons-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: answer1\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: answer2\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: answer3\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"answer-btn\",\n                        children: answer4\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"controls-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"start-btn btn hide\",\n                        onClick: _components_QuizLogic__WEBPACK_IMPORTED_MODULE_3__.startGame,\n                        children: \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"next-btn btn\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aarontrovillion/Coding/Projects/quiz-app/frontend/src/app/quiz/page.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(Quiz, \"/sYcEtMwPal/N2+czEOMwFeVZQU=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVpei9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3RDtBQUNaO0FBQ1M7QUFDMUI7QUFFWixTQUFTSTs7SUFDcEIsTUFBTUMsVUFBVTtRQUNaO1lBQUNDLFVBQVU7WUFDWEMsU0FBUztZQUNUQyxTQUFTO1lBQ1RDLFNBQVM7WUFDVEMsU0FBUztZQUNUQyxhQUFhO1FBQ2I7S0FDSDtJQUNELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDSTtJQUNqREgsZ0RBQVNBLENBQUM7UUFDVkYscUVBQVFBLEdBQ1BjLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUYsZ0JBQWdCRTtJQUNsQyxHQUFHLEVBQUU7SUFDVCxNQUFNLEVBQUNULFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUMsR0FBR0M7SUFDcEVJLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDUixxQkFDSSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFzQmI7Ozs7OzswQkFDckMsOERBQUNZO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU9ELFdBQVU7a0NBQWNaOzs7Ozs7a0NBQ2hDLDhEQUFDYTt3QkFBT0QsV0FBVTtrQ0FBY1g7Ozs7OztrQ0FDaEMsOERBQUNZO3dCQUFPRCxXQUFVO2tDQUFjVjs7Ozs7O2tDQUNoQyw4REFBQ1c7d0JBQU9ELFdBQVU7a0NBQWNUOzs7Ozs7Ozs7Ozs7MEJBRXBDLDhEQUFDUTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFPRCxXQUFVO3dCQUFxQkUsU0FBU2xCLDREQUFTQTtrQ0FBRTs7Ozs7O2tDQUMzRCw4REFBQ2lCO3dCQUFPRCxXQUFVO2tDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakQ7R0FoQ3dCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3F1aXovcGFnZS5qcz9kYmNhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBnZXRJdGVtcyB9IGZyb20gJ0AvY29tcG9uZW50cy9RdWVzdGlvbnNJbXBvcnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7c3RhcnRHYW1lfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1F1aXpMb2dpYyc7XG5pbXBvcnQgJy4vUXVpelN0eWxlcy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcbiAgICBjb25zdCBpbml0aWFsID0gW1xuICAgICAgICB7cXVlc3Rpb246ICcnLFxuICAgICAgICBhbnN3ZXIxOiAnJyxcbiAgICAgICAgYW5zd2VyMjogJycsXG4gICAgICAgIGFuc3dlcjM6ICcnLFxuICAgICAgICBhbnN3ZXI0OiAnJyxcbiAgICAgICAgZXhwbGFuYXRpb246ICcnLFxuICAgICAgICB9XG4gICAgXVxuICAgIGNvbnN0IFtxdWVzdGlvbkxpc3QsIHNldFF1ZXN0aW9uTGlzdF0gPSB1c2VTdGF0ZShpbml0aWFsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEl0ZW1zKClcbiAgICAudGhlbihyZXNwb25zZSA9PiBzZXRRdWVzdGlvbkxpc3QocmVzcG9uc2UpKVxuICAgIH0sIFtdKVxuY29uc3Qge3F1ZXN0aW9uLCBhbnN3ZXIxLCBhbnN3ZXIyLCBhbnN3ZXIzLCBhbnN3ZXI0LCBleHBsYW5hdGlvbn0gPSBxdWVzdGlvbkxpc3RcbmNvbnNvbGUubG9nKHF1ZXN0aW9uTGlzdClcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aXotY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uLWNvbnRhaW5lclwiPntxdWVzdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWJ1dHRvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbnN3ZXItYnRuXCI+e2Fuc3dlcjF9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbnN3ZXItYnRuXCI+e2Fuc3dlcjJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbnN3ZXItYnRuXCI+e2Fuc3dlcjN9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbnN3ZXItYnRuXCI+e2Fuc3dlcjR9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdGFydC1idG4gYnRuIGhpZGVcIiBvbkNsaWNrPXtzdGFydEdhbWV9PlN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuZXh0LWJ0biBidG5cIj5OZXh0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJnZXRJdGVtcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3RhcnRHYW1lIiwiUXVpeiIsImluaXRpYWwiLCJxdWVzdGlvbiIsImFuc3dlcjEiLCJhbnN3ZXIyIiwiYW5zd2VyMyIsImFuc3dlcjQiLCJleHBsYW5hdGlvbiIsInF1ZXN0aW9uTGlzdCIsInNldFF1ZXN0aW9uTGlzdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quiz/page.js\n"));

/***/ })

});