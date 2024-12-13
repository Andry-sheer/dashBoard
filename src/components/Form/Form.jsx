

const Form = ({ handleSubmit, children, className, onClose }) => {
  const onSubmit = (e)=> {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;