import "./ProductPreview.css";
import logo from "../../assets/pagesLogo.svg";
import Button from "../../components/Button/Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import iconCheck from "../../assets/PatchCheck.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../../constants/constants";
import { connect } from "react-redux";
import { addProducts } from "../../modules/actions/products";


const ProductPreview = () => {
  const { id } = useParams();
  const navigateBack = useNavigate();







  const handleButtonBack = () => {
    navigateBack("/preview-page");
  };


  return (
        <div className="productPreviewContainer">
      <div className="productPreviewHeader">
        <img className="productPreviewLogo" src={logo} alt="logo" />
      </div>

      <div className="productPreviewTitle">
        <Button
          onClick={handleButtonBack}
          className="productPreviewButtonBack"
          icon={<IoMdArrowRoundBack size="50" />}
        />
        <p className="productPreviewDescriptionTitle">{product.name}</p>
      </div>

      <div className="productPreviewContainerInner">
        {/* <div>{img}</div> */}
        <div className="productPreviewContent">
          <p className="productPreviewStorage">
            <img
              className="productPreviewIconCheck"
              src={iconCheck}
              alt="iconCheck"
            />{" "}
            Storage
          </p>
          <p className="productPreviewPrice">{product.price}₴</p>
          <p className="productPreviewQuantity">Quantity: {product.quantity}</p>
        </div>
      </div>

      <div className="productPreviewDescriptionTitleInner">
        Опис:
        <h1 className="productPreviewDescriptionTitleContent">
          {product.name}
        </h1>
      </div>

      <div className="productPreviewDescription">
        <div className="productPreviewDescriptionOne">
          <h2 className="productPreviewDescriptionTwo"> {product.titleOne}</h2>
          {product.descriptionOne}
        </div>
        <div className="productPreviewDescriptionOne">
          <h2 className="productPreviewDescriptionTwo"> {product.titleTwo}</h2>
          {product.descriptionTwo}
        </div>
        <div className="productPreviewDescriptionOne">
          <h2 className="productPreviewDescriptionTwo">
            {product.titleThree}
          </h2>
          {product.descriptionThree}
        </div>
      </div>
    </div>
  );
};


export default connect(null, {addProducts})(ProductPreview);
