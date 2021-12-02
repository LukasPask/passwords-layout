import React from 'react';
// Components
import Button from './Button';
// Style
import '../style/Header.scss';
// Logic
import HeaderLogic from '../logic/HeaderLogic';
// Images
import CompanyLogo from '../assets/logo.png';
// Navigation data
import { linkData } from '../data/Data';

const Header = () => {
  console.log(window.outerWidth);
  return (
    <HeaderLogic
      render={(
        //   State
        isActive,
        isOpen,
        height,
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
            <nav className='nav' style={{ display: isOpen, height: height }}>
              <ul className='nav__list'>
                {linkData.map(({ linkTo, title }) => (
                  <li className='nav__item' key={title}>
                    <a className='nav__link' href={linkTo}>
                      {title}
                    </a>
                  </li>
                ))}
                <li className='nav__item'>
                  <Button
                    text='Open Vault'
                    action={() => console.log('Vault is open')}
                    paddingX='0.938rem'
                    paddingY='0.375rem'
                  />
                </li>
              </ul>
            </nav>
            <div onClick={toggleNavigation} className={`hamburger ${isActive}`}>
              <span className='hamburger__line'></span>
              <span className='hamburger__line'></span>
              <span className='hamburger__line'></span>
            </div>
          </div>
        </header>
      )}
    />
  );
};

export default Header;
