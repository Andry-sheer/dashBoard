import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../modules/actions/products";
import { FaCirclePlus, FaCircleCheck } from "react-icons/fa6";
import MyButton from "../../components/MyButton/MyButton";
import ProductsTable from "../ProductsPage/components/ProductsTable/ProductsTable";
import BasicSpinner from "../../components/Spinner/Spinner";
import styles from "../../styles/ProductsPage.module.css";
import ModalEdit from "../../components/ModalWindows/ModalEdit";

const ProductsPage = ({ fetchProducts, isLoading, isLoadProducts }) => {
  const navigatePreview = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleButtonPreview = () => {
    navigatePreview("/preview-page");
  };

  useEffect(() => {
    if (!isLoadProducts) {
      fetchProducts();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadProducts]);

    return (
      <div className={styles.wrapper}>
        <div className={styles.products}>
          {isLoading ? <div className={styles.spinner}><BasicSpinner/></div> :
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
                    onClick={() => {setIsOpenModal(true)}}
                    type="button"
                    className={styles.buttonAdd}
                    textButton="Add Product"
                    icon={<FaCirclePlus fill="black" size={15} />}
                  />
                </div>
              </div>
                <ProductsTable />
            </div>
          }
          <ModalEdit onOpen={isOpenModal} onClose={()=> setIsOpenModal(false)} />
        </div>
      </div>
    );
};

const mapStateToProps = (state) => ({
  products: state.products.productsData,
  isLoadProducts: state.products.isLoadProducts,
  isLoading: state.products.isLoading
});

export default connect(mapStateToProps, { fetchProducts })(ProductsPage);