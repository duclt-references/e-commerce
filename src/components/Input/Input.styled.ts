import styled from 'styled-components';

export const InputStyle = styled.div`
  margin-bottom: 20px;
  label {
    font-size: 16px;
    font-weight: 700;
    span {
      color: rgb(247, 43, 63);
    }
  }
  input {
    height: 40px;
    width: 100%;
    border: 1px solid #d2d2d2;
    padding-left: 15px;
    border-radius: 4px;
    margin-top: 16px;
    &::placeholder {
      color: #b8b9b9;
      font-size: 14px;
    }
  }
  textarea {
    width: 100%;
    border: 1px solid #eaebf3;
    padding: 15px;
    height: 100px;
    outline: none;
  }
  .error {
    margin-top: 8px;
    color: rgb(247, 43, 63);
  }
`;
