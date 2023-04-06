import Product from '@/components/Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NewProductsStyle } from './NewProducts.styled';

const NewProducts = () => {
  return (
    <NewProductsStyle>
      <div className="container-ct">
        <h2>
          <a href="./category.html">Hàng mới về</a>
        </h2>
      </div>
      <Swiper spaceBetween={50} slidesPerView={5}>
        <SwiperSlide>
          <Product isShowSlide={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Product isShowSlide={false} />
        </SwiperSlide>
      </Swiper>
    </NewProductsStyle>
  );
};

export default NewProducts;
