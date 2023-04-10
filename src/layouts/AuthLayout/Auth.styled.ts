import styled from 'styled-components';

export const AuthStyle = styled.div`
  width: 50%;
  margin: 50px auto 100px;
  .register {
    &__head {
      font-size: 18px;
      color: #323c3f;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 40px;
    }
    &__note {
      margin-top: 50px;
      text-align: center;
      a {
        text-decoration: underline;
        &:hover {
          color: #ff2a2d;
        }
      }
    }

    &__social {
      text-align: center;
      margin-top: 30px;
      &-link {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        a {
          display: block;
          margin: 0 2px;
          img {
            width: 129px;
            height: 37px;
          }
        }
      }
    }
    &__pw {
      display: none;
      margin-top: 40px;
    }
  }
  @media screen and (max-width: 992px) {
    .register {
      width: 100%;
      &__head {
        margin-bottom: 30px;
      }
    }
  }
`;
