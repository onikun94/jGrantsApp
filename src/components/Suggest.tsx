import React from 'react';
import SugData from '../data/suggest.json';

export const Suggest: React.VFC = () => {
  const handleInsertWord = (name: string) => {
    let innerText = document.getElementById('inputText') as HTMLInputElement;
    innerText.value = name;
  };
  return (
    <div className="flex">
      {SugData.map((data) => {
        return (
          <div
            onClick={() => handleInsertWord(data.SName)}
            className="  m-2 p-4 bg-white  text-center rounded-xl cursor-pointer "
          >
            {data.SName}
          </div>
        );
      })}
    </div>
  );
};
