var React = require('react');

var Readme = React.createClass({
    render: function() {
        return (
            <div className='columns small-12 medium-4'>
              <p>This is a Web App to preview markdown as part of a submission for <a href='www.freecodecamp.com'>Free Code Camp</a>. </p>
            </div>
        )
    }
});

module.exports = Readme;
