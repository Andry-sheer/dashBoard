
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

  const borderRole = () => {
    const classes = [styles.profilePicture]
    
    if (user.role === 'Administrator'){
        classes.push(styles.profilePicture__admin);
    }

    if (user.role === 'Moderator'){
      classes.push(styles.profilePicture__moderator) 
    }

    return classes.join(' ')
  }

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

        {user?.status ?
          <div className={styles.profileContainer}>
            <Link className={styles.profileLink}  to="/profile">
              <img className={borderRole(user.role)} src={user?.image ? user.image : Avatar} alt="avatar" />
            </Link>
            
            <MyButton className={styles.navButton} 
              onClick={showOverlay} 
              icon={<IoIosMenu fill="white" size={40} />} />
          </div> : null}
    </div>
  </header>

    <SideMenu isOpen={isVisible} onClose={hideOverlay} />
  </>  
  );
}

const mapStateToProps = (state) => ({
  isVisible: state.overlay.isVisible,
  user: state.login.user,
  out: state.login.out
});

export default connect(mapStateToProps, { hideOverlay, showOverlay })(Header);