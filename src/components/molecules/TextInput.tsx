import React from 'react';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

type TextInputPropsType = {
  name: string;
  inputType: string;
  onChange?: () => void;
  value?: string;
  inputName?: string;
  register?: any;
};
export const TextInput: React.VFC<TextInputPropsType> = ({
  name,
  inputType,
  onChange,
  value,
  inputName,
  register,
}) => {
  return register ? (
    <div className="py-2">
      <Label name={name} />
      <Input
        type={inputType}
        id={name}
        onChange={onChange}
        value={value}
        name={inputName}
        register={register}
      />
    </div>
  ) : (
    <div className="py-2">
      <Label name={name} />
      <Input type={inputType} id={name} onChange={onChange} value={value} name={inputName} />
    </div>
  );
};
