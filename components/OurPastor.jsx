

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation} from "swiper";

export default function OurPastor() {
    
  return (
    <div className="pastor-wrapper">
    <div className="pastor-wrapper-content">
    <h3 className="pastor-heading fsi-700">OUR PASTORS</h3>


      <Swiper
             navigation={true} modules={[Navigation]} 
        className="mySwiper"
      >
        <SwiperSlide> <img  className="img-1" src="/images/pastors/first.png" alt="" /> <p className="pastors-label-1">PULPIT & HEAD PASTOR</p> <p className="pastors-label-2">Ptra. Edna Te</p> </SwiperSlide>
        <SwiperSlide><img  className="img-1" src="/images/pastors/second.png" alt="" /> <p className="pastors-label-1">CARE PASTOR</p> <p className="pastors-label-2">Ptr. Ruden Barcelona</p></SwiperSlide>
        <SwiperSlide><img  className="img-1" src="/images/pastors/third.png" alt="" /> <p className="pastors-label-1">WORSHIP PASTOR</p> <p className="pastors-label-2">Ptra. Almira Zonio</p></SwiperSlide>
        <SwiperSlide><img  className="img-1" src="/images/pastors/fourth.png" alt="" /> <p className="pastors-label-1">CHRISTIAN EDUCATION PASTOR</p> <p className="pastors-label-2">Ptra. Edna Heraldo</p></SwiperSlide>
        <SwiperSlide><img  className="img-1" src="/images/pastors/fifth.png" alt="" /> <p className="pastors-label-1">ADMINISTRATIVE PASTOR</p> <p className="pastors-label-2">Ptr. Ronald Zonio</p></SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
    }

