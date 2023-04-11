import {
  Logo,
  ProductImage1,
  ProductImage2,
  ProductImage3,
  ProductImage4,
  ShoppingBag,
} from '@/assets/images';
import { path } from '@/config/path';
import { useAppDispatch } from '@/hooks/useRedux';
import {
  logout,
  selectCurrentUser,
  selectIsLoggedIn,
} from '@/store/auth/authSlice';
import { fetchCartItems } from '@/store/cart/cartAction';
import { selectCartItems } from '@/store/cart/cartSlice';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderStyle from './Header.styled';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartItems('1'));
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <HeaderStyle>
      <div className="top-header">
        <div className="container-ct">
          <div className="row-ct">
            <div className="top-header__contact col-ct">
              <span>duclt@gmail.com</span>
              <span>/</span>
              <span>0123456789</span>
            </div>
            {isLoggedIn ? (
              <div className="top-header__auth col-ct">
                <Link to={path.profile}>Xin chao, {currentUser?.email}</Link>
                <span className="slash">/</span>
                <span
                  className="logout"
                  onClick={handleLogout}
                  aria-hidden="true"
                >
                  Thoát
                </span>
              </div>
            ) : (
              <div className="top-header__auth col-ct">
                <Link to={path.register}>Đăng ký</Link>
                <span className="slash">/</span>
                <Link to={path.login}>Đăng nhập</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container-ct">
          <div className="row-ct">
            <div className="header__icon col-ct">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="header__img col-ct">
              <Link to={path.home}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header__menu col-ct">
              <ul className="header__menu-list">
                <li className="mlist__item mlist__item--select">
                  <Link to={path.home}>Trang chủ</Link>
                </li>
                <li className="mlist__item">
                  <Link to={path.home}>Giới thiệu</Link>
                </li>
                <li className="mlist__item">
                  <Link to="/collections">
                    Sản phẩm <i className="fas fa-sort-down"></i>
                  </Link>
                  <ul className="mlist__item-submenu">
                    <li>
                      <a href="./category.html">Giày Training & Gym </a>
                    </li>
                    <li>
                      <a href="./category.html">Giày Basketball </a>
                    </li>
                    <li>
                      <a href="./category.html">Giày Running </a>
                    </li>
                    <li>
                      <a href="./category.html">Giày Jodan </a>
                    </li>
                  </ul>
                </li>
                <li className="mlist__item">
                  <Link to={path.home}>Tin tức</Link>
                </li>
                <li className="mlist__item">
                  <Link to={path.home}>Liên hệ</Link>
                </li>
              </ul>
            </div>
            <div className="header__action col-ct">
              <div className="header__action-search">
                <FontAwesomeIcon icon={faSearch} />
                <div className="hsearch">
                  <input type="text" placeholder="Tìm kiếm..." />
                  <a href="./search.html">
                    <i className="fas fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="header__action-cart">
                <a href="./cart.html" className="cart-icon">
                  <img src={ShoppingBag} alt="" />
                  <span className="total-product">
                    {cartItems ? cartItems.products.length : 0}
                  </span>
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
                          <a
                            href="./detail.html"
                            title="Adidas Originals Blue CAMPUS"
                          >
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="wrap"></div>
        <div className="navbars">
          <div className="navbars__img">
            <a href="./index.html">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="navbars__list">
            <ul className="navbars__list-menu">
              <li className="nlmenu__item">
                <span>
                  <a href="./index.html">Trang chủ</a>
                </span>
              </li>
              <li className="nlmenu__item">
                <span>
                  <a href="./about.html">Giới thiệu</a>
                </span>
              </li>
              <li className="nlmenu__item">
                <span>
                  <a href="./category.html">Sản phẩm</a>
                  <i className="fas fa-plus"></i>
                  <i className="fas fa-minus"></i>
                </span>
                <ul>
                  <li>
                    <a href="./category.html">Giày Training & Gym</a>
                  </li>
                  <li>
                    <a href="./category.html">Giày Basketball</a>
                  </li>
                  <li>
                    <a href="/">Giày Running</a>
                  </li>
                  <li>
                    <a href="/">Giày Jodan</a>
                  </li>
                </ul>
              </li>
              <li className="nlmenu__item">
                <span>
                  <a href="./news.html">Tin tức</a>
                </span>
              </li>
              <li className="nlmenu__item">
                <span>
                  <a href="./contact.html">Liên hệ</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
