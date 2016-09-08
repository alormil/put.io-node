import {PutIoHelper} from '../helpers/PutIoHelper';

export class Account extends PutIoHelper {

    /**
     * 
     * Returns information about user account. subtitle_languages is a list of ISO639-2 codes.
     * 
     */
    public getAccountInfo(): Promise<string> {
        return this.requestData('GET', 'account/info', []);
    }

    /**
     * 
     * Returns User preferences.
     * 
     */
    public getAccountSettings(): Promise<string> {
        return this.requestData('GET', 'account/settings', []);
    }

    /**
     * 
     * Updates user preferences. Only sent parameters are updated.
     * 
     * @param settings: Optional string value of JSON object containing key values of what account setting to update
     */
    public setAccountSettings(settings ?: string): Promise<string> {
        const paramaters: string[] = [];
        if (settings !== undefined) {
            paramaters.push(settings);
        }
        return this.requestData('POST', 'account/settings', paramaters);
    }
}
