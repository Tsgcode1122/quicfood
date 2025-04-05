// src/components/styles/ProductGrid.js
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";

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
    color: none !important;
  }
`;

export default ProductGrid;
