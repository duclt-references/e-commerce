import { IProduct } from '@/types/product.type';
import { formatCurrency } from '@/utils/common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InformationStyle } from './Information.styled';

interface IProps {
  product: IProduct;
}

const Information = ({ product }: IProps) => {
  return (
    <InformationStyle>
      <div className="container-ct">
        <div className="row-ct information">
          <div className="information__img col-ct">
            <div className="information__img--main">
              <img src={product.thumbnail} alt="" />
            </div>
            <div className="information__img--thumb">
              <i className="fas fa-angle-left prev-big-img animate__animated animate__fadeInLeft"></i>
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
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt="" />
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
            {/* <div className="information__info-size">
              <div className="size-head">Kích thước</div>
              <div className="size-list">
                <label>
                  35
                  <input type="radio" name="size" checked />
                </label>
                <label>
                  36
                  <input type="radio" name="size" />
                </label>
                <label>
                  37
                  <input type="radio" name="size" />
                </label>
              </div>
            </div>
            <div className="information__info-size information__info-color">
              <div className="size-head">Màu sắc</div>
              <div className="size-list">
                <label id="white" className="hint--top" aria-label="Trắng!">
                  <input type="radio" name="color" checked />
                </label>
                <label id="black" className="hint--top" aria-label="Đen">
                  <input type="radio" name="color" />
                </label>
              </div>
            </div> */}
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
            <div className="information__info-hotline">
              <div className="hotline-number">
                <span>Tư vấn</span>
                <a href="/">0123456789</a>
              </div>
              <div className="hotline-pay">
                <img src="./assets/images/payment.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </InformationStyle>
  );
};

export default Information;
