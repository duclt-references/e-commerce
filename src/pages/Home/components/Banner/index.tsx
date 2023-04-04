import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Banner1, Banner2, Banner3, Slide1 } from '../../../../assets/images';
import { Banner1Style, Banner2Style } from './Banner.styled';

const Banner = () => {
  return (
    <>
      <Banner1Style>
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
      </Banner1Style>
      <Banner2Style>
        <div className="container-ct">
          <div className="row-ct">
            <div className="banner-2__item col-ct">
              <a href="/">
                <img src={Banner1} alt="" />
              </a>
            </div>
            <div className="banner-2__item col-ct">
              <a href="/">
                <img src={Banner2} alt="" />
              </a>
            </div>
            <div className="banner-2__item col-ct">
              <a href="/">
                <img src={Banner3} alt="" />
              </a>
            </div>
          </div>
        </div>
      </Banner2Style>
    </>
  );
};

export default Banner;
