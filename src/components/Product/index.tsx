import { IProduct } from '@/types/product.type';
import { formatCurrency } from '@/utils/common';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductStyle } from './Product.styled';

interface IProductType {
  product: IProduct;
  isShowSlide: false;
}

const Product = ({ product, isShowSlide }: IProductType) => {
  return (
    <ProductStyle className="product">
      <div className="product__img">
        <span className="product__img-promotion">
          -{product.discountPercentage}%
        </span>
        <a href="/" className="product__img-img">
          <img src={product.thumbnail} alt="" />
        </a>
        <button className="product__img-btn">Mua ngay</button>
      </div>
      {isShowSlide ? (
        <div className="product__slide">
          <div className="prev-small-1">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <Swiper spaceBetween={50} slidesPerView={3}>
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide product__slide-img">
                  <img src={image} alt="" />
                </div>
              </SwiperSlide>
            ))}
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
          <a href="/">{product.title}</a>
        </div>
        <div className="product__infor-branch">
          <a href="/">{product.brand}</a>
        </div>
        <div className="product__infor-price">
          <span className="price--new">
            {formatCurrency(product.price * product.discountPercentage)}$
          </span>
          <span className="price--old">{formatCurrency(product.price)}$</span>
        </div>
      </div>
    </ProductStyle>
  );
};

export default Product;
