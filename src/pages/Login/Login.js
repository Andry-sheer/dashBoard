
import styles from "../../styles/Login.module.scss";
import CardLogin from "./components/CardLogin/CardLogin";

const Login = () => {
  return (
    <div className={styles.login}>
      <CardLogin />
    </div>
  );
};

export default Login;
