import React from 'react';

type ButtonPropsType = {
  name: string;
};

export const Button: React.VFC<ButtonPropsType> = ({ name }) => {
  return (
    <button className=" m-2 " type="submit">
      {name}
    </button>
  );
};
