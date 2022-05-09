import React from 'react';
import { Heading, HeadingPropsType } from '../atoms/Heading';

const borderWeight = ['border-l-2', 'border-l-4', 'border-l-8'] as const;
const borderColor = ['border-l-gray-500', 'border-l-gray-600', 'border-l-blue-500'] as const;
type borderWeightType = typeof borderWeight[number];
type borderColorType = typeof borderColor[number];
interface BorderHeadingPropsType extends HeadingPropsType {
  borderWeight: borderWeightType;
  borderColor: borderColorType;
}
export const BorderHeading: React.VFC<BorderHeadingPropsType> = ({
  heading,
  textSize,
  borderWeight,
  borderColor,
}) => {
  return (
    <div className={borderWeight + ' ' + borderColor}>
      <Heading heading={heading} textSize={textSize} />
    </div>
  );
};
