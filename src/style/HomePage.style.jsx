import styled from 'styled-components';

export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledH6Text = styled.h6`
  color: var(--secondary-color);
  font-size: 20px;
  line-height: 30px;
`;

export const StyledSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('https://cdn-icons-png.flaticon.com/512/60/60995.png');
  background-position: 90%;
  background-size: 8px;
  background-repeat: no-repeat;
  background-color: var(--white-color);
  transition: 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px;
  width: 15%;
  &:hover {
    cursor: pointer;
  }
`;

export const OrderedList = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  counter-reset: section;
`;

export const StyledListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px 0 0 0;
  & span:first-child {
    padding-left: 28px;
    font-weight: 700;
  }
  & span:last-child {
    margin-left: auto;
  }
  &::before {
    counter-increment: section;
    content: counter(section) '.  ';
  }
`;

export const ButtonWrapper = styled.div`
  padding: 50px 0 0 0;
  text-align: center;
  padding-bottom: 96px;
`;

// FAQ section

export const SectionWrapper = styled.div`
  background-color: #f8f8f8;
  padding-bottom: 96px;
`;

export const FAQSection = styled.div`
  background-color: var(--white-color);
  border-radius: 3px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 15px auto;

  width: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const FAQBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FAQTitle = styled.p`
  color: var(--secondary-color);
  font-weight: 700;
  line-height: 24px;
`;

export const FAQContext = styled.p`
  color: var(--secondary-color);
  line-height: 24px;
  padding: 16px 0;
  animation: fadein 0.5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
