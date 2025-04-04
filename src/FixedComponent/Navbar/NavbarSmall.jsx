import React, { useState, useRef, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";
import CartItemCount from "../../ReuseComponents/CartItemCount";

import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../Colors/ColorComponent";
const NavbarSmall = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <StyledNavbar style={{ top: visible ? 0 : "-5rem" }}>
        <Logo>
          Quic <span> Food</span>
        </Logo>
        <CartIconInner onClick={() => navigate("/cartpage")}>
          <FiShoppingCart />
          <ItemCount>
            <CartItemCount />
          </ItemCount>
        </CartIconInner>
      </StyledNavbar>
      <div style={{ height: "3rem" }}></div>
    </>
  );
};
// Styled components
const Logo = styled.div`
  color: black;
  span {
    color: ${Colors.primaryRed};
  }
`;
const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  padding: 1rem 1rem 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
  background: rgba(255, 255, 255, 0.1) !important;

  backdrop-filter: blur(8px) !important;
`;

const CartIconInner = styled.div`
  position: relative;
  svg {
    font-size: 22px;
  }
`;

const ItemCount = styled.span`
  position: absolute;
  top: -14px;
  right: -14px;
  background-color: red;
  color: white;
  min-width: 25px;
  min-height: 25px;

  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50%;

  font-size: 12px;
`;

export default NavbarSmall;
