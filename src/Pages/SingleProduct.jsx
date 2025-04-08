import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../Product/Products"; // Make sure the path is correct
import toast, { Toaster } from "react-hot-toast";
import { MdArrowBack } from "react-icons/md";
import { CartContext } from "../Context/CartContext";
import QuantityControl from "../ReuseComponents/QuantityControl";

import styled from "styled-components";
import CartItemCount from "../ReuseComponents/CartItemCount";
import { Colors, Shadows } from "../Colors/ColorComponent";
import RelatedProducts from "../Component/RelatedProducts";
import WishlistButton from "../ReuseComponents/WishlistButton";

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1); // Track quantity

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.custom(
      (t) => (
        <ToastContent>
          <img src={product.img} alt={product.name} />
          <span>
            {product.name} x{quantity} added to cart!
          </span>
        </ToastContent>
      ),
      {
        duration: 3000, // ⏱ Custom duration in ms
      },
    );
  };

  const back = () => {
    navigate(-1);
  };
  const generateSingleProductMessage = () => {
    const message =
      `Hello, I'm interested in buying this product:\n\n` +
      `Product: ${product.name}\n` +
      `Price: $${product.price.toFixed(2)}\n` +
      `Quantity: ${quantity}\n\n` +
      `Total: $${(product.price * quantity).toFixed(2)}`;

    return encodeURIComponent(message);
  };

  const handleBuyNow = () => {
    const phoneNumber = "2349078803521";
    const message = generateSingleProductMessage();
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    if (window.innerWidth <= 500) {
      // Redirect in the same tab for small screens
      window.location.href = url;
    } else {
      // Open in new tab for larger screens
      window.open(url, "_blank");
    }
  };
  const ToastContent = styled.div`
    display: flex;
    align-items: center;
    background: ${Colors.black};
    color: ${Colors.pureWhite};
    padding: 10px 14px;
    border-radius: 20px;
    gap: 10px;
    box-shadow: 0 5px 15px rgba(241, 241, 241, 0.2);
    img {
      max-width: 100%;
      width: 30px;
      height: 30px;
      margin: 0;
      border-radius: 5px;
    }
  `;
  return (
    <>
      <Container>
        <Top>
          <Back onClick={back}>
            <MdArrowBack />
          </Back>
          <Name>{product.name}</Name>
          <>
            <WishlistButton product={product} />
          </>
        </Top>
        <Height />
        {/* <div style={{ height: "1rem" }}></div> */}
        <OtherPart>
          <img src={product.img} alt={product.name} />
          <Content>
            <PriceAndQuantity>
              <p>
                Price: <span> ${product.price.toFixed(2)}</span>
              </p>
              <QuantityControl onQuantityChange={setQuantity} />
            </PriceAndQuantity>
            <DownButton>
              <BuyNowButton onClick={handleBuyNow}>Buy Now</BuyNowButton>

              <CustomButton onClick={handleAddToCart} type="primary">
                Add to Cart
              </CustomButton>
            </DownButton>

            <Description>
              <h5>Product Details</h5>
              <p>{product.description}</p>
            </Description>
          </Content>
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
`;
const CustomButton = styled.div`
  cursor: pointer;
  background: ${Colors.primaryRed};
  border-radius: 10px;
  color: white;
  padding: 5px 10px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BuyNowButton = styled.div`
  cursor: pointer;
  background: #ececec;
  border-radius: 10px;
  padding: 5px 10px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  width: 100%;

  position: fixed;
  padding: 1rem 1.2rem 0 0.6rem;
  border-bottom: 1px solid #b5b5b560;
  backdrop-filter: blur(8px) !important;
  background: ${Colors.pureWhite};
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
  padding-bottom: 5rem;
  background-color: ${Colors.pureWhite};

  left: 0;
  width: 100%;
  height: 100%;

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

  p {
    font-size: 16px;
    span {
      font-weight: 700;
    }
  }
`;
const Content = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Container = styled.div`
  img {
    max-width: 100%;
  }
`;
const Description = styled.p`
  padding-top: 1rem;
  p {
    font-size: 14px;
  }

  h5 {
    font-size: 16px;
  }
`;
