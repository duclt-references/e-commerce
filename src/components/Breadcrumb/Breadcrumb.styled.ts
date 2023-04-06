import styled from 'styled-components';

export const BreadcrumbStyle = styled.div`
  background-image: url(https://bizweb.dktcdn.net/100/369/492/themes/741260/assets/bg_breadcrumb.jpg?1572516554954);
  background-size: cover;
  background-repeat: no-repeat;
  .row-ct {
    padding: 60px 115px 70px;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 40px;
      color: white;
      margin-bottom: 15px;
    }
    ul {
      display: block;
      li {
        display: inline;
        color: white;
        margin: 0 5px;
        a {
          color: white;
          &:hover {
            color: #f72b3f;
          }
        }
        span {
          color: #f72b3f;
        }
      }
    }
  }
`;
