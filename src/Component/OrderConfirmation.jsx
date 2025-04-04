import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Colors, Shadows } from "../Colors/ColorComponent";
import { MdClear, MdArrowBack } from "react-icons/md";

const OrderConfirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  // Redirect back to cart if empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/storepage");
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
    clearCart();
  };

  return (
    <Main>
      <Container>
        <Top>
          <Back onClick={() => navigate(-1)}>
            <MdArrowBack />
          </Back>

          <ConfirmHeading>Confirm Your Order</ConfirmHeading>
        </Top>
        <Height />
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <CartContainer>
              <CartList>
                {cart.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <div>
                      <h5>{item.name}</h5>
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
                      `https://wa.me/+2349078803521?text=${generateOrderMessage()}`,
                    )
                  }
                >
                  📲 Order via WhatsApp (Nigeria)
                </button>
                <button
                  onClick={() =>
                    placeOrder(
                      "https://www.instagram.com/your_instagram_username/",
                    )
                  }
                >
                  📸 Order via Instagram
                </button>
              </OrderButtons>
            </CartContainer>
          </>
        )}
      </Container>
    </Main>
  );
};

export default OrderConfirmation;

const ConfirmHeading = styled.div`
  color: #6f6f6f;
`;
const Height = styled.div`
  height: 3rem;
`;
const CartContainer = styled.div`
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 8rem;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  z-index: 49;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -2px 8px 0px !important;
  border-radius: 29px 29px 0 0;
  background: rgba(156, 122, 122, 0.1) !important;

  backdrop-filter: blur(8px) !important;
  background: ${Colors.pureWhite};
`;
const Back = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  box-shadow: ${Shadows.soft};
  width: 30px;
  border: 1px solid #e5e4e4;
  svg {
    font-size: 18px;
  }
`;
const Main = styled.div`
  /* background: #000000; */
  padding-top: 1rem;
`;
const Container = styled.div`
  background: white;
  position: fixed;

  overflow-y: auto;

  height: 100%;

  border-radius: 30px 30px 0 0;

  max-width: 600px;
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
