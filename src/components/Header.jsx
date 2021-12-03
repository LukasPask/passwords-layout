import React from 'react';
// Components
import NavBar from './NavBar';
// Style
import '../style/Header.scss';
// Logic
import HeaderLogic from '../logic/HeaderLogic';
// Images
import CompanyLogo from '../assets/logo.png';
import Modal from './Modal';

const Header = () => {
  return (
    <HeaderLogic
      render={(
        //   State
        isActive,
        isOpen,
        // Functions
        toggleNavigation
      ) => (
        <header className='header'>
          <div className='header__wrapper'>
            <div className='logo'>
              <img
                className='logo__image'
                src={CompanyLogo}
                alt='company logo'
              />
              <p className='logo__text'>
                Nord<span className='logo__text--green'>Pass</span>
              </p>
            </div>
            <div className='navigation__wrapper'>
              <NavBar />
            </div>
            <div onClick={toggleNavigation} className={`hamburger ${isActive}`}>
              <span className='hamburger__line'></span>
              <span className='hamburger__line'></span>
              <span className='hamburger__line'></span>
            </div>
          </div>
          {isOpen && (
            <Modal onClose={toggleNavigation}>
              <NavBar />
            </Modal>
          )}
        </header>
      )}
    />
  );
};

export default Header;
