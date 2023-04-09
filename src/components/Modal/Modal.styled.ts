import styled from 'styled-components';

export const ModalStyle = styled.div`
  position: fixed;
  inset: 0px;
  z-index: 1200;
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  .modal {
    &:target {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }
    &__overlay {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      inset: 0px;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
      opacity: 1;
    }
    &__dialog {
      max-width: 880px;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      transform: translate(-50%, -50%);
      background: white;
      border-radius: 4px;
      z-index: 100;
    }
    &__col {
      width: 50%;
    }
    &__header {
      text-align: center;
      padding: 15px 0;
      border-bottom: 1px solid #ebebeb;
      &:nth-child(1) {
        border-right: 1px solid #ebebeb;
      }
    }
    &__content--left {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 200px;
        margin-top: 20px;
      }
      span {
        font-size: 1.2rem;
        margin: 10px 0;
        color: #555555;
      }
      p {
        font-size: 1rem;
        color: #f72b3f;
        margin-bottom: 30px;
      }
    }
    &__content--right {
      display: flex;
      flex-direction: column;
      .title {
        text-align: center;
        color: #555555;
        margin-top: 40px;
      }
      .price {
        font-size: 24px;
        margin-top: 5px;
        text-align: center;
      }
      .btn {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 30px;
        a {
          font-size: 16px;
          font-weight: bold;
          padding: 0 30px;
          text-transform: uppercase;
          margin-top: 15px;
          background: #f72b3f;
          height: 55px;
          text-align: center;
          border-radius: 3px;
          color: white;
          line-height: 55px;
          min-width: 230px;
          cursor: pointer;
        }
      }
    }
    &__close {
      color: #aaa;
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
      &:hover {
        color: black;
      }
      svg {
        font-size: 20px;
      }
    }
  }
  &.modal--visible {
    visibility: visible;
    opacity: 1;
  }
  &.modal--hidden {
    visibility: hidden;
    opacity: 0;
  }
  @media screen and (max-width: 992px) {
    .modal {
      &__dialog {
        width: 700px;
      }
    }

    @media screen and (max-width: 768px) {
      .modal {
        &__dialog {
          width: 95%;
          margin: auto;
          flex-wrap: wrap;
        }
        &__col {
          width: 100%;
        }
      }
    }
  }
`;
