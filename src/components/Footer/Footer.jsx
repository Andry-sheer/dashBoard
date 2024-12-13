import styles from "../../styles/Footer.module.css";
import Logo from "../../assets/pagesLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className={styles.footer}>
    <Link to="/product-page">
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

export default Footer;
