import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, Shadows } from "../Colors/ColorComponent";
import products from "../Product/Products";

const HeroSlider = () => {
  const [product, setProduct] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pick 5 random products immediately
  useEffect(() => {
    if (products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setProduct(shuffled.slice(0, 5));
    }
  }, []);

  // Auto-change slide every 5 seconds
  useEffect(() => {
    if (product.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % product.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [product]);

  if (product.length === 0) return null; // Ensure nothing breaks if products are empty

  return (
    <HeroContainer>
      <Slide key={product[currentIndex].id}>
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
      </Slide>

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

const HeroContainer = styled.div`
  width: 100%;
  padding: 2rem 0.5rem 3rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  transition: opacity 1s ease-in-out;
  background: #f0f0f0b2;
  border-radius: 20px;
`;

const TextContent = styled.div`
  h2 {
    font-size: 20px;
    color: ${Colors.black};
    margin-bottom: 10px;
    margin-left: 10px;
  }
  p {
    font-size: 12px;
    color: ${Colors.gray};
    margin-bottom: 20px;
    margin-left: 10px;
  }
`;

const StyledLink = styled(Link)`
  background: ${Colors.primaryRed};
  color: black;
  padding: 10px 15px;
  border-radius: 10px;
  margin-left: 10px;
  text-decoration: none;
  &:hover {
    background: ${Colors.darkBlue};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center; /* Fix bottom padding issue */
  justify-content: center;
  border-radius: 20px;
  clip-path: ellipse(95% 100% at 100% 50%);

  img {
    width: 100%;
    height: 200px;
    border-radius: 20px;
    display: block; /* Prevent unwanted margin below */
    object-fit: cover;
  }
`;

const Indicators = styled.div`
  display: flex;
  position: absolute;
  bottom: 15px;
  gap: 8px;
  margin-top: 40px;
`;

const Indicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.active ? Colors.primaryRed : "#ccc")};
  cursor: pointer;
  transition: background 0.3s ease;
`;
