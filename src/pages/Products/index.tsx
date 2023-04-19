import Breadcrumb from '@/components/Breadcrumb';
import Like from '@/components/Like';
import Modal from '@/components/Modal';
import { ModalProvider } from '@/contexts/modal.context';
import Listing from './components/List';

const Products = () => {
  return (
    <ModalProvider>
      <Modal />
      <Breadcrumb />
      <div className="category-icon">
        <i className="fas fa-align-right"></i>
        <i className="fas fa-times"></i>
      </div>
      <Listing />
      <Like />
    </ModalProvider>
  );
};

export default Products;
