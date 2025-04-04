import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

const QuantityControl = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(newQuantity); // Update quantity in SingleProduct
      return newQuantity;
    });
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        onQuantityChange(newQuantity); // Update quantity in SingleProduct
        return newQuantity;
      });
    }
  };

  return (
    <QuantityControls>
      <CustomButton onClick={handleDecrease}>-</CustomButton>
      <span>{quantity}</span>
      <CustomButton onClick={handleIncrease}>+</CustomButton>
    </QuantityControls>
  );
};

export default QuantityControl;
const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  background: #e0e0e080;
  border-radius: 30px;
  width: 90px;
  padding: 1px;
  span {
    min-width: 20px;
    text-align: center;
  }
`;
const CustomButton = styled.div`
  cursor: pointer;
  background: white;
  border-radius: 50%;
  height: 20px;
  display: flex;
  align-items: center;
  padding: 12px;
  justify-content: center;
  width: 20px;
`;
