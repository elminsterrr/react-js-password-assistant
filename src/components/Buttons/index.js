import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin: 2,
    padding: 0,
    minWidth: 1,
  },
};

const Buttons = () => {
  const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  const allButtons = arr.map(el => (
    <RaisedButton
      key={el}
      label={el}
      style={style.button}
      onClick={() => this.handleButtonSelect()}
    />
  ));

  return <div>{allButtons}</div>;
};

export default Buttons;
