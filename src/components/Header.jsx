import React from 'react';
// Components
import Button from './Button';
import Image from './Image';
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
// Images
import CompanyLogo from '../assets/logo.png';

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
          <Image
            imageSource={CompanyLogo}
            alt='company logo'
            height='30px'
            width='35px'
          />
          <LogoText>
            Nord<span>Pass</span>
          </LogoText>
        </Logo>
        <Navigation>
          <NavigationList>
            {linkData.map(({ linkTo, title }) => (
              <ListLink key={title} href={linkTo}>
                {title}
              </ListLink>
            ))}
            <li>
              <Button
                text='Open Vault'
                action={() => console.log('Vault is open')}
                paddingX='15px'
                paddingY='6px'
              />
            </li>
          </NavigationList>
        </Navigation>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
