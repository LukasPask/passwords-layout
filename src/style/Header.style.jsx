import styled from 'styled-components';

// Dekstop first

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: var(--white-color);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-color);
  height: 64px;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  font-size: 14px;
  font-weight: 500;
  & span {
    color: var(--primary-color);
  }
`;

export const Navigation = styled.nav`
  width: 50%;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const ListLink = styled.a`
  color: var(--black-color);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    color: var(--primary-color);
  }
`;
