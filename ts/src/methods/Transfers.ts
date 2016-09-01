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
     * @param url: Location of the file to be downloaded.
     * @param saveParentId: Save location of the transfer. This defaults to 0 (which means root).
     * @param extract: Extract after download? (default=False)
     * @param callbackUrl: We POST the transfer’s metadata to this URL after the download is finished. (optional)
     * 
     */
    public addTransfer(url: string, saveParentId: number = 0, extract: boolean = false, callbackUrl ?: string): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&url=${url}`);
        paramaters.push(`&save_parent_id=${saveParentId}`);
        paramaters.push(`&extract=${extract}`);
        if (callbackUrl !== undefined) {
            paramaters.push(`&callback_url=${callbackUrl}`);
        }
        return this.requestData('POST', 'transfers/add', paramaters);
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
     * Retry previously failed transfer.
     * 
     * @param id: ID of the failed download.
     */
    public retryTransfer(id: number): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&id=${id}`);
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
        paramaters.push(`&transfer_ids=${transferIds.toString()}`);
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
