import React from 'react';
// Style
import '../style/Section.scss';

const Section = ({ headText, children }) => {
  return (
    <section className='section'>
      <h3 className='section__text'>{headText}</h3>
      <div className='section__children'>{children}</div>
    </section>
  );
};

export default Section;
