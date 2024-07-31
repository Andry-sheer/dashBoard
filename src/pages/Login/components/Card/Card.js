import './Card.css';
import img from '../../../../assets/loginLogo.svg';


const Card = ( { showImg } ) => {
  return (
    <div className={'Card'}>
      { showImg && img }
    </div>
  )
}

export default Card;