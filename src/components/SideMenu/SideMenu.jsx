
import { NavLink } from "react-router-dom";
import styles from "../../styles/SideMenu.module.scss";
import Overlay from "../Overlay/Overlay";


const SideMenu = ({ isOpen, onClose }) => {

  return (
    <>
      {isOpen && <Overlay isActive={isOpen} onClick={onClose} />}
        <nav className={`${styles.sideMenu} ${isOpen? styles.sideMenu__visible : styles.sideMenu__hidden}`}>
          <div className={styles.sideMenu__container}>
            <h2 className={styles.sideMenu__title}>Menu</h2>
              <div className={styles.sideMenu__list}>
                <NavLink className={({isActive}) => isActive? `${styles.sideMenu__item_active}` : `${styles.sideMenu__item}`} onClick={onClose} to="/profile">profile</NavLink>
                <NavLink className={({isActive}) => isActive? `${styles.sideMenu__item_active}` : `${styles.sideMenu__item}`} onClick={onClose} to="/preview-page">preview</NavLink>
                <NavLink className={({isActive}) => isActive? `${styles.sideMenu__item_active}` : `${styles.sideMenu__item}`} onClick={onClose} to="/product-page">home</NavLink>
                <NavLink className={styles.sideMenu__item} onClick={onClose} to="#">coming soon...</NavLink>
              </div>
          </div>
        </nav>
    </>
  );
};

export default SideMenu;
