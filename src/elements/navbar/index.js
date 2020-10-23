import React from "react";

import { Navbar, NavbarList, NavbarLink, StyledLink } from "./styled";

const Nav = () => (
  <Navbar>
    <NavbarList>
      <NavbarLink>
        <StyledLink to="/">Retirement Calculator</StyledLink>
      </NavbarLink>
    </NavbarList>
  </Navbar>
);

export default Nav;
