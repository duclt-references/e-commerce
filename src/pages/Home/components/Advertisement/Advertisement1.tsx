import { Banner1, Banner2, Banner3 } from '@/assets/images';
import { Advertisement1Style } from './Advertisement1.styled';

const Advertisement1 = () => {
  return (
    <Advertisement1Style>
      <div className="container-ct">
        <div className="row-ct advertisement">
          <div className="advertisement__item col-ct">
            <a href="/">
              <img src={Banner1} alt="" />
            </a>
          </div>
          <div className="advertisement__item col-ct">
            <a href="/">
              <img src={Banner2} alt="" />
            </a>
          </div>
          <div className="advertisement__item col-ct">
            <a href="/">
              <img src={Banner3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </Advertisement1Style>
  );
};

export default Advertisement1;
