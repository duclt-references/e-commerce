import { IProduct } from '@/types/product.type';
import { formatCurrency } from '@/utils/common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InformationStyle } from './Information.styled';

interface IProps {
  product: IProduct;
}

const Information = ({ product }: IProps) => {
  const imageURL = `${process.env.PRODUCT_IMAGE_END_POINT}/${product.id}/`;
  return (
    <InformationStyle>
      <div className="container-ct">
        <div className="row-ct information">
          <div className="information__img col-ct">
            <div className="information__img--main">
              <img src={imageURL + product.thumbnail} alt="" />
            </div>
            <div className="information__img--thumb">
              <i className="fas fa-angle-left prev-big-img animate__animated animate__fadeInLeft"></i>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  992: {
                    slidesPerView: 5,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  480: {
                    slidesPerView: 3,
                  },
                }}
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={imageURL + image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <i className="fas fa-angle-right  next-big-img animate__animated animate__fadeInLeft"></i>
            </div>
          </div>
          <div className="information__info col-ct">
            <div className="information__info-head">{product.title}</div>
            <div className="information__info-branch">
              <div className="branch">
                <span>Thương hiệu:</span>
                <span>{product.brand}</span>
              </div>
              <div className="branch">
                <span>Mã sản phẩm:</span>
                <span>{product.id}</span>
              </div>
            </div>
            <div className="information__info-describle">
              {product.description}
            </div>
            <div className="information__info-price">
              {formatCurrency(product.price)}$
            </div>
            <div className="information__info-number">
              <div className="number-count">
                <span className="num-decrease">
                  <i className="fas fa-minus"></i>
                </span>
                <input type="number" value="1" />
                <span className="num-increase">
                  <i className="fas fa-plus"></i>
                </span>
              </div>
              <div className="number-btn">
                <a href="/" data-toggle="modal" data-target="#product-popup">
                  <i className="fas fa-shopping-basket"></i> Mua ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InformationStyle>
  );
};

export default Information;
