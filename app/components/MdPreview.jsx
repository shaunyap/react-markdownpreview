var React = require('react');
var {connect} = require('react-redux');
import mdAPI from 'mdAPI';

export var MdPreview = React.createClass({
    render: function() {
      var {markdown} = this.props;

      var renderMd = () => {
        var renderedMd = mdAPI.renderMd(markdown);

        return renderedMd;
      };

      return (
          <div className='columns small-12 medium-4 content'
          dangerouslySetInnerHTML={renderMd()} />
      )
    }
});

export default connect(
  (state) => {
    return state;
  }
)(MdPreview);
