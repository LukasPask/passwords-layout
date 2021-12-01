import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--white-color);
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 72px 0;
`;

export const FooterText = styled.p`
  color: var(--secondary-color);
  font-size: 12px;
  line-height: 20px;
  padding: 15px 0 0 0;
  &:first-child {
    color: #b9babd;
    padding: 0;
  }
`;
