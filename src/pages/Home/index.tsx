import Modal from '@/components/Modal';
import { ModalProvider } from '@/contexts/modal.context';
import Advertisement1 from './components/Advertisement/Advertisement1';
import Advertisement2 from './components/Advertisement/Advertisement2';
import Banner from './components/Banner';
import Category from './components/Category';
import Hotline from './components/Hotline';
import NewProducts from './components/NewProducts';
import News from './components/News';

const Home = () => {
  return (
    <ModalProvider>
      <Modal />
      <Banner />
      <Advertisement1 />
      <NewProducts />
      <Advertisement2 />
      <Category category="laptops" title="Laptops" />
      <Category category="smartphones" title="Smartphones" />
      <Category category="watches" title="Watches" />
      <Hotline />
      <News />
    </ModalProvider>
  );
};

export default Home;
