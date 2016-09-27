"use strict";
const PutIoHelper_1 = require('../helpers/PutIoHelper');
class Transfers extends PutIoHelper_1.PutIoHelper {
    getTransfersList() {
        return this.requestData('GET', 'transfers/list', []);
    }
    addTransfer(urls) {
        const paramaters = [];
        const transferURL = {
            urls: `[${urls.toString}]`
        };
        paramaters.push(JSON.stringify(transferURL));
        return this.requestData('POST', 'transfers/add-multi', paramaters);
    }
    getTransferId(id) {
        return this.requestData('GET', `transfers/${id}`, []);
    }
    getTransferInfo(url) {
        const paramaters = [];
        const transferURL = {
            urls: `${url}`
        };
        paramaters.push(JSON.stringify(transferURL));
        return this.requestData('POST', 'transfers/info', paramaters);
    }
    retryTransfer(id) {
        const paramaters = [];
        const transferId = {
            id: `${id}`
        };
        paramaters.push(JSON.stringify(transferId));
        return this.requestData('POST', 'transfers/retry', paramaters);
    }
    cancelTransfers(transferIds) {
        const paramaters = [];
        const transferIdsToCancel = {
            transfer_ids: `${transferIds.toString()}`
        };
        paramaters.push(JSON.stringify(transferIdsToCancel));
        return this.requestData('POST', 'transfers/cancel', paramaters);
    }
    cleanTransfers() {
        return this.requestData('POST', 'transfers/clean', []);
    }
}
exports.Transfers = Transfers;
//# sourceMappingURL=Transfers.js.map