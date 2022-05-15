import React, { ReactNode } from 'react';

type SelectPropsType = {
  children: ReactNode;
  register: any;
  name: string;
};
export const Select: React.VFC<SelectPropsType> = ({ children, register, name }) => {
  return <select {...register(name)}>{children}</select>;
};
