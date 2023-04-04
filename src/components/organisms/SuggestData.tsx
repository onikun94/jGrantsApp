import React from 'react';

import { handleInsertWord } from '../../lib/handler';
import Card from '../atoms/Card';

export type suggest = {
  Skey: number;
  SName: string;
};

type SuggestDataPropsType = {
  sgData: suggest[];
  registerName: string;
  setValue: any;
};

export const SuggestData: React.VFC<SuggestDataPropsType> = ({
  sgData,
  registerName,
  setValue,
}) => {
  return (
    <>
      {sgData.map((sg) => (
        <div key={sg.Skey} className="inline-block  m-2 cursor-pointer">
          <Card
            round="rounded-md"
            bgColor="bg-white"
            handleChange={() => handleInsertWord(sg.SName, registerName, setValue)}
          >
            <div className="py-2 px-4">{sg.SName}</div>
          </Card>
        </div>
      ))}
    </>
  );
};
