import Button from '@/components/Button';
import Input from '@/components/Input';
import { PATH } from '@/config/path';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchLogin } from '@/store/auth/authAction';
import { selectCurrentUser, selectIsLoggedIn } from '@/store/auth/authSlice';
import { fetchAddCart } from '@/store/cart/cartAction';
import { ILogin } from '@/types/auth.type';
import { schema } from '@/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const registerSchema = schema.pick(['email', 'password']);

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>({
    resolver: yupResolver(registerSchema),
  });
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const currentUser = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      toast.success('Đăng nhập thành công!!!', { autoClose: 1000 });
      dispatch(fetchAddCart(currentUser?.id as string));
      setTimeout(() => {
        navigate(currentUser?.role === 'admin' ? PATH.adminProduct : PATH.home);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const onSubmit = (data: ILogin) => {
    dispatch(fetchLogin(data));
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
          <Button label="Đăng nhập" type="submit" />
        </form>
      </div>
      <div className="register__note">
        Chưa có tài khoản, <Link to={PATH.register}>đăng ký tại đây</Link>
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
