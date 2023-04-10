import styled from 'styled-components';

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;

  button {
    text-align: center;
    color: white;
    background-color: #f72b3f;
    height: 40px;
    line-height: 40px;
    border: 1px solid #f72b3f;
    padding: 0 16px;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      background-color: white;
      color: #f72b3f;
    }
  }
`;
