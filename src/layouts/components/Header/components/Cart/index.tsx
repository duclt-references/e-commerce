import { ShoppingBag } from '@/assets/images';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { selectCurrentUser } from '@/store/auth/authSlice';
import {
  fetchCartItems,
  fetchUpdateProductToCart,
} from '@/store/cart/cartAction';
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from '@/store/cart/cartSlice';
import { ICartItem } from '@/types/cart.type';
import { formatCurrency } from '@/utils/common';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../../../config/path';
import { CartStyle } from './Cart.styled';

const imageURL = `${process.env.PRODUCT_IMAGE_END_POINT}/`;

const Cart = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const cartItems = useAppSelector(selectCartItems);
  const cartTotalAmount = useAppSelector(selectCartTotalAmount);
  const cartTotalQuantity = useAppSelector(selectCartTotalQuantity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartItems(currentUser?.id));
  }, [dispatch, currentUser, cartTotalQuantity]);

  const increase = (product: ICartItem) => {
    if (product.quantity + 1 > product.stock) return;
    dispatch(
      fetchUpdateProductToCart({
        order_product_id: product.orderId,
        quantity: product.quantity + 1,
      })
    );
  };

  const decrease = (product: ICartItem) => {
    if (product.quantity - 1 == 0) return;
    dispatch(
      fetchUpdateProductToCart({
        order_product_id: product.orderId,
        quantity: product.quantity - 1,
      })
    );
  };

  return (
    <CartStyle>
      {cartItems.length > 0 ? (
        <>
          <a href="./cart.html" className="cart-icon">
            <img src={ShoppingBag} alt="" />
            <span className="total-product">{cartTotalQuantity}</span>
          </a>
          <div className="cart">
            <div className="cart__list">
              {cartItems.map((product: ICartItem) => (
                <div className="cart__list-item" key={product.id}>
                  <div className="clitem__img">
                    <a href="./detail.html">
                      <img
                        src={imageURL + product.id + '/' + product.thumbnail}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="clitem__infor">
                    <div className="clitem__infor-head">
                      <a
                        href="./detail.html"
                        title="Adidas Originals Blue CAMPUS"
                      >
                        {product.title}
                      </a>
                    </div>
                    <div className="clitem__infor-price">
                      {formatCurrency(product.price * product.discount)}$
                    </div>
                    <div className="clitem__infor-number">
                      <span
                        className="num-decrease"
                        onClick={() => decrease(product)}
                        aria-hidden="true"
                      >
                        -
                      </span>
                      <input type="number" value={product.quantity} readOnly />
                      <span
                        className="num-increase"
                        onClick={() => increase(product)}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <i className="fas fa-times"></i>
                </div>
              ))}
            </div>
            <div className="cart__total">
              <span>Tổng cộng</span>
              <span className="cart__total-money">{cartTotalAmount}$</span>
            </div>
            <div className="cart__btn">
              {/* <a href="./cart.html" className="cart__btn-cart">
                Giỏ hàng
              </a> */}
              <Link to={PATH.payment} className="cart__btn-pay">
                Thanh toán
              </Link>
            </div>
          </div>
        </>
      ) : (
        <a href="./cart.html" className="cart-icon">
          <img src={ShoppingBag} alt="" />
          <span className="total-product">0</span>
        </a>
      )}
    </CartStyle>
  );
};

export default Cart;
