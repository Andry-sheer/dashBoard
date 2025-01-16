
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
  const jwt = localStorage.getItem("jwt");

  useEffect(()=> {
    if(!jwt){
      fetchUsers();
    } else {
      const saveUser = JSON.parse(localStorage.getItem("user"));
      if (saveUser) {
        setUser( { ...saveUser, status: true } );
        navigate("/home");
      } else {
        localStorage.removeItem("jwt");
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

    setUser({ ...user, status: true });

    
    localStorage.setItem(
      "user",
      JSON.stringify({ ...user, status: true })
    );
    
    localStorage.setItem("jwt", "3cwn4u9do92jsb0cg6v82e1");
    
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
