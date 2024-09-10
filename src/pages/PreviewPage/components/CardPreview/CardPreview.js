import "./CardPreview.css";
import notebook from "../../../../assets/lenovo-laptop-y50-cover-6_01 1.png";
import { BsCartCheckFill } from "react-icons/bs";

const CardPreview = ({ onClick, product }) => {
  return (
    <div onClick={onClick} className="cardContainer" key={product.id}>
      <p className="cardName">for test ID: {product.id}</p>
      <img className="cardImg" src={notebook} alt="cardImage" />
      <p className="cardName">{product.name}</p>
      <p className="cardCategory">Category: {product.category}</p>
      <div className="cardContainerInner">
        <p className="cardPrice">{product.price}$</p>
        <p className="cardQuantity">Quantity: {product.quantity}</p>
      </div>
      <div className="cardDelivery">
        <BsCartCheckFill className="cardImgDelivery" />
        <p className="cardDescription">Ready to delivery</p>
      </div>
    </div>
  );
};

export default CardPreview;
