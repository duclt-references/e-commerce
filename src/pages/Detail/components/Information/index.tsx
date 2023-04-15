import { ModalContext } from '@/contexts/modal.context';
import { IProduct } from '@/types/product.type';
import { formatCurrency } from '@/utils/common';
import {
  faAngleRight,
  faMinus,
  faPlus,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InformationStyle } from './Information.styled';

interface IProps {
  product: IProduct;
}

const Information = ({ product }: IProps) => {
  const imageURL = `${process.env.PRODUCT_IMAGE_END_POINT}/${product.id}/`;
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const { setVisible, setQuantity, setProduct } = useContext(ModalContext);

  const handleIncrease = () => {
    if (currentQuantity + 1 > product.stock) return;
    setCurrentQuantity(currentQuantity + 1);
  };

  const handleDecrease = () => {
    if (currentQuantity - 1 === 0) return;
    setCurrentQuantity(currentQuantity - 1);
  };

  const handleAddToCart = () => {
    console.log(123);
    setVisible(true);
    setQuantity(currentQuantity);
    setProduct(product);
  };

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
              <FontAwesomeIcon
                icon={faAngleRight}
                className="next-big-img animate__animated animate__fadeInLeft"
              />
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
                <span
                  className="num-decrease"
                  aria-hidden="true"
                  onClick={handleDecrease}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <input type="number" value={currentQuantity} readOnly />
                <span
                  className="num-increase"
                  aria-hidden="true"
                  onClick={handleIncrease}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </div>
              <div className="number-btn">
                <button
                  data-toggle="modal"
                  data-target="#product-popup"
                  onClick={handleAddToCart}
                >
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InformationStyle>
  );
};

export default Information;
