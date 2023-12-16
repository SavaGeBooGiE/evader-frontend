import styled from 'styled-components';
import { Dropdown } from 'reactstrap';

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  position: relative;
  padding: 10px;
  margin: 0;
  list-style: none;
  font-family: 'Nunito', sans-serif;
`;

export const Filter = styled(Dropdown)`
  margin-left: 1rem;
`;
