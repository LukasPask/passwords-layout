import React from 'react';
// Style
import { StyledButton } from '../style/Button.style';

const Button = ({ text, action, paddingX, paddingY }) => {
  return (
    <StyledButton
      style={{ padding: `${paddingX} ${paddingY}` }}
      onClick={action}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
