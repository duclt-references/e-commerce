import styled from 'styled-components';

const Banner1Style = styled.div`
  position: relative;
  img {
    width: 100%;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #cdcedd;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #f72b3f;
    width: 32px;
    border-radius: 8px;
  }
`;

const Banner2Style = styled.div.attrs({
  className: 'banner-2',
})`
  padding: 50px 0;
  .banner-2__item {
    width: 33.33%;
    a {
      overflow: hidden;
    }
    img {
      max-width: 100%;
      transition: all 0.5s;
    }
    a:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
`;
export { Banner1Style, Banner2Style };
