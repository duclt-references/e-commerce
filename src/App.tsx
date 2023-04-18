import { ToastContainer } from 'react-toastify';
import GlobalStyle from './assets/styles/global.styled';
import { useRouteElements } from './routes/useRouteElements';

const App = () => {
  const routeElements = useRouteElements();

  return (
    <>
      <GlobalStyle />
      {routeElements}
      <ToastContainer />
    </>
  );
};

export default App;
