
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/MyButton/MyButton";
import WelcomeLogo from "../../assets/pagesLogo.svg";

const Welcome = () => {

  const navigateWelcome = useNavigate();

  const handleClickWelcome = () => {
    navigateWelcome(`/login`)
  };

  return (
    <div className="WelcomeContainer">
      <img className="WelcomeImage" src={WelcomeLogo} alt="LOGO" />
      <div className="WelcomeTitle"></div>
        <MyButton onClick={handleClickWelcome} className="buttonStart" textButton="Get Started" />
    </div>
  )
}

export default Welcome;