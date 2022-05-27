import React from 'react';

import { CheckBox } from '../atoms/CheckBox';
import { Label } from '../atoms/Label';

type CheckBoxInputPropsType = {
  labelName: string;
  name: string;
  register: any;
};

export const CheckBoxInput: React.FC<CheckBoxInputPropsType> = ({ labelName, name, register }) => {
  return (
    <>
      <Label name={labelName} />
      <CheckBox name={name} register={register} />
    </>
  );
};
