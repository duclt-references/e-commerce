import Breadcrumb from '@/components/Breadcrumb';
import Like from '@/components/Like';
import Listing from './components/List';

const Products = () => {
  return (
    <>
      <Breadcrumb />
      <div className="category-icon">
        <i className="fas fa-align-right"></i>
        <i className="fas fa-times"></i>
      </div>
      <Listing />
      <Like />
    </>
  );
};

export default Products;
