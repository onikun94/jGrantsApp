import { GetServerSideProps } from 'next';
import React from 'react';
import { getData } from '../api/getData';
import Card from '../components/atoms/Card';
import { Input } from '../components/atoms/Input';
import Layout from '../components/Layout';
import Result from '../components/result';

const TopPage = ({ result }) => {
  //   const handleLog = () => {
  //     console.log("test");
  //   };
  //   console.log(result);
  console.log('TopPageRes = ', result);
  return (
    <Layout>
      <h1 className="m-2">補助金を探す</h1>
      <Card>
        <Input />
      </Card>
      {result ? <Result res={result.result} /> : <Result res={[]} />}
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
  if (keyword) {
    url = `https://api.jgrants-portal.go.jp/exp/v1/public/subsidies?keyword=${keyword}&sort=${sort}&order=${order}&acceptance=${acceptance}&industry=${industry}&target_number_of_employees=${employ}`;
  }
  if (url) {
    const res = await getData(url);
    return {
      props: {
        result: res,
      },
    };
  } else {
    return {
      props: {
        result: { result: [] },
      },
    };
  }
};
export default TopPage;
