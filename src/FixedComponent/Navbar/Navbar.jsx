import React from "react";
import NavbarBig from "./NavbarBig";
import NavbarSmall from "./NavbarSmall";
import styled from "styled-components";
import { breakpoints } from "../BreakPoints";

const NavbarContainer = styled.div`
  width: 100%;
`;

const SmallNav = styled.div`
  display: block;

  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const BigNav = styled.div`
  display: none;

  @media (min-width: ${breakpoints.sm}) {
    display: block;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <SmallNav>
        <NavbarSmall />
      </SmallNav>
      <BigNav>
        <NavbarBig />
      </BigNav>
    </NavbarContainer>
  );
};

export default Navbar;
