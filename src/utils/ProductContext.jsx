import { createContext } from "react";
import { useState, useEffect } from "react";
import { Products_Details } from "../data/Data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [allCategory, setAllCategory] = useState([]);
  const [filteredAllCategory, setFilteredAllCategory] = useState([]);

  useEffect(() => {
    setAllCategory(Products_Details);
    setFilteredAllCategory(Products_Details);
  }, []);

  const handleFilter = (searchText) => {
    const result = allCategory.filter((cat) =>
      cat?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    setFilteredAllCategory(result);
  };
  return (
    <ProductContext.Provider value={{ handleFilter, filteredAllCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
