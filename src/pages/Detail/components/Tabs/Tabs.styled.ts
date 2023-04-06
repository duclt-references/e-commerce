import styled from 'styled-components';

export const TabsStyle = styled.div`
  .tab {
    &__head {
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
      div {
        padding: 10px 30px;
        cursor: pointer;
        margin: 0px 10px 0 0;
        border: 2px solid #ebebeb;
        font-size: 18px;
      }
      &-select {
        border-color: #f72b3f !important;
      }
    }
    &__content {
      h2 {
        font-size: 24px;
        color: #707070;
        margin-bottom: 1rem;
      }
      p {
        color: #707070;
        margin-bottom: 15px;
        line-height: 1.2rem;
      }
    }
    &__policy {
      display: none;
      p {
        color: #707070;
        margin-bottom: 15px;
      }
    }
  }
`;
