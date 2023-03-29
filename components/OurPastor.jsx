

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function OurPastor() {

  return (
    <div className="pastor-wrapper">
      <div className="pastor-wrapper-content">
        <h3 className="pastor-heading fsi-700">OUR PASTORS</h3>


        <Swiper
          navigation={true} modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/images/pastors/first.png" alt="" />
            <div className="p-container">
              <p className="pastors-label-1">PULPIT & HEAD PASTOR</p>
              <p className="pastors-label-2 sm-txt md-txt">Ptra. Edna Te</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/pastors/second.png" alt="" />
            <div className="p-container">
              <p className="pastors-label-1 ">CARE PASTOR</p>
              <p className="pastors-label-2  sm-txt md-txt">Ptr. Ruden Barcelona</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/pastors/third.png" alt="" />
            <div className="p-container">
              <p className="pastors-label-1">WORSHIP PASTOR</p>
              <p className="pastors-label-2  sm-txt md-txt">Ptra. Almira Zonio</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/pastors/fourth.png" alt="" />
            <div className="p-container">
              <p className="pastors-label-1">CHRISTIAN EDUCATION PASTOR</p>
              <p className="pastors-label-2 sm-txt md-txt">Ptra. Edna Heraldo</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/pastors/fifth.png" alt="" />
            <div className="p-container">
              <p className="pastors-label-1">ADMINISTRATIVE PASTOR</p>
              <p className="pastors-label-2 sm-txt md-txt">Ptr. Ronald Zonio</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

