import { useRoutes } from 'react-router';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

export function useRouteElements() {
  const routeElements = useRoutes([...publicRoutes, ...protectedRoutes]);

  return routeElements;
}
