import React, { ReactNode, VFC } from 'react';
import Footer from './orgamisms/Footer';

type LayoutPropsType = {
  children?: ReactNode;
};

const Layout: VFC<LayoutPropsType> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen  px-12 pt-6 mx-auto w-max  h-auto ">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
