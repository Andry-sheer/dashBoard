
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: 12,
  boxShadow: 24,
  p: 5,
  textAlign: 'center',
};

const textColor = {
  color: '#05BC52',
  fontWeight: 600,
}

const styleDelete = {
  color: 'white',
  fontWeight: 600,
  padding: 10,
  paddingLeft: 40,
  paddingRight: 40,
  background: 'red'
}

const styleCancel = {
  color: 'white',
  fontWeight: 600,
  padding: 10,
  paddingLeft: 40,
  paddingRight: 40,
  background: 'silver'
}

const ModalDelete =({onOpen, onClose, product, onDelete })=> {

  return (
    <div>
      <Modal open={onOpen}>
          <Box sx={style}>
            <div style={textColor} id="modal-modal-title" variant="h5" component="h2">
              Are u sure you want to delete this product?
            </div>

            <div style={{display: 'flex', justifyContent:'space-around', marginTop: '30px'}} id="modal-modal-description" sx={{ mt: 5 }}>
              <Button onClick={onClose} style={styleCancel}>Cancel</Button>
              <Button onClick={()=> onDelete(product)} style={styleDelete}>Delete</Button>
            </div>
          </Box>
      </Modal>
    </div>
    
  );
}


export default connect(null)(ModalDelete);