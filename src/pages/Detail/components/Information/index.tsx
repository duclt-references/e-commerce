import { InformationStyle } from './Information.styled';

const Information = () => {
  return (
    <InformationStyle>
      <div className="container-ct">
        <div className="row-ct information">
          <div className="information__img col-ct">
            <div className="information__img--main">
              <a
                className="elem"
                href="./assets/images/1.jpg"
                data-lcl-thumb="./assets/images/1.jpg"
              >
                <img src="./assets/images/1.jpg" alt="" />
              </a>
              <a
                className="elem elem-none"
                href="./assets/images/2.jpg"
                data-lcl-thumb="./assets/images/2.jpg"
              >
                <img src="./assets/images/2.jpg" alt="" />
              </a>
              <a
                className="elem elem-none"
                href="./assets/images/3.jpg"
                data-lcl-thumb="./assets/images/3.jpg"
              >
                <img src="./assets/images/3.jpg" alt="" />
              </a>
              <a
                className="elem elem-none"
                href="./assets/images/4.jpg"
                data-lcl-thumb="./assets/images/4.jpg"
              >
                <img src="./assets/images/4.jpg" alt="" />
              </a>
            </div>
            <div className="information__img--thumb">
              <i className="fas fa-angle-left prev-big-img animate__animated animate__fadeInLeft"></i>
              <div className="swiper-container swiper-thumb">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="./assets/images/1.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/images/2.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/images/3.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="./assets/images/4.jpg" alt="" />
                  </div>
                </div>
              </div>
              <i className="fas fa-angle-right  next-big-img animate__animated animate__fadeInLeft"></i>
            </div>
          </div>
          <div className="information__info col-ct">
            <div className="information__info-head">
              Adidas White Stan Smith
            </div>
            <div className="information__info-branch">
              <div className="branch">
                <span>Thương hiệu:</span>
                <span>Adidas</span>
              </div>
              <div className="branch">
                <span>Mã sản phẩm:</span>
                <span>LTD123</span>
              </div>
            </div>
            <div className="information__info-describle">
              Mô tả đang cập nhật
            </div>
            <div className="information__info-price">2.500.000₫</div>
            <div className="information__info-size">
              <div className="size-head">Kích thước</div>
              <div className="size-list">
                <label>
                  35
                  <input type="radio" name="size" checked />
                </label>
                <label>
                  36
                  <input type="radio" name="size" />
                </label>
                <label>
                  37
                  <input type="radio" name="size" />
                </label>
              </div>
            </div>
            <div className="information__info-size information__info-color">
              <div className="size-head">Màu sắc</div>
              <div className="size-list">
                <label id="white" className="hint--top" aria-label="Trắng!">
                  <input type="radio" name="color" checked />
                </label>
                <label id="black" className="hint--top" aria-label="Đen">
                  <input type="radio" name="color" />
                </label>
              </div>
            </div>
            <div className="information__info-number">
              <div className="number-count">
                <span className="num-decrease">
                  <i className="fas fa-minus"></i>
                </span>
                <input type="number" value="1" />
                <span className="num-increase">
                  <i className="fas fa-plus"></i>
                </span>
              </div>
              <div className="number-btn">
                <a href="/" data-toggle="modal" data-target="#product-popup">
                  <i className="fas fa-shopping-basket"></i> Mua ngay
                </a>
              </div>
            </div>
            <div className="information__info-hotline">
              <div className="hotline-number">
                <span>Tư vấn</span>
                <a href="/">0123456789</a>
              </div>
              <div className="hotline-pay">
                <img src="./assets/images/payment.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </InformationStyle>
  );
};

export default Information;
