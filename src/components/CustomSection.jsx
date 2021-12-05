import PropTypes from 'prop-types';
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
Section.propTypes = {
  headText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  headText: 'New section',
};

export default Section;
