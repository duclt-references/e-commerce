import styled from 'styled-components';

export const ProductStyle = styled.div`
  .product {
    &__img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      height: 282.16px;
      &-btn {
        position: absolute;
        left: 0;
        bottom: 0;
        visibility: hidden;
        width: 100%;
        height: 35px;
        text-align: center;
        line-height: 35px;
        background-color: #f72b3f;
        color: white;
        &:hover {
          background-color: #060085;
          color: white;
        }
      }
      &-img {
        width: 100%;
        max-height: 100%;
        img {
          max-width: 100%;
          max-height: 100%;
          width: 100%;
          height: auto;
        }
      }
      &-promotion {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 8px;
        height: 25px;
        z-index: 10;
        font-size: 12px;
        line-height: 25px;
        text-align: center;
        background-color: #f72b3f;
        color: white;
        margin-bottom: 15px;
      }
      &:hover {
        .product__img-btn {
          visibility: visible;
        }
        .product__img-img {
          opacity: 0.5;
        }
      }
    }
    &__slide {
      display: flex;
      align-items: center;
      .prev-small-1 {
        margin-right: 10px;
      }
      .next-small-1 {
        margin-left: 10px;
      }
      img {
        height: 65px;
      }
    }
    &__infor {
      margin-top: 10px;
      &-title,
      &-branch {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        a {
          display: block;
          color: #707070;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:hover {
            color: #f72b3f;
          }
        }
      }
      &-branch {
        a {
          font-size: 13px;
        }
      }
      &-price {
        display: flex;
        justify-content: center;
        align-items: center;
        .price--new {
          color: #f72b3f;
          margin-right: 10px;
        }
        .price--old {
          text-decoration: line-through;
          font-size: 12px;
          color: #acacac;
        }
      }
      &-title {
        a {
          display: block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
  @media screen and (min-width: 1950px) {
    .product {
      &__img {
        img {
          height: 100%;
          width: auto;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .product {
      &__img {
        height: 226px;
        &-img {
          height: 100%;
          width: auto;
        }
        img {
          height: 100%;
          width: auto;
        }
      }
      &__slide {
        margin-top: 30px;
      }
      &__infor {
        margin-top: 25px;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .product {
      &__img {
        align-items: center;
        &-promotion {
          right: -5px;
        }
      }
      &__slide {
        display: none;
      }
      &__infor {
        margin-top: 15px;
      }
    }
    .popup {
      width: 700px;
    }
  }
  @media screen and (max-width: 768px) {
    .product {
      &__img {
        height: 282.16px;
        &-promotion {
          right: 0px;
        }
      }
    }
    .modal {
      padding-right: 0 !important;
    }
    .popup {
      width: 100%;
      .modal-content {
        margin: 0 15px;
        .close {
          display: none;
        }
      }
      &__infor {
        width: 100%;
        flex-wrap: wrap;
        &-img {
          width: 100%;
        }
        &-price {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 543px) {
    .product {
      &__img {
        height: 182.5px;
      }
    }
  }
  @media screen and (max-width: 414px) {
    .product {
      &__img {
        height: 157.5px;
      }
    }
  }
  @media screen and (max-width: 374px) {
    .product {
      &__img {
        height: 130px;
      }
      &__infor {
        &-price {
          flex-direction: column;
          .price--new {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
