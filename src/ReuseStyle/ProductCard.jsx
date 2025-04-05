// src/components/styles/ProductCard.js
import styled from "styled-components";
import { Colors, Shadows } from "../Colors/ColorComponent";

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
    font-weight: 400;
    margin: 0;
    padding: 0 5px;
  }

  p {
    font-weight: bolder;
    color: ${Colors.primaryRed};
  }
  span {
    display: flex;
    padding: 1px 0px 5px 5px;
    justify-content: space-between;
    align-items: center;
  }
`;

export default ProductCard;
