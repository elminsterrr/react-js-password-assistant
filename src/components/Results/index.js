import React, { Component } from 'react';
import _ from 'lodash';

import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

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
    const { selectedButtons, password } = this.props.appState;
    const passwordArray = password.split('').map(el => el);

    const lastSelectedButton = _.last(selectedButtons);
    const passwordString = passwordArray[_.last(selectedButtons) - 1];

    if (arg === 0) {
      return lastSelectedButton;
    }

    if (arg === 1) {
      return passwordString;
    }

    return null;
  }
  render() {
    if (this.props.appState.selectedButtons.length > 0) {
      return (
        <div className="test">
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
