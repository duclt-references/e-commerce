import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
