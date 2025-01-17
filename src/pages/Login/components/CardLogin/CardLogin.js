
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchUsers, setUser, clearError, setError, setLogin, setPassword, showHidePassword } from "../../../../modules/actions/login";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { PiWarningOctagonBold } from "react-icons/pi";
import styles from "../../../../styles/CardLogin.module.scss";
import Input from "../../../../components/Input/Input";
import MyButton from "../../../../components/MyButtons/MyButton";

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
  fetchUsers,
  setUser,
  users
}) => {

  const navigate = useNavigate();

  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  

  const generateToken = () => {
    const uuid = crypto?.randomUUID ? crypto.randomUUID() : generateUUID();

    const payload = {
      id: uuid,
      timestamp: Date.now(),
    };
    return btoa(JSON.stringify(payload));
  };
  

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const savedUser = JSON.parse(localStorage.getItem("user"));

    fetchUsers();
  
    if (token && savedUser) {
      try {
        const decodedPayload = JSON.parse(atob(token));
        console.log("Token payload:", decodedPayload);
  
        if (Date.now() - decodedPayload.timestamp < 3600000) {
          setUser({ ...savedUser, status: true });
          navigate("/home");
        } else {
          console.warn("Token expired");
          localStorage.removeItem("jwt");
          localStorage.removeItem("user");
          localStorage.removeItem("users");
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("jwt");
        localStorage.removeItem("users");
      }
    }

    // eslint-disable-next-line
  }, []);
  

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

    const user = users.find(
      (u) => u.name === login && u.password === password
    );

    if(!user) {
      setError("user invalid!");
      return;
    }

    const updatedUser = { ...user, status: true };

    setUser(updatedUser);

    const token = generateToken();

    localStorage.setItem("user", JSON.stringify(updatedUser));
    localStorage.setItem("jwt", token);
    
    window.location.reload();
    navigate("/home");
  };


  return (
    <div className={styles.CardLoginContainer}>
    <div className={styles.CardLogin}>
        <span className={styles.logoSpan}>Welcome</span>
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
          className={styles.passwordInput}
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
            icon={ isShowHidePassword ? <IoMdEye className={styles.iconEye} title="Show password" />
              : <IoMdEyeOff className={styles.iconEye} title="Hide password" /> }
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
  error: state.login.error,
  users: state.login.users
})

export default connect(mapStateToProps, { fetchUsers, setUser, clearError, setError, setLogin, setPassword, showHidePassword })(CardLogin);
