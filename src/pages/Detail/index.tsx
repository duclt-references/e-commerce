import { productApi } from '@/apis/productApi';
import Breadcrumb from '@/components/Breadcrumb';
import Like from '@/components/Like';
import { IProduct } from '@/types/product.type';
import { getIdFromSlug } from '@/utils/common';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from './components/Banner';
import Information from './components/Information';
import Tabs from './components/Tabs';

const Detail = () => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug as string);
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const response = await productApi.getProductDetail(id);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Failed to fetch product: ', error);
      }
    };
    getProductDetail();
  }, [id]);

  return (
    <>
      <Breadcrumb />
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Information product={product as IProduct} />
      )}
      <Banner />
      <Tabs />
      <Like />
    </>
  );
};

export default Detail;
