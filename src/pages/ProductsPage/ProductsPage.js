import "./ProductsPage.css";
import ProductsPageLogo from "../../assets/pagesLogo.svg";
import Button from "../../components/Button/Button";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProductsTable from "./components/ProductsTable/ProductsTable";

const ProductsPage = ({ products, isLoading, isError }) => {

  return (
    <div className="ProductsPage">
      <img className="ProductsLogo" alt="ProductsLogo" src={ProductsPageLogo} />
      <Button type='button' className='two' textButton='Preview' icon={<div className="iconPreview"><CgProfile/></div>} />
      <Button type='button' className='three' textButton='Add Product' icon={<div className="iconAdd"><IoMdAdd/></div>} />
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
