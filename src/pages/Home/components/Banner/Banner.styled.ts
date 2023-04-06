import styled from 'styled-components';

export const BannerStyle = styled.div`
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
