import { PutIoHelper } from '../helpers/PutIoHelper';
export declare class Files extends PutIoHelper {
    getFilesList(parentId?: number): Promise<string>;
    searchFiles(query: string, page?: number): Promise<string>;
    uploadFile(file: string, filename?: string, parentId?: number): Promise<string>;
    createFolder(name: string, parentId: number): Promise<string>;
    getFileId(fileID: number, parentId?: number): Promise<string>;
    deleteFiles(fileIds: number[]): Promise<string>;
    renameFile(fileId: number, name: string): Promise<string>;
    moveFiles(fileIds: number[], parentId: number): Promise<string>;
    convertToMP4(id: number): Promise<string>;
    getMP4Status(id: number): Promise<string>;
    downloadFile(id: number): Promise<string>;
    shareFiles(fileIds: number[], friends: string[]): Promise<string>;
    getSharedFiles(): Promise<string>;
    getUsersFileIsSharedWith(id: number): Promise<string>;
    unshareFile(id: number, shares: string[]): Promise<string>;
    getFileSubtitles(id: number): Promise<string>;
    downloadSubtitle(id: number, key: string, format?: string): Promise<string>;
    getHLSPlaylist(id: number, subtitleKey: string): Promise<string>;
    setVideoPosition(id: number, time: number): Promise<string>;
    deleteVideoPosition(id: number): Promise<string>;
}
