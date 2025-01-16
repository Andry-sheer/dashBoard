
import styles from "../../styles/Overlay.module.scss";

const Overlay = ({ isActive, onClick }) => {
  if (!isActive) return null;

  return <div className={styles.overlay} onClick={onClick}></div>
}

export default Overlay;