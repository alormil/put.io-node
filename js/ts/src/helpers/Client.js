"use strict";
const Account_1 = require('../methods/Account');
const Events_1 = require('../methods/Events');
const Files_1 = require('../methods/Files');
const Friends_1 = require('../methods/Friends');
const Transfers_1 = require('../methods/Transfers');
const Zips_1 = require('../methods/Zips');
class Client {
    constructor(oAuthToken) {
        this.account = new Account_1.Account(this);
        this.events = new Events_1.Events(this);
        this.files = new Files_1.Files(this);
        this.friends = new Friends_1.Friends(this);
        this.transfers = new Transfers_1.Transfers(this);
        this.zips = new Zips_1.Zips(this);
        this.secretToken = oAuthToken;
    }
    get oAuthToken() {
        return this.secretToken;
    }
    set oAuthToken(token) {
        this.secretToken = token;
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map