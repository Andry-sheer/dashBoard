
import "./PreviewPage.css";
import logo from "../../assets/pagesLogo.svg";
import CardPreview from "./components/CardPreview/CardPreview";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { IoChevronBack } from "react-icons/io5";


const PreviewPage = () => {

  const { id } = useParams();  // Получаем id из URL

  const navigate = useNavigate();

  const products = [
    {
      category: "PC",
      name: "Lenovo Y50-70 Aluminum Black",
      quantity: 1,
      price: 5000,
      id: 1,
    },
    {
      category: "PC",
      name: "One X",
      quantity: 3,
      price: 15000,
      id: 2,
    },
    {
      category: "PC",
      name: "RTX 3000U",
      quantity: 5,
      price: 25000,
      id: 3,
    }
  ];




  const handleClickCard = () => {
    navigate("/product-preview");
  }

  const handleClickBack = () => {
    navigate("/product-page");
  }


  return (
    <div className="PreviewPage">
      <img
        className="PreviewLogo"
        alt="logo"
        src={logo}
      />

      <Button type="button" textButton="Product page" onClick={handleClickBack} className="backButtonProductPage" icon={<IoChevronBack size='40' color="black" />} />

      <div className="PreviewContainer">
        {products ? (products.find(product => product.id === parseInt(id))) : (products.map((product) => (
          <CardPreview key={product.id} product={product} onClick={handleClickCard} />
        )))}
      </div>
    </div>
  );
};

export default PreviewPage;
