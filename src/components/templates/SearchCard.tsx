import React from 'react';
import { Button } from '../atoms/Button';
import { TextInput } from '../molecules/TextInput';
import { SelectArea } from '../organisms/SelectArea';

type FormPropsType = {
  onSubmit: (e) => any;
  selectData: { key: string; regName: string; selectData: { name: string; value: string }[] }[];
  register: any;
};
export const SearchCard: React.FC<FormPropsType> = ({ onSubmit, selectData, register }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput name="test" inputType="text" register={register('keyword')} />
      <SelectArea selectData={selectData} register={register} />
      <Button name="検索" />
    </form>
  );
};
