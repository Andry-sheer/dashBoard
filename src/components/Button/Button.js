import './Button.css';
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";

const textButtonOne = "Login";
const textButtonTwo = 'Preview';
const textButtonThree = 'Add Product';

const Button = ({  Login, iconPreview, iconAdd }) => {
  return (
  <div className='ButtonContainer'>

      {Login && <button type='button' className='Button'> {textButtonOne} </button>}

    <div className='buttonContainerPreview'>
      {iconPreview && <button type='button' className='Button two'><CgProfile className='iconButton' size="30px" /> {textButtonTwo} </button>}
    </div>
    
    <div className='buttonContainerAdd'>
      {iconAdd &&  <button type='button' className='Button two'><IoMdAdd className='iconButton' size="30px" /> {textButtonThree} </button>}
    </div>

  </div>
  )
}

export default Button;