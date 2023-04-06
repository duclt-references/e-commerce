import styled from 'styled-components';

export const NewsStyle = styled.div`
  .news {
    margin-top: 30px;
    .swiper-news {
      padding-bottom: 30px;
    }
    &__item {
      &-img {
        display: flex;
        justify-content: center;
        img {
          width: 100%;
        }
      }
      &-note {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        background-color: #fbfafa;
        .note__date {
          color: #707070;
          font-size: 12px;
          margin-right: 10px;
          span {
            font-weight: 700;
          }
        }
      }
      &-title {
        text-align: center;
        padding: 25px;
        a {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 10px;
          &:hover {
            color: #f72b3f;
          }
        }
        span {
          font-size: 12px;
          color: #707070;
        }
        background-color: #f5f6fb;
      }
      &:hover {
        .news__item-title {
          box-shadow: 5px 20px 25px -5px rgba(0, 0, 0, 0.1),
            -5px 0px 15px -5px rgba(0, 0, 0, 0.1);
        }
        .news__item-note {
          box-shadow: 5px 0px 35px -10px rgba(0, 0, 0, 0.1),
            -5px 0px 10px -5px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;
