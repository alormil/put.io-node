import {PutIoHelper} from '../helpers/PutIoHelper';

export class Friends extends PutIoHelper {

    /**
     * 
     * Lists friends.
     */
    public getFriendsList(): string {
        return 'OK';
    }

    /**
     * 
     * Lists incoming friend requests.
     */
    public getFriendRequests(): string {
        return 'OK';
    }

    /**
     * 
     * Sends a friend request to the given username.
     * 
     * @param username: friend's username
     */
    public sendFriendRequest(username: string): string {
        return 'OK';
    }

    /**
     * 
     * Approves a friend request from the given username.
     * 
     * @param username: friend's username
     */
    public approveFriendRequest(username: string): string {
        return 'OK';
    }

    /**
     * 
     * Denies a friend request from the given username.
     * 
     * @param username: friend's username
     */
    public denyFriendRequest(username: string): string {
        return 'OK';
    }

    /**
     * 
     * Removes friend from friend list. Files shared with all friends will be automatically removed from old friend’s directory.
     * 
     * @param username: friend's username
     */
    public unfriend(username: string): string {
        return 'OK';
    }
}
