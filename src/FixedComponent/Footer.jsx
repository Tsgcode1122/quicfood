import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { FiShoppingCart } from "react-icons/fi";
import CartItemCount from "../ReuseComponents/CartItemCount";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <StyledFooter>
      <StyledLink to="/" active={pathname === "/"}>
        <IconWrapper>
          <HomeOutlined />
          <IconName>Home</IconName>
        </IconWrapper>
      </StyledLink>

      <StyledLink to="/storepage" active={pathname === "/storepage"}>
        <IconWrapper>
          <ShoppingOutlined />
          <IconName>Store</IconName>
        </IconWrapper>
      </StyledLink>

      <StyledLink to="/cartpage" active={pathname === "/cartpage"}>
        <IconWrapper>
          <ItemCount>
            <CartItemCount />
          </ItemCount>
          <FiShoppingCart />
          <IconName>Cart</IconName>
        </IconWrapper>
      </StyledLink>

      <StyledLink to="/wishlist" active={pathname === "/wishlist"}>
        <IconWrapper>
          <HeartOutlined />
          <IconName>Wishlist</IconName>
        </IconWrapper>
      </StyledLink>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  overflow-y: hidden;
  z-index: 20 !important;
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid #b5b5b560;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? "red" : "black")};

  svg {
    color: ${({ active }) => (active ? "red" : "black")};
    font-size: 22px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CartIconInner = styled.div`
  position: relative;
`;

const ItemCount = styled.span`
  position: absolute;
  top: -4px;
  right: -8px;
  background-color: red;
  color: white;

  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 5px;
  min-width: 20px;
  padding: 2px;
  font-size: 10px;
`;

const IconName = styled.span`
  font-size: 12px;
  margin-top: 3px;
`;

export default Footer;
