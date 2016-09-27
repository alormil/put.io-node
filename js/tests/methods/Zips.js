"use strict";
const Module = require('../../ts/index');
const nock = require('nock');
const Fixtures_1 = require('../fixtures/Fixtures');
const chai_1 = require('chai');
describe('Zips Class', () => {
    const putioClient = new Module.Client('testToken');
    describe('GET /zips/<zip_id>', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const zipID = 1477908884;
            const info = new Fixtures_1.Fixtures('../fixtures/zips/zips.id.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/zips/${zipID}`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.zips.getZipId(zipID).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const zipID = 1477908884;
            const info = new Fixtures_1.Fixtures('../fixtures/zips/zips.id.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/zips/${zipID}`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.zips.getZipId(zipID).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /zips/list', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/zips/zips.list.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/zips/list')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.zips.getZipsList().then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/zips/zips.list.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/zips/list')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.zips.getZipsList().then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /zips/create', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = [36738408];
            const info = new Fixtures_1.Fixtures('../fixtures/zips/zips.create.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/zips/create')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.zips.createZip(fileId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = [36738408];
            const info = new Fixtures_1.Fixtures('../fixtures/zips/zips.create.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/zips/create')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.zips.createZip(fileId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
});
//# sourceMappingURL=Zips.js.map