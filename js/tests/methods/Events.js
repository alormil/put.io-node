"use strict";
const Module = require('../../ts/index');
const nock = require('nock');
const Fixtures_1 = require('../fixtures/Fixtures');
const chai_1 = require('chai');
describe('Event Class', () => {
    const putioClient = new Module.Client('testToken');
    describe('GET /events/list', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/events/events.lists.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/events/list')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.events.getEventsList().then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/events/events.lists.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/events/list')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.events.getEventsList().then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
});
//# sourceMappingURL=Events.js.map