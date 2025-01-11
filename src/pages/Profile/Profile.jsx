
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setUser } from "../../modules/actions/login";
import { FaSignOutAlt } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import Avatar from "../../assets/profile.png";
import styles from "../../styles/Profile.module.scss";
import MyButton from "../../components/MyButtons/MyButton";
import UniversalModal from "../../components/ModalWindows/ModalUniversal";


const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isOpen, onClose] = useState(false);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (!user && jwt) {
      const saveUser = localStorage.getItem("user");

      if (saveUser){
        setUser(JSON.parse(saveUser));
      }
    } else if (!jwt) {
      navigate("/sing-in");
    }

  }, [user, jwt, setUser, navigate]);

  const handleSingOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user")
    navigate(0 , "/sing-in");
  }

  return (
    <div className={styles.user}>
      <div className={styles.user__container}>

        <div className={styles.user__containerInfo}>
          <div className={user.role === "Administrator" ? styles.user__photo_admin : null ||
            user.role === "Moderator" ? styles.user__photo_moderator : null || user.role === "user" ? styles.user__photo : null
          }>
            <img className={styles.user__image} src={user.image ? user.image : Avatar} alt="profile avatar" />
          </div>
            <div className={styles.user__info}>
              <span className={user.role === "Administrator" ? styles.user__name_admin : null || 
                user.role === "Moderator" ? styles.user__name_moderator : null || user.role === "user" ? styles.user__name : null}>{user.name}</span>
              { user.role === "Administrator" || user.role === "Moderator" ? <span className={styles.user__slash}> | </span>  : null }
              { user.role === "Administrator" || user.role === "Moderator" ? 
                <span className={styles.user__role}>{user.role}</span> : null }
            </div>
          <p className={styles.user__email}>{user.email}</p>
        </div>

        <div className={styles.user__containerButtons}>

          <MyButton 
            className={styles.user__editProfile} 
            textButton="Edit profile"
            onClick={()=> (console.log("click edit button"))}
            icon={<RiEdit2Fill />}
            styleRightIcon={styles.user__rightIcon}
            rightIcon={<RiArrowRightSLine />}
          />

          <MyButton 
            className={styles.user__editPassword} 
            textButton="Change password"
            onClick={()=> (console.log("click change password button"))}
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
                onClick={handleSingOut}
                textButton="Log out"
                aria-label="log Out"
              />

              <MyButton 
                className={styles.user__cancel} 
                onClick={()=> onClose(!isOpen)}
                textButton="Cancel"
                aria-label="cancel"
              />
          </UniversalModal>

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.login.user,
});

const mapDispatchToProps = {
  setUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);