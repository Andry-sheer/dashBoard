
import { useEffect, useState } from "react";
import { BsCartCheckFill, BsCartXFill } from "react-icons/bs";
import styles from "../../../../styles/CardPreview.module.css";

const CardPreview = ({ onClick, product }) => {
  const [inStorage, setInStorage] = useState(false);

  useEffect(()=> {
    if(product.quantity <= 0){
      setInStorage(true);
    } else {
      setInStorage(false);
    }
  }, [product]);

  return (
    <div onClick={onClick} className={styles.card} key={product.id}>
      <div className={styles.containerImage}>
        <img className={styles.image} src={product.image} alt="cardImage" />
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
