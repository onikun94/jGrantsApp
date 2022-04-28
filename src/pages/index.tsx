import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { getData } from '../api/getData';
import Card from '../components/atoms/Card';
import { Input } from '../components/atoms/Input';
import Layout from '../components/Layout';
import Result from '../components/result';
import { SubsidyType } from '../types/subsidy';

type Props = {
  result: SubsidyType[];
  flag: boolean;
};

const TopPage: React.VFC<Props> = ({ result, flag }) => {
  console.log('reulsa  = ', flag);
  return (
    <Layout>
      <Image src="/expact1.png" width="192" height="50" objectFit="contain" alt="icon" />
      <h1 className="m-2 text-2xl">補助金を探す</h1>
      <h2 className="m-4">検索語・対象エリア・業種を選択してください</h2>

      <Card>
        <div className="text-center">
          <Input />
        </div>
      </Card>
      {result ? (
        flag ? (
          <Result res={result.slice(0, 3)} />
        ) : (
          <Result res={result} />
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
