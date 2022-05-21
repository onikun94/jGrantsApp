import React from 'react';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

type TextInputPropsType = {
  name?: string;
  inputType: string;
  onChange?: () => void;
  value?: string;
  inputName?: string;
  placeholder?: string;
  register?: any;
};
export const TextInput: React.VFC<TextInputPropsType> = ({
  name,
  inputType,
  onChange,
  value,
  inputName,
  placeholder,
  register,
}) => {
  return register ? (
    <div className="py-2  inline-block">
      <Input
        type={inputType}
        id={name}
        onChange={onChange}
        value={value}
        name={inputName}
        register={register}
        placeholder={placeholder}
      />
    </div>
  ) : (
    <div className="py-2 inline-block">
      <Label name={name} />
      <Input type={inputType} id={name} onChange={onChange} value={value} name={inputName} />
    </div>
  );
};
