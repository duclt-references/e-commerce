import MainLayout from '@/layouts/MainLayout';
import Profile from '@/pages/Profile';
import { Navigate, Outlet, RouteObject } from 'react-router';

const isAuthenticate = true;

function ProtectedRoute() {
  return isAuthenticate ? <Outlet /> : <Navigate to="/login" />;
}

const protectedRoutes: RouteObject[] = [
  {
    path: '',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'profile',
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
