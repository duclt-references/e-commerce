import styled from 'styled-components';

const HeaderStyle = styled.header`
  .top-header {
    height: 40px;
    background-color: #212121;
    .row-ct {
      justify-content: space-between;
      align-items: center;
      height: 40px;
      a {
        color: white;
        font-size: 15px;
        &:hover {
          color: #f72b3f;
        }
      }
      span {
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        margin: 0 7px;
      }
    }
  }

  .header {
    height: 100px;
    .row-ct {
      height: 100px;
      align-items: center;
    }
    &__icon {
      display: none;
    }
    &__img {
      width: calc(100% * 3 / 12);
    }
    &__menu {
      width: calc(100% * 7 / 12);
      height: 100%;
      &-list {
        padding: 0 0 0 35px;
        display: flex;
        height: 100%;
        margin-left: -7px;
        .mlist__item {
          position: relative;
          height: 100%;
          & > a {
            padding: 0 20px 0 20px;
            font-size: 15px;
            white-space: nowrap;
            height: 100%;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            i {
              margin-top: -5px;
              margin-left: 5px;
            }
          }
          &-submenu {
            visibility: hidden;
            position: absolute;
            top: 100%;
            left: 0px;
            z-index: 100;
            width: 215px;
            background-color: #fff;
            transform: perspective(600px) rotateX(-90deg);
            transition: transform 0.6s ease, opacity 0.8s ease,
              max-height 0.8s step-end, max-width 0.8s step-end,
              padding 0.8s step-end;
            transform-origin: 0% 0%;
            box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
            a {
              font-weight: 400;
              font-size: 15px;
              line-height: 24px;
              display: block;
              padding: 12px 20px 12px 20px;
              color: #252525;
              position: relative;
              text-align: left;
              &:hover {
                background-color: #f72b3f;
                color: white;
              }
            }
          }
          &:hover {
            background-color: #f72b3f;
            & > a {
              color: white;
            }
            .mlist__item-submenu {
              visibility: visible;
              transform: rotateX(0deg);
            }
          }
        }
        .mlist__item--select {
          background-color: #f72b3f;
          & > a {
            color: white;
          }
        }
      }
    }
    &__act {
      width: calc(100% * 2 / 12);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      &-search {
        position: relative;
        cursor: pointer;
        & > i {
          font-size: 18px;
          margin-right: 15px;
          margin-top: 10px;
        }
        &:hover .hsearch {
          display: block;
        }
        &::after {
          position: absolute;
          content: '';
          width: 60px;
          height: 20px;
          left: -30px;
          bottom: -20px;
        }
        .hsearch {
          display: none;
          position: absolute;
          width: 250px;
          height: 40px;
          z-index: 10;
          line-height: 40px;
          top: 50px;
          right: 5px;
          box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.4);
          input {
            height: 100%;
            width: 100%;
            padding: 0 40px 0 10px;
          }
          i {
            position: absolute;
            top: 10px;
            font-size: 16px;
            right: 10px;
          }
        }
      }
      &-cart {
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
          width: 30px;
          height: 30px;
          left: -5px;
          bottom: -30px;
        }
        &:hover .cart {
          display: block;
        }
      }
      .cart {
        display: none;
        position: absolute;
        top: 45px;
        right: 0px;
        background: #fff;
        padding: 0;
        text-align: left;
        width: 285px;
        padding: 15px 0px 15px 15px;
        box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        border-radius: 0px;
        .cart__list {
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
    }
  }

  .menu {
    position: fixed;
    top: 0;
    visibility: hidden;
    width: 100%;
    height: 100%;
    z-index: 100;
    .wrap {
      position: fixed;
      width: 100%;
      z-index: 100;
      background-color: rgba(36, 36, 36, 0.301);
      height: 100%;
    }
    .navbars {
      width: 280px;
      position: fixed;
      height: 100vh;
      left: -280px;
      z-index: 100;
      transition: all 0.3s ease-in-out;
      background-color: #ff0057;
      overflow-y: scroll;
      &__img {
        background-color: white;
        display: flex;
        justify-content: center;
        padding: 30px 0;
      }
      &__list {
        background-color: #ff0057;
        &-menu {
          padding: 0 15px;
        }
        .nlmenu__item {
          span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            border-top: 2px solid rgba(235, 235, 235, 0.302);
            padding: 10px 0 12px;
          }
          a {
            text-transform: uppercase;
            color: white;
          }
          .fa-minus {
            display: none;
          }
          ul {
            display: none;
            a {
              border-top: none;
              padding: 10px 0;
              padding-left: 25px;
              text-transform: none;
            }
          }
        }
      }
    }
  }

  .clitem__infor-number {
    display: flex;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input {
      height: 24px;
      text-align: center;
      width: 40px;
      color: rgb(83, 83, 83);
      border: none;
    }
    span {
      height: 24px;
      line-height: 24px;
      width: 24px;
      text-align: center;
      cursor: pointer;
      border: none;
    }
    .num-decrease {
      border-right: none;
    }
    .num-increase {
      border-left: none;
    }
  }

  .breadcrumbs {
    background-image: url(https://bizweb.dktcdn.net/100/369/492/themes/741260/assets/bg_breadcrumb.jpg?1572516554954);
    background-size: cover;
    background-repeat: no-repeat;
    .row-ct {
      padding: 60px 115px 70px;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 40px;
        color: white;
        margin-bottom: 15px;
      }
      ul {
        display: block;
        li {
          display: inline;
          color: white;
          margin: 0 5px;
          a {
            color: white;
            &:hover {
              color: #f72b3f;
            }
          }
          span {
            color: #f72b3f;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .header {
      &__menu {
        &-list {
          .mlist__item {
            & > a {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    .header {
      .row-ct {
        justify-content: space-between;
      }
      &__icon {
        display: block;
        font-size: 20px;
      }
      &__img {
        padding-left: 50px;
        width: auto;
      }
      &__menu {
        display: none;
      }
    }
    .breadcrumbs {
      background-position: center;
    }
  }

  @media screen and (max-width: 768px) {
    .topheader {
      .row-ct {
        justify-content: flex-end;
      }
      &__contact {
        display: none;
      }
    }
    .breadcrumbs {
      .row-ct {
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .header {
      &__img {
        padding-left: 0;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .breadcrumbs {
      .row-ct {
        h3 {
          font-size: 30px;
          text-align: center;
        }
        ul {
          text-align: center;
          li {
            a {
              font-size: 15px;
            }
            span {
              font-size: 15px;
              text-align: center;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 376px) {
    .header {
      &__img {
        img {
          max-width: 100%;
        }
      }
    }
  }
`;

export default HeaderStyle;
