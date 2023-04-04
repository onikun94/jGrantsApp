import React from 'react';

type TextAreaPropsType = {
  name?: string;
};

export const TextArea: React.VFC<TextAreaPropsType> = ({ name }) => {
  return (
    <textarea
      className="form-control  m-2 inline-block rounded-md  border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 align-middle text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
      id=""
      name={name}
    ></textarea>
  );
};
