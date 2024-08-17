
import './CardPreview.css';
import pcImg from '../../../../assets/lenovo-laptop-y50-cover-6_01 1.png';
import { BsCartCheckFill }  from "react-icons/bs";


const CardPreview = () => {
  return (
    <div className='cardContainer'>
      <img className='cardImg' src={pcImg} alt='cardImage'/>
      <p className='cardName'>notebook Lenovo Y50-70 Aluminum Black</p>
      <div className='cardContainerInner'>
        <p className='cardPrice'>25.000$</p>
        <p className='cardQuantity'>Quantity: 5</p>
      </div>
        <div className='cardDelivery'>
          <BsCartCheckFill className='cardImgDelivery'/>
          <p className='cardDescription'>Ready to delivery</p>
        </div>
    </div>
  )
}

export default CardPreview;