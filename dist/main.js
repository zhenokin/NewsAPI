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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/NewsAPI.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/NewsAPI.Constants.js":
/*!**********************************!*\
  !*** ./src/NewsAPI.Constants.js ***!
  \**********************************/
/*! exports provided: MY_API, PARAMETERS, TYPE_OF_SEARCH_DESCRIPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MY_API\", function() { return MY_API; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PARAMETERS\", function() { return PARAMETERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TYPE_OF_SEARCH_DESCRIPTIONS\", function() { return TYPE_OF_SEARCH_DESCRIPTIONS; });\n\n\nvar _TYPE_OF_SEARCH_DESCR;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar MY_API = 'ae0fbd3d023b434d8433d1e421bae74f';\nvar TYPE_OF_SEARCH_NAMES = {\n  TOP_HEADLINES: 'top-headlines',\n  EVERYTHING: 'everything',\n  SOURCES: 'sources'\n};\nvar TYPE_OF_SEARCH_DESCRIPTIONS = (_TYPE_OF_SEARCH_DESCR = {}, _defineProperty(_TYPE_OF_SEARCH_DESCR, TYPE_OF_SEARCH_NAMES.TOP_HEADLINES, {\n  availableParameters: ['country', 'category', 'sources', 'q', 'pageSize', 'page']\n}), _defineProperty(_TYPE_OF_SEARCH_DESCR, TYPE_OF_SEARCH_NAMES.EVERYTHING, {\n  availableParameters: ['domains', 'excludeDomains', 'sources', 'q', 'pageSize', 'page', 'from', 'to', 'language', 'sortBy']\n}), _defineProperty(_TYPE_OF_SEARCH_DESCR, TYPE_OF_SEARCH_NAMES.SOURCES, {\n  availableParameters: ['country', 'category', 'language']\n}), _TYPE_OF_SEARCH_DESCR);\nvar PARAMETERS = {\n  country: {\n    availableValues: ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'],\n    elementType: 'input',\n    options: {\n      maxLength: 2,\n      id: 'field_country',\n      list: 'countries_list',\n      type: 'text',\n      placeholder: 'country'\n    },\n    dataList: 'input'\n  },\n  category: {\n    availableValues: ['', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],\n    elementType: 'select',\n    options: {\n      id: 'field_category'\n    },\n    dataList: 'select'\n  },\n  sources: {\n    elementType: 'input',\n    options: {\n      id: 'field_sources',\n      type: 'text',\n      placeholder: 'sources'\n    }\n  },\n  q: {\n    elementType: 'input',\n    options: {\n      id: 'field_q',\n      type: 'text',\n      placeholder: 'q',\n      title: 'keyword'\n    }\n  },\n  pageSize: {\n    elementType: 'input',\n    options: {\n      id: 'field_pageSize',\n      type: 'number',\n      max: 100,\n      min: 1,\n      placeholder: 'pageSize'\n    }\n  },\n  // page: {\n  // },\n  language: {\n    availableValues: ['', 'ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'],\n    elementType: 'select',\n    options: {\n      id: 'field_language'\n    },\n    dataList: 'select'\n  },\n  sortBy: {\n    availableValues: ['', 'relevancy', 'popularity', 'publishedAt'],\n    elementType: 'select',\n    options: {\n      id: 'field_sortBy',\n      placeholder: 'sortBy'\n    },\n    dataList: 'select'\n  },\n  from: {\n    elementType: 'input',\n    options: {\n      id: 'field_from',\n      placeholder: 'from',\n      type: 'date'\n    }\n  },\n  to: {\n    elementType: 'input',\n    options: {\n      id: 'field_to',\n      placeholder: 'to',\n      type: 'date'\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./src/NewsAPI.Constants.js?");

/***/ }),

/***/ "./src/NewsAPI.Helpers.js":
/*!********************************!*\
  !*** ./src/NewsAPI.Helpers.js ***!
  \********************************/
/*! exports provided: createDataListForField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDataListForField\", function() { return createDataListForField; });\n\n\nvar createDataListForField = function createDataListForField(_ref) {\n  var values = _ref.values,\n      _ref$parent = _ref.parent,\n      parent = _ref$parent === void 0 ? null : _ref$parent,\n      _ref$listId = _ref.listId,\n      listId = _ref$listId === void 0 ? '' : _ref$listId;\n\n  if (!parent) {\n    parent = document.createElement('datalist');\n    parent.id = listId;\n  }\n\n  values.forEach(function (value) {\n    var newOption = document.createElement('option');\n    newOption.innerHTML = value;\n    parent.appendChild(newOption);\n  });\n  return parent;\n};\n\n\n\n//# sourceURL=webpack:///./src/NewsAPI.Helpers.js?");

/***/ }),

/***/ "./src/NewsAPI.Request.js":
/*!********************************!*\
  !*** ./src/NewsAPI.Request.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewsAPI_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsAPI.Constants */ \"./src/NewsAPI.Constants.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar NewsRequest =\n/*#__PURE__*/\nfunction () {\n  function NewsRequest() {\n    _classCallCheck(this, NewsRequest);\n  }\n\n  _createClass(NewsRequest, [{\n    key: \"preperRequestParameters\",\n    value: function preperRequestParameters(typeOfSearch, ListOfParametersFields) {\n      var availableParameters = _NewsAPI_Constants__WEBPACK_IMPORTED_MODULE_0__[\"TYPE_OF_SEARCH_DESCRIPTIONS\"][typeOfSearch].availableParameters;\n      var requestParameters = {};\n      Object.keys(ListOfParametersFields).forEach(function (parameter) {\n        var field = ListOfParametersFields[parameter].childNodes[1];\n\n        if (availableParameters.indexOf(parameter) !== -1) {\n          requestParameters[parameter] = field.value;\n        }\n      });\n      return requestParameters;\n    }\n  }, {\n    key: \"sendRequest\",\n    value: function sendRequest(typeOfSearch, ListOfParametersFields) {\n      var url = this.createUrl(typeOfSearch, ListOfParametersFields);\n      var req = new Request(url);\n      return fetch(req);\n    }\n  }, {\n    key: \"createUrl\",\n    value: function createUrl(typeOfSearch, ListOfParametersFields) {\n      var parameters = this.preperRequestParameters(typeOfSearch, ListOfParametersFields);\n      var url = \"https://newsapi.org/v2/\".concat(typeOfSearch, \"?\");\n      Object.keys(parameters).forEach(function (parameter) {\n        if (parameters[parameter]) {\n          url += \"\".concat(parameter, \"=\").concat(parameters[parameter], \"&\");\n        }\n      });\n      url += \"apiKey=\".concat(_NewsAPI_Constants__WEBPACK_IMPORTED_MODULE_0__[\"MY_API\"]);\n      return url;\n    }\n  }]);\n\n  return NewsRequest;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsRequest);\n\n//# sourceURL=webpack:///./src/NewsAPI.Request.js?");

/***/ }),

/***/ "./src/NewsAPI.js":
/*!************************!*\
  !*** ./src/NewsAPI.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewsAPI_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsAPI.Constants */ \"./src/NewsAPI.Constants.js\");\n/* harmony import */ var _NewsAPI_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsAPI.Helpers */ \"./src/NewsAPI.Helpers.js\");\n/* harmony import */ var _NewsAPI_Request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsAPI.Request */ \"./src/NewsAPI.Request.js\");\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\nvar createContainerByDescription = function createContainerByDescription(name, description) {\n  var container = document.createElement('div');\n  container.className = 'info_container';\n  var nameContainer = document.createElement('div');\n  nameContainer.className = 'info_name';\n  nameContainer.style.display = 'inline-block';\n  nameContainer.innerHTML = name;\n  container.appendChild(nameContainer);\n  var descriptionContainer = document.createElement('div');\n  descriptionContainer.className = 'info_description';\n  descriptionContainer.style.display = 'inline-block';\n  descriptionContainer.innerHTML = description && _typeof(description) === 'object' ? Object.keys(description).reduce(function (str, key) {\n    return str + \"\".concat(key, \":  \").concat(description[key], \" ////\");\n  }, '') : description;\n  container.appendChild(descriptionContainer);\n  return container;\n};\n\nvar resetRezults = function resetRezults() {\n  var results = document.getElementById('results');\n  results.style.border = '';\n\n  while (results.firstChild) {\n    results.removeChild(results.firstChild);\n  }\n};\n\nvar createVisualResult = function createVisualResult(result) {\n  var listOfResults = document.getElementById('results');\n  var container = document.createElement('div');\n  container.className = 'result_container';\n  Object.keys(result).forEach(function (desc) {\n    var descriptionContainer = createContainerByDescription(desc, result[desc]);\n    container.appendChild(descriptionContainer);\n  });\n  listOfResults.style.border = '3px solid black';\n  listOfResults.appendChild(container);\n};\n\nvar processingOfResults = function processingOfResults(results) {\n  var arcticlesOrSources = results.articles || results.sources;\n\n  if (!arcticlesOrSources.length) {\n    alert('nothing founded');\n  } else {\n    arcticlesOrSources.forEach(function (news) {\n      createVisualResult(news);\n    });\n  }\n};\n\nvar processingOfError = function processingOfError(error) {\n  alert(\"code: \".concat(error.code, \"\\nmessage: \").concat(error.message, \"\\nstatus: \").concat(error.status));\n};\n\nvar changePropertyDisabledByInputs = function changePropertyDisabledByInputs(ids, value) {\n  ids.forEach(function (id) {\n    return document.getElementById(id).disabled = value;\n  });\n};\n\nvar MainView =\n/*#__PURE__*/\nfunction () {\n  function MainView() {\n    _classCallCheck(this, MainView);\n\n    this.ListOfParametersFields = {};\n    this.request = new _NewsAPI_Request__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    this.createView(); //this.processingOfErrorBind = processingOfError.bind(this);\n    //this.processingOfResultsBind = processingOfResults.bind(this);\n  }\n\n  _createClass(MainView, [{\n    key: \"createView\",\n    value: function createView() {\n      this.createParameterFields();\n      this.preperSettingsForCurrentTypeSearch();\n      this.addEventListeners();\n    }\n  }, {\n    key: \"getTypeOfSearch\",\n    value: function getTypeOfSearch() {\n      return document.getElementById('type_of_search').value;\n    }\n  }, {\n    key: \"createParameterFields\",\n    value: function createParameterFields() {\n      var _this = this;\n\n      var form = document.forms[0];\n      var submitButton = document.getElementById('settings_form_submit');\n      var fieldSet = document.createElement('fieldset');\n      fieldSet.setAttribute('id', 'fieldset_settings');\n      fieldSet.innerHTML = 'Settings';\n      form.insertBefore(fieldSet, submitButton);\n      Object.keys(_NewsAPI_Constants__WEBPACK_IMPORTED_MODULE_0__[\"PARAMETERS\"]).forEach(function (key) {\n        var _PARAMETERS$key = _NewsAPI_Constants__WEBPACK_IMPORTED_MODULE_0__[\"PARAMETERS\"][key],\n            availableValues = _PARAMETERS$key.availableValues,\n            elementType = _PARAMETERS$key.elementType,\n            options = _PARAMETERS$key.options,\n            dataList = _PARAMETERS$key.dataList;\n        var tagP = document.createElement('p');\n        var tagLabel = document.createElement('label');\n        var newField = document.createElement(elementType);\n        var dataListElement;\n        tagP.appendChild(tagLabel);\n        tagP.appendChild(newField);\n        tagLabel.innerHTML = key;\n        Object.keys(options).forEach(function (prop) {\n          newField.setAttribute(prop, options[prop]);\n          newField.setAttribute('class', 'inputs');\n        });\n        _this.ListOfParametersFields[key] = tagP;\n        tagP.style.justifyContent = 'space-between';\n\n        if (dataList) {\n          switch (dataList) {\n            case 'input':\n              dataListElement = Object(_NewsAPI_Helpers__WEBPACK_IMPORTED_MODULE_1__[\"createDataListForField\"])({\n                values: availableValues,\n                listId: options.list\n              });\n              break;\n\n            case 'select':\n              dataListElement = Object(_NewsAPI_Helpers__WEBPACK_IMPORTED_MODULE_1__[\"createDataListForField\"])({\n                values: availableValues,\n                parent: newField\n              });\n              break;\n          }\n        }\n\n        if (dataListElement !== newField) {\n          tagP.appendChild(newField);\n        }\n\n        if (dataListElement) {\n          tagP.appendChild(dataListElement);\n        }\n\n        fieldSet.appendChild(tagP);\n      });\n    }\n  }, {\n    key: \"preperSettingsForCurrentTypeSearch\",\n    value: function preperSettingsForCurrentTypeSearch() {\n      var _this2 = this;\n\n      var availableParameters = _NewsAPI_Constants__WEBPACK_IMPORTED_MODULE_0__[\"TYPE_OF_SEARCH_DESCRIPTIONS\"][this.getTypeOfSearch()].availableParameters;\n      Object.keys(this.ListOfParametersFields).forEach(function (parameter) {\n        var field = _this2.ListOfParametersFields[parameter];\n        availableParameters.indexOf(parameter) !== -1 ? field.style.display = 'flex' : field.style.display = 'none';\n      });\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this3 = this;\n\n      document.getElementById('type_of_search').onchange = function () {\n        _this3.resetRezults();\n\n        _this3.preperSettingsForCurrentTypeSearch();\n\n        changePropertyDisabledByInputs(['field_sources', 'field_country', 'field_category'], false);\n      };\n\n      document.getElementsByName('settings_form')[0].onsubmit = function () {\n        _this3.resetRezults();\n\n        _this3.request.sendRequest(_this3.getTypeOfSearch(), _this3.ListOfParametersFields).then(function (resp) {\n          if (resp.status !== 200) {\n            return Promise.reject(resp); //alert(`status: ${resp.status}\\n message: ${resp.statusText}`);\n          } else {\n            resp.json().then(function (results) {\n              return processingOfResults(results);\n            });\n          }\n        }).catch(function (err) {\n          err.json().then(function (e) {\n            return processingOfError(e);\n          });\n        });\n\n        return false;\n      };\n\n      document.getElementById('field_sources').onchange = function () {\n        var sourcesValue = document.getElementById('field_sources').value;\n\n        if (sourcesValue) {\n          changePropertyDisabledByInputs(['field_country', 'field_category'], true);\n        } else {\n          changePropertyDisabledByInputs(['field_country', 'field_category'], false);\n        }\n      };\n\n      document.getElementById('field_country').onchange = function () {\n        var hasValue = !!document.getElementById('field_country').value;\n        changePropertyDisabledByInputs(['field_sources'], hasValue);\n      };\n\n      document.getElementById('field_category').onchange = function () {\n        var hasValue = !!document.getElementById('field_category').value;\n        changePropertyDisabledByInputs(['field_sources'], hasValue);\n      };\n    }\n  }, {\n    key: \"resetRezults\",\n    value: function resetRezults() {\n      var results = document.getElementById('results');\n      results.style.border = '';\n\n      while (results.firstChild) {\n        results.removeChild(results.firstChild);\n      }\n    }\n  }]);\n\n  return MainView;\n}();\n\nnew MainView();\n\n//# sourceURL=webpack:///./src/NewsAPI.js?");

/***/ })

/******/ });