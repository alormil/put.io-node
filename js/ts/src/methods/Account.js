"use strict";
const PutIoHelper_1 = require('../helpers/PutIoHelper');
class Account extends PutIoHelper_1.PutIoHelper {
    getAccountInfo() {
        return this.requestData('GET', 'account/info', []);
    }
    getAccountSettings() {
        return this.requestData('GET', 'account/settings', []);
    }
    setAccountSettings(settings) {
        const paramaters = [];
        if (settings !== undefined) {
            paramaters.push(settings);
        }
        return this.requestData('POST', 'account/settings', paramaters);
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map