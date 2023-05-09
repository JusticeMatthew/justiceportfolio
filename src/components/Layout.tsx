import type { FC, ReactElement } from 'react';
import { Header } from '@/components';
import ToasterProvider from '@/providers/ToasterProvider';

interface LayoutProps {
  children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <ToasterProvider>{children}</ToasterProvider>
    </>
  );
};

export default Layout;
