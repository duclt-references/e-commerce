import styled from 'styled-components';

export const Advertisement1Style = styled.div`
  .advertisement {
    padding: 50px 0;
    &__item {
      width: 33.33%;
      a {
        overflow: hidden;
      }
      img {
        max-width: 100%;
        transition: all 0.5s;
      }
      a:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
`;
