import { BreadcrumbStyle } from './Breadcrumb.styled';

const Breadcrumb = () => {
  return (
    <BreadcrumbStyle>
      <div className="container-ct">
        <div className="row-ct">
          <h3>Tìm kiếm</h3>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>/</li>
            <li>
              <span>Tìm kiếm</span>
            </li>
          </ul>
        </div>
      </div>
    </BreadcrumbStyle>
  );
};

export default Breadcrumb;
