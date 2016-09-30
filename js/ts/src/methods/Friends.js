"use strict";
const PutIoHelper_1 = require('../helpers/PutIoHelper');
class Friends extends PutIoHelper_1.PutIoHelper {
    getFriendsList() {
        return this.requestData('GET', 'friends/list', []);
    }
    searchUsers(usernameOrEmail) {
        const paramaters = [];
        const searchTeam = {
            name: `${usernameOrEmail}`
        };
        paramaters.push(JSON.stringify(searchTeam));
        return this.requestData('POST', 'friends/user-search', paramaters);
    }
    getFriendRequests() {
        return this.requestData('GET', 'friends/waiting-requests', []);
    }
    sendFriendRequest(username) {
        return this.requestData('POST', `friends/${username}/request`, []);
    }
    approveFriendRequest(username) {
        return this.requestData('POST', `friends/${username}/approve`, []);
    }
    denyFriendRequest(username) {
        return this.requestData('POST', `friends/${username}/deny`, []);
    }
    unfriend(username) {
        return this.requestData('POST', `friends/${username}/unfriend`, []);
    }
}
exports.Friends = Friends;
//# sourceMappingURL=Friends.js.map