import { ModalContext } from '@/contexts/modal.context';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { selectCurrentUser } from '@/store/auth/authSlice';
import { fetchAddProductToCart } from '@/store/cart/cartAction';
import {
  selectCartId,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from '@/store/cart/cartSlice';
import { formatCurrency } from '@/utils/common';
import {
  faCheck,
  faShoppingBasket,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle } from './Modal.styled';

const Modal = () => {
  const { visible, setVisible, product, setProduct } = useContext(ModalContext);
  const cartTotalAmount = useAppSelector(selectCartTotalAmount);
  const cartTotalQuantity = useAppSelector(selectCartTotalQuantity);
  const cartId = useAppSelector(selectCartId);
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product !== null && cartId !== null) {
      dispatch(
        fetchAddProductToCart({
          user_id: currentUser?.id as string,
          order_id: cartId,
          product_id: product.id,
          quantity: 1,
        })
      );
    }
  }, [dispatch, product, cartId, currentUser]);

  if (product === null) return <></>;

  const imageURL = `${process.env.PRODUCT_IMAGE_END_POINT}/${product.id}/`;

  const handleCloseModal = () => {
    setVisible(false);
    setProduct(null);
  };

  return createPortal(
    <ModalStyle
      id="open-modal"
      className={`modal ${visible ? 'modal--visible' : 'modal--hidden'}`}
    >
      <div className="modal__overlay"></div>
      <div className="modal__dialog">
        <span
          className="modal__close"
          onClick={handleCloseModal}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="modal__col">
          <div className="modal__header">
            <FontAwesomeIcon icon={faCheck} />
            Bạn vừa thêm sản phẩm vào giỏ hàng
          </div>
          <div className="modal__content--left">
            <img src={imageURL + product.thumbnail} alt="" />
            <span>{product.title}</span>
            <p>{formatCurrency(product.price)}$</p>
          </div>
        </div>
        <div className="modal__col">
          <div className="modal__header">
            <FontAwesomeIcon icon={faShoppingBasket} />
            Giỏ hàng của bạn có {cartTotalQuantity} sản phẩm
          </div>
          <div className="modal__content--right">
            <div className="title">Tổng tiền</div>
            <div className="price">{cartTotalAmount}$</div>
            <div className="btn">
              <a href="./cart.html">
                <i className="fas fa-shopping-basket"></i>
                Tới giỏ hảng
              </a>
            </div>
          </div>
        </div>
      </div>
    </ModalStyle>,
    document.body
  );
};

export default Modal;
