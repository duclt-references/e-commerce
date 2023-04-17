import styled from 'styled-components';

export const PaginationStyle = styled.div`
  margin: 2rem 0;
  .pagination {
    display: flex;

    &__item {
      width: 40px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #ccc;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: rgb(46, 53, 61);
        color: #fff;
      }
    }

    &__item--active {
      background-color: rgb(46, 53, 61);
      color: #fff;
    }
  }
`;
