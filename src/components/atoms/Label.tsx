import React from 'react';

export type LabelPropsType = {
  name: string;
};

export const Label: React.FC<LabelPropsType> = ({ name }) => {
  return (
    <label className="m-2" htmlFor={name}>
      {name}
    </label>
  );
};
