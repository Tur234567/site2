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

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTodos: () => (/* binding */ getTodos),\n/* harmony export */   loginTodos: () => (/* binding */ loginTodos),\n/* harmony export */   postTodos: () => (/* binding */ postTodos)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n\r\n\r\n\r\nfunction getTodos({ host, downloadGet, info }) {\r\n    return fetch(host,\r\n        {\r\n          method: \"GET\",\r\n        }).then((response) => {\r\n          if (response.status === 500) {\r\n            alert('Произошла ошибка сервера, попробуйте позже');\r\n            throw new Error('Произошла ошибка сервера, попробуйте позже');\r\n          } \r\n          const JsonResponse = response.json();\r\n      JsonResponse.then((responseData => {\r\n        const appComments = responseData.comments.map((comment) => {\r\n          return {\r\n            name: comment.author.name,\r\n            date: new Date(comment.date),\r\n            text: comment.text,\r\n            likes: comment.likes,\r\n          };\r\n        })\r\n        info = appComments;\r\n          return (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.renderComment)({ info });\r\n      }))\r\n      .then(() => {\r\n        return downloadGet.style.display = 'none';\r\n      }).catch((error) => {\r\n        downloadGet.textContent = 'Кажется что то пошло не так, попробуйте позже';\r\n        console.warn(error);\r\n      })\r\n    })\r\n}\r\n\r\nfunction postTodos({ host, addFormText, addFormName, token, download, removeDiv }) {\r\n  JSON.stringify(_render_js__WEBPACK_IMPORTED_MODULE_1__.arr)\r\n  return fetch(host, {\r\n    method: \"POST\",\r\n    body: JSON.stringify({text: addFormText.value, name: addFormName.value,}),\r\n    headers: {\r\n        Authorization: _render_js__WEBPACK_IMPORTED_MODULE_1__.arr[0],\r\n      }\r\n  })\r\n  .then((response) => {\r\n    if (response.status === 201) {\r\n      return response.json();\r\n    } \r\n    if (response.status === 400) {\r\n      alert('Недостаточно символов, введите корректное имя и комментарий, от трех символов')\r\n      throw new Error('Недостаточно символов');\r\n    }\r\n    if (response.status === 500) {\r\n      alert('Произошла ошибка сервера, попробуйте позже');\r\n      throw new Error('Произошла ошибка сервера, попробуйте позже');\r\n    } \r\n    else {\r\n      alert('Упс, что то пошло не так');\r\n      throw new Error('Упс, что то пошло не так');\r\n    }\r\n  })\r\n  .then(() => {\r\n      return (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.getCommentsData)();\r\n  }).then(() => {\r\n    download.style.display = 'none';\r\n    removeDiv.classList.remove('delete-div');\r\n  }).catch((error) => {\r\n    download.style.display = 'none';\r\n    removeDiv.classList.remove('delete-div');\r\n    console.warn(error);\r\n  })\r\n}\r\n\r\nfunction loginTodos({ login, password }) {\r\n  return fetch(\"https://wedev-api.sky.pro/api/user/login\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      login,\r\n      password,\r\n    }),\r\n  }).then((response) => {\r\n    if (response.status === 400) {\r\n      alert('Введите верный логин или пароль')\r\n      throw new Error('Введите верный логин или пароль')\r\n    }\r\n    if (response.status === 500) {\r\n      alert('Произошла ошибка сервера, попробуйте позже');\r\n      throw new Error('Произошла ошибка сервера, попробуйте позже');\r\n    } else {\r\n      return response.json();\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack://site2/./api.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCommentsData: () => (/* binding */ getCommentsData),\n/* harmony export */   renderComment: () => (/* binding */ renderComment)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n\n\n\n\nconst container = document.querySelector('.container');\nconst addFormName = document.querySelector('.add-form-name');\nconst addFormText = document.querySelector('.add-form-text');\nconst button = document.querySelector('.add-form-button');\nconst downloadGet = document.querySelector('.download-GET');\nconst host = \"https://webdev-hw-api.vercel.app/api/v2/MnogoYje/comments\";\nconst formLoginValue = document.querySelector('.form_login_login');\nlet info = [];\nfunction getCommentsData() {\n  return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getTodos)({ host, downloadGet, info })\n}\n\ngetCommentsData()\n\n\nfunction likesCounter() {\nconst likeButtons = document.querySelectorAll('.like-button');\nconst likes = document.querySelectorAll('.likes-counter');\n\nlikeButtons.forEach((likeButton, likeButtonId) => {\nlikeButton.onclick = function (event) {\n  event.stopPropagation();\n  if (likeButton.classList.contains('active-like')) {\n    likeButton.classList.remove('active-like');\n    likes[likeButtonId].innerHTML = +likes[likeButtonId].innerHTML - 1;\n  } else {\n    likeButton.classList.add('active-like')\n    likes[likeButtonId].innerHTML = +likes[likeButtonId].innerHTML + 1;\n  }\n}\n});\n}\n\nlikesCounter();\n\nfunction renderComment({ info }) {\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderAndLogin)({ info, addFormName, formLoginValue });\n    likesCounter();\n    commentAndNameCopy();\n}\n\n\n\nfunction commentAndNameCopy() {\n  const namePeoples = document.querySelectorAll('.name_people');\nconst commentTexts = document.querySelectorAll('.comment-text');\nconst commentsBlock = document.querySelectorAll('.comment');\ncommentsBlock.forEach((commentBlock, commentBlockId) => {\n  commentBlock.addEventListener('click', function (event) {\n    event.stopPropagation();\n    addFormText.value = ('>' + commentTexts[commentBlockId].textContent + namePeoples[commentBlockId].textContent + ', ')\n  })\n});\n}\nrenderComment({ info })\nlikesCounter();\ncommentAndNameCopy();\n\nconst download = document.querySelector('.download');\nconst deleteDiv = document.querySelector('.delete-div');\nconst removeDiv = document.querySelector('.remove-div');\nbutton.addEventListener('click', function(event) {\n    download.style.display = 'block';\n    removeDiv.classList.add('delete-div');\n    return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postTodos)({ host, addFormText, addFormName, download, removeDiv });\n});\n\n//# sourceURL=webpack://site2/./main.js?");

/***/ }),

/***/ "./render.js":
/*!*******************!*\
  !*** ./render.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arr: () => (/* binding */ arr),\n/* harmony export */   renderAndLogin: () => (/* binding */ renderAndLogin)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n\r\n\r\nlet token = '';\r\nlet arr = [];\r\n\r\nfunction renderAndLogin({ info, addFormName, formLoginValue }) {\r\n    const comments = document.querySelector('.comments')\r\n    const loginForm = document.querySelector('.form_login');\r\n    const addLoginButton = document.querySelector('.add-login-button');\r\n    const removeForLogin = document.querySelector('.remove-for-login');\r\n    const formInputPassword = document.querySelector('.form_login_password');\r\n    const formInputLogin = document.querySelector('.form_login_login');\r\n    if (!token) {\r\n        loginForm.style.display = 'block';\r\n        removeForLogin.style.display = 'none';\r\n        addLoginButton.addEventListener('click', function forToken() {\r\n          removeForLogin.style.display = 'block';\r\n          loginForm.style.display = 'none';\r\n          \r\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginTodos)({ \r\n            login: formInputLogin.value, \r\n            password: formInputPassword.value,\r\n          }).then((user) => {\r\n            token = `Bearer ${user.user.token}`\r\n            arr.push(token);\r\n            addFormName.value = user.user.name;\r\n            addFormName.disabled = \"disabled\";\r\n          })\r\n      });\r\n    } \r\n  const infoHtml = info.map((comment) => {\r\n    const now = new Date();\r\n    format(now, \"MM-dd-yyyy hh:mm\"); // 03-26-2023 10:33\r\n    const createDate = format(new Date(comment.created_at), 'dd/MM/yyyy hh:mm');\r\n    return `<li class=\"comment\">\r\n      <div class=\"comment-header\">\r\n        <div class=\"name_people\">${comment.name}</div>\r\n        <div>${createDate}</div>\r\n      </div>\r\n      <div class=\"comment-body\">\r\n        <div class=\"comment-text\">\r\n          ${comment.text}\r\n        </div>\r\n      </div>\r\n      <div class=\"comment-footer\">\r\n        <div class=\"likes\">\r\n          <span class=\"likes-counter\">${comment.likes}</span>\r\n          <button class=\"like-button\"></button>\r\n        </div>\r\n      </div>\r\n    </li>`\r\n  }).join(\"\");\r\n\r\n  comments.innerHTML = infoHtml;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://site2/./render.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;