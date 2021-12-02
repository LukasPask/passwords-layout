import React from 'react';
// Components
import Button from './Button';
// Style
import '../style/Hero.scss';
// Assets
import HeroImage from '../assets/np-hero-image.png';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__wrapper'>
        <div className='hero__left'>
          <h1 className='hero__text'>Get your passwords organized</h1>
          <Button
            text='Get started'
            paddingX='1.5rem'
            paddingY='0.75rem'
            textSize='1.25rem'
          />
        </div>
        <div className='hero__right'>
          <img src={HeroImage} alt='pc' className='hero__image' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
