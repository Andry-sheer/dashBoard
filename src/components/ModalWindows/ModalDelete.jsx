
import { connect } from 'react-redux';
import { RiCloseFill } from "react-icons/ri";
import Box from '@mui/material/Box';
import MyButton from '../MyButton/MyButton';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  paddingTop: '40px',
  paddingBottom: '40px',
  textAlign: 'center',
  fontFamily: 'Inter'
};

const header = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
}

const buttonClose = {
  background: 'transparent'
}

const textColor = {
  color: '#05BC52',
  fontWeight: 600,
  fontSize: '20px'
}

const styleDelete = {
  color: 'white',
  fontWeight: 600,
  padding: 10,
  paddingLeft: 70,
  paddingRight: 70,
  background: 'red'
}

const styleCancel = {
  color: 'white',
  fontWeight: 600,
  padding: 10,
  paddingLeft: 70,
  paddingRight: 70,
  background: 'silver'
}

const ModalDelete =({onOpen, onClose, product, onDelete })=> {
  const handleDelete = () => {
    onDelete(product);
    onClose();
  }

  return (
    <div>
      <Modal open={onOpen} onClose={onClose}>
          <Box sx={style}>
            <div style={header}>
              <p style={textColor}>
                Are u sure you want to delete this product?
              </p>
              <MyButton style={buttonClose} type="button" onClick={onClose} icon={<RiCloseFill fill='black' size={30}/>} />
            </div>

            <div style={{display: 'flex', justifyContent:'space-around', marginTop: '30px'}} id="modal-modal-description" sx={{ mt: 5 }}>
              <Button onClick={onClose} style={styleCancel}>Cancel</Button>
              <Button onClick={handleDelete} style={styleDelete}>Delete</Button>
            </div>
          </Box>
      </Modal>
    </div>
    
  );
}


export default connect(null)(ModalDelete);