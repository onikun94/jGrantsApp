import React, { ReactNode, VFC } from 'react';
type CardPropsType = {
  children?: ReactNode;
};
const Card: VFC<CardPropsType> = ({ children }) => {
  return <div className="  rounded-xl shadow bg-white   ">{children}</div>;
};

export default Card;
