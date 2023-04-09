import { RouteObject } from 'react-router';
import MainLayout from '@/layouts/MainLayout';
import Collection from '../pages/Collection';
import Home from '../pages/Home';
import Detail from '@/pages/Detail';
import { path } from '@/config/path';

const publicRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: path.home,
        element: <Home />,
      },
      {
        path: path.products,
        element: <Collection />,
      },
      {
        path: path.productDetail,
        element: <Detail />,
      },
    ],
  },
];

export { publicRoutes };
