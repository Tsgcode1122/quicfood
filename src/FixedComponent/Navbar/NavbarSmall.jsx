import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { Colors, Shadows } from "../../Colors/ColorComponent";
import {
  BsArrowBarLeft,
  BsArrowRightCircle,
  BsArrowDownCircle,
} from "react-icons/bs";

import navbg from "../../Images/c7.jpg";
import navbg2 from "../../Images/c8.jpg";
import { breakpoints } from "../BreakPoints";
// Styled components

const images = [
  { id: 1, src: navbg, link: "/page1" },
  { id: 2, src: navbg2, link: "/page2" },
  // { id: 3, src: navbg, link: "/page3" },
  // { id: 4, src: navbg, link: "/page4" },
];

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1.5rem;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(8px) !important;
  color: ${Colors.black};
  border-radius: 0 0 25px 25px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: ${Shadows.soft};
  @media (max-width: ${breakpoints.ss}) {
    padding: 10px 1rem;
  }
  @media screen and (max-width: 320px) {
    padding: 10px 0.7rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: ${breakpoints.ss}) {
    font-size: 1.2rem;
  }
`;

const MenuToggle = styled.div`
  cursor: pointer;

  /* align-items: center; */

  padding: 0;
  margin: 0;
  .hamburger-react {
    border: 0.4px solid ${Colors.black};
    border-radius: 50%;
    overflow: hidden;
  }
  .hamburger-react div {
    margin: 0px !important;
    padding: 0px !important;
    display: inline-block !important;
  }

  .hamburger-react div:nth-child(1),
  .hamburger-react div:nth-child(2),
  .hamburger-react div:nth-child(3) {
    border-radius: 0px;
  }
`;
const Second = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const QuickContact = styled.p`
  border-radius: 30px;
  border: 0.5px solid ${Colors.black};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.ss}) {
    padding: 5px 15px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 999;
  transition: top 0.3s ease-in-out;
  overflow: hidden;
`;

const SidebarContent = styled.div`
  padding: 2rem;
  padding-top: 6rem;
  display: ${({ isVisible }) =>
    isVisible ? "flex" : "none"}; /* Hide by default */
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  background-color: #fbf9f4;
  overflow: auto;
  @media screen and (max-width: 320px) {
    padding: 6rem 0.7rem 1rem 0.7rem;
  }
`;

const ServiceContent = styled.div`
  padding: 2rem;
  display: ${({ isVisible }) =>
    isVisible ? "flex" : "none"}; /* Show only when needed */
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  background: #fbf9f4;
  padding-top: 6rem;
  overflow: auto;
  transition: display 0.3s ease-in-out;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  color: ${Colors.black};
  text-decoration: none;
  font-weight: bold;
  transition:
    color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.2px solid ${Colors.black};
  border-radius: 10px;
  padding: 8px;
  &:hover {
    color: ${Colors.brightPurple};

    border-color: ${Colors.brightPurple};
  }
`;

const MenuItem = styled.p`
  font-size: 1rem;
  color: ${Colors.black};
  margin: 0;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.2px solid ${Colors.black};
  border-radius: 10px;
  padding: 8px;
  &:hover {
    color: ${Colors.brightPurple};
    transition: color 0.3s ease-in-out;
  }
`;
const QuickImage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
`;

const ImageContainer = styled(Link)`
  display: block;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const NavbarSmall = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      setShowServices(false); // Reset when opening/closing sidebar
    }
  };

  const showServiceMenu = () => {
    setShowServices(true);
  };

  const showMainMenu = () => {
    setShowServices(false);
  };

  const closeAll = () => {
    setIsSidebarOpen(false);
    setShowServices(false);
  };

  return (
    <>
      <NavbarContainer>
        <Link to="/" onClick={closeAll}>
          <Logo>Calissweet</Logo>
        </Link>
        <Second>
          <QuickContact>
            <Link>Contact Us</Link>
          </QuickContact>
          <MenuToggle>
            <Hamburger
              toggled={isSidebarOpen}
              toggle={toggleSidebar}
              color={Colors.black}
              size={20}
            />
          </MenuToggle>
        </Second>
      </NavbarContainer>

      <Sidebar isOpen={isSidebarOpen}>
        {!showServices ? (
          <>
            <SidebarContent isVisible={!showServices}>
              <StyledLink to="/" onClick={closeAll}>
                Home <BsArrowRightCircle />
              </StyledLink>
              <StyledLink to="/about" onClick={closeAll}>
                About <BsArrowRightCircle />
              </StyledLink>
              <MenuItem onClick={showServiceMenu}>
                Services <BsArrowDownCircle />
              </MenuItem>
              <StyledLink to="/contact" onClick={closeAll}>
                Contact <BsArrowRightCircle />
              </StyledLink>
              <StyledLink to="/gallery" onClick={closeAll}>
                Gallery <BsArrowRightCircle />
              </StyledLink>
              <StyledLink to="/pricing" onClick={closeAll}>
                Pricing & Packages <BsArrowRightCircle />
              </StyledLink>
              <QuickImage>
                {images.map((image) => (
                  <ImageContainer key={image.id} to={image.link}>
                    <StyledImage src={image.src} alt={`Image ${image.id}`} />
                  </ImageContainer>
                ))}
              </QuickImage>
            </SidebarContent>
          </>
        ) : (
          <ServiceContent isVisible={showServices}>
            <MenuItem onClick={showMainMenu}>
              {" "}
              <BsArrowBarLeft /> Back
            </MenuItem>
            <StyledLink to="/services/birthday" onClick={closeAll}>
              Birthday <BsArrowRightCircle />
            </StyledLink>
            <StyledLink to="/services/wedding" onClick={closeAll}>
              Wedding <BsArrowRightCircle />
            </StyledLink>
            <StyledLink to="/services/baby-showers" onClick={closeAll}>
              Baby Showers <BsArrowRightCircle />
            </StyledLink>
            <StyledLink to="/services/bridal-showers" onClick={closeAll}>
              Bridal Showers <BsArrowRightCircle />
            </StyledLink>
            <StyledLink to="/services/pop-up-classes" onClick={closeAll}>
              Pop Up Classes <BsArrowRightCircle />
            </StyledLink>
            <StyledLink to="/services/corporate-events" onClick={closeAll}>
              Corporate Events <BsArrowRightCircle />
            </StyledLink>
            <StyledLink to="/services/photo-studio" onClick={closeAll}>
              Photo Studio <BsArrowRightCircle />
            </StyledLink>
            <StyledLink to="/services/business-meeting" onClick={closeAll}>
              Business Meeting <BsArrowRightCircle />
            </StyledLink>
          </ServiceContent>
        )}
      </Sidebar>

      <Overlay isOpen={isSidebarOpen} onClick={closeAll} />
    </>
  );
};

export default NavbarSmall;
