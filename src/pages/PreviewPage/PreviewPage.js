import "./PreviewPage.css";
import logo from "../../assets/pagesLogo.svg";
import CardPreview from "./components/CardPreview/CardPreview";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { IoChevronBack } from "react-icons/io5";
import { connect } from "react-redux";

const PreviewPage = ({ products }) => {
  const navigate = useNavigate();

  const handleClickCard = (id) => {
    navigate(`/product-preview/${id}`);
  };

  const handleClickBack = () => {
    navigate("/product-page");
  };

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
};

const mapStateToProps = (state) => ({
  products: state.products.productsData,
});

export default connect(mapStateToProps)(PreviewPage);
