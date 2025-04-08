import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";
import { IoAddOutline } from "react-icons/io5";
import { RxMinus } from "react-icons/rx";
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
      <CustomButton onClick={handleDecrease}>
        <RxMinus />
      </CustomButton>
      <span>{quantity}</span>
      <CustomButton onClick={handleIncrease}>
        <IoAddOutline />
      </CustomButton>
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
  width: 100px;
  padding: 2px;
  span {
    min-width: 20px;
    text-align: center;
  }
`;
const CustomButton = styled.div`
  cursor: pointer;
  background: white;
  border-radius: 50%;
  height: 26px;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: center;
  width: 26px;
  svg {
    font-weight: 100 !important;
  }
`;
