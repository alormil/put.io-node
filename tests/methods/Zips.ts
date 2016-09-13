import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe('Zips Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /zips/<zip_id>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const zipID: number = 1477908884;
            const info: Fixtures = new Fixtures('../fixtures/zips/zips.id.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/zips/${zipID}`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.zips.getZipId(zipID).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const zipID: number = 1477908884;
            const info: Fixtures = new Fixtures('../fixtures/zips/zips.id.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/zips/${zipID}`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.zips.getZipId(zipID).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('GET /zips/list', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/zips/zips.list.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/zips/list')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.zips.getZipsList().then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/zips/zips.list.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/zips/list')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.zips.getZipsList().then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /zips/create', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number[] = [36738408];
            const info: Fixtures = new Fixtures('../fixtures/zips/zips.create.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/zips/create')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.zips.createZip(fileId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number[] = [36738408];
            const info: Fixtures = new Fixtures('../fixtures/zips/zips.create.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/zips/create')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.zips.createZip(fileId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });
    });
});
