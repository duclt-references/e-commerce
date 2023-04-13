import {
  ProductImage1,
  ProductImage2,
  ProductImage3,
  ProductImage4,
  ShoppingBag,
} from '@/assets/images';
import { CartStyle } from './Cart.styled';

const Cart = () => {
  return (
    <CartStyle>
      <a href="./cart.html" className="cart-icon">
        <img src={ShoppingBag} alt="" />
        <span className="total-product">4</span>
      </a>
      <div className="cart">
        <div className="cart__list">
          <div className="cart__list-item">
            <div className="clitem__img">
              <a href="./detail.html">
                <img src={ProductImage1} alt="" />
              </a>
            </div>
            <div className="clitem__infor">
              <div className="clitem__infor-head">
                <a href="./detail.html" title="Adidas Originals Blue CAMPUS">
                  Adidas Originals Blue CAMPUS
                </a>
              </div>
              <div className="clitem__infor-price">2.500.000₫</div>
              <div className="clitem__infor-number">
                <span className="num-decrease">-</span>
                <input type="number" defaultValue="1" />
                <span className="num-increase">+</span>
              </div>
            </div>
            <i className="fas fa-times"></i>
          </div>
          <div className="cart__list-item">
            <div className="clitem__img">
              <a href="/">
                <img src={ProductImage2} alt="" />
              </a>
            </div>
            <div className="clitem__infor">
              <div className="clitem__infor-head">
                <a href="/" title="Adidas Originals Blue CAMPUS">
                  Adidas Originals Blue CAMPUS
                </a>
              </div>
              <div className="clitem__infor-price">2.500.000₫</div>
              <div className="clitem__infor-number">
                <span className="num-decrease">-</span>
                <input type="number" defaultValue="1" />
                <span className="num-increase">+</span>
              </div>
            </div>
            <i className="fas fa-times"></i>
          </div>
          <div className="cart__list-item">
            <div className="clitem__img">
              <a href="/">
                <img src={ProductImage3} alt="" />
              </a>
            </div>
            <div className="clitem__infor">
              <div className="clitem__infor-head">
                <a href="/" title="Adidas Originals Blue CAMPUS">
                  Adidas Originals Blue CAMPUS
                </a>
              </div>
              <div className="clitem__infor-price">2.500.000₫</div>
              <div className="clitem__infor-number">
                <span className="num-decrease">-</span>
                <input type="number" defaultValue="1" />
                <span className="num-increase">+</span>
              </div>
            </div>
            <i className="fas fa-times"></i>
          </div>
          <div className="cart__list-item">
            <div className="clitem__img">
              <a href="/">
                <img src={ProductImage4} alt="" />
              </a>
            </div>
            <div className="clitem__infor">
              <div className="clitem__infor-head">
                <a href="/" title="Adidas Originals Blue CAMPUS">
                  Adidas Originals Blue CAMPUS
                </a>
              </div>
              <div className="clitem__infor-price">2.500.000₫</div>
              <div className="clitem__infor-number">
                <span className="num-decrease">-</span>
                <input type="number" defaultValue="1" />
                <span className="num-increase">+</span>
              </div>
            </div>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="cart__total">
          <span>Tổng cộng</span>
          <span className="cart__total-money">8.200.000₫</span>
        </div>
        <div className="cart__btn">
          <a href="./cart.html" className="cart__btn-cart">
            Giỏ hàng
          </a>
          <a href="./payment.html" className="cart__btn-pay">
            Thanh toán
          </a>
        </div>
      </div>
    </CartStyle>
  );
};

export default Cart;
