import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../Product/Products"; // Make sure the path is correct
import { FiShoppingCart } from "react-icons/fi";
import { MdArrowBack } from "react-icons/md";
import { CartContext } from "../Context/CartContext";
import QuantityControl from "../ReuseComponents/QuantityControl";
import { Button, message } from "antd"; // Ant Design Button for Add to Cart
import styled from "styled-components";
import CartItemCount from "../ReuseComponents/CartItemCount";
import { Colors, Shadows } from "../Colors/ColorComponent";
import RelatedProducts from "../Component/RelatedProducts";
import WishlistButton from "../ReuseComponents/WishlistButton";

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1); // Track quantity

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });

    messageApi.success(`${product.name} (x${quantity}) added to cart!`);
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <>
      {contextHolder}
      <Container>
        <Top>
          <Back onClick={back}>
            <MdArrowBack />
          </Back>
          <Name>{product.name}</Name>
          <CartIconInner onClick={() => navigate("/cartpage")}>
            <FiShoppingCart />
            <ItemCount>
              <CartItemCount />
            </ItemCount>
          </CartIconInner>
        </Top>
        <Height />
        {/* <div style={{ height: "1rem" }}></div> */}
        <OtherPart>
          <img src={product.img} alt={product.name} />
          <PriceAndQuantity>
            <p>
              Price: <span> ${product.price.toFixed(2)}</span>
            </p>
            <QuantityControl onQuantityChange={setQuantity} />
          </PriceAndQuantity>
          <DownButton>
            <WishlistButton product={product} showTextButton={true} />

            <CustomButton onClick={handleAddToCart} type="primary">
              Add to Cart
            </CustomButton>
          </DownButton>
          <h5>Product Details</h5>
          <Description>{product.description}</Description>
          <RelatedProducts
            currentProductId={productId}
            category={product.category}
          />
        </OtherPart>
      </Container>
    </>
  );
};

export default SingleProduct;
const DownButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem 0.5rem 0.5rem;
`;
const CustomButton = styled.div`
  cursor: pointer;
  background: ${Colors.primaryRed};
  border-radius: 10px;
  padding: 5px 10px;
`;
const CartIconInner = styled.div`
  position: relative;
  svg {
    font-size: 22px;
  }
`;
const ItemCount = styled.span`
  position: absolute;
  top: -14px;
  right: -14px;
  background-color: red;
  color: white;
  min-width: 25px;
  min-height: 25px;

  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 50%;

  font-size: 12px;
`;
const Top = styled.div`
  width: 100%;

  position: fixed;
  padding: 1rem 1.2rem 0 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Height = styled.div`
  height: 3rem;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;

  padding: 10px;
  box-shadow:
    rgba(200, 200, 200, 0.25) 0px 30px 60px -12px inset,
    rgba(254, 254, 254, 0.3) 0px 18px 36px -18px inset;
  gap: 10px;
`;
const Back = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  box-shadow: ${Shadows.soft};
  width: 30px;
  border: 1px solid #e5e4e4;
  svg {
    font-size: 18px;
  }
`;
const OtherPart = styled.div`
  position: fixed;
  padding-bottom: 5rem;
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
  h5 {
    padding: 1rem 0.5rem;
  }
`;
const PriceAndQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  p {
    font-size: 16px;
    span {
      font-weight: 700;
    }
  }
`;
const Container = styled.div`
  img {
    max-width: 100%;
  }
`;
const Description = styled.p`
  padding: 0 0.5rem 0.5rem 0.5rem;
  font-size: 14px;
`;
