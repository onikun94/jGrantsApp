import React from 'react';

const textSizeList = ['text-xs', 'text-sm', 'text-md', 'text-xl', 'text-2xl', 'text-3xl'] as const;
const marginYList = ['my-1', 'my-2', 'my-4', 'my-6', 'my-8'];
export type textType = typeof textSizeList[number];
export type marginYType = typeof marginYList[number];

type HeadingPropsType = {
  heading: string;
  textSize: textType;
  marginY?: marginYType;
};

export const Heading: React.VFC<HeadingPropsType> = ({ heading, textSize, marginY = 'my-4' }) => {
  return <p className={textSize + ' ' + 'mx-2' + ' ' + marginY + ' '}>{heading}</p>;
};
