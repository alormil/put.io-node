import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe ('Friends Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /friends/list', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/friends/friends.list.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/friends/list')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.friends.getFriendsList().then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });

        it('Should return an error if bad request', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/friends/friends.list.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/friends/list')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.friends.getFriendsList().then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });

    });

    describe('POST /friends/user-search', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.search.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/friends/user-search')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.friends.searchUsers(testName).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return an error if bad request', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.search.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/friends/user-search')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.friends.searchUsers(testName).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });

    describe('GET /friends/waiting-requests', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/friends/friends.waiting-requests.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/friends/waiting-requests')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.friends.getFriendRequests().then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return an error if bad request', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/friends/friends.waiting-requests.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/friends/waiting-requests')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.friends.getFriendRequests().then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('GET /friends/<username>/request', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.send.request.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/friends/${testName}/request`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.friends.sendFriendRequest(testName).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return an error if bad request', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.send.request.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/friends/${testName}/request`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.friends.sendFriendRequest(testName).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /friends/<username>/approve', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.approve.request.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/friends/${testName}/approve`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.friends.approveFriendRequest(testName).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return an error if bad request', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.approve.request.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/friends/${testName}/approve`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.friends.approveFriendRequest(testName).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /friends/<username>/deny', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.deny.request.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/friends/${testName}/deny`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.friends.denyFriendRequest(testName).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return an error if bad request', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.deny.request.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/friends/${testName}/deny`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.friends.denyFriendRequest(testName).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /friends/<username>/unfriend', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.unfriend.request.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/friends/${testName}/unfriend`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.friends.unfriend(testName).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return an error if bad request', (done: Function) => {

            const testName: string = 'testUserName';
            const info: Fixtures = new Fixtures('../fixtures/friends/friends.unfriend.request.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/friends/${testName}/unfriend`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.friends.unfriend(testName).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
});
