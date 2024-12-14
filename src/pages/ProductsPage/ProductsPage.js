import { connect, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct, editProduct, fetchProducts, fillForm, resetForm } from "../../modules/actions/products";
import { FaCirclePlus, FaCircleCheck } from "react-icons/fa6";
import MyButton from "../../components/MyButton/MyButton";
import ProductsTable from "../ProductsPage/components/ProductsTable/ProductsTable";
import styles from "../../styles/ProductsPage.module.css";
import ModalEdit from "../../components/ModalWindows/ModalEdit";
import Logo from "../../assets/pagesLogo.svg";

const ProductsPage = () => {
  const navigatePreview = useNavigate();

  const dispatch = useDispatch();
  const form = useSelector((state) => state.products.form);
  const isError = useSelector((state) => state.products.isError);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(null);

  // eslint-disable-next-line
  const openModal = (product = null) => {
    if(product){
      setIsEdit(true);
      dispatch(fillForm(product));
    }
    else {
      setIsEdit(false);
      dispatch(resetForm());
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(resetForm());
  };

  const handleSave = () => {
    if(isEdit){
      dispatch(editProduct());
    }
    else {
      dispatch(addProduct());
    }

    closeModal();
  };


  const handleButtonPreview = () => {
    navigatePreview("/preview-page");
  };

  if(isError){
    return (
      <div className={styles.error}>
        <div className={styles.errorContainer}>
          <img src={Logo} alt="logo"/>
          <div className={styles.errorTitle}>Somethings error... No Data</div>
        </div>
    </div>
    )
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.products}>
            <div className={styles.container}>
              <div className={styles.containerTitle}>
                <h1 className={styles.title}>Products</h1>
                <div className={styles.buttonContainer}>
                  <MyButton
                    onClick={handleButtonPreview}
                    type="button"
                    className={styles.buttonPreview}
                    textButton="Preview"
                    icon={<FaCircleCheck fill="black" size={15} />}
                  />
                  <MyButton
                    onClick={() => {setIsModalOpen(true)}}
                    type="button"
                    className={styles.buttonAdd}
                    textButton="Add Product"
                    icon={<FaCirclePlus fill="black" size={15} />}
                  />
                </div>
              </div>
                <ProductsTable />
            </div>
          <ModalEdit onOpen={isModalOpen} onClose={closeModal} form={form} onSave={handleSave} isEdit={isEdit} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  products: state.products.productsData,
  isLoadProducts: state.products.isLoadProducts,
});

export default connect(mapStateToProps, { fetchProducts })(ProductsPage);