import "./Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import DummySwiperImg from "../assets/dummy-swiper-img.jpg";

const Home = () => {
  const images = [1, 2, 3];
  return (
    <section className="home">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        loop
      >
        {images.length > 0 &&
          images.map((img, index) => (
            <SwiperSlide key={index}>
              {/* <img src={img} alt={`slide${index + 1}`} /> */}
              <img src={DummySwiperImg} alt={`slide${index + 1}`} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Home;
