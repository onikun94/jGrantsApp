import React, { ReactNode, VFC } from 'react';

type LayoutPropsType = {
  children?: ReactNode;
};

const Layout: VFC<LayoutPropsType> = ({ children }) => {
  return <div className=" p-12 w-max h-auto ">{children}</div>;
};

export default Layout;
