
import { useState, useEffect } from "react";
import { API_URL } from "../../constants/constants";
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


const ProductsPage = () => {

  const navigatePreview = useNavigate();

  const handleButtonPreview = ()=> {
    navigatePreview("/preview-page")
  }

  const icons = {
    sortIcon: <BiSortAlt2 className="sortIcon" size="20px" />,
    editIcon: <FaEdit className="editIcon" size="20px" />,
    deleteIcon: <MdDelete className="deleteIcon" size="20px" />,
  }

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(API_URL + "products");

      if (!response.ok) {
        throw new Error("Something Error");
      }

      const productsData = await response.json();
      setProducts(productsData);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };


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
