import { ShoppingBag } from '@/assets/images';
import { cartService } from '@/services/cartService';
import { selectCurrentUser } from '@/store/auth/authSlice';
import { IProduct } from '@/types/product.type';
import { formatCurrency } from '@/utils/common';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartStyle } from './Cart.styled';

const imageURL = `${process.env.PRODUCT_IMAGE_END_POINT}/`;

const Cart = () => {
  const [cart, setCarts] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const getNewProducts = async () => {
      try {
        const params = {
          limit: 10,
          filter: `(user_id='${currentUser?.id}'&&status='pending')`,
          expand: 'order_products(order_id).product_id',
        };
        const response = await cartService.getCarts(params);
        if (response.data.items.length > 0) {
          const item = response.data.items[0];
          const { expand: expandCart, ...userCart } = item;
          setCarts(userCart);
          if (expandCart) {
            // eslint-disable-next-line eslint-comments/disable-enable-pair
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            const cartProduct: any = Object.values(expandCart)[0];

            const products = cartProduct.map(
              (value: { expand: { product_id: object }; quantity: number }) => {
                const { expand: expandProduct } = value;
                return {
                  quantity: value.quantity,
                  ...expandProduct.product_id,
                };
              }
            );
            setCartItems(products);
          }
        }
      } catch (error) {
        console.log('Failed to fetch cart list: ', error);
      }
    };

    getNewProducts();
  }, [currentUser]);
  return (
    <CartStyle>
      {cart ? (
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
