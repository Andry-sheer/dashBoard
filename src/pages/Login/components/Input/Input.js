
import './Input.css'
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from "react-icons/io"; 


const Input = ( {  PasswordInput } ) => {
  return (
    <label className={'loginLabel'}>
      <input className='loginInput' type='text' placeholder='User Name' />
      { PasswordInput && <input className='loginInput pass' type='password' placeholder='Password'/> } 
      <button className='buttonEye' id='buttonEyeId'> <IoMdEye className='loginEyeIcon' size='30px' color='green' /> <IoMdEyeOff className='loginEyeIcon loginEyeHideIcon' size='30px' color='green' /> </button>
    </label>
  );
};



export default Input;