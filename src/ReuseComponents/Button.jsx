import React from "react";
import styled from "styled-components";
import { BsArrowRightCircle } from "react-icons/bs";
import { Colors } from "../Colors/ColorComponent";

const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  padding: 4px 4px 4px 5px;
  border: 0.4px solid ${Colors.softLilac};
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  grid-template-columns: 1fr 1fr;
  width: 10rem;
  @media screen and (max-width: 320px) {
    width: 14rem;
  }
  justify-content: space-between;
  align-items: center;
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  background: ${({ bg }) => bg || "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(8px);
  color: ${({ color }) => color || `${Colors.black}`};
  svg {
    font-size: 28px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ children, bg, color, ...props }) => {
  return (
    <StyledButton bg={bg} color={color} {...props}>
      {children} <BsArrowRightCircle />
    </StyledButton>
  );
};

export default Button;
