
import './Input.css'
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';


const Input = ({ loginInput, onChange, passwordInput }) => {

  const [ isShowPassword, setIsShowPassword] = useState(true);

  const handleClickShowPassword = () => {
    setIsShowPassword(prevIsShowPassword=> !prevIsShowPassword);
  }


  return (
    <div className='InputContainer'>
        {loginInput && <input className='loginInput' onChange={onChange} type='text' placeholder='User Name' />}

      <div className='passwordAndButtonEye'>
        { passwordInput && <input className='loginInput password' onChange={onChange} type={isShowPassword ? "password" : "text"} placeholder='Password'/> }
          <button onClick={handleClickShowPassword} type='button' className='buttonEye'>
            {isShowPassword ? <IoMdEye size='30px' title='Show password' color='green' /> : 
            <IoMdEyeOff size='30px' title='Hide password' color='green' /> }
          </button>
      </div>
    </div>
  );
};


export default Input;