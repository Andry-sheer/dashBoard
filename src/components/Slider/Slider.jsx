import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import defaultImage from "../../assets/noImg.png";
import { SliderConfig } from "./Slider.config"
import { Navigation, Pagination } from "swiper/modules";
import "../../styles/Slider.css"


const Slider = ({ images, name }) => {

  return (
    <Swiper modules={[Navigation, Pagination]} {...SliderConfig}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="myImage" src={!image.trim() ? defaultImage : image}  alt={!image.trim() ?  "No image..." : `image Product: ${name}`} />
        </SwiperSlide>
    ))}
  </Swiper>
  )
}


export default Slider;