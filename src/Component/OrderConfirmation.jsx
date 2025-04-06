import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Colors, Shadows } from "../Colors/ColorComponent";
import { MdClear, MdArrowBack } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const OrderConfirmation = ({ isOpen, onClose }) => {
  const { cart, clearCart } = useContext(CartContext);

  if (!isOpen) return null;

  const generateOrderMessage = () => {
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

    return encodeURIComponent(message);
  };

  const placeOrder = (contactLink) => {
    if (cart.length === 0) return;

    if (window.innerWidth <= 500) {
      // Redirect in the same tab for small screens
      window.location.href = contactLink;
    } else {
      // Open in new tab for larger screens
      window.open(contactLink, "_blank");
    }

    onClose();
    clearCart(); // close modal after placing order
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContainer>
        <Top>
          <ConfirmHeading>
            <h3>Select Order Method:</h3>
          </ConfirmHeading>
          <Back onClick={onClose}>
            <MdClear />
          </Back>
        </Top>
        <CartContainer>
          <OrderButtons>
            <button
              onClick={() =>
                placeOrder(
                  `https://wa.me/+2349078803521?text=${generateOrderMessage()}`,
                )
              }
            >
              <FaWhatsapp /> Order via WhatsApp (US) <p></p>
            </button>
            <button
              onClick={() =>
                placeOrder(
                  `https://wa.me/+2349078803521?text=${generateOrderMessage()}`,
                )
              }
            >
              <FaWhatsapp />
              Order via WhatsApp (Nigeria)
              <p></p>
            </button>
            <button
              onClick={() =>
                placeOrder(`https://www.instagram.com/your_instagram_username/`)
              }
            >
              <FaInstagram /> Order via Instagram <p></p>
            </button>
          </OrderButtons>
        </CartContainer>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default OrderConfirmation;

const ConfirmHeading = styled.div`
  color: #000000;
  font-weight: 500;
`;

const CartContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

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

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  bottom: 0 !important;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999999999999 !important;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ModalContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
  border-radius: 20px 20px 0 0;
  padding: 1rem;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.3s ease-out;
  z-index: 999 !important;
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
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
    display: flex;
    align-items: center;
    justify-content: space-between;
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
