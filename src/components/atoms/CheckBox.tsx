import React from 'react';

type CheckBoxPropsType = {
  name: string;
  register: any;
};

export const CheckBox: React.FC<CheckBoxPropsType> = ({ name, register }) => {
  return <input type="checkbox" name={name} {...register} />;
};
