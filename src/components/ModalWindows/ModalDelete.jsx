
import { connect } from 'react-redux';
import { RiCloseFill } from "react-icons/ri";
import Box from '@mui/material/Box';
import MyButton from '../MyButton/MyButton';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  box: {
    background: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    borderRadius: 8,
    boxShadow: 24,
    padding: "32px",
    textAlign: 'center',
    fontFamily: 'Inter'
  },

  header: {
    position: 'relative',
    marginBottom: "16px"
  },

  title: {
    color: '#000',
    fontWeight: 600,
    fontSize: '20px',
    textTransform: "uppercase"
  },

  close: {
    background: 'transparent',
    position: 'absolute',
    top: "-20px",
    right: "-20px",
  },

  name: {
    color: "#726969",
    fontSize: "18px",
    padding: "0 0 5px 0",
    fontWeight: 600,

    display: "inline-block",
    marginBottom: "24px"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    alignItems: "center",
  },

  cancel: {
    color: 'white',
    fontWeight: 600,
    padding: "10px 50px",
    background: 'silver'
  },

  delete: {
    color: 'white',
    fontWeight: 600,
    padding: "10px 50px",
    background: 'red'
  }
};


const ModalDelete =({ onOpen, onClose, product, onDelete })=> {

  return (
    <div className="modalDelete">
      <Modal open={onOpen}>
          <Box style={style.box}>
            <div style={style.header}>
              <p style={style.title}>delete this product? </p>

              <MyButton style={style.close} type="button" onClick={onClose} icon={<RiCloseFill fill='black' size={30}/>} />
            </div>

            <div style={style.name}>{product.name}</div>

            <div style={style.buttons}>
              <Button onClick={onClose} style={style.cancel}>Cancel</Button>
              <Button onClick={()=> onDelete(product)} style={style.delete}>Delete</Button>
            </div>
          </Box>
      </Modal>
    </div>
    
  );
}


export default connect(null)(ModalDelete);