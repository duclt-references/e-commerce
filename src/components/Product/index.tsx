import { ProductImage1, ProductImage2, ProductImage3 } from '@/assets/images';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductStyle } from './Product.styled';

interface IProduct {
  isShowSlide: boolean;
}

const Product = ({ isShowSlide }: IProduct) => {
  return (
    <ProductStyle>
      <div className="product__img">
        <span className="product__img-promotion">-17%</span>
        <a href="/" className="product__img-img">
          <img src={ProductImage1} alt="" />
        </a>
        <a href="/" className="product__img-btn">
          Mua ngay
        </a>
      </div>
      {isShowSlide ? (
        <div className="product__slide">
          <div className="prev-small-1">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <Swiper spaceBetween={50} slidesPerView={3}>
            <SwiperSlide>
              <div className="swiper-slide product__slide-img">
                <img src={ProductImage1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide product__slide-img">
                <img src={ProductImage2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide product__slide-img">
                <img src={ProductImage3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide product__slide-img">
                <img src={ProductImage1} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="next-small-1">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="product__infor">
        <div className="product__infor-title">
          <a href="/">Adidas NEO Men White</a>
        </div>
        <div className="product__infor-branch">
          <a href="/">Adidas</a>
        </div>
        <div className="product__infor-price">
          <span className="price--new">2.100.000₫</span>
          <span className="price--old">2.500.000₫</span>
        </div>
      </div>
    </ProductStyle>
  );
};

export default Product;
