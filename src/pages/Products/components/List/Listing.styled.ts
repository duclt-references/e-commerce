import styled from 'styled-components';

export const ListingStyle = styled.div`
  background-color: #fefefe;
  padding: 30px 40px;
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 30px -30px;
    .product {
      width: 25%;
      padding: 0 15px;
      margin-bottom: 20px;
    }
  }
  .pagination {
    display: flex;
    margin-top: 80px;
    justify-content: center;
    ul {
      display: flex;
      li {
        a {
          display: block;
          height: 35px;
          width: 35px;
          line-height: 35px;
          text-align: center;
          background-color: #ebebeb;
          margin: 0 5px;
          &:hover {
            background-color: #f72b3f;
            color: white;
          }
        }
      }
      .paginaton--none {
        display: none;
      }
      .paginaton--select {
        a {
          background-color: #f72b3f;
          cursor: not-allowed;
          color: white;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    .list {
      .product {
        width: 33.33%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0;
    .list {
      .product {
        width: 50%;
      }
    }
    .pagination {
      ul {
        li {
          &:last-child {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 376px) {
    .pagination {
      margin-top: 60px;
      ul {
        li {
          a {
            width: 27px;
            height: 27px;
            line-height: 27px;
            font-size: 15px;
          }
        }
      }
    }
  }
`;
