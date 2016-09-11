import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe ('Event Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /events/list', () => {

        it('Should return valid response if parameters are valid', (done: Function) => {

            const info = new Fixtures('../fixtures/events/events.lists.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/events/list')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.events.getEventsList().then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return an error if bad request', (done: Function) => {

            const info = new Fixtures('../fixtures/events/events.lists.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/events/list')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.events.getEventsList().then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });

    });
});
