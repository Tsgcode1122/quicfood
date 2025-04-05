import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../Context/CartContext";
import products from "../Product/Products";

import CartButton from "../ReuseComponents/CartButton";
import { Colors, Shadows } from "../Colors/ColorComponent";
import WishlistButton from "../ReuseComponents/WishlistButton";

const RelatedProducts = ({ category, currentProductId }) => {
  // Filter products by category and exclude the current product
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === category && product.id !== currentProductId,
    )
    .slice(0, 4);

  return (
    <Container>
      <h3>Related Products</h3>
      <ProductGrid>
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <ProductCard key={product.id}>
              <Wishlist>
                <WishlistButton product={product} />
              </Wishlist>
              <Link to={`/products/${product.id}`} className="link">
                <ImageContainer>
                  <img src={product.img} alt={product.name} />
                </ImageContainer>
                <h5>{product.name}</h5>
              </Link>
              <span>
                <p>${product.price.toFixed(2)}</p>
                <CartButton product={product} />
              </span>
            </ProductCard>
          ))
        ) : (
          <NoResults>No related products found.</NoResults>
        )}
      </ProductGrid>
    </Container>
  );
};

export default RelatedProducts;
const Container = styled.div`
  padding: 1rem 0 5rem 10px;
  p {
    padding: 0 5px;
    font-weight: 700;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
const Wishlist = styled.div`
  position: absolute;
  top: 0%;
  right: 0px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 240px;
  align-items: center;
  height: 100%;
`;
const ProductGrid = styled.div`
  display: flex;
  gap: 15px;

  background-color: ${Colors.pureWhite};
  padding-bottom: 2rem;
  position: relative;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 499px) {
  }
  .link {
    text-decoration: none !important;
    color: inherit !important;
  }
`;

const NoResults = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
  margin-top: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductCard = styled.div`
  position: relative;
  background: ${Colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  border-radius: 8px;
  min-width: 160px;
  max-width: 161px;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;

    height: 130px;

    border-radius: 8px;
    margin-bottom: 10px;
    &:hover {
      transform: scale(0.99);
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
    font-weight: 400;
    margin: 0;
    padding: 0 5px;
  }

  p {
    font-weight: bolder;
    color: ${Colors.black};
  }
  span {
    display: flex;
    /* padding: 1px 0px 5px 5px; */
    justify-content: space-between;
    align-items: center;
  }
`;
