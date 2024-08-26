
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

  const [ login, setLogin ] = useState("");
  const [ password, setPassword ] = useState("");

  const [ logPass, setLogPass ] = useState(false);

  const handleClickShowPassword = () => {
    setIsShowPassword(prevIsShowPassword=> !prevIsShowPassword);
  }


  const handleChange = (event, setState) => {

    if(event.target.name === 'name'){
      // isLoginEmpty(false);
      setIsLoginEmpty({ isLoginEmpty: false})
    }

    setState(event.target.value);
    console.log(event.target.value)
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ login, password });
    if(!login && !password){
      setLogPass({ logPass: true })
    }

    if(login.trim() === ""){
      setIsLoginEmpty({ isLoginEmpty: true})

    }

    if(password.trim() === ""){
      setIsPasswordEmpty({ isPasswordEmpty: true})

    }
  }


  return (
    <div className='InputContainer'>
      <form onSubmit={handleSubmit}>

      <label>
        <input className='loginInput' value={login} onChange={(event) => handleChange(event, setLogin)} name='login'  type='text' placeholder='User Name' />
        {isLoginEmpty && <p className='ErrorValid'>{emptyLogin}</p> }
      </label>
      

      <label>
        { passwordInput && <input className='loginInput password' value={password} onChange={(event) => handleChange(event, setPassword)} name='password'  type={isShowPassword ? "password" : "text"} placeholder='Password'/>  }
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