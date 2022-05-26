import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { useForm } from 'react-hook-form';
import { getData } from '../api/getData';
import Layout from '../components/Layout';
import { SearchPage } from '../components/templates/SearchPage';
import indData from '../data/industry.json';
import prefData from '../data/prefecture.json';
import restData from '../data/restriction.json';
import sugData from '../data/suggest.json';
import { doHandleSubmit } from '../lib/handler';
import { SubsidyType } from '../types/subsidy';

type Props = {
  result: SubsidyType[];
  flag: boolean;
};

const TopPage: NextPage<Props> = ({ result, flag }) => {
  const wrapSubmit = (data) => {
    doHandleSubmit(data);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectData = [
    { key: 'ind', regName: 'industry', selectData: indData },
    { key: 'pre', regName: 'prefecture', selectData: prefData },
    { key: 'rest', regName: 'restriction', selectData: restData },
  ];
  return (
    <Layout>
      <SearchPage
        submit={handleSubmit(wrapSubmit)}
        suggestData={sugData}
        result={result}
        flag={flag}
        register={register}
        selectData={selectData}
      />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const keyword = context.query.keyword;
  const acceptance = Number(context.query.acceptance);
  const industry = context.query.industry;
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
