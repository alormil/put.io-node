"use strict";
const Module = require('../../ts/index');
const nock = require('nock');
const Fixtures_1 = require('../fixtures/Fixtures');
const chai_1 = require('chai');
describe('Transfers Class', () => {
    const putioClient = new Module.Client('testToken');
    describe('GET /transfers/<id>', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const transferId = 36738408;
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.id.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/transfers/${transferId}`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.transfers.getTransferId(transferId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const transferId = 36738408;
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.id.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/transfers/${transferId}`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.transfers.getTransferId(transferId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /transfers/list', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.list.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/transfers/list')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.transfers.getTransfersList().then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.list.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/transfers/list')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.transfers.getTransfersList().then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /transfers/add-multi', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const urlToDownload = [];
            urlToDownload.push('{"url":"magnet:?xt=ahbytwohq0,”email_when_complete":false,"save_parent_id":0}');
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.add.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/add-multi')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.transfers.addTransfer(urlToDownload).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const urlToDownload = [];
            urlToDownload.push('{"url":"magnet:?xt=ahbytwohq0",”email_when_complete":false,"save_parent_id":0}');
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.add.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/add-multi')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.transfers.addTransfer(urlToDownload).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /transfers/info', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const urlToDownload = 'magnet:?xt=ahbytwohq0';
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.info.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/info')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.transfers.getTransferInfo(urlToDownload).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const urlToDownload = 'magnet:?xt=ahbytwohq0';
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.info.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/info')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.transfers.getTransferInfo(urlToDownload).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /transfers/cancel', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const transferId = [36738408];
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.cancel.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/cancel')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.transfers.cancelTransfers(transferId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const transferId = [36738408];
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.cancel.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/cancel')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.transfers.cancelTransfers(transferId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /transfers/clean', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.clean.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/clean')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.transfers.cleanTransfers().then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.clean.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/clean')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.transfers.cleanTransfers().then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /transfers/retry', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const transferId = 36738408;
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.retry.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/retry')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.transfers.retryTransfer(transferId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const transferId = 36738408;
            const info = new Fixtures_1.Fixtures('../fixtures/transfers/transfers.retry.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/transfers/retry')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.transfers.retryTransfer(transferId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
});
//# sourceMappingURL=Transfers.js.map