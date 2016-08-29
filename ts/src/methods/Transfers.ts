import {PutIoHelper} from '../helpers/PutIoHelper';

export class Transfers extends PutIoHelper {

    /**
     * 
     * Lists active transfers. If transfer is completed, it is removed from the list.
     */
    public getTransfersList(): string {
        return 'OK';
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
    public addTransfer(url: string, saveParentId: number = 0, extract: boolean = false, callbackUrl ?: string): string {
        return 'OK';
    }

    /**
     * 
     * Returns a transfer’s properties.
     */
    public getTransferId(): string {
        return 'OK';
    }

    /**
     * 
     * Retry previously failed transfer.
     * 
     * @param id: ID of the failed download.
     */
    public retryTransfer(id: number): string {
        return 'OK';
    }

    /**
     * 
     * Deletes the given transfers.
     * 
     * @param transferIds: Array of Transfer ids. Ex: [1,2,3,4]
     */
    public cancelTransfers(transferIds: number[]): string {
        return 'OK';
    }

    /**
     * 
     * Clean completed transfers from the list.
     */
    public cleanTransfers(): string {
        return 'OK';
    }
}
