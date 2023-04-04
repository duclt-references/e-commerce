import styled from 'styled-components';

export const FooterStyle = styled.footer`
  .email {
    margin-top: 40px;
    background-image: url(https://bizweb.dktcdn.net/100/369/492/themes/741260/assets/bg_footer.jpg?1594607980046);
    background-position: center;
    background-size: cover;
    .row-ct {
      padding: 60px 115px 80px;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 24px;
        color: white;
        text-transform: uppercase;
      }
      p {
        color: white;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 40px;
      }
      form {
        display: flex;
        width: 100%;
        button {
          padding: 0 55px;
          white-space: nowrap;
          background-color: #f72b3f;
          color: white;
          height: 50px;
          line-height: 50px;
          font-size: 15px;
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }
        input {
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          width: 100%;
          font-size: 15px;
          height: 50px;
          padding-left: 15px;
          &::placeholder {
            font-size: 14px;
            color: #9b9b9b;
          }
        }
      }
    }
  }
  .footer {
    padding-bottom: 30px;
    &__head {
      font-weight: 700;
      margin-top: 40px;
      margin-bottom: 30px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        display: none;
        font-size: 12px;
      }
    }
    a {
      color: #acacac;
      &:hover {
        color: #f72b3f;
      }
    }
    &__left {
      width: calc(100% * 4 / 12);
      &-store {
        margin-bottom: 15px;
        .store-name {
          font-weight: 700;
          margin: 10px 0;
        }
        .store-infor {
          &-address {
            color: #acacac;
          }
        }
      }
    }
    &__mid {
      width: calc(100% * 5 / 12);
      display: flex;
      &-menu {
        width: 50%;
      }
      ul {
        li {
          margin-bottom: 10px;
        }
      }
    }
    &__right {
      width: calc(100% * 3 / 12);
      &-head {
        margin-top: 10px;
        margin-bottom: 30px;
      }
      &-img {
        margin-top: -10px;
        img {
          max-width: 100%;
        }
      }
    }
  }
  .copyright {
    background-color: #212121;
    padding: 8px 0;
    color: white;
    display: flex;
    justify-content: center;
    a {
      color: #f72b3f;
    }
    div {
      height: 40px;
      display: flex;
      align-items: center;
    }
    div:nth-child(1)::after {
      content: '|';
      margin-left: 10px;
      margin-right: 5px;
    }
  }
  @media screen and (max-width: 768px) {
    .email {
      .row-ct {
        padding-left: 15px;
        padding-right: 15px;
        form {
          flex-wrap: wrap;
          button {
            width: 100%;
            margin-top: 10px;
            border-radius: 3px;
          }
          input {
            border-radius: 3px;
          }
        }
      }
    }
    .row-ct {
      flex-wrap: wrap;
    }
    .footer {
      &__head {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      &__left {
        width: 100%;
      }
      &__mid {
        width: 100%;
        flex-wrap: wrap;
        &-menu {
          width: 100%;
          .fa-plus {
            display: block;
          }
          ul {
            display: none;
          }
        }
      }
      &__right {
        width: 100%;
        &-head {
          margin-top: 30px;
        }
      }
    }
    .copyright {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 12px 0;
      div {
        height: 30px;
      }
      div:nth-child(1)::after {
        content: '';
      }
    }
  }
`;
