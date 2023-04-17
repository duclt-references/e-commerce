import styled from 'styled-components';

export const SidebarStyle = styled.div`
  overflow: auto;
  background-color: #2e353d;
  position: fixed;
  top: 0px;
  width: 300px;
  height: 100%;
  color: #e1ffff;

  .sidebar__logo {
    background-color: #23282e;
    line-height: 50px;
    display: block;
    text-align: center;
    font-size: 14px;
  }
  .menu {
    &__item {
      border-bottom: 1px solid #23282e;
      line-height: 40px;
      cursor: pointer;

      > a {
        display: block;
        padding-left: 16px;
        color: #e1ffff;
        border-left: 3px solid #2e353d;

        &:hover {
          border-left: 3px solid #d19b3d;
          background-color: #4f5b69;
        }
      }
    }

    &__item--active a {
      border-left-color: #d19b3d;
      background-color: #4f5b69;
    }
  }

  .submenu {
    &__item {
      padding-left: 32px;
      border-bottom: 1px solid #23282e;

      &:hover {
        background-color: #020203;
      }
      > a {
        color: #d19b3d;
      }
    }
  }

  .submenu--hide {
    display: none;
  }
  .submenu--show {
    display: block;
  }
`;
