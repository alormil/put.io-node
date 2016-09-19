import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe.skip('Files Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /files/list', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/files/files.list.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/files/list')
            .query(true)
            .reply(200, info.fixtureData);

            const parentFolderId = 123;

            putioClient.files.getFilesList(parentFolderId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/files/files.list.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/files/list')
            .query(true)
            .reply(400, 'Bad Request');

            const parentFolderId = 123;

            putioClient.files.getFilesList(parentFolderId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/search/<query>/page/<page_no>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const query: string = 'jazz';
            const page: number = 1;
            const info: Fixtures = new Fixtures('../fixtures/files/files.search.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/search/${query}/page/${page}`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.searchFiles(query, page).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const query: string = 'jazz';
            const page: number = 1;
            const info: Fixtures = new Fixtures('../fixtures/files/files.search.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/search/${query}/page/${page}`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.searchFiles(query, page).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/upload', () => {
        it('Should return valid response if file parameters are valid', (done: Function) => {

            const file = `${__filename}`;

            const info: Fixtures = new Fixtures('../fixtures/files/files.upload.notorrent.post.response.json');
            nock('https://upload.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/upload')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.uploadFile(file).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return valid response if file & filename parameters are valid', (done: Function) => {

            const file = `${__filename}`;
            const filename = 'renamed.txt';

            const info: Fixtures = new Fixtures('../fixtures/files/files.upload.notorrent.post.response.json');
            nock('https://upload.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/upload')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.uploadFile(file, filename).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return valid response if file & parentID parameters are valid', (done: Function) => {

            const file = `${__filename}`;
            const parentID = 123;

            const info: Fixtures = new Fixtures('../fixtures/files/files.upload.notorrent.post.response.json');
            nock('https://upload.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/upload')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.uploadFile(file, undefined , parentID).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });

        it('Should return valid response if file, filename & parentID parameters are valid', (done: Function) => {

            const file = `${__filename}`;
            const filename = 'renamed.txt';
            const parentID = 123;

            const info: Fixtures = new Fixtures('../fixtures/files/files.upload.notorrent.post.response.json');
            nock('https://upload.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/upload')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.uploadFile(file, filename, parentID).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });

        it('Should return an error if bad request', (done: Function) => {

            const file = `${__filename}`;

            const info: Fixtures = new Fixtures('../fixtures/files/files.upload.torrent.post.response.json');
            nock('https://upload.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/upload')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.uploadFile(file).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/<id>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/download', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/hls/media.m3u8', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/mp4', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/shared-with', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/subtitles', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/subtitles/<key>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/shared', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/<id>/mp4', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/<id>/start-from', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/<id>/start-from/delete', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/<id>/unshare', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/create-folder', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/delete', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/move', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/rename', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/share', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
});
