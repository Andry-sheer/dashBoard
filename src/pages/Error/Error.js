
import './Error.css';
import "../../mobile/Error/ErrorMobile.css";
import logo from '../../assets/pagesLogo.svg'

const Error = () => (
  <div className='ErrorContainer'>
    <img className='ErrorImage' src={logo} alt='logo' />
    <p className='ErrorDescription'>Sorry this page is not found | 404</p>
  </div>
  
)

export default Error;