import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./router.css";
import Login from "./pages/Login/Login";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import Error from "./pages/Error/Error";
import PrivateRoute from "./privateRoute";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import Welcome from "./pages/Welcome/Welcome";



const RouterApp = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error/>} />
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute/>} >
          <Route path="/product-page" element={<ProductsPage />} />
          <Route path="/preview-page" element={<PreviewPage />} />
          <Route path="/product-preview/:id" element={<ProductPreview />} />
        </Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default RouterApp;
