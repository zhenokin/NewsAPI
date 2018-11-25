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

const createContainerByDescription = (name, description) => {
    const container = document.createElement('div');
    //container.className = `${name}_container`;
    container.className = 'info_container';

    const nameContainer = document.createElement('div');
    //nameContainer.className = `${name}_name`;
    nameContainer.className = 'info_name';
    nameContainer.style.display = 'inline-block';
    nameContainer.innerHTML = name;
    container.appendChild(nameContainer);

    const descriptionContainer = document.createElement('div');
    //descriptionContainer.className = `${name}_description`;
    descriptionContainer.className = 'info_description';
    descriptionContainer.style.display = 'inline-block';
    descriptionContainer.innerHTML = description;
    container.appendChild(descriptionContainer);

    return container;

};

const resetRezults = () => {
    const results = document.getElementById('results');
    while(results.firstChild) {
        results.removeChild(results.firstChild);
    }
};

const createVisualResult = result => {
    const listOfResults = document.getElementById('results');
    const container = document.createElement('div');
    container.className = 'result_container';
    
    Object.keys(result).forEach(desc => {
        const descriptionContainer = createContainerByDescription(desc, result[desc]);
        container.appendChild(descriptionContainer);
    });

    listOfResults.style.border = '3px solid black';
    listOfResults.appendChild(container);
};

const processingOfResults = results => {
    if (!results.articles.length) {
        alert('nothing founded')
    } else {
        resetRezults();
        results.articles.forEach(news => {
            createVisualResult(news);
        });
    }
};

const sendRequest = parameters => {
    let url = `https://newsapi.org/v2/${document.getElementById('type_of_search').value}?`;
    Object.keys(parameters).forEach(parameter => {
        if(parameters[parameter]) {
            url += `${parameter}=${parameters[parameter]}&`;
        }
    });
    url += `apiKey=${MY_API}`;
    const req = new Request(url);
    fetch(req)
        .then((resp) => {
            if (resp.status === 400) {
                alert(`status: ${resp.status}\n message: ${resp.statusText}`)
            } else {
                resp.json()
                    .then(results => processingOfResults(results));
            }
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

    document.getElementById('field_sources').onchange = () => {
        const sourcesValue = document.getElementById('field_sources').value;
        const countryField = document.getElementById('field_country');
        const categoryField = document.getElementById('field_category');

        if (sourcesValue) {
            countryField.disabled = true;
            categoryField.disabled = true;
        } else {
            countryField.disabled = false;
            categoryField.disabled = false;
        }
    };

    document.getElementById('field_country').onchange = () => {
        const sourcesField = document.getElementById('field_sources');
        const countryValue = document.getElementById('field_country').value;

        countryValue ? sourcesField.disabled = true : sourcesField.disabled = false;
    };

    document.getElementById('field_category').onchange = () => {
        const sourcesField = document.getElementById('field_sources');
        const categoryValue = document.getElementById('field_category').value;

        categoryValue ? sourcesField.disabled = true : sourcesField.disabled = false;
    };
};


const StartWork = () => {
    createParameterFields();
    preperSettingsForCurrentTypeSearch();
    addEventListeners();
};

StartWork();