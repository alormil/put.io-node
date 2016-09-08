import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe ('Account Method', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /account/info', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info = new Fixtures('../fixtures/accounts/account.info.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/account/info')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.account.getAccountInfo().then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });

        it('Should return an error if bad request', (done: Function) => {

            const info = new Fixtures('../fixtures/accounts/account.info.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/account/info')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.account.getAccountInfo().then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });

    });
    describe('GET /account/settings', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info = new Fixtures('../fixtures/accounts/account.settings.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/account/settings')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.account.getAccountSettings().then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });

        it('Should return an error if bad request', (done: Function) => {

            const info = new Fixtures('../fixtures/accounts/account.settings.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/account/settings')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.account.getAccountSettings().then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /account/settings', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info = new Fixtures('../fixtures/accounts/account.settings.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/account/settings')
            .query(true)
            .reply(200, info.fixtureData);

            const settingChanges = {
                is_invisible : false,
                nextepisode : false
            };

            putioClient.account.setAccountSettings(JSON.stringify(settingChanges)).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if parameters are invalid', (done: Function) => {

            const info = new Fixtures('../fixtures/accounts/account.settings.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/account/settings')
            .query(true)
            .reply(400, 'Bad Request');

            const settingChanges = {
                invalid_field : 'XYZZ',
                invalid_field_2 : true
            };

            putioClient.account.setAccountSettings(JSON.stringify(settingChanges)).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });
    });
});
