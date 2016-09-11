import {PutIoHelper} from '../helpers/PutIoHelper';

export class Transfers extends PutIoHelper {

    /**
     * 
     * Lists active transfers. If transfer is completed, it is removed from the list.
     */
    public getTransfersList(): Promise<string> {
        return this.requestData('GET', 'transfers/list', []);
    }

    /**
     * 
     * Adds a new transfer.
     * 
     * @params urls: Will be a an array of strings wich will contain the following info :
     *      url: Location of the file to be downloaded.
     *      save_parent_id: Save location of the transfer. This defaults to 0 (which means root).
     *      email_when_complete: If we send an email to user after completion
     */
    public addTransfer(urls: string[]): Promise<string> {
        const paramaters: string[] = [];
        const transferURL = {
            urls : `[${urls.toString}]`
        };
        paramaters.push(JSON.stringify(transferURL));
        return this.requestData('POST', 'transfers/add-multi', paramaters);
    }

    /**
     * 
     * Returns a transfer’s properties.
     * 
     * @param id: ID of the failed download.
     */
    public getTransferId(id: number): Promise<string> {
        return this.requestData('GET', `transfers/${id}`, []);
    }

    /**
     * 
     * Returns a transfer’s properties.
     * 
     * @param id: ID of the failed download.
     */
    public getTransferInfo(url: string): Promise<string> {
        const paramaters: string[] = [];
        const transferURL = {
            urls : `${url}`
        };
        paramaters.push(JSON.stringify(transferURL));
        return this.requestData('POST', 'transfers/info', paramaters);
    }

    /**
     * 
     * Retry previously failed transfer.
     * 
     * @param id: ID of the failed download.
     */
    public retryTransfer(id: number): Promise<string> {
        const paramaters: string[] = [];
        const transferId = {
            id : `${id}`
        };
        paramaters.push(JSON.stringify(transferId));
        return this.requestData('POST', 'transfers/retry', paramaters);
    }

    /**
     * 
     * Deletes the given transfers.
     * 
     * @param transferIds: Array of Transfer ids. Ex: [1,2,3,4]
     */
    public cancelTransfers(transferIds: number[]): Promise<string> {
        const paramaters: string[] = [];
        const transferIdsToCancel = {
            transfer_ids : `${transferIds.toString()}`
        };
        paramaters.push(JSON.stringify(transferIdsToCancel));
        return this.requestData('POST', 'transfers/cancel', paramaters);
    }

    /**
     * 
     * Clean completed transfers from the list.
     */
    public cleanTransfers(): Promise<string> {
        return this.requestData('POST', 'transfers/clean', []);
    }
}
