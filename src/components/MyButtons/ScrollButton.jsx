import { useState, useEffect } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";
import styles from "../../styles/ScrollButton.module.scss";
import MyButton from "./MyButton";

const ScrollButton = ({ isHidden }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsVisible(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

    if (scrollPercentage <= 0.9) {
      setIsVisible(false);
    } else if(scrollPercentage >= 1.0) {
      setIsVisible(true);
    }

    if (scrollTop === 0) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {isHidden ? 
      (isVisible && (
        <MyButton
          className={styles.scrollButton}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollToTop();
          }}
          icon={<TfiArrowCircleUp />}
        />
      ))
    : null}
    </>
  );
};

export default ScrollButton;
