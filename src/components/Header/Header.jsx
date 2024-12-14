
import styles from "../../styles/Header.module.css";
import Logo from "../../assets/pagesLogo.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <header className={styles.header}>
    <Link to="/product-page">
      <img className={styles.logo} src={Logo} alt="Logo" />
    </Link>
  </header>
)

export default Header;