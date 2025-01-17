
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/constants";
import Avatar from "../../../assets/profile.png";
import styles from "../../../styles/Profile.module.scss";
import { RiArrowRightSLine} from "react-icons/ri";
import MyButton from "../../../components/MyButtons/MyButton";
import { FaUserPlus } from "react-icons/fa6";
import { MdBlockFlipped } from "react-icons/md";


const Profiles = () => {
  const { id } = useParams();

    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [isError, setIsError] = useState(false);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetchUsers();
        // eslint-disable-next-line
    }, []);

      const fetchUsers = async () => {
        try {
          const response = await fetch(`${API_URL}/users/${id}`);
    
          if (!response.ok) {
            throw new Error("Something Error");
          }
    
          const usersData = await response.json();
          setUsers(usersData);
          setIsLoading(false);
    
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
        }
      };

  return (
    <div className={styles.user}>
      <div className={styles.user__container}>

        <div className={styles.user__containerInfo}>
          <div className={styles.user__blockImage}>
            <div className={users?.role === "Administrator" ? styles.user__photo_admin : null ||
              users?.role === "Moderator" ? styles.user__photo_moderator : null || styles.user__photo }>
              <img className={styles.user__image} src={users?.image ? users.image : Avatar} alt="profile avatar" />
            </div>
            <div className={styles.user__status}>
              <span className={users?.status ? styles.user__dottedOnline : styles.user__dottedOffline}></span>
            </div>
          </div>
            <div className={styles.user__info}>
              <span className={users?.role === "Administrator" ? styles.user__name_admin : null || 
                users?.role === "Moderator" ? styles.user__name_moderator : null || styles.user__name }>{users?.name}</span>
              { users?.role === "Administrator" || users?.role === "Moderator" ? <span className={styles.user__slash}> | </span>  : null }
              { users?.role !== "Administrator" && users?.role !== "Moderator" ? 
                null : <span className={styles.user__role}>{users?.role}</span>}
            </div>
          <p className={styles.user__email}>{users?.email}</p>
        </div>

                <div className={styles.user__containerButtons}>

          <MyButton 
            className={styles.user__editProfile} 
            textButton="follow"
            onClick={()=> (console.log("click edit button"))}
            icon={<FaUserPlus />}
            styleRightIcon={styles.user__rightIcon}
            rightIcon={<RiArrowRightSLine />}
          />

          <MyButton 
            className={styles.user__editPassword} 
            textButton="block user"
            onClick={()=> (console.log("click change password button"))}
            icon={<MdBlockFlipped />}
            styleRightIcon={styles.user__rightIcon}
            rightIcon={<RiArrowRightSLine />}
          />
        </div>

        </div>
      </div>
  )
}

export default Profiles;