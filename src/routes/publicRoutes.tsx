import { path } from '@/config/path';
import AuthLayout from '@/layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
import Detail from '@/pages/Detail';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import { RouteObject } from 'react-router';
import Collection from '../pages/Collection';
import Home from '../pages/Home';

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
  {
    element: <AuthLayout />,
    children: [
      {
        path: path.login,
        element: <Login />,
      },
      {
        path: path.register,
        element: <Register />,
      },
    ],
  },
];

export { publicRoutes };
