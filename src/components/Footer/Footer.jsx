import styles from "../../styles/Footer.module.scss";
import Logo from "../../assets/pagesLogo.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  const user = localStorage.getItem("user");
  const jwt = localStorage.getItem("jwt");

  return (
    <footer className={styles.footer}>
      <Link to={user && jwt ? "/product-page" : null}>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </Link>
      <Link
        className={styles.link}
        to="https://github.com/Andry-sheer"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        develop by <span className={styles.author}>Andrew</span>
      </Link>
    </footer>
  );
}

export default Footer;
