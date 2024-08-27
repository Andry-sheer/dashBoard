
import './Input.css'
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';
import Button from '../Button/Button';




const Input = ({ passwordInput }) => {

  const emptyLogin = 'Login is Empty';
  const emptyPassword = 'Password is Empty';
  const emptyLogPass = 'Login & Password is Empty';

  const [ isShowPassword, setIsShowPassword] = useState(true);

  const [ isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [ isLoginEmpty, setIsLoginEmpty] = useState(false);
  const [ logPass, setLogPass ] = useState(false);

  const [ login, setLogin ] = useState("");
  const [ password, setPassword ] = useState("");


  const handleClickShowPassword = () => {
    setIsShowPassword(prevIsShowPassword=> !prevIsShowPassword);
  }


  const handleChange = (event) => {

    const {name, value} = event.target;

    if(name === "login"){
      setLogin(value);
      setIsLoginEmpty(false);
      setLogPass(false)

      // isLoginEmpty(false);
      // setState({ isLoginEmpty: false})
    }



    if(name === "password"){
      setPassword(value);
      setIsPasswordEmpty(false);
      setLogPass(false);
    }

    // console.log(event.target.value);
    
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

    // console.log({ login, password });
    
    // const tokenTest = { login, password }

    // console.log(tokenTest)
  }


  console.log();


  return (
    <div className='InputContainer'>
      <form onSubmit={handleSubmit}>

      <label>
        <input className='loginInput' value={login} onChange={handleChange} name='login'  type='text' placeholder='User Name' />
        {isLoginEmpty && <p className='ErrorValid'>{emptyLogin}</p> }
      </label>
      

      <label>
        { passwordInput && <input className='loginInput password' value={password} onChange={handleChange} name='password'  type={isShowPassword ? "password" : "text"} placeholder='Password'/>  }
        {isPasswordEmpty && <p className='ErrorValid'>{emptyPassword}</p> }
      </label>

      {logPass && <p className='ErrorValid'>{emptyLogPass}</p>}
      

      <button onClick={handleClickShowPassword} type='button' className='buttonEye'>
        {isShowPassword ? <IoMdEye size='30px' title='Show password' color='green' /> : 
        <IoMdEyeOff size='30px' title='Hide password' color='green' /> }
      </button>

      <Button Login />

      </form>    
    </div>

  );
};


export default Input;