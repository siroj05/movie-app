import React, { ReactNode } from 'react';

interface LoginLayoutProps {
  children: ReactNode;
}

export const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="">{children}</div>
    </>
  );
};
