const React = require('react');

const Clock         = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
    getInitialState : function () {
        return {
            count  : 0,
            status : 'stopped',
        };
    },

    handleSetCountdown : function (seconds) {
        this.setState({
            count  : seconds,
            status : 'started',
        });
    },

    startTimer : function () {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({
                count : newCount >= 0 ? newCount : 0,
            });
        }, 1000);
    },

    componentDidUpdate : function (prevProps, prevState) {
        if (this.state.status !== prevState.status) {
            switch (this.state.status) {
                case 'started': {
                    this.startTimer();
                    break;
                }

                case 'stop': {
                    break;
                }
            }
        }
    },

    render : function () {
        const {count, status} = this.state;

        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    },
});

module.exports = Countdown;
