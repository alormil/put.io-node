import {PutIoHelper} from '../helpers/PutIoHelper';

export class Files extends PutIoHelper {

    /**
     * 
     * Lists files in a folder.
     * 
     * @param parentId: ID of the folder you’d like to list. This defaults to the root directory (which has ID number 0).
     */
    public getFilesList(parentId: number = 0): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&parent_id=${parentId}`);
        return this.requestData('GET', 'files/list', paramaters);
    }

    /**
     * 
     * Searches your (and shared) files. Returns 50 results at a time. The url for next 50 results is given in the “next” paramater.
     * 
     * @param query: The keyword to search.
     * @param page: Optional. Defaults to 1. If -1 given, returns all results at a time.
     * 
     * Search Syntax
     * 
     *      from:	me, shares, jack or all
     *      type:	video, audio, image, iphone or all
     *      ext:	mp3, avi, jpg, mp4 or all
     * 
     * Search Examples
     * 
     *      https://put.io/v2/files/search/jazz from:”me,jack” ext:mp3
     *          Searches yours and jack’s files with the word jazz in its title which has the extension mp3.
     *      
     *      https://put.io/v2/files/search/”jazz album” from:”shares”
     *          Searches items shared with you with jazz album.
     * 
     *      https://put.io/v2/files/search/jazz type:iphone
     *          Searches your files and items shared with the word jazz in its title which are converted to mp4.
     * 
     */
    public searchFiles(query: string, page: number = 1): Promise<string> {
       return this.requestData('GET', `files/search/${query}/page/${page}`, []);
    }

    /**
     * 
     * Uploads a file. If the uploaded file is a torrent file, starts it as a transfer. 
     * This endpoint must be used with upload.put.io domain.
     * 
     * @param file: Name of the form input.
     * @param filename: The file will be renamed according to this parameter. 
     *                  This defaults to filesystem-secure version of the original filename.
     * @param parentId: Location of the uploaded file. This defaults to 0 (which means root).
     * 
     * Example CURL line
     *      curl -i -F file=@/path/to/the/file 'https://upload.put.io/v2/files/upload?oauth_token=KD8D03MF'
     */
    public uploadFile(file: string, filename?: string, parentId?: number): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(file);
        if (filename !== undefined) {
            paramaters.push(filename);
        }
        if (parentId !== undefined) {
            paramaters.push(parentId.toString());
        }
        return this.uploadData('POST', 'files/upload', paramaters);
    }

    /**
     * 
     * Creates a new folder.
     * 
     * @param name: Name of the new folder.
     * @param parentId: Location of the new folder.
     */
    public createFolder(name: string, parentId: string): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&name=${name}`);
        paramaters.push(`&parent_id=${parentId}`);
        return this.requestData('POST', 'files/create-folder', paramaters);
    }

    /**
     * 
     * Returns a file’s properties.
     * 
     * @param fileID: ID of the file to retrieve
     * @param parentId: ID of the folder you’d like to list. This defaults to the root directory (which has ID number 0).
     */
    public getFileId(fileID: number, parentId: number = 0): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&parent_id=${parentId}`);
        return this.requestData('GET', `files/${fileID}`, paramaters);
    }

    /**
     * 
     * Deletes given files.
     * 
     * @param fileIds: Array of file ids. Ex: [1,2,3,4]
     */
    public deleteFiles(fileIds: number[]): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&file_ids=${fileIds.toString()}`);
        return this.requestData('POST', 'files/delete', paramaters);
    }

    /**
     * 
     * Renames given file.
     * 
     * @param fileId: ID of the file to be renamed.
     * @param name: Name of the new file.
     */
    public renameFile(fileId: number, name: string): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&file_id=${fileId}`);
        paramaters.push(`&name=${name}`);
        return this.requestData('POST', 'files/rename', paramaters);
    }

    /**
     * 
     * Moves files to the given destination.
     * 
     * @param fileIds: Array of file ids. Ex: [1,2,3,4] 
     * @param parentId: Location of the destination folder.
     */
    public moveFiles(fileIds: number[], parentId: number): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&file_ids=${fileIds.toString()}`);
        paramaters.push(`&parent_id=${parentId}`);
        return this.requestData('POST', 'files/move', paramaters);
    }

    /**
     * 
     * Starts the conversion of the given file to mp4.
     * 
     * @param id: ID of the files to be converted.
     */
    public convertToMP4(id: number): Promise<string> {
        return this.requestData('POST', `files/${id}/mp4`, []);
    }

    /**
     * 
     * @param id: ID of the files to be converted.
     */
    public getMP4Status(id: number): Promise<string> {
        return this.requestData('GET', `files/${id}/mp4`, []);
    }

    /**
     * 
     * Sends the contents of the file.
     * 
     * @param id: ID of the file to download
     */
    public downloadFile(id: number): Promise<string> {
        return this.requestData('GET', `files/${id}/download`, []);
    }

    /**
     * 
     * Shares given files with given friends or all friends.
     * 
     * @param fileIds: Array of file ids. Ex: [1,2,3,4]
     * @param friends: Array of names ‘everyone’ or user names of friends. Ex: ['johndoe','janedoe'']
     */
    public shareFiles(fileIds: number[], friends: string[]): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&file_ids=${fileIds.toString()}`);
        paramaters.push(`&friends=${friends.toString()}`);
        return this.requestData('POST', 'files/share', paramaters);
    }

    /**
     * 
     * Returns list of shared files and share information.
     * “shared_with” value in response may be “everyone” or an integer indicating number of people file is shared with (EX: “everyone” or 2)
     */
    public getSharedFiles(): Promise<string> {
        return this.requestData('GET', '/files/shared', []);
    }

    /**
     * 
     * Returns list of users file is shared with. Each result item contains a share id which can be used for unsharing.
     * 
     * @param id: ID of file
     */
    public getUsersFileIsSharedWith(id: number): Promise<string> {
        return this.requestData('GET', `/files/${id}/shared-with`, []);
    }

    /**
     * 
     * Unshares given file from given friends or from everyone.
     * 
     * @param id: ID of file
     * @param shares: Array of string ‘everyone’ or share ids. Ex: [1,2,3,4]
     */
    public unshareFile(id: number, shares: string[]): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&shares=${shares.toString()}`);
        return this.requestData('POST', `/files/${id}/unshare`, paramaters);
    }

    /**
     * 
     * Lists available subtitles for user’s preferred language. User must select “Default Subtitle Language” from settings page.
     * 
     * @param id: ID of file
     * 
     * Fields
     *      
     *      key: This is the key used for Download Subtitle.
     *      language: Language name in English. This may be null. We are working on improving it.
     *      name: Subtitle files name.
     *      source: Where we got this subtitle from. More details below.
     * 
     * Sources
     * 
     *      folder:	Putio has it. A srt file that has identical parent folder and name with the video.
     *      mkv: Extracted from MKV video file.
     *      opensubtitles: From opensubtitles.
     */
    public getFileSubtitles(id: number): Promise<string> {
        return this.requestData('GET', `/files/${id}/subtitles`, []);
    }

    /**
     * 
     * Sends the contents of the subtitle file. There is a powerful built in key called default. 
     * If you use it, putio searches for a subtitle in the following order and returns the first match:
     *  
     *      1. A subtitle file that has identical parent folder and name with the video.
     *      2. Subtitle file extracted from video if the format is MKV.
     *      3. First match from opensubtitles.
     * 
     * @param id: ID of file
     * @param key: key used for download subtitle.
     * @param format: Subtitle file format. Default is srt, webvtt can be requested.
     */
    public downloadSubtitle(id: number, key: string, format: string = 'srt'): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&format=${format}`);
        return this.requestData('GET', `/files/${id}/subtitles/${key}`, paramaters);
    }

    /**
     * 
     * Serves a HLS playlist for a video file.
     * 
     * @param id: ID of file
     * @param subtitleKey: Subtitle key for the file. Use “all” as key to get available subtitles for user’s preferred languages.
     */
    public getHLSPlaylist(id: number, subtitleKey: string): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&subtitle_key=${subtitleKey}`);
        return this.requestData('GET', `/files/${id}/hls/media.m3u8`, paramaters);
    }

    /**
     * 
     * Sets default video position for a video file.
     * 
     * @param id: ID of file
     * @param time: Video position in seconds.
     */
    public setVideoPosition(id: number, time: number ): Promise<string> {
        const paramaters: string[] = [];
        paramaters.push(`&time=${time}`);
        return this.requestData('POST', `/files/${id}/start-from`, paramaters);
    }

    /**
     * 
     * Delete video position for a video file.
     * 
     * @param id: ID of file
     */
    public deleteVideoPosition(id: number): Promise<string> {
        return this.requestData('POST', `/files/${id}/start-from/delete`, []);
    }
}
