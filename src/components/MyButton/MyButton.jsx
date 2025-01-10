
const MyButton = ({ className, type, icon, textButton, onClick, style, rightIcon, styleRightIcon }) => (
  <button style={style} type={type} className={className} onClick={onClick}>
      {icon}{textButton}{rightIcon && <span className={styleRightIcon}>{rightIcon}</span>}
    </button> 
  );

export default MyButton;
