
const MyButton = ({ className, type, icon, textButton, onClick, style }) => (
  <button style={style} type={type} className={className} onClick={onClick}>{icon}{textButton}</button> );

export default MyButton;
