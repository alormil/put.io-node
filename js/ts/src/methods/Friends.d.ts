import { PutIoHelper } from '../helpers/PutIoHelper';
export declare class Friends extends PutIoHelper {
    getFriendsList(): Promise<string>;
    searchUsers(usernameOrEmail: string): Promise<string>;
    getFriendRequests(): Promise<string>;
    sendFriendRequest(username: string): Promise<string>;
    approveFriendRequest(username: string): Promise<string>;
    denyFriendRequest(username: string): Promise<string>;
    unfriend(username: string): Promise<string>;
}
