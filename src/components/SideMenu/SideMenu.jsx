
import { NavLink } from "react-router-dom";
import styles from "../../styles/SideMenu.module.scss";
import Overlay from "../Overlay/Overlay";
import { connect } from "react-redux";
import { setUser } from "../../modules/actions/login";


const SideMenu = ({ isOpen, onClose, user }) => {

  return (
    <>
      {isOpen && <Overlay isActive={isOpen} onClick={onClose} />}
        <nav className={`${styles.sideMenu} ${isOpen? styles.sideMenu__visible : styles.sideMenu__hidden}`}>
          <div className={styles.sideMenu__container}>
            <h2 className={styles.sideMenu__title}>Menu</h2>
              <div className={styles.sideMenu__list}>
                <NavLink className={({isActive}) => isActive? `${styles.sideMenu__item_active}` : `${styles.sideMenu__item}`} onClick={onClose} to="/profile">profile</NavLink>
                <NavLink className={({isActive}) => isActive? `${styles.sideMenu__item_active}` : `${styles.sideMenu__item}`} onClick={onClose} to="/preview-page">preview</NavLink>
                {user.role === "Administrator" || user.role === "Moderator" ? 
                <NavLink className={({isActive}) => isActive? `${styles.sideMenu__item_active}` : `${styles.sideMenu__item}`} onClick={onClose} to="/product-page">home</NavLink>
                : null }
                <NavLink className={styles.sideMenu__item} onClick={onClose} to="#">coming soon...</NavLink>
              </div>
          </div>
        </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user
});

export default connect(mapStateToProps, { setUser })(SideMenu);
