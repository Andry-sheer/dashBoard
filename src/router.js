import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/style.scss";
import Login from "./pages/Login/Login";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import Error from "./pages/Error/Error";
import PrivateRoute from "./privateRoute";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";

const AppRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="*" element={<Error />} />

            <Route path="/" element={<Navigate to="/sing-in" replace />} />

            <Route path="/sing-in" element={<Login />} />

            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/product-page" element={<ProductsPage />} />
              <Route path="/home" element={<PreviewPage />} />
              <Route path="/product-preview/:id" element={<ProductPreview />} />
            </Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
