import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
// Style
import '../style/Modal.scss';

const Modal = ({ children, onClose }) => {
  //   custom func
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div>
      <div className='modal'></div>
      <div
        className='modal__wrapper'
        onClick={(e) => closeOnOverlay(e)}
        data-id='modalWrapper'
      >
        <div className='modal__childrenWrapper'>
          <div className='modal__children'>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
