import { IMAGE_URL, PATH } from '@/config/path';
import { ModalContext } from '@/contexts/modal.context';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import {
  fetchAddProductToCart,
  fetchUpdateProductToCart,
} from '@/store/cart/cartAction';
import {
  selectCartId,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from '@/store/cart/cartSlice';
import { ICartItem } from '@/types/cart.type';
import { formatCurrency } from '@/utils/common';
import {
  faCheck,
  faShoppingBasket,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ModalStyle } from './Modal.styled';

const Modal = () => {
  const { quantity, visible, setVisible, product, setProduct, setQuantity } =
    useContext(ModalContext);
  const cartTotalAmount = useAppSelector(selectCartTotalAmount);
  const cartTotalQuantity = useAppSelector(selectCartTotalQuantity);
  const cartId = useAppSelector(selectCartId);
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product !== null && cartId !== null) {
      const existProduct: ICartItem | undefined = cartItems.find(
        (item: ICartItem) => item.id === product.id
      );

      if (existProduct === undefined) {
        dispatch(
          fetchAddProductToCart({
            order_id: cartId,
            product_id: product.id,
            quantity,
          })
        );
      } else {
        dispatch(
          fetchUpdateProductToCart({
            order_product_id: existProduct['orderId'],
            quantity: existProduct['quantity'] + quantity,
          })
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (product === null) return <></>;

  const imageURL = `${IMAGE_URL}/${product.id}/`;

  const handleCloseModal = () => {
    setVisible(false);
    setProduct(null);
    setQuantity(1);
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
              <Link to={PATH.payment}>
                <FontAwesomeIcon icon={faShoppingBasket} />
                Tới giỏ hảng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ModalStyle>,
    document.body
  );
};

export default Modal;
