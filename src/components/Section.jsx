import React from 'react';
// Style
import { StyledSection, SectionHeadText } from '../style/Section.style';

const Section = ({ headText, children }) => {
  return (
    <StyledSection>
      <SectionHeadText>{headText}</SectionHeadText>
      <div>{children}</div>
    </StyledSection>
  );
};

export default Section;
