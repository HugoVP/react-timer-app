const React = require('react');

const Controls = React.createClass({
    propTypes : {
        status         : React.PropTypes.string.isRequired,
        onStatusChange : React.PropTypes.func.isRequired,
    },

    onStatusChange : function (status) {
        return () => {
            this.props.onStatusChange(status);
        };
    },

    render : function () {
        const {status} = this.props;

        const renderStartStopButton = () => {
            if (status === 'started') {
                return (
                    <button className="button secondary" onClick={this.onStatusChange('paused')}>
                        Pause
                    </button>
                );
            } else /*if (status === 'paused')*/ {
                return (
                    <button className="button primary" onClick={this.onStatusChange('started')}>
                        Start
                    </button>
                );
            }
        };

        return (
            <div className="controls">
                { renderStartStopButton() }
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>
                    Clear
                </button>
            </div>
        );
    },
});

module.exports = Controls;
