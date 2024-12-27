import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

  export const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderRadius: "12px",
      color: '#44b26f', 
      fontWeight: 600,
      
      '& fieldset': {
        borderColor: '#44b26f',
      },
      '&:hover fieldset': {
        borderColor: '#44b26f',
        cursor: 'pointer',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#44b26f',
        color: '#44b26f',
      },
    },

    '& .MuiInputLabel-root': {
      color: '#44b26f',
      fontWeight: 600,

      '&.Mui-focused': {
        color: '#44b26f',
      },
    },


    '& .Mui-error': {
      color: 'red',

      '& fieldset': {
        borderColor: 'red',
      },
      
      '&:hover fieldset': {
        borderColor: 'red',
      },

      '&.Mui-focused fieldset': {
        borderColor: 'red',
        color: 'red',
      },

      '&.MuiInputLabel-root': {
        color: 'red',
      }
    }
  });