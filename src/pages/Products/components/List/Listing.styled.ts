import styled from 'styled-components';

export const ListingStyle = styled.div`
  background-color: #fefefe;
  padding: 30px 40px;
  .filter {
    display: flex;
    border: 1px solid #ebebeb;
    &__item {
      width: 20%;
      position: relative;
      .color {
        display: flex;
        position: relative;
        background-color: white;
        z-index: 20;
        align-items: center;
        padding: 10px;
        &-item {
          display: flex;
          align-items: center;
          margin-right: 5px;
          input {
            display: none;
          }
          label {
            width: 20px;
            margin-bottom: 0;
            height: 20px;
            border-radius: 50%;
            text-align: center;
            position: relative;
            &::before {
              content: '';
              display: none;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: #fff;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          input[type='checkbox']:checked + label {
            &::before {
              display: block;
            }
          }
          input[type='checkbox']:hover + label {
            &::before {
              display: block;
            }
          }
          #yellow + label {
            background-color: #ffc815;
          }
          #red + label {
            background-color: #ff003f;
          }
          #green + label {
            background-color: #00dd70;
          }
          #blue + label {
            background-color: #b031b6;
          }
        }
      }
      .size {
        position: relative;
        background-color: white;
        z-index: 20;
        margin-top: 10px;
        padding-bottom: 20px;
        max-height: 235px;
        overflow-y: scroll;
        /* width */
        &::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #8d99a8;
          border-radius: 10px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        &-item {
          display: flex;
          align-items: center;
          margin-right: 5px;
          padding: 5px 10px;
          input {
            display: none;
          }
          span {
            font-size: 12px;
          }
          label {
            margin-right: 10px;
            width: 20px;
            margin-bottom: 0;
            height: 20px;
            border: 2px solid #ebebeb;
            border-radius: 50%;
            text-align: center;
            position: relative;
            &::before {
              content: '';
              display: none;
              width: 11px;
              height: 11px;
              border-radius: 50%;
              background-color: #f72b3f;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          input[type='checkbox']:checked + label {
            border-color: #f72b3f;
            &::before {
              display: block;
            }
          }
        }
      }
      .sort {
        position: relative;
        background-color: white;
        z-index: 20;
        margin-top: 10px;
        margin-bottom: 20px;
        li {
          padding: 5px 10px;
        }
        a {
          font-size: 12px;
          &:hover {
            color: #f72b3f;
          }
        }
      }
    }
    &__head {
      height: 45px;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      i {
        display: block;
        height: 20px;
        width: 20px;
      }
    }
    &__list {
      display: none;
      border: 1px solid #ebebeb;
      position: absolute;
      width: 100%;
      background-color: white;
      box-shadow: 0px 1px 31.85px 3.15px rgba(0, 0, 0, 0.07);
      &--menu {
        position: relative;
        background-color: white;
        z-index: 20;
        padding: 15px 10px;
        li {
          padding: 7px 0;
          font-size: 13px;
          font-weight: 500;
          div {
            display: flex;
            justify-content: space-between;
            .fa-angle-up {
              display: none;
            }
          }
        }
        & > li:hover {
          a {
            color: #f72b3f;
          }
          color: #f72b3f;
          .cmitem__list-submenu {
            a {
              color: #252525;
              &:hover {
                color: #f72b3f;
              }
            }
          }
        }
      }
      &--submenu {
        margin-top: 10px;
        padding: 0 18px;
        display: none;
      }
    }
    &__item--cate,
    &__item--size,
    &__item--color {
      border-right: 1px solid #ebebeb;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 30px -30px;
    .product {
      width: 25%;
      padding: 0 15px;
      margin-bottom: 20px;
    }
  }
  .pagination {
    display: flex;
    margin-top: 80px;
    justify-content: center;
    ul {
      display: flex;
      li {
        a {
          display: block;
          height: 35px;
          width: 35px;
          line-height: 35px;
          text-align: center;
          background-color: #ebebeb;
          margin: 0 5px;
          &:hover {
            background-color: #f72b3f;
            color: white;
          }
        }
      }
      .paginaton--none {
        display: none;
      }
      .paginaton--select {
        a {
          background-color: #f72b3f;
          cursor: not-allowed;
          color: white;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .filter {
      position: fixed;
      top: 0;
      z-index: 100;
      right: -256px;
      transition: all 0.2s;
      width: 256px;
      height: 100%;
      background-color: #f3f3f3;
      .row-ct {
        flex-direction: column;
        height: 100%;
        padding: 20px;
        background-color: #f3f3f3;
      }
      &__item {
        width: 100%;
        border: 1px solid #d4d4d4;
      }
      &__head {
        font-size: 13px;
      }
      &__list {
        position: static;
      }
      &__item--cate,
      &__item--color,
      &__item--size {
        border-bottom: none;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .list {
      .product {
        width: 33.33%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0;
    .list {
      .product {
        width: 50%;
      }
    }
    .pagination {
      ul {
        li {
          &:last-child {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 376px) {
    .pagination {
      margin-top: 60px;
      ul {
        li {
          a {
            width: 27px;
            height: 27px;
            line-height: 27px;
            font-size: 15px;
          }
        }
      }
    }
  }
`;
