import { Navbar } from 'reactstrap';
import styled from 'styled-components';
import * as colors from '../../global/colors';

export const NavbarContainer = styled(Navbar)`
  height: 55px;
  font-family: 'Ubuntu';
  padding: 0;
  background-color: ${colors.BG_PRIMARY};
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;

  height: 55px;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
`;

export const HamburgerContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 55px;
  width: 80px;
`;

export const Hanburger = styled.button`
  height: 45px;
  width: 45px;
  background: transparent;
  border: 0;
  outline: 0;
`;

export const BrandContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.a`
  font-size: 1.2rem;
  font-family: 'Chango', sans-serif;
  text-decoration: none;
  color: white;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
