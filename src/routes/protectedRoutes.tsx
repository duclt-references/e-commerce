import { PATH } from '@/config/path';
import { useAppSelector } from '@/hooks/useRedux';
import AdminLayout from '@/layouts/AdminLayout';
import MainLayout from '@/layouts/MainLayout';
import ProductForm from '@/pages/Admin/Product/pages/Form';
import ProductList from '@/pages/Admin/Product/pages/List';
import Order from '@/pages/Order';
import Payment from '@/pages/Payment';
import Profile from '@/pages/Profile';
import { selectCurrentUser, selectIsLoggedIn } from '@/store/auth/authSlice';
import { Navigate, Outlet, RouteObject } from 'react-router';

function ProtectedRoute() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

function AdminRoute() {
  const currentUser = useAppSelector(selectCurrentUser);
  return currentUser?.role === 'admin' ? <Outlet /> : <Navigate to="/" />;
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
      {
        path: PATH.order,
        element: (
          <MainLayout>
            <Order />
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
        path: '',
        element: <AdminRoute />,
        children: [
          {
            path: 'product',
            element: (
              <AdminLayout>
                <ProductList />
              </AdminLayout>
            ),
          },
          {
            path: 'product/add',
            element: (
              <AdminLayout>
                <ProductForm />
              </AdminLayout>
            ),
          },
          {
            path: 'product/edit/:id',
            element: (
              <AdminLayout>
                <ProductForm />
              </AdminLayout>
            ),
          },
        ],
      },
    ],
  },
  {
    element: <Payment />,
    path: 'payment',
  },
];

export { protectedRoutes };
