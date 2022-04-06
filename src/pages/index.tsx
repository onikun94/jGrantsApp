import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";
import { getData } from "../api/getData";
import { Input } from "../components/atoms/input";
import Result from "../components/result";

const TopPage = ({ result }) => {
  //   const handleLog = () => {
  //     console.log("test");
  //   };
  //   console.log(result);
  console.log("TopPageRes = ", result);
  return (
    <>
      <p>hello</p>
      <p>hello</p>
      <Input />
      {result ? <Result res={result.result} /> : <Result res={[]} />}
      {/* <Result res={res.result} /> */}
      {/* <p>{keyword}</p>
      <p>{sort}</p>
      <p>{order}</p>
      <p>{acceptance}</p> */}
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const url = `https://api.jgrants-portal.go.jp/exp/v1/public/subsidies?keyword=補助金&sort=created_date&order=DESC&acceptance=1&target_area_search=静岡県`;
//   const result = await getData(url);
//   return {
//     props: { result: result },
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const keyword = context.query.keyword;
  const sort = context.query.sort;
  const order = context.query.order;
  const acceptance = context.query.acceptance;
  const url = `https://api.jgrants-portal.go.jp/exp/v1/public/subsidies?keyword=${keyword}&sort=${sort}&order=${order}&acceptance=${acceptance}`;
  const res = await getData(url);
  //   console.log("res = ", res.result);
  //   console.log("url = ", url);
  //   console.log("keyword!!!!!!=", keyword);
  //   console.log("sort = ", sort);
  //   console.log("order = ", order);
  //   console.log("acceptance = ", acceptance);
  if (keyword) {
    return {
      props: {
        // keyword: keyword,
        // sort: sort,
        // order: order,
        // acceptance: acceptance,
        result: res,
      },
    };
  } else {
    return {
      props: {
        // keyword: "",
      },
    };
  }
};
export default TopPage;
