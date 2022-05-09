import React from 'react';

const textSizeList = ['text-xs', 'text-sm', 'text-md', 'text-xl', 'text-2xl', 'text-3xl'] as const;
const marginYList = ['my-1', 'my-2', 'my-4', 'my-6', 'my-8'] as const;
const weightList = ['font-light', 'font-medium', 'font-semibold', 'font-bold'] as const;
export type textType = typeof textSizeList[number];
export type marginYType = typeof marginYList[number];
export type weightType = typeof weightList[number];

export interface HeadingPropsType {
  heading: string;
  textSize: textType;
  marginY?: marginYType;
  weight?: weightType;
}

export const Heading: React.VFC<HeadingPropsType> = ({
  heading,
  textSize,
  marginY = 'my-4',
  weight,
}) => {
  return <div className={textSize + ' ' + 'mx-2' + ' ' + marginY + ' ' + weight}>{heading}</div>;
};
