
import './Input.css'
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';


const Input = ({ passwordInput }) => {

  const [ isType, setIsType] = useState(true);

  const handleClickShowPassword = () => {
    setIsType(prevIsType => !prevIsType);
  }

  return (
    <div className='InputContainer'>
      <input className='loginInput' type='text' placeholder='User Name' />
      { passwordInput && <input className='loginInput password' type={isType ? "password" : "text"} placeholder='Password'/>  }

      <button onClick={handleClickShowPassword}  className='buttonEye'>
        {isType ? <IoMdEye size='30px' title='Show password' color='green' /> : 
        <IoMdEyeOff size='30px' title='Hide password' color='green' /> }
      </button>
    </div>
  );
};



export default Input;