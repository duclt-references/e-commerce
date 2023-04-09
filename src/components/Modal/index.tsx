import { ModalContext } from '@/contexts/modal.context';
import { formatCurrency } from '@/utils/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyle } from './Modal.styled';

const Modal = () => {
  const { visible, setVisible, product, setProduct } = useContext(ModalContext);
  if (product === null) return <></>;

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
            <i className="fas fa-check"></i>Bạn vừa thêm sản phẩm vào giỏ hàng
          </div>
          <div className="modal__content--left">
            <img src={product.thumbnail} alt="" />
            <span>{product.title}</span>
            <p>{formatCurrency(product.price)}$</p>
          </div>
        </div>
        <div className="modal__col">
          <div className="modal__header">
            <i className="fas fa-shopping-basket"></i>Giỏ hàng của bạn có
            <span>8</span> sản phẩm
          </div>
          <div className="modal__content--right">
            <div className="title">Tổng tiền</div>
            <div className="price">13.900.000đ</div>
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