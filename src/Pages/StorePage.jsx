import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useProducts } from "../Context/ProductContext";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Colors, Shadows } from "../Colors/ColorComponent";

const StorePage = () => {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("None");

  // Filtering & Sorting Logic
  useEffect(() => {
    let filtered = products.filter((product) => {
      return (
        (selectedCategory === "All" ||
          product.category.includes(selectedCategory)) &&
        (searchQuery === "" ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });

    if (sortOption === "LowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "HighToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, sortOption, products]);

  return (
    <Container>
      {/* Filter Section */}
      <FilterContainer>
        <CartegorySort>
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span>Cart</span>
        </CartegorySort>
        <CartegorySort>
          <CategorySelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Flour & Grains">Flour & Grains</option>
            <option value="Oils & Sauces">Oils & Sauces</option>
            <option value="Seeds & Nuts">Seeds & Nuts</option>
            <option value="Seafood">Seafood</option>
            <option value="Spices & Seasoning">Spices & Seasoning</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Snacks">Snacks</option>
            <option value="Spreads & Butters">Spreads & Butters</option>
          </CategorySelect>
          <SortSelect
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="None">Filter by</option>
            <option value="LowToHigh">Price: Low to High</option>
            <option value="HighToLow">Price: High to Low</option>
          </SortSelect>
        </CartegorySort>
      </FilterContainer>

      {/* Product Grid */}
      <ProductGrid>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <Link to={`/products/${product.id}`} className="link">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
              </Link>
            </ProductCard>
          ))
        ) : (
          <NoResults>No products found.</NoResults>
        )}
      </ProductGrid>
    </Container>
  );
};

export default StorePage;
const Container = styled.div`
  padding-bottom: 3rem;
`;

const CartegorySort = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FilterContainer = styled.div`
  background-color: #f6f6f6 !important;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 499px) {
    border-radius: 0 0 20px 20px;
    padding: 15px 20px;

    display: flex;
    gap: 5px;
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 0.1px solid #ccc;
  background-color: #f6f6f6;
  ::placeholder {
    font-style: italic !important;
    color: red;
  }
  @media screen and (max-width: 320px) {
    min-width: 200px;
  }
  @media (min-width: 321px) and (max-width: 499px) {
    min-width: 250px;
  }
`;

const CategorySelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none !important;
  background-color: transparent !important;
`;

const SortSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none !important;
  background-color: transparent !important;
  max-width: 110px;
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
    color: none !important;
  }
`;

const ProductCard = styled.div`
  background: ${Colors.pureWhite};
  box-shadow: ${Shadows.soft};
  border-radius: 8px;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${Shadows.medium};
  }
  img {
    width: 100%;
    height: auto;

    border-radius: 8px;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: ${Colors.black};
  }

  h3 {
    color: ${Colors.primaryRed};
  }

  p {
    font-weight: bold;
    color: ${Colors.deepMaroon};
  }
`;

const NoResults = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
  margin-top: 20px;
`;
