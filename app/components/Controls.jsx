const React = require('react');

const Controls = React.createClass({
    propTypes : {
        status : React.PropTypes.string.isRequired,
    },

    render : function () {
        const {status} = this.props;

        const renderStartStopButton = () => {
            if (status === 'started') {
                return (
                    <button className="button secondary">
                        Pause
                    </button>
                );
            } else if (status === 'paused') {
                return (
                    <button className="button primary">
                        Start
                    </button>
                );
            }
        };

        return (
            <div className="controls">
                { renderStartStopButton() }
                <button className="button alert hollow">
                    Clear
                </button>
            </div>
        );
    },
});

module.exports = Controls;
