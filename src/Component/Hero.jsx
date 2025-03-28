import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../Images/q1.jpg";
import Img2 from "../Images/q2.jpg";
import Img3 from "../Images/q3.jpg";
// import Img4 from "../Images/4.jpg";
import { Colors } from "../Colors/ColorComponent";
import Button from "../ReuseComponents/Button";
import HeroButton from "../ReuseComponents/HeroButton";

const images = [Img1, Img2, Img3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container>
        <AnimatePresence>
          <Background
            key={currentImage}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          />
        </AnimatePresence>

        {/* Add text and button on top of the background */}
      </Container>
      <Content>
        <Line>
          <h1>Event Planning Services</h1>
          {/* <p>Tailored experiences that bring your vision to life!</p> */}
          <Newsplit>
            <HeroButton>Get a Quote</HeroButton>
            <HeroButton>Portfolio</HeroButton>
          </Newsplit>
        </Line>
      </Content>
    </>
  );
};

export default Hero;

const Newsplit = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 800px) {
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    height: 90vh;
  }
  @media screen and (min-width: 1200px) {
    height: 95vh;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: transform, opacity;
  z-index: 1;
`;
const Line = styled.div`
  border: 1px solid #ffffff53;
  width: 90vw;
  border-radius: 20px;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 48px;
    text-align: center;
    font-family: "Prairie-Life", sans-serif !important;
    padding-bottom: 10px;
    @media screen and (max-width: 320px) {
      font-size: 38px;
    }
  }
  @media screen and (max-width: 320px) {
    height: 100%;
  }
  @media screen and (max-width: 320px) {
    padding: 10px;
  }
`;
const Content = styled.div`
  position: absolute;
  z-index: 2;
  /* height: 87vh; */
  width: 100%;
  border-radius: 25px 25px 0 0;
  margin-top: -70px;
  background: rgba(255, 255, 255, 0.403) !important;
  backdrop-filter: blur(8px) !important;
  padding: 2rem;
  text-align: center;
  color: ${Colors.black};
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 320px) {
    margin-top: -40px;
  }
`;
