import Input from '@/components/Input';
import HttpStatusCode from '@/config/httpStatusCode';
import { PATH } from '@/config/path';
import { useAppSelector } from '@/hooks/useRedux';
import { cartService } from '@/services/cartService';
import { selectCurrentUser } from '@/store/auth/authSlice';
import { ICart, ICartItem } from '@/types/cart.type';
import { IPayment } from '@/types/payment.type';
import { formatCurrency } from '@/utils/common';
import { paymentSchema } from '@/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { PaymentStyle } from './Payment.style';

const imageURL = process.env.PRODUCT_IMAGE_END_POINT;

const Payment = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const cartTotalAmount = cartItems.reduce(
    (sum: number, item: ICartItem) => sum + item.quantity,
    0
  );
  const cartTotalQuantity = cartItems.reduce(
    (sum: number, item: ICartItem) => sum + item.price * item.discount,
    0
  );
  const [cart, setCart] = useState<ICart | null>(null);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const params = {
          limit: 10,
          filter: `(order_id.user_id='${currentUser?.id}'&&order_id.status='pending')`,
          expand: 'product_id,order_id',
        };
        const response = await cartService.getCartItems(params);
        if (response.data.items.length > 0) {
          const items = response.data.items;
          const products = items.map(
            (value: {
              id: string;
              expand: { product_id: object };
              quantity: number;
            }) => {
              const { expand: expandProduct } = value;
              return {
                orderId: value.id,
                quantity: value.quantity,
                ...expandProduct.product_id,
              };
            }
          );
          setCartItems(products);
        }
      } catch (error) {
        console.log('Failed to fetch cart items: ', error);
      }
    };
    getCartItems();
  }, [currentUser]);

  useEffect(() => {
    const getCartByUser = async () => {
      try {
        const params = {
          filter: `(user_id='${currentUser?.id}'&&status='pending')`,
        };
        const response = await cartService.getCarts(params);
        if (response.data.items.length > 0) {
          setCart(response.data.items[0]);
        } else {
          return <>Loading</>;
        }
      } catch (error) {
        console.log('Failed to fetch cart: ', error);
      }
    };

    getCartByUser();
  }, [currentUser]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IPayment>({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
      phone: currentUser?.phone,
      address: currentUser?.address,
    },
  });

  const onSubmit = async (data: IPayment) => {
    const response = await cartService.updateCart({
      id: cart?.id,
      user_id: cart?.user_id,
      order_email: data.email,
      order_phone: data.phone,
      order_name: data.name,
      order_address: data.address,
      order_date: new Date().toLocaleDateString(),
      status: 'paid',
    });
    if (response.status === HttpStatusCode.OK) {
      setCartItems([]);
    }
  };

  return (
    <PaymentStyle>
      <h2>
        <a href="./evo.html">Sea Fashion</a>
      </h2>
      <div className="total">
        <div className="total-container">
          <div className="total-head">
            Đơn hàng (<span>{cartTotalQuantity} sản phẩm</span>)
          </div>
          {/* <div className="total-link">
            Xem chi tiết<i className="las la-angle-down"></i>
            <i className="las la-angle-up"></i>
          </div> */}
        </div>
      </div>
      <form className="payment" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="payment__infor">
          <div className="payment__infor-head">
            <a href="./evo.html">Sea Fashion</a>
          </div>
          <div className="payment__infor-main">
            <div className="main-left">
              <div className="main__head">
                <span>
                  <i className="far fa-address-card"></i>Thông tin nhận hàng
                </span>
              </div>
              <div className="payment__form">
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
                  name="name"
                  label="Họ Tên"
                  placeholder="Họ Tên"
                  type="text"
                  required
                  register={register}
                  errorMessage={errors.name?.message}
                />
                <Input
                  name="phone"
                  label="SĐT"
                  placeholder="SĐT"
                  type="text"
                  required
                  register={register}
                  errorMessage={errors.phone?.message}
                />
                <Input
                  name="address"
                  label="Địa chỉ"
                  placeholder="Địa chỉ"
                  type="text"
                  required
                  register={register}
                  errorMessage={errors.address?.message}
                />
                <div className="form-item">
                  <textarea
                    id=""
                    {...register('note')}
                    placeholder="Ghi chú(tuỳ chọn)"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="main-right">
              <div className="main__head">
                <span>
                  <i className="far fa-credit-card"></i>Thanh toán
                </span>
              </div>
              <div className="main-right__pay">
                <div className="payments">
                  <div className="payments__dot"></div>
                  <div className="payments__text">
                    Thanh toán khi giao hàng (COD)
                  </div>
                  <div className="payments__icon">
                    <i className="far fa-money-bill-alt"></i>
                  </div>
                </div>
                <div className="payment-note">
                  Bạn chỉ phải thanh toán khi nhận được hàng
                </div>
              </div>
              <div className="main-right__btn">
                <button>Đặt hàng</button>
                <a href="./cart.html">
                  <i className="fas fa-chevron-left"></i>Quay về giỏ hàng
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="payment__order">
          <div className="row-1">
            <div className="payment__order-head">
              Đơn hàng (<span>{cartTotalQuantity} sản phẩm</span>)
            </div>
            <div className="payment__order-list">
              {cartItems.map((item: ICartItem) => (
                <div className="list-item" key={item.id}>
                  <div className="list-item__left">
                    <div className="list-item__left-img">
                      <img
                        src={`${imageURL}/${item.id}/${item.thumbnail}`}
                        alt=""
                      />
                      <span className="number">{item.quantity}</span>
                    </div>
                    <div className="list-item__left-infor">
                      <span className="infor__name">{item.title}</span>
                    </div>
                  </div>
                  <div className="list-item__right">
                    {formatCurrency(item.price * item.discount)}$
                  </div>
                </div>
              ))}
            </div>
            <div className="payment__order-total">
              <span>Tổng cộng</span>
              <span>{cartTotalAmount}$</span>
            </div>

            <div className="payment__order-btn">
              <Link to={PATH.home}>
                <i className="fas fa-chevron-left"></i>Quay về giỏ hàng
              </Link>
              <button>Đặt hàng</button>
            </div>
          </div>
        </div>

        <div className="payment-temp"></div>
      </form>
    </PaymentStyle>
  );
};

export default Payment;
