import { Logo, ShoppingBag } from '@/assets/images';
import { PATH } from '@/config/path';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
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
import { Link } from 'react-router-dom';
import HeaderStyle from './Header.styled';
import Cart from './components/Cart';

const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const currentUser = useAppSelector(selectCurrentUser);
  const cartItems = useAppSelector(selectCartItems);
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
              <span className="slash">/</span>
              <span>0123456789</span>
            </div>
            {isLoggedIn ? (
              <div className="top-header__auth col-ct">
                <Link to={PATH.profile}>Xin chao, {currentUser?.name}</Link>
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
                <Link to={PATH.register}>Đăng ký</Link>
                <span className="slash">/</span>
                <Link to={PATH.login}>Đăng nhập</Link>
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
              <Link to={PATH.home}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="header__menu col-ct">
              <ul className="header__menu-list">
                <li className="mlist__item mlist__item--select">
                  <Link to={PATH.home}>Trang chủ</Link>
                </li>
                <li className="mlist__item">
                  <Link to={PATH.home}>Giới thiệu</Link>
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
                  <Link to={PATH.home}>Tin tức</Link>
                </li>
                <li className="mlist__item">
                  <Link to={PATH.home}>Liên hệ</Link>
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
              {isLoggedIn ? (
                <Cart />
              ) : (
                <a href="./cart.html" className="cart-icon">
                  <img src={ShoppingBag} alt="" />
                  <span className="total-product">
                    {cartItems ? cartItems.products.length : 0}
                  </span>
                </a>
              )}
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
