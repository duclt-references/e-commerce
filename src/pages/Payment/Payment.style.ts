import styled from 'styled-components';

export const PaymentStyle = styled.div`
  height: 100vh;
  overflow-x: hidden;
  position: relative;

  .payment {
    height: 100%;
    display: flex;
    max-width: 92em;
    margin: 0 auto;
    position: relative;

    &__infor {
      width: 68%;
      padding: 2em 2em 0 2em;

      &-head {
        margin-bottom: 20px;
        a {
          font-size: 28px;
          color: #2a9dcc;
          &:hover {
            color: #176f92;
          }
        }
      }

      &-main {
        display: flex;

        .main__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;

          i {
            display: none;
          }
          span {
            font-size: 18px;
            font-weight: 700;
          }

          a {
            color: #2a9dcc !important;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;

            i {
              display: block;
              font-size: 18px;
              margin-right: 5px;
            }

            &:hover {
              color: #2a6395 !important;
            }
          }
        }

        .main-left {
          width: 50%;
          padding-right: 15px;

          input,
          select,
          textarea {
            margin-bottom: 10px;
            border-radius: 4px;
            width: 100%;
            display: block;
            box-sizing: border-box;
            padding: 0.94em 15px 0.5em;
            border: 1px #d9d9d9 solid;
            height: 44px;
            background-color: #fff;
            font-size: 12px;

            &::placeholder {
              color: rgb(141, 141, 141);
            }
          }

          textarea {
            height: 60px;
          }
        }

        .main-right {
          width: 50%;
          padding-left: 15px;

          &__note {
            color: #2a9dcc;
            background-color: #d1ecf1;
            border-color: #bee5eb;
            padding: 0.7rem 1.25rem;
            margin-bottom: 40px;
            border: 1px solid transparent;
            border-radius: 0.25rem;
            font-size: 14px;
          }

          &__pay {
            border: 1px solid #cecdcd;
            border-radius: 5px;

            .payments {
              display: flex;
              align-items: center;
              padding: 10px;

              &__dot {
                height: 18px;
                width: 18px;
                position: relative;
                border-radius: 50%;
                background-color: #2a9dcc;

                &::before {
                  position: absolute;
                  content: '';
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  background-color: rgb(255, 255, 255);
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
              }

              &__text {
                font-size: 14px;
                width: 80%;
                margin-left: 10px;
              }

              &__icon {
                i {
                  font-size: 18px;
                  color: #2a9dcc;
                }
              }
            }

            .payment-note {
              background-color: #f8f8f8;
              padding: 30px 20px;
              font-size: 14px;
            }
          }

          &__btn {
            display: none;
          }
        }
      }
    }

    &__order {
      background-color: #fafafa;
      border-left: 1px solid #e1e1e1;
      width: 32%;
      padding-bottom: 20px;
      &-head {
        padding: 15px 25px;
        font-size: 19px;
        font-weight: 700;
        border-bottom: 1px solid #e1e1e1;
      }

      &-promotion {
        display: flex;
        border-top: 1px solid #e1e1e1;
        border-bottom: 1px solid #e1e1e1;
        margin-bottom: 10px;
        margin-left: 25px;
        padding: 20px 10px 20px 0px;

        input {
          border-radius: 4px;
          width: 100%;
          display: block;
          box-sizing: border-box;
          padding: 0.94em 0.8em;
          border: 1px #d9d9d9 solid;
          height: 44px;
          background-color: #fff;
          color: #333;
        }

        button {
          width: auto;
          margin-left: 0.85714em;
          white-space: nowrap;
          cursor: pointer;
          opacity: 0.7;
          background-color: #2a9dcc;
          border-color: #2f71a9;
          background-clip: border-box;
          box-sizing: border-box;
          border: 1px transparent solid;
          border-radius: 5px;
          color: #fff;
          font-weight: 500;
          height: 44px;
          line-height: 44px;
          padding: 0 20px;
          text-align: center;
        }
      }

      &-cal {
        display: flex;
        justify-content: space-between;
        margin-left: 25px;
        padding: 10px;
        padding-left: 0;

        span {
          font-size: 14px;
          color: #717171;
        }
      }

      &-total {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #e1e1e1;
        padding: 15px 10px 15px 0;
        margin-left: 25px;

        span:nth-child(2) {
          color: #2a9dcc;
          font-size: 21px;
        }
      }

      &-btn {
        display: flex;
        padding-left: 25px;
        justify-content: space-between;
        align-items: center;
        a {
          color: #2a9dcc;
          font-weight: 500;
          i {
            margin-right: 5px;
          }
        }
        button {
          width: auto;
          margin-left: 25px;
          white-space: nowrap;
          cursor: pointer;
          background-color: #2a9dcc;
          border-color: #2f71a9;
          background-clip: border-box;
          box-sizing: border-box;
          border: 1px transparent solid;
          border-radius: 5px;
          color: #fff;
          font-weight: 500;
          height: 44px;
          line-height: 44px;
          padding: 0 20px;
          text-align: center;
        }
      }

      &-list {
        overflow-y: auto;
        max-height: calc(100vh -450px);
        min-height: 50px;
        margin-bottom: 20px;
        margin-left: 25px;

        .list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 15px 0;

          &__left {
            display: flex;

            &-img {
              position: relative;
              width: 42px;
              height: 50px;

              img {
                width: 100%;
              }

              .number {
                background-color: #2a9dcc;
                color: white;
                position: absolute;
                top: -5px;
                right: -10px;
                width: 20px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                border-radius: 50%;
                font-size: 11px;
              }
            }

            &-infor {
              margin-left: 15px;
              margin-right: 15px;
              display: flex;
              flex-direction: column;

              .infor__name {
                font-size: 14px;
                color: #333;
                font-weight: 500;
              }

              .infor__size {
                display: none;
                font-size: 13px;
                color: #969696;
              }
            }
          }

          &__right {
            font-size: 14px;
            color: #717171;
            margin-right: 3px;
          }
        }
      }
    }
  }

  .payment-temp {
    height: 100%;
    position: absolute;
    right: -199%;
    width: 200%;
    background-color: #fafafa;
    top: 0;
    z-index: -1;
  }

  .form-item {
    position: relative;
    input {
      font-size: 13px;
    }
    label {
      position: absolute;
      top: 10px;
      left: 15px;
      color: #999;
      pointer-events: none;
      transition: all 0.5s;
    }
    input:focus ~ label,
    input:valid ~ label {
      transform: translateY(-7px);
      font-size: 12px;
    }
  }

  h2 {
    display: none;
  }

  .total {
    display: none;
  }

  @media screen and (max-width: 1350px) {
    .payment {
      max-width: 85em;
    }
  }

  @media screen and (max-width: 1200px) {
    .payment {
      max-width: 75em;
    }
  }

  @media screen and (max-width: 1050px) {
    .payment {
      max-width: 65em;
    }
  }

  @media screen and (max-width: 992px) {
    h2 {
      display: block;
      background-color: white;
      padding: 15px 0;
      margin-bottom: 0;
      text-align: center;
      border-bottom: 1px solid #e1e1e1;

      a {
        color: #2a9dcc !important;
        font-size: 28px;
      }
    }

    .total {
      display: block;
      border-bottom: 1px solid #e1e1e1;
      display: flex;
      justify-content: center;

      &-container {
        max-width: 560px;
        padding: 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-head {
        font-weight: 700;
        font-size: 18px;
      }

      &-link {
        font-size: 14px;
        margin-left: 5px;
        .la-angle-up {
          display: none;
        }

        i {
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }

    .payment-temp {
      //    width: 100%;
      //    left: 0;
      //height: 100%;
      display: none;
    }

    .payment {
      * {
        padding-left: 0;
        margin-left: 0;
      }

      flex-wrap: wrap;
      padding: 0;
      max-width: 100%;
      width: 100%;

      &__infor {
        width: 100%;
        order: 2;
        padding: 1.5em 0em 0;

        &-main {
          flex-wrap: wrap;
          max-width: 532px;
          width: 100%;
          margin: 0 auto;

          .main-left {
            width: 100%;
            padding-right: 0;
          }

          .main-right {
            width: 100%;
            padding-left: 0;

            &__btn {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 40px;
              a {
                color: #2a9dcc;
                font-size: 14px;
                i {
                  margin-right: 5px;
                }
              }
              button {
                width: 100%;
                margin-top: 10px;
                margin-bottom: 10px;
                white-space: nowrap;
                cursor: pointer;
                background-color: #2a9dcc;
                border-color: #2f71a9;
                background-clip: border-box;
                box-sizing: border-box;
                border: 1px transparent solid;
                border-radius: 5px;
                color: #fff;
                font-weight: 500;
                height: 44px;
                line-height: 44px;
                padding: 0 20px;
                text-align: center;
              }
            }
          }

          .main__head {
            i {
              display: inline;
              margin-right: 5px;
            }
          }
        }

        &-head {
          display: none;
        }
      }

      &__order {
        width: 100%;
        order: 1;
        border-left: none;
        height: auto;

        .row-1 {
          max-width: 532px;
          width: 100%;
          margin: 0 auto;
        }

        &-head {
          display: none;
        }

        &-btn {
          display: none;
        }

        &-promotion {
          padding: 10px 0;
        }

        &-total {
          padding-bottom: 0;
        }

        &-list {
          max-height: 100%;
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .payment {
      &__order {
        &-list {
          padding: 0 14px;
        }
      }

      &__infor {
        margin-top: 30px;
        padding: 0 14px;
      }
    }
  }

  @media screen and (max-width: 532px) {
    .payment__order .row-1 {
      padding: 0 15px;
    }
  }
`;
