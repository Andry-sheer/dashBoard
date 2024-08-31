import "./Input.css";

const Input = ({ className, name, type, onChange, placeholder, icon }) => (
  <input className={className} name={name} type={type} onChange={onChange} placeholder={placeholder} icon={icon} /> );

export default Input;
