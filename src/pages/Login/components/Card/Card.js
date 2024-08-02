import './Card.css';
import loginLogo from '../../../../assets/loginLogo.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Card = ( ) => {
  return (
    <div className='Card'>
      <img className='loginLogo' src={ loginLogo }  alt='loginLogo' ></img>
      <Input PassIcon />
      <Input  />
      <Button/>
    </div>
  )
}

export default Card;