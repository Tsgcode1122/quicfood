import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  // Get wishlist items from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  return (
    <Container>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ProductList>
          {wishlist.map((item) => (
            <ProductItem key={item.id}>
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
            </ProductItem>
          ))}
        </ProductList>
      )}
    </Container>
  );
};

export default WishlistPage;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductItem = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
