import styled from 'styled-components';

export const ProductFormStyle = styled.div`
  .form {
    margin-top: 32px;

    &__group {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;

      label {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 16px;
        span {
          color: rgb(247, 43, 63);
        }
      }
      textarea {
        width: 50%;
        height: 200px;
        resize: none;
        outline: none;
        padding: 8px;
      }
      select {
        height: 40px;
        width: 200px;
        border: 1px solid rgb(210, 210, 210);
        background-color: #fff;
        outline: none;
      }

      .img-preview img {
        width: 200px;
        height: 200px;
        object-fit: cover;
      }

      .error {
        margin-top: 8px;
        color: rgb(247, 43, 63);
      }

      .form-file {
        position: relative;
        align-items: start;
        width: 200px;
        height: 40px;
      }

      .form-file input[type='file'] {
        display: none;
      }

      .form-file .label {
        display: flex;
        align-items: center;
        height: 32px;
        padding: 0 8px;
        border: 1px solid #ccc;
        cursor: pointer;
        outline: 0;
        border-radius: 4px;
        font-size: 0.8rem;
        background-color: #ced4da;
      }

      .form-file .label svg {
        margin-right: 8px;
      }

      .form-file .label-file span {
        color: #333;
      }
    }

    &__btn {
      justify-content: start;
    }
  }
`;
