import { ReactNode } from 'react';
import { Outlet } from 'react-router';
import { AdminLayoutStyle } from './AdminLayout.styled';
import Sidebar from './components/Sidebar';

interface Props {
  children?: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <AdminLayoutStyle>
      <Sidebar />
      <div className="content">{children}</div>
      <Outlet />
    </AdminLayoutStyle>
  );
};

export default AdminLayout;
