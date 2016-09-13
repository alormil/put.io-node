import {PutIoHelper} from '../helpers/PutIoHelper';

export class Zips extends PutIoHelper {

    /**
     * 
     * Creates zip file for given files. A zip_id is returned to keep track of the status of zip creation process.
     * 
     * @param fileIds: Array of file ids. Ex: [1,2,3,4]
     */
    public createZip(fileIds: number[]): Promise<string> {
        const paramaters: string[] = [];
        const transferIdsToCancel = {
            file_ids : `${fileIds.toString()}`
        };
        paramaters.push(JSON.stringify(transferIdsToCancel));
        return this.requestData('POST', 'zips/create', paramaters);
    }

    /**
     * 
     * Lists active zip files.
     */
    public getZipsList(): Promise<string> {
        return this.requestData('GET', 'zips/list', []);
    }

    /**
     * 
     * Gives detailed information about the give zip file id. Check the zip creation process status with your zip_id.
     * When the process is done, you will get url value along with size and missing_files.
     * You might need to poll this end point until you get an url value. missing_files is an array of file names
     * which are not included into the zip file for some reason.
     * 
     * @param id: ID of the zip file process
     */
    public getZipId(id: number): Promise<string> {
        return this.requestData('GET', `zips/${id}`, []);
    }
}
