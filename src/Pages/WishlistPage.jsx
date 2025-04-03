import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import styled from "styled-components";
import { Button, message } from "antd";
import { Colors, Shadows } from "../Colors/ColorComponent";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useContext(CartContext);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    message.success("Removed from wishlist");
  };
  const clearWishlist = () => {
    localStorage.removeItem("wishlist");
    setWishlist([]);
  };
  // Handle adding product to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    message.success(`${product.name} added to cart`);
  };

  return (
    <Container>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ProductList>
          {wishlist.map((item) => (
            <ProductItem key={item.id}>
              <Link to={`/products/${item.id}`}>
                <img src={item.img} alt={item.name} />
              </Link>
              <div className="details">
                <Link to={`/products/${item.id}`}>
                  <h3>{item.name}</h3>
                </Link>
                <p>${item.price.toFixed(2)}</p>
                <Button type="primary" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
                <Button danger onClick={() => removeFromWishlist(item.id)}>
                  Remove
                </Button>
              </div>
            </ProductItem>
          ))}
        </ProductList>
      )}
      {wishlist.length === 0 ? (
        ""
      ) : (
        <Button
          danger
          onClick={() => {
            clearWishlist();
            message.success("Wishlist cleared!");
          }}
          style={{ marginTop: "30px" }}
        >
          Clear Wishlist
        </Button>
      )}
    </Container>
  );
};

export default WishlistPage;

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 25px;
  padding: 14px;

  background-color: ${Colors.pureWhite};

  position: relative;
  @media screen and (max-width: 499px) {
    gap: 15px;
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }
  .link {
    text-decoration: none !important;
    color: none !important;
  }
`;

const ProductItem = styled.div`
  background: ${Colors.pureWhite};
  box-shadow: ${Shadows.soft};
  border-radius: 8px;
  padding: 5px;
  transition: transform 0.3s ease-in-out;
  text-align: center;

  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0;
    cursor: pointer;
    color: #1890ff;
    text-decoration: none;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    margin: 5px 0;
  }

  button {
    margin-top: 10px;
    width: 100%;
  }
`;
const ProductGrid = styled.div``;

const ProductCard = styled.div`
  img {
    width: 100%;
    height: auto;

    border-radius: 8px;
    margin-bottom: 10px;
    &:hover {
      transform: scale(1.05);
      box-shadow: ${Shadows.medium};
    }
  }
  a {
    text-decoration: none;
    color: ${Colors.black};
  }

  h5 {
    color: ${Colors.black};
    font-size: 14px;
    font-weight: 300;
    margin: 0;
  }

  p {
    font-weight: bold;
    color: ${Colors.black};
  }
  span {
    display: flex;
    justify-content: space-between;
  }
`;
