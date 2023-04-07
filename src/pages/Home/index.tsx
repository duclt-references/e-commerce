import Modal from '@/components/Modal';
import { useState } from 'react';
import Advertisement1 from './components/Advertisement/Advertisement1';
import Advertisement2 from './components/Advertisement/Advertisement2';
import Banner from './components/Banner';
import Category from './components/Category';
import Hotline from './components/Hotline';
import NewProducts from './components/NewProducts';
import News from './components/News';

const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal visible={visible} setVisible={setVisible} />
      <Banner />
      <Advertisement1 />
      <NewProducts setVisible={setVisible} />
      <Advertisement2 />
      <Category />
      <Hotline />
      <News />
    </>
  );
};

export default Home;
