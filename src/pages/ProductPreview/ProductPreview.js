
import "./ProductPreview.css";
import logo from "../../assets/pagesLogo.svg";
import ButtonX from "../../components/Button/Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import iconCheck from "../../assets/PatchCheck.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../../constants/constants";
import BasicSpinner from "../../components/Spinner/Spinner";

const ProductPreview = () => {
  const { id } = useParams();
  const navigateBack = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
      getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(API_URL + `products/${id}`);

      if (!response.ok) {
        throw new Error("Something Error");
      }

      const productsData = await response.json();
      setProducts(productsData);
      setIsLoading(false); //true
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const handleButtonBack = () => {
    navigateBack("/preview-page");
  };

  if (isError) {
    return (
      <div className="ErrorContainerProductPreview">
        <img className='ErrorImageProductPreview' src={logo} alt='logo' />
        <p className="ErrorDescriptionProductPreview">Oops! sorry we have a problem...</p>
      </div>
    )
  }

    else {
    return (
    <div className="productPreviewContainer">
      <div className="productPreviewHeader">
        <img className="productPreviewLogo" src={logo} alt="logo" />
      </div>

      {isLoading ? (
        <div className="productPreviewSpinnerContainer">
          <BasicSpinner />
        </div>
      ) : (
        <>
          <div className="productPreviewTitle">
            <ButtonX
              onClick={handleButtonBack}
              className="productPreviewButtonBack"
              icon={<IoMdArrowRoundBack className="PreviewButtonIcon" size="50" />}
            />

            <ButtonX
              onClick={handleButtonBack}
              className="productPreviewButtonBackMobile"
              icon={<IoChevronBack className="PreviewButtonIconMobile" size="40" />}
            />
            <p className="productPreviewDescriptionTitle">{products.name}</p>
          </div>

          <div className="productPreviewContainerInner">
            <img
              className="productPreviewImage"
              src={products.image}
              alt="img"
            />
            <div className="productPreviewContent">
              <div className="PreviewStorageContainer">
              <img
                  className="productPreviewIconCheck"
                  src={iconCheck}
                  alt="iconCheck"
                />
              <p className="productPreviewStorage">
                Storage
              </p>
              </div>

              <p className="productPreviewPrice">{products.price}₴</p>
              <p className="productPreviewQuantity">
                Quantity: {products.quantity}
              </p>
            </div>
          </div>

          <div className="productPreviewDescriptionTitleInner">
            Description:
            <h1 className="productPreviewDescriptionTitleContent">
              {products.name}
            </h1>
          </div>

          <div className="productPreviewDescription">
            <div className="productPreviewDescriptionOne">
              <h2 className="productPreviewDescriptionTwo">
                {" "}
                {products.titleOne}
              </h2>
              {products.descriptionOne}
            </div>
            <div className="productPreviewDescriptionOne">
              <h2 className="productPreviewDescriptionTwo">
                {" "}
                {products.titleTwo}
              </h2>
              {products.descriptionTwo}
            </div>
            <div className="productPreviewDescriptionOne">
              <h2 className="productPreviewDescriptionTwo">
                {products.titleThree}
              </h2>
              {products.descriptionThree}
            </div>
          </div>
        </>)}
    </div>
    );
  }
};

export default ProductPreview;
