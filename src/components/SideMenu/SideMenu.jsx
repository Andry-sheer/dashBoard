
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/SideMenu.module.scss";
import Overlay from "../Overlay/Overlay";
import MyButton from "../MyButtons/MyButton";
import { FaSignOutAlt } from "react-icons/fa";

const SideMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleSingOut =()=> {
    navigate(0);
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
  }

  return (
    <>
      {isOpen && <Overlay isActive={isOpen} onClick={onClose} />}
        <div className={`${styles.sideMenu} ${isOpen? styles.sideMenu__visible : styles.sideMenu__hidden}`}>
          <div className={styles.sideMenu__container}>
            <h2 className={styles.sideMenu__title}>Menu</h2>
            <div className={styles.sideMenu__list}>
              <Link className={styles.sideMenu__item} onClick={onClose} to="/profile">profile</Link>
              <Link className={styles.sideMenu__item} onClick={onClose} to="/preview-page">preview</Link>
              <Link className={styles.sideMenu__item} onClick={onClose} to="/product-page">home</Link>
              <Link className={styles.sideMenu__item} onClick={onClose} to="#more">...</Link>
          </div>
          
          </div>
          <MyButton className={styles.sideMenu__singOutButton} textButton="sing out" onClick={handleSingOut} icon={<FaSignOutAlt />} />
        </div>
    </>
  );
};

export default SideMenu;
