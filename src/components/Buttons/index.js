import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin: 2,
    padding: 0,
    minWidth: 1,
  },
};

const Buttons = props => {
  const arrayFromInput = props.array;
  const buttonsArray = [];

  for (let i = 1; i <= arrayFromInput; i++) {
    buttonsArray.push(i);
  }

  const handleButtonSelectZero = props.handleButtonSelectOne;

  const allButtons = buttonsArray.map(el => (
    <RaisedButton
      key={el}
      label={el}
      style={style.button}
      onClick={() => handleButtonSelectZero(el)}
    />
  ));

  if (arrayFromInput > 0) {
    return <div>{allButtons}</div>;
  }

  return <div />;
};

export default Buttons;
