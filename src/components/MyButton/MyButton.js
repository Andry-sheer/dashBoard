
const MyButton = ({ className, type, icon, textButton, onClick }) => (
  <button type={type} className={className} onClick={onClick}>{icon}{textButton}</button> );

export default MyButton;   
