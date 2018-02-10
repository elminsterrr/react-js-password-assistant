import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import Buttons from '../Buttons';
import Results from '../Results';

import './style.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'Hh9Xzke2ayzcEUPHuIfS',
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

  handleResults() {
    return this.state.selectedButtons.map((el, index) => (
      <Results key={el} index={index} appState={this.state} />
    ));
  }

  render() {
    return (
      <div>
        <div className="Input-textfield">
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
