var React = require('react');

import Readme from 'Readme';
import MdForm from 'MdForm';
import MdPreview from 'MdPreview';

var MdApp = React.createClass({
  getInitialState: function() {
      return ({
          markdown:'Type some *markdown* here!'
      });
  },
  render: function() {
        return (
            <div>
              <Readme/>
              <MdForm/>
              <MdPreview markdown={this.state.markdown}/>
            </div>
        );
    }
});

module.exports = MdApp;
