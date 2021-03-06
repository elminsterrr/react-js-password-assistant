import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Buttons from '../Buttons';
import Results from '../Results';

import './style.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      selectedButtons: [],
    };
    this.handleButtonSelectTwo = this.handleButtonSelectTwo.bind(this);
  }

  handleReset() {
    this.setState({
      password: '',
      selectedButtons: [],
    });
  }

  handleInputChange(pass) {
    this.setState({ password: pass });
    if (pass === '') {
      this.setState({ selectedButtons: [] });
    }
  }

  handleButtonSelectTwo(selected) {
    this.setState({
      selectedButtons: [...this.state.selectedButtons, selected],
    });
  }

  handleResults() {
    return this.state.selectedButtons.map((el, index) => (
      <Results key={el} index={index} appState={this.state} />
    ));
  }

  render() {
    return (
      <div>
        <div className="Input-textfield">
          <RaisedButton
            label="Reset"
            fullWidth
            onClick={() => this.handleReset()}
          />
          <TextField
            inputStyle={{ textAlign: 'center' }}
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
          {this.handleResults()}
        </div>
      </div>
    );
  }
}
export default Input;
