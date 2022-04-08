import React, { ReactNode, VFC } from 'react';
type CardPropsType = {
  children?: ReactNode;
};
const Card: VFC<CardPropsType> = ({ children }) => {
  return <div className="m-2  text-center rounded-xl shadow ">{children}</div>;
};

export default Card;
