import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";

const WishlistButton = ({ product, showTextButton = false }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsInWishlist(wishlist.some((item) => item.id === product.id));
  }, [product.id]);

  const showToast = (message) => {
    toast.custom((t) => (
      <ToastContent visible={t.visible}>
        <img src={product.img} alt={product.name} />
        <span>{message}</span>
      </ToastContent>
    ));
  };
  const ToastContent = styled.div`
    display: flex;
    align-items: center;
    background: ${Colors.black};
    color: ${Colors.pureWhite};
    padding: 10px 14px;
    border-radius: 20px;
    gap: 10px;
    box-shadow: 0 5px 15px rgba(241, 241, 241, 0.2);
    img {
      max-width: 100%;
      width: 30px;
      height: 30px;
      margin: 0;
      border-radius: 5px;
    }
  `;

  const addToWishlist = () => {
    try {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      if (isInWishlist) {
        wishlist = wishlist.filter((item) => item.id !== product.id);
        setIsInWishlist(false);
        showToast("Removed from wishlist");
      } else {
        wishlist.push(product);
        setIsInWishlist(true);
        showToast("Added to wishlist");
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Wishlist update error:", error);
      toast.error("Failed to update wishlist.");
    }
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "transparent",
            boxShadow: "none",
            padding: 0,
          },
        }}
      />
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
  /* box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; */
  /* backdrop-filter: blur(8px) !important; */
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
