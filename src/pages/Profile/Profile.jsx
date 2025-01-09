
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../assets/profile.png";
import styles from "../../styles/Profile.module.scss";
import MyButton from "../../components/MyButton/MyButton";
import { FaSignOutAlt } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";



const Profile = () => {
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

        <div className={styles.user__edit} >
          <MyButton 
            className={styles.user__editProfile} 
            textButton="Edit profile"
            onClick={()=> ("")}
            icon={<RiEdit2Fill />}
          />
          <RiArrowRightSLine size={25} className={styles.user__rightIcon} />
        </div>

        <div className={styles.user__edit}>
          <MyButton 
            className={styles.user__editProfile} 
            textButton="Change password"
            onClick={()=> ("")}
            icon={<FaLock />}
          />
          <RiArrowRightSLine size={25} className={styles.user__rightIcon} />
        </div>

        <span className={styles.user__divider}></span>

        <MyButton 
          className={styles.user__singOut} 
          onClick={singOut}
          textButton="Log out"
          icon={<FaSignOutAlt />}
        />

      </div>
    </div>
    </div>
  )
}

export default Profile;