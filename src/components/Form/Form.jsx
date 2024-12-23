

const Form = ({ children, className }) => {
  const onSubmit = (e)=> {
    e.preventDefault();
    console.log("reaction on func")
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;