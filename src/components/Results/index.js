import React, { Component } from 'react';
import _ from 'lodash';

class Results extends Component {
  resultsEngine() {
    const { selectedButtons, password } = this.props.appState;
    const passwordArray = password.split('').map(el => el);

    console.log(
      'Position:',
      _.last(selectedButtons),
      'Pass:',
      passwordArray[_.last(selectedButtons) - 1]
    );

  }
  render() {
    if (this.props.appState.selectedButtons.length > 0) {
      return <div>{this.resultsEngine()}</div>;
    }
    return <div />;
  }
}

export default Results;
