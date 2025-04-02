import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../Product/Products"; // Make sure the path is correct
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CartContext } from "../Context/CartContext";
import QuantityControl from "../ReuseComponents/QuantityControl";
import { Button, message } from "antd"; // Ant Design Button for Add to Cart
import styled from "styled-components";
import CartItemCount from "../ReuseComponents/CartItemCount";
import { Colors } from "../Colors/ColorComponent";
import RelatedProducts from "../Component/RelatedProducts";
import WishlistButton from "../ReuseComponents/WishlistButton";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1); // Track quantity

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // ✅ Adds selected quantity
    message.success(`${product.name} (x${quantity}) added to cart!`);
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <Container>
      <div className="dddiv">
        <div className="namewishlist">
          <span onClick={back}>
            <ArrowLeftOutlined />
          </span>
          <div className="wishlist-name">
            <article>{product.name}</article>
          </div>
          <div>
            <CartItemCount />
          </div>
        </div>
      </div>
      {/* <div style={{ height: "1rem" }}></div> */}
      <OtherPart>
        <WishlistButton product={product} />
        <img src={product.img} alt={product.name} />
        <PriceAndQuantity>
          <p>Price: ${product.price.toFixed(2)}</p>
          <QuantityControl onQuantityChange={setQuantity} />
        </PriceAndQuantity>

        <Button onClick={handleAddToCart} type="primary">
          Add to Cart
        </Button>

        <p>{product.description}</p>
        <RelatedProducts
          currentProductId={productId}
          category={product.category}
        />
      </OtherPart>
    </Container>
  );
};

export default SingleProduct;
const OtherPart = styled.div`
  position: fixed;
  background-color: ${Colors.pureWhite};
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(0, 0, 0, 0.35) 0px -2px 6px 0px inset;

  border-radius: 35px 35px 0 0;
  margin-top: 0.95rem;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  overflow-y: auto;
  img {
    margin-bottom: 0;
  }
  .tsg {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
  }
  .icon-container {
    position: absolute;
    top: 2%;
    right: 15px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 240px;
    align-items: center;
    height: 100%;
  }
`;
const PriceAndQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;
const Container = styled.div`
  img {
    max-width: 100%;
  }
  .dddiv {
    width: 100%;
    top: 0;
    position: fixed;
  }
  .namewishlist {
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-between;
    padding: 5px 15px 25px 15px;
    top: 0;
    margin: 0;

    .wishlist-name {
      display: flex;
      align-items: center;
      border-radius: 10px;

      padding: 10px;
      box-shadow:
        rgba(200, 200, 200, 0.25) 0px 30px 60px -12px inset,
        rgba(254, 254, 254, 0.3) 0px 18px 36px -18px inset;
      gap: 10px;
    }
    article {
      font-size: 16px;
      @media screen and (max-width: 320px) {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;
