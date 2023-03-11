

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function OurPastor() {
    
  return (
    <>
    <h3 className="pastor-heading fsi-700">OUR PASTORS</h3>


      <Swiper
         pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="img-1"></SwiperSlide>
        <SwiperSlide className="img-2"></SwiperSlide>
        <SwiperSlide className="img-3"></SwiperSlide>
        <SwiperSlide className="img-4"></SwiperSlide>
        <SwiperSlide className="img-5"></SwiperSlide>
      </Swiper>
    </>
  );
    }

