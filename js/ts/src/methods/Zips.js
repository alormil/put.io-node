"use strict";
const PutIoHelper_1 = require('../helpers/PutIoHelper');
class Zips extends PutIoHelper_1.PutIoHelper {
    createZip(fileIds) {
        const paramaters = [];
        const transferIdsToCancel = {
            file_ids: `${fileIds.toString()}`
        };
        paramaters.push(JSON.stringify(transferIdsToCancel));
        return this.requestData('POST', 'zips/create', paramaters);
    }
    getZipsList() {
        return this.requestData('GET', 'zips/list', []);
    }
    getZipId(id) {
        return this.requestData('GET', `zips/${id}`, []);
    }
}
exports.Zips = Zips;
//# sourceMappingURL=Zips.js.map