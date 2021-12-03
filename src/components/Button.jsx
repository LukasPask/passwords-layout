import React from 'react';
// Style
import '../style/Button.scss';

const Button = ({ text, action, size, textSize }) => {
  return (
    <button style={{ fontSize: textSize }} onClick={action} className={size}>
      {text}
    </button>
  );
};

export default Button;
