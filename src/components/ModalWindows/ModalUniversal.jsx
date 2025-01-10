import { RiCloseFill } from "react-icons/ri";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MyButton from "../MyButton/MyButton";
import styles from "../../styles/ModalUniversal.module.scss";

const UniversalModal = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className={styles.modal}>
        <div className={styles.header}>
          {title && <span className={styles.title}>{title}</span>}
          <MyButton
            className={styles.close}
            type="button"
            onClick={onClose}
            icon={<RiCloseFill size={30} />}
          />
        </div>
        <div className={styles.content}>{children}</div>
      </Box>
    </Modal>
  );
};

export default UniversalModal;
