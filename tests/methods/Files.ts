import * as Module from '../../ts/index';
import * as nock from 'nock';
import {Fixtures} from '../fixtures/Fixtures';
import {expect} from 'chai';

/* tslint:disable:no-backbone-get-set-outside-model */
describe.skip ('Files Class', () => {
    const putioClient: Module.Client = new Module.Client('testToken');

    describe('GET /files/<id>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/download', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/hls/media.m3u8', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/mp4', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/shared-with', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/subtitles', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/<id>/subtitles/<key>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/list', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/search/<query>/page/<page_no>', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('GET /files/shared', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/<id>/mp4', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/<id>/start-from', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/<id>/start-from/delete', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/<id>/unshare', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/create-folder', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/delete', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/move', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/rename', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/share', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
    describe('POST /files/upload', () => {
        it('Should return valid response if parameters are valid', (done: Function) => {

        });
        it('Should return an error if bad request', (done: Function) => {

        });
    });
});
