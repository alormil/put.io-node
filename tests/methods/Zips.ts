import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe.skip ('Zips Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /zips/<zip_id>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /zips/list', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /zips/create', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
});
