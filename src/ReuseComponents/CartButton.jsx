import React, { useContext } from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../Context/CartContext";
import { Colors } from "../Colors/ColorComponent";

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
  font-weight: bold;
  transition:
    background 0.3s ease,
    transform 0.2s ease;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  backdrop-filter: blur(8px) !important;

  &:hover {
    background: ${Colors.deepMaroon};
    transform: scale(1.05);
    color: ${Colors.pureWhite};
  }

  svg {
    font-size: 14px;
  }
`;

const ToastContent = styled.div`
  display: flex;
  align-items: center;
  background: ${Colors.black};
  color: ${Colors.pureWhite};
  padding: 10px 14px;
  border-radius: 20px;
  gap: 10px;
  box-shadow: 0 5px 15px rgba(241, 241, 241, 0.2);
  img {
    max-width: 100%;
    width: 30px;
    height: 30px;
    margin: 0;
    border-radius: 5px;
  }
`;

const CartButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    try {
      addToCart(product);

      toast.custom(
        (t) => (
          <ToastContent>
            <img src={product.img} alt={product.name} />
            <span>{product.name} added to cart!</span>
          </ToastContent>
        ),
        {
          duration: 3000, // ⏱ Custom duration in ms
        },
      );

      console.log("Product ID added to cart:", product.id);
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add product to cart.");
    }
  };

  return (
    <>
      <Button onClick={handleAddToCart}>
        <FiShoppingCart />
      </Button>
    </>
  );
};

export default CartButton;
