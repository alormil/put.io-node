import { Account } from '../methods/Account';
import { Events } from '../methods/Events';
import { Files } from '../methods/Files';
import { Friends } from '../methods/Friends';
import { Transfers } from '../methods/Transfers';
import { Zips } from '../methods/Zips';
export declare class Client {
    account: Account;
    events: Events;
    files: Files;
    friends: Friends;
    transfers: Transfers;
    zips: Zips;
    private secretToken;
    constructor(oAuthToken: string);
    oAuthToken: string;
}
