import React from 'react';
// Style
import '../style/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__left'>
          <p className='footer__text--grey'>ENGAGE</p>
          <p className='footer__text'>Privacy Policy</p>
          <p className='footer__text'>Terms of Service</p>
        </div>
        <p className='footer__text'>
          Copyright &copy; {new Date().getFullYear()} NordPass.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
