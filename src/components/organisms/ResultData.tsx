import React from 'react';

import { ButtonLink } from '../atoms/ButtonLink';
import { Heading } from '../atoms/Heading';

type ResultDataPropsType = {
  title: string;
  period: string;
  money: string;
  buttonLink: string;
  buttonName: string;
};

export const ResultData: React.VFC<ResultDataPropsType> = ({
  title,
  period,
  money,
  buttonLink,
  buttonName,
}) => {
  return (
    <div className=" p-8 mb-8 ">
      <Heading
        heading={title}
        textSize="text-xl"
        marginX="mx-4"
        border="border-b-2"
        custom="pb-1"
      />
      <Heading heading={period} textSize="text-md" marginX="mx-4" />
      <Heading heading={money} textSize="text-md" marginX="mx-4" marginY="my-2" />
      <ButtonLink hrefLink={buttonLink} linkName={buttonName} />
    </div>
  );
};
