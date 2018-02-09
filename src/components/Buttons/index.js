import React from 'react';

import OneButton from '../OneButton';

const Buttons = props => {
  const arrayFromInput = props.array;
  const buttonsArray = [];

  for (let i = 1; i <= arrayFromInput; i++) {
    buttonsArray.push(i);
  }

  const handleButtonSelectZero = props.handleButtonSelectOne;

  const allButtons = buttonsArray.map(el => (
    <OneButton key={el} el={el} onClick={handleButtonSelectZero} />
  ));

  if (arrayFromInput > 0) {
    return <div>{allButtons}</div>;
  }

  return <div />;
};

export default Buttons;
