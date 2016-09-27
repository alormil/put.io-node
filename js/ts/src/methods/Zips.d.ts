import { PutIoHelper } from '../helpers/PutIoHelper';
export declare class Zips extends PutIoHelper {
    createZip(fileIds: number[]): Promise<string>;
    getZipsList(): Promise<string>;
    getZipId(id: number): Promise<string>;
}
