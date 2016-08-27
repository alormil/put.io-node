import {Client} from './Client';

export class PutIoHelper {

    private putioClient: Client;

    constructor (client: Client) {
        this.putioClient = client;
    }

    protected getRoute(): void {
        console.log('Constructing HTTP GET Request ...');
    }

    protected postRoute(): void {
        console.log('Constructing HTTP POST Request ...');
    }
}
