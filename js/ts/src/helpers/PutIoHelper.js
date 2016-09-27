"use strict";
const request = require('request');
const fs = require('fs');
class PutIoHelper {
    constructor(client) {
        this.API_URL = 'https://api.put.io/v2/';
        this.putioClient = client;
    }
    requestData(requestType, apiEndpoint, apiParameters) {
        let apiCall = `${this.API_URL}${apiEndpoint}?oauth_token=${this.putioClient.oAuthToken}`;
        if (requestType === 'GET') {
            apiParameters.forEach(element => {
                apiCall = apiCall.concat(element);
            });
            const options = {
                url: `${apiCall}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            return new Promise((resolve, reject) => {
                request.get(options, (error, response, body) => {
                    if (!error && response.statusCode === 200) {
                        resolve(body);
                    }
                    else {
                        reject(`Error:
                                Status:${response.statusCode}
                                Body:${body}
                                ErrMsg:${error}`);
                    }
                });
            });
        }
        else {
            const options = {
                url: `${apiCall}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            return new Promise((resolve, reject) => {
                if (apiParameters.length > 0) {
                    request.post(options, (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            resolve(body);
                        }
                        else {
                            reject(`Error:
                                    Status:${response.statusCode}
                                    Body:${body}
                                    ErrMsg:${error}`);
                        }
                    }).form(JSON.parse(apiParameters[0]));
                }
                else {
                    request.post(options, (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            resolve(body);
                        }
                        else {
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
    uploadData(requestType, apiEndpoint, apiParameters) {
        const apiCall = `https://upload.put.io/v2/files/upload?oauth_token=${this.putioClient.oAuthToken}`;
        let formData = {};
        if (apiParameters.length === 1) {
            formData = {
                file: fs.createReadStream(apiParameters[0])
            };
        }
        else if (apiParameters.length === 2) {
            if (Number.isNaN(Number(apiParameters[1]))) {
                formData = {
                    file: fs.createReadStream(apiParameters[0]),
                    filename: apiParameters[1]
                };
            }
            else {
                formData = {
                    file: fs.createReadStream(apiParameters[0]),
                    parent_id: apiParameters[1]
                };
            }
        }
        else {
            formData = {
                file: fs.createReadStream(apiParameters[0]),
                filename: apiParameters[1],
                parent_id: apiParameters[2]
            };
        }
        return new Promise((resolve, reject) => {
            request.post({ url: `${apiCall}`, formData: formData }, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    resolve(body);
                }
                else {
                    reject(`Error:
                            Status:${response.statusCode}
                            Body:${body}
                            ErrMsg:${error}`);
                }
            });
        });
    }
}
exports.PutIoHelper = PutIoHelper;
//# sourceMappingURL=PutIoHelper.js.map