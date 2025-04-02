import React, { useState, useEffect } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { message } from "antd";

const WishlistButton = ({ product }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Check if the product is already in the wishlist (from localStorage)
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);
    setIsInWishlist(isProductInWishlist);
  }, [product.id]);

  // Add or remove product from wishlist
  const toggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isInWishlist) {
      // Remove from wishlist
      wishlist = wishlist.filter((item) => item.id !== product.id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsInWishlist(false);
      message.success("Removed from wishlist");
    } else {
      // Add to wishlist
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsInWishlist(true);
      message.success("Added to wishlist");
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      style={{ background: "transparent", border: "none" }}
    >
      {isInWishlist ? (
        <HeartFilled style={{ color: "red", fontSize: "24px" }} />
      ) : (
        <HeartOutlined style={{ fontSize: "24px" }} />
      )}
    </button>
  );
};

export default WishlistButton;
