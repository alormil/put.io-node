import * as Module from '../../ts/index';
import {expect} from 'chai';

describe ('Zips Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /zips/<zip_id>', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('GET /zips/list', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /zips/create', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
});
