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
const BestSelling = () => {
  const newProductIds = products.slice(0, 4).map((product) => product.id);

  const filteredProducts = products.filter(
    (product) => !newProductIds.includes(product.id),
  );

  const shuffledProducts = filteredProducts.sort(() => 0.5 - Math.random());
  const bestSellingProducts = shuffledProducts.slice(0, 6);

  return (
    <>
      <Heading>
        <h4>Best Selling</h4>

        <CtaButton to="/storepage">
          View All
          <ArrowDownOutlined />
        </CtaButton>
      </Heading>
      <ProductGrid>
        {bestSellingProducts.length > 0 ? (
          bestSellingProducts.map((product) => (
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
          <NoResults>No best-selling products found.</NoResults>
        )}
      </ProductGrid>
    </>
  );
};

export default BestSelling;
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
  padding: 1rem;
  justify-content: space-between;
  h4 {
    color: ${Colors.ashBlack};
    font-weight: 600;
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

const ImageContainer = styled.div``;

const NoResults = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${Colors.gray};
`;
