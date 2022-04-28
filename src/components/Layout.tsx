import React, { ReactNode, VFC } from 'react';
import Footer from './atoms/Footer';
import { Header } from './atoms/Header';

type LayoutPropsType = {
  children?: ReactNode;
};

const Layout: VFC<LayoutPropsType> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen  px-12 pt-6 mx-auto w-max  h-auto ">
      <Header src="/expact1.png" width="192" height="50" />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
