import PropTypes from 'prop-types';
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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

Button.defaultProps = {
  text: 'Click me',
  size: 'small-btn',
};

export default Button;
