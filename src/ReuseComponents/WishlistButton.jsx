import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { message } from "antd";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";

const WishlistButton = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // Check if the product is already in the wishlist (from localStorage)
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsInWishlist(wishlist.some((item) => item.id === product.id));
  }, [product.id]);

  // Add or remove product from wishlist
  const toggleWishlist = () => {
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
      <CustomButton onClick={toggleWishlist}>
        {isInWishlist ? (
          <FaHeart style={{ color: "red", fontSize: "18px" }} />
        ) : (
          <CiHeart style={{ color: "black", fontSize: "20px" }} />
        )}
      </CustomButton>
    </>
  );
};

export default WishlistButton;

const CustomButton = styled.div`
  background: #ffffff;
  cursor: pointer;
  height: 20px;
  width: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
