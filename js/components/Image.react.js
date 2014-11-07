var React = require('react');

var Image = React.createClass({
  getDefaultProps: function() {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      transform: ""
    };
  },

  getInitialState: function() {
    return {
      width: parseInt(this.props.width) + 1
    };
  },

  render: function() {
      var x = (<g transform={this.props.transform} dangerouslySetInnerHTML={{
        __html: '<image x="'+this.props.x+'" y="'+this.props.y+
        '" width="'+this.props.width+'" height="'+this.props.height+
        '" xlink:href="'+ this.props.href +'"/>'
      }}/>);

      console.log(x);
      return x;
  }
});

module.exports = Image;