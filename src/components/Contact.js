import {useRef} from "react";
import emailjs from '@emailjs/browser';
import React from "react";
import "../indexx.css";

const Mail = () => {
  

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gzgx00g', 'template_9ccv3r7', form.current , 'ki1b4GA_AQr6J3VKt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e .target.reset()
  };

  
  return (
    <>
    <h1> contact us easily </h1>

    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  

    </>
  );
}

export default Mail;