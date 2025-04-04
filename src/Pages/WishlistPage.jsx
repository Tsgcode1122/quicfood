import React, { useState, useEffect, useContext } from "react";

import { CartContext } from "../Context/CartContext";
import styled from "styled-components";
import { Spin, message } from "antd";

import { Link, useNavigate } from "react-router-dom";

import { Colors, Shadows } from "../Colors/ColorComponent";
import { MdClear, MdArrowBack } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import CartButton from "../ReuseComponents/CartButton";
const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // Load wishlist from localStorage
  useEffect(() => {
    setLoading(true);
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
    setLoading(false);
  }, []);

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    message.success("Removed from wishlist");
  };
  const clearWishlist = () => {
    localStorage.removeItem("wishlist");
    setWishlist([]);
    messageApi.success(`Wishlist cleared `);
  };

  return (
    <>
      {contextHolder}
      <Main>
        <Container>
          <Top>
            <Back onClick={() => navigate(-1)}>
              <MdArrowBack />
            </Back>
            <div>Wish list</div>
            {wishlist.length === 0 ? (
              ""
            ) : (
              <Cancel1 danger onClick={clearWishlist}>
                <AiOutlineDelete />
              </Cancel1>
            )}
          </Top>
          <Height />
          <Insider isEmpty={!loading && wishlist.length === 0}>
            {loading ? (
              <SpinnerContainer>
                <Spin size="small" />
              </SpinnerContainer>
            ) : wishlist.length === 0 ? (
              <Empty>Your wishlist is empty.</Empty>
            ) : (
              <ProductList>
                {wishlist.map((item) => (
                  <ProductCard key={item.id}>
                    <Cancel onClick={() => removeFromWishlist(item.id)}>
                      <MdClear />
                    </Cancel>
                    <Link to={`/products/${item.id}`}>
                      <ImageContainer>
                        <img src={item.img} alt={item.name} />
                      </ImageContainer>
                      <h5>{item.name}</h5>
                    </Link>
                    <div className="details">
                      <span>
                        <p>${item.price.toFixed(2)}</p>

                        <CartButton product={item} />
                      </span>
                    </div>
                  </ProductCard>
                ))}
              </ProductList>
            )}
          </Insider>
        </Container>
      </Main>
    </>
  );
};

export default WishlistPage;
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;
const Cancel1 = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  box-shadow: ${Shadows.soft};
  width: 30px;
  border: 1px solid #e5e4e4;
  svg {
    color: ${Colors.primaryRed};
  }
`;
const Insider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isEmpty }) => (isEmpty ? "center" : "flex-start")};
  align-items: ${({ isEmpty }) => (isEmpty ? "center" : "stretch")};
  height: calc(100vh - 3.7rem); /* subtract Top bar */
`;

const Empty = styled.div`
  font-size: 18px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
`;

const Cancel = styled.div`
  position: absolute;
  top: 0%;
  right: 0px;
  z-index: 5;
  display: flex;
  background: #ffffff;
  flex-direction: column;
  height: 20px;
  width: 20px;
  border-radius: 5px;
  align-items: center;

  svg {
    color: #810707c7;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  z-index: 999;
  box-shadow: rgba(114, 114, 114, 0.35) 0px -2px 8px 0px;
  border-radius: 29px 29px 0 0;
  background: rgba(255, 255, 255, 0.1) !important;

  backdrop-filter: blur(8px) !important;
  background: ${Colors.pureWhite};
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

const Height = styled.div`
  height: 3.7rem;
`;
const Main = styled.div`
  /* background: #000000; */
  padding-top: 1rem;
`;
const Container = styled.div`
  background: white;
  position: fixed;

  overflow-y: auto;

  height: 100%;

  border-radius: 30px 30px 0 0;
`;
// Styled Components

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 25px;
  padding: 14px;
  width: 100vw;
  background-color: ${Colors.pureWhite};
  padding-bottom: 6rem;
  position: relative;
  @media screen and (max-width: 499px) {
    gap: 15px;
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }
  .link {
    text-decoration: none !important;
    color: none !important;
  }
`;

const ImageContainer = styled.div`
  @media screen and (max-width: 320px) {
    /* min-height: 170px; */
  }
  @media (min-width: 321px) and (max-width: 499px) {
    /* min-height: 220px; */
  }
`;

const ProductCard = styled.div`
  position: relative;
  background: ${Colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  border-radius: 8px;

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
    font-weight: 300;
    margin: 0;
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
