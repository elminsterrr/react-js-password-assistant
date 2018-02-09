import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './style.css';

import Buttons from '../Buttons';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      selectedButtons: [],
    };
    this.handleButtonSelectTwo = this.handleButtonSelectTwo.bind(this);
  }

  handleInputChange(pass) {
    this.setState({ password: pass });
  }

  handleButtonSelectTwo(selected) {
    this.setState({
      selectedButtons: [...this.state.selectedButtons, selected],
    });
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
          <Buttons
            handleButtonSelectOne={this.handleButtonSelectTwo}
            array={this.state.password.length}
          />
        </div>
      </div>
    );
  }
}
export default Input;
