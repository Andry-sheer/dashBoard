import { connect } from "react-redux";
import { addProducts, editProducts, resetForm } from "../../modules/actions/products";
import { RiCloseFill } from "react-icons/ri";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Formik/Formik";
import MyButton from "../MyButton/MyButton";
import styles from "../../styles/ModalEdit.module.scss";

const ModalEdit = ({
  onOpen,
  onClose,
  editId,
  addProducts,
  editProducts,
  resetForm,
}) => {

  const closeModal = ()=> {
    resetForm()
    onClose();
  }

  return (
    <div className={editId ? "modalEdit" : "modalAdd"}>
      <Modal open={onOpen}>
        <Box className={styles.modal}>
          <div className={styles.header}>
            <span className={styles.title}>{editId ? "EDIT PRODUCT" : "ADD PRODUCT"}</span>
              <MyButton
                className={styles.buttonClose}
                onClick={closeModal}
                icon={<RiCloseFill size={30} />}
              />
            </div>
          <Form handleSubmit={editId ? editProducts : addProducts } onClose={onClose} editId={editId} />
        </Box>
      </Modal>
    </div>
  );
};

const mapState = (state) => ({
  editId: state.products.editId,
});

export default connect(mapState, { resetForm, addProducts, editProducts })(ModalEdit);
