import "./PreviewPage.css";
import logo from "../../assets/pagesLogo.svg";
import logo2 from "../../assets/pagesLogo.svg";
import CardPreview from "./components/CardPreview/CardPreview";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { IoChevronBack } from "react-icons/io5";
import { connect } from "react-redux";
import BasicSpinner from "../../components/Spinner/Spinner";

const PreviewPage = ({ products, isError }) => {
  const navigate = useNavigate();

  const handleClickCard = (id) => {
    navigate(`/product-preview/${id}`);
    localStorage.setItem("products", products)
  };

  const handleClickBack = () => {
    navigate("/product-page");
  };

  if (isError){
    return (
    <div className="PreviewPage">
      <img className="PreviewLogo" alt="logo" src={logo} />
      <div className="PreviewPageErrorContainer">
        <img className="PreviewLogo2" alt="logo2" src={logo2} />
        <p className="PreviewPageErrorText">Oops! sorry we have a problem...</p>
        <p className="PreviewPageErrorText2">"Data is Empty..." <BasicSpinner/></p>
      </div>
    </div>
    )
    
  }
  else {
      return (
    <div className="PreviewPage">
      <img className="PreviewLogo" alt="logo" src={logo} />

      <Button
        type="button"
        textButton="Product page"
        onClick={handleClickBack}
        className="backButtonProductPage"
        icon={<IoChevronBack size="40" color="black" />}
      />

      <div className="PreviewContainer">
        {products.map((product) => (
          <CardPreview
            key={product.id}
            product={product}
            onClick={() => handleClickCard(product.id)}
          />
        ))}
      </div>
    </div>
  );
  }
};

const mapStateToProps = (state) => ({
  products: state.products.productsData,
  isError: state.products.isError,
});

export default connect(mapStateToProps)(PreviewPage);
