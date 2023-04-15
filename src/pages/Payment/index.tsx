import Input from '@/components/Input';
import { IPayment } from '@/types/payment.type';
import { paymentSchema } from '@/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { PaymentStyle } from './Payment.style';

const Payment = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IPayment>({
    resolver: yupResolver(paymentSchema),
  });

  const onSubmit = (data: IPayment) => {
    console.log(data);
  };

  return (
    <PaymentStyle>
      <h2>
        <a href="./evo.html">Sea Fashion</a>
      </h2>
      <div className="total">
        <div className="total-container">
          <div className="total-head">
            Đơn hàng (<span>1 sản phẩm</span>)
          </div>
          <div className="total-link">
            Xem chi tiết<i className="las la-angle-down"></i>
            <i className="las la-angle-up"></i>
          </div>
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
                  <textarea name="" id="">
                    Ghi chú(tuỳ chọn)
                  </textarea>
                </div>
              </div>
            </div>
            <div className="main-right">
              <div className="main__head">
                <span>
                  <i className="fas fa-truck-moving"></i>Vận chuyển
                </span>
              </div>
              <div className="main-right__note">
                Vui lòng nhập thông tin giao hàng
              </div>
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
              Đơn hàng (<span>1 sản phẩm</span>)
            </div>
            <div className="payment__order-list">
              <div className="list-item">
                <div className="list-item__left">
                  <div className="list-item__left-img">
                    <img src="./assets/images/1.jpg" alt="" />
                    <span className="number">1</span>
                  </div>
                  <div className="list-item__left-infor">
                    <span className="infor__name">
                      Đầm Nút Họa Tiết Hoa Màu Xanh Lá Boho
                    </span>
                    <span className="infor__size"> S/M</span>
                  </div>
                </div>
                <div className="list-item__right">130.000₫</div>
              </div>
              <div className="list-item">
                <div className="list-item__left">
                  <div className="list-item__left-img">
                    <img src="./assets/images/2.jpg" alt="" />
                    <span className="number">1</span>
                  </div>
                  <div className="list-item__left-infor">
                    <span className="infor__name">Áo kẻ nam</span>
                    <span className="infor__size"> S/M</span>
                  </div>
                </div>
                <div className="list-item__right">130.000₫</div>
              </div>
              <div className="list-item">
                <div className="list-item__left">
                  <div className="list-item__left-img">
                    <img src="./assets/images/3.jpg" alt="" />
                    <span className="number">1</span>
                  </div>
                  <div className="list-item__left-infor">
                    <span className="infor__name">Áo kẻ nam</span>
                    <span className="infor__size"> S/M</span>
                  </div>
                </div>
                <div className="list-item__right">130.000₫</div>
              </div>
            </div>
            <div className="payment__order-cal">
              <span>Tạm tính</span>
              <span>450.000₫</span>
            </div>
            <div className="payment__order-cal">
              <span>Phí vận chuyển</span>
              <span>-</span>
            </div>
            <div className="payment__order-total">
              <span>Tổng cộng</span>
              <span>450.000₫</span>
            </div>

            <div className="payment__order-btn">
              <a href="./cart.html">
                <i className="fas fa-chevron-left"></i>Quay về giỏ hàng
              </a>
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
