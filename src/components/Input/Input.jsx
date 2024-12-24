
const Input = ({
  className,
  name,
  type,
  onChange,
  handleChange,
  placeholder,
  icon,
  value,
  autoComplete,
  required
}) => {

  const handleOnChange = (e)=> {
    if (onChange) {
      onChange(e);
    }

    else if (handleChange) {
      handleChange(e.target.value);
    } 
  }

  return (
    <input
      className={className}
      name={name}
      type={type}
      onChange={handleOnChange}
      value={value}
      placeholder={placeholder}
      icon={icon}
      autoComplete={autoComplete}
      required={required}
    />
  );
}

export default Input;