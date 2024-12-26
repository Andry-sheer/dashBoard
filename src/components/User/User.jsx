
import { Link, useNavigate } from "react-router-dom";
import { CiLock, CiUnlock } from "react-icons/ci";
import { IoChevronBack } from "react-icons/io5";
import styles from "../../styles/User.module.css";
import MyButton from "../MyButton/MyButton";

const User = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const jwt = localStorage.getItem("jwt");

  const singOut = () => {
    navigate(0);
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
  }
  
  return (
    <Link className={styles.link}>
      <div className={styles.user}>
        <span className={styles.name}>{user && jwt ? user : "user"}</span>
        <div className={styles.photo}>
          <div className={styles.avatar}>{user && jwt ? <CiUnlock size={40} fill="white" /> : <CiLock size={40} fill="white" />}</div>
        </div>
      </div>

      {user && jwt ? 
        <div className={styles.contr}>
          <MyButton className={styles.logOutButton} onClick={singOut} icon={<IoChevronBack size={20} />} textButton="sing out" />
          <MyButton className={styles.profileButton} icon={<IoChevronBack size={20} />} textButton="profile" />
      </div> : null }
    </Link>
  )
}

export default User;