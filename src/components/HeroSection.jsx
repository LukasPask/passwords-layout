import React from 'react';
// Components
import Button from './Button';
import Image from './Image';
// Style
import { StyledHero, LeftSideHero, HeroText } from '../style/Hero.style';
// Assets
import HeroImage from '../assets/np-hero-image.png';

const Hero = () => {
  return (
    <StyledHero>
      <LeftSideHero>
        <HeroText>Get your passwords organized</HeroText>
        <Button
          text='Get started'
          paddingX='24px'
          paddingY='12px'
          textSize='20px'
        />
      </LeftSideHero>
      <div>
        <Image imageSource={HeroImage} height='500px' width='750px' />
      </div>
    </StyledHero>
  );
};

export default Hero;
