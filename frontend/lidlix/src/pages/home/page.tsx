import React from 'react';
import Home from './home';
import { HomeLayout } from '../../layout/homeLayout';

export const HomePage = () => {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  );
};
