import Button from '@/components/Button';
import Input from '@/components/Input';
import { path } from '@/config/path';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
      <div className="register__head">Đăng ký</div>
      <div className="register__form">
        <form action="" className="form">
          <Input
            name="name"
            label="Họ và tên"
            placeholder="Họ và tên"
            type="text"
            required
          />
          <Input
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
            required
          />
          <Input
            name="phone"
            label="Số điện thoại"
            placeholder="Số điện thoại"
            type="text"
            required
          />
          <Input
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            required
          />
          <Button label="Đăng ký" />
        </form>
      </div>
      <div className="register__note">
        Đã có tài khoản, <Link to={path.login}>đăng nhập tại đây</Link>
      </div>
    </div>
  );
};

export default Register;
