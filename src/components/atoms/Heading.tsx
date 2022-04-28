import React from 'react';

const textSizeList = ['text-xs', 'text-sm', 'text-md', 'text-xl', 'text-2xl', 'text-3xl'] as const;
export type TextType = typeof textSizeList[number];

type HeadingPropsType = {
  heading: string;
  textSize: TextType;
};

export const Heading: React.VFC<HeadingPropsType> = ({ heading, textSize }) => {
  return <p className={textSize + ' ' + 'm-4'}>{heading}</p>;
};
