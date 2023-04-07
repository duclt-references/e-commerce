import Product from '@/components/Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LikeStyle } from './Like.styled';

const Like = () => {
  return (
    <LikeStyle className="like">
      <div className="container-ct">
        <div className="like__list col-ct">
          <div className="like__title">
            <span></span>
            <a href="/">Có thể bạn sẽ thích</a>
            <span></span>
          </div>
          <i className="fas fa-angle-left prev-big prev-big-1 animate__animated animate__fadeInLeft"></i>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <Product isShowSlide />
            </SwiperSlide>
            <SwiperSlide>
              <Product isShowSlide />
            </SwiperSlide>
            <SwiperSlide>
              <Product isShowSlide />
            </SwiperSlide>
            <SwiperSlide>
              <Product isShowSlide />
            </SwiperSlide>
            <SwiperSlide>
              <Product isShowSlide />
            </SwiperSlide>
            <SwiperSlide>
              <Product isShowSlide />
            </SwiperSlide>
            <SwiperSlide>
              <Product isShowSlide />
            </SwiperSlide>
            <SwiperSlide>
              <Product isShowSlide />
            </SwiperSlide>
          </Swiper>
          <i className="fas fa-angle-right next-big next-big-1 animate__animated animate__fadeInRight"></i>
        </div>
      </div>
    </LikeStyle>
  );
};

export default Like;
