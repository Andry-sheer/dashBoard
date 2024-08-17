
import './CardLogin.css';
import loginLogo from '../../../../assets/loginLogo.svg';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

const CardLogin = () => {
  return (
    <div className='CardLogin'>
      <img className='loginLogo' src={ loginLogo }  alt='loginLogo' />
      <Input PasswordInput PassIcon />
      <Button Login/>
    </div>
  )
}

export default CardLogin;