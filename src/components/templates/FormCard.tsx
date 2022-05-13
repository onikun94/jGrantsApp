import React from 'react';
import { Button } from '../atoms/Button';
import Card, { bgColorType, roundType } from '../atoms/Card';
import { TextAreaInput } from '../molecules/TextAreaInput';
import { TextData } from '../organisms/TextData';

type FormCardPropsType = {
  forms: { formType: string; formName: string; inputName: string }[];
  bgColor?: bgColorType;
  rList?: roundType;
  refForm: any;
  submit: (e) => void;
};
export const FormCard: React.VFC<FormCardPropsType> = ({
  forms,
  bgColor,
  rList,
  refForm,
  submit,
}) => {
  return (
    <div className="text-center m-2 p-4">
      <form ref={refForm} onSubmit={submit}>
        <Card bgColor={bgColor} round={rList}>
          <TextData forms={forms} />
          <TextAreaInput name="内容" textAreaName="message" />
          <Button name="提出" />
        </Card>
      </form>
    </div>
  );
};
