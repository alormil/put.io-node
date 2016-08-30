import {Client} from './Client';
import * as request from 'request';

export class PutIoHelper {

    private putioClient: Client;
    private API_URL: string = 'https://api.put.io/v2/';

    constructor (client: Client) {
        this.putioClient = client;
    }

    protected getData(apiEndpoint: string, apiParameters: string[]): string {
        const url = `${this.API_URL}apiEndpoint?oauth_token=${this.putioClient.oAuthToken}`;
        request(url, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                console.log(body);
                return <string> body;
            } else {
                return <string> error;
            }
        });
    }

    protected postData(apiEndpoint: string, apiParameters: string[]): string {
        return 'Constructing HTTP POST Request ...';
    }
}
