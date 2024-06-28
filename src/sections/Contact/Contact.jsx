import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
    const form = useRef();

    const [sendingStatus, setSendingStatus] = useState({
        sending: false,
        sent: false,
    });

    useEffect(() => {
        if (sendingStatus.sent) {
            setTimeout(() => {
                setSendingStatus((prev) => ({ ...prev, sent: false }))
            }, 2000
            )
        }

    }, [sendingStatus.sent])

    const sendEmail = (e) => {
        e.preventDefault();
        setSendingStatus((prev) => ({ ...prev, sending: true }));

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
                    setSendingStatus((prev) => ({ ...prev, sent: true, sending: false }));
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Name" required />
                    <input type="email" name="user_email" placeholder="Email" required />
                    <textarea name="message" placeholder="Message" required />
                    <button type="submit" disabled={sendingStatus.sending}>
                        {sendingStatus.sending
                            ? "Sending..."
                            : sendingStatus.sent
                                ? "Message Sent!"
                                : "Send"
                        }
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;