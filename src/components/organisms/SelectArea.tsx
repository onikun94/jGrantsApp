import React from 'react';
import { Selector } from '../molecules/Selector';
//1つ1つのデータ
type selectData = {
  value: string;
  name: string;
};
//選択肢のデータ
type selectorData = {
  key: string;
  value: selectData[];
};
//すべての選択肢のデータ
type allData = {
  all: selectorData[];
  register: any;
};
export type SelectAreaPropsType = {
  selectData: { key: string; regName: string; selectData: { name: string; value: string }[] }[];
  register: any;
};

export const SelectArea: React.VFC<SelectAreaPropsType> = ({ selectData, register }) => {
  return (
    <>
      {selectData.map((sel) => (
        <Selector key={sel.key} selects={sel.selectData} register={register(sel.regName)} />
      ))}
    </>
  );
};
