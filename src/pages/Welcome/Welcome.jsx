
import "./Welcome.css";
import "../../mobile/Welcome/WelcomeMobile.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
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
        <Button onClick={handleClickWelcome} variant="primary">Get Started</Button>
    </div>
  )
}

export default Welcome;