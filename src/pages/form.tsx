import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
type FormPropsType = {
  subject: string;
};

const Form: React.VFC<FormPropsType> = ({ subject }) => {
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();

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

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>名前</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>件名</label>
      <input type="text" name="subject" value={`${subject}について`} />
      <label>内容</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;
