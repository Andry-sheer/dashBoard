
import styles from '../../styles/Error.module.css'
import logo from '../../assets/pagesLogo.svg'

const Error = () => (
  <div className={styles.ErrorContainer}>
    <img className={styles.ErrorImage} src={logo} alt='logo' />
    <p className={styles.ErrorDescription}>Sorry this page is not found | 404</p>
  </div>
  
)

export default Error;