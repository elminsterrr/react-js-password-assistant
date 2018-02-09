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
    <MyButton key={el} onClick={handleButtonSelectZero} el={el} />
  ));

  if (arrayFromInput > 0) {
    return <div>{allButtons}</div>;
  }

  return <div />;
};

class MyButton extends React.Component {
  constructor() {
    super();
    this.state = { disabled: false };
  }
  handleClick = () => {
    this.setState({ disabled: !this.state.disabled });
    this.props.onClick(this.props.el);
  };
  render() {
    return (
      <RaisedButton
        disabled={this.state.disabled}
        key={this.props.el}
        label={this.props.el}
        style={style.button}
        onClick={() => this.handleClick()}
      />
    );
  }
}

export default Buttons;
