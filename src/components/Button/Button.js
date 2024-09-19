
const ButtonX = ({ className, type, icon, textButton, onClick }) => (
  <button type={type} className={className} onClick={onClick}>{icon}{textButton}</button> );

export default ButtonX;   
