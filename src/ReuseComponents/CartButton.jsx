import React, { useContext } from "react";
import styled from "styled-components";
import { message } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";
import { Colors, Shadows } from "../Colors/ColorComponent";

const Button = styled.button`
  background: ${Colors.primaryRed};
  color: ${Colors.pureWhite};
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  box-shadow: ${Shadows.soft};
  transition:
    background 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background: ${Colors.deepMaroon};
    transform: scale(1.05);
  }
`;

const CartButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    console.log("Product ID added to cart:", product.id);
    message.success(`${product.name} added to cart!`);
  };

  return (
    <Button onClick={handleAddToCart}>
      <FiShoppingCart />
    </Button>
  );
};

export default CartButton;
