import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Input from '../Input';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Input />
      </MuiThemeProvider>
    );
  }
}

export default App;
