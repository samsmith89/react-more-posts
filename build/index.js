/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Components/Tabs.js":
/*!********************************!*\
  !*** ./src/Components/Tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/src/Components/Tabs.js: Unexpected token (67:11)\n\n\u001b[0m \u001b[90m 65 | \u001b[39m\t\t\tsetPosts(prevState \u001b[33m=>\u001b[39m ({\u001b[0m\n\u001b[0m \u001b[90m 66 | \u001b[39m\t\t\t\t\u001b[33m...\u001b[39mprevState\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 67 | \u001b[39m\t\t\t\t[term] {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t\t\t\t       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 68 | \u001b[39m\t\t\t\t\t\u001b[33m...\u001b[39mprevState\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 69 | \u001b[39m\t\t\t\t\tposts\u001b[33m:\u001b[39m final\u001b[0m\n\u001b[0m \u001b[90m 70 | \u001b[39m\t\t\t\t}\u001b[0m\n    at Object.raise (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:6325:17)\n    at Object.unexpected (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:7642:16)\n    at Object.parseObjPropValue (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:9307:21)\n    at Object.parseObjectMember (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:9230:10)\n    at Object.parseObj (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:9154:25)\n    at Object.parseExprAtom (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8784:28)\n    at Object.parseExprAtom (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:3601:20)\n    at Object.parseExprSubscripts (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Object.parseMaybeUnary (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Object.parseExprOps (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Object.parseMaybeConditional (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Object.parseMaybeAssign (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Object.parseParenAndDistinguishExpression (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8978:28)\n    at Object.parseExprAtom (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8762:21)\n    at Object.parseExprAtom (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:3601:20)\n    at Object.parseExprSubscripts (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Object.parseMaybeUnary (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Object.parseExprOps (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Object.parseMaybeConditional (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Object.parseMaybeAssign (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Object.parseFunctionBody (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:9406:24)\n    at Object.parseArrowExpression (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:9365:10)\n    at Object.parseExprAtom (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8715:18)\n    at Object.parseExprAtom (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:3601:20)\n    at Object.parseExprSubscripts (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Object.parseMaybeUnary (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Object.parseExprOps (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Object.parseMaybeConditional (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Object.parseMaybeAssign (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Object.parseExprListItem (/Users/samsmith/Local Sites/reactwp/app/public/wp-content/themes/react-more-posts/node_modules/@babel/parser/lib/index.js:9491:18)");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Tabs */ "./src/Components/Tabs.js");



wp.element.render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Components_Tabs__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.querySelector("#react-template"));

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map