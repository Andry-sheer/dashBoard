import { useState, useEffect } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";
import styles from "../../styles/ScrollButton.module.scss";
import MyButton from "./MyButton";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });

      setIsVisible(false);
  };

  const handleScroll = () => {
      const scrollTop = window.scrollY; // Текущее положение скролла
      const windowHeight = window.innerHeight; // Высота окна
      const documentHeight = document.documentElement.scrollHeight; // Общая высота страницы

      // Показываем кнопку при достижении конца страницы
      if (scrollTop + windowHeight >= documentHeight - 1) {
          setIsVisible(true);
      }

      // Скрываем кнопку, если пользователь вернулся в начало страницы
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
          {isVisible && (
            <MyButton
              className={styles.scrollButton}
              onClick={scrollToTop}
              icon={<TfiArrowCircleUp />}
            />
        )}
      </>
    );
};

export default ScrollButton;