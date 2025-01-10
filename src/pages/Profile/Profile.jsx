
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/profile.png";
import styles from "../../styles/Profile.module.scss";
import MyButton from "../../components/MyButtons/MyButton";
import { FaSignOutAlt } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import UniversalModal from "../../components/ModalWindows/ModalUniversal";
import { useState } from "react";



const Profile = () => {
  const [isOpen, onClose] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const jwt = localStorage.getItem("jwt");

  const singOut = () => {
    navigate(0);
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
  }

  return (
    <div className={styles.user}>
      <div className={styles.user__container}>

        <div className={styles.user__containerInfo}>
          <div className={styles.user__photo}>
            <img className={styles.user__image} src={Avatar} alt="profile avatar" />
          </div>
          <p className={styles.user__name}>{user}</p>
          <p className={styles.user__email}>email@example.com</p>
        </div>

        <div className={styles.user__containerButtons}>

          <MyButton 
            className={styles.user__editProfile} 
            textButton="Edit profile"
            onClick={()=> ("")}
            icon={<RiEdit2Fill />}
            styleRightIcon={styles.user__rightIcon}
            rightIcon={<RiArrowRightSLine />}
          />

          <MyButton 
            className={styles.user__editPassword} 
            textButton="Change password"
            onClick={()=> ("")}
            icon={<FaLock />}
            styleRightIcon={styles.user__rightIcon}
            rightIcon={<RiArrowRightSLine />}
          />

          <span className={styles.user__divider}></span>

          <MyButton 
            className={styles.user__singOut} 
            onClick={()=> onClose(!isOpen)}
            textButton="Log out"
            icon={<FaSignOutAlt />}
          />

          <UniversalModal 
            isOpen={isOpen} 
            onClose={()=> onClose(!isOpen)}
            title="Do you want exit?">

              <MyButton 
                className={styles.user__logOut} 
                onClick={singOut}
                textButton="Log out"
              />

              <MyButton 
                className={styles.user__cancel} 
                onClick={()=> onClose(!isOpen)}
                textButton="Cancel"
              />

          </UniversalModal>

        </div>
      </div>
    </div>
  )
}

export default Profile;