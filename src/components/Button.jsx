import React from 'react';
// Style
import { StyledButton } from '../style/Button.style';

const Button = ({ text, action, paddingX, paddingY, textSize }) => {
  return (
    <StyledButton
      style={{ padding: `${paddingY} ${paddingX}`, fontSize: textSize }}
      onClick={action}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
