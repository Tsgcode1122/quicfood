import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  // Redirect back to cart if empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  // Function to generate the order message
  const generateOrderMessage = () => {
    if (cart.length === 0) return "Your cart is empty.";

    let message =
      "Hello, I want to place an order for the following items:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - $${item.price.toFixed(2)} x ${
        item.quantity
      }\n`;
    });

    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    message += `\nTotal: $${totalPrice.toFixed(2)}`;

    return encodeURIComponent(message); // Encode message for URLs
  };

  // Function to handle order placement and clear the cart
  const placeOrder = (contactLink) => {
    if (cart.length === 0) return;

    window.open(contactLink, "_blank"); // Open the link in a new tab
    clearCart(); // Clear the cart after clicking
  };

  return (
    <Container>
      <Back onClick={() => navigate(-1)}>Cancel</Back>
      <h2>Confirm Your Order</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <CartList>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <img src={item.img} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </CartItem>
            ))}
          </CartList>

          <h3>Choose an Order Method:</h3>
          <OrderButtons>
            <button
              onClick={() =>
                placeOrder(
                  `https://wa.me/+2349078803521?text=${generateOrderMessage()}`,
                )
              }
            >
              📲 Order via WhatsApp (US)
            </button>
            <button
              onClick={() =>
                placeOrder(
                  `https://wa.me/+2349012345678?text=${generateOrderMessage()}`,
                )
              }
            >
              📲 Order via WhatsApp (Nigeria)
            </button>
            <button
              onClick={() =>
                placeOrder("https://www.instagram.com/your_instagram_username/")
              }
            >
              📸 Order via Instagram
            </button>
          </OrderButtons>
        </>
      )}
    </Container>
  );
};

export default OrderConfirmation;
const Back = styled.button``;
const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

const CartList = styled.div`
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
  }

  div {
    text-align: left;
  }

  h3 {
    font-size: 16px;
    margin: 0;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }
`;

const OrderButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 10px;
    font-size: 16px;
    background-color: #25d366; /* WhatsApp green */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;

    &:nth-child(2) {
      background-color: #128c7e; /* Darker green for Nigeria */
    }

    &:nth-child(3) {
      background-color: #e1306c; /* Instagram pink */
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
