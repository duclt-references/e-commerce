import styled from 'styled-components';

export const AdminLayoutStyle = styled.div`
  .content {
    position: fixed;
    top: 0px;
    left: 300px;
    width: calc(100% - 300px);
    height: 100%;
    padding: 15px;
    overflow-y: scroll;

    .head {
      padding: 16px 32px;
      background-color: rgb(46, 53, 61);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      font-size: 20px;
      color: #fff;
      font-weight: 600;
    }
  }
`;
