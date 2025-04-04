import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Colors, Shadows } from "../Colors/ColorComponent";
import CartButton from "../ReuseComponents/CartButton";
import WishlistButton from "../ReuseComponents/WishlistButton";
import products from "../Product/Products";

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
        <Line />
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
  h4 {
    color: ${Colors.ashBlack};
    font-weight: 300;
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
    transform: rotate(-45deg);
    color: ${Colors.blue};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 25px;
  padding: 14px;
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

const ImageContainer = styled.div``;

const ProductCard = styled.div`
  background: ${Colors.pureWhite};
  box-shadow: ${Shadows.soft};
  border-radius: 8px;

  transition: transform 0.3s ease-in-out;
  position: relative;
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

  h5 {
    color: ${Colors.black};
    font-size: 14px;
    font-weight: 300;
    padding: 0 5px;
  }

  p {
    font-weight: bold;
    color: ${Colors.black};
  }

  span {
    display: flex;
    padding: 1px 0px 5px 5px;
    justify-content: space-between;
    align-items: center;
  }
`;

const NoResults = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${Colors.gray};
`;
