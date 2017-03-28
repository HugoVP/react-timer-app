const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Timer = require('Timer');

describe('Timer', () => {
	it('should exists', () => {
		expect(Timer).toExist();
	});
	it('should start timer on started status', (done) => {
		const timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.handleStatusChange('started');
		expect(timer.state.count).toBe(0);
		setTimeout(() => {
			expect(timer.state.status).toBe('started');
			expect(timer.state.count).toBe(1);
			done();
		}, 1001);
	});
    it('should pause timer on paused status', (done) => {
        const timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.setState({ count: 10 });
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');
        setTimeout(() => {
            expect(timer.state.status).toBe('paused');
            expect(timer.state.count).toBe(10);
            done();
        }, 1001);
    });
    it('should clear count on stopped status', (done) => {
        const timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.setState({ count: 10 });
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');
        setTimeout(() => {
            expect(timer.state.status).toBe('stopped');
            expect(timer.state.count).toBe(0);
            done();
        }, 1001);
    });
});