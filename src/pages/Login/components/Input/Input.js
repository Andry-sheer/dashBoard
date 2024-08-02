
import './Input.css'
import { IoMdEye } from 'react-icons/io';

const Input = ( { PassIcon } ) => {
  return (
    <label className={'loginLabel'}>
      <input className='loginInput' type='text' placeholder='User Name' />
      { PassIcon && <IoMdEye className='loginEye' size='30px' color='green' />  }
    </label>
    
  );
};

export default Input;