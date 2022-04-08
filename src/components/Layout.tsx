import React, { ReactNode, VFC } from 'react';

type LayoutPropsType = {
  children?: ReactNode;
};

const Layout: VFC<LayoutPropsType> = ({ children }) => {
  return <div className="mx-auto w-3/5">{children}</div>;
};

export default Layout;
