import React, { useState, useRef, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";
// import cart from "../Images/cart.png";
// import CartItems from "./CartItems";
// import TotalInCart from "./TotalInCart";

const NavbarSmall = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const sidebarRef = useRef(null);
  const [saleData, setSaleData] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
        {/* <MenuToggle onClick={toggleSidebar} /> */}

        {/* Conditionally render login/logout link */}
        {/* {userData ? <LogoutButton /> : <Link to="/login">Login</Link>} */}

        <CartIcon onClick={toggleSidebar}>
          <CartIconInner>
            {/* <CartIconImage src={cart} alt="Cart" /> */}
            <ItemCount>{/* <TotalInCart /> */}</ItemCount>
          </CartIconInner>
        </CartIcon>
      </StyledNavbar>
      <div style={{ height: "2rem" }}></div>

      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
        <CloseButton onClick={closeSidebar}>Close</CloseButton>
        {/* i sent the closesidebar to the cartitems also */}
        {/* <CartItems closeSidebar={closeSidebar} /> */}
      </Sidebar>

      {isSidebarOpen && <Overlay onClick={closeSidebar} />}
    </>
  );
};
// Styled components

const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;

  align-items: center;
  justify-content: space-between;

  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
`;

const CartIcon = styled.div`
  margin: 0;
  padding-right: 20px;
  cursor: pointer;
  transform: skewX(0deg);
  background-color: white;
  /* box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; */
`;

const CartIconInner = styled.div`
  position: relative;
`;

const CartIconImage = styled.img`
  width: 25px;
  height: 25px;
`;

const ItemCount = styled.span`
  position: absolute;
  top: -3px;
  right: -10px;
  background-color: red;
  color: white;
  min-width: 7px;
  min-height: 7px;
  justify-content: start;
  display: flex;
  border-radius: 50%;
  padding: 5px;
  font-size: 10px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-90vw")};
  width: 90vw;
  height: 100vh;
  background-color: #f0f0f0;
  transition: right 0.5s ease-in-out;
  z-index: 999;
  overflow-x: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export default NavbarSmall;
