import authApi from '@/apis/authApi';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { path } from '@/config/path';
import { Schema, schema } from '@/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type TFormData = Pick<Schema, 'email' | 'password'>;
const registerSchema = schema.pick(['email', 'password']);

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormData>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = (data: TFormData) => {
    console.log(data);

    try {
      const response = authApi.login({
        username: 'kminchelle',
        password: '0lelplR',
      });
      response.then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.error('Login not successfully !!!');
    }
  };
  return (
    <div className="register">
      <div className="register__head">Đăng Nhập</div>
      <div className="register__form">
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            label="Email"
            placeholder="Email"
            type="email"
            required
            register={register}
            errorMessage={errors.email?.message}
          />
          <Input
            name="password"
            label="Password"
            placeholder="Password"
            type="password"
            required
            register={register}
            errorMessage={errors.password?.message}
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
