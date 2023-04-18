import styled from 'styled-components';

export const CartStyle = styled.div`
  position: relative;
  img {
    width: 20px;
    height: 20px;
  }
  .cart-icon {
    position: relative;
    span {
      display: block;
      position: absolute;
      top: -10px;
      right: -10px;
      height: 20px;
      line-height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: #f72b3f;
      color: white;
      text-align: center;
      font-size: 12px;
    }
  }
  &::after {
    position: absolute;
    content: '';
    width: 50px;
    height: 30px;
    left: -5px;
    bottom: -30px;
  }
  &:hover .cart {
    display: block;
  }
  .cart {
    display: none;
    position: absolute;
    top: 40px;
    right: 0px;
    background: #fff;
    padding: 0;
    text-align: left;
    width: 285px;
    padding: 15px 0px 15px 15px;
    box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.4);
    z-index: 10000;
    border-radius: 0px;
    &__list {
      max-height: 330px;
      overflow-y: scroll;
      padding-right: 15px;
      border-bottom: solid 1px #ebebeb;
      /* width */
      &::-webkit-scrollbar {
        width: 5px;
      }
      /* Track */
      &::-webkit-scrollbar-track {
        background: #d0d0d0;
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        border: 2px solid #ff0042;
        background: rgb(97, 97, 97);
      }
      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      &-item {
        position: relative;
        display: flex;
        padding-bottom: 30px;
        border-bottom: solid 1px #ebebeb;
        margin-bottom: 15px;
        .clitem__img {
          margin-right: 10px;
          img {
            width: 80px;
            height: 80px;
            object-fit: cover;
          }
        }
        .clitem__infor {
          &-head {
            a {
              color: #707070;
            }
          }
          &-price {
            color: #f72b3f;
            margin-top: 5px;
            margin-bottom: 5px;
          }
        }
        .fa-times {
          position: absolute;
          top: 0;
          right: 0;
          color: #707070;
          &:hover {
            color: #f72b3f;
          }
        }
      }
    }
    .cart__total {
      display: flex;
      justify-content: space-between;
      padding-right: 15px;
      margin: 20px 0 15px;
      font-weight: 500;
      font-size: 15px;
      &-money {
        color: #f72b3f;
        font-size: 16px;
      }
    }
    .cart__btn {
      padding-right: 15px;
      a {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #f72b3f;
        color: white;
        font-size: 15px;
        border-radius: 4px;
        margin: 5px 0;
        &:hover {
          background-color: #011c85;
        }
      }
    }
  }
`;
