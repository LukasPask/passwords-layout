import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: var(--primary-color);
  border: none;
  border-radius: 3px;
  color: var(--white-color);
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
