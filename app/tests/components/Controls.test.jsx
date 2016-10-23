const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            const controls   = TestUtils.renderIntoDocument(<Controls status="started"/>);
            const $el        = $(ReactDOM.findDOMNode(controls));
            const $pausedBtn = $el.find('button:contains(Pause)');

            expect($pausedBtn.length).toBe(1);
        });

        it('should render start when paused', () => {
            const controls   = TestUtils.renderIntoDocument(<Controls status="paused"/>);
            const $el        = $(ReactDOM.findDOMNode(controls));
            const $pausedBtn = $el.find('button:contains(Start)');

            expect($pausedBtn.length).toBe(1);
        });
    });
});
