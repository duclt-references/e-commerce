import Input from '@/components/Input';
import { AdminFormStyle } from './Form.styled';

const AdminForm = () => {
  return (
    <AdminFormStyle>
      <h2 className="head">Add Product</h2>
      <form>
        <Input
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
          required
          // register={register}
          // errorMessage={errors.email?.message}
        />
      </form>
    </AdminFormStyle>
  );
};

export default AdminForm;
