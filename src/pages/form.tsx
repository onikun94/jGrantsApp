import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Card from '../components/atoms/Card';
import Layout from '../components/Layout';
import { subsidyState } from '../recoil/atoms/subsidy';
type FormPropsType = {
  subject: string;
};

const Form = () => {
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();
  const getTitle = useRecoilValue(subsidyState);
  const [titleValue, setTitleValue] = useState(`${getTitle}について`);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  const handleChange = (event) => {
    setTitleValue(event.target.value);
  };

  return (
    <Layout>
      <h1 className="m-2">お問い合わせ</h1>
      <Card>
        <form ref={form} onSubmit={sendEmail} className="mx-2">
          <label>
            名前
            <input type="text" name="user_name" />
          </label>
          <br />
          <label>
            Email
            <input type="email" name="user_email" />
          </label>
          <br />
          <label>
            件名
            <input type="text" name="subject" value={titleValue} onChange={handleChange} />
          </label>
          <br />
          <label>
            内容
            <textarea name="message" />
          </label>
          <br />
          <button type="submit" value="Send" />
        </form>
      </Card>
    </Layout>
  );
};

export default Form;
