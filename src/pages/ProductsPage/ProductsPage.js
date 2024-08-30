import "./ProductsPage.css";
import ProductsPageLogo from "../../assets/pagesLogo.svg";
import Button from "../../components/Button/Button";
import ProductsTable from "./components/ProductsTable/ProductsTable";

const ProductsPage = ({ products, isLoading, isError }) => {
  return (
    <div className="ProductsPage">
      <img className="ProductsLogo" alt="ProductsLogo" src={ProductsPageLogo} />
      <Button iconAdd iconPreview />
      <h1 className="productTitle">Products</h1>
      <ProductsTable
        products={products}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default ProductsPage;
