var React = require('react');
var {connect} = require('react-redux');
import mdAPI from 'mdAPI';
import MdForm from 'MdForm';

export var MdPreview = React.createClass({
    getInitialState: function() {
      return {markdown: 'Start typing in the form and *this* will be updated'};
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.markdown !== prevState.markdown) {
          dispatch(actions.updatePreiew(this.state.markdown));
        }
    },
    render: function() {
      var renderMd = (rawMarkdown) => {
        var renderedMd = mdAPI.renderMd(rawMarkdown);

        return renderedMd;
      };
      return (
          <div className='columns small-12 medium-4 content'
          dangerouslySetInnerHTML={renderMd(this.props.markdown)} />
      )
    }
});

export default connect(
  (state) => {
    return state;
  }
)(MdPreview);
