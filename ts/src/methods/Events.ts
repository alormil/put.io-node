import {PutIoHelper} from '../helpers/PutIoHelper';

export class Events extends PutIoHelper {

    /**
     * 
     * Returns List of dashboard events. Includes download and share events.
     * First event entry indicates a completed transfer, second entry indicates a shared file from the friend ‘johndoe’.
     */
    public getEventsList(): Promise<string> {
        return this.requestData('GET', 'events/list', []);
    }
}
