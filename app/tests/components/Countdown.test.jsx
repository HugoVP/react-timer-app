const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to "started" and countdown', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.status).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should never set count less than zero', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(2);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });

        it('should pause countdown on paused status', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown/>)

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.status).toBe('paused');
                done();
            }, 1001);
        });

        it('should reset countdown on stopped status', (done) => {
            const countdown = TestUtils.renderIntoDocument(<Countdown/>)

            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.status).toBe('stopped');
                done();
            }, 1001);
        });
    });
});
