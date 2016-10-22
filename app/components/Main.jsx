const React = require('react');

const Main = ({children}) => (
    <div className="row">
        <div className="columns medium-6 large-4 small-centered">
            <h2 className="text-center">
                Main.jsx Rendered
            </h2>
            {children}
        </div>
    </div>
);

module.exports = Main;