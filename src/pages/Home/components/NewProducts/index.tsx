import Product from '@/components/Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../Heading';
import { NewProductsStyle } from './NewProducts.styled';

const NewProducts = ({ setVisible }) => {
  return (
    <NewProductsStyle>
      <div className="container-ct">
        <Heading title="Hàng mới về" path="/" />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          1200: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          543: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <Product isShowSlide={false} setVisible={setVisible} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} setVisible={setVisible} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} setVisible={setVisible} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} setVisible={setVisible} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} setVisible={setVisible} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} setVisible={setVisible} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} setVisible={setVisible} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} setVisible={setVisible} />
        </SwiperSlide>
      </Swiper>
    </NewProductsStyle>
  );
};

export default NewProducts;
