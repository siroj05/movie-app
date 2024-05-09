import { HomePage } from '../features/home/page';
import { LoginPage } from '../features/login/page';
import { Navigate, useRoutes } from 'react-router-dom';
import Seller from '../features/seller/seller';

const allRoutes = () => {
  const clientRoutes = [
    {
      path: '/login',
      exact: true,
      element: <LoginPage />,
    },
    {
      path: '/',
      exact: true,
      element: <HomePage />,
    },
    {
      path: '/seller',
      exact: true,
      element: <Seller />,
    },
  ];

  // const catchAllRoute = {
  //   path: "*",
  //   element: <Navigate to="/login" />,
  // };
  return [...clientRoutes];
};

export default function AppRoutes() {
  const clientRoutes = allRoutes();
  return useRoutes(clientRoutes);
}

// return [...appRoutes, catchAllRoute];
