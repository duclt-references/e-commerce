import Breadcrumb from '@/components/Breadcrumb';
import Like from '@/components/Like';
import Modal from '@/components/Modal';
import { ModalProvider } from '@/contexts/modal.context';
import { productService } from '@/services/productService';
import { IProduct } from '@/types/product.type';
import { getIdFromSlug } from '@/utils/common';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Banner from './components/Banner';
import Information from './components/Information';

const Detail = () => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug as string);

  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const response = await productService.getProductDetail(id);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Đã xảy ra lỗi!!!', { autoClose: 1000 });
      }
    };
    getProductDetail();
  }, [id]);

  return (
    <ModalProvider>
      <Modal />
      <Breadcrumb />
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Information product={product as IProduct} />
      )}
      <Banner />
      {/* <Tabs /> */}
      <Like />
    </ModalProvider>
  );
};

export default Detail;
