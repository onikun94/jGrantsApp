import React from 'react';

import { SubsidyType } from '../../types/subsidy';
import { Heading } from '../atoms/Heading';
import { suggest } from '../organisms/SuggestData';
import ResultCard from './ResultCard';
import { SearchCard } from './SearchCard';

type SearchPagePropsType = {
  submit: () => any;
  suggestData: suggest[];
  result: SubsidyType[];
  flag: boolean;
  register: any;
  selectData: {
    key: string;
    regName: string;
    selectData: { name: string; value: string | number }[];
  }[];
};

export const SearchPage: React.FC<SearchPagePropsType> = ({
  submit,
  suggestData,
  result,
  flag,
  register,
  selectData,
}) => {
  return (
    <>
      <Heading heading="補助金を探す" textSize="text-2xl" marginY="my-4" weight="font-bold" />
      <SearchCard
        onSubmit={submit}
        SugData={suggestData}
        borderHeading="検索語・対象エリア・業種を選択してください"
        recoHeading="おすすめ検索ワード"
        selectData={selectData}
        register={register}
      />
      {result ? (
        flag ? (
          <ResultCard head="最新情報" borderColor="border-l-gray-600" res={result.slice(0, 3)} />
        ) : (
          <ResultCard head="検索結果" borderColor="border-l-blue-500" res={result} />
        )
      ) : (
        <ResultCard head="検索結果" borderColor="border-l-blue-500" res={[]} />
      )}
    </>
  );
};
