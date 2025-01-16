import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/constants";
import { Skeleton } from "@mui/material";
import styles from "../../styles/PreviewPage.module.scss";
import Logo from "../../assets/logo.png";
import CardPreview from "./components/CardPreview/CardPreview";

const PreviewPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);

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
}

  const handleClickCard = (id) => {
    navigate(`/product-preview/${id}`);
  };

  if (isError){
    return (
      <div className={styles.error}>
        <div className={styles.errorContainer}>
          <img className={styles.errorLogo} alt="logo2" src={Logo} />
          <p className={styles.errorDescriptions}>error: no loading data...</p>
        </div>
    </div>
    )
  }
  else {
      return (
    <div className={styles.preview}>
      {isLoading ? ( <div className={styles.wrapperSkull}>
        <div className={styles.containerSkull}>
          <Skeleton className={styles.skull} variant="rectangular" />
          <Skeleton className={styles.skull} variant="rectangular" />
          <Skeleton className={styles.skull} variant="rectangular" />
          <Skeleton className={styles.skull} variant="rectangular" />
          <Skeleton className={styles.skull} variant="rectangular" />
          <Skeleton className={styles.skull} variant="rectangular" />
        </div>
      </div> )
        : 
      ( <div className={styles.container}>
      <div className={styles.cards}>
        {products.map((product) => (
          <CardPreview
            key={product.id}
            product={product}
            onClick={() => handleClickCard(product.id)}
          />
        ))}
      </div>
    </div> )}
    </div>
  );
  }
};


export default PreviewPage;