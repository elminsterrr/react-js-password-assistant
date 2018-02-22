import React from 'react';

import OneButton from '../OneButton';
import appLegend from './app_legend.png';
import './style.css';

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
    return (
      <div>
        {allButtons}
        <br />
        <div className="Buttons-img-div">
          <img src={appLegend} alt="App legend" />
        </div>
      </div>
    );
  }

  return <div />;
};

export default Buttons;
