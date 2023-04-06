import styled from 'styled-components';

export const LikeStyle = styled.div.attrs({
  className: 'like',
})`
  margin-top: 5rem;
  .container-ct {
    background-image: url(https://bizweb.dktcdn.net/100/369/492/themes/741260/assets/bg_hotline.jpg?1572516554954);
    background-size: cover;
    background-position: center;
    padding: 100px 15px 90px;
  }
  .like {
    margin-top: 20px;
    &__title {
      margin-top: 20px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        text-transform: uppercase;
        font-size: 26px;
        color: white;
        padding: 0 10px;
        margin: 0 10px;
        white-space: nowrap;
        background-color: transparent;
        &:hover {
          color: #f72b3f;
        }
      }
      span {
        display: block;
        width: 100%;
        height: 1px;
        background-color: #e8e8e8;
      }
    }
    &__list {
      padding: 25px 50px 50px 50px;
      border: 1px solid #fff;
      margin: 0 150px;
      position: relative;
      .prev-big,
      .next-big {
        display: none;
        position: absolute;
        top: 50%;
        height: 40px;
        width: 40px;
        z-index: 20;
        color: white;
        line-height: 40px;
        text-align: center;
        background-color: #f72b3f;
        &:hover {
          background-color: #060085;
        }
      }
      .prev-big {
        left: 30px;
        cursor: pointer;
      }
      .next-big {
        right: 30px;
        cursor: pointer;
      }
      &:hover {
        .prev-big,
        .next-big {
          display: block;
        }
      }
    }
  }
  .product {
    background-color: #fff;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 1200px) {
    .like {
      &__list {
        border: 1px solid white;
        margin: 0 15px;
        padding: 0;
        padding-bottom: 60px;
        .product {
          &__slide {
            display: none;
          }
          &__infor {
            margin-top: 20px;
          }
        }
      }
      &__title {
        margin-top: 60px;
        margin-bottom: 40px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .like {
      &__list {
        .product {
          &__infor {
            padding: 0 15px;
          }
        }
      }
    }
  }
`;
