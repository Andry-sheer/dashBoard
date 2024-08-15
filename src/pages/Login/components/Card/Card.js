
import './Card.css';
import loginLogo from '../../../../assets/loginLogo.svg';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

const Card = () => {
  return (
    <div className='Card'>
      <img className='loginLogo' src={ loginLogo }  alt='loginLogo' />
      <Input PasswordInput PassIcon />
      <Button Login/>
    </div>
  )
}

export default Card;