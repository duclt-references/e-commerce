import { Banner1A, Banner2A } from '@/assets/images';
import { Advertisement2Style } from './Advertisement2.styled';

const Advertisement2 = () => {
  return (
    <Advertisement2Style>
      <div className="container-ct">
        <div className="row-ct advertisement">
          <div className="advertisement__item col-ct">
            <a href="/">
              <img src={Banner1A} alt="" />
            </a>
          </div>
          <div className="advertisement__item col-ct">
            <a href="/">
              <img src={Banner2A} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Advertisement2Style>
  );
};

export default Advertisement2;
