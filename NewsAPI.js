'use strict';

const MY_API = 'ae0fbd3d023b434d8433d1e421bae74f';

const TYPE_OF_SEARCH_NAMES = {
    TOP_HEADLINES: 'top-headlines',
    EVERYTHING: 'everything',
    SOURCES: 'sources'
};

const TYPE_OF_SEARCH_DESCRIPTIONS = {
    [TYPE_OF_SEARCH_NAMES.TOP_HEADLINES]: {
        availableParameters: ['country', 'category', 'sources', 'q', 'pageSize', 'page']
    },
    [TYPE_OF_SEARCH_NAMES.EVERYTHING]: {
        availableParameters: ['domains', 'excludeDomains', 'sources', 'q', 'pageSize', 'page', 'from', 'to', 'language', 'sortBy']
    },
    [TYPE_OF_SEARCH_NAMES.SOURCES]: {
        availableParameters: ['country', 'category', 'language']
    }

};

const PARAMETERS = {
    country: {
        availableValues: [ 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 
            'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 
            'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'],
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
        availableValues: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
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
            placeholder: 'q'
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
        availableValues: ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'],
        elementType: 'select',
        options: {
            id: 'field_language'
        },
        dataList: 'select'
    },
    sortBy: {
        availableValues: ['relevancy', 'popularity', 'publishedAt'],
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
const ListOfParametersFields = {};


const createDataListForField = ({ values, parent = null, listId = '' }) => {
    if (!parent) {
        parent = document.createElement('datalist');
        parent.id = listId;
    }

    values.forEach(value => {
        const newOption = document.createElement('option');
        newOption.innerHTML = value;
        parent.appendChild(newOption);
    });

    return parent;
};

const createParameterFields = () => {
    const form = document.getElementsByName('settings_form')[0];
    const submitButton = document.getElementById('settings_form_submit');
    Object.keys(PARAMETERS).forEach(key => {
        const { availableValues, elementType, options, dataList } = PARAMETERS[key];
        const newField = document.createElement(elementType);
        let dataListElement;
        Object.keys(options).forEach(prop => {
            newField.setAttribute(prop, options[prop]);
            //newField[prop] = options[prop];
        });

        ListOfParametersFields[key] = newField;
        if (dataList) {
            switch(dataList) {
            case 'input': 
                dataListElement = createDataListForField({ values: availableValues, listId: options.list});
                break;
            case 'select':
                dataListElement = createDataListForField({ values: availableValues, parent: newField });
                break;
            }
        }

        if (dataListElement !== newField) {
            form.insertBefore(newField, submitButton);
        }
        if (dataListElement) {
            form.insertBefore(dataListElement, submitButton);
        }
    });
};

const preperSettingsForCurrentTypeSearch = () => {
    const typeOfSearch = document.getElementById('type_of_search').value;
    const availableParameters = TYPE_OF_SEARCH_DESCRIPTIONS[typeOfSearch].availableParameters;
    Object.keys(ListOfParametersFields).forEach(parameter => {
        const field = ListOfParametersFields[parameter];
        availableParameters.indexOf(parameter) !== -1 ? field.style.display = 'inline' : field.style.display = 'none';
    });
};

const preperRequestParameters = () => {
    const typeOfSearch = document.getElementById('type_of_search').value;
    const availableParameters = TYPE_OF_SEARCH_DESCRIPTIONS[typeOfSearch].availableParameters;
    const requestParameters = {};
    Object.keys(ListOfParametersFields).forEach(parameter => {
        const field = ListOfParametersFields[parameter];
        if (availableParameters.indexOf(parameter) !== -1) {
            requestParameters[parameter] = field.value;
        }
    });
    return requestParameters;
};

const processingOfResults = results => {
    
};

const sendRequest = parameters => {
    let url = `https://newsapi.org/v2/${document.getElementById('type_of_search').value}?`;
    Object.keys(parameters).forEach(parameter => {
        if(parameters[parameter]) {
            url += `${parameter}=${parameters[parameter]}&`;
        }
    });
    url += `apiKey=${MY_API}`;
    url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ae0fbd3d023b434d8433d1e421bae74f'
    const req = new Request(url);
    fetch(req)
        .then((resp) => {
            resp.json()
                .then(results => processingOfResults(results));
        })
        .catch(err => {
            console.log(err);
        });
};

const addEventListeners = () => {
    document.getElementById('type_of_search').onchange = () => {
        preperSettingsForCurrentTypeSearch();
    };
    document.getElementsByName('settings_form')[0].onsubmit = () => {
        const requestParameters = preperRequestParameters();
        sendRequest(requestParameters);
        return false;
    };
};


const StartWork = () => {
    createParameterFields();
    preperSettingsForCurrentTypeSearch();
    addEventListeners();
};

StartWork();