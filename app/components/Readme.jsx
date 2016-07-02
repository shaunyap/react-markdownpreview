var React = require('react');

var Readme = React.createClass({
    render: function() {
        return (
            <div className='columns small-12 medium-4'>
              <h4>Intro</h4>
              <p>
                Markdown is a lightweight markup language that allows people to generate HTML with different plain text syntexes. It was invented by <a href="https://daringfireball.net/projects/markdown/">John Gruber</a> in 2004. This web app lets you generate HTML using Markdown you type in the form. You can find a <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">list of instructions here</a>
              </p>
            </div>
        )
    }
});

module.exports = Readme;
