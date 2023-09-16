import React from 'react';

import './Button.css';

const Button = props => {
  console.log("isvalid",props.isValidCheck)
  return (
    <button type={props.type} className={`${!props.isValidCheck?'button invalid':'button'}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
