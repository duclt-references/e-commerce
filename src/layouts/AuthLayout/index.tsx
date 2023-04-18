import Breadcrumb from '@/components/Breadcrumb';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../MainLayout/components/Footer';
import GotoTop from '../MainLayout/components/GotoTop';
import Header from '../MainLayout/components/Header';
import { AuthStyle } from './Auth.styled';

interface Props {
  children?: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <AuthStyle>
        {children}
        <Outlet />
      </AuthStyle>
      <Footer />
      <GotoTop />
    </>
  );
};

export default AuthLayout;
