import { PutIoHelper } from '../helpers/PutIoHelper';
export declare class Transfers extends PutIoHelper {
    getTransfersList(): Promise<string>;
    addTransfer(urls: string[]): Promise<string>;
    getTransferId(id: number): Promise<string>;
    getTransferInfo(url: string): Promise<string>;
    retryTransfer(id: number): Promise<string>;
    cancelTransfers(transferIds: number[]): Promise<string>;
    cleanTransfers(): Promise<string>;
}
