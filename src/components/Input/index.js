import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

const style = {
  button: {
    margin: 2,
    padding: 0,
    minWidth: 1,
  },
};

const Input = () => (
  <div>
    <div className="Input-textfield">
      <TextField hintText="Paste your password here to begin" />
    </div>
    <div>
      <RaisedButton label="1" style={style.button} />
      <RaisedButton label="2" style={style.button} />
      <RaisedButton label="3" style={style.button} />
      <RaisedButton label="4" style={style.button} />
      <RaisedButton label="5" style={style.button} />
      <RaisedButton label="6" style={style.button} />
      <RaisedButton label="7" style={style.button} />
      <RaisedButton label="8" style={style.button} />
      <RaisedButton label="9" style={style.button} />
      <RaisedButton label="10" style={style.button} />
      <RaisedButton label="11" style={style.button} />
      <RaisedButton label="12" style={style.button} />
      <RaisedButton label="13" style={style.button} />
      <RaisedButton label="14" style={style.button} />
      <RaisedButton label="15" style={style.button} />
      <RaisedButton label="16" style={style.button} />
      <RaisedButton label="17" style={style.button} />
      <RaisedButton label="18" style={style.button} />
      <RaisedButton label="19" style={style.button} />
      <RaisedButton label="20" style={style.button} />
    </div>
  </div>
);

export default Input;
