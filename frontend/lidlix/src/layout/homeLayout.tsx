import React, { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="">{children}</div>
    </>
  );
};
