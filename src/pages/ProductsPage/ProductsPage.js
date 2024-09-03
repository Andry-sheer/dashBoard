
import "./ProductsPage.css";
import ProductsPageLogo from "../../assets/pagesLogo.svg";
import Button from "../../components/Button/Button";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProductsTable from "../../components/ProductsTable/ProductsTable";


import { BiSortAlt2 } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import spinner from "../../assets/spinner.svg";


const ProductsPage = ({ products, isLoading, isError }) => {

  const icons = {
    sortIcon: <BiSortAlt2 className="sortIcon" size="20px" />,
    editIcon: <FaEdit className="editIcon" size="20px" />,
    deleteIcon: <MdDelete className="deleteIcon" size="20px" />,
  }


  return (
    <div className="ProductsPage">
      <img className="ProductsLogo" alt="ProductsLogo" src={ProductsPageLogo} />
      <Button type={'button'} className={'two'} textButton={'Preview'} icon={<div className="iconPreview"><CgProfile/></div>} />
      <Button type={'button'} className={'three'} textButton={'Add Product'} icon={<div className="iconAdd"><IoMdAdd/></div>} />
      <h1 className="productTitle">Products</h1>

      <ProductsTable
        products={products}
        isLoading={isLoading}
        isError={isError}
        spinner={spinner}
        icons={icons}
      />

    </div>
  );
};

export default ProductsPage;
