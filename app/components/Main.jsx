const React = require('react');

const Navigation = require('Navigation');

const Main = ({children}) => (
    <div>
        <Navigation/>
        <div className="row">
            <div className="column small-centered medium-6 large-4">
                {children}
            </div>
        </div>
    </div>
);

module.exports = Main;
