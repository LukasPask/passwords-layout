import PropTypes from 'prop-types';
import React from 'react';
// Style
import '../style/FAQSection.scss';

const FAQSection = ({ headText, data, icon }) => {
  return (
    <section className='questions'>
      <h3 className='questions__text'>{headText}</h3>
      {data.map(({ id, title, context1, context2 }) => (
        <div className='accordion' key={id}>
          <input
            id={id}
            type='checkbox'
            className='accordion__toggle'
            name='toggle'
          />

          <label className='accordion__title' htmlFor={id}>
            {title}
            {icon}
          </label>
          <div className='accordion__contextBox'>
            <p className='accordion__context'>{context1}</p>
            <p className='accordion__context'>{context2}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

FAQSection.propTypes = {
  headText: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  icon: PropTypes.node.isRequired,
};

FAQSection.defaultProps = {
  headText: 'Accordion section',
};

export default FAQSection;
