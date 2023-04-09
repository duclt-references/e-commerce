import { productApi } from '@/apis/productApi';
import Product from '@/components/Product';
import { IProduct } from '@/types/product.type';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LikeStyle } from './Like.styled';

const Like = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getNewProducts = async () => {
      try {
        const params = {
          limit: 10,
        };
        const response = await productApi.getProducts(params);

        setProducts(response.data?.products);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };

    getNewProducts();
  }, []);
  return (
    <LikeStyle className="like">
      <div className="container-ct">
        <div className="like__list col-ct">
          <div className="like__title">
            <span></span>
            <a href="/">Có thể bạn sẽ thích</a>
            <span></span>
          </div>
          <i className="fas fa-angle-left prev-big prev-big-1 animate__animated animate__fadeInLeft"></i>
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Product product={product} isShowSlide={false} />
              </SwiperSlide>
            ))}
          </Swiper>
          <i className="fas fa-angle-right next-big next-big-1 animate__animated animate__fadeInRight"></i>
        </div>
      </div>
    </LikeStyle>
  );
};

export default Like;
