
import './CardLogin.css';
import { useState } from 'react';
import loginLogo from '../../../../assets/loginLogo.svg';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

const CardLogin = () => {

  const emptyLogin = 'Login is Empty';
  const emptyPassword = 'Password is Empty';
  const emptyLogPass = 'Login & Password is Empty';

  const [ isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [ isLoginEmpty, setIsLoginEmpty] = useState(false);
  const [ logPass, setLogPass ] = useState(false);

  const [ login, setLogin ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleChange = (event) => {

    const {name, value} = event.target;

    if(name === "login"){
      setLogin(value);
      setIsLoginEmpty(false);
      setLogPass(false)
    }

    if(name === "password"){
      setPassword(value);
      setIsPasswordEmpty(false);
      setLogPass(false);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(login.trim() === "" && password.trim() === ""){
      setLogPass(true);
      setIsLoginEmpty(false);
      setIsPasswordEmpty(false);
    }

    else if(login.trim() === ""){ setIsLoginEmpty(true); }

    else if(password.trim() === ""){ setIsPasswordEmpty(true) }
    
    const user = { login, password }

    console.log(user)

    if(user.login === 'admin' && user.password === '12345678'){
      localStorage.setItem('jwt' , '3cwn4u9do92jsb0cg6v82e1');
      console.log("test for welcome back - Admin");
    }
  }

  return (
    <div className='CardLogin'>
      <img className='loginLogo' src={ loginLogo }  alt='loginLogo' />
      <form onSubmit={handleSubmit}>

        <Input loginInput onChange={handleChange} value={login} />
          {isLoginEmpty && <p className='ErrorValid'>{emptyLogin}</p> }
        <Input passwordInput onChange={handleChange} value={password} />
          {isPasswordEmpty && <p className='ErrorValid'>{emptyPassword}</p> }
        <Button Login/>
          {logPass && <p className='ErrorValid'>{emptyLogPass}</p>}

      </form>
    </div>
  )
}

export default CardLogin;