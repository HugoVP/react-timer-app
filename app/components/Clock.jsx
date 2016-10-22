const React = require('react');

const Clock = React.createClass({
    propTypes : {
        totalSeconds : React.PropTypes.number,
    },

    getDefaultProps : function () {
        return {
            totalSeconds : 0,
        };
    },

    formatSeconds : function (totalSeconds) {
        var minutes = Math.floor(totalSeconds / 60)
        var seconds = totalSeconds % 60;

        if (minutes < 10) {
            minutes = '0' + minutes
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return minutes + ':' + seconds;
    },

    render : function () {
        const {totalSeconds} = this.props;

        return (
            <div className="clock">
                <span className="clock-text">
                    { this.formatSeconds(totalSeconds) }
                </span>
            </div>
        );
    },
});

module.exports = Clock;
