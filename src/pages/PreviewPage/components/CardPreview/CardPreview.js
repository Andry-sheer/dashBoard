
import { useEffect, useState } from "react";
import { BsCartCheckFill, BsCartXFill } from "react-icons/bs";
import styles from "../../../../styles/CardPreview.module.scss";
import defaultImage from "../../../../assets/noImg.png";

const CardPreview = ({ onClick, product }) => {
  const [inStorage, setInStorage] = useState(false);

  useEffect(()=> {
    if(product.quantity <= 0){
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
      <div className={styles.containerImage}>
        <img className={styles.image} src={product.images[0] && isValidImageFormat(product.images[0].trim()) ? product.images[0].trim() : defaultImage } alt="cardImage" />
      </div>
      <p className={styles.title}>{product.name}</p>
      <p className={styles.category}>Категорія: {product.category}</p>
      <div className={styles.container}>
        <p className={styles.price}>{product.price}₴</p>
        <p className={styles.quantity}>Кількість: {product.quantity}</p>
      </div>
      <div className={styles.containerInner}>
        {inStorage ? (<><BsCartXFill size={20} fill="#bc0514" /><p className={styles.noDelivery}>Немає на складі</p></>)
          : (<><BsCartCheckFill size={20} fill="#05BC52" /><p className={styles.delivery}>Готовий до відправки</p></>)
        }
      </div>
    </div>
  );
};

export default CardPreview;
