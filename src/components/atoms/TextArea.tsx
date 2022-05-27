import React from 'react';

type TextAreaPropsType = {
  name?: string;
};

export const TextArea: React.VFC<TextAreaPropsType> = ({ name }) => {
  return (
    <textarea
      className="inline-block  py-1.5 px-3 m-2  text-base font-normal text-gray-700 focus:text-gray-700 align-middle bg-clip-padding bg-white focus:bg-white rounded-md border border-gray-300 focus:border-blue-600 border-solid focus:outline-none transition ease-in-out form-control"
      id=""
      name={name}
    ></textarea>
  );
};
