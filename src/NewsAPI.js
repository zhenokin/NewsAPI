'use strict';

import { TYPE_OF_SEARCH_DESCRIPTIONS, PARAMETERS } from './NewsAPI.Constants';
import { createDataListForField } from './NewsAPI.Helpers';
import NewsRequest from './NewsAPI.Request';

const createContainerByDescription = (name, description) => {
    const container = document.createElement('div');
    container.className = 'info_container';

    const nameContainer = document.createElement('div');
    nameContainer.className = 'info_name';
    nameContainer.style.display = 'inline-block';
    nameContainer.innerHTML = name;
    container.appendChild(nameContainer);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'info_description';
    descriptionContainer.style.display = 'inline-block';
    descriptionContainer.innerHTML = description && typeof description === 'object' ? Object.keys(description).reduce((str, key) => str +`${key}:  ${description[key]} ////`,'') : description;
    container.appendChild(descriptionContainer);

    return container;

};

const resetRezults = () => {
    const results = document.getElementById('results');
    results.style.border = '';
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
    const arcticlesOrSources = results.articles || results.sources;
    if (!arcticlesOrSources.length ) {
        alert('nothing founded');
    } else {
        arcticlesOrSources.forEach(news => {
            createVisualResult(news);
        });
    }
};

const processingOfError = error => {
    alert(`code: ${error.code}\nmessage: ${error.message}\nstatus: ${error.status}`);
};

const changePropertyDisabledByInputs = (ids, value) => {
    ids.forEach(id => document.getElementById(id).disabled = value);
};

class MainView {
    constructor() {
        this.ListOfParametersFields = {};
        this.request = new NewsRequest();
        this.createView();
        //this.processingOfErrorBind = processingOfError.bind(this);
        //this.processingOfResultsBind = processingOfResults.bind(this);
    }

    createView() {
        this.createParameterFields();
        this.preperSettingsForCurrentTypeSearch();
        this.addEventListeners();
    }

    getTypeOfSearch() {
        return document.getElementById('type_of_search').value;
    }

    createParameterFields() {
        const form = document.forms[0];
        const submitButton = document.getElementById('settings_form_submit');
        const fieldSet = document.createElement('fieldset');
    
        fieldSet.setAttribute('id', 'fieldset_settings');
        fieldSet.innerHTML = 'Settings';
        form.insertBefore(fieldSet, submitButton);
    
    
    
        Object.keys(PARAMETERS).forEach(key => {
            const { availableValues, elementType, options, dataList } = PARAMETERS[key];
            const tagP = document.createElement('p');
            const tagLabel = document.createElement('label');
            const newField = document.createElement(elementType);
            let dataListElement;
    
            tagP.appendChild(tagLabel);
            tagP.appendChild(newField);
            tagLabel.innerHTML = key;
            Object.keys(options).forEach(prop => {
                newField.setAttribute(prop, options[prop]);
                newField.setAttribute('class', 'inputs');
            });
    
            this.ListOfParametersFields[key] = tagP;
            tagP.style.justifyContent = 'space-between';
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
                tagP.appendChild(newField);
            }
            if (dataListElement) {
                tagP.appendChild(dataListElement);
            }
            fieldSet.appendChild(tagP);
        });
    }

    preperSettingsForCurrentTypeSearch() {
        const availableParameters = TYPE_OF_SEARCH_DESCRIPTIONS[this.getTypeOfSearch()].availableParameters;
        Object.keys(this.ListOfParametersFields).forEach(parameter => {
            const field = this.ListOfParametersFields[parameter];
            availableParameters.includes(parameter) ? field.style.display = 'flex' : field.style.display = 'none';
        });
    }

    addEventListeners() {
        document.getElementById('type_of_search').onchange = () => {
            this.resetRezults();
            this.preperSettingsForCurrentTypeSearch();
            changePropertyDisabledByInputs(['field_sources', 'field_country', 'field_category'], false);
        };
    
        document.getElementsByName('settings_form')[0].onsubmit = () => {
            this.resetRezults();
            this.request.sendRequest(this.getTypeOfSearch(), this.ListOfParametersFields)
                .then((resp) => {
                    if (resp.status !== 200) {
                        return Promise.reject(resp);
                        //alert(`status: ${resp.status}\n message: ${resp.statusText}`);
                    } else {
                        resp.json()
                            .then(results => processingOfResults(results));
                            
                    }
                })
                .catch(err => {
                    err.json()
                        .then(e => processingOfError(e));
                });
            return false;
        };
    
        document.getElementById('field_sources').onchange = () => {
            const sourcesValue = document.getElementById('field_sources').value;
            if (sourcesValue) {
                changePropertyDisabledByInputs(['field_country', 'field_category'], true);
            } else {
                changePropertyDisabledByInputs(['field_country', 'field_category'], false);
            }
        };
    
        document.getElementById('field_country').onchange = () => {
            const hasValue = !!document.getElementById('field_country').value;
            changePropertyDisabledByInputs(['field_sources'], hasValue);
        };
    
        document.getElementById('field_category').onchange = () => {
            const hasValue = !!document.getElementById('field_category').value;
            changePropertyDisabledByInputs(['field_sources'], hasValue);
        };
    }

    resetRezults() {
        const results = document.getElementById('results');
        results.style.border = '';
        while(results.firstChild) {
            results.removeChild(results.firstChild);
        }
    }
}

new MainView();