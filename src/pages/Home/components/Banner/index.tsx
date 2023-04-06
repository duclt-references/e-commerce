import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide1 } from '../../../../assets/images';
import { BannerStyle } from './Banner.styled';

const Banner = () => {
  return (
    <BannerStyle>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
      </Swiper>
    </BannerStyle>
  );
};

export default Banner;
