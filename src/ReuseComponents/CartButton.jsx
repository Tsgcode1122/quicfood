import React, { useContext } from "react";
import styled from "styled-components";
import { message } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";
import { Colors, Shadows } from "../Colors/ColorComponent";

const Button = styled.button`
  background: ${Colors.pureWhite};
  color: ${Colors.primaryRed};
  border: none;
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  transition:
    background 0.3s ease,
    transform 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  &:hover {
    background: ${Colors.deepMaroon};
    transform: scale(1.05);
  }
  z-index: 777;
`;

const CartButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [messageApi, contextHolder] = message.useMessage();

  const handleAddToCart = () => {
    try {
      addToCart(product);
      messageApi.success(`${product.name} added to cart!`);
      console.log("Product ID added to cart:", product.id);
    } catch (error) {
      console.error("Error adding to cart:", error);
      messageApi.error("Failed to add product to cart.");
    }
  };

  return (
    <>
      {contextHolder}
      <Button onClick={handleAddToCart}>
        <FiShoppingCart />
      </Button>
    </>
  );
};

export default CartButton;
