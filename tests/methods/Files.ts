import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe('Files Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /files/list', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/files/files.list.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/files/list')
            .query(true)
            .reply(200, info.fixtureData);

            const parentFolderId: number = 123;

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

            const parentFolderId: number = 123;

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

            const file: string = `${__filename}`;

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

            const file: string = `${__filename}`;
            const filename: string = 'renamed.txt';

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

            const file: string = `${__filename}`;
            const parentID: number = 123;

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

            const file: string = `${__filename}`;
            const filename: string = 'renamed.txt';
            const parentID: number = 123;

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

            const file: string = `${__filename}`;

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
    describe('POST /files/create-folder', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const name: string = 'test';
            const parentID: number = 0;

            const info: Fixtures = new Fixtures('../fixtures/files/files.create.folder.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/create-folder')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.createFolder(name, parentID).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const name: string = 'test';
            const parentID: number = 0;

            const info: Fixtures = new Fixtures('../fixtures/files/files.create.folder.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/create-folder')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.createFolder(name, parentID).then((result: string) => {
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

            const fileId: number = 12345;
            const parentFolderId: number = 123;

            const info: Fixtures = new Fixtures('../fixtures/files/files.id.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.getFileId(fileId, parentFolderId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 12345;
            const parentFolderId: number = 123;

            const info: Fixtures = new Fixtures('../fixtures/files/files.id.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.getFileId(fileId, parentFolderId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /files/delete', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileIds: number[] = [1, 35, 67];

            const info: Fixtures = new Fixtures('../fixtures/files/files.delete.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/delete')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.deleteFiles(fileIds).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const fileIds: number[] = [1, 35, 67];

            const info: Fixtures = new Fixtures('../fixtures/files/files.delete.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/delete')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.deleteFiles(fileIds).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/rename', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 123;
            const filename: string = 'new_file_name';

            const info: Fixtures = new Fixtures('../fixtures/files/files.rename.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/rename')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.renameFile(fileId, filename).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 123;
            const filename: string = 'new_file_name';

            const info: Fixtures = new Fixtures('../fixtures/files/files.rename.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/rename')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.renameFile(fileId, filename).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /files/move', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileIds: number[] = [1, 35, 67];
            const parentFolderId: number = 123;

            const info: Fixtures = new Fixtures('../fixtures/files/files.move.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/move')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.moveFiles(fileIds, parentFolderId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const fileIds: number[] = [1, 35, 67];
            const parentFolderId: number = 123;

            const info: Fixtures = new Fixtures('../fixtures/files/files.move.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/move')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.moveFiles(fileIds, parentFolderId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /files/<id>/mp4', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.convert.to.mp4.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/files/${fileId}/mp4`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.convertToMP4(fileId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.convert.to.mp4.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/files/${fileId}/mp4`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.convertToMP4(fileId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('GET /files/<id>/mp4', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.mp4.status.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/mp4`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.getMP4Status(fileId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.mp4.status.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/mp4`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.getMP4Status(fileId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('GET /files/<id>/download', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 1234;

            const fileContent: string = 'Lorem Ipsum text file content';
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/download`)
            .query(true)
            .reply(200, fileContent);

            putioClient.files.downloadFile(fileId).then((result: string) => {
                expect(result).to.equal(fileContent);
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 1234;

            const fileContent: string = 'Lorem Ipsum text file content';
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/download`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.downloadFile(fileId).then((result: string) => {
                expect(result).not.to.equal(fileContent);
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /files/share', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileIds: number[] = [1, 35, 67];
            const friends: string[] = ['johndoe', 'janedoe'];

            const info: Fixtures = new Fixtures('../fixtures/files/files.share.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/share')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.shareFiles(fileIds, friends).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const fileIds: number[] = [1, 35, 67];
            const friends: string[] = ['johndoe', 'janedoe'];

            const info: Fixtures = new Fixtures('../fixtures/files/files.share.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post('/files/share')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.shareFiles(fileIds, friends).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/shared', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/files/files.shared.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/files/shared')
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.getSharedFiles().then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const info: Fixtures = new Fixtures('../fixtures/files/files.shared.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get('/files/shared')
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.getSharedFiles().then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('GET /files/<id>/shared-with', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.shared-with.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/shared-with`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.getUsersFileIsSharedWith(fileId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.shared-with.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/shared-with`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.getUsersFileIsSharedWith(fileId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /files/<id>/unshare', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const shares: string[] = ['everyone'];
            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.unshare.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/files/${fileId}/unshare`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.unshareFile(fileId, shares).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const shares: string[] = ['everyone'];
            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.unshare.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/files/${fileId}/unshare`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.unshareFile(fileId, shares).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('GET /files/<id>/subtitles', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.subtitles.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/subtitles`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.getFileSubtitles(fileId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.subtitles.get.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/subtitles`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.getFileSubtitles(fileId).then((result: string) => {
                expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('GET /files/<id>/subtitles/<key>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 1234;
            const format: string = 'srt';
            const key: string = 'V7mVadfvq34erarjy9tqj0435hgare';
            const subtitleContent: string = 'Lorem Ipsum subtitle file content';

            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/subtitles/${key}`)
            .query(true)
            .reply(200, subtitleContent);

            putioClient.files.downloadSubtitle(fileId, key, format).then((result: string) => {
                expect(result).to.equal(subtitleContent);
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 1234;
            const format: string = 'srt';
            const key: string = 'V7mVadfvq34erarjy9tqj0435hgare';
            const subtitleContent: string = 'Lorem Ipsum subtitle file content';

            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/subtitles/${key}`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.downloadSubtitle(fileId, key, format).then((result: string) => {
                expect(result).not.to.equal(subtitleContent);
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('GET /files/<id>/hls/media.m3u8', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 1234;
            const subtitleKey: string = 'all';
            const hlsContent: string = 'Lorem Ipsum subtitle HLS content';

            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/hls/media.m3u8`)
            .query(true)
            .reply(200, hlsContent);

            putioClient.files.getHLSPlaylist(fileId, subtitleKey).then((result: string) => {
                expect(result).to.equal(hlsContent);
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 1234;
            const subtitleKey: string = 'all';
            const hlsContent: string = 'Lorem Ipsum subtitle HLS content';

            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .get(`/files/${fileId}/hls/media.m3u8`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.getHLSPlaylist(fileId, subtitleKey).then((result: string) => {
                expect(result).not.to.equal(hlsContent);
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /files/<id>/start-from', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 1234;
            const time: number = 7641;

            const info: Fixtures = new Fixtures('../fixtures/files/files.set.video.position.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/files/${fileId}/start-from`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.setVideoPosition(fileId, time).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 1234;
            const time: number = 7641;

            const info: Fixtures = new Fixtures('../fixtures/files/files.set.video.position.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/files/${fileId}/start-from`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.setVideoPosition(fileId, time).then((result: string) => {
                expect(result).not.to.equal(info.fixtureData);
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
    describe('POST /files/<id>/start-from/delete', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.delete.video.position.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/files/${fileId}/start-from/delete`)
            .query(true)
            .reply(200, info.fixtureData);

            putioClient.files.deleteVideoPosition(fileId).then((result: string) => {
                expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done(err);
            });

        });
        it('Should return an error if bad request', (done: Function) => {

            const fileId: number = 1234;

            const info: Fixtures = new Fixtures('../fixtures/files/files.delete.video.position.post.response.json');
            nock('https://api.put.io/v2')
            .defaultReplyHeaders({'Content-Type': 'application/json'})
            .post(`/files/${fileId}/start-from/delete`)
            .query(true)
            .reply(400, 'Bad Request');

            putioClient.files.deleteVideoPosition(fileId).then((result: string) => {
                expect(result).not.to.equal(info.fixtureData);
                done();
            }).catch(err => {
                expect(err).to.contain('Error:');
                done();
            });

        });
    });
});
