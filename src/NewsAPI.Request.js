'use strict';

import { TYPE_OF_SEARCH_DESCRIPTIONS, MY_API } from './NewsAPI.Constants';
import 'whatwg-fetch';

class NewsRequest {
    preperRequestParameters(typeOfSearch, ListOfParametersFields) {
        const availableParameters = TYPE_OF_SEARCH_DESCRIPTIONS[typeOfSearch].availableParameters;
        const requestParameters = {};
        Object.keys(ListOfParametersFields).forEach(parameter => {
            const field = ListOfParametersFields[parameter].childNodes[1];
            if (availableParameters.includes(parameter)) {
                requestParameters[parameter] = field.value;
            }
        });
        return requestParameters;
    }

    sendRequest(typeOfSearch, ListOfParametersFields) {
        const url = this.createUrl(typeOfSearch, ListOfParametersFields);
        const req = new Request(url);
        return window.fetch(req);
    }

    createUrl(typeOfSearch, ListOfParametersFields) {
        const parameters = this.preperRequestParameters(typeOfSearch, ListOfParametersFields);
        let url = `https://newsapi.org/v2/${typeOfSearch}?`;
        Object.keys(parameters).forEach(parameter => {
            if(parameters[parameter]) {
                url += `${parameter}=${parameters[parameter]}&`;
            }
        });
        url += `apiKey=${MY_API}`;
        return url;
    }
}

export default NewsRequest;