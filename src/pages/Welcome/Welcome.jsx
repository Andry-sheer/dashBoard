
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
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
        <Button onClick={handleClickWelcome} className="buttonStart" textButton="Get Started" />
    </div>
  )
}

export default Welcome;