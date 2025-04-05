import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { message } from "antd";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Colors } from "../Colors/ColorComponent";

const WishlistButton = ({ product, showTextButton = false }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // Check if the product is already in the wishlist (from localStorage)
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsInWishlist(wishlist.some((item) => item.id === product.id));
  }, [product.id]);

  // Add product to wishlist
  const addToWishlist = () => {
    try {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      if (isInWishlist) {
        // Remove from wishlist
        wishlist = wishlist.filter((item) => item.id !== product.id);
        setIsInWishlist(false);
        messageApi.success("Removed from wishlist");
      } else {
        // Add to wishlist
        wishlist.push(product);
        setIsInWishlist(true);
        messageApi.success("Added to wishlist");
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Wishlist update error:", error);
      messageApi.error("Failed to update wishlist.");
    }
  };

  return (
    <>
      {contextHolder} {/* Required for messages to work */}
      {showTextButton ? (
        <WishlistTextButton onClick={addToWishlist} disabled={isInWishlist}>
          {isInWishlist ? <span>Added to Wishlist</span> : "Add to Wishlist"}
        </WishlistTextButton>
      ) : (
        <CustomButton onClick={addToWishlist}>
          {isInWishlist ? (
            <FaHeart style={{ color: "#EE4C59", fontSize: "18px" }} />
          ) : (
            <CiHeart style={{ color: "black", fontSize: "20px" }} />
          )}
        </CustomButton>
      )}
    </>
  );
};

export default WishlistButton;

const CustomButton = styled.button`
  background: ${Colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  backdrop-filter: blur(8px) !important;
  cursor: pointer;
  padding: 4px;
  border-radius: 0 5px 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  svg {
    font-size: 14px;
  }
`;

const WishlistTextButton = styled.button`
  background: #e0e0e080;
  color: #000000;
  border: none;
  padding: 8px 16px;
  border-radius: 0 10px 0;
  cursor: pointer;
  font-size: 14px;
  &:disabled {
    background: #e5e5e5de;
    cursor: not-allowed;
  }
  span {
    color: #00000092;
  }
`;
