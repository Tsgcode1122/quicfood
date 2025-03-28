import { createContext, useContext } from "react";
import products from "../Product/Products";

// Create Product Context
const ProductContext = createContext();

// Provider Component
export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the Product Context
export const useProducts = () => {
  return useContext(ProductContext);
};
