import { PaymentStyle } from './Payment.style';

const Payment = () => {
  return (
    <PaymentStyle>
      {' '}
      <h2>
        <a href="./evo.html">Sea Fashion</a>
      </h2>
      <div className="total">
        <div className="total-container">
          <div className="total-head">
            {' '}
            Đơn hàng (<span>1 sản phẩm</span>)
          </div>
          <div className="total-link">
            Xem chi tiết<i className="las la-angle-down"></i>
            <i className="las la-angle-up"></i>
          </div>
        </div>
      </div>
      <div className="payment">
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
                <a href="./signin.html">
                  <i className="far fa-user-circle"></i>Đăng nhập
                </a>
              </div>
              <form action="">
                <div className="form-item">
                  <input id="email" type="text" required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-item">
                  <input id="name" type="text" required />
                  <label htmlFor="name">Họ và tên</label>
                </div>
                <div className="form-item">
                  <input id="phone" type="text" required />
                  <label htmlFor="phone">Số điện thoại</label>
                </div>
                <div className="form-item">
                  <input id="address" type="text" required />
                  <label htmlFor="address">Địa chỉ</label>
                </div>
                <select name="calc_shipping_provinces" required>
                  <option value="">Tỉnh / Thành phố</option>
                </select>
                <select name="calc_shipping_district" required>
                  <option value="">Quận / Huyện</option>
                </select>
                <div className="form-item">
                  <textarea name="" id="">
                    Ghi chú(tuỳ chọn)
                  </textarea>
                </div>
              </form>
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
            <div className="payment__order-promotion">
              <div className="form-item">
                <input id="code" type="text" required />
                <label htmlFor="code">Nhập mã giảm giá</label>
              </div>
              <button>Áp dụng</button>
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
      </div>
    </PaymentStyle>
  );
};

export default Payment;
