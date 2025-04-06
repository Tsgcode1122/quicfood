import React, { useContext } from "react";
import styled from "styled-components";
import { message } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";
import { Colors, Shadows } from "../Colors/ColorComponent";

const Button = styled.button`
  background: ${Colors.pureWhite};
  color: ${Colors.black};
  border: none;
  padding: 8px;
  font-size: 14px;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 30px;
  /* height: 30px; */
  font-weight: bold;
  transition:
    background 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background: ${Colors.deepMaroon};
    transform: scale(1.05);
    color: ${Colors.pureWhite};
  }
  z-index: 10;
  background: ${Colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  backdrop-filter: blur(8px) !important;
  cursor: pointer;

  svg {
    font-size: 14px;
  }
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
