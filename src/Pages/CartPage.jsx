import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { message, Button } from "antd";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { MdClear, MdArrowBack } from "react-icons/md";
import { Colors, Shadows } from "../Colors/ColorComponent";
import { IoChevronBack } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineDelete } from "react-icons/ai";

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
    <Main>
      <Container>
        <Top>
          <Back onClick={() => navigate(-1)}>
            <MdArrowBack />
          </Back>
          <div>Order</div>
          {cart.length === 0 ? (
            <div></div>
          ) : (
            <Cancel1 danger onClick={clearCart}>
              <AiOutlineDelete />
            </Cancel1>
          )}
        </Top>
        <Height />
        <Insider isEmpty={cart.length === 0}>
          {cart.length === 0 ? (
            <Empty>
              {" "}
              <GiShoppingCart />
              Your Cart is empty{" "}
              <ShopNow to="/storepage" style={{ color: "red" }}>
                Shop Now
              </ShopNow>
            </Empty>
          ) : (
            <>
              <CartContainer>
                {cart.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <Cancel onClick={() => removeFromCart(item.id)}>
                      <MdClear />
                    </Cancel>
                    <div className="details">
                      <h5>{item.name}</h5>
                      <p>${item.price.toFixed(2)}</p>
                      <QuantityControl>
                        <CustomButton
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </CustomButton>
                        <span>{item.quantity}</span>
                        <CustomButton
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </CustomButton>
                      </QuantityControl>
                    </div>
                  </CartItem>
                ))}
              </CartContainer>
              <Summary>
                <Center>
                  <Subtotal>
                    Subtotal: <span>${subtotal.toFixed(2)}</span>
                  </Subtotal>
                  <Total>
                    Grand Total: <span>${grandTotal.toFixed(2)}</span>
                  </Total>
                </Center>
              </Summary>
              <Height2 />
              <End>
                <PlaceOrder onClick={() => navigate("/order")}>
                  Place Order <span> ${grandTotal.toFixed(2)}</span>
                </PlaceOrder>
              </End>
            </>
          )}{" "}
        </Insider>
      </Container>
    </Main>
  );
};

export default CartPage;
const Insider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isEmpty }) => (isEmpty ? "center" : "flex-start")};
  align-items: ${({ isEmpty }) => (isEmpty ? "center" : "stretch")};

  height: calc(100vh - 3.7rem); /* subtract Top bar */
`;
const Empty = styled.div`
  font-size: 18px;
  color: #666;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100vw;
  svg {
    font-size: 89px;
  }
`;
const Cancel1 = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  box-shadow: ${Shadows.soft};
  width: 30px;
  border: 1px solid #e5e4e4;
  svg {
    color: ${Colors.primaryRed};
  }
`;
const Cancel = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  /* box-shadow: ${Shadows.soft}; */
  width: 30px;
  /* border: 1px solid #e5e4e4; */
  svg {
    color: #810707c7;
  }
  position: absolute;
  right: 20px;
  margin-top: -70px;
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

const Height = styled.div`
  height: 3.7rem;
`;
const Main = styled.div`
  padding-top: 1rem;
`;
const Container = styled.div`
  /* background: #000000; */
  position: fixed;

  overflow-y: auto;

  height: 100%;

  border-radius: 30px 30px 0 0;

  max-width: 600px;
`;
const CartContainer = styled.div`
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CartItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  /* margin-bottom: 15px; */
  border: 0.2px solid #bababa80;
  padding: 2px;
  border-radius: 10px;
  gap: 10px;
  img {
    width: 120px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
  }
  h5 {
    padding-bottom: 10px;
    font-weight: 500;
  }
  p {
    padding-bottom: 5px;
    font-weight: 600;
  }
`;

const QuantityControl = styled.div`
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
const Summary = styled.div`
  margin-top: 20px;

  font-size: 16px;

  p {
    font-weight: 600;
    font-size: 16px;
    padding-bottom: 5px;
  }
`;
const Center = styled.div`
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #e0e0e080;
  background-color: white;
  margin: 1rem;
`;
const Subtotal = styled.div`
  border-bottom: 1px solid #e0e0e080;
  color: #7b7b7b80;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;
const Total = styled.div`
  display: flex;

  justify-content: space-between;
  padding-top: 5px;
  font-weight: 500;
`;
const PlaceOrder = styled.div`
  border-radius: 40px;
  display: flex;
  /* width: 100%; */
  background: red;
  padding: 1rem;
  margin: 0 10px 10px 10px;
  color: #dedede;
  text-align: center;
  align-items: center;
  justify-content: center;

  width: 100%;
  span {
    font-weight: 700;
    padding-left: 10px;
  }
`;
const End = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1) !important;

  backdrop-filter: blur(8px) !important;
  color: #dedede;

  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ShopNow = styled(Link)``;
const Height2 = styled.div`
  height: 8rem;
`;
