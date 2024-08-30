import React, { useState, useEffect } from "react";
import { API_URL } from "../constants";
import "./App.css";

import Login from "./Login/Login";
import ProductsPage from './ProductsPage/ProductsPage';
// import ProductPreview from './ProductPreview/ProductPreview';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(API_URL + "products");

      if (!response.ok) {
        throw new Error("Something Error");
      }

      const productsData = await response.json();
      setProducts(productsData);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      {/* <Login /> */}
      <ProductsPage products={products} isLoading={isLoading} isError={isError} />
      {/* <ProductPreview /> */}
    </div>
  );
}

export default App;
