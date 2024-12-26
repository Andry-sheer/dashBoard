import { connect } from "react-redux";
import { addProducts, editProducts, resetForm } from "../../modules/actions/products";
import { RiCloseFill } from "react-icons/ri";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Formik/Formik";
import MyButton from "../MyButton/MyButton";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#F5F5FA",
  borderRadius: 4,
  boxShadow: 24,
  padding: 2,
  width: 500,

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px"
  },

  title: {
    fontSize: '20px',
    fontFamily: 'Inter',
    fontWeight: 600,
    color: '#726969',
  },

  buttonClose: {
    background: "transparent",
    border: 0,
    cursor: "pointer",
    padding: 0,
  }

};

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
    <div>
      <Modal open={onOpen}>
        <Box sx={styles}>
          <div className="header" style={styles.header}>
            <span className="title" style={styles.title}>{editId ? "EDIT PRODUCT" : "ADD PRODUCT"}</span>
              <MyButton
                className="buttonClose"
                style={styles.buttonClose}
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
