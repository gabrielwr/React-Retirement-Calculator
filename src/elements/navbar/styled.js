import styled from "styled-components";

import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  background-image: linear-gradient(
    90deg,
    #3023ae 0%,
    #53a0fd 77%,
    #59a5f2 88%,
    #82c5ab 95%
  );
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
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
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-decoration: none;
`;
