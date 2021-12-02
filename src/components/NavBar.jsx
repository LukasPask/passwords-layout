import React from 'react';
// Components
import Button from './Button';
// Logic
import HeaderLogic from '../logic/HeaderLogic';
// Style
import '../style/NavBar.scss';
// Navigation data
import { linkData } from '../data/Data';

const NavBar = () => {
  return (
    <HeaderLogic
      render={(
        //   State
        isOpen,
        height
      ) => (
        <nav className='nav'>
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
      )}
    />
  );
};

export default NavBar;
