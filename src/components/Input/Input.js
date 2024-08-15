
import './Input.css'
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';


const Input = ({ PasswordInput }) => {

  const [ isShowPass, setIsHidePass ] = useState(true);

  const handleClick = () => {
    setIsHidePass( prevIsShowPass => !prevIsShowPass );
  }

  return (
    <div className='InputContainer'>
      <input className='loginInput' type='text' placeholder='User Name' />
      { PasswordInput && <input className='loginInput password' type='password' placeholder='Password'/>  }

      <button onClick={handleClick} className='buttonEye'>
        {isShowPass ? <IoMdEye size='30px' color='green' /> : 
        <IoMdEyeOff size='30px' color='green' /> }
      </button>
    </div>
  );
};



export default Input;