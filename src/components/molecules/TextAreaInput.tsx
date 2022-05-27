import React from 'react';

import { Label } from '../atoms/Label';
import { TextArea } from '../atoms/TextArea';

type TextAreaInputPropsType = {
  name: string;
  textAreaName?: string;
};

export const TextAreaInput: React.VFC<TextAreaInputPropsType> = ({ name, textAreaName }) => {
  return (
    <div>
      <Label name={name} />
      <TextArea name={textAreaName} />
    </div>
  );
};
