import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Colors, Shadows } from "../Colors/ColorComponent";
import CartButton from "../ReuseComponents/CartButton";
import WishlistButton from "../ReuseComponents/WishlistButton";
import products from "../Product/Products";
import ProductCard from "../ReuseStyle/ProductCard";
import ProductGrid from "../ReuseStyle/ProductGrid";

const NewItems = () => {
  const newProducts = products.slice(0, 4);

  return (
    <>
      <Heading>
        <h3>Newest </h3>

        <CtaButton to="/storepage">
          View All
          <ArrowDownOutlined />
        </CtaButton>
      </Heading>
      <ProductGrid>
        {newProducts.length > 0 ? (
          newProducts.map((product) => (
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
          <NoResults>No new products found.</NoResults>
        )}
      </ProductGrid>
    </>
  );
};

export default NewItems;
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
const Heading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
  padding: 0 1rem;
  margin-top: 2rem;
  justify-content: space-between;
  h3 {
    /* color: ${Colors.ashBlack}; */
    /* font-wei-ght: 600; */
    font-size: 19px;
    white-space: nowrap;
  }
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: #aaaaaa;
`;
const CtaButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${Colors.blue};
  gap: 3px;
  svg {
    transform: rotate(-135deg);
    color: ${Colors.blue};
  }
`;

// Styled Components

const ImageContainer = styled.div`
  @media screen and (max-width: 320px) {
    /* min-height: 170px; */
  }
  @media (min-width: 321px) and (max-width: 499px) {
    /* min-height: 220px; */
  }
`;

const NoResults = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${Colors.gray};
`;
