import React from 'react';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

type TextInputPropsType = {
  name: string;
  inputType: string;
  onChange?: () => void;
  value?: string;
  inputName: string;
};
export const TextInput: React.VFC<TextInputPropsType> = ({
  name,
  inputType,
  onChange,
  value,
  inputName,
}) => {
  return (
    <div className="py-2">
      <Label name={name} />
      <Input type={inputType} id={name} onChange={onChange} value={value} name={inputName} />
    </div>
  );
};
