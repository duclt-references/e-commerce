import { PATH } from '@/config/path';
import AuthLayout from '@/layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
import Detail from '@/pages/Detail';
import Login from '@/pages/Login';
import Payment from '@/pages/Payment';
import Register from '@/pages/Register';
import { RouteObject } from 'react-router';
import Collection from '../pages/Collection';
import Home from '../pages/Home';

const publicRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: PATH.home,
        element: <Home />,
      },
      {
        path: PATH.products,
        element: <Collection />,
      },
      {
        path: PATH.productDetail,
        element: <Detail />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
        element: <Login />,
      },
      {
        path: PATH.register,
        element: <Register />,
      },
    ],
  },
  {
    element: <Payment />,
    path: 'payment',
  },
];

export { publicRoutes };
