import * as Module from '../../ts/index';
import {expect} from 'chai';

describe ('Account Method', () => { 
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /account/info', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('GET /account/settings', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /account/settings', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
});
