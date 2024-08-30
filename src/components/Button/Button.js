import "./Button.css";




const Button = ({  iconAdd, iconPreview, textButton, onClick }) => (
  <button type='button' className='Button' onClick={onClick} textButton={textButton}></button> );





// const Button = ({ Login, iconPreview, iconAdd }) => {
//   return (
//     <div className="ButtonContainer">
//       {Login && (
//         <button type="submit" className="Button">
//           {" "}
//           Login{" "}
//         </button>
//       )}

//       <div className="buttonContainerPreview">
//         {iconPreview && (
//           <button type="button" className="Button two">
//             <CgProfile className="iconButton" size="30px" /> Preview{" "}
//           </button>
//         )}
//       </div>

//       <div className="buttonContainerAdd">
//         {iconAdd && (
//           <button type="button" className="Button two">
//             <IoMdAdd className="iconButton" size="30px" /> Add Product{" "}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

export default Button;
