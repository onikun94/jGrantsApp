import React from 'react';

export type SelectorPropsType = {
  selects: { value: string | number; name: string }[];
  register: any;
};

export const Selector: React.VFC<SelectorPropsType> = ({ selects, register }) => {
  return (
    <select className=" w-40" {...register}>
      {selects.map((s) => (
        <option key={s.value} value={s.value}>
          {s.name}
        </option>
      ))}
    </select>
  );
};
