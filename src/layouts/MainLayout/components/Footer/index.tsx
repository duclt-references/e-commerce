import { FooterStyle } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyle>
      <div className="email">
        <div className="container-ct">
          <div className="row-ct">
            <h3>Nhập email</h3>
            <p>Để nhận tin tức khuyến mãi từ cửa hàng của chúng tôi</p>
            <form action="">
              <input type="text" placeholder="Nhập email của bạn" />
              <button type="submit">Gửi ngay</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-ct footer">
        <div className="row-ct">
          <div className="footer__left col-ct">
            <div className="footer__head">Hệ thống cửa hàng</div>
            <div className="footer__left-store">
              <div className="store-name">Sea Shoes Đội Cấn</div>
              <div className="store-infor">
                <div className="store-infor-address">
                  Địa chỉ: 366 Đội Cấn Ba Đình Hà Nội
                </div>
                <div className="store-infor-address">
                  Hotline: <a href="/">0123456789</a>
                </div>
              </div>
            </div>
            <div className="footer__left-store">
              <div className="store-name">Sea Shoes Đội Cấn</div>
              <div className="store-infor">
                <div className="store-infor-address">
                  Địa chỉ: 366 Đội Cấn Ba Đình Hà Nội
                </div>
                <div className="store-infor-address">
                  Hotline: <a href="/">0123456789</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__mid col-ct">
            <div className="footer__mid-menu">
              <div className="footer__head">
                Về chúng tôi<i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </div>
              <ul>
                <li>
                  <a href="/">Trang chủ</a>
                </li>
                <li>
                  <a href="/">Giới thiệu</a>
                </li>
                <li>
                  <a href="/">Sản phẩm</a>
                </li>
                <li>
                  <a href="/">Tin tức</a>
                </li>
                <li>
                  <a href="/">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="footer__mid-menu">
              <div className="footer__head">
                Chính sách<i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </div>
              <ul>
                <li>
                  <a href="/">Trang chủ</a>
                </li>
                <li>
                  <a href="/">Giới thiệu</a>
                </li>
                <li>
                  <a href="/">Sản phẩm</a>
                </li>
                <li>
                  <a href="/">Tin tức</a>
                </li>
                <li>
                  <a href="/">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__right col-ct">
            <div className="footer__head">Đăng kí</div>
            <div className="footer__right-img">
              {/* <img src="./assets/images/bocongthuong.png" alt="" /> */}
            </div>
            <div className="footer__head footer__right-head">Thanh toán</div>
            <div className="footer__right-img">
              {/* <img src="./assets/images/payment.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div>
          ©Bản quyền thuộc về <a href="/">Duclt</a>
        </div>
        <div>Cung cấp bởi Duclt</div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
