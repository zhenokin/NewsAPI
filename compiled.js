'use strict';

var _TYPE_OF_SEARCH_DESCR;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MY_API = 'ae0fbd3d023b434d8433d1e421bae74f';
var TYPE_OF_SEARCH_NAMES = {
  TOP_HEADLINES: 'top-headlines',
  EVERYTHING: 'everything',
  SOURCES: 'sources'
};
var TYPE_OF_SEARCH_DESCRIPTIONS = (_TYPE_OF_SEARCH_DESCR = {}, _defineProperty(_TYPE_OF_SEARCH_DESCR, TYPE_OF_SEARCH_NAMES.TOP_HEADLINES, {
  availableParameters: ['country', 'category', 'sources', 'q', 'pageSize', 'page']
}), _defineProperty(_TYPE_OF_SEARCH_DESCR, TYPE_OF_SEARCH_NAMES.EVERYTHING, {
  availableParameters: ['domains', 'excludeDomains', 'sources', 'q', 'pageSize', 'page', 'from', 'to', 'language', 'sortBy']
}), _defineProperty(_TYPE_OF_SEARCH_DESCR, TYPE_OF_SEARCH_NAMES.SOURCES, {
  availableParameters: ['country', 'category', 'language']
}), _TYPE_OF_SEARCH_DESCR);
var PARAMETERS = {
  country: {
    availableValues: ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'],
    elementType: 'input',
    options: {
      maxLength: 2,
      id: 'field_country',
      list: 'countries_list',
      type: 'text',
      placeholder: 'country'
    },
    dataList: 'input'
  },
  category: {
    availableValues: ['', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    elementType: 'select',
    options: {
      id: 'field_category'
    },
    dataList: 'select'
  },
  sources: {
    elementType: 'input',
    options: {
      id: 'field_sources',
      type: 'text',
      placeholder: 'sources'
    }
  },
  q: {
    elementType: 'input',
    options: {
      id: 'field_q',
      type: 'text',
      placeholder: 'q',
      title: 'keyword'
    }
  },
  pageSize: {
    elementType: 'input',
    options: {
      id: 'field_pageSize',
      type: 'number',
      max: 100,
      min: 1,
      placeholder: 'pageSize'
    }
  },
  // page: {
  // },
  language: {
    availableValues: ['', 'ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'],
    elementType: 'select',
    options: {
      id: 'field_language'
    },
    dataList: 'select'
  },
  sortBy: {
    availableValues: ['', 'relevancy', 'popularity', 'publishedAt'],
    elementType: 'select',
    options: {
      id: 'field_sortBy',
      placeholder: 'sortBy'
    },
    dataList: 'select'
  },
  from: {
    elementType: 'input',
    options: {
      id: 'field_from',
      placeholder: 'from',
      type: 'date'
    }
  },
  to: {
    elementType: 'input',
    options: {
      id: 'field_to',
      placeholder: 'to',
      type: 'date'
    }
  }
};
var ListOfParametersFields = {};

var createDataListForField = function createDataListForField(_ref) {
  var values = _ref.values,
      _ref$parent = _ref.parent,
      parent = _ref$parent === void 0 ? null : _ref$parent,
      _ref$listId = _ref.listId,
      listId = _ref$listId === void 0 ? '' : _ref$listId;

  if (!parent) {
    parent = document.createElement('datalist');
    parent.id = listId;
  }

  values.forEach(function (value) {
    var newOption = document.createElement('option');
    newOption.innerHTML = value;
    parent.appendChild(newOption);
  });
  return parent;
};

var createParameterFields = function createParameterFields() {
  var form = document.forms[0];
  var submitButton = document.getElementById('settings_form_submit');
  var fieldSet = document.createElement('fieldset');
  fieldSet.setAttribute('id', 'fieldset_settings');
  fieldSet.innerHTML = 'Settings';
  form.insertBefore(fieldSet, submitButton);
  Object.keys(PARAMETERS).forEach(function (key) {
    var _PARAMETERS$key = PARAMETERS[key],
        availableValues = _PARAMETERS$key.availableValues,
        elementType = _PARAMETERS$key.elementType,
        options = _PARAMETERS$key.options,
        dataList = _PARAMETERS$key.dataList;
    var tagP = document.createElement('p');
    var tagLabel = document.createElement('label');
    var newField = document.createElement(elementType);
    var dataListElement;
    tagP.appendChild(tagLabel);
    tagP.appendChild(newField);
    tagLabel.innerHTML = key;
    Object.keys(options).forEach(function (prop) {
      newField.setAttribute(prop, options[prop]);
      newField.setAttribute('class', 'inputs');
    });
    ListOfParametersFields[key] = tagP;
    tagP.style.justifyContent = 'space-between';

    if (dataList) {
      switch (dataList) {
        case 'input':
          dataListElement = createDataListForField({
            values: availableValues,
            listId: options.list
          });
          break;

        case 'select':
          dataListElement = createDataListForField({
            values: availableValues,
            parent: newField
          });
          break;
      }
    }

    if (dataListElement !== newField) {
      tagP.appendChild(newField);
    }

    if (dataListElement) {
      tagP.appendChild(dataListElement);
    }

    fieldSet.appendChild(tagP);
  });
};

var preperSettingsForCurrentTypeSearch = function preperSettingsForCurrentTypeSearch() {
  var typeOfSearch = document.getElementById('type_of_search').value;
  var availableParameters = TYPE_OF_SEARCH_DESCRIPTIONS[typeOfSearch].availableParameters;
  Object.keys(ListOfParametersFields).forEach(function (parameter) {
    var field = ListOfParametersFields[parameter];
    availableParameters.includes(parameter) ? field.style.display = 'flex' : field.style.display = 'none';
  });
};

var preperRequestParameters = function preperRequestParameters() {
  var typeOfSearch = document.getElementById('type_of_search').value;
  var availableParameters = TYPE_OF_SEARCH_DESCRIPTIONS[typeOfSearch].availableParameters;
  var requestParameters = {};
  Object.keys(ListOfParametersFields).forEach(function (parameter) {
    var field = ListOfParametersFields[parameter].childNodes[1];

    if (availableParameters.includes(parameter)) {
      requestParameters[parameter] = field.value;
    }
  });
  return requestParameters;
};

var createContainerByDescription = function createContainerByDescription(name, description) {
  var container = document.createElement('div'); //container.className = `${name}_container`;

  container.className = 'info_container';
  var nameContainer = document.createElement('div'); //nameContainer.className = `${name}_name`;

  nameContainer.className = 'info_name';
  nameContainer.style.display = 'inline-block';
  nameContainer.innerHTML = name;
  container.appendChild(nameContainer);
  var descriptionContainer = document.createElement('div'); //descriptionContainer.className = `${name}_description`;

  descriptionContainer.className = 'info_description';
  descriptionContainer.style.display = 'inline-block';
  descriptionContainer.innerHTML = description && _typeof(description) === 'object' ? Object.keys(description).reduce(function (str, key) {
    return str + "".concat(key, ":  ").concat(description[key], " ////");
  }, '') : description;
  container.appendChild(descriptionContainer);
  return container;
};

var resetRezults = function resetRezults() {
  var results = document.getElementById('results');
  results.style.border = '';

  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
};

var createVisualResult = function createVisualResult(result) {
  var listOfResults = document.getElementById('results');
  var container = document.createElement('div');
  container.className = 'result_container';
  Object.keys(result).forEach(function (desc) {
    var descriptionContainer = createContainerByDescription(desc, result[desc]);
    container.appendChild(descriptionContainer);
  });
  listOfResults.style.border = '3px solid black';
  listOfResults.appendChild(container);
};

var processingOfResults = function processingOfResults(results) {
  var arcticlesOrSources = results.articles || results.sources;

  if (!arcticlesOrSources.length) {
    alert('nothing founded');
  } else {
    resetRezults();
    arcticlesOrSources.forEach(function (news) {
      createVisualResult(news);
    });
  }
};

var processingOfError = function processingOfError(error) {
  alert("code: ".concat(error.code, "\nmessage: ").concat(error.message, "\nstatus: ").concat(error.status));
};

var sendRequest = function sendRequest(parameters) {
  var url = "https://newsapi.org/v2/".concat(document.getElementById('type_of_search').value, "?");
  Object.keys(parameters).forEach(function (parameter) {
    if (parameters[parameter]) {
      url += "".concat(parameter, "=").concat(parameters[parameter], "&");
    }
  });
  url += "apiKey=".concat(MY_API);
  var req = new Request(url);
  fetch(req).then(function (resp) {
    if (resp.status !== 200) {
      return Promise.reject(resp); //alert(`status: ${resp.status}\n message: ${resp.statusText}`);
    } else {
      resp.json().then(function (results) {
        return processingOfResults(results);
      });
    }
  }).catch(function (err) {
    err.json().then(function (e) {
      return processingOfError(e);
    });
  });
};

var changePropertyDisabledByInputs = function changePropertyDisabledByInputs(ids, value) {
  ids.forEach(function (id) {
    return document.getElementById(id).disabled = value;
  });
};

var addEventListeners = function addEventListeners() {
  document.getElementById('type_of_search').onchange = function () {
    resetRezults();
    preperSettingsForCurrentTypeSearch();
    changePropertyDisabledByInputs(['field_sources', 'field_country', 'field_category'], false);
  };

  document.getElementsByName('settings_form')[0].onsubmit = function () {
    var requestParameters = preperRequestParameters();
    sendRequest(requestParameters);
    return false;
  };

  document.getElementById('field_sources').onchange = function () {
    var sourcesValue = document.getElementById('field_sources').value;

    if (sourcesValue) {
      changePropertyDisabledByInputs(['field_country', 'field_category'], true);
    } else {
      changePropertyDisabledByInputs(['field_country', 'field_category'], false);
    }
  };

  document.getElementById('field_country').onchange = function () {
    var hasValue = !!document.getElementById('field_country').value;
    changePropertyDisabledByInputs(['field_sources'], hasValue);
  };

  document.getElementById('field_category').onchange = function () {
    var hasValue = !!document.getElementById('field_category').value;
    changePropertyDisabledByInputs(['field_sources'], hasValue);
  };
};

var StartWork = function StartWork() {
  createParameterFields();
  preperSettingsForCurrentTypeSearch();
  addEventListeners();
};

StartWork();
