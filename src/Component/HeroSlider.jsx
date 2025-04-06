import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../Colors/ColorComponent";
import products from "../Product/Products";
import { motion, AnimatePresence } from "framer-motion";
const HeroSlider = () => {
  const [product, setProduct] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setProduct(shuffled.slice(0, 5));
    }
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % product.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [product]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const delta = touchStartX.current - touchEndX.current;

    if (delta > 50) {
      setCurrentIndex((prev) => (prev + 1) % product.length);
    } else if (delta < -50) {
      setCurrentIndex((prev) => (prev - 1 + product.length) % product.length);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (product.length === 0) return null;

  return (
    <HeroContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <SlideWrapper
          key={product[currentIndex].id}
          initial={{ opacity: 0.95, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.9 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <TextContent>
            <h2>{product[currentIndex].name}</h2>
            <p>{product[currentIndex].description}</p>
            <StyledLink to={`/products/${product[currentIndex].id}`}>
              View Product
            </StyledLink>
          </TextContent>
          <ImageContainer>
            <img
              src={product[currentIndex].img}
              alt={product[currentIndex].name}
            />
          </ImageContainer>
        </SlideWrapper>
      </AnimatePresence>

      <Indicators>
        {product.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Indicators>
    </HeroContainer>
  );
};

export default HeroSlider;

// Styled Components
const HeroContainer = styled.div`
  width: 100%;
  padding: 2rem 0.8rem 3rem 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
const SlideWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  display: grid;
  align-items: center;
  grid-template-columns: 4.8fr 5.2fr;
  gap: 10px;
  background: #f0f0f0b2;
  border-radius: 20px;
  overflow: hidden;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 20px;
    color: ${Colors.black};
    margin-left: 10px;
    margin-bottom: 10px;
    min-height: 3rem; /* Uniform height for title */
    display: flex;
    align-items: center;
  }

  p {
    font-size: 12px;
    margin-left: 10px;
    color: ${Colors.gray};
    margin-bottom: 20px;
    min-height: 4rem; /* Uniform height for description */
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  background: ${Colors.primaryRed};
  color: white;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 10px;
  text-decoration: none;
  width: fit-content;
  &:hover {
    color: white;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  clip-path: ellipse(95% 100% at 100% 50%);

  img {
    width: 100%;
    height: 210px;
    border-radius: 20px;
    object-fit: cover;
    display: block;
  }
`;

const Indicators = styled.div`
  display: flex;
  position: absolute;
  bottom: 15px;
  gap: 8px;
`;

const Indicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.active ? Colors.primaryRed : "#ccc")};
  cursor: pointer;
  transition: background 0.3s ease;
`;
