import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe.skip ('Transfers Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /transfers/<id>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /transfers/list', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /transfers/add-multi', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /transfers/info', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /transfers/cancel', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /transfers/clean', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /transfers/retry', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
});
