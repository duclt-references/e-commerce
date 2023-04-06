import Advertisement1 from './components/Advertisement/Advertisement1';
import Advertisement2 from './components/Advertisement/Advertisement2';
import Banner from './components/Banner';
import Category from './components/Category';
import NewProducts from './components/NewProducts';

const Home = () => {
  return (
    <>
      <Banner />
      <Advertisement1 />
      <NewProducts />
      <Advertisement2 />
      <Category />
    </>
  );
};

export default Home;
