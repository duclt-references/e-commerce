import Button from '@/components/Button';
import Input from '@/components/Input';
import { path } from '@/config/path';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="register">
      <div className="register__head">Đăng Nhập</div>
      <div className="register__form">
        <form action="" className="form">
          <Input
            id="email"
            label="Email"
            placeholder="Email"
            type="email"
            required
          />
          <Input
            id="password"
            label="Password"
            placeholder="Password"
            type="password"
            required
          />
          <Button label="Đăng nhập" />
        </form>
      </div>
      <div className="register__note">
        Chưa có tài khoản, <Link to={path.register}>đăng ký tại đây</Link>
      </div>
      {/* <div className="register__social">
    <span>Hoặc đăng nhập tại đây</span>
    <div className="register__social-link">
      <a href="/">
        <img src="./assets/images/fb-btn.svg" alt="" />
      </a>
      <a href="">
        <img src="./assets/images/gp-btn.svg" alt="" />
      </a>
    </div>
  </div> */}
    </div>
  );
};

export default Login;
