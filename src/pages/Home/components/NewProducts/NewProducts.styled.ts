import styled from 'styled-components';

export const NewProductsStyle = styled.div`
  padding: 0 30px;
  margin-top: 30px;

  h2 {
    text-align: center;
    position: relative;
    margin-bottom: 2rem;
    a {
      text-transform: uppercase;
      font-size: 26px;
      background-color: white;
      padding: 0 10px;
      &:hover {
        color: #f72b3f;
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      left: 50%;
      z-index: -1;
      background-color: #e8e8e8;
      top: 50%;
      transform: translate(-50%, 0);
    }
  }
`;
