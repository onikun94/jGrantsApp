import React from 'react';

import { Button } from '../atoms/Button';
import Card from '../atoms/Card';
import { Heading } from '../atoms/Heading';
import { BorderHeading } from '../molecules/BorderHeading';
import { CheckBoxInput } from '../molecules/CheckBoxInput';
import { TextInput } from '../molecules/TextInput';
import { SelectArea } from '../organisms/SelectArea';
import { suggest, SuggestData } from '../organisms/SuggestData';

type FormPropsType = {
  onSubmit: (e) => any;
  SugData: suggest[];
  borderHeading: string;
  recoHeading: string;
  selectData: {
    key: string;
    regName: string;
    selectData: { name: string; value: string | number }[];
  }[];
  register: any;
  setValue: any;
};
export const SearchCard: React.FC<FormPropsType> = ({
  onSubmit,
  SugData,
  borderHeading,
  recoHeading,
  selectData,
  register,
  setValue,
}) => {
  return (
    <>
      <BorderHeading
        borderWeight="border-l-4"
        borderColor="border-l-gray-500"
        heading={borderHeading}
        textSize="text-xl"
      />
      <Card bgColor="bg-white" round="rounded-xl">
        <div className="p-4 mb-8">
          <form onSubmit={onSubmit}>
            <div className=" inline-block">
              <div>
                <TextInput
                  name="inputText"
                  inputType="text"
                  placeholder="検索語"
                  register={register('keyword')}
                />
                <SelectArea selectData={selectData} register={register} />

                <CheckBoxInput
                  labelName="対象期間"
                  name="inputCheck"
                  register={register('restriction')}
                />
              </div>

              <div className=" text-center">
                <Button name="検索" />
              </div>
            </div>
          </form>
        </div>
      </Card>
      <Heading heading={recoHeading} textSize="text-md" marginY="my-1" />
      <SuggestData sgData={SugData} registerName={'keyword'} setValue={setValue} />
    </>
  );
};
