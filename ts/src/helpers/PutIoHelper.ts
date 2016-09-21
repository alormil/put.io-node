import {Client} from './Client';
import * as request from 'request';
import * as fs from 'fs';

export class PutIoHelper {

    private putioClient: Client;
    private API_URL: string = 'https://api.put.io/v2/';

    constructor (client: Client) {
        this.putioClient = client;
    }

    /**
     * 
     * Executes GET & POST requests to put.io's API and also passes the proper paramaters
     * 
     * @param requestType: Type of API call that is made, can either be GET or POST
     * @param apiEndpoint: Endpoint of the put.io API that will be called
     * @param apiParameters: API parameters that will be passed to API call
     */
    protected requestData(requestType: string, apiEndpoint: string, apiParameters: string[]): Promise<string> {
        // URL that will be used to make the API is constructured
        let apiCall = `${this.API_URL}${apiEndpoint}?oauth_token=${this.putioClient.oAuthToken}`;

        // Return Promise object with GET or POST response
        if (requestType === 'GET') {
            apiParameters.forEach(element => {
                apiCall = apiCall.concat(element);
            });
            // Format the request so that we only return JSON response
            const options = {
                url: `${apiCall}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            return new Promise<string>((resolve, reject) => {
                request.get(options, (error, response, body) => {
                    if (!error && response.statusCode === 200) {
                        resolve(body);
                    } else {
                        reject(`Error:
                                Status:${response.statusCode}
                                Body:${body}
                                ErrMsg:${error}`);
                    }
                });
            });
        } else {
            // In this scenario we are calling a POST request either with some or no parameters
            // Format the request so that we only return JSON response
            const options = {
                url: `${apiCall}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            return new Promise<string>((resolve, reject) => {
                // In the case we are passing parameters we are adding them using URL-Encoded Forms
                //  So we will be passing the values as JSON object
                if (apiParameters.length > 0) {
                    request.post(options, (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            resolve(body);
                        } else {
                            reject(`Error:
                                    Status:${response.statusCode}
                                    Body:${body}
                                    ErrMsg:${error}`);
                        }
                    }).form(JSON.parse(apiParameters[0]));
                } else {
                    // Otherwise we do a regular POST request
                    request.post(options, (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            resolve(body);
                        } else {
                            reject(`Error:
                                    Status:${response.statusCode}
                                    Body:${body}
                                    ErrMsg:${error}`);
                        }
                    });
                }
            });
        }
    }

    /**
     * 
     * Executes POST requests to put.io's API and also passes the proper paramaters
     * 
     * @param requestType: Type of API call that is made, can either be GET or POST
     * @param apiEndpoint: Endpoint of the put.io API that will be called
     * @param apiParameters: API parameters that will be passed to API call
     * 
     * This function handles the exeption that is needed to upload files
     */
    protected uploadData(requestType: string, apiEndpoint: string, apiParameters: string[]): Promise<string> {

        const apiCall = `https://upload.put.io/v2/files/upload?oauth_token=${this.putioClient.oAuthToken}`;
        let formData = {};

        if (apiParameters.length === 1) {
            formData = {
                file: fs.createReadStream(apiParameters[0])
            };
        } else if (apiParameters.length === 2) {
            if ( Number.isNaN(Number(apiParameters[1]))) {
                formData = {
                    file: fs.createReadStream(apiParameters[0]),
                    filename: apiParameters[1]
                };
            } else {
                formData = {
                    file: fs.createReadStream(apiParameters[0]),
                    parent_id: apiParameters[1]
                };
            }
        } else {
            formData = {
                file: fs.createReadStream(apiParameters[0]),
                filename: apiParameters[1],
                parent_id: apiParameters[2]
            };
        }
        return new Promise<string>((resolve, reject) => {
            request.post({url: `${apiCall}`, formData: formData}, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    resolve(body);
                } else {
                    reject(`Error:
                            Status:${response.statusCode}
                            Body:${body}
                            ErrMsg:${error}`);
                }
            });
        });
    }
}
