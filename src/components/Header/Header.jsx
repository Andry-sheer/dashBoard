
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import styles from "../../styles/Header.module.scss";
import Logo from "../../assets/pagesLogo.svg";
import MyButton from "../MyButton/MyButton";
import SideMenu from "../SideMenu/SideMenu";
import { hideOverlay, showOverlay } from "../../modules/actions/overlay";

const Header = ({ isVisible, hideOverlay, showOverlay }) => {
  const user = localStorage.getItem("user");
  const jwt = localStorage.getItem("jwt");

  return (
    <>
  <header className={styles.header}>
    <Link  to={user && jwt ? "/product-page" : null}>
      <img className={styles.logo} src={Logo} alt="Logo" />
    </Link>

    <MyButton className={styles.navButton} 
      onClick={user && jwt ? showOverlay : null} 
      icon={<IoIosMenu fill="white" size={40} />}
    />
  </header>

    <SideMenu isOpen={isVisible} onClose={hideOverlay} />
  </>  
  );
}

const mapStateToProps = (state) => ({
  isVisible: state.overlay.isVisible
});

export default connect(mapStateToProps, { hideOverlay, showOverlay })(Header);