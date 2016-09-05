import * as Module from '../../ts/index';
import {expect} from 'chai';

describe ('Put.io Client', () => {
    describe('Client Object', () => {
        const putioClient: Module.Client = new Module.Client('testToken');

        it('Should be able to get oAuth token', (done) => {
            expect(putioClient.oAuthToken).to.equal('testToken');
            done();
        });

        it('Should be able to set oAuth token', (done) => {
            putioClient.oAuthToken = 'newToken';
            expect(putioClient.oAuthToken).to.equal('newToken');
            done();
        });

    });
});
