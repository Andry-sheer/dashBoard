
import "./ProductsPage.css";
import ProductsPageLogo from "../../assets/pagesLogo.svg";
import Button from "../../components/Button/Button";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProductsTable from "../ProductsPage/components/ProductsTable/ProductsTable";


import { BiSortAlt2 } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const ProductsPage = ({ products, isLoading, isError }) => {

  const navigatePreview = useNavigate();

  const handleButtonPreview = ()=> {
    navigatePreview("/preview-page")
  }

  const icons = {
    sortIcon: <BiSortAlt2 className="sortIcon" size="20px" />,
    editIcon: <FaEdit className="editIcon" size="20px" />,
    deleteIcon: <MdDelete className="deleteIcon" size="20px" />,
  }


  return (
    <div className="ProductsPage">
      <img className="ProductsLogo" alt="ProductsLogo" src={ProductsPageLogo} />
      <Button onClick={handleButtonPreview} type='button' className='two' textButton='Preview' icon={<div className="iconPreview"><CgProfile/></div>} />
      <Button type='button' className='three' textButton='Add Product' icon={<div className="iconAdd"><IoMdAdd/></div>} />
      <h1 className="productTitle">Products</h1>

      <ProductsTable
        products={products}
        isLoading={isLoading}
        isError={isError}
        icons={icons}
      />

    </div>
  );
};

export default ProductsPage;
