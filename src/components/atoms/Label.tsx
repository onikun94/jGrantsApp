import React from 'react';

export type LabelPropsType = {
  name: string;
};

export const Label: React.FC<LabelPropsType> = ({ name }) => {
  return <label htmlFor={name}>{name}</label>;
};
