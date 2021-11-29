import styled from 'styled-components';

// Dekstop first

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 5vh;
  margin: 0 auto;
  max-width: 1340px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
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
  &:hover {
    color: var(--primary-color);
  }
`;
