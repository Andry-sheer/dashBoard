import "./CardLogin.css";
import "../../../../mobile/Login/LoginMobile.css";
import { useState } from "react";
import loginLogo from "../../../../assets/loginLogo.svg";
import Input from "../../../../components/Input/Input";
import ButtonX from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

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
    <div className="CardLogin">
      <img className="loginLogo" src={loginLogo} alt="loginLogo" />
      <form className="formLoginPage" onSubmit={handleSubmit}>
        <Input
          className="loginInput"
          onChange={handleChange}
          value={login}
          name="login"
          type="text"
          placeholder="User Name"
        />

        <Input
          className="password"
          onChange={handleChange}
          value={password}
          name="password"
          placeholder="Password"
          type={isShowPassword ? "password" : "text"}
        />

        <ButtonX type='button' className='buttonEye' onClick={handleClickShowPassword}
            icon={ isShowPassword ? <IoMdEye size="30px" title="Show password" color="green" />
              : <IoMdEyeOff size="30px" title="Hide password" color="green" /> }
        />

        <ButtonX type='submit' textButton='Login' className='buttonLogin'/>

      </form>

        {isLoginEmpty && <p className="ErrorValid">{emptyLogin}</p>}
        {isPasswordEmpty && <p className="ErrorValid">{emptyPassword}</p>}
        {logPass && <p className="ErrorValid">{emptyLogPass}</p>}
        {isUserInvalid && <p className="ErrorValid">{userInvalid}</p>}
        
    </div>
  );
};

export default CardLogin;
