import { PATH } from '@/config/path';
import MainLayout from '@/layouts/MainLayout';
import Profile from '@/pages/Profile';
import { selectIsLoggedIn } from '@/store/auth/authSlice';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, RouteObject } from 'react-router';

function ProtectedRoute() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
];

export { protectedRoutes };
