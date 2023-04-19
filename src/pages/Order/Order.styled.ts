import styled from 'styled-components';

export const OrderStyle = styled.div`
  .cart {
    margin-top: 40px;
    &__head {
      display: flex;
      border-top: 1px solid #ebebeb;
      &-0 {
        width: 11%;
        padding: 10px 0;
      }
      &-1 {
        width: 39%;
        padding: 10px 0;
        font-weight: 700;
        border-right: 1px solid #ebebeb;
      }
      &-2 {
        text-align: center;
        width: 15%;
        padding: 10px 0;
        font-weight: 700;
        border-right: 1px solid #ebebeb;
      }
      &-3 {
        text-align: center;
        width: 12%;
        padding: 10px 0;
        font-weight: 700;
        border-right: 1px solid #ebebeb;
      }
      &-4 {
        text-align: center;
        width: 10%;
        padding: 10px 0;
        font-weight: 700;
      }
    }
    &__list {
      border-bottom: 1px solid #ebebeb;
    }
    .clitem {
      display: flex;
      border-top: 1px solid #ebebeb;
      align-items: center;
      &__space {
        width: 11%;
      }
      &__infor {
        padding: 40px 0;
        width: 39%;
        height: 160px;
        display: flex;
        border-right: 1px solid #ebebeb;
        align-items: center;
        &-img {
          margin-right: 10px;
          img {
            width: 84px;
            height: 84px;
            object-fit: cover;
          }
        }
        &-title {
          display: flex;
          flex-direction: column;
          a {
            font-size: 12px;
            color: #555;
            &:hover {
              color: #f72b3f;
            }
          }
          p {
            font-size: 13px;
            span {
              display: none;
            }
          }
        }
      }
      &__number {
        padding: 40px 0;
        width: 15%;
        height: 160px;
        border-right: 1px solid #ebebeb;
        display: flex;
        align-items: center;
        justify-content: center;
        .number-remove {
          display: none;
        }
        .number-count {
          display: flex;
          justify-content: center;
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          span {
            width: 20px;
            height: 38px;
            line-height: 38px;
            text-align: center;
            font-size: 13px;
            color: #555;
          }
          input {
            width: 40px;
            height: 38px;
            line-height: 38px;
            font-size: 18px;
            text-align: center;
          }
        }
      }
      &__price {
        height: 160px;
        line-height: 160px;
        width: 12%;
        text-align: center;
        border-right: 1px solid #ebebeb;
      }
      &__remove {
        height: 160px;
        width: 10%;
        line-height: 160px;
        text-align: center;
        a:hover {
          color: #f72b3f;
        }
      }
    }
  }
  .total {
    margin-top: 40px;
    .container-ct {
      display: flex;
    }
    .total-wrap {
      width: 50%;
    }
    .total-wrap1 {
      width: 33.33%;
    }
    &__money {
      font-size: 24px;
      text-align: right;
      color: #1c1c1c;
      margin-bottom: 10px;
      span {
        color: #f72b3f;
        margin-left: 10px;
      }
    }
    &__btn {
      text-align: right;
      a {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        padding: 0 30px;
        &:nth-child(1) {
          background-color: #f7f7f7;
          border: 1px solid #ebebeb;
          margin-right: 10px;
          &:hover {
            background-color: white;
            color: #f72b3f;
            border-color: #f72b3f;
          }
        }
        &:nth-child(2) {
          background-color: #f72b3f;
          border: 1px solid #f72b3f;
          color: white;
          &:hover {
            background-color: white;
            color: #f72b3f;
          }
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    .cart {
      &__head {
        display: none;
      }
      .clitem {
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid #ebebeb;
        &__price,
        &__remove,
        &__space {
          display: none;
        }
        &__infor {
          width: auto;
          height: 80px;
          margin-right: 10px;
          border-right: none;
          align-items: flex-start;
          padding: 0;
          &-img {
            img {
              height: 100%;
            }
          }
        }
        &__number {
          width: auto;
          padding: 0;
          height: 80px;
          border-right: none;
          flex-direction: column;
          .number-remove {
            display: block;
          }
        }
      }
    }
    .total {
      .total-wrap1 {
        display: none;
      }
      .total-wrap {
        width: 100%;
      }
      &__money {
        text-align: left;
      }
      &__btn {
        display: flex;
        flex-direction: column;
        a {
          width: 100%;
          text-align: center;
          margin: 10px 0;
        }
      }
    }
  }
`;
