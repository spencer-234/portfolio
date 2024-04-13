import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const form = useRef();

  const [sent, setSent] = useState(false);

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
          setSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleClose = (e) => {
    e.preventDefault();
    setSent(false);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <div className="line"></div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-section">
          <label>Name:</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="form-section">
          <label>Email:</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="form-section">
          <label>Message:</label>
          <textarea name="message" required />
        </div>
        <button type="submit" data="Send"></button>
      </form>
      {sent && (
        <div className="sentMessage">
          Message Sent!
          <button onClick={(e) => handleClose(e)}>OK</button>
        </div>
      )}
    </section>
  );
};

export default Contact;
