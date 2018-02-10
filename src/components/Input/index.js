import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import './style.css';

import Buttons from '../Buttons';
import Results from '../Results';

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
    return this.state.selectedButtons.map(el => (
      <Results key={el} appState={this.state} />
    ));
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
          {this.handleResults()}
        </div>
      </div>
    );
  }
}
export default Input;
