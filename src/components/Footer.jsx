import React from 'react';
// Style
import { StyledFooter, FooterWrapper, FooterText } from '../style/Footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <div>
          <FooterText>ENGAGE</FooterText>
          <FooterText>Privacy Policy</FooterText>
          <FooterText>Terms of Service</FooterText>
        </div>
        <FooterText>
          Copyright &copy; {new Date().getFullYear()} NordPass.com
        </FooterText>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
