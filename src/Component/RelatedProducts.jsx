import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../Context/CartContext";
import products from "../Product/Products";
import CartButton from "../ReuseComponents/CartButton";
import { Colors, Shadows } from "../Colors/ColorComponent";

const RelatedProducts = ({ category, currentProductId }) => {
  // Filter products by category and exclude the current product
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === category && product.id !== currentProductId,
    )
    .slice(0, 4);

  return (
    <ProductGrid>
      {relatedProducts.length > 0 ? (
        relatedProducts.map((product) => (
          <ProductCard key={product.id}>
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
  );
};

export default RelatedProducts;

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

const ProductCard = styled.div`
  background: ${Colors.pureWhite};
  box-shadow: ${Shadows.soft};
  border-radius: 8px;
  padding: 5px;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: 130px;
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
    align-items: center;
  }
`;

const NoResults = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
