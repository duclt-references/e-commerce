import Pagination from '@/components/Pagination';
import Product from '@/components/Product';
import { productService } from '@/services/productService';
import { IProduct } from '@/types/product.type';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Filter from '../Filter';
import { ListingStyle } from './Listing.styled';

const Listing = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getNewProducts = async () => {
      try {
        const search = searchParams.get('search');
        const params = {
          page,
          sort: searchParams.get('sort') === 'desc' ? '-created' : 'created',
          filter: search ? `(title~'${search}')` : '',
        };
        if (category) {
          params.filter = `(category.slug='${category}')`;
        }
        const response = await productService.getProducts(params);
        setProducts(response.data?.items);
        setTotalPages(response.data?.totalPages);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };

    getNewProducts();
  }, [page, category, searchParams]);

  return (
    <ListingStyle>
      <div className="container-ct">
        <Filter />
        <div className="list col-ct">
          {products.length > 0 ? (
            products.map((product) => (
              <Product key={product.id} product={product} isShowSlide={false} />
            ))
          ) : (
            <></>
          )}
        </div>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </ListingStyle>
  );
};

export default Listing;
