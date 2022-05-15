import React from 'react';

type InputPropsType = {
  type: string;
  id?: string;
  onChange?: () => void;
  value?: string;
  placeholder?: string;
  name?: string;
};

export const Input: React.VFC<InputPropsType> = ({
  type,
  id,
  onChange,
  value = '',
  placeholder = '',
  name,
}) => {
  return onChange !== undefined ? (
    <input
      className="px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      name={name}
    />
  ) : (
    <input
      className="px-3 py-1.5  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
    />
  );
};
