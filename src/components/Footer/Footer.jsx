import { Link } from "react-router-dom";
import styles from "../../styles/Footer.module.scss";
import Logo from "../../assets/graphics.svg";


const Footer = () => {
  const jwt = localStorage.getItem("jwt");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link className={styles.logoLink} to={jwt ? "/home" : null}>
          <div className={styles.logoContainer} >
            <img className={styles.logo} src={Logo} alt="Logo" />
          </div>
          <span className={styles.logoSpan}>{jwt ? "Admin panel" : "welcome to site"}</span>
        </Link>

        <Link
          className={styles.link}
          to="https://github.com/Andry-sheer"
          referrerPolicy="no-referrer"
          target="_blank" >
            develop by <span className={styles.author}>Andrew</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
