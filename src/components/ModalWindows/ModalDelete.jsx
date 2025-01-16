
import { RiCloseFill } from "react-icons/ri";
import Box from '@mui/material/Box';
import MyButton from '../MyButtons/MyButton';
import Modal from '@mui/material/Modal';
import styles from "../../styles/ModalDelete.module.scss";


const ModalDelete =({ onOpen, onClose, product, onDelete })=> {

  return (
    <div className="modalDelete">
      <Modal open={onOpen}>
          <Box className={styles.modal}>
            <div className={styles.header}>
              <p className={styles.title}>delete this product? </p>

              <MyButton className={styles.close} type="button" onClick={onClose} icon={<RiCloseFill fill='black' size={30}/>} />
            </div>

            <div className={styles.name}>{product.name}</div>

            <div className={styles.buttons}>
              <MyButton onClick={onClose} className={styles.cancel} textButton="Cancel" />
              <MyButton onClick={()=> onDelete(product)} className={styles.delete} textButton="Delete" />
            </div>
          </Box>
      </Modal>
    </div>
    
  );
}


export default ModalDelete;