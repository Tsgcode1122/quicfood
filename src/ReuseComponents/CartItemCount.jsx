import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartItemCount = () => {
  const { cart } = useContext(CartContext);

  // Calculate the total number of items (considering quantities)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <span>{totalItems}</span>
    </div>
  );
};

export default CartItemCount;
