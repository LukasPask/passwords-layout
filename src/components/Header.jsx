import React from 'react';
// Components
import Button from './Button';
// Style
import {
  StyledHeader,
  HeaderWrapper,
  Logo,
  LogoText,
  Navigation,
  NavigationList,
  ListLink,
} from '../style/Header.style';

const linkData = [
  {
    title: 'Features',
    linkTo: '/',
  },
  {
    title: 'Pricing',
    linkTo: '/',
  },
  {
    title: 'Apps',
    linkTo: '/',
  },
  {
    title: 'Blog',
    linkTo: '/',
  },
  {
    title: 'Help',
    linkTo: '/',
  },
  {
    title: 'My Account',
    linkTo: '/',
  },
];

const Header = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo>
          <img
            src='https://images-na.ssl-images-amazon.com/images/I/31HF7V4rAoL.png'
            alt='company logo'
            width='35'
          />
          <LogoText>
            Nord<span>Pass</span>
          </LogoText>
        </Logo>
        <Navigation>
          <NavigationList>
            {linkData.map(({ linkTo, title }) => (
              <ListLink href={linkTo}>{title}</ListLink>
            ))}
            <li>
              <Button
                text='Open Vault'
                action={() => console.log('Vault is open')}
                paddingX='6px'
                paddingY='15px'
              />
            </li>
          </NavigationList>
        </Navigation>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
