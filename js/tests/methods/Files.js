"use strict";
const Module = require('../../ts/index');
const nock = require('nock');
const Fixtures_1 = require('../fixtures/Fixtures');
const chai_1 = require('chai');
describe('Files Class', () => {
    const putioClient = new Module.Client('testToken');
    describe('GET /files/list', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.list.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/files/list')
                .query(true)
                .reply(200, info.fixtureData);
            const parentFolderId = 123;
            putioClient.files.getFilesList(parentFolderId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.list.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/files/list')
                .query(true)
                .reply(400, 'Bad Request');
            const parentFolderId = 123;
            putioClient.files.getFilesList(parentFolderId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/search/<query>/page/<page_no>', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const query = 'jazz';
            const page = 1;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.search.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/search/${query}/page/${page}`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.searchFiles(query, page).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const query = 'jazz';
            const page = 1;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.search.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/search/${query}/page/${page}`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.searchFiles(query, page).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/upload', () => {
        it('Should return valid response if file parameters are valid', (done) => {
            const file = `${__filename}`;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.upload.notorrent.post.response.json');
            nock('https://upload.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/upload')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.uploadFile(file).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return valid response if file & filename parameters are valid', (done) => {
            const file = `${__filename}`;
            const filename = 'renamed.txt';
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.upload.notorrent.post.response.json');
            nock('https://upload.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/upload')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.uploadFile(file, filename).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return valid response if file & parentID parameters are valid', (done) => {
            const file = `${__filename}`;
            const parentID = 123;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.upload.notorrent.post.response.json');
            nock('https://upload.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/upload')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.uploadFile(file, undefined, parentID).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return valid response if file, filename & parentID parameters are valid', (done) => {
            const file = `${__filename}`;
            const filename = 'renamed.txt';
            const parentID = 123;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.upload.notorrent.post.response.json');
            nock('https://upload.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/upload')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.uploadFile(file, filename, parentID).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const file = `${__filename}`;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.upload.torrent.post.response.json');
            nock('https://upload.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/upload')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.uploadFile(file).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/create-folder', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const name = 'test';
            const parentID = 0;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.create.folder.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/create-folder')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.createFolder(name, parentID).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const name = 'test';
            const parentID = 0;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.create.folder.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/create-folder')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.createFolder(name, parentID).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/<id>', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 12345;
            const parentFolderId = 123;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.id.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.getFileId(fileId, parentFolderId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 12345;
            const parentFolderId = 123;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.id.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.getFileId(fileId, parentFolderId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/delete', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileIds = [1, 35, 67];
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.delete.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/delete')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.deleteFiles(fileIds).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileIds = [1, 35, 67];
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.delete.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/delete')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.deleteFiles(fileIds).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/rename', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 123;
            const filename = 'new_file_name';
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.rename.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/rename')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.renameFile(fileId, filename).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 123;
            const filename = 'new_file_name';
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.rename.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/rename')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.renameFile(fileId, filename).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/move', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileIds = [1, 35, 67];
            const parentFolderId = 123;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.move.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/move')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.moveFiles(fileIds, parentFolderId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileIds = [1, 35, 67];
            const parentFolderId = 123;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.move.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/move')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.moveFiles(fileIds, parentFolderId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/<id>/mp4', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.convert.to.mp4.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post(`/files/${fileId}/mp4`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.convertToMP4(fileId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.convert.to.mp4.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post(`/files/${fileId}/mp4`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.convertToMP4(fileId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/<id>/mp4', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.mp4.status.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/mp4`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.getMP4Status(fileId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.mp4.status.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/mp4`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.getMP4Status(fileId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/<id>/download', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 1234;
            const fileContent = 'Lorem Ipsum text file content';
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/download`)
                .query(true)
                .reply(200, fileContent);
            putioClient.files.downloadFile(fileId).then((result) => {
                chai_1.expect(result).to.equal(fileContent);
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 1234;
            const fileContent = 'Lorem Ipsum text file content';
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/download`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.downloadFile(fileId).then((result) => {
                chai_1.expect(result).not.to.equal(fileContent);
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/share', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileIds = [1, 35, 67];
            const friends = ['johndoe', 'janedoe'];
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.share.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/share')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.shareFiles(fileIds, friends).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileIds = [1, 35, 67];
            const friends = ['johndoe', 'janedoe'];
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.share.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post('/files/share')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.shareFiles(fileIds, friends).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/shared', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.shared.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/files/shared')
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.getSharedFiles().then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.shared.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get('/files/shared')
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.getSharedFiles().then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/<id>/shared-with', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.shared-with.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/shared-with`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.getUsersFileIsSharedWith(fileId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.shared-with.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/shared-with`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.getUsersFileIsSharedWith(fileId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/<id>/unshare', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const shares = ['everyone'];
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.unshare.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post(`/files/${fileId}/unshare`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.unshareFile(fileId, shares).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const shares = ['everyone'];
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.unshare.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post(`/files/${fileId}/unshare`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.unshareFile(fileId, shares).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/<id>/subtitles', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.subtitles.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/subtitles`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.getFileSubtitles(fileId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.subtitles.get.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/subtitles`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.getFileSubtitles(fileId).then((result) => {
                chai_1.expect(result).not.to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/<id>/subtitles/<key>', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 1234;
            const format = 'srt';
            const key = 'V7mVadfvq34erarjy9tqj0435hgare';
            const subtitleContent = 'Lorem Ipsum subtitle file content';
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/subtitles/${key}`)
                .query(true)
                .reply(200, subtitleContent);
            putioClient.files.downloadSubtitle(fileId, key, format).then((result) => {
                chai_1.expect(result).to.equal(subtitleContent);
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 1234;
            const format = 'srt';
            const key = 'V7mVadfvq34erarjy9tqj0435hgare';
            const subtitleContent = 'Lorem Ipsum subtitle file content';
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/subtitles/${key}`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.downloadSubtitle(fileId, key, format).then((result) => {
                chai_1.expect(result).not.to.equal(subtitleContent);
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('GET /files/<id>/hls/media.m3u8', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 1234;
            const subtitleKey = 'all';
            const hlsContent = 'Lorem Ipsum subtitle HLS content';
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/hls/media.m3u8`)
                .query(true)
                .reply(200, hlsContent);
            putioClient.files.getHLSPlaylist(fileId, subtitleKey).then((result) => {
                chai_1.expect(result).to.equal(hlsContent);
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 1234;
            const subtitleKey = 'all';
            const hlsContent = 'Lorem Ipsum subtitle HLS content';
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .get(`/files/${fileId}/hls/media.m3u8`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.getHLSPlaylist(fileId, subtitleKey).then((result) => {
                chai_1.expect(result).not.to.equal(hlsContent);
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/<id>/start-from', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 1234;
            const time = 7641;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.set.video.position.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post(`/files/${fileId}/start-from`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.setVideoPosition(fileId, time).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 1234;
            const time = 7641;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.set.video.position.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post(`/files/${fileId}/start-from`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.setVideoPosition(fileId, time).then((result) => {
                chai_1.expect(result).not.to.equal(info.fixtureData);
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
    describe('POST /files/<id>/start-from/delete', () => {
        it('Should return valid response if parameters are valid', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.delete.video.position.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post(`/files/${fileId}/start-from/delete`)
                .query(true)
                .reply(200, info.fixtureData);
            putioClient.files.deleteVideoPosition(fileId).then((result) => {
                chai_1.expect(result).to.equal(JSON.stringify(info.fixtureData));
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done(err);
            });
        });
        it('Should return an error if bad request', (done) => {
            const fileId = 1234;
            const info = new Fixtures_1.Fixtures('../fixtures/files/files.delete.video.position.post.response.json');
            nock('https://api.put.io/v2')
                .defaultReplyHeaders({ 'Content-Type': 'application/json' })
                .post(`/files/${fileId}/start-from/delete`)
                .query(true)
                .reply(400, 'Bad Request');
            putioClient.files.deleteVideoPosition(fileId).then((result) => {
                chai_1.expect(result).not.to.equal(info.fixtureData);
                done();
            }).catch(err => {
                chai_1.expect(err).to.contain('Error:');
                done();
            });
        });
    });
});
//# sourceMappingURL=Files.js.map