/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HttpRequest\": () => (/* binding */ HttpRequest)\n/* harmony export */ });\n\n\nclass HttpRequest extends XMLHttpRequest {\n    constructor() {\n        super();\n    }\n    send() {\n        return new Promise((resolve, reject) => {\n            this.addEventListener('load', () => {\n                if (this.status >= 200 && this.status < 300) {\n                    resolve(this.responseText);\n                } else {\n                    console.warn(this.responseText);\n                    reject();\n                }\n            });\n            XMLHttpRequest.prototype.send.call(this);\n        });\n    }\n}\n\n//# sourceURL=webpack://slugline-editor/./src/base.js?");

/***/ }),

/***/ "./src/cursor.js":
/*!***********************!*\
  !*** ./src/cursor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cursor)\n/* harmony export */ });\nclass Cursor extends HTMLElement {\n    constructor() {\n        super();\n    }\n}\n\ncustomElements.define('slugline-cursor', Cursor);\n\n//# sourceURL=webpack://slugline-editor/./src/cursor.js?");

/***/ }),

/***/ "./src/element_src/action.js":
/*!***********************************!*\
  !*** ./src/element_src/action.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SluglineActionElement)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/element_src/base.js\");\n\n\nclass SluglineActionElement extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n    }\n}\n\ncustomElements.define(\"slugline-action\", SluglineActionElement);\n\n//# sourceURL=webpack://slugline-editor/./src/element_src/action.js?");

/***/ }),

/***/ "./src/element_src/base.js":
/*!*********************************!*\
  !*** ./src/element_src/base.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SluglineElement)\n/* harmony export */ });\nclass SluglineElement extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n    }\n}\n\n//Sollte NIE instanziert werden\ncustomElements.define(\"slugline-element\", SluglineElement);\n\n//# sourceURL=webpack://slugline-editor/./src/element_src/base.js?");

/***/ }),

/***/ "./src/element_src/dialogue.js":
/*!*************************************!*\
  !*** ./src/element_src/dialogue.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SluglineDialogueElement)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/element_src/base.js\");\n\n\nclass SluglineDialogueElement extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n    }\n}\n\ncustomElements.define(\"slugline-dialogue\", SluglineDialogueElement);\n\n//# sourceURL=webpack://slugline-editor/./src/element_src/dialogue.js?");

/***/ }),

/***/ "./src/element_src/heading.js":
/*!************************************!*\
  !*** ./src/element_src/heading.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SluglineHeadingElement)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/element_src/base.js\");\n\n\nclass SluglineHeadingElement extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n    }\n}\n\ncustomElements.define(\"slugline-heading\", SluglineHeadingElement);\n\n//# sourceURL=webpack://slugline-editor/./src/element_src/heading.js?");

/***/ }),

/***/ "./src/element_src/name.js":
/*!*********************************!*\
  !*** ./src/element_src/name.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SluglineNameElement)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/element_src/base.js\");\n\n\nclass SluglineNameElement extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n    }\n}\n\ncustomElements.define(\"slugline-name\", SluglineNameElement);\n\n//# sourceURL=webpack://slugline-editor/./src/element_src/name.js?");

/***/ }),

/***/ "./src/element_src/parenthetical.js":
/*!******************************************!*\
  !*** ./src/element_src/parenthetical.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SluglineParentheticalElement)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/element_src/base.js\");\n\n\nclass SluglineParentheticalElement extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n    }\n}\n\ncustomElements.define(\"slugline-parenthetical\", SluglineParentheticalElement);\n\n//# sourceURL=webpack://slugline-editor/./src/element_src/parenthetical.js?");

/***/ }),

/***/ "./src/element_src/transition.js":
/*!***************************************!*\
  !*** ./src/element_src/transition.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SluglineTransitionElement)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/element_src/base.js\");\n\n\nclass SluglineTransitionElement extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n    }\n}\n\ncustomElements.define(\"slugline-transition\", SluglineTransitionElement);\n\n//# sourceURL=webpack://slugline-editor/./src/element_src/transition.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_src_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_src/action */ \"./src/element_src/action.js\");\n/* harmony import */ var _element_src_dialogue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element_src/dialogue */ \"./src/element_src/dialogue.js\");\n/* harmony import */ var _element_src_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element_src/heading */ \"./src/element_src/heading.js\");\n/* harmony import */ var _element_src_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element_src/name */ \"./src/element_src/name.js\");\n/* harmony import */ var _element_src_parenthetical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element_src/parenthetical */ \"./src/element_src/parenthetical.js\");\n/* harmony import */ var _element_src_transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element_src/transition */ \"./src/element_src/transition.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://slugline-editor/./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cursor */ \"./src/cursor.js\");\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ \"./src/page.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\n\n\n\n\nclass SluglineEditor extends HTMLElement {\n    pages = [];\n    style = \"\";\n    constructor() {\n        super();\n        \n        this.attachShadow({mode: 'open'});\n        \n        const style_link = document.getElementById('editor_style').href;\n\n        const request = new _base__WEBPACK_IMPORTED_MODULE_3__.HttpRequest();\n        request.open('GET', style_link);\n        request.send().then((result) => {\n            const style = document.createElement('style');\n            style.textContent = result;\n            this.shadowRoot.appendChild(style);\n        });\n    }\n    connectedCallback() { //wird automatisch aufgerufen\n        this.initialize();\n\n\n        this.cursor = new _cursor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.pages[this.pages.length - 1].appendChild(this.cursor);\n    }\n    initialize(config_file = null) {\n        if (config_file != null) {\n            this.initialize_from_file(config_file);\n        }\n        this.add_page(new _page__WEBPACK_IMPORTED_MODULE_2__[\"default\"]());\n    }\n    initialize_from_file(config_file) {\n\n    }\n    add_page(page) {\n        this.shadowRoot.appendChild(page);\n        this.pages.push(page);\n    }\n    attatch_listeners() {\n        this.addEventListener('keydown', (e) => {\n            console.log(e.key);\n        });\n    }\n}\n\n\ncustomElements.define(\"slugline-editor\", SluglineEditor);\n\n\n//# sourceURL=webpack://slugline-editor/./src/index.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SluglinePage)\n/* harmony export */ });\nclass SluglinePage extends HTMLElement {\n    html_name = \"slugline-page\";\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n    }\n}\n\ncustomElements.define('slugline-page', SluglinePage);\n\n//# sourceURL=webpack://slugline-editor/./src/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;