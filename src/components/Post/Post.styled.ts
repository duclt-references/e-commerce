import styled from 'styled-components';

export const PostStyle = styled.div.attrs({
  className: 'post',
})`
  .post {
    &__img {
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    &__note {
      display: flex;
      justify-content: center;
      padding: 10px 0;
      background-color: #fbfafa;
    }
    &__date {
      color: #707070;
      font-size: 12px;
      margin-right: 10px;
      span {
        font-weight: 700;
      }
    }
    &__title {
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
      background-color: #f5f6fb;
    }
    &__description {
      font-size: 12px;
      color: #707070;
    }
  }

  &:hover {
    .post__title {
      box-shadow: 5px 20px 25px -5px rgba(0, 0, 0, 0.1),
        -5px 0px 15px -5px rgba(0, 0, 0, 0.1);
    }
    .post__note {
      box-shadow: 5px 0px 35px -10px rgba(0, 0, 0, 0.1),
        -5px 0px 10px -5px rgba(0, 0, 0, 0.1);
    }
  }
`;
