import Product from '@/components/Product';
import { productService } from '@/services/productService';
import { IProduct } from '@/types/product.type';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryStyle } from './Category.styled';

interface IProps {
  category: string;
  title: string;
}

const Category = ({ category, title }: IProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getNewProducts = async () => {
      const params = {
        limit: 10,
        filter: `(category.slug='${category}')`,
      };
      try {
        const response = await productService.getProducts(params);

        setProducts(response.data?.items);
      } catch (error) {
        toast.error('Đã xảy ra lỗi!!!', { autoClose: 1000 });
      }
    };

    getNewProducts();
  }, [category]);

  return (
    <CategoryStyle>
      <div className={`container-ct category category-${category}`}>
        <div className="row-ct">
          <div className="category__name col-ct">
            <div className="category__name-img">
              <a href="/" className="category__name-head">
                {title}
              </a>
              <a className="category__name-btn" href="/">
                Xem thêm
              </a>
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
              {products.length > 0 ? (
                products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Product product={product} isShowSlide={true} />
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
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
