"use strict";
const PutIoHelper_1 = require('../helpers/PutIoHelper');
class Events extends PutIoHelper_1.PutIoHelper {
    getEventsList() {
        return this.requestData('GET', 'events/list', []);
    }
}
exports.Events = Events;
//# sourceMappingURL=Events.js.map