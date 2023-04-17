import AdminTable from '@/components/Admin/Table';
import { ProductStyle } from './Product.style';
import AdminForm from '@/components/Admin/Form';

const Product = () => {
  return (
    <ProductStyle>
      <AdminTable></AdminTable>
      <AdminForm></AdminForm>
    </ProductStyle>
  );
};

export default Product;
