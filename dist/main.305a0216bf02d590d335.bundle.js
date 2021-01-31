/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xc": () => (/* binding */ pass),
/* harmony export */   "kq": () => (/* binding */ copyPassword),
/* harmony export */   "fX": () => (/* binding */ passwordLength),
/* harmony export */   "tv": () => (/* binding */ ucLetterCheck),
/* harmony export */   "Sl": () => (/* binding */ lcLetterCheck),
/* harmony export */   "M5": () => (/* binding */ numberCheck),
/* harmony export */   "Kf": () => (/* binding */ symbolCheck),
/* harmony export */   "F2": () => (/* binding */ generatePassword),
/* harmony export */   "yw": () => (/* binding */ message)
/* harmony export */ });
/* unused harmony export mail */


const pass = document.querySelector(".pass");
const copyPassword = document.getElementById("clipboard");
const mail = document.getElementById("mail");
const passwordLength = document.getElementById("pass-length");
const ucLetterCheck = document.getElementById("u-letter");
const lcLetterCheck = document.getElementById("l-letter");
const numberCheck = document.getElementById("number");
const symbolCheck = document.getElementById("symbols");
const generatePassword = document.getElementById("generate-pass");
const message = document.querySelector(".message")


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
(() => {

// EXTERNAL MODULE: ./src/DomEl.js
var DomEl = __webpack_require__(668);
;// CONCATENATED MODULE: ./src/randomChars.js
const uppercaseLetters = () => {
  return String.fromCharCode(Math.floor(Math.random() * 24) + 97);
};

const lowercaseLetters = () => {
  return String.fromCharCode(Math.floor(Math.random() * 24) + 65);
};

const numbers = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const symbols = () => {
  const symbols = "~`!@#$%^&*(),/<>[]{}.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

;// CONCATENATED MODULE: ./src/logic.js


const randomCharObj = {
  upper: uppercaseLetters,
  lower: lowercaseLetters,
  number: numbers,
  symbol: symbols,
};
const generatedPassword = (upper, lower, number, symbol, length) => {
  let password = "";
  const count = upper + lower + number + symbol;
  //filtered out unchecked items
  const selectionArray = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (count === 0) {
    return;
  }
  //console.log(selectionArray)
  for (let i = 0; i < length; i += count) {
    selectionArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      //console.log(funcName)
      password += randomCharObj[funcName]();
    });
  }
  //console.log(password.slice(0,length))
  return password.slice(0, length);
};

;// CONCATENATED MODULE: ./src/index.js



DomEl/* generatePassword.addEventListener */.F2.addEventListener("click", () => {
  const length = parseInt(DomEl/* passwordLength.value */.fX.value);
  const hasUppercase = DomEl/* ucLetterCheck.checked */.tv.checked;
  const hasLowercase = DomEl/* lcLetterCheck.checked */.Sl.checked;
  const hasNumber = DomEl/* numberCheck.checked */.M5.checked;
  const hasSymbol = DomEl/* symbolCheck.checked */.Kf.checked;
  //console.log(hasUppercase, hasLowercase, hasNumber, hasSymbol)
  DomEl/* pass.innerText */.Xc.innerText = generatedPassword(
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSymbol,
    length
  );
  DomEl/* pass.classList.remove */.Xc.classList.remove("animate__rubberBand");
});

})();

(() => {
/* harmony import */ var _DomEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(668);


_DomEl__WEBPACK_IMPORTED_MODULE_0__/* .copyPassword.addEventListener */ .kq.addEventListener("click", () => {
    const el = document.createElement('textarea');
    el.value = _DomEl__WEBPACK_IMPORTED_MODULE_0__/* .pass.innerText */ .Xc.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    _DomEl__WEBPACK_IMPORTED_MODULE_0__/* .pass.classList.add */ .Xc.classList.add("animate__rubberBand");
    setTimeout(() => {
        _DomEl__WEBPACK_IMPORTED_MODULE_0__/* .message.style.display */ .yw.style.display = "block"
    }, 100);
    setTimeout(() => {
        _DomEl__WEBPACK_IMPORTED_MODULE_0__/* .message.style.display */ .yw.style.display = "none"
    }, 2500);    
});




})();

/******/ })()
;