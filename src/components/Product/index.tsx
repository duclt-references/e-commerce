import { ModalContext } from '@/contexts/modal.context';
import { IProduct } from '@/types/product.type';
import { convertToSlug, formatCurrency } from '@/utils/common';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductStyle } from './Product.styled';

interface IProductType {
  product: IProduct;
  isShowSlide: false;
}

const Product = ({ product, isShowSlide }: IProductType) => {
  const percent = Math.round(product.discountPercentage);
  const { setVisible, setProduct } = useContext(ModalContext);
  const slug = convertToSlug(product.title, product.id);

  const handleBuyNow = () => {
    setVisible(true);
    setProduct(product);
  };

  return (
    <ProductStyle className="product">
      <div className="product__img">
        <span className="product__img-promotion">-{percent}%</span>
        <Link to={`/${slug}`} className="product__img-img">
          <img src={product.thumbnail} alt="" />
        </Link>
        <button className="product__img-btn" onClick={handleBuyNow}>
          Mua ngay
        </button>
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

      <Link to={`/${slug}`} className="product__info">
        <div className="product__info-title">{product.title}</div>
        <div className="product__info-branch">{product.brand}</div>
        <div className="product__info-price">
          <span className="price--new">
            {formatCurrency(product.price * percent)}$
          </span>
          <span className="price--old">{formatCurrency(product.price)}$</span>
        </div>
      </Link>
    </ProductStyle>
  );
};

export default Product;
