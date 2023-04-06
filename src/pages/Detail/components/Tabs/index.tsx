import { TabsStyle } from './Tabs.styled';

const Tabs = () => {
  return (
    <TabsStyle>
      <div className="container-ct tab">
        <div className="tab__head">
          <div className="tab__head-1 tab__head-select">Thông tin sản phẩm</div>
          <div className="tab__head-2">Chính sách bán hàng</div>
        </div>
        <div className="tab__content animate__animated animate__fadeInUp">
          <h2>Adidas White Stan Smith</h2>
          <p>
            Adidas quay trở lại với bước đột phá hoàn toàn mới bằng một phiên
            bản nâng cao hơn .<br />
            Để tăng tuổi thọ của đôi giày, Adidas sử dụng da lộn cao cấp phía
            mũi giày và sau gót, giày Adidas trở nên chắc chắn hơn bao giờ hết.
            Bộ đế cao su lưu hóa mang đến cho bạn cảm giác choáng ngợp bởi sự
            chắc chắn khi đi giày.{' '}
          </p>
          <p>
            Hơn nữa với kiểu dáng hợp thời trang, màu sắc nhã nhặn bạn có thể đi
            bất cứ đâu, mặc trang phục gì đều khiến mình trở nên nổi bật và tự
            tin. Hẳn là một thiếu sót lớn khi trong tủ giày nhà bạn thiếu đi đôi
            giày Adidas .
          </p>
          <p>
            Hơn nữa với kiểu dáng hợp thời trang, màu sắc nhã nhặn bạn có thể đi
            bất cứ đâu, mặc trang phục gì đều khiến mình trở nên nổi bật và tự
            tin. Hẳn là một thiếu sót lớn khi trong tủ giày nhà bạn thiếu đi đôi
            giày Adidas .
          </p>
        </div>
        <div className="tab__policy animate__animated animate__fadeInUp">
          <p>Nội dung viết ở đây</p>
        </div>
      </div>
    </TabsStyle>
  );
};

export default Tabs;
