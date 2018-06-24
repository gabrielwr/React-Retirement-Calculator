import styled from 'styled-components';

import { Link } from 'react-router';

export const Navbar = styled.nav`
  background-image: linear-gradient(90deg, #3023AE 0%, #53A0FD 77%, #59A5F2 88%, #82C5AB 95%);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
  height: 10%;
`;

export const NavbarList = styled.ul`
  height: 100%;
  width: 20%;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const NavbarLink = styled.li`
  list-style-type: none;
  display: block;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-size: 24px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.50);
  text-decoration: none;
`;
