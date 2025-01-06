
import styles from '../../styles/Error.module.scss';
import logo from '../../assets/pagesLogo.svg';

const Error = () => (
  <div className={styles.Error}>
    <img className={styles.logo} src={logo} alt='logo' />
    <p className={styles.description}>Page is not found | 404</p>
  </div>
  
)

export default Error;