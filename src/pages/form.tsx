import emailjs from '@emailjs/browser';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Layout from '../components/Layout';
import { FormCard } from '../components/templates/FormCard';
import { subsidyState } from '../recoil/atoms/subsidy';

type FormPropsType = {
  subject: string;
};

const Form = () => {
  const serviceID = process.env.NEXT_PUBLIC_SERVICEID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_KEY;

  const form = useRef();
  const getTitle = useRecoilValue(subsidyState);
  const [titleValue, setTitleValue] = useState(`${getTitle}について`);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log('result = ', result.text);
      },
      (error) => {
        console.log('error = ', error.text);
      },
    );
  };

  const handleChange = (event) => {
    setTitleValue(event.target.value);
  };
  const formData = [
    { formType: 'text', formName: '名前', inputName: 'user_name' },
    { formType: 'email', formName: 'Email', inputName: 'user_email' },
    {
      formType: 'text',
      formName: '件名',
      inputName: 'subject',
      formChange: handleChange,
      formValue: titleValue,
    },
  ];

  return (
    <Layout>
      <Link href="/">
        <a className="m-2 w-1/6 cursor-pointer rounded-md border border-indigo-700 bg-transparent px-4 py-1 text-center font-medium text-indigo-700">
          戻る
        </a>
      </Link>
      <h1 className="m-2">お問い合わせ</h1>

      <FormCard
        refForm={form}
        submit={sendEmail}
        forms={formData}
        bgColor="bg-white"
        rList="rounded-md"
      />
    </Layout>
  );
};

export default Form;
