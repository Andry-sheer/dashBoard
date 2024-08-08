
import './Input.css'
import { IoMdEye } from 'react-icons/io';

const Input = ( {  PasswordInput, PassIcon } ) => {
  return (
    <label className={'loginLabel'}>
      <input className='loginInput' type='text' placeholder='User Name' />
      { PasswordInput && <input className='loginInput pass' type='password' placeholder='Password'/> } 
      { PassIcon && <IoMdEye className='loginEye' size='30px' color='green' /> }
    </label>
  );
};

export default Input;