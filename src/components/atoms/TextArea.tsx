import React from 'react';

type TextAreaPropsType = {
  name?: string;
};

export const TextArea: React.VFC<TextAreaPropsType> = ({ name }) => {
  return (
    <textarea
      className="rounded-md  align-middle form-control inline-block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id=""
      name={name}
    ></textarea>
  );
};
