import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputPropsType = {
  type: string;
  id?: string;
  onChange?: () => void;
  value?: string;
  placeholder?: string;
  name?: string;
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
    onChange !== undefined ? (
      <input
        className=" m-2 text-base font-normal  text-gray-700 focus:text-gray-700 bg-clip-padding bg-white focus:bg-white border border-gray-300 focus:border-blue-600 border-solid focus:outline-none transition ease-in-out"
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        name={name}
      />
    ) : (
      <>
        <input
          className=" m-2 text-base font-normal  text-gray-700 focus:text-gray-700 bg-clip-padding bg-white focus:bg-white border border-gray-300 focus:border-blue-600 border-solid focus:outline-none transition ease-in-out"
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          {...register}
        />
      </>
    )
  ) : onChange !== undefined ? (
    <input
      className="  m-2 text-base font-normal  text-gray-700 focus:text-gray-700 bg-clip-padding bg-white focus:bg-white border border-gray-300 focus:border-blue-600 border-solid focus:outline-none transition ease-in-out"
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      {...register}
    />
  ) : (
    <input
      className=" m-2 w-28 text-base font-normal text-gray-700 focus:text-gray-700 bg-clip-padding bg-white focus:bg-white border border-gray-300 focus:border-blue-600 border-solid focus:outline-none transition ease-in-out"
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      {...register}
    />
  );
};
