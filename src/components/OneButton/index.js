import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin: 2,
    padding: 0,
    minWidth: 1,
  },
};

class OneButton extends Component {
  constructor() {
    super();
    this.state = { disabled: false };
  }

  handleClick() {
    this.setState({ disabled: !this.state.disabled });
    this.props.onClick(this.props.el);
  }

  render() {
    return (
      <RaisedButton
        disabled={this.state.disabled}
        key={this.props.el}
        label={this.props.el}
        style={style.button}
        onClick={() => this.handleClick()}
      />
    );
  }
}

export default OneButton;
