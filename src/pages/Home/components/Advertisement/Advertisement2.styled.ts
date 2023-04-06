import styled from 'styled-components';

export const Advertisement2Style = styled.div`
  padding: 30px 0;
  .advertisement__item {
    width: 50%;
    a {
      width: 100%;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .advertisement {
      flex-wrap: wrap;
      &__item {
        width: 100%;
      }
    }
  }
`;
