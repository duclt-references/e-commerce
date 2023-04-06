import { RouteObject } from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import Collection from '../pages/Collection';
import Home from '../pages/Home';
import Detail from '@/pages/Detail';

const publicRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/collections',
        element: <Collection />,
      },
      {
        path: '/collections/:id',
        element: <Detail />,
      },
    ],
  },
];

export { publicRoutes };
