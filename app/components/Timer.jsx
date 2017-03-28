const React     = require('react');
const Clock     = require('Clock');
const TimerForm = require('TimerForm');
const Controls  = require('Controls');

const Timer = React.createClass({
    getInitialState : function () {
        return {
            count  : 0,
            status : 'stopped',
        };
    },

    handleStatusChange : function (status) {
        this.setState({
            status : status,
        });
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.status !== prevState.status) {
            switch (this.state.status) {
                case 'started':
                    this.handleStart();
                    break;
                case 'stopped':
                    this.setState({ count: 0 });
                    break;
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    componentWillUnmount: function () {
        clearInterval(this.timer)
    },

    handleStart: function () {
      this.timer = setInterval(() => {
        this.setState({
            count: this.state.count + 1,
        })
      }, 1000);
    },

    handleSetTimer : function () {
        this.setState({
            status : 'started',
        });
    },

    startTimer : function () {
        this.timer = setInterval(() => {
            this.setState({
                count : this.state.count + 1,
            });
        }, 1000);
    },

    componentWillUnmount : function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },

    componentDidUpdate : function (prevProps, prevState) {
        if (this.state.status !== prevState.status) {
            switch (this.state.status) {
                case 'started': {
                    this.startTimer();
                    break;
                }

                case 'stopped': {
                    this.setState({
                        count : 0,
                    });
                }

                case 'paused': {
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                }
            }
        }
    },

    render : function () {
        const {count, status} = this.state;

        return (
            <div>
                <h1 className="page-title">
                    Timer App
                </h1>
                <Clock totalSeconds={count}/>
                <Controls status={status} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    },
});

module.exports = Timer;
