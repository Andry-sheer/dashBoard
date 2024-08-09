import './Button.css';
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";

const Button = ({ iconPreview, iconAdd }) => {

const textButtonOne = 'Preview';
const textButtonTwo = 'Add Product';
const textButtonThree = '';

  return (
    <div>
      <div className='butonContainerOne'>
        <button type='button' className='Button'> {textButtonOne}
          {iconPreview && <CgProfile className='iconPreview' size="30px" /> }
        </button>
      </div>

      <div className='butonContainerTwo'>
        <button type='button' className='Button'> {textButtonTwo}
          {iconAdd && <IoMdAdd className='iconPreview' size="30px" /> }
        </button>
      </div>
    </div>
  )
}
//
export default Button; 