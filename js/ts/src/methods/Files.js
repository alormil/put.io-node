"use strict";
const PutIoHelper_1 = require('../helpers/PutIoHelper');
class Files extends PutIoHelper_1.PutIoHelper {
    getFilesList(parentId = 0) {
        const paramaters = [];
        paramaters.push(`&parent_id=${parentId}`);
        return this.requestData('GET', 'files/list', paramaters);
    }
    searchFiles(query, page = 1) {
        return this.requestData('GET', `files/search/${query}/page/${page}`, []);
    }
    uploadFile(file, filename, parentId) {
        const paramaters = [];
        paramaters.push(file);
        if (filename !== undefined) {
            paramaters.push(filename);
        }
        if (parentId !== undefined) {
            paramaters.push(parentId.toString());
        }
        return this.uploadData('POST', 'files/upload', paramaters);
    }
    createFolder(name, parentId) {
        const paramaters = [];
        const folderInfo = {
            name: `${name}`,
            parent_id: `${parentId}`
        };
        paramaters.push(JSON.stringify(folderInfo));
        return this.requestData('POST', 'files/create-folder', paramaters);
    }
    getFileId(fileID, parentId = 0) {
        const paramaters = [];
        const parentInfo = {
            parent_id: `${parentId}`
        };
        paramaters.push(JSON.stringify(parentInfo));
        return this.requestData('GET', `files/${fileID}`, paramaters);
    }
    deleteFiles(fileIds) {
        const paramaters = [];
        const files = {
            file_ids: `${fileIds.toString()}`
        };
        paramaters.push(JSON.stringify(files));
        return this.requestData('POST', 'files/delete', paramaters);
    }
    renameFile(fileId, name) {
        const paramaters = [];
        const fileInfo = {
            file_id: `${fileId}`,
            name: `${name}`
        };
        paramaters.push(JSON.stringify(fileInfo));
        return this.requestData('POST', 'files/rename', paramaters);
    }
    moveFiles(fileIds, parentId) {
        const paramaters = [];
        const fileInfo = {
            file_ids: `${fileIds.toString()}`,
            parent_id: `${parentId}`
        };
        paramaters.push(JSON.stringify(fileInfo));
        return this.requestData('POST', 'files/move', paramaters);
    }
    convertToMP4(id) {
        return this.requestData('POST', `files/${id}/mp4`, []);
    }
    getMP4Status(id) {
        return this.requestData('GET', `files/${id}/mp4`, []);
    }
    downloadFile(id) {
        return this.requestData('GET', `files/${id}/download`, []);
    }
    shareFiles(fileIds, friends) {
        const paramaters = [];
        const fileInfo = {
            file_ids: `${fileIds.toString()}`,
            friends: `${fileIds.toString()}`
        };
        paramaters.push(JSON.stringify(fileInfo));
        return this.requestData('POST', 'files/share', paramaters);
    }
    getSharedFiles() {
        return this.requestData('GET', 'files/shared', []);
    }
    getUsersFileIsSharedWith(id) {
        return this.requestData('GET', `files/${id}/shared-with`, []);
    }
    unshareFile(id, shares) {
        const paramaters = [];
        const userInfo = {
            shares: `${shares.toString()}`
        };
        paramaters.push(JSON.stringify(userInfo));
        return this.requestData('POST', `files/${id}/unshare`, paramaters);
    }
    getFileSubtitles(id) {
        return this.requestData('GET', `files/${id}/subtitles`, []);
    }
    downloadSubtitle(id, key, format = 'srt') {
        const paramaters = [];
        const subtitleFormat = {
            format: `${format}`
        };
        paramaters.push(JSON.stringify(subtitleFormat));
        return this.requestData('GET', `files/${id}/subtitles/${key}`, paramaters);
    }
    getHLSPlaylist(id, subtitleKey) {
        const paramaters = [];
        paramaters.push(`&subtitle_key=${subtitleKey}`);
        return this.requestData('GET', `files/${id}/hls/media.m3u8`, paramaters);
    }
    setVideoPosition(id, time) {
        const paramaters = [];
        const videoPosition = {
            time: `${time}`
        };
        paramaters.push(JSON.stringify(videoPosition));
        return this.requestData('POST', `files/${id}/start-from`, paramaters);
    }
    deleteVideoPosition(id) {
        return this.requestData('POST', `files/${id}/start-from/delete`, []);
    }
}
exports.Files = Files;
//# sourceMappingURL=Files.js.map