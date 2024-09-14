import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { API_URL } from "./constants/constants";
import "./router.css";
import Login from "./pages/Login/Login";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import Error from "./pages/Error/Error";
import PrivateRoute from "./privateRoute";
import PreviewPage from "./pages/PreviewPage/PreviewPage";


const RouterApp = () => {
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
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error/>} />
          <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute/>} >
          <Route path="/product-page" element={<ProductsPage products={products} isLoading={isLoading} isError={isError}/>} />
          <Route path="/preview-page" element={<PreviewPage />} />
          <Route path="/product-preview/:id" element={<ProductPreview />} />
        </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;
