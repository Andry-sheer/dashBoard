
import { useDispatch } from "react-redux";
import { updateForm } from "../../modules/actions/products";
import { RiCloseFill } from "react-icons/ri";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Form/Form";
import Input from "../Input/Input";
import MyButton from "../MyButton/MyButton";
import style from "../../styles/Form.module.css";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#D9D9D9",
  borderRadius: 4,
  boxShadow: 24,
  padding: 2,
  width: 500,
};

const ModalEdit = ({onOpen, onClose, onSave, form, isEdit}) => {

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateForm(name, value));
  };

  return (
    <div>
      <Modal open={onOpen} onClose={onClose}>
        <Box sx={styles}>
          <Form className={style.form} onSubmit={(event)=> event.preventDefault()}>
            <div className={style.header}>
              <span className={style.title}>{isEdit ? "edit product" : "add product"}</span>
              <MyButton className={style.buttonClose} onClick={onClose} icon={<RiCloseFill size={30}/>} />
            </div>
            <label className={style.label}> Category
              <Input className={style.input} type='text' onChange={handleChange} value={form.category} name='category' required />
            </label>
            <label className={style.label}> Name
              <Input className={style.input} type='text' onChange={handleChange} value={form.name} name='name' required />
            </label>
            <label className={style.label}> Quantity
              <Input className={style.input} type='number' onChange={handleChange} value={form.quantity} name='quantity' required />
            </label>
            <label className={style.label}> Price
              <Input className={style.input} type='number' onChange={handleChange} value={form.price} name='price' required />
            </label>
            <label className={style.label}> Descriptions
              <Input className={style.input} type='text' onChange={handleChange} value={form.descriptions} name='descriptions' autoComplete="off" required />
            </label>

            <label className={style.label}> image
              <Input className={style.input} type='text' onChange={handleChange} value={form.image} name='image' autoComplete="off" placeholder="please enter images url address..." required />
            </label>
            <div className={style.footer}>
              <MyButton type='button' className={style.buttonCancel} onClick={onClose} textButton='Cancel' />
              <MyButton type='submit' className={style.buttonSubmit} onClick={onSave} textButton='Submit' />
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalEdit;
