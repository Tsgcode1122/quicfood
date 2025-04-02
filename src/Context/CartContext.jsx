import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    let updatedCart = [...cart];
    const existingIndex = updatedCart.findIndex(
      (item) => item.id === product.id,
    );

    const quantityToAdd = product.quantity ?? 1; // ✅ If quantity is not given, use 1

    if (existingIndex >= 0) {
      updatedCart[existingIndex].quantity += quantityToAdd;
    } else {
      updatedCart.push({ ...product, quantity: quantityToAdd });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    // Update the cart state and localStorage after removing a product
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );

    // Update the cart state and localStorage after updating the quantity
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
