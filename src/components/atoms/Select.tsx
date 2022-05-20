import React, { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type SelectPropsType = {
  children: ReactNode;
  register: UseFormRegisterReturn;
  name: string;
};
export const Select: React.VFC<SelectPropsType> = ({ children, register }) => {
  return <select {...register}>{children}</select>;
};
