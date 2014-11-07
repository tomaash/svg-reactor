var React = require('react');
var SVGEditor = require('./SVGEditor.react');

var EditorApp = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <SVGEditor width="200" height="200" image="img/salsita_logo.jpg"/>
      </div>
    );
  },

});

module.exports = EditorApp;