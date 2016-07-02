var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var MdForm = React.createClass({
    getInitialState: function() {
    return {value: 'Type some *markdown* here!'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.value});
  },
  render: function() {
    var {dispatch, Markdown} = this.props;
    return (
      <div className="MarkdownEditor columns small-12 medium-4">
        <h3>Input</h3>
        <textarea ref="textarea" defaultValue={this.state.value} onChange={() => {
            dispatch(actions.setMarkdown(Markdown));
          }} />
      </div>
        )
    }
});

export default connect(
  (state) => {
    return {
      Markdown: state.Markdown
    }
  }
)(MdForm);
