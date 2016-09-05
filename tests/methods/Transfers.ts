import * as Module from '../../ts/index';
import {expect} from 'chai';

describe ('Transfers Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /transfers/<id>', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('GET /transfers/list', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /transfers/add', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /transfers/cancel', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /transfers/clean', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
    describe('POST /transfers/retry', () => {
        it('Should return an error if parameters are missing');
        it('Should return an error if parameters are invalid');
        it('Should return valid response if parameters are valid');
    });
});
