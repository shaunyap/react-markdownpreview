var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var MdForm = React.createClass({
    getInitialState: function() {
    return {value: 'Type some *stuff* here!'};
  },
  render: function() {
    var {dispatch, markdown} = this.props;
    return (
      <div className="MarkdownEditor columns small-12 medium-4">
        <h4>Input</h4>
        <textarea rows ="6" ref="textarea" defaultValue={this.state.value} onChange={() => {
            dispatch(actions.setMarkdown(this.refs.textarea.value));
          }} />
      </div>
        )
    }
});

export default connect(
  (state) => {
    return {
      markdown: state.markdown
    }
  }
)(MdForm);
