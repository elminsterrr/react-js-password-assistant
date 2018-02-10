import React, { Component } from 'react';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

import './style.css';

const style = {
  avatarList: {
    position: 'relative',
    left: -40,
  },
  avatarSecond: {
    position: 'relative',
    top: -40,
    left: 40,
  },
};

class Results extends Component {
  resultsEngine(arg) {
    const { index } = this.props;
    const { selectedButtons, password } = this.props.appState;
    const passwordArray = password.split('').map(el => el);

    const selectedButton = selectedButtons[index];
    const passwordString = passwordArray[selectedButtons[index] - 1];

    if (arg === 0) {
      return selectedButton;
    }

    if (arg === 1) {
      return passwordString;
    }

    return null;
  }
  render() {
    if (this.props.appState.selectedButtons.length > 0) {
      return (
        <div className="Results-list">
          <List style={style.avatarList}>
            <ListItem
              disabled
              leftAvatar={<Avatar>{this.resultsEngine(0)}</Avatar>}
            />
            <ListItem
              style={style.avatarSecond}
              disabled
              leftAvatar={<Avatar>{this.resultsEngine(1)}</Avatar>}
            />
          </List>
        </div>
      );
    }
    return <div />;
  }
}

export default Results;
