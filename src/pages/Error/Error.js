
import styles from '../../styles/Error.module.scss';
import { IoIosWarning } from "react-icons/io";


const Error = () => (
  <div className={styles.Error}>
    <img className={styles.logo} src={<IoIosWarning />} alt='logo' />
    <p className={styles.description}>Page is not found | 404</p>
  </div>
  
)

export default Error;