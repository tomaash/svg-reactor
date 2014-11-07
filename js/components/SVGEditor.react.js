var React = require('react');
var Image = require('./Image.react');

var SVGEditor = React.createClass({
  getDefaultProps: function() {
    return {
      width: 600,
      height: 300,
      angle: 45,
      image: ""
    };
  },

  getInitialState: function() {
    return {
      angle: 45,
      height: this.props.height,
      width: this.props.width,
    };
  },

  rotateLeftClick: function() {
    this.setState({angle: this.state.angle - 15});
  },

  rotateRightClick: function() {
    this.setState({angle: this.state.angle + 15});
  },

  enlargeClick: function() {
    this.setState({
      width: parseInt(this.state.width) + 50,
      height: parseInt(this.state.height) + 50,
    });
  },

  shrinkClick: function() {
    this.setState({
      width: parseInt(this.state.width) - 50,
      height: parseInt(this.state.height) - 50,
    });
  },

  render: function() {
    var transform = "rotate( " + this.state.angle + " " +
      this.state.width/2+" "+this.state.height/2+")";

    return (
      <div>
        <button onClick={this.rotateLeftClick}>Rotate Left</button>
        <button onClick={this.rotateRightClick}>Rotate Right</button>
        <button onClick={this.enlargeClick}>Enlarge</button>
        <button onClick={this.shrinkClick}>Shrink</button>
        <p>{this.state.angle}</p>
        <svg width={this.state.width} height={this.state.height}>
          <Image transform={transform}
            href={this.props.image}
            x="0" y="0" height={this.state.height} width={this.state.width}/>
        </svg>
      </div>
    );
  }
});

module.exports = SVGEditor;