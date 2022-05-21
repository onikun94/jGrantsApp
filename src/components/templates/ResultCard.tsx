import React from 'react';
import { SubsidyType } from '../../types/subsidy';
import Card from '../atoms/Card';
import { borderColorType, BorderHeading } from '../molecules/BorderHeading';
import { ResultData } from '../organisms/ResultData';

type resultPropsType = {
  head: string;
  borderColor: borderColorType;
  res: SubsidyType[];
};
const Result: React.VFC<resultPropsType> = ({ head, borderColor, res }) => {
  return (
    <>
      <BorderHeading
        borderWeight="border-l-4"
        borderColor={borderColor}
        heading={head}
        textSize="text-xl"
      />
      {res.map((result) => (
        <Card key={result.id} round="rounded-xl" bgColor="bg-white">
          <ResultData
            title={result.title.length > 30 ? `${result.title.substring(0, 40)}...` : result.title}
            period={`募集期間：${result.acceptance_start_datetime.substring(
              0,
              10,
            )}〜${result.acceptance_end_datetime.substring(0, 10)}`}
            money={`補助金額上限：${result.subsidy_max_limit}円`}
            buttonLink={`/contents/${result.id}`}
            buttonName="詳細"
          />
        </Card>
      ))}
    </>
  );
};

export default Result;
