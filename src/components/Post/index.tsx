import { Post1 } from '@/assets/images';
import { PostStyle } from './Post.styled';

const Post = () => {
  return (
    <PostStyle>
      <div className="post__img">
        <a href="./news-detail.html">
          <img src={Post1} alt="" />
        </a>
      </div>
      <div className="post__note">
        <div className="post__date">
          <i className="far fa-calendar"></i>
          <span>28/10/2019</span>
        </div>
        <div className="post__date">
          Đăng bởi
          <span>Duclt</span>
        </div>
      </div>
      <div className="post__title">
        <a href="./news-detail.html">
          Hướng dẫn cách làm trắng đế giày bị ố vàng chuẩn chỉ
        </a>
        <div className="post__description">
          Adidas là một trong những hàng thời trang sneaker lớn nhất hiện nay
          của thế giới ...
        </div>
      </div>
    </PostStyle>
  );
};

export default Post;
