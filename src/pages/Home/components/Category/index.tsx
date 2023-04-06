import Product from '@/components/Product';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryStyle } from './Category.styled';

const Category = () => {
  return (
    <CategoryStyle>
      <div className="container-ct category category-woman">
        <div className="row-ct">
          <div className="category__name col-ct">
            <div className="category__name-img">
              <div className="category__name-head">
                <a href="/">Cho nữ</a>
                <span>
                  Cung cấp những sản phẩm
                  <br />
                  bộ sưu tập mới nhất
                  <br />
                  cho bạn
                </span>
              </div>
              <div className="category__name-btn">
                <a href="/">Xem thêm</a>
              </div>
            </div>
          </div>
          <div className="category__list col-ct">
            <div className="prev-big prev-big-1 animate__animated animate__fadeInLeft">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              breakpoints={{
                992: {
                  slidesPerView: 3,
                },
                375: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <Product isShowSlide />
              </SwiperSlide>
              <SwiperSlide>
                <Product isShowSlide />
              </SwiperSlide>
              <SwiperSlide>
                <Product isShowSlide />
              </SwiperSlide>
              <SwiperSlide>
                <Product isShowSlide />
              </SwiperSlide>
              <SwiperSlide>
                <Product isShowSlide />
              </SwiperSlide>
              <SwiperSlide>
                <Product isShowSlide />
              </SwiperSlide>
              <SwiperSlide>
                <Product isShowSlide />
              </SwiperSlide>
              <SwiperSlide>
                <Product isShowSlide />
              </SwiperSlide>
            </Swiper>
            <div className="next-big next-big-1 animate__animated animate__fadeInRight">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </CategoryStyle>
  );
};

export default Category;
