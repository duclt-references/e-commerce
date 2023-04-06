import { BannerDetail } from '@/assets/images';
import { BannerStyle } from './Banner.styled';

const Banner = () => {
  return (
    <BannerStyle>
      <div className="container-ct">
        <img src={BannerDetail} alt="" />
      </div>
    </BannerStyle>
  );
};

export default Banner;
