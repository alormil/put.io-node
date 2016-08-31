import {Client} from './Client';
import * as request from 'request';

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
        // Return Promise object with GET or POST response
        if (requestType === 'GET') {
            return new Promise<string>((resolve, reject) => {
                request.get(options, (error, response, body) => {
                    if (!error && response.statusCode === 200) {
                        resolve(body);
                    } else {
                        reject(error);
                    }
                });
            });
        } else {
            return new Promise<string>((resolve, reject) => {
                request.post(options, (error, response, body) => {
                    if (!error && response.statusCode === 200) {
                        resolve(body);
                    } else {
                        reject(error);
                    }
                });
            });
        }
    }
}
