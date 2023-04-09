import styled from 'styled-components';

export const InformationStyle = styled.div`
  .information {
    margin-top: 40px;
    &__img {
      width: 50%;
      &--main {
        border: 1px solid #ebebeb;
        img {
          width: 100%;
        }
        .elem {
          display: inline-block;
          font-size: 0;
          width: 100%;
          border-bottom: none;
          background: #fff;
          background-clip: padding-box;
        }
        .elem > img {
          display: block;
          cursor: pointer;
          width: 100%;
        }
        .elem-none {
          display: none;
        }
      }
      &--thumb {
        margin-top: 20px;
        padding: 0 20px;
        position: relative;
        .swiper-slide {
          height: auto;
        }
        i {
          display: none;
          position: absolute;
          top: 32%;
          height: 30px;
          width: 30px;
          z-index: 20;
          color: white;
          line-height: 30px;
          text-align: center;
          background-color: #f72b3f;
          &:hover {
            background-color: #060085;
          }
        }
        .prev-big-img {
          left: -10px;
        }
        .next-big-img {
          right: -10px;
        }
        img {
          width: 96px;
          object-fit: cover;
          max-width: 100%;
          height: 100%;
        }
      }
    }
    &__info {
      width: 50%;
      &-head {
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 10px;
      }
      &-branch {
        display: flex;
        margin-bottom: 20px;
        .branch {
          span:nth-child(2) {
            color: #008000;
            margin-left: 5px;
          }
          &:nth-child(1)::after {
            content: '/';
            margin-left: 7px;
            margin-right: 10px;
          }
        }
      }
      &-describle {
        color: #898989;
        padding-bottom: 40px;
        border-bottom: 1px solid #ebebeb;
        margin-bottom: 20px;
      }
      &-price {
        color: #f72b3f;
        font-size: 28px;
        margin-bottom: 30px;
      }
      &-size {
        margin-bottom: 20px;
        .size-head {
          color: #707070;
          margin-bottom: 10px;
        }
        .size-list {
          input[type='checkbox'],
          input[type='radio'] {
            display: inline;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 36px;
            position: absolute;
            background: transparent;
            outline: none;
            opacity: 0;
          }
          label {
            display: inline-block;
            height: 36px;
            margin-right: 5px;
            padding: 0 21px;
            line-height: 34px;
            text-align: center;
            border: 2px solid #ebebeb;
          }
          input:checked + label {
            border-color: #ff2a2d;
            color: #ff2a2d;
            font-weight: 400;
          }
          [class*='hint--']:after {
            background-color: #ff2a2d;
            width: 100px;
            height: 40px;
            line-height: 28px;
            text-align: center;
            color: white;
          }
          .hint--top:before {
            border-top-color: #ff2a2d;
          }
        }
        #white {
          background-color: #fff;
        }
        #black {
          background-color: black;
        }
      }
      &-color {
        .size-list {
          label {
            width: 60px;
          }
        }
      }
      &-number {
        display: flex;
        .number-count {
          display: flex;

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input {
            height: 55px;
            text-align: center;
            width: 85px;
            color: rgb(83, 83, 83);
            border: 1px solid #ebebeb;
          }

          span {
            height: 55px;
            line-height: 55px;
            width: 45px;
            color: #707070;
            text-align: center;
            cursor: pointer;
            font-size: 14px;
          }

          .num-decrease {
            border-right: none;
          }

          .num-increase {
            border-left: none;
          }
        }
        .number-btn {
          margin-left: 10px;
          a {
            height: 55px;
            line-height: 55px;
            background-color: #f72b3f;
            color: white;
            font-weight: 700;
            font-size: 20px;
            width: 230px;
            text-align: center;
            display: block;
            &:hover {
              background-color: #060085;
              color: white;
            }
          }
        }
      }
      &-hotline {
        margin-top: 30px;
        border-top: 1px solid #ebebeb;
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hotline-number {
          a {
            color: #f72b3f;
            font-size: 20px;
            margin-left: 5px;
            &:hover {
              color: #060085;
            }
          }
        }
        .hotline-pay {
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    .information {
      flex-wrap: wrap;
      &__img {
        width: 100%;
      }
      &__info {
        width: 100%;
      }
    }
    .zoomContainer {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .information {
      &__info {
        &-branch {
          flex-wrap: wrap;
          .branch {
            width: 100%;
            &:nth-child(1)::after {
              content: '';
            }
          }
        }
        &-number {
          flex-wrap: wrap;
          .number-count {
            width: 100%;
          }
          .number-btn {
            width: 100%;
            margin-left: 0;
            margin-top: 20px;
            a {
              width: 100%;
            }
          }
        }
        &-hotline {
          flex-wrap: wrap;
          .hotline-pay {
            width: 100%;
            margin-top: 10px;
          }
          .hotline-number {
            width: 100%;
          }
        }
      }
      &__img {
        &-thumb:hover {
          i {
            display: block;
          }
        }
      }
    }
  }
`;
