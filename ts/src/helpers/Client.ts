import {Account} from '../methods/Account';
import {Events} from '../methods/Events';
import {Files} from '../methods/Files';
import {Friends} from '../methods/Friends';
import {Transfers} from '../methods/Transfers';
import {Zips} from '../methods/Zips';

export class Client {

    private secretToken: string;
    public account: Account = new Account(this);
    public events: Events = new Events(this);
    public files: Files = new Files(this);
    public friends: Friends = new Friends(this);
    public transfers: Transfers = new Transfers(this);
    public zips: Zips = new Zips(this);

    constructor(oAuthToken: string) {
        this.secretToken = oAuthToken;
    }

    public get oAuthToken(): string {
        return this.secretToken;
    }

    public set oAuthToken(token: string) {
        this.secretToken = token;
    }
}
