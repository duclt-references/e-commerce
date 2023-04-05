import GlobalStyle from './assets/styles/global.styled';
import { useRouteElements } from './routes/useRouteElemets';

const App = () => {
  const routeElements = useRouteElements();

  return (
    <>
      <GlobalStyle />
      {routeElements}
    </>
  );
};

export default App;
