import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <div className="line"></div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-section">
          <label>Name:</label>
          <input type="text" name="user_name" />
        </div>
        <div className="form-section">
          <label>Email:</label>
          <input type="email" name="user_email" />
        </div>
        <div className="form-section">
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button type="submit" data="Send"></button>
      </form>
    </section>
  );
};

export default Contact;
