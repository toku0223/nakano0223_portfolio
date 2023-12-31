import { FC } from 'react';
import { LayoutProps } from '../types/types';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {/* <div className="flex flex-col items-center max-w-2xl w-full mx-auto"> */}
      <Navbar />
      <main className="w-full pt-12 pb-12">{children}</main>
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default Layout;
