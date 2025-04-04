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
      <p>Related Products</p>
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
  p {
    padding: 1rem 0.5rem;
    font-weight: 700;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 25px;
  padding: 1rem;
  background-color: ${Colors.pureWhite};
  padding-bottom: 5rem;
  position: relative;
  @media screen and (max-width: 499px) {
    gap: 15px;
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }
  .link {
    text-decoration: none !important;
    color: inherit !important;
  }
`;

const ProductCard = styled.div`
  background: ${Colors.pureWhite};
  box-shadow: ${Shadows.soft};
  border-radius: 8px;
  position: relative;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: 130px;
    border-radius: 8px;
    margin-bottom: 10px;
    &:hover {
      transform: scale(0.97);
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
    padding: 0px 5px;
  }

  p {
    font-weight: bold;
    color: ${Colors.black};
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 0px 5px 5px;
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
