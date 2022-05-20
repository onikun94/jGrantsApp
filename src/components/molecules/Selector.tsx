import React from 'react';

export type SelectorPropsType = {
  selects: { value: string; name: string }[];
  register: any;
};

export const Selector: React.VFC<SelectorPropsType> = ({ selects, register }) => {
  return (
    <select {...register}>
      {selects.map((s) => (
        <option key={s.value} value={s.value}>
          {s.name}
        </option>
      ))}
    </select>
  );
};
