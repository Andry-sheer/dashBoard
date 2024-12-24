import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../../constants/constants";
import { IoIosArrowBack } from "react-icons/io";
import { FaHouseCircleCheck, FaHouseCircleXmark } from "react-icons/fa6";
import MyButton from "../../components/MyButton/MyButton";
import BasicSpinner from "../../components/Spinner/Spinner";
import Logo from "../../assets/pagesLogo.svg";
import styles from "../../styles/ProductPreview.module.css";

const ProductPreview = () => {
  const { id } = useParams();
  const navigateBack = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState(null);
  const [isZero, setIsZero] = useState(false);

  useEffect(() => {
      getProducts();
      // eslint-disable-next-line
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`);

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

  useEffect(()=>{
    if(products && products.quantity <= 0){
      setIsZero(true);
    }
  }, [products])

  const handleButtonBack = () => {
    navigateBack("/preview-page");
  };

  if (isError) {
    return (
      <div className={styles.error}>
          <div className={styles.errorBox}>
          <img className={styles.errorLogo} src={Logo} alt="logo" />
          <p className={styles.errorDescription}>
            Sorry this page is not found | 404
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        {isLoading ? (
          <div className={styles.spinner}>
            <BasicSpinner />
          </div>
        ) : (
          <div className={styles.container}>
            <MyButton className={styles.buttonBack} icon={<IoIosArrowBack className={styles.iconButton} size={20} />} textButton="BACK TO STORE" onClick={handleButtonBack} />
            <div className={styles.containerInner}>
              <div className={styles.blockImage}>
                <img className={styles.image} src={products.image} alt="product-image" />
              </div>
              <div className={styles.blockInfo}>
                <h1 className={styles.name}>{products.name}</h1>
                <p className={styles.category}>Категорія: <span className={styles.spanTitle}>{products.category}</span></p>
                <p className={styles.price}>{products.price} ₴</p>
                <p className={isZero? styles.storageZero : styles.storage}>
                  {isZero ? (<FaHouseCircleXmark size={20} fill="#f42652"/>) : (<FaHouseCircleCheck size={20} fill="#44b26f"/> ) }{isZero ? "немає в наявності" : "в наявності:"} <span className={styles.quantity}>{isZero ? null : products.quantity}</span></p>
                <p className={styles.descriptionTitle}>Опис:</p>
              </div>
              <div className={styles.blockDescription}>
                <p className={styles.descriptions}>{products.descriptions}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default ProductPreview;
