import { useEffect } from "react";
import "./ProductsPage.css";
import ProductsPageLogo from "../../assets/pagesLogo.svg";
import MyButton from "../../components/MyButton/MyButton";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProductsTable from "../ProductsPage/components/ProductsTable/ProductsTable";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../modules/actions/products";
import { connect } from "react-redux";


const ProductsPage = ({ fetchProducts, isLoadProducts }) => {
  const navigatePreview = useNavigate();



  const handleButtonPreview = () => {
    navigatePreview("/preview-page");
  };

  useEffect(() => {
    if (!isLoadProducts) {
      fetchProducts();
    }
  }, [isLoadProducts]);




  return (
    <div className="ProductsPage">
      <img className="ProductsLogo" alt="ProductsLogo" src={ProductsPageLogo} />
      <MyButton
        onClick={handleButtonPreview}
        type="button"
        className="buttonPreview"
        textButton="Preview"
        icon={
          <div className="iconPreview">
            <CgProfile />
          </div>
        }
      />
      <MyButton
        type="button"
        className="buttonAdd"
        textButton="Add Product"
        icon={
          <div className="iconAdd">
            <IoMdAdd />
          </div>
        }
      />
      <h1 className="productTitle">Products</h1>

      <ProductsTable />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.productsData,
  isLoadProducts: state.products.isLoadProducts,
});

export default connect(mapStateToProps, { fetchProducts })(ProductsPage);
