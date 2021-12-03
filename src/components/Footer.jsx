import React from 'react';
// Style
import '../style/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__left'>
          <a href='/' className='footer__text--grey'>
            ENGAGE
          </a>
          <a href='/' className='footer__text'>
            Privacy Policy
          </a>
          <a href='/' className='footer__text'>
            Terms of Service
          </a>
        </div>
        <p className='footer__text'>
          Copyright &copy; {new Date().getFullYear()} NordPass.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
