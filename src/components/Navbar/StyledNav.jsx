import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styleVariables from '../../styles/variables';

const { screen, text, spacing, borderRadius } = styleVariables;

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.nav.bg};
  height: ${({ collapsed }) => (collapsed ? '4.5rem' : '100vh')};
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: ${spacing.md};
  position: absolute;
  transition: all ease 0.2s;
  @media (min-width: ${screen.md}) {
    height: 100vh;
    flex-basis: 300px;
    position: relative;
    padding: ${spacing.lg};
  }
`;

export const NavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.xl};
`;

export const NavLogo = styled.div`
  width: 10rem;
  cursor: pointer;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const NavIcon = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${text.lg};
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.nav.color};
  @media (min-width: ${screen.sm}) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  background-color: ${({ theme, isActive }) => (isActive ? theme.nav.bgHover : 'transparent')};
  border-radius: ${borderRadius.sm};
  margin-bottom: ${spacing.sm};
  transition: all ease 0.3s;
  & > a {
    color: ${({ theme, isActive }) => (isActive ? theme.nav.colorHover : theme.nav.color)};
  }
  :hover {
    background-color: ${({ theme }) => theme.nav.bgHover};
    & > a {
      color: ${({ theme }) => theme.nav.colorHover};
    }
  }
`;

export const Lang = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${spacing.md};
`;

export const LinkIcon = styled.div`
  font-size: ${text.md};
  padding: ${spacing.sm};
  line-height: 0;
`;

export const LinkLabel = styled.span`
  margin-left: ${spacing.sm};
`;

StyledNav.propTypes = {
  collapsed: PropTypes.bool,
};
LinkContainer.propTypes = {
  isActive: PropTypes.bool,
};
