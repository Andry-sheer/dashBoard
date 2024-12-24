
import { Link, useNavigate } from "react-router-dom";
import { CiLock, CiUnlock } from "react-icons/ci";
import styles from "../../styles/User.module.css";
import MyButton from "../MyButton/MyButton";
import { IoChevronBack } from "react-icons/io5";

const User = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const singOut = () => {
    navigate(0);
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
  }
  
  return (
    <Link className={styles.link}>
      <div className={styles.user}>
        <span className={styles.name}>{user ? user : "user"}</span>
        <div className={styles.photo}>
          <div className={styles.avatar}>{user ? <CiUnlock size={40} fill="white" /> : <CiLock size={40} fill="white" />}</div>
        </div>
      </div>

      {user ? 
        <div className={styles.contr}>
          <MyButton className={styles.logOutButton} onClick={singOut} icon={<IoChevronBack size={20} />} textButton="Sing Out" />
          <MyButton className={styles.profileButton} icon={<IoChevronBack size={20} />} textButton="Profile" />
      </div> : null }
    </Link>
  )
}

export default User;