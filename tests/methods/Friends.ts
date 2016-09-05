import * as Module from '../../ts/index';
import {expect} from 'chai';

describe ('Friends Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /friends/list', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('GET /friends/waiting-requests', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /friends/<username>/approve', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /friends/<username>/deny', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /friends/<username>/request', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /friends/<username>/unfriend', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
});
