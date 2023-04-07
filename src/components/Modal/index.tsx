import { ProductImage1 } from '@/assets/images';
import { createPortal } from 'react-dom';
import { ModalStyle } from './Modal.styled';

interface IConfirmProps {
  visible: boolean;
  setVisible: (active: boolean) => void;
}
const Modal = ({ visible, setVisible }: IConfirmProps) => {
  return createPortal(
    <ModalStyle
      id="open-modal"
      className={`modal ${visible ? 'modal--visible' : 'modal--hidden'}`}
      // style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      <div className="modal__overlay"></div>
      <div className="modal__dialog">
        <span
          title="Close"
          className="modal__close"
          onClick={() => setVisible(false)}
          aria-hidden="true"
        >
          Close
        </span>
        <div className="modal__col">
          <div className="modal__header">
            <i className="fas fa-check"></i>Bạn vừa thêm sản phẩm vào giỏ hàng
          </div>
          <div className="modal__content--left">
            <img src={ProductImage1} alt="" />
            <span>Adidas NEO Men Black VS</span>
            <p>2.500.000đ</p>
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
