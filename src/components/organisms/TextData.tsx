import React from 'react';
import { TextInput } from '../molecules/TextInput';

type TextDataPropsType = {
  forms: {
    formType: string;
    formName: string;
    inputName?: string;
    formChange?: () => void;
    formValue?: string;
  }[];
};

export const TextData: React.VFC<TextDataPropsType> = ({ forms }) => {
  return (
    <>
      {forms.map((f) =>
        f.formValue !== undefined ? (
          <TextInput
            key={f.formName}
            inputType={f.formType}
            name={f.formName}
            onChange={f.formChange}
            value={f.formValue}
            inputName={f.inputName}
          />
        ) : (
          <TextInput
            key={f.formName}
            inputType={f.formType}
            name={f.formName}
            value={''}
            inputName={f.inputName}
          />
        ),
      )}
    </>
  );
};
