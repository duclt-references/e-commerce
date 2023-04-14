import { ShoppingBag } from '@/assets/images';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { selectCurrentUser } from '@/store/auth/authSlice';
import { fetchCartItems } from '@/store/cart/cartAction';
import { selectCartItems, selectCartTotalAmount } from '@/store/cart/cartSlice';
import { IProduct } from '@/types/product.type';
import { formatCurrency } from '@/utils/common';
import { useEffect } from 'react';
import { CartStyle } from './Cart.styled';

const imageURL = `${process.env.PRODUCT_IMAGE_END_POINT}/`;

const Cart = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const cartItems = useAppSelector(selectCartItems);
  const cartTotalAmount = useAppSelector(selectCartTotalAmount);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartItems(currentUser?.id));
  }, [dispatch, currentUser]);
  return (
    <CartStyle>
      {cartItems.length > 0 ? (
        <>
          <a href="./cart.html" className="cart-icon">
            <img src={ShoppingBag} alt="" />
            <span className="total-product">{cartItems.length}</span>
          </a>
          <div className="cart">
            <div className="cart__list">
              {cartItems.map((product: IProduct) => (
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
                      <span className="num-decrease">-</span>
                      <input type="number" defaultValue="1" />
                      <span className="num-increase">+</span>
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
              <a href="./cart.html" className="cart__btn-cart">
                Giỏ hàng
              </a>
              <a href="./payment.html" className="cart__btn-pay">
                Thanh toán
              </a>
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
