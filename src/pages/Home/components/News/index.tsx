import Post from '@/components/Post';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../Heading';
import { NewsStyle } from './News.styled';

const News = () => {
  return (
    <NewsStyle>
      <div className="container-ct news">
        <Heading title="Tin thời trang" path="/" />
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="swiper-news"
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <Post />
          </SwiperSlide>
          <SwiperSlide>
            <Post />
          </SwiperSlide>
          <SwiperSlide>
            <Post />
          </SwiperSlide>
          <SwiperSlide>
            <Post />
          </SwiperSlide>
        </Swiper>
      </div>
    </NewsStyle>
  );
};

export default News;
