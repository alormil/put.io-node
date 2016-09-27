import { Client } from './Client';
export declare class PutIoHelper {
    private putioClient;
    private API_URL;
    constructor(client: Client);
    protected requestData(requestType: string, apiEndpoint: string, apiParameters: string[]): Promise<string>;
    protected uploadData(requestType: string, apiEndpoint: string, apiParameters: string[]): Promise<string>;
}
