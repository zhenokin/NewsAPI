'use strict';

const my_api = 'ae0fbd3d023b434d8433d1e421bae74f';

const TYPE_OF_SEARCH_NAMES = {
    TOP_HEADLINES: 'topHeadlines',
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
            type: 'text'
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
        }
    },
    q: {
        elementType: 'input',
        options: {
            id: 'field_q',
            type: 'text'
        }
    },
    pageSize: {
        elementType: 'input',
        options: {
            id: 'field_pageSize',
            type: 'number',
            max: 100,
            min: 1
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
            id: 'field_sortBy'
        },
        dataList: 'select'
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
    const form = document.getElementsByName('settings_form');
    const submitButton = document.getElementById('settings_form_submit');
    Object.keys(PARAMETERS).forEach(key => {
        const { availableValues, elementType, options, dataList } = PARAMETERS[key];
        const newField = document.createElement(`${elementType}`);
        let dataListElement;

        Object.keys(options).forEach(prop => {
            newField[prop] = options[prop];
        });

        ListOfParametersFields[options.id] = newField;
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
        form.insertBefore(dataListElement, submitButton);
    });
};


const StartWork = () => {
    createParameterFields();
    const currentTypeOfSearch = document.getElementById('type_of_search').value;
};

StartWork();