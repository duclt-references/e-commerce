import styled from 'styled-components';

export const CategoryStyle = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  .category {
    &__name {
      width: 25%;
      height: 410px;
      &-img {
        background-size: cover;
        background-position: center;
        height: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
      &-head {
        font-size: 30px;
        color: white;
        &:hover {
          color: #f72b3f;
        }
      }
      &-btn {
        height: 40px;
        line-height: 40px;
        text-transform: uppercase;
        padding: 0 25px;
        border: 1px solid white;
        color: white;
        &:hover {
          background-color: #f72b3f;
          border-color: #f72b3f;
        }
      }
    }
    &__list {
      width: 75%;
      position: relative;
      .prev-big,
      .next-big {
        display: none;
        position: absolute;
        top: 50%;
        height: 30px;
        width: 30px;
        z-index: 20;
        color: white;
        line-height: 30px;
        text-align: center;
        background-color: #f72b3f;
        &:hover {
          background-color: #060085;
        }
      }
      .prev-big {
        left: 0;
        cursor: pointer;
      }
      .next-big {
        right: 0;
        cursor: pointer;
      }
      .animate__animated {
        --animate-duration: 0.5s;
      }
      &:hover {
        .prev-big,
        .next-big {
          display: block;
        }
      }
    }
  }
  .category-laptops {
    .category__name-img {
      background-image: url(https://hacom.vn/media/lib/06-01-2022/tat-laptop-dung-cach-3.jpg);
    }
  }
  .category-smartphones {
    .category__name-img {
      background-image: url(https://thepixel.vn/wp-content/uploads/danh-sach-smartphone-oppo-nang-cap-coloros-13-thang-2-2023-the-pixel.jpg);
    }
  }
  .category-watches {
    .category__name-img {
      background-image: url(https://bizweb.dktcdn.net/100/405/172/themes/788999/assets/img_gallery_8.jpg?1635308630071);
    }
  }

  @media screen and (max-width: 992px) {
    .category {
      &__name {
        width: 33.33%;
        height: 300px;
        &-head {
          padding: 30px;
        }
        &-btn {
          margin-top: 0px;
        }
      }
      &__list {
        width: 66.67%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .category {
      .row-ct {
        flex-wrap: wrap;
      }
      &__name {
        width: 100%;
        height: 410px;
        margin-bottom: 30px;
        &-btn {
          margin-top: 130px;
        }
      }
      &__list {
        width: 100%;
      }
    }
  }
`;
