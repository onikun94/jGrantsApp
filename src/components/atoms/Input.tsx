import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputPropsType = {
  type: string;
  id?: string;
  onChange?: () => void;
  value?: string;
  placeholder?: string;
  name?: string;
  // register: UseFormRegister<FormType>;
  register?: UseFormRegisterReturn;
};

export const Input: React.VFC<InputPropsType> = ({
  type,
  id,
  onChange,
  value = '',
  placeholder = '',
  name,
  register,
}) => {
  return !register ? (
    <input
      className="px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      name={name}
    />
  ) : onChange !== undefined ? (
    <input
      className="px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      {...register}
    />
  ) : (
    <input
      className="px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      {...register}
    />
  );
};
