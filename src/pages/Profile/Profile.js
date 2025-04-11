
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUser } from "../../modules/actions/login";
import { FaSignOutAlt } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsPersonLinesFill } from "react-icons/bs";
import Avatar from "../../assets/profile.png";
import styles from "../../styles/Profile.module.scss";
import MyButton from "../../components/MyButtons/MyButton";
import UniversalModal from "../../components/ModalWindows/ModalUniversal";



const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [isOpen, onClose] = useState(false);


  const handleSingOut = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      storedUsers.map((u) =>
        u.id === savedUser.id ? { ...u, status: false } : u
      );
  
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");
      localStorage.removeItem("users");
    }

    user.status = false;
    navigate("/sing-in");
  };
  

  return (
    <div className={styles.user}>
      <div className={styles.user__container}>

        <div className={styles.user__containerInfo}>
          <div className={styles.user__blockImage}>
            <div className={user.role === "Administrator" ? styles.user__photo_admin : null ||
              user.role === "Moderator" ? styles.user__photo_moderator : null || styles.user__photo }>
              <img className={styles.user__image} src={user.image ? user.image : Avatar} alt="profile avatar" />
            </div>
            <div className={styles.user__status}>
              <span className={user.status ? styles.user__dottedOnline : styles.user__dottedOffline}></span>
            </div>
          </div>
            <div className={styles.user__info}>
              <span className={user.role === "Administrator" ? styles.user__name_admin : null || 
                user.role === "Moderator" ? styles.user__name_moderator : null || styles.user__name }>{user.name}</span>
              { user.role === "Administrator" || user.role === "Moderator" ? <span className={styles.user__slash}> | </span>  : null }
              { user.role !== "Administrator" && user.role !== "Moderator" ? 
                null : <span className={styles.user__role}>{user.role}</span>}
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

          {user.role !== "Administrator" && user.role !== "Moderator" ? null :
              <MyButton 
              className={styles.user__editUsers} 
              textButton="User list"
              onClick={()=> {
                navigate("/users");
              }}
              icon={<BsPersonLinesFill />}
              styleRightIcon={styles.user__rightIcon}
              rightIcon={<RiArrowRightSLine />}
            />
          }

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
  user: state.login.user
});

export default connect(mapStateToProps, { setUser })(Profile);