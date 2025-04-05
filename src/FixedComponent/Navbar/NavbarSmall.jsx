import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { TbMenu3, TbX } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../Colors/ColorComponent";
import logo from "../../Images/quiclogo.png";
const NavbarSmall = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const handleToggleMenu = () => {
    setShowModal((prev) => !prev);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setShowModal(false);
  };

  return (
    <>
      <StyledNavbar style={{ top: visible ? 0 : "-5rem" }}>
        <Logo>
          Quic <span>Food</span>
        </Logo>
        <Menu onClick={handleToggleMenu}>
          {showModal ? <TbX /> : <TbMenu3 />}
        </Menu>
      </StyledNavbar>

      <MenuModal $show={showModal} ref={modalRef}>
        <ul>
          <li onClick={() => handleNavigate("/about")}>About Us</li>
          <li onClick={() => handleNavigate("/contact")}>Contact Us</li>
        </ul>
      </MenuModal>

      <div style={{ height: "3rem" }}></div>
    </>
  );
};

// Styled Components
const Logo = styled.div`
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
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
  background: rgba(255, 255, 255, 0.747) !important;
  backdrop-filter: blur(8px) !important;
  transition: top 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Menu = styled.div`
  cursor: pointer;
  svg {
    font-size: 24px;
  }
`;

const MenuModal = styled.div`
  position: fixed;
  top: 3.2rem; /* start just below navbar */
  right: ${({ $show }) => ($show ? "0" : "-100%")};
  height: auto;
  width: 140px;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  z-index: 998;
  padding: 1rem 1rem;
  border-radius: 0 0 0 10px;
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    color: ${Colors.black};
    font-weight: 500;

    &:hover {
      color: black;
    }
  }
`;

export default NavbarSmall;
