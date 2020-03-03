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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./src/components/ButtonComponent.css":
/*!********************************************!*\
  !*** ./src/components/ButtonComponent.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/ButtonComponent.css?");

/***/ }),

/***/ "./src/components/ButtonComponent.js":
/*!*******************************************!*\
  !*** ./src/components/ButtonComponent.js ***!
  \*******************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectComponent\", function() { return ProjectComponent; });\n/* harmony import */ var _ButtonComponent_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonComponent.css */ \"./src/components/ButtonComponent.css\");\n/* harmony import */ var _ButtonComponent_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ButtonComponent_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _timer_TimerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer/TimerComponent */ \"./src/components/timer/TimerComponent.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar _TimerComponent = Object(_timer_TimerComponent__WEBPACK_IMPORTED_MODULE_1__[\"TimerComponent\"])(),\n    create_timer = _TimerComponent.create_timer,\n    render_timer = _TimerComponent.render_timer;\n\nvar ProjectComponent = function ProjectComponent() {\n  var state = {\n    project_name: \"My Awesome Project\",\n    task_name: \"Programming\",\n    timer: 0,\n    interval_id: null,\n    timer_interval_id: null,\n    timer_started: false\n  };\n  Object.freeze(state);\n\n  var incrementCounter = function incrementCounter() {\n    state.counter += 2;\n  };\n\n  var setState = function setState(current_state) {\n    state = Object.freeze(_objectSpread({}, state, {}, current_state));\n  };\n\n  var create_input = function create_input(_ref) {\n    var label = _ref.label,\n        action = _ref.action,\n        placeholder = _ref.placeholder;\n    var time_input = document.createElement(\"input\");\n    time_input.type = \"text\";\n    time_input.name = label;\n    time_input.className = \"time-input\";\n    time_input.placeholder = placeholder;\n    time_input.addEventListener(\"focus\", function () {\n      var interval = setInterval(function () {\n        return action(time_input.value);\n      }, 100);\n      setState({\n        interval_id: interval\n      });\n    });\n    time_input.addEventListener(\"blur\", function () {\n      if (state.interval_id) {\n        clearInterval(state.interval_id);\n      }\n    });\n    time_input.addEventListener(\"keyup\", function (event) {\n      if (event.keyCode === 13) {\n        console.log(\"Enter KEY Pressed\");\n        event.preventDefault();\n        time_input.blur();\n      }\n    });\n    return time_input;\n  };\n\n  var create_button = function create_button(_ref2) {\n    var id = _ref2.id,\n        text = _ref2.text,\n        action = _ref2.action,\n        className = _ref2.className;\n    var time_button = document.createElement(\"button\");\n    time_button.id = id;\n    time_button.type = \"button\";\n    time_button.innerHTML = text;\n    time_button.className = className;\n    time_button.onclick = action;\n    return time_button;\n  };\n\n  var setProjectName = function setProjectName(value) {\n    if (state.project_name !== value) {\n      setState({\n        project_name: value\n      });\n    }\n\n    console.log(state.project_name);\n  };\n\n  var setTaskName = function setTaskName(value) {\n    if (state.task_name !== value) {\n      setState({\n        task_name: value\n      });\n    }\n  };\n\n  var toggle_tracking = function toggle_tracking() {\n    if (state.timer_started) {\n      clearInterval(state.timer_interval_id);\n      setState({\n        timer_interval_id: null,\n        timer_started: false,\n        timer: 0\n      });\n      setTimeout(function () {\n        render_timer({\n          time: state.timer\n        });\n      }, 0);\n      document.getElementById(\"start-button\").innerHTML = \"Start\";\n    } else {\n      var timer_interval_id = setInterval(function () {\n        // setState({ timer: state.timer + 1 });\n        setState({\n          timer: state.timer + 1\n        });\n        setTimeout(function () {\n          render_timer({\n            time: state.timer\n          });\n        }, 0);\n      }, 1000);\n      setState({\n        timer_interval_id: timer_interval_id,\n        timer_started: true\n      });\n      document.getElementById(\"start-button\").innerHTML = \"Stop\";\n    }\n  };\n\n  var renderProject = function renderProject() {\n    var root_container = document.createElement(\"div\");\n    root_container.className = \"root-container\";\n    var project_container = document.createElement(\"div\");\n    project_container.className = \"project-container\";\n    project_container.appendChild(create_input({\n      label: \"p_name\",\n      action: setProjectName,\n      placeholder: \"Project Name\"\n    }));\n    project_container.appendChild(create_input({\n      label: \"p_task\",\n      action: setTaskName,\n      placeholder: \"Current Task\"\n    }));\n    root_container.appendChild(project_container);\n    var button_container = document.createElement(\"div\");\n    button_container.className = \"button-container\";\n    root_container.appendChild(button_container);\n    button_container.appendChild(create_button({\n      id: \"start-button\",\n      text: \"Start\",\n      action: toggle_tracking,\n      className: \"button-blue\"\n    }));\n    var timerContainer = document.createElement(\"section\");\n    timerContainer.className = \"timer-container\";\n    timerContainer.appendChild(create_timer(0));\n    root_container.appendChild(timerContainer);\n    return root_container;\n  };\n\n  return renderProject();\n};\n\n//# sourceURL=webpack:///./src/components/ButtonComponent.js?");

/***/ }),

/***/ "./src/components/timer/TimerComponent.css":
/*!*************************************************!*\
  !*** ./src/components/timer/TimerComponent.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/timer/TimerComponent.css?");

/***/ }),

/***/ "./src/components/timer/TimerComponent.js":
/*!************************************************!*\
  !*** ./src/components/timer/TimerComponent.js ***!
  \************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TimerComponent\", function() { return TimerComponent; });\n/* harmony import */ var _TimerComponent_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimerComponent.css */ \"./src/components/timer/TimerComponent.css\");\n/* harmony import */ var _TimerComponent_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_TimerComponent_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar TimerComponent = function TimerComponent(props) {\n  return {\n    create_timer: create_timer,\n    render_timer: render_timer\n  };\n};\n\nvar create_timer = function create_timer(props) {\n  var clockTimer = document.createElement(\"span\");\n  clockTimer.id = \"clock\";\n  clockTimer.className = \"clock-timer\";\n  clockTimer.innerHTML = \"00:00\";\n  return clockTimer;\n};\n\nvar render_timer = function render_timer(props) {\n  var time = props.time;\n  var time_x = toHHMMSS(time);\n  document.getElementById(\"clock\").innerHTML = time_x;\n};\n\nvar toHHMMSS = function toHHMMSS(secs) {\n  var sec_num = parseInt(secs, 10);\n  var hours = Math.floor(sec_num / 3600);\n  var minutes = Math.floor(sec_num / 60) % 60;\n  var seconds = sec_num % 60;\n  return [hours, minutes, seconds].map(function (v) {\n    return v < 10 ? \"0\" + v : v;\n  }).filter(function (v, i) {\n    return v !== \"00\" || i > 0;\n  }).join(\":\");\n};\n\n//# sourceURL=webpack:///./src/components/timer/TimerComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ButtonComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ButtonComponent */ \"./src/components/ButtonComponent.js\");\n\n\nvar rootEl = document.querySelector(\"#wrapper\");\n\nvar renderContainer = function renderContainer() {\n  var div = document.createElement(\"div\");\n  div.className = \"parent-div\";\n  div.appendChild(Object(_components_ButtonComponent__WEBPACK_IMPORTED_MODULE_1__[\"ProjectComponent\"])());\n  return div;\n};\n\nrootEl.appendChild(renderContainer());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.css?");

/***/ })

/******/ });