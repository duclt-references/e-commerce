import { PATH } from '@/config/path';
import { useAppSelector } from '@/hooks/useRedux';
import AdminLayout from '@/layouts/AdminLayout';
import MainLayout from '@/layouts/MainLayout';
import ProductList from '@/pages/Admin/Product/pages/List';
import Profile from '@/pages/Profile';
import { selectIsLoggedIn } from '@/store/auth/authSlice';
import { Navigate, Outlet, RouteObject } from 'react-router';

function ProtectedRoute() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

const protectedRoutes: RouteObject[] = [
  {
    path: '',
    element: <ProtectedRoute />,
    children: [
      {
        path: PATH.profile,
        element: (
          <MainLayout>
            <Profile />
          </MainLayout>
        ),
      },
    ],
  },
  {
    path: 'admin',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'product',
        element: (
          <AdminLayout>
            <ProductList />
          </AdminLayout>
        ),
      },
    ],
  },
];

export { protectedRoutes };
