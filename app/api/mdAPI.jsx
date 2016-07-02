var Remarkable = require('remarkable');

module.exports = {
  renderMd: function(Markdown) {
    var md = new Remarkable();
    return {__html: md.render(Markdown)};
  }
}
