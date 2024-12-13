import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import loginLogo from "../../../../assets/loginLogo.svg";
import Input from "../../../../components/Input/Input";
import MyButton from "../../../../components/MyButton/MyButton";
import styles from "../../../../styles/CardLogin.module.css";

const CardLogin = () => {

  const emptyLogin = "Login is Empty";
  const emptyPassword = "Password is Empty";
  const emptyLogPass = "Login & Password is Empty";
  const userInvalid = "user invalid!";

  const [isShowPassword, setIsShowPassword] = useState(true);

  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isLoginEmpty, setIsLoginEmpty] = useState(false);
  const [logPass, setLogPass] = useState(false);
  const [isUserInvalid, setIsUserInvalid] = useState(false);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setIsShowPassword((prevIsShowPassword) => !prevIsShowPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "login") {
      setLogin(value);
      setIsLoginEmpty(false);
      setLogPass(false);
      setIsUserInvalid(false);
    }

    if (name === "password") {
      setPassword(value);
      setIsPasswordEmpty(false);
      setLogPass(false);
      setIsUserInvalid(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (login.trim() === "" && password.trim() === "") {
      setLogPass(true);
      setIsLoginEmpty(false);
      setIsPasswordEmpty(false);
      setIsUserInvalid(false);
      return;
    } else if (login.trim() === "") {
      setIsLoginEmpty(true);
      setIsUserInvalid(false);
      return;
    } else if (password.trim() === "") {
      setIsPasswordEmpty(true);
      setIsUserInvalid(false);
      return;
    }

    const user = { login, password };

    if (user.login !== "admin" || user.password !== "12345678") {
      setIsUserInvalid(true);
    } else {
      localStorage.setItem("jwt", "3cwn4u9do92jsb0cg6v82e1");
      navigate("/product-page");
    }
  };


  return (
    <div className={styles.CardLoginContainer}>
    <div className={styles.CardLogin}>
      <img className={styles.loginLogo} src={loginLogo} alt="loginLogo" />
      <form className={styles.formLoginPage} onSubmit={handleSubmit}>
        <Input
          className={styles.loginInput}
          onChange={handleChange}
          value={login}
          name="login"
          type="text"
          placeholder="User Name"
        />

        <div className={styles.inputPass}>
          <Input
          className={styles.password}
          onChange={handleChange}
          value={password}
          name="password"
          placeholder="Password"
          type={isShowPassword ? "password" : "text"}
        />

          <MyButton type='button' className={styles.buttonEye} onClick={handleClickShowPassword}
            icon={ isShowPassword ? <IoMdEye size="30px" title="Show password" color="green" />
              : <IoMdEyeOff size="30px" title="Hide password" color="green" /> }
          />
        </div>
        <MyButton type='submit' textButton='Login' className={styles.buttonLogin}/>
      </form>

        {isLoginEmpty && <p className={styles.ErrorValid}>{emptyLogin}</p>}
        {isPasswordEmpty && <p className={styles.ErrorValid}>{emptyPassword}</p>}
        {logPass && <p className={styles.ErrorValid}>{emptyLogPass}</p>}
        {isUserInvalid && <p className={styles.ErrorValid}>{userInvalid}</p>}
      </div>
    </div>
  );
};

export default CardLogin;
