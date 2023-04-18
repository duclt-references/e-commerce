import styled from 'styled-components';

export const FilterStyle = styled.div`
  .filter {
    display: flex;
    &__item {
      width: 20%;
      position: relative;
      border: 1px solid #eee;

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
      &:hover .filter__list {
        display: block;
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
`;
