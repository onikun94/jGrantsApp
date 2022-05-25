import React, { ReactNode, VFC } from 'react';

const bgColorList = ['bg-white', 'bg-gray-50', 'bg-red-50'] as const;
const roundList = ['rounded-sm', 'rounded-md', 'rounded-xl'] as const;

export type bgColorType = typeof bgColorList[number];
export type roundType = typeof roundList[number];

type CardPropsType = {
  round?: roundType;
  bgColor?: bgColorType;
  handleChange?: () => void;
  children?: ReactNode;
};
const Card: VFC<CardPropsType> = ({ round = 'rounded-sm', bgColor, handleChange, children }) => {
  return (
    <div className={round + ' ' + bgColor + ' ' + 'shadow'} onClick={handleChange}>
      {children}
    </div>
  );
};

export default Card;
