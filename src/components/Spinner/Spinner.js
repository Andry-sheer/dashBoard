
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const BasicSpinner = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="success" size={40}/>
    </Box>
  );
}

export default BasicSpinner;