import { ReactNode } from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import GotoTop from '../components/GotoTop';
import Header from '../components/Header';

interface Props {
  children?: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Outlet />
      <Footer />
      <GotoTop />
    </>
  );
};

export default MainLayout;
