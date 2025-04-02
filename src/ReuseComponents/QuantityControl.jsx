import React, { useState } from "react";
import { Button } from "antd";

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
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button onClick={handleDecrease} style={{ marginRight: "10px" }}>
        -
      </Button>
      <span>{quantity}</span>
      <Button onClick={handleIncrease} style={{ marginLeft: "10px" }}>
        +
      </Button>
    </div>
  );
};

export default QuantityControl;
