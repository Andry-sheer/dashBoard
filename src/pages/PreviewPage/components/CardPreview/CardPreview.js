
import { BsCartCheckFill } from "react-icons/bs";
import styles from "../../../../styles/CardPreview.module.css";

const CardPreview = ({ onClick, product }) => {

  return (
    <div onClick={onClick} className={styles.card} key={product.id}>
      <div className={styles.containerImage}>
        <img className={styles.image} src={product.image} alt="cardImage" />
      </div>
      <p className={styles.title}>{product.name}</p>
      <p className={styles.category}>Категорія: {product.category}</p>
      <div className={styles.container}>
        <p className={styles.price}>{product.price}$</p>
        <p className={styles.quantity}>Кількість: {product.quantity}</p>
      </div>
      <div className={styles.containerInner}>
        <BsCartCheckFill size={20} fill="#05BC52" />
        <p className={styles.delivery}>Ready to delivery</p>
      </div>
    </div>
  );
};

export default CardPreview;
