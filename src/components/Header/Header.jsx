
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { hideOverlay, showOverlay } from "../../modules/actions/overlay";
import { IoIosMenu } from "react-icons/io";
import styles from "../../styles/Header.module.scss";
import Avatar from "../../assets/profile.png";
import MyButton from "../MyButtons/MyButton";
import SideMenu from "../SideMenu/SideMenu";
import logo from "../../assets/graphics.svg";


const Header = ({ isVisible, hideOverlay, showOverlay, user }) => {
  const jwt = localStorage.getItem("jwt");

  return (
    <>
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logoLink}  to={jwt ? "/home" : null}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="Logo" />
          </div>
          <span className={styles.logoSpan}>{jwt ? "Admin panel" : "welcome to site"}</span>
        </Link>

        {jwt ?
          <div className={styles.profileContainer}>
            <Link className={styles.profileLink}  to="/profile">
              {/* <span className={styles.profileName}>{user ? user.name : "user"}</span> */}
              <img className={styles.profilePicture} src={user ? user.image : Avatar} alt="avatar" />
            </Link>
            
            { jwt ? 
              <MyButton className={styles.navButton} 
                onClick={showOverlay} 
                icon={<IoIosMenu fill="white" size={40} />} /> : null }
          </div> : null }
    </div>
  </header>

    <SideMenu isOpen={isVisible} onClose={hideOverlay} />
  </>  
  );
}

const mapStateToProps = (state) => ({
  isVisible: state.overlay.isVisible,
  user: state.login.user
});

export default connect(mapStateToProps, { hideOverlay, showOverlay })(Header);