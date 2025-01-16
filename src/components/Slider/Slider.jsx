import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import defaultImage from "../../assets/noImg.png";
import { SliderConfig } from "./Slider.config";
import { Navigation, Pagination } from "swiper/modules";
import "../../styles/Slider.scss";

const Slider = ({ images, name }) => {
  const isValidImageFormat = (image) => {
    return (
      image &&
      (image.endsWith(".webp") ||
        image.endsWith(".jpg") ||
        image.endsWith(".jpeg") ||
        image.endsWith(".png") ||
        image.endsWith(".gif"))
    );
  };

  return (
    <Swiper modules={[Navigation, Pagination]} {...SliderConfig}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className="myImage"
            src={isValidImageFormat(image.trim()) ? image.trim() : defaultImage}
            alt={isValidImageFormat(image.trim()) ? `Product image: ${name}` : "No image..."}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
