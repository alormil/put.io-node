import {PutIoHelper} from '../helpers/PutIoHelper';

export class Account extends PutIoHelper {

    /**
     * 
     * Returns information about user account. subtitle_languages is a list of ISO639-2 codes.
     * 
     */
    public getAccountInfo(): string {
        return this.getData('account/info', []);
    }

    /**
     * 
     * Returns User preferences.
     * 
     */
    public getAccountSettings(): string {
        return 'OK';
    }

    /**
     * 
     * Updates user preferences. Only sent parameters are updated.
     * 
     * @param defaultDownloadFolder: Optional. File ID for default location. 0 is the root folder.
     * @param isInvisible: Optional. Boolean value (true or false). Enables invisible mode.
     * @param subtitleLanguages: Optional. String of comma separated ISO639-2 codes (e.g., ‘eng,tr’). Maximum length of choices is 2.
     */
    public setAccountSetting(defaultDownloadFolder ?: number, isInvisible ?: boolean, subtitleLanguages ?: string): string {
        return 'OK';
    }
}
