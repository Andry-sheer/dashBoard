
import "./CardPreview.css";
import { BsCartCheckFill } from "react-icons/bs";

const CardPreview = ({ onClick, product }) => {

  let img;

  if (product.name === "Lenovo Y50-70 Aluminum Black"){
    img=<img className="cardImg" src={product.img.notebook} alt="cardImage" />
  }
  
  if (product.name === "Samsung Odyssey NEO G7"){
    img=<img className="cardImg" src={product.img.samsung} alt="cardImage" />
  }

  if (product.name === "Nvidia Quadro RTX 4000"){
    img=<img className="cardImg" src={product.img.nvidia} alt="cardImage" />
  }


  return (
    <div onClick={onClick} className="cardContainer" key={product.id}>
      <div>{img}</div>
      {/* <img className="cardImg" src={product.img.note} alt="cardImage" /> */}
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
