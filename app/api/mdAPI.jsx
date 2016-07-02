var Remarkable = require('remarkable');

module.exports = {
  renderMd: function(markdown) {
    var md = new Remarkable();
    return {__html: md.render(markdown)};
  }
}
