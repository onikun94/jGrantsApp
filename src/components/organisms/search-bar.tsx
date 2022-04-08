import { GetStaticProps } from "next";
import React from "react";
import { getData } from "../../api/getData";

export const searchBar = (data) => {
  return (
    <>
      <p>receive Data</p>
      <p>{data}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const url = `https://api.jgrants-portal.go.jp/exp/v1/public/subsidies?keyword=補助金&sort=created_date&order=DESC&acceptance=1&target_area_search=静岡県`;
  const result = await getData(url);
  return {
    props: { result: result },
  };
};
