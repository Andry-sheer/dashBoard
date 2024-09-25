
import { useState, useEffect } from "react";
import { API_URL } from "../../constants/constants";
import "./ProductsPage.css";
import ProductsPageLogo from "../../assets/pagesLogo.svg";
import Buttons from "../../components/Button/Button";
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import ProductsTable from "../ProductsPage/components/ProductsTable/ProductsTable";
import { useNavigate } from "react-router-dom";
import { addProducts, setIsError } from "../../modules/actions/products";
import { connect } from "react-redux";
import ModalDelete from "../../components/ModalWindows/ModalDelete";


const ProductsPage = ( { addProducts, setIsError } ) => {
  const navigatePreview = useNavigate();
  const [isLoadProducts, setIsLoadProducts] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productDelete, setProductDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const handleButtonPreview = () => {
    navigatePreview("/preview-page")
  }

  useEffect(() => {
    if (!isLoadProducts){
      getProducts();
    }}, [isLoadProducts]);


  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error("Something Error");
      }

      const productsData = await response.json();
      addProducts(productsData);
      setIsLoading(false); // true
      setIsLoadProducts(true);

    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const handleOpenModal = (product) => {
    setProductDelete(product);
    setIsOpenModal(true);
  };

  const handleCloseModal =()=> {
    setIsOpenModal(false);
    setProductDelete(null);
  }

  const deleteProducts = async () => {
    if (!productDelete) return;

    await fetch(`${API_URL}/products/${productDelete.id}`, {
      method: 'DELETE'
    });

    setIsLoadProducts(false);
    setIsOpenModal(false);
  }


  return (
    <div className="ProductsPage">
      <img className="ProductsLogo" alt="ProductsLogo" src={ProductsPageLogo} />
      <Buttons onClick={handleButtonPreview} type='button' className='buttonPreview' textButton='Preview' icon={<div className="iconPreview"><CgProfile/></div>} />
      <Buttons type='button' className='buttonAdd' textButton='Add Product' icon={<div className="iconAdd"><IoMdAdd/></div>} />
      <h1 className="productTitle">Products</h1>

      <ProductsTable isLoading={isLoading} onDeleteModal={handleOpenModal}/>

      <ModalDelete open={isOpenModal} onClose={handleCloseModal} onDeleteModal={deleteProducts} />

    </div>
  );
};

export default connect(null, { addProducts, setIsError })(ProductsPage);
