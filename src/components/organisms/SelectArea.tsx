import React from 'react';
import { Selector } from '../molecules/Selector';

export type SelectAreaPropsType = {
  selectData: {
    key: string;
    regName: string;
    selectData: { name: string; value: string | number }[];
  }[];
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
