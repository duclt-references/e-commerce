import Breadcrumb from '@/components/Breadcrumb';
import Listing from './components/List';
import Like from './components/Like';

const Collection = () => {
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

export default Collection;
