import { PutIoHelper } from '../helpers/PutIoHelper';
export declare class Account extends PutIoHelper {
    getAccountInfo(): Promise<string>;
    getAccountSettings(): Promise<string>;
    setAccountSettings(settings?: string): Promise<string>;
}
