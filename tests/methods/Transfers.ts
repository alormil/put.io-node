import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe('Transfers Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /transfers/<id>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const transferId: number = 36738408;
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.id.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/transfers/${transferId}`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.transfers.getTransferId(transferId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return an error if bad request', (done: Function) => {

            const transferId: number = 36738408;
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.id.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/transfers/${transferId}`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.transfers.getTransferId(transferId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });

    });

    describe('GET /transfers/list', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.list.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/transfers/list')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.transfers.getTransfersList().then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });

        it('Should return an error if bad request', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.list.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/transfers/list')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.transfers.getTransfersList().then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });
    });

    describe('POST /transfers/add-multi', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const urlToDownload: string[] = [];
            urlToDownload.push('{"url":"magnet:?xt=ahbytwohq0,”email_when_complete":false,"save_parent_id":0}');
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.add.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/add-multi')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.transfers.addTransfer(urlToDownload).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const urlToDownload: string[] = [];
            urlToDownload.push('{"url":"magnet:?xt=ahbytwohq0",”email_when_complete":false,"save_parent_id":0}');
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.add.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/add-multi')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.transfers.addTransfer(urlToDownload).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /transfers/info', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const urlToDownload: string = 'magnet:?xt=ahbytwohq0';
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.info.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/info')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.transfers.getTransferInfo(urlToDownload).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const urlToDownload: string = 'magnet:?xt=ahbytwohq0';
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.info.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/info')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.transfers.getTransferInfo(urlToDownload).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });

    });
    describe('POST /transfers/cancel', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const transferId: number[] = [36738408];
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.cancel.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/cancel')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.transfers.cancelTransfers(transferId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const transferId: number[] = [36738408];
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.cancel.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/cancel')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.transfers.cancelTransfers(transferId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /transfers/clean', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.clean.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/clean')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.transfers.cleanTransfers().then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return an error if bad request', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.clean.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/clean')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.transfers.cleanTransfers().then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /transfers/retry', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const transferId: number = 36738408;
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.retry.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/retry')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.transfers.retryTransfer(transferId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const transferId: number = 36738408;
            const info: Fixtures = new Fixtures('../fixtures/transfers/transfers.retry.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/transfers/retry')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.transfers.retryTransfer(transferId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
});
