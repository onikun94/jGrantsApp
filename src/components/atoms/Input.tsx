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
        className=" m-2 border border-solid  border-gray-300 bg-white bg-clip-padding text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        name={name}
      />
    ) : (
      <>
        <input
          className=" m-2 border border-solid  border-gray-300 bg-white bg-clip-padding text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
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
      className="  m-2 border border-solid  border-gray-300 bg-white bg-clip-padding text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      {...register}
    />
  ) : (
    <input
      className=" m-2 border border-solid border-gray-300 bg-white bg-clip-padding text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      {...register}
    />
  );
};
