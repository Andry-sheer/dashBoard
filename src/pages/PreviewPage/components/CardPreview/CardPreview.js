
import { useEffect, useState } from "react";
import { BsCartCheckFill, BsCartXFill } from "react-icons/bs";
import styles from "../../../../styles/CardPreview.module.scss";
import defaultImage from "../../../../assets/noImg.png";
import MyButton from "../../../../components/MyButtons/MyButton";

const CardPreview = ({ onClick, product }) => {
  const [inStorage, setInStorage] = useState(false);

  useEffect(()=> {
    if(product.quantity > 0){
      setInStorage(true);
    } else {
      setInStorage(false);
    }
  }, [product]);

  const isValidImageFormat = (image) => {
    return (
      image &&
      (image.endsWith(".webp") ||
        image.endsWith(".jpg") ||
        image.endsWith(".jpeg") ||
        image.endsWith(".png") ||
        image.endsWith(".gif"))
    );
  };

  return (
    <div onClick={onClick} className={styles.card} key={product.id}>
      <div className={styles.card__wrapper}>
        <img className={styles.card__image} src={product.images[0] && isValidImageFormat(product.images[0].trim()) ? product.images[0].trim() : defaultImage } alt="cardImage" />
      </div>

        <div className={styles.card__info}>
          <p className={styles.card__title}>{product.name}</p>
          <p className={styles.card__category}>{product.category}</p>

        <div className={styles.card__priceWrapper}>
          <p className={inStorage ? styles.card__priceOn : styles.card__priceOff}>₴ {product.price}</p>
      
        <div className={styles.card__wrapperDelivery}>
          <p className={inStorage ? styles.card__quantityOn : styles.card__quantityOff}>{product.quantity}</p>
          {inStorage ? 
            <BsCartCheckFill className={styles.card__deliveryOn} /> :
            <BsCartXFill className={styles.card__deliveryOff} /> }
          </div>
        </div>
      </div>

      <div className={styles.card__hidden}>
          <p className={styles.card__title2}>{product.name}</p>
          <p className={styles.card__category}>{product.category}</p>

        <div className={styles.card__priceWrapper}>
          <p className={inStorage ? styles.card__priceOn : styles.card__priceOff}>₴ {product.price}</p>
      
        <div className={styles.card__wrapperDelivery}>
          <p className={inStorage ? styles.card__quantityOn : styles.card__quantityOff}>{product.quantity}</p>
          {inStorage ? 
            <BsCartCheckFill className={styles.card__deliveryOn} /> :
            <BsCartXFill className={styles.card__deliveryOff} /> }
          </div>
        </div>
            <MyButton 
              className={inStorage ? styles.card__buy : styles.card__buyOff} 
              textButton={inStorage ? "Buy one click" : "No storage"} />
        </div>
    </div>
  );
};

export default CardPreview;
