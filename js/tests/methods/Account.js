"use strict";
const Module = require('../../ts/index');
const nock = require('nock');
const Fixtures_1 = require('../fixtures/Fixtures');
const chai_1 = require('chai');
describe('Account Method', () => {
    const putioClient = new Module.Client('testToken');
    describe('GET /account/info', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/accounts/account.info.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/account/info')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.account.getAccountInfo().then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/accounts/account.info.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/account/info')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.account.getAccountInfo().then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /account/settings', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/accounts/account.settings.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/account/settings')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.account.getAccountSettings().then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/accounts/account.settings.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/account/settings')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.account.getAccountSettings().then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /account/settings', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/accounts/account.settings.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/account/settings')
                .query(true)
                .reply(200, info.fixtureData);
            const settingChanges = {
                is_invisible: false,
                nextepisode: false
            };
            putioClient.account.setAccountSettings(JSON.stringify(settingChanges)).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if parameters are invalid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/accounts/account.settings.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/account/settings')
                .query(true)
                .reply(400, 'Bad Request');
            const settingChanges = {
                invalid_field: 'XYZZ',
                invalid_field_2: true
            };
            putioClient.account.setAccountSettings(JSON.stringify(settingChanges)).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
});
//# sourceMappingURL=Account.js.map