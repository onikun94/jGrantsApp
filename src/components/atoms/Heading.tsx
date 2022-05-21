import React from 'react';

const textSizeList = ['text-xs', 'text-sm', 'text-md', 'text-xl', 'text-2xl', 'text-3xl'] as const;
const marginYList = ['my-1', 'my-2', 'my-4', 'my-6', 'my-8'] as const;
const marginXList = ['mx-1', 'mx-2', 'mx-4', 'mx-6', 'mx-8'] as const;
const borderBList = ['border-b-0', 'border-b-2', 'border-b-4', 'border-b-8'] as const;
const weightList = ['font-light', 'font-medium', 'font-semibold', 'font-bold'] as const;
export type textType = typeof textSizeList[number];
export type marginYType = typeof marginYList[number];
export type marginXType = typeof marginXList[number];
export type borderBType = typeof borderBList[number];
export type weightType = typeof weightList[number];

export interface HeadingPropsType {
  heading: string;
  textSize: textType;
  marginY?: marginYType;
  marginX?: marginXType;
  border?: borderBType;
  weight?: weightType;
  custom?: string;
}

export const Heading: React.VFC<HeadingPropsType> = ({
  heading,
  textSize,
  marginY = 'my-4',
  marginX = 'mx-2',
  border,
  weight,
  custom,
}) => {
  return (
    <div
      className={
        textSize + ' ' + marginX + ' ' + marginY + ' ' + border + ' ' + weight + ' ' + custom
      }
    >
      {heading}
    </div>
  );
};
