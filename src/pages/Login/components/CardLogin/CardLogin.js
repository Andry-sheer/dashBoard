// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoMdEye } from "react-icons/io";
// import { IoMdEyeOff } from "react-icons/io";
// import loginLogo from "../../../../assets/loginLogo.svg";
// import Input from "../../../../components/Input/Input";
// import MyButton from "../../../../components/MyButton/MyButton";
// import styles from "../../../../styles/CardLogin.module.css";
// import { PiWarningOctagonBold } from "react-icons/pi";


// const CardLogin = () => {

//   const emptyLogin = "Login is Empty";
//   const emptyPassword = "Password is Empty";
//   const emptyLogPass = "Login & Password is Empty";
//   const userInvalid = "user invalid!";

//   const [isShowPassword, setIsShowPassword] = useState(true);

//   const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
//   const [isLoginEmpty, setIsLoginEmpty] = useState(false);
//   const [logPass, setLogPass] = useState(false);
//   const [isUserInvalid, setIsUserInvalid] = useState(false);

//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleClickShowPassword = () => {
//     setIsShowPassword((prevIsShowPassword) => !prevIsShowPassword);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === "login") {
//       setLogin(value);
//       setIsLoginEmpty(false);
//       setLogPass(false);
//       setIsUserInvalid(false);
//     }

//     if (name === "password") {
//       setPassword(value);
//       setIsPasswordEmpty(false);
//       setLogPass(false);
//       setIsUserInvalid(false);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (login.trim() === "" && password.trim() === "") {
//       setLogPass(true);
//       setIsLoginEmpty(false);
//       setIsPasswordEmpty(false);
//       setIsUserInvalid(false);
//       return;
//     } else if (login.trim() === "") {
//       setIsLoginEmpty(true);
//       setIsUserInvalid(false);
//       return;
//     } else if (password.trim() === "") {
//       setIsPasswordEmpty(true);
//       setIsUserInvalid(false);
//       return;
//     }

//     const user = { login, password };

//     if (user.login !== "admin" || user.password !== "12345678") {
//       setIsUserInvalid(true);
//     } else {
//       localStorage.setItem("jwt", "3cwn4u9do92jsb0cg6v82e1");
//       navigate("/product-page");
//     }
//   };


//   return (
//     <div className={styles.CardLoginContainer}>
//     <div className={styles.CardLogin}>
//       <img className={styles.loginLogo} src={loginLogo} alt="loginLogo" />
//       <form className={styles.formLoginPage} onSubmit={handleSubmit}>
//         <Input
//           className={styles.loginInput}
//           onChange={handleChange}
//           value={login}
//           name="login"
//           type="text"
//           placeholder="User Name"
//         />

//         <div className={styles.inputPass}>
//           <Input
//           className={styles.password}
//           onChange={handleChange}
//           value={password}
//           name="password"
//           placeholder="Password"
//           type={isShowPassword ? "password" : "text"}
//         />

//           <MyButton type='button' className={styles.buttonEye} onClick={handleClickShowPassword}
//             icon={ isShowPassword ? <IoMdEye size="30px" title="Show password" color="green" />
//               : <IoMdEyeOff size="30px" title="Hide password" color="green" /> }
//           />
//         </div>
//         <MyButton type='submit' textButton='Login' className={styles.buttonLogin}/>
//       </form>

//         {isLoginEmpty && <div className={styles.cardError}><PiWarningOctagonBold fill="white" size={25}/><p className={styles.ErrorValid}>{emptyLogin}</p></div> }
//         {isPasswordEmpty && <div className={styles.cardError}><PiWarningOctagonBold fill="white" size={25}/><p className={styles.ErrorValid}>{emptyPassword}</p></div>}
//         {logPass && <div className={styles.cardError}><PiWarningOctagonBold fill="white" size={25}/><p className={styles.ErrorValid}>{emptyLogPass}</p></div>}
//         {isUserInvalid && <div className={styles.cardError}><PiWarningOctagonBold fill="white" size={25}/><p className={styles.ErrorValid}>{userInvalid}</p></div>}
//       </div>
//     </div>
//   );
// };

// export default CardLogin;


import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, clearError, setError, setLogin, setPassword, showHidePassword } from "../../../../modules/actions/login";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { PiWarningOctagonBold } from "react-icons/pi";
import styles from "../../../../styles/CardLogin.module.css";
import loginLogo from "../../../../assets/loginLogo.svg";
import Input from "../../../../components/Input/Input";
import MyButton from "../../../../components/MyButton/MyButton";

const CardLogin = ({
  login, 
  password, 
  isShowHidePassword,
  error, 
  setLogin,
  setPassword,
  showHidePassword,
  clearError,
  setError,
  setUser
}) => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    clearError();

    if(!login.trim() && !password.trim()) {
      setError("All fields required!")
      return;
    }

    if(!login.trim()) {
      setError("Login required!");
      return;
    }

    if(!password.trim()) {
      setError("Password required!");
      return;
    }

    

    if(login !== "admin" || password !== "12345678") {
      setError("user invalid!");
      setUser("");
      return;
    }

    setUser(login);

    localStorage.setItem("jwt", "3cwn4u9do92jsb0cg6v82e1");
    localStorage.setItem("user", login);
    navigate("/product-page");
  };


  return (
    <div className={styles.CardLoginContainer}>
    <div className={styles.CardLogin}>
      <img className={styles.loginLogo} src={loginLogo} alt="loginLogo" />
      <form className={styles.formLoginPage} onSubmit={handleSubmit}>
        <Input
          className={styles.loginInput}
          onChange={(e) => {
            setLogin(e.target.value);
            setError(null);
          }}
          value={login}
          name="login"
          type="text"
          placeholder="User Name"
        />

        <div className={styles.inputPass}>
          <Input
          className={styles.password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null);
          }}
          value={password}
          name="password"
          placeholder="Password"
          type={isShowHidePassword ? "password" : "text"}
        />

          <MyButton type='button' className={styles.buttonEye} onClick={showHidePassword}
            icon={ isShowHidePassword ? <IoMdEye size="30px" title="Show password" color="green" />
              : <IoMdEyeOff size="30px" title="Hide password" color="green" /> }
          />
        </div>
        <MyButton type='submit' textButton='Login' className={styles.buttonLogin}/>
      </form>

        {error && <div className={styles.cardError}><PiWarningOctagonBold fill="white" size={25}/><p className={styles.ErrorValid}>{error}</p></div>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  login: state.login.login,
  password: state.login.password,
  isShowHidePassword: state.login.isShowHidePassword,
  error: state.login.error
})

export default connect(mapStateToProps, { setUser, clearError, setError, setLogin, setPassword, showHidePassword })(CardLogin);
