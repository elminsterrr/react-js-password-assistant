import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './style.css';

import Buttons from '../Buttons';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
  }

  handleInputChange(pass) {
    this.setState({ password: pass });
  }

  render() {
    return (
      <div>
        <div className="Input-textfield">
          <TextField
            hintText="Paste your password here to begin"
            value={this.state.password}
            onChange={event => this.handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <Buttons />
        </div>
      </div>
    );
  }
}
export default Input;
