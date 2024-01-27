import { HomePage } from '../pages/home/page';
import { LoginPage } from '../pages/login/page';
import { Navigate, useRoutes } from 'react-router-dom';

const allRoutes = () => {
  const clientRoutes = [
    {
      path: '/login',
      exact: true,
      element: <LoginPage />,
    },
    {
      path: '/home',
      exact: true,
      element: <HomePage />,
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
