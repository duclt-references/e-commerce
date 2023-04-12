import Product from '@/components/Product';
import { productService } from '@/services/productService';
import { IProduct } from '@/types/product.type';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../Heading';
import { NewProductsStyle } from './NewProducts.styled';

const NewProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getNewProducts = async () => {
      try {
        const params = {
          limit: 10,
        };
        const response = await productService.getProducts(params);

        setProducts(response.data?.products);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };

    getNewProducts();
  }, []);

  return (
    <NewProductsStyle>
      <div className="container-ct">
        <Heading title="Hàng mới về" path="/" />
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          1200: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          543: {
            slidesPerView: 2,
          },
        }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <Product product={product} isShowSlide={false} />
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </Swiper>
    </NewProductsStyle>
  );
};

export default NewProducts;
