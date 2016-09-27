"use strict";
const Module = require('../../ts/index');
const chai_1 = require('chai');
describe('Put.io Client', () => {
    describe('Client Object', () => {
        const putioClient = new Module.Client('testToken');
        it('Should be able to get oAuth token', (done) => {
            chai_1.expect(putioClient.oAuthToken).to.equal('testToken');
            done();
        });
        it('Should be able to set oAuth token', (done) => {
            putioClient.oAuthToken = 'newToken';
            chai_1.expect(putioClient.oAuthToken).to.equal('newToken');
            done();
        });
    });
});
//# sourceMappingURL=Client.js.map