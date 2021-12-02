import React from 'react';
// Style
import '../style/Button.scss';

const Button = ({ text, action, paddingX, paddingY, textSize }) => {
  return (
    <button
      className='button'
      style={{ padding: `${paddingY} ${paddingX}`, fontSize: textSize }}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
