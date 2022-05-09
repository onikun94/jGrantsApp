import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { getData } from '../api/getData';
import Card from '../components/atoms/Card';
import { Heading } from '../components/atoms/Heading';
import { Input } from '../components/Input';
import Layout from '../components/Layout';
import { BorderHeading } from '../components/molecules/BorderHeading';
import Result from '../components/result';
import { Suggest } from '../components/Suggest';
import { SubsidyType } from '../types/subsidy';

type Props = {
  result: SubsidyType[];
  flag: boolean;
};

const TopPage: NextPage<Props> = ({ result, flag }) => {
  console.log('reulsa  = ', flag);
  return (
    <Layout>
      <Heading heading="補助金を探す" textSize="text-2xl" marginY="my-4" weight="font-bold" />
      <BorderHeading
        borderWeight="border-l-4"
        borderColor="border-l-gray-500"
        heading="検索語・対象エリア・業種を選択してください"
        textSize="text-xl"
      />
      <Card round="rounded-xl" bgColor="bg-white">
        <div className="text-center">
          <Input />
        </div>
      </Card>
      <Heading heading="おすすめ検索ワード" textSize="text-md" marginY="my-1" />
      <Suggest />
      {result ? (
        flag ? (
          <>
            <BorderHeading
              borderWeight="border-l-4"
              borderColor="border-l-gray-600"
              heading="最新情報"
              textSize="text-xl"
            />
            <Result res={result.slice(0, 3)} />
          </>
        ) : (
          <>
            <BorderHeading
              borderWeight="border-l-4"
              borderColor="border-l-blue-500"
              heading="検索結果"
              textSize="text-xl"
            />
            <Result res={result} />
          </>
        )
      ) : (
        <Result res={[]} />
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const keyword = context.query.keyword;
  const sort = context.query.sort;
  const order = context.query.order;
  const acceptance = context.query.acceptance;
  const industry = context.query.industry;
  const employ = context.query.employ;
  let url: string;
  let initialFlag;
  if (keyword) {
    url = `https://api.jgrants-portal.go.jp/exp/v1/public/subsidies?keyword=${keyword}&sort=created_date&order=DESC&acceptance=${acceptance}&industry=${industry}&target_number_of_employees=従業員の制約なし`;
    initialFlag = false;
  } else {
    url = `https://api.jgrants-portal.go.jp/exp/v1/public/subsidies?keyword="事業"&sort=created_date&order=DESC&acceptance=1&target_number_of_employees=従業員の制約なし`;
    initialFlag = true;
  }

  if (url) {
    const res = await getData(url);
    return {
      props: {
        result: res.result,
        flag: initialFlag,
      },
    };
  } else {
    return {
      props: {
        result: { result: [] },
        flag: false,
      },
    };
  }
};
export default TopPage;
