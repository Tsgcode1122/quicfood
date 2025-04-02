import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, message } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const grandTotal = subtotal; // You can add tax or shipping fees if needed

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <QuantityControl>
                  <Button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </QuantityControl>
                <Button danger onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            </CartItem>
          ))}
          <Summary>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
          </Summary>
          <Button type="primary" onClick={() => navigate("/order")}>
            Place Order
          </Button>
          <Button danger onClick={clearCart} style={{ marginTop: "10px" }}>
            Clear Cart
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
  }

  .details {
    flex-grow: 1;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    min-width: 20px;
    text-align: center;
  }
`;

const Summary = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
`;
