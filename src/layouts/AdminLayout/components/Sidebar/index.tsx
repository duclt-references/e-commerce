import { SidebarStyle } from './Sidebar.style';

const Sidebar = () => {
  return (
    <SidebarStyle className="sidebar">
      <div className="sidebar__logo">Logo</div>
      <div className="sidebar__menu">
        <ul className="menu">
          <li className="menu__item menu__item--active">
            <a href="/">Product</a>
          </li>
          <li className="menu__item">
            <a href="/">User</a>
            <ul className="submenu">
              <li className="submenu__item">
                <a href="/">List</a>
              </li>
              <li className="submenu__item">
                <a href="/">Order</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;
