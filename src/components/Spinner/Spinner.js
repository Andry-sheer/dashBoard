

import Spinner from 'react-bootstrap/Spinner';

const BasicSpinner = () => {
  return (
    <Spinner animation="border" role="status" variant="success">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default BasicSpinner;