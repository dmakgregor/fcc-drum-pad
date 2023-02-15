import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="flex items-center justify-center bg-stone-100 w-full h-screen">{children}</div>;
};
