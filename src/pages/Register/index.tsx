import Button from '@/components/Button';
import Input from '@/components/Input';
import { PATH } from '@/config/path';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchRegister } from '@/store/auth/authAction';
import { selectIsLoggedIn } from '@/store/auth/authSlice';
import { Schema, schema } from '@/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type TFormData = Pick<Schema, 'email' | 'password' | 'name' | 'phone'>;
const registerSchema = schema.pick(['email', 'password', 'name', 'phone']);

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormData>({
    resolver: yupResolver(registerSchema),
  });
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      toast.success('Đăng ký thành công!!!', { autoClose: 1000 });
      setTimeout(() => {
        navigate(PATH.home);
      }, 2000);
    }
  }, [navigate, isLoggedIn]);

  const onSubmit = (data: TFormData) => {
    try {
      dispatch(fetchRegister(data));
    } catch (error) {
      console.error('Register not successfully !!!');
    }
  };

  return (
    <div className="register">
      <div className="register__head">Đăng ký</div>
      <div className="register__form">
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            label="Họ và tên"
            placeholder="Họ và tên"
            type="text"
            required
            register={register}
            errorMessage={errors.name?.message}
          />
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
            name="phone"
            label="Số điện thoại"
            placeholder="Số điện thoại"
            type="text"
            required
            register={register}
            errorMessage={errors.phone?.message}
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
          <Button label="Đăng ký" type="submit" />
        </form>
      </div>
      <div className="register__note">
        Đã có tài khoản, <Link to={PATH.login}>đăng nhập tại đây</Link>
      </div>
    </div>
  );
};

export default Register;
